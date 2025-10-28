import{q as u}from"./chunks/theme.j-P-CnI_.js";import{d as P,p as i,B as f,c as g,o as x,at as s,G as t,j as a,w as l,a as o,k as p}from"./chunks/framework.DUND-OMv.js";const N=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md","lastUpdated":1760171877000}'),V={name:"components/input.md"},C=P({...V,setup(I){const m=i(""),c=i(""),h=i(""),v=i("");function _(b){let e=parseInt(b,10);return Number.isNaN(e)?e="":e=Math.abs(e),String(e)}return(b,e)=>{const n=f("CodePreview"),r=f("ClientOnly");return x(),g("div",null,[e[8]||(e[8]=s("",5)),t(r,null,{default:l(()=>[t(n,null,{default:l(()=>[...e[4]||(e[4]=[a("textarea",{lang:"vue-html"},`<lv-input placeholder="请输入内容"></lv-input>
`,-1)])]),_:1})]),_:1}),e[9]||(e[9]=a("h3",{id:"输入解析",tabindex:"-1"},[o("输入解析 "),a("a",{class:"header-anchor",href:"#输入解析","aria-label":'Permalink to "输入解析"'},"​")],-1)),e[10]||(e[10]=a("p",null,[o("通过传递 "),a("code",null,"parser"),o(" 在接受到输入值的时候进行解析，例如：只允许输入正整数")],-1)),t(r,null,{default:l(()=>[t(n,null,{preview:l(()=>[t(p(u),{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=d=>m.value=d),placeholder:"请输入正整数",parser:_},null,8,["modelValue"])]),default:l(()=>[e[5]||(e[5]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { Input } from '../../src';
    import { ref } from 'vue';
    //-
    const inputInt = ref('')
    //-
    function numericParse(value: string) {
      let val = parseInt(value, 10)
      if (Number.isNaN(val)) {
        val = ''
      } else {
        val = Math.abs(val)
      }
      return String(val);
    }
  <\/script>
  <template>
    <lv-input v-model="inputInt" placeholder="请输入正整数" :parser="numericParse"></lv-input>
  </template>
  `,-1))]),_:1})]),_:1}),e[11]||(e[11]=s("",2)),t(r,null,{default:l(()=>[t(n,null,{preview:l(()=>[t(p(u),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=d=>c.value=d),placeholder:"只能输入正整数","allow-input":"integer"},null,8,["modelValue"]),t(p(u),{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=d=>h.value=d),placeholder:"只能输入整数","allow-input":"-integer"},null,8,["modelValue"]),t(p(u),{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=d=>v.value=d),placeholder:"输入数字,保留2位小数","allow-input":"-number.2"},null,8,["modelValue"])]),default:l(()=>[e[6]||(e[6]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
  <\/script>
  <template>
    <hr />
  </template>
  `,-1))]),_:1})]),_:1}),e[12]||(e[12]=a("h3",{id:"禁用状态",tabindex:"-1"},[o("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[13]||(e[13]=a("p",null,[o("通过 "),a("code",null,"disabled"),o(" 属性设置输入框为禁用状态。")],-1)),t(r,null,{default:l(()=>[t(n,null,{default:l(()=>[...e[7]||(e[7]=[a("textarea",{lang:"vue-html"},`  <lv-input placeholder="请输入内容" disabled></lv-input>
  `,-1)])]),_:1})]),_:1}),e[14]||(e[14]=s("",5))])}}});export{N as __pageData,C as default};
