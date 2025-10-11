# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 演示

<script setup>
  import { ref } from 'vue'
  import { Switch, MoonIcon, SunIcon } from '../../src'

  const open = ref(true);
</script>

### 基础用法

绑定 `v-model` 到一个 `boolean` 类型的变量。可以使用 `true` 和 `false` 分别表示开和关。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const open = ref(true);
  </script>
  <template>
    <lv-switch v-model="open"></lv-switch>
  </template>
  </textarea>
  <template #preview>
    <Switch v-model="open"></Switch>
  </template>
  </CodePreview>
</ClientOnly>

### 文字描述

使用 `checked-text` 和 `unchecked-text` 属性来设置开关的文字描述。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lv-switch v-model="open" checked-text="Y" unchecked-text="N"></lv-switch>
  </template>
  </textarea>
  <template #preview>
    <Switch v-model="open" checked-text="Y" unchecked-text="N"></Switch>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义操作图标

使用 `action` 插槽, 配合 `props-checked` 作用域来自定义渲染操作图标。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <template>
    <lv-switch v-model="open">
      <template #action="slotProp">
        <lt-moon-icon v-if="slotProp.checked"></lt-moon-icon>
        <lt-sun-icon v-else></lt-sun-icon>
      </template>
    </lv-switch>
  </template>
  </textarea>
  <template #preview>
    <Switch v-model="open">
      <template #action="slotProp">
        <MoonIcon v-if="slotProp.checked"></MoonIcon>
        <SunIcon v-else></SunIcon>
      </template>
    </Switch>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Switch Props

| 参数             | 说明               | 类型      | 默认值  |
| ---------------- | ------------------ | --------- | ------- |
| `v-model`        | 开关状态(是否打开) | `boolean` | `false` |
| `checked-text`   | 开启时的文字描述   | `string`  | -       |
| `unchecked-text` | 关闭时的文字描述   | `string`  | -       |

### Switch Events

| 事件名   | 说明               | 回调参数             |
| -------- | ------------------ | -------------------- |
| `change` | 开关状态改变时触发 | `(checked: boolean)` |

### Switch CSS Variables

| 变量名              | 默认值                       | 描述         |
| ------------------- | ---------------------------- | ------------ |
| `--l-switch-height` | `20px`                       | 开关按钮高度 |
| `--l-switch-width`  | `var(--l-switch-height) * 2` | 开关按钮宽度 |

### Switch Slots

<!-- prettier-ignore -->
| 名称 | 描述 | 插槽参数 |
| --- | --- | --- |
| `action` | 开关操作按钮内容 | `{ checked: boolean }` |
