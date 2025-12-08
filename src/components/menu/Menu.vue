<script lang="ts">
import { defineComponent, VNode, PropType, h } from 'vue';

type MenuItemType = {
  label: string;
  key: string;
  icon?: VNode;
  children?: MenuItemType[];
};

export default defineComponent({
  name: 'Menu',
  props: {
    /** 菜单项列表 */
    items: {
      type: Array as PropType<MenuItemType[]>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return h('div', 'Menu');
    };
  },
});
</script>
