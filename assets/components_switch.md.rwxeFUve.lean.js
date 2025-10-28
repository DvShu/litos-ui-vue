import{F as h,N as b,O as w}from"./chunks/theme.j-P-CnI_.js";import{p as v,B as u,c as f,o as s,at as p,G as d,j as e,w as a,k as r,a as o,b as m}from"./chunks/framework.DUND-OMv.js";const V=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md","lastUpdated":1760171877000}'),x={name:"components/switch.md"},q=Object.assign(x,{setup(k){const n=v(!0);return(_,t)=>{const i=u("CodePreview"),c=u("ClientOnly");return s(),f("div",null,[t[6]||(t[6]=p("",5)),d(c,null,{default:a(()=>[d(i,null,{preview:a(()=>[d(r(h),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l)},null,8,["modelValue"])]),default:a(()=>[t[3]||(t[3]=e("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const open = ref(true);
  <\/script>
  <template>
    <lv-switch v-model="open"></lv-switch>
  </template>
  `,-1))]),_:1})]),_:1}),t[7]||(t[7]=e("h3",{id:"文字描述",tabindex:"-1"},[o("文字描述 "),e("a",{class:"header-anchor",href:"#文字描述","aria-label":'Permalink to "文字描述"'},"​")],-1)),t[8]||(t[8]=e("p",null,[o("使用 "),e("code",null,"checked-text"),o(" 和 "),e("code",null,"unchecked-text"),o(" 属性来设置开关的文字描述。")],-1)),d(c,null,{default:a(()=>[d(i,null,{preview:a(()=>[d(r(h),{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),"checked-text":"Y","unchecked-text":"N"},null,8,["modelValue"])]),default:a(()=>[t[4]||(t[4]=e("textarea",{lang:"vue"},`  <template>
    <lv-switch v-model="open" checked-text="Y" unchecked-text="N"></lv-switch>
  </template>
  `,-1))]),_:1})]),_:1}),t[9]||(t[9]=e("h3",{id:"自定义操作图标",tabindex:"-1"},[o("自定义操作图标 "),e("a",{class:"header-anchor",href:"#自定义操作图标","aria-label":'Permalink to "自定义操作图标"'},"​")],-1)),t[10]||(t[10]=e("p",null,[o("使用 "),e("code",null,"action"),o(" 插槽, 配合 "),e("code",null,"props-checked"),o(" 作用域来自定义渲染操作图标。")],-1)),d(c,null,{default:a(()=>[d(i,null,{preview:a(()=>[d(r(h),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value=l)},{action:a(l=>[l.checked?(s(),m(r(b),{key:0})):(s(),m(r(w),{key:1}))]),_:1},8,["modelValue"])]),default:a(()=>[t[5]||(t[5]=e("textarea",{lang:"vue-html"},`  <template>
    <lv-switch v-model="open">
      <template #action="slotProp">
        <lt-moon-icon v-if="slotProp.checked"></lt-moon-icon>
        <lt-sun-icon v-else></lt-sun-icon>
      </template>
    </lv-switch>
  </template>
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=p("",9))])}}});export{V as __pageData,q as default};
