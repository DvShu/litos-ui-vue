# Button 按钮

常用于响应用户点击行为，触发相应的业务逻辑。

## 基础使用

<script setup>
  import { Button } from '../../src'
</script>

### 按钮类型

使用 `type` 控制按钮类型, 提供两种类型: `normal`, `primary`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lv-button type="normal">Default</lv-button>
  <lv-button type="primary" class="ml-10">Primary</lv-button>
  </textarea>
  </CodePreview>
</ClientOnly>

### 文本按钮

通过传递 `text` 属性将按钮变为文本按钮，配合 `type` 能有更多风格。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lv-button type="normal" text>Default</lv-button>
  <lv-button type="primary" text class="ml-10">Primary</lv-button>
  </textarea>
  </CodePreview>
</ClientOnly>

### 按钮禁用

使用 `disabled` 控制按钮禁用状态, 禁用状态下不可点击。该属性接受一个 Boolean 类型的值。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lv-button disabled type="normal">Default</lv-button>
<lv-button type="text" class="ml-10" disabled>Text</lv-button>
</textarea>
</CodePreview></ClientOnly>

### 按钮加载状态

使用 `loading` 控制按钮加载状态, 加载状态下不可点击。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lv-button loading type="normal">Default</lv-button>
<lv-button type="primary" loading class="ml-10">Primary</lv-button>
</textarea>
</CodePreview></ClientOnly>

### `Block` 按钮

`block` 属性使按钮适合其父宽度。[100%]

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lv-button block type="normal">Default</lv-button>
<lv-button type="primary" block class="mt-15">Text</lv-button>
</textarea>
</CodePreview></ClientOnly>

### 按钮形状

按钮可以设置为圆形或者弧形

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lv-button circle type="normal">D</lv-button>
<lv-button type="primary" round class="ml-10">Text</lv-button>
</textarea>
</CodePreview></ClientOnly>

### 图标按钮

直接在 Button 内使用 Icon 组件。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lv-button circle type="normal">
<lv-search-icon></lv-search-icon>
</lv-button>
<lv-button type="primary" round class="ml-10">
<lv-search-icon></lv-search-icon>
<span>Search</span>
</lv-button>
</textarea>
</CodePreview></ClientOnly>

### 透明背景

`ghost` 背景变为透明，常用在有色背景上

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lv-button type="primary" ghost>透明按钮</lv-button>
  </textarea>
  </CodePreview>
</ClientOnly>

### 自定义颜色

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lv-button color="#722ed1">按钮</lv-button>
  <lv-button color="#eb2f96" ghost class="ml-10">按钮</lv-button>
  <lv-button color="#4998f4" text class="ml-10">按钮</lv-button>
  </textarea>
  </CodePreview>
</ClientOnly>

### 扩展 `type`

通过给 `type` 设置一个非预设的值，然后定义 `.l-btn-x` 的样式。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lv-button type="blue">蓝色按钮</lv-button>
    <lv-button type="gradient" class="ml-10">渐变按钮</lv-button>
  </template>
  <style>
    .l-btn-blue {
      --l-btn-border-color: #1677ff;
      --l-btn-hover-border-color: #4096ff;
      --l-btn-active-border-color: #0958d9;
    }
    .l-btn-gradient {
      border: none;
      --l-btn-color: #389e0d;
      --l-btn-active-color: #0fd850;
      --l-btn-background: linear-gradient(90deg, #0fd850 0%, #f9f047 100%);
      --l-btn-hover-background: linear-gradient(90deg, #2af06a 0%, #fbf478 100%);
      --l-btn-active-background: linear-gradient(90deg, #0a9036 0%, #ece008 100%);
    }
  </style>
  </textarea>
  <template #preview>
    <Button type="blue">蓝色按钮</Button>
    <Button type="gradient" class="ml-10">渐变按钮</Button>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Button Props

| 名称          | 说明                                           | 类型      | 默认值     |
| ------------- | ---------------------------------------------- | --------- | ---------- |
| `type`        | 按钮类型, `normal`, `primary`, `text`          | `string`  | -          |
| `disabled`    | 按钮禁用状态                                   | `boolean` | `false`    |
| `loading`     | 按钮加载状态                                   | `boolean` | `false`    |
| `block`       | 按钮是否为块级元素[适合其父宽度(宽度100%)]     | `boolean` | `false`    |
| `round`       | 按钮是否为圆角[弧形按钮]                       | `boolean` | `false`    |
| `circle`      | 按钮是否为圆形                                 | `boolean` | `false`    |
| `htmlType`    | 原生的 `type` 属性; `button`、submit`、`reset` | `string`  | `button`   |
| `loadingText` | 加载状态时显示的文字                           | `string`  | `加载中……` |

### Button Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 按钮内容 |

### 样式变量

| 名称                            | 描述                     | 默认值                      |
| ------------------------------- | ------------------------ | --------------------------- |
| `--l-btn-text-color`            | 按钮的文字颜色           | `rgba(0, 0, 0, 0.65)`       |
| `--l-btn-background`            | 按钮的背景颜色           | `	#fff`                      |
| `--l-btn-border-color`          | 按钮的边框颜色           | `#d9d9d9`                   |
| `--l-form-control-height`       | 按钮的高度               | `32px`                      |
| `--l-btn-hover-text-color`      | 鼠标悬浮时按钮的文字颜色 | `#79b3f7`                   |
| `--l-btn-hover-border-color`    | 鼠标悬浮时按钮的边框颜色 | `var(--l-btn-hover-color)`  |
| `--l-btn-hover-background`      | 鼠标悬浮时按钮的背景颜色 | `var(--l-btn-background)`   |
| `--l-btn-active-text-color`     | 点击时按钮的颜色         | `#197df1`                   |
| `--l-btn-active-background`     | 点击时按钮的背景颜色     | `var(--l-btn-background)`   |
| `--l-btn-active-border-color`   | 点击时按钮的边框颜色     | `var(--l-btn-active-color)` |
| `--l-btn-disabled-color`        | 禁用时按钮的文字颜色     | `#c9c9c9`                   |
| `--l-btn-disabled-background`   | 禁用时按钮的背景颜色     | `#fbfbfb`                   |
| `--l-btn-disabled-border-color` | 禁用时按钮的边框颜色     | `#e6e6e6`                   |
