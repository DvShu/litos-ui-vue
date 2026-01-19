# Menu

为网站提供导航功能的菜单

## 演示

<script setup>
  import { Menu, MenuItem } from "../../src";
  import { h } from 'vue';
  import { Icon } from '@iconify/vue';

  function renderIcon(icon) {
    return () => h(Icon, { icon });
  }

  const items = [
  {
    "key": "1",
    "title": "首页",
    icon: renderIcon('mdi:home')
  },
  {
    "key": "2",
    "title": "产品",
    icon: renderIcon('mdi:package'),
    "children": [
      {
        "key": "2-1",
        "title": "前端工具",
        "children": [
          {
            "key": "2-1-1",
            "title": "组件库"
          },
          {
            "key": "2-1-2",
            "title": "构建工具"
          }
        ]
      },
      {
        "key": "2-2",
        "title": "后端服务",
        "children": [
          {
            "key": "2-2-1",
            "title": "API 网关"
          }
        ]
      }
    ]
  },
  {
    "key": "3",
    "title": "关于我们",
    icon: renderIcon('mdi:account'),
  }
]
</script>

### 侧栏

垂直菜单，可内嵌子菜单

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref, watch } from 'vue'
    //-
    const value = ref('')
  </script>
  <template>
    <lv-menu></lv-menu>
  </template>
  </textarea>
  <template #preview>
    <Menu :items="items"></Menu>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Menu Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
