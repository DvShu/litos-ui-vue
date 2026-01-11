# Menu

为网站提供导航功能的菜单

## 演示

<script setup>
  import { Menu, MenuItem, SubMenu } from "../../src";
  import { h } from 'vue';
  import { Icon } from '@iconify/vue';

  function renderIcon(icon) {
    return () => h(Icon, { icon });
  }

  const items = [
    {
      label: '导航一',
      icon: renderIcon('tdesign:app'),
      key: 'N1',
      children: [{
        label: '选项1',
        key: 'A1'
      }, {
        label: '选项2',
        key: 'A2'
      }, {
        label: '选项3',
        key: 'A3'
      }]
    },
    {
      label: '选项四',
      icon: renderIcon('solar:book-linear'),
      key: 'N4'
    },
  ];
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
