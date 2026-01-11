<script lang="ts">
import type { PropType, VNode } from "vue";

import { defineComponent, h } from "vue";

type MenuItemType = {
	label: string | (() => VNode);
	key: string;
	icon?: () => VNode;
	children?: MenuItemType[];
};

export default defineComponent({
	name: "Menu",
	props: {
		/** 菜单项列表 */
		items: {
			type: Array as PropType<MenuItemType[]>,
			required: true,
		},
	},
	setup(props) {
		function renderLabel(label: string | (() => VNode)) {
			if (typeof label === "function") {
				return label();
			}
			return h("span", label);
		}

		function renderIcon(icon?: () => VNode) {
			if (icon) {
				return h("span", { class: "l-menu-icon-wrapper" }, icon());
			}
			return null;
		}

		function renderMenuItems(items: MenuItemType[], level: number) {
			return items.map((item) => {
				const hasChildren = item.children && item.children.length > 0;
				const $container: (VNode | null)[] = [];
				if (hasChildren) {
					$container.push(
						h("div", { class: "l-menu-submenu-title", role: "menuitem" }, [
							renderIcon(item.icon),
							renderLabel(item.label),
						]),
					);
					$container.push(
						h(
							"ul",
							{
								class: "l-menu l-menu-sub",
								style: { "--l-menu-content-padding": `${level * 10 + 10}px` },
							},
							renderMenuItems(item.children as MenuItemType[], level + 1),
						),
					);
				} else {
					$container.push(renderIcon(item.icon));
					$container.push(renderLabel(item.label));
				}
				return h(
					"li",
					{
						class: `l-menu-${hasChildren ? "submenu" : "item"}`,
						role: hasChildren ? "submenu" : "menuitem",
					},
					$container,
				);
			});
		}

		return () => {
			return h(
				"ul",
				{ class: "l-menu", role: "menu" },
				renderMenuItems(props.items, 1),
			);
		};
	},
});
</script>
