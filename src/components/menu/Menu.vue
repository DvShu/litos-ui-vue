<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import type { MenuItem as MenuItemType } from './types';
import MenuItem from './MenuItem.vue';

export default defineComponent({
  name: 'Menu',
  props: {
    accordion: {
      type: Boolean,
      default: false,
      required: false,
    },
    items: {
      type: Array as PropType<MenuItemType[]>,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h(
        'ul',
        { class: 'l-menu' },
        props.items.map((item) => {
          return h(
            MenuItem,
            { key: item.key, itemKey: item.key, children: item.children },
            item.title,
          );
        }),
      );
  },
});
</script>

<style lang="less"></style>
