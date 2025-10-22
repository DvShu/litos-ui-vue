# Check 选择

同时支持单选、多选、单选组、多选组的选择框，用于替换 `Radio` 和 `Checkbox`

## 演示

<script setup>
  import { ref, computed, watch } from 'vue';
  import { Check, CheckGroup } from "../../src";

  const checked1 = ref(false);
  const checked2 = ref(false);

  const sex = ref("0");
  const cities = ref(['CD']);

  const isIndeterminate = ref(cities.value.length > 0 && cities.value.length < 4);
  const checkAll = ref(false);

  watch(cities, (newVal) => {
    isIndeterminate.value = newVal.length > 0 && newVal.length < 4;
    if (newVal.length === 4) {
      checkAll.value = true;
    } else {
      checkAll.value = false;
    }
  });

  function checkAllChange(isAll) {
    if (isAll) {
      cities.value = ['CD', 'BJ', 'SH', 'GZ'];
    } else {
      cities.value = [];
    }
  }
</script>

### 基础使用

通过 `type` 可以指定选择框的类型，默认是 `radio`, 可以设置为 `checkbox`；`v-model` 绑定的是选择框的选中状态

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const checked1 = ref(true);
    const checked2 = ref(false);
  </script>
  <template>
    <lv-check label="单选" v-model="checked1"></lv-check>
    <lv-check label="多选" v-model="checked2" type="checkbox" class="ml-10"></lv-check>
  </template>
  </textarea>
  <template #preview>
    <Check label="单选" v-model="checked1"></Check>
    <Check label="多选" v-model="checked2" type="checkbox" class="ml-10"></Check>
  </template>
  </CodePreview>
</ClientOnly>

> 也可以通过 `checked` 属性设置选中

### 禁用状态

通过 `disabled` 属性可以禁用选择框，禁用状态下不能点击选中

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lv-check label="单选" disabled></lv-check>
    <lv-check label="多选" type="checkbox" class="ml-10" disabled></lv-check>
  </template>
  </textarea>
  <template #preview>
    <Check label="单选" disabled></Check>
    <Check label="多选" type="checkbox" class="ml-10" disabled></Check>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义文本

可以通过自定义 `default` 插槽来自定义选择框的文本

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <template>
    <lv-check v-model="checked1">
      <span>请阅读并同意</span>
      <a>《服务协议》</a>
      <span>和</span>
      <a>《隐私协议》</a>
    </lv-check>
  </template>
  </textarea>
  <template #preview>
    <Check v-model="checked1">
      <span>请阅读并同意</span>
      <a>《服务协议》</a>
      <span>和</span>
      <a>《隐私协议》</a>
    </Check>
  </template>
  </CodePreview>
</ClientOnly>

### 选择组

使用 `lv-check-group` 元素来包裹 `lv-check` 元素，实现复选框组。使用时需要给 `lv-check` 传递 `value` 属性。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lv-check-group v-model="sex" type="radio">
      <lv-check value="0" label="男"></lv-check>
      <lv-check value="1" label="女"></lv-check>
    </lv-check-group>
    //-
    <lv-check-group v-model="cities" type="checkbox" name="city">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  </textarea>
  <template #preview>
    <CheckGroup v-model="sex" type="radio">
      <Check value="0" label="男"></Check>
      <Check value="1" label="女"></Check>
    </CheckGroup>
    <hr />
    <CheckGroup v-model="cities" type="checkbox" name="city">
      <Check value="CD" label="成都"></Check>
      <Check value="BJ" label="北京"></Check>
      <Check value="SH" label="上海"></Check>
      <Check value="GZ" label="广州"></Check>
    </CheckGroup>
  </template>
  </CodePreview>
</ClientOnly>

### 按钮组

将 `appearance` 设置为 `button` 可以将选择框渲染为按钮组

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lv-check-group v-model="sex" type="radio" appearance="button">
      <lv-check value="0" label="男"></lv-check>
      <lv-check value="1" label="女"></lv-check>
    </lv-check-group>
    //-
    <lv-check-group v-model="cities" type="checkbox" name="city" appearance="button">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  </textarea>
  <template #preview>
    <CheckGroup v-model="sex" type="radio" appearance="button">
      <Check value="0" label="男"></Check>
      <Check value="1" label="女"></Check>
    </CheckGroup>
    <hr />
    <CheckGroup v-model="cities" type="checkbox" name="city" appearance="button">
      <Check value="CD" label="成都"></Check>
      <Check value="BJ" label="北京"></Check>
      <Check value="SH" label="上海"></Check>
      <Check value="GZ" label="广州"></Check>
    </CheckGroup>
  </template>
  </CodePreview>
</ClientOnly>

### 中间状态

通过 `indeterminate` 属性可以将选择框设置为中间状态

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref, watch } from 'vue';
    //-
    const checkAll = ref(false);
    const isIndeterminate = ref(false);
    const cities = ref([]);
    //-
    watch(cities, (newVal) => {
      isIndeterminate.value = newVal.length > 0 && newVal.length < 4;
      if (newVal.length === 4) {
        checkAll.value = true;
      } else {
        checkAll.value = false;
      }
    });
    //-
    function checkAllChange(isAll) {
      if (isAll) {
        cities.value = ['CD', 'BJ', 'SH', 'GZ'];
      } else {
        cities.value = [];
      }
    }
  </script>
  <template>
    <lv-check
      v-model="checked1"
      type="checkbox"
      indeterminate
      label="全选"
      @change="checkAllChange"
    ></lv-check>
    <lv-check-group v-model="cities" type="checkbox">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  </textarea>
  <template #preview>
    <Check
      v-model="checkAll"
      type="checkbox"
      :indeterminate="isIndeterminate"
      label="全选"
      @change="checkAllChange"
    ></Check>
    <CheckGroup v-model="cities" type="checkbox">
      <Check value="CD" label="成都"></Check>
      <Check value="BJ" label="北京"></Check>
      <Check value="SH" label="上海"></Check>
      <Check value="GZ" label="广州"></Check>
    </CheckGroup>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Check Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 选择框的类型 | `'radio' \| 'checkbox'` | `'radio'` |
| `indeterminate` | 是否为中间状态, `checkbox` 类型下有效 | `boolean` | `false` |
| `label` | 选择框的文字 | `string` | - |
| `checked` | 是否选中 | `boolean` | `false` |
| `value` | 选择框的值 | `string \| number` | - |
| `name` | 选择框的名称 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `appearance` | 选择框的样式 | `'default' \| 'button'` | `'default'` |
| `v-model` | 选中的值 | `boolean \| string \| number` | `false` |

### Check Events

<!-- prettier-ignore -->
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `change` | 选中状态改变时触发 | `(checked: boolean \| string \| number) => void` |

### Check Slots

<!-- prettier-ignore -->
| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义选择框的文字 |

### CheckGroup Events

<!-- prettier-ignore -->
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `change` | 选中状态改变时触发 | `(checked: Array<string \| number>) => void` |

### CheckGroup Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 选中的值 | `Array<string \| number>` | `[]` |
| `type` | 选择框的类型 | `'radio' \| 'checkbox'` | `'radio'` |
| `name` | 选择框的名称 | `string` | - |
| `appearance` | 选择框的样式 | `'default' \| 'button'` | `'default'` |
| `gap` | 选择框之间的间距 | `string` | - |

### CSS Vars

<!-- prettier-ignore -->
| 名称 | 描述 | 默认值 |
| --- | --- | --- |
| `--l-check-size` | 选择框的大小 | `16px` |
| `--l-check-font-size` | 选择框的文字大小 | `var(--l-check-size)` |
