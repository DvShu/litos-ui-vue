<script lang="ts">
import { defineComponent, h, ref, useTemplateRef, onMounted, VNode, PropType, Transition, withDirectives, vShow } from "vue";
import ArrowLeft from "../icon/ArrowLeft.vue";
import ArrowRight from "../icon/ArrowRight.vue";
import { shouldEventNext } from 'ph-utils/dom'

export default defineComponent({

  props: {
    /** 轮播高度 */
    height: {
      type: String,
      required: false
    },
    /** 是否无缝轮播 */
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    /** 箭头显示方式 */
    arrows: {
      type: String as PropType<'always' | 'hover' | 'never'>,
      required: false,
      default: 'hover'
    },
    /** 当前索引 */
    currentIndex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props, { slots }) {

    let allIndex = -1;
    const rootEl = useTemplateRef<HTMLElement>('root');
    const containerEl = useTemplateRef<HTMLDivElement>('container');
    let currentIndex = props.loop ? props.currentIndex + 1 : props.currentIndex;
    let clientWidth = -1; // 容器宽度
    let tranlateX = 0; // 当前偏移量
    /* 手势 */
    let startX = 0; // 开始的X坐标
    let isDragging = false; // 是否正在拖动
    let startTime = 0; // 拖动开始时间
    let movingT = 0; // 滑动定时, 避免抖动
    const showArrows = ref(false);

    function initContainerStyle() {
      if (allIndex > 0 && clientWidth > 0 && containerEl.value) {
        let containerStyle = "";
        const offset = Math.floor(currentIndex * clientWidth * -1);
        containerStyle = `transform:translateX(${offset}px);`;
        const containerWidth = Math.floor(clientWidth * (allIndex + 1));
        containerStyle += `min-width:${containerWidth}px;`;
        tranlateX = offset;
        containerEl.value.style.cssText = containerStyle;
      }
    }

    function renderItems(defaultSlot: any): VNode[] {
      let resItems: VNode[] = [];
      if (defaultSlot) {
        let items = defaultSlot() as VNode[];
        if (items[0].component == null) {
          items = items[0].children as VNode[];
        }
        const itemsLen = items.length;
        if (props.loop && itemsLen > 1) {
          allIndex = items.length + 1;
          resItems = [{...items[itemsLen - 1], key: null}, ...items, {...items[0], key: null}]
        } else {
          allIndex = items.length - 1;
          resItems = items;
        }
      }
      initContainerStyle();
      return resItems;
    }

    onMounted(() => {
      if (rootEl.value) {
        clientWidth = rootEl.value.clientWidth;
        rootEl.value.style.setProperty("--carousel-width", `${rootEl.value.clientWidth}px`);
        initContainerStyle();
      }
    });

    function restoreTranslate() {
      if (containerEl.value) {
        containerEl.value.style.transition = "transform 0.3s";
        requestAnimationFrame(() => {
          (containerEl.value as any).style.transform = `translateX(${tranlateX}px)`;
        });
        containerEl.value.addEventListener(
          "transitionend",
          () => {
            (containerEl.value as any).style.transition = "";
          },
          { once: true }
        );
      }

    }

    function toggleContent(newIndex: number) {
      if (containerEl.value) {
        containerEl.value.style.transition = "transform 0.3s";
        const offset = Math.floor(newIndex * clientWidth * -1);
        requestAnimationFrame(() => {
          (containerEl.value as any).style.transform = `translateX(${offset}px)`;
        });
        containerEl.value.addEventListener(
          "transitionend",
          () => {
            (containerEl.value as any).style.transition = "";
            let o = offset;
            if (props.loop && newIndex === allIndex + 2) {
              // 无缝轮播，最右边跳到开头
              o = Math.floor(clientWidth * -1); // 计算偏移量
            } else if (props.loop && newIndex === 0) {
              // 无缝轮播，最左边跳到末尾
              o = Math.floor(clientWidth * (allIndex - 1) * -1); // 计算偏移量
            }
            tranlateX = o;
            if (o !== offset) {
              (containerEl.value as any).style.transform = `translateX(${o}px)`;
            }
          },
          { once: true }
        );
      }
      // 重新计算索引
      if (props.loop && allIndex > 0 && newIndex === allIndex) {
        currentIndex = 0;
      } else if (props.loop && allIndex > 0 && newIndex === 0) {
        currentIndex = allIndex - 2;
      } else {
        currentIndex = props.loop ? newIndex - 1 : newIndex;
      }
      console.log(currentIndex)
    }

    function togglePage(page: string) {
      let nextIndex = currentIndex;
      if (page === "prev") {
        nextIndex--;
        if (nextIndex < 0) {
          nextIndex = 0;
        }
      } else if (page === "next") {
        nextIndex++;
        if (nextIndex > allIndex) {
          nextIndex = allIndex;
        }
      } else {
        const pageNum = Number(page);
        if (pageNum !== currentIndex) {
          nextIndex = props.loop ? pageNum + 1 : pageNum;
        }
      }
      if (nextIndex !== currentIndex) {
        toggleContent(nextIndex);
      }
      requestAnimationFrame(() => {
        // this.#startTimer();
      });
    }

    function handleMouseenter() {
      if (props.arrows === 'hover') {
        showArrows.value = true;
      }
    }

    function handleMouseleave() {
      if (props.arrows === 'hover') {
        showArrows.value = false;
      }
    }

    function handlePointerDown(e: PointerEvent) {
      startX = e.clientX;
      isDragging = true;
      startTime = Date.now();
    }
    function handlePointerUp(e: PointerEvent) {
      if (!isDragging) return;
      const duration = Date.now() - startTime;
      const deltaX = e.clientX - startX;
      isDragging = false;
      if (deltaX === 0) return;
      let page = "cancel";
      // 快速滚动
      if (duration <= 200) {
        if (deltaX >= 20) {
          page = "prev";
        } else if (deltaX <= -20) {
          page = "next";
        }
      } else {
        // 滑动慢速
        if (deltaX >= clientWidth / 2) {
          page = "prev";
        } else if (deltaX <= -clientWidth / 2) {
          page = "next";
        }
      }

      if (page === "cancel") {
        restoreTranslate();
      } else {
        togglePage(page);
      }
    }
    function handlePointerMove(e: PointerEvent) {
      if (!isDragging) return;
      if (movingT) {
        cancelAnimationFrame(movingT);
      }
      movingT = requestAnimationFrame(() => {
        const deltaX = Math.floor(e.clientX - startX);
        if (!props.loop) {
          if (deltaX < 0 && currentIndex === allIndex) return;
          if (deltaX > 0 && currentIndex === 0) return;
        }
        const offset = tranlateX + deltaX;
        if (containerEl.value) {
          containerEl.value.style.transform = `translateX(${offset}px)`;
        }
      });
      e.preventDefault();
    }
    function handlePointerLeave() {}
    function handlePointerCancel() {}

    function renderArrowIcon(dir: "prev" | "next" = "prev") {
      return dir === 'prev' ? h(ArrowLeft) : h(ArrowRight);
    }

    function renderNavigationButton(dir: "prev" | "next" = "prev") {
      return h('button', {
        class: `l-carousel--nav-button l-carousel--nav-${dir}`,
        type: 'button',
        "aria-label": dir,
        "data-page": dir,
      }, renderArrowIcon(dir))
    }

    function renderNavigation() {
      if (props.arrows === 'always') {
        showArrows.value = true;
      }
      const navN = h('div', { class: 'l-carousel--nav' }, [
        renderNavigationButton('prev'),
        renderNavigationButton('next')
      ]);
      if (props.arrows === 'always') {
        return navN;
      }
      return h(Transition, { name: 'l-carousel-nav' }, {
        default: () => withDirectives(h(navN), [[vShow, showArrows.value]])
      });
    }

    function handleClick(e: Event) {
      const [isNext, page] = shouldEventNext(e, "data-page", e.currentTarget as HTMLElement);
      if (isNext) {
        console.log(page)
      }
    }

    return () => {
      const container = [
        h(
          'div',
          {
            class: 'l-carousel-container',
            ref: 'container',
            onPointercancel: handlePointerCancel,
            onPointerdown: handlePointerDown,
            onPointermove: handlePointerMove,
            onPointerup: handlePointerUp,
            onPointerleave: handlePointerLeave,
          },
          renderItems(slots.default)
        )
      ];
      if (props.arrows !== 'never') {
        container.push(renderNavigation());
      }
      return h('div', {
        class: 'l-carousel',
        ref: 'root',
        style: {
          height: props.height
        },
        'data-page': '__stop__',
        onMouseenter: props.arrows === 'hover' ? handleMouseenter : undefined,
        onMouseleave: props.arrows === 'hover' ? handleMouseleave : undefined,
        onClick: handleClick
      }, container);
    }
  }
});
</script>
