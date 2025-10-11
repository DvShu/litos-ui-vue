<script lang="ts">
import Popover from './popover/Popover.vue';
import WarnIcon from './icon/Warn.vue';
import Button from './Button.vue';
import { defineComponent, h, ref } from 'vue';

export default defineComponent({
  props: {
    title: String,
  },
  emits: ['cancel', 'confirm'],
  setup(props, { slots, emit }) {
    const $popover = ref();

    function handleClose(action: 'cancel' | 'confirm') {
      emit(action);
      if ($popover.value != null) {
        $popover.value.close();
      }
    }

    return () => {
      return h(
        Popover,
        {
          trigger: 'click',
          placement: 'top',
          class: 'l-popconfirm',
          ref: $popover,
        },
        {
          trigger: () => (slots.trigger != null ? slots.trigger() : null),
          default: () => [
            h('div', { class: 'l-popconfirm-container' }, [
              h(
                'div',
                { class: 'l-popconfirm-icon-wrapper' },
                slots.icon != null ? slots.icon() : h(WarnIcon),
              ),
              slots.default != null ? slots.default() : h('span', props.title),
            ]),
            h('div', { class: 'l-popconfirm-footer' }, [
              h(
                Button,
                {
                  onClick: () => handleClose('cancel'),
                },
                {
                  default: () => '取消',
                },
              ),
              h(
                Button,
                {
                  type: 'primary',
                  onClick: () => handleClose('confirm'),
                },
                { default: () => '确定' },
              ),
            ]),
          ],
        },
      );
    };
  },
});
</script>
