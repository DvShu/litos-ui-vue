import{N as b,O as l,Q as v,S as f,T as h,U as y,V as c}from"./chunks/theme.CSHym8GW.js";import{p as x,B as s,c as T,o as g,at as u,G as e,j as n,w as a,k as r,a as d}from"./chunks/framework.BSvSrwQ3.js";const C=JSON.parse('{"title":"Tabbar 标签栏","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabbar.md","filePath":"components/tabbar.md","lastUpdated":1760171877000}'),P={name:"components/tabbar.md"},j=Object.assign(P,{setup(S){const m=x("2");return(q,t)=>{const o=s("CodePreview"),i=s("ClientOnly");return g(),T("div",null,[t[35]||(t[35]=u("",6)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{style:{border:"1px solid #dedede"}},{default:a(()=>[e(r(l),{name:"Reduction"},{icon:a(()=>[e(r(v))]),default:a(()=>[t[1]||(t[1]=n("span",null,"Reduction",-1))]),_:1}),e(r(l),{name:"RefreshLeft"},{icon:a(()=>[e(r(f))]),default:a(()=>[t[2]||(t[2]=n("span",null,"RefreshLeft",-1))]),_:1}),e(r(l),{name:"Search"},{icon:a(()=>[e(r(h))]),default:a(()=>[t[3]||(t[3]=n("span",null,"Search",-1))]),_:1}),e(r(l),{name:"RefreshRight"},{icon:a(()=>[e(r(y))]),default:a(()=>[t[4]||(t[4]=n("span",null,"RefreshRight",-1))]),_:1}),e(r(l),{name:"Sort"},{icon:a(()=>[e(r(c))]),default:a(()=>[t[5]||(t[5]=n("span",null,"Sort",-1))]),_:1})]),_:1})]),default:a(()=>[t[6]||(t[6]=n("textarea",{lang:"vue-html"},`  <lv-tabbar style="border: 1px solid #dedede">
    <lv-tabbar-item name="Reduction">
      <template #icon>
        <lt-reduction-icon />
      </template>
      <span>Reduction</span>
    </lv-tabbar-item>
    <lv-tabbar-item name="RefreshLeft">
      <template #icon>
        <lt-refresh-left-icon />
      </template>
      <span>RefreshLeft</span>
    </lv-tabbar-item>
    <lv-tabbar-item name="Search">
      <template #icon>
        <lv-search-icon />
      </template>
      <span>Search</span>
    </lv-tabbar-item>
    <lv-tabbar-item name="RefreshRight">
      <template #icon>
        <lt-refresh-right-icon />
      </template>
      <span>RefreshRight</span>
    </lv-tabbar-item>
    <lv-tabbar-item name="Sort">
      <template #icon>
        <lt-sort-icon />
      </template>
      <span>Sort</span>
    </lv-tabbar-item>
  </lv-tabbar>
  `,-1))]),_:1})]),_:1}),t[36]||(t[36]=n("h3",{id:"选项卡",tabindex:"-1"},[d("选项卡 "),n("a",{class:"header-anchor",href:"#选项卡","aria-label":'Permalink to "选项卡"'},"​")],-1)),t[37]||(t[37]=n("p",null,"基础的、简洁的选项卡，初始选中第2项",-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"bar",modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=p=>m.value=p)},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[7]||(t[7]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[8]||(t[8]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[9]||(t[9]=[d("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),default:a(()=>[t[10]||(t[10]=n("textarea",{lang:"vue"},`  <template>
  <lv-tabbar type="bar" v-model='active2'>
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  </template>
  <script setup>
  import { ref } from 'vue';
  const active2 = ref('2')
  <\/script>
  `,-1))]),_:1})]),_:1}),t[38]||(t[38]=n("h3",{id:"排列方式",tabindex:"-1"},[d("排列方式 "),n("a",{class:"header-anchor",href:"#排列方式","aria-label":'Permalink to "排列方式"'},"​")],-1)),t[39]||(t[39]=n("p",null,[d("主轴的排列方式，只对 "),n("code",null,"bar"),d(" 类型生效。只需要将 "),n("code",null,"justify-content"),d(" 的属性设置为 "),n("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#%E5%80%BC",target:"_blank",rel:"noreferrer"},"justify-content可用值"),d(" 即可。")],-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"bar","justify-content":"center"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[11]||(t[11]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[12]||(t[12]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[13]||(t[13]=[d("选项3",-1)])]),_:1})]),_:1}),t[23]||(t[23]=n("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-between"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[14]||(t[14]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[15]||(t[15]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[16]||(t[16]=[d("选项3",-1)])]),_:1})]),_:1}),t[24]||(t[24]=n("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-around"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[17]||(t[17]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[18]||(t[18]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[19]||(t[19]=[d("选项3",-1)])]),_:1})]),_:1}),t[25]||(t[25]=n("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-evenly"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[20]||(t[20]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[21]||(t[21]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[22]||(t[22]=[d("选项3",-1)])]),_:1})]),_:1})]),default:a(()=>[t[26]||(t[26]=n("textarea",{lang:"vue-html"},`  <lv-tabbar type="bar" justify-content="center">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  <hr />
  <lv-tabbar type="bar" justify-content="space-between">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  <hr />
  <lv-tabbar type="bar" justify-content="space-around">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  <hr />
  <lv-tabbar type="bar" justify-content="space-evenly">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  `,-1))]),_:1})]),_:1}),t[40]||(t[40]=n("h3",{id:"卡片式",tabindex:"-1"},[d("卡片式 "),n("a",{class:"header-anchor",href:"#卡片式","aria-label":'Permalink to "卡片式"'},"​")],-1)),t[41]||(t[41]=n("p",null,[d("具有卡片风格的标签。只需要设置 "),n("code",null,"type"),d(" 属性为 "),n("code",null,"card"),d(" 就可以使选项卡改变为标签风格。 同时可以通过 "),n("code",null,"gap"),d(" 调整选项卡之间的间距。")],-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"card"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[27]||(t[27]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[28]||(t[28]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[29]||(t[29]=[d("选项3",-1)])]),_:1})]),_:1}),t[33]||(t[33]=n("hr",null,null,-1)),e(r(b),{type:"card",gap:5},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>[...t[30]||(t[30]=[d("选项1",-1)])]),_:1}),e(r(l),{name:"2"},{default:a(()=>[...t[31]||(t[31]=[d("选项2",-1)])]),_:1}),e(r(l),{name:"3"},{default:a(()=>[...t[32]||(t[32]=[d("选项3",-1)])]),_:1})]),_:1})]),default:a(()=>[t[34]||(t[34]=n("textarea",{lang:"vue-html"},`  <lv-tabbar type="card">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  <hr />
  <lv-tabbar type="card" :gap="5">
    <lv-tabbar-item name="1">选项1</lv-tabbar-item>
    <lv-tabbar-item name="2">选项2</lv-tabbar-item>
    <lv-tabbar-item name="3">选项3</lv-tabbar-item>
  </lv-tabbar>
  `,-1))]),_:1})]),_:1}),t[42]||(t[42]=u("",11))])}}});export{C as __pageData,j as default};
