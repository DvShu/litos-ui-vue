import{u as w,o as h,p as a,q as n,_ as f,r as x,s as c}from"./chunks/theme.j-P-CnI_.js";import{d as k,p as g,h as T,B as F,c as V,o as A,at as v,G as e,j as d,w as o,k as l,a as r}from"./chunks/framework.DUND-OMv.js";const $=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1760171877000}'),C={name:"components/form.md"},E=k({...C,setup(I){const b=g("right"),_=g("null"),s=T(()=>_.value==="null"?null:_.value),{formFields:i,resetFields:q}=w({username:"",password:""}),y=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}];function P(){q()}return(R,t)=>{const u=F("CodePreview"),p=F("ClientOnly");return A(),V("div",null,[t[11]||(t[11]=v('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><p>包含数据录入、校验以及对应样式。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 <a href="https://gitee.com/towardly/ph/wikis/utils/validator" target="_blank" rel="noreferrer">ph-utils/validator</a></p>',5)),e(p,null,{default:o(()=>[e(u,null,{preview:o(()=>[e(l(h),{model:l(i),rules:y},{default:o(()=>[e(l(a),{label:"用户名",name:"username"},{default:o(()=>[e(l(n),{placeholder:"请输入用户名",modelValue:l(i).username,"onUpdate:modelValue":t[0]||(t[0]=m=>l(i).username=m)},null,8,["modelValue"])]),_:1}),e(l(a),{label:"密码",required:"",name:"password"},{default:o(()=>[e(l(n),{placeholder:"请输入密码",modelValue:l(i).password,"onUpdate:modelValue":t[1]||(t[1]=m=>l(i).password=m)},null,8,["modelValue"])]),_:1}),e(l(a),{label:""},{default:o(()=>[e(l(f),{"html-type":"submit"},{default:o(()=>[...t[3]||(t[3]=[r("提交",-1)])]),_:1}),e(l(f),{type:"normal",onClick:P},{default:o(()=>[...t[4]||(t[4]=[r("重置",-1)])]),_:1})]),_:1})]),_:1},8,["model"])]),default:o(()=>[t[5]||(t[5]=d("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { reactive, watch, ref } from 'vue'
    import { useFormReset } from 'litos-ui-vue'
    const { formFields, resetFields } = useFormReset({
      username: '',
      password: ''
    })
    const rules = [
      {
        key: 'username',
        rules: ['required'],
        message: '用户名不能为空'
      },
      {
        key: 'password',
        rules: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],
        message: '密码为6~15位字母+数字'
      }
    ]
    function handleReset() {
      resetFields()
    }
  <\/script>
  <template>
    <lv-form :model="formFields" :rules="rules" >
      <lv-form-item label="用户名" required name="username" >
        <lv-input placeholder="请输入用户名" v-model="formFields.username"></lv-input>
      </lv-form-item>
      <lv-form-item label="密码" required name="password">
        <lv-input placeholder="请输入密码" v-model="formFields.password"></lv-input>
      </lv-form-item>
      <lv-form-item label="">
        <lv-button html-type="submit">提交</lv-button>
        <lv-button type="normal" @click="handleReset">重置</lv-button>
      </lv-form-item>
    </lv-form>
  </template>
  `,-1))]),_:1})]),_:1}),t[12]||(t[12]=d("h3",{id:"行内表单",tabindex:"-1"},[r("行内表单 "),d("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),t[13]||(t[13]=d("p",null,"当前表单较简单时，可以在一行内放置表单。",-1)),t[14]||(t[14]=d("p",null,[r("通过设置 "),d("code",null,"inline"),r(" 属性为 "),d("code",null,"true"),r(" 可以让表单域变为行内的表单域。")],-1)),e(p,null,{default:o(()=>[e(u,null,{preview:o(()=>[e(l(h),{inline:""},{default:o(()=>[e(l(a),{label:"用户名",name:"username"},{default:o(()=>[e(l(n),{placeholder:"请输入用户名"})]),_:1}),e(l(a),{label:"密码",name:"password"},{default:o(()=>[e(l(n),{placeholder:"请输入密码"})]),_:1}),e(l(a),{label:"用户名",name:"username"},{default:o(()=>[e(l(n),{placeholder:"请输入用户名"})]),_:1}),e(l(a),{label:"密码",name:"password"},{default:o(()=>[e(l(n),{placeholder:"请输入密码"})]),_:1}),e(l(a),null,{default:o(()=>[e(l(f),{"html-type":"submit"},{default:o(()=>[...t[6]||(t[6]=[r("提交",-1)])]),_:1})]),_:1})]),_:1})]),default:o(()=>[t[7]||(t[7]=d("textarea",{lang:"vue-html"},`  <lv-form inline>
    <lv-form-item label="用户名" required name="username">
      <lv-input placeholder="请输入用户名"></lv-input>
    </lv-form-item>
    <lv-form-item label="密码" required name="password">
      <lv-input placeholder="请输入密码"></lv-input>
    </lv-form-item>
    <lv-form-item>
      <lv-button html-type="submit">提交</lv-button>
    </lv-form-item>
  </lv-form>
  `,-1))]),_:1})]),_:1}),t[15]||(t[15]=d("h3",{id:"只使用-formitem",tabindex:"-1"},[r("只使用 FormItem "),d("a",{class:"header-anchor",href:"#只使用-formitem","aria-label":'Permalink to "只使用 FormItem"'},"​")],-1)),t[16]||(t[16]=d("p",null,[d("code",null,"FormItem"),r(" 可以不放在 "),d("code",null,"Form"),r(" 里面，从而进行单独使用。")],-1)),e(p,null,{default:o(()=>[e(u,null,{default:o(()=>[...t[8]||(t[8]=[d("textarea",{lang:"vue-html"},`  <lv-form-item label="开关">
    <lv-switch />
  </lv-form-item>
  `,-1)])]),_:1})]),_:1}),t[17]||(t[17]=v('<h3 id="对齐方式" tabindex="-1">对齐方式 <a class="header-anchor" href="#对齐方式" aria-label="Permalink to &quot;对齐方式&quot;">​</a></h3><p>通过设置 <code>label-position</code> 来应用标签和内容的对齐方式。</p><p>您可以分别设置 <code>l-form-item</code> 的 <code>label-position</code>. 如果值为空, 则会使用 <code>l-form</code> 的 <code>label-position</code>。</p>',3)),e(p,null,{default:o(()=>[e(u,null,{preview:o(()=>[e(l(h),{"label-position":b.value},{default:o(()=>[e(l(a),{label:"FormAlign","label-position":s.value},{default:o(()=>[e(x,{modelValue:b.value,"onUpdate:modelValue":t[2]||(t[2]=m=>b.value=m)},{default:o(()=>[e(c,{label:"Left",value:"left",type:"button"}),e(c,{label:"Right",value:"right",type:"button"}),e(c,{label:"Top",value:"top",type:"button"})]),_:1},8,["modelValue"])]),_:1},8,["label-position"]),e(l(a),{label:"用户名","label-position":s.value},{default:o(()=>[e(l(n),{placeholder:"请输入用户名"})]),_:1},8,["label-position"]),e(l(a),{label:"密码","label-position":s.value},{default:o(()=>[e(l(n),{placeholder:"请输入密码"})]),_:1},8,["label-position"]),e(l(a),{label:"","label-position":s.value},{default:o(()=>[e(l(f),{"html-type":"submit"},{default:o(()=>[...t[9]||(t[9]=[r("提交",-1)])]),_:1})]),_:1},8,["label-position"])]),_:1},8,["label-position"])]),default:o(()=>[t[10]||(t[10]=d("textarea",{lang:"vue-html"},`  <lv-form label-position="right">
    <lv-form-item label="用户名">
      <lv-input placeholder="请输入用户名"></lv-input>
    </lv-form-item>
    <lv-form-item label="密码">
      <lv-input placeholder="请输入密码"></lv-input>
    </lv-form-item>
    <lv-form-item label="">
      <lv-button html-type="submit">提交</lv-button>
    </lv-form-item>
  </lv-form>
  `,-1))]),_:1})]),_:1}),t[18]||(t[18]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model</code></td><td>表单数据对象</td><td><code>Record&lt;string, any&gt;</code></td><td>-</td></tr><tr><td><code>rules</code></td><td>表单验证规则</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签的长度，例如 <code>50px</code>。 作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值。</td><td><code>string</code></td><td><code>auto</code></td></tr><tr><td><code>label-position</code></td><td>标签的位置</td><td><code>left</code>、<code>right</code>、<code>top</code></td><td><code>right</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>submit</code></td><td>提交表单时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>required</code></td><td>是否为必填项，如不设置，则会根据校验规则确认</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>model</code> 的键名; 使用表单校验时必填</td><td><code>string</code></td><td>-</td></tr><tr><td><code>error</code></td><td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="form-methods" tabindex="-1">Form Methods <a class="header-anchor" href="#form-methods" aria-label="Permalink to &quot;Form Methods&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>validate</code></td><td>对整个表单进行校验的方法</td><td><code>() =&gt; void</code></td></tr><tr><td><code>validateField</code></td><td>对部分表单字段进行校验的方法</td><td><code>(field: string | string[]) =&gt; void</code></td></tr><tr><td><code>clearValidate</code></td><td>移除表单项的校验结果</td><td><code>-</code></td></tr></tbody></table>',9))])}}});export{$ as __pageData,E as default};
