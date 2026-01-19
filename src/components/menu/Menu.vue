<script lang="ts">
import { defineComponent, ref, h, provide, PropType } from "vue";
import MenuItem from "./MenuItem.vue";
import type { MenuItem as MenuItemType, ProvideKey } from "./types";
import { MENU_INJECT_KEY } from "./keys";

export default defineComponent({
  name: "Menu",
  props: {
    items: {
      type: Array as PropType<MenuItemType[]>,
      required: true,
    },
    according: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const openKeys = ref<string[]>([]);

    function updateOpenKeys(level: number, key: string) {
      if (props.according) {
        const next = openKeys.value.slice(0, level);
        if (openKeys.value[level] !== key) {
          next[level] = key;
        }
        openKeys.value = next;
      } else {
        let index = openKeys.value.indexOf(key);
        if (index >= 0) {
          openKeys.value.splice(index, 1);
        } else {
          openKeys.value.push(key);
        }
      }
    }

    provide<ProvideKey>(MENU_INJECT_KEY, {
      openKeys,
      updateOpenKeys,
    });
    return () =>
      h(
        "ul",
        {
          class: "l-menu",
        },
        props.items.map((item) => h(MenuItem, { level: 0, item: item })),
      );
  },
});
</script>
