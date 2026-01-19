import type { Ref, VNode } from "vue";

export type MenuItem = {
  title: string;
  key: string;
  children?: MenuItem[];
  icon?: () => VNode | VNode[];
};

export type ProvideKey = {
  openKeys: Ref<string[], string[]>;
  updateOpenKeys: (level: number, keys: string) => void;
};
