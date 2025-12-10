<script lang="ts">
import { defineComponent, h } from 'vue';
import type { VNode, PropType } from 'vue';

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
    function renderMenuItems(items: MenuItemType[]) {
      console.log(items);
      return items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const $container: VNode[] = [];
        if (hasChildren) {
          $container.push(
            h(
              'div',
              { class: 'l-menu-submenu-title', role: 'menuitem' },
              item.label,
            ),
          );
          $container.push(
            h(
              'ul',
              { class: 'l-menu l-menu-sub' },
              renderMenuItems(item.children as MenuItemType[]),
            ),
          );
        }
        return h(
          'li',
          {
            class: `l-menu-${hasChildren ? 'submenu' : 'item'}`,
            role: hasChildren ? 'submenu' : 'menuitem',
          },
          [item.icon, item.label],
        );
      });
    }

    return () => {
      return h(
        'ul',
        { class: 'l-menu', role: 'menu' },
        renderMenuItems(props.items),
      );
    };
  },
});
</script>
