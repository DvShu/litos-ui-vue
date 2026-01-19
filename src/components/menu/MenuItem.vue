<script lang="ts">
import { inject, defineComponent, h, PropType } from "vue";
import { MENU_INJECT_KEY } from "./keys";
import type { ProvideKey, MenuItem as MenuItemType } from "./types";
import ArrowRightIcon from "../icon/ArrowRight.vue";

const MenuItem = defineComponent<{
  item: MenuItemType;
  level: number;
}>({
  name: "MenuItme",
  props: {
    item: {
      type: Object as PropType<MenuItemType>,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { openKeys, updateOpenKeys } = inject<ProvideKey>(MENU_INJECT_KEY, {} as any);

    const toggle = () => {
      if (updateOpenKeys) {
        updateOpenKeys(props.level, props.item.key);
      }
    };

    return () =>
      h(
        "li",
        {
          class: "l-menu-item",
          style: {
            "--l-menu-level": props.level,
          },
        },
        [
          h(
            "div",
            {
              class: "l-menu-title",
              onClick: toggle,
            },
            [
              props.item.icon ? h("span", { class: "l-menu-icon-wrap" }, props.item.icon()) : null,
              props.item.title,
              props.item.children && h(ArrowRightIcon, { class: "l-submenu-arrow-icon" }),
            ],
          ),
          openKeys.value.includes(props.item.key) && props.item.children
            ? h(
                "ul",
                {
                  class: "l-submenu",
                },
                props.item.children.map((child) =>
                  h(MenuItem, {
                    key: child.key,
                    item: child,
                    level: props.level + 1,
                  }),
                ),
              )
            : null,
        ],
      );
  },
});

export default MenuItem;
</script>
