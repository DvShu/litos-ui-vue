const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/theme.DD-_cGzL.js","assets/chunks/framework.BSvSrwQ3.js"])))=>i.map(i=>d[i]);
import{p as k,q as v,v as E,V as c,B as u,c as _,o as y,at as h,G as e,j as l,w as a,k as i,a as o}from"./chunks/framework.BSvSrwQ3.js";import{Z as f,$ as T,a0 as C,a1 as F,p as A,q as d,a2 as w,K as B,J as D,a3 as P,a4 as q}from"./chunks/theme.DD-_cGzL.js";const j=JSON.parse('{"title":"Theme 主题切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/theme.md","filePath":"components/theme.md","lastUpdated":1760171877000}'),x={name:"components/theme.md"},S=Object.assign(x,{setup(V){const t=k(""),m=k("");v(t,n=>{c(()=>import("./chunks/theme.DD-_cGzL.js").then(s=>s.aA),__vite__mapDeps([0,1])).then(s=>s.applyTheme(n))}),E(()=>{c(()=>import("./chunks/theme.DD-_cGzL.js").then(n=>n.aA),__vite__mapDeps([0,1])).then(n=>{t.value=n.getTheme()})});function b(){const n=document.getElementById("color-theme-style");if(n!=null){let s=n.innerHTML;s=s.replace("{",` {\r
  `).replaceAll(";",`;\r
  `).replace("  }","}"),m.value=s}}return(n,s)=>{const r=u("CodePreview"),p=u("ClientOnly");return y(),_("div",null,[s[5]||(s[5]=h("",7)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(i(f)),e(i(T),{class:"ml-10"}),e(i(C),{class:"ml-10"}),e(i(F),{class:"mt-15"})]),default:a(()=>[s[1]||(s[1]=l("textarea",{lang:"vue-html"},`  <lv-theme-button></lv-theme-button>
  <lv-theme-select class="ml-10"></lv-theme-select>
  <lv-theme-switch class="ml-10"></lv-theme-switch>
  <lv-theme-radio class="mt-15"></lv-theme-radio>
  `,-1))]),_:1})]),_:1}),s[6]||(s[6]=h("",6)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(i(A),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=g=>t.value=g)},{default:a(()=>[e(i(d),{value:"auto",type:"button"},{default:a(()=>[e(i(w))]),_:1}),e(i(d),{value:"light",type:"button"},{default:a(()=>[e(i(B))]),_:1}),e(i(d),{value:"dark",type:"button"},{default:a(()=>[e(i(D))]),_:1})]),_:1},8,["modelValue"])]),default:a(()=>[s[2]||(s[2]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref, watch } from 'vue';
    import { getTheme, applyTheme } from 'ph-utils/theme';
    // 获取当前主题
    const theme = ref(getTheme());
    // 主题改变时, 应用主题
    watch(theme, (val) => {
      applyTheme(val).then();
    });
  <\/script>
  <template>
    <lv-radio-group v-model="theme">
      <lv-radio value="auto" type="button">
        <lv-theme-default-icon></lv-theme-default-icon>
      </lv-radio>
      <lv-radio value="light" type="button">
        <lt-sun-icon></lt-sun-icon>
      </lv-radio>
      <lv-radio value="dark" type="button">
        <lt-moon-icon></lt-moon-icon>
      </lv-radio>
    </lv-radio-group>
  </template>
  `,-1))]),_:1})]),_:1}),s[7]||(s[7]=l("h3",{id:"更改主题色",tabindex:"-1"},[o("更改主题色 "),l("a",{class:"header-anchor",href:"#更改主题色","aria-label":'Permalink to "更改主题色"'},"​")],-1)),s[8]||(s[8]=l("p",null,[o("除了修改主题风格，还可以修改主题色，通过修改 "),l("code",null,"ThemeColor"),o(" 来实现。")],-1)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(i(P),{onChange:b})]),default:a(()=>[s[3]||(s[3]=l("textarea",{lang:"vue-html"},`  <lv-theme-color></lv-theme-color>
  `,-1))]),_:1})]),_:1}),s[9]||(s[9]=l("p",null,"生成的主题色代码如下:",-1)),e(p,null,{default:a(()=>[e(q,{"source-code":m.value},{default:a(()=>[...s[4]||(s[4]=[l("textarea",{lang:"css"},`:root {
  --l-primary-color: #722ed1;
  --l-primary-color-light1: #9254de;
  --l-primary-color-light2: #b37feb;
  --l-primary-color-light3: #d3adf7;
  --l-primary-color-light4: #efdbff;
  --l-primary-color-light5: #f9f0ff;
  --l-primary-color-dark1: #531dab;
}
`,-1)])]),_:1},8,["source-code"])]),_:1}),s[10]||(s[10]=h("",2))])}}});export{j as __pageData,S as default};
