# Check 选择

单选、多选、单选组、多选组

## 演示

<script setup>
  import { ref } from 'vue';
  import { Check, Checkbox } from "../../src";

  const checked1 = ref(false);
</script>

### 使用

基础用法

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <Check label="选项" v-model="checked1" type="checkbox"></Check>
    <hr />
  </template>
  </CodePreview>
</ClientOnly>

## API

### Check Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |

### 样式变量

<!-- prettier-ignore -->
| 名称 | 描述 | 默认值 |
| --- | --- | --- |
| `--l-check-size` | 选择框的大小 | `16px` |
| `--l-check-font-size` | 选择框的文字大小 | `var(--l-check-size)` |
