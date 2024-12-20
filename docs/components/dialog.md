# Dialog

在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区

## 演示

<script setup lang="ts">
  import { ref } from 'vue'
  import { Dialog, AlertDialog, Button, InfoIcon, Loading, Message, DialogBox } from "../../src"

  const show = ref(false)
  const show1 = ref(false)
  const show3 = ref(false)
  const show4 = ref(false)

  function handleBeforeClose(type: 'cancel' | 'close' | 'ok', done) {
    if (type === 'ok') {
      const loading = Loading.open({
        to: '.edit-dialog',
        bar: true
      })
      // 模拟数据提交
      setTimeout(() => {
        loading.close()
        Message.success("提交成功")
        done()
      }, 2000);
    } else {
      done()
    }
  }

  function openAlert() {
    DialogBox.alert("这是 Alert Content", 'Alert Title').then((result) => {
      if (result === true) {
        Message.success("点击了确定")
      } else {
        Message.info("点击了关闭")
      }
    })
  }

  function openConfirm() {
    DialogBox.confirm("这是 Confirm Content", 'Confirm Title', { type: 'success' }).then((result) => {
      if (result === true) {
        Message.success("点击了确定")
      } else {
        Message.info("点击了关闭")
      }
    })
  }

  function openPrompt() {
    DialogBox.prompt("请输入用户名", 'Prompt Title').then((result) => {
      Message.info('用户名：' + result)
    })
  }
</script>

### 基础用法

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 `Dialog`。`title` 属性用于定义标题，它是可选的，默认值为空。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  </script>
  <template>
    <lt-button type="primary" @click="show = true">显示 Dialog</lt-button>
    <!---->
    <lt-dialog v-model="show" title="Title">
      这是内容
    </lt-dialog>
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show" title="Title">
      这是内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义头部

除了使用 `title` 属性定义头部内容外，也可以通过传递 `header-slot` 插槽自定义头部内容。通过传递 `width` 属性改变宽度；通常当需要在头部显示图标时有用, 比如：`confirm` 弹窗

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  </script>
  <template>
    <lt-button type="primary" @click="show1 = true">显示 Dialog</lt-button>
    <!---->
    <lt-dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </lt-dialog>
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show1 = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

### 异步关闭

有时候点击对话框完毕后，我们需要提交数据，提交成功则关闭对话框，提交失败则给出提示。

`before-close` 对话框关闭前的回调，通过调用回调的 `done()` 函数来关闭对话框；通过 `main-class` 给对话框主体添加样式；搭配 [Loading](/components/loading) 就能实现数据提交带上进度。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
    //-
    function handleBeforeClose(type: 'cancel' | 'close' | 'ok', done) {
      if (type === 'ok') {
        const loading = NtLoading.open({
          to: '.edit-dialog',
          bar: true
        })
        // 模拟数据提交
        setTimeout(() => {
          loading.close()
          NtMessage.success("提交成功")
          done()
        }, 2000);
      } else {
        done()
      }
    }
  </script>
  <template>
    <lt-button type="primary" @click="show3 = true">显示 Dialog</lt-button>
    <!---->
    <lt-dialog v-model="show3" title="Title" main-class="edit-dialog" :before-close="handleBeforeClose">
      这是内容
    </lt-dialog>
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show3 = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show3" title="Title" main-class="edit-dialog" :before-close="handleBeforeClose">
      这是内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

### 移动风格

默认情况下对话框为 `pc` 端风格，可以通过传递 `theme=mobile` 将对话框变为移动风格；具体表现为：文本居中，下方按钮平铺

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue'
    //-
    const show4 = ref(false);
  </script>
  <template>
    <lt-button type="primary" @click="show4 = true">显示 Dialog</lt-button>
    <!---->
    <lt-dialog v-model="show4" title="标题" theme="mobile" :show-close="0" align-center>
      弹窗内容
    </lt-dialog>
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show4 = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show4" title="标题" theme="mobile" :show-close="0" align-center>
      弹窗内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

### 消息弹窗

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。系统自带有3种消息弹窗：`alert`、`confirm`、`prompt` 但是其样式比较简陋不太美观，消息弹窗优化了样式。

分别通过 `NtDialogBox.alert()`、`NtDialogBox.confirm()`、`NtDialogBox.prompt()` 调用

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    function openAlert() {
      NtDialogBox.alert("这是 Alert Content", 'Alert Title').then((result) => {
        if (result === true) {
          NtMessage.success("点击了确定")
        } else {
          NtMessage.info("点击了关闭")
        }
      })
    }
    //-
    function openConfirm() {
      NtDialogBox.confirm("这是 Confirm Content", 'Confirm Title', { type: 'success' }).then((result) => {
        if (result === true) {
          NtMessage.success("点击了确定")
        } else {
          NtMessage.info("点击了关闭")
        }
      })
    }
    //-
    function openPrompt() {
      NtDialogBox.prompt("请输入用户名", 'Prompt Title').then((result) => {
        NtMessage.info('用户名：' + result)
      })
    }
  </script>
  <template>
    <lt-button @click="openAlert">alert</lt-button>
    <lt-button @click="openConfirm">confirm</lt-button>
    <lt-button @click="openPrompt">prompt</lt-button>
  </template>
  </textarea>
  <template #preview>
    <Button @click="openAlert">alert</Button>
    <Button @click="openConfirm">confirm</Button>
    <Button @click="openPrompt">prompt</Button>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Dialog Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mask` | 是否需要遮罩层 | `Boolean` | `true` |
| `mask-closable` | 是否可以通过点击遮罩关闭对话框 | `Boolean` | `true` |
| `model-value / v-model` | `是否显示 Dialog` | `Boolean` | - |
| `title` | 标题， 也可通过具名 `slot-header` 传入 | `String` | - |
| `show-close` | 右上角关闭按钮显示, `1`-显示在框内，`2`-显示在框角, `0`-不显示 | `0/1/2` | `1` |
| `show-cancel` | 是否显示底部取消按钮 | `Boolean` | `true` |
| `show-ok` | 是否显示底部确定按钮 | `Boolean` | `true` |
| `main-class` | 主体样式类名 | `String` | - |
| `width` | 宽度 | `String` | `pc`端`30%`, 移动端 `80%` |
| `before-close` | 关闭前的回调，会暂停关闭对话框, 通过调用回调函数的 `done` 关闭对话框; `cancel`-点击取消按钮触发, `close`-关闭时触发[右上角关闭按钮、遮罩], `ok`-点击确定按钮触发 | `(type: 'cancel' \| 'close' \| 'ok', done: () => void) => void` | - |
| `theme` | 主题风格 | `normal`、`mobile` | `normal` |

### DialogBox API

#### 1. `alert(message: string, title: string, options?: DialogBoxOptions): Promise<void>`

#### 2. `confirm(message: string, title: string, options?: DialogBoxOptions): Promise<boolean>`

#### 3. `prompt(tip: string, tip: string, options?: DialogBoxOptions): Promise<string | null>`

### DialogBoxOptions

<!-- prettier-ignore -->
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `showCancel` | 是否显示取消按钮 | `boolean` | - |
