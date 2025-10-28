import{_ as s,l as m,m as T,L as B,M as p,D as h}from"./chunks/theme.j-P-CnI_.js";import{d as y,p as c,B as P,c as q,o as V,at as x,G as d,j as o,w as e,k as i,a as l}from"./chunks/framework.DUND-OMv.js";const I=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1760171877000}'),N={name:"components/dialog.md"},O=y({...N,setup(A){const g=c(!1),f=c(!1),b=c(!1),v=c(!1);function k(n,t){if(n==="ok"){const r=B.open({to:".edit-dialog",bar:!0});setTimeout(()=>{r.close(),p.success("提交成功"),t()},2e3)}else t()}function D(){h.alert("这是 Alert Content","Alert Title").then(n=>{n===!0?p.success("点击了确定"):p.info("点击了关闭")})}function w(){h.confirm("这是 Confirm Content","Confirm Title",{type:"success"}).then(n=>{n===!0?p.success("点击了确定"):p.info("点击了关闭")})}function C(){h.prompt("请输入用户名","Prompt Title").then(n=>{p.info("用户名："+n)})}return(n,t)=>{const r=P("CodePreview"),u=P("ClientOnly");return V(),q("div",null,[t[25]||(t[25]=x("",5)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[0]||(t[0]=a=>g.value=!0)},{default:e(()=>[...t[8]||(t[8]=[l("显示 Dialog",-1)])]),_:1}),d(i(m),{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=a=>g.value=a),title:"Title"},{default:e(()=>[...t[9]||(t[9]=[l(" 这是内容 ",-1)])]),_:1},8,["modelValue"])]),default:e(()=>[t[10]||(t[10]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  <\/script>
  <template>
    <lv-button type="primary" @click="show = true">显示 Dialog</lv-button>
    <!---->
    <lv-dialog v-model="show" title="Title">
      这是内容
    </lv-dialog>
  </template>
  `,-1))]),_:1})]),_:1}),t[26]||(t[26]=o("h3",{id:"自定义头部",tabindex:"-1"},[l("自定义头部 "),o("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),t[27]||(t[27]=o("p",null,[l("除了使用 "),o("code",null,"title"),l(" 属性定义头部内容外，也可以通过传递 "),o("code",null,"header-slot"),l(" 插槽自定义头部内容。通过传递 "),o("code",null,"width"),l(" 属性改变宽度；通常当需要在头部显示图标时有用, 比如："),o("code",null,"confirm"),l(" 弹窗")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[2]||(t[2]=a=>f.value=!0)},{default:e(()=>[...t[11]||(t[11]=[l("显示 Dialog",-1)])]),_:1}),d(i(m),{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=a=>f.value=a),width:"300px"},{header:e(()=>[d(i(T)),t[12]||(t[12]=o("span",null,"提示",-1))]),default:e(()=>[t[13]||(t[13]=l(" 提示内容 ",-1))]),_:1},8,["modelValue"])]),default:e(()=>[t[14]||(t[14]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  <\/script>
  <template>
    <lv-button type="primary" @click="show1 = true">显示 Dialog</lv-button>
    <!---->
    <lv-dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </lv-dialog>
  </template>
  `,-1))]),_:1})]),_:1}),t[28]||(t[28]=o("h3",{id:"异步关闭",tabindex:"-1"},[l("异步关闭 "),o("a",{class:"header-anchor",href:"#异步关闭","aria-label":'Permalink to "异步关闭"'},"​")],-1)),t[29]||(t[29]=o("p",null,"有时候点击对话框完毕后，我们需要提交数据，提交成功则关闭对话框，提交失败则给出提示。",-1)),t[30]||(t[30]=o("p",null,[o("code",null,"before-close"),l(" 对话框关闭前的回调，通过调用回调的 "),o("code",null,"done()"),l(" 函数来关闭对话框；通过 "),o("code",null,"main-class"),l(" 给对话框主体添加样式；搭配 "),o("a",{href:"/litos-ui-vue/components/loading"},"Loading"),l(" 就能实现数据提交带上进度。")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[4]||(t[4]=a=>b.value=!0)},{default:e(()=>[...t[15]||(t[15]=[l("显示 Dialog",-1)])]),_:1}),d(i(m),{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=a=>b.value=a),title:"Title","main-class":"edit-dialog","before-close":k},{default:e(()=>[...t[16]||(t[16]=[l(" 这是内容 ",-1)])]),_:1},8,["modelValue"])]),default:e(()=>[t[17]||(t[17]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  <\/script>
  <template>
    <lv-button type="primary" @click="show3 = true">显示 Dialog</lv-button>
    <!---->
    <lv-dialog v-model="show3" title="Title" main-class="edit-dialog" :before-close="handleBeforeClose">
      这是内容
    </lv-dialog>
  </template>
  `,-1))]),_:1})]),_:1}),t[31]||(t[31]=o("h3",{id:"移动风格",tabindex:"-1"},[l("移动风格 "),o("a",{class:"header-anchor",href:"#移动风格","aria-label":'Permalink to "移动风格"'},"​")],-1)),t[32]||(t[32]=o("p",null,[l("默认情况下对话框为 "),o("code",null,"pc"),l(" 端风格，可以通过传递 "),o("code",null,"theme=mobile"),l(" 将对话框变为移动风格；具体表现为：文本居中，下方按钮平铺")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[6]||(t[6]=a=>v.value=!0)},{default:e(()=>[...t[18]||(t[18]=[l("显示 Dialog",-1)])]),_:1}),d(i(m),{modelValue:v.value,"onUpdate:modelValue":t[7]||(t[7]=a=>v.value=a),title:"标题",theme:"mobile","show-close":0,"align-center":""},{default:e(()=>[...t[19]||(t[19]=[l(" 弹窗内容 ",-1)])]),_:1},8,["modelValue"])]),default:e(()=>[t[20]||(t[20]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref } from 'vue'
    //-
    const show4 = ref(false);
  <\/script>
  <template>
    <lv-button type="primary" @click="show4 = true">显示 Dialog</lv-button>
    <!---->
    <lv-dialog v-model="show4" title="标题" theme="mobile" :show-close="0" align-center>
      弹窗内容
    </lv-dialog>
  </template>
  `,-1))]),_:1})]),_:1}),t[33]||(t[33]=x("",3)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{onClick:D},{default:e(()=>[...t[21]||(t[21]=[l("alert",-1)])]),_:1}),d(i(s),{onClick:w},{default:e(()=>[...t[22]||(t[22]=[l("confirm",-1)])]),_:1}),d(i(s),{onClick:C},{default:e(()=>[...t[23]||(t[23]=[l("prompt",-1)])]),_:1})]),default:e(()=>[t[24]||(t[24]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  <\/script>
  <template>
    <lv-button @click="openAlert">alert</lv-button>
    <lv-button @click="openConfirm">confirm</lv-button>
    <lv-button @click="openPrompt">prompt</lv-button>
  </template>
  `,-1))]),_:1})]),_:1}),t[34]||(t[34]=x("",9))])}}});export{I as __pageData,O as default};
