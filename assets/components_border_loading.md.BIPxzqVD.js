import{B as s}from"./chunks/theme.j-P-CnI_.js";import{p,B as u,c as r,o as i,at as f,G as n,j as o,w as a,a5 as m,a as t,k as v}from"./chunks/framework.DUND-OMv.js";const _={class:"loading-demo"},b={class:"loading-demo"},C=JSON.parse('{"title":"BorderLoadingDirective 边框加载动画","description":"","frontmatter":{},"headers":[],"relativePath":"components/border_loading.md","filePath":"components/border_loading.md","lastUpdated":1729613669000}'),h={name:"components/border_loading.md"},q=Object.assign(h,{setup(x){const c=p(!0),g=p(15);return(P,e)=>{const l=u("CodePreview"),d=u("ClientOnly");return i(),r("div",null,[e[4]||(e[4]=f('<h1 id="borderloadingdirective-边框加载动画" tabindex="-1">BorderLoadingDirective 边框加载动画 <a class="header-anchor" href="#borderloadingdirective-边框加载动画" aria-label="Permalink to &quot;BorderLoadingDirective 边框加载动画&quot;">​</a></h1><p>另一种加载动画</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="区域加载" tabindex="-1">区域加载 <a class="header-anchor" href="#区域加载" aria-label="Permalink to &quot;区域加载&quot;">​</a></h3><p>在某一个区域加载数据时展示, 只需要设置 <code>v-border-loading</code> 属性即可。</p>',5)),n(d,null,{default:a(()=>[n(l,null,{preview:a(()=>[m((i(),r("div",_,[...e[0]||(e[0]=[t(" 内容加载区域 ",-1)])])),[[v(s),c.value]])]),default:a(()=>[e[1]||(e[1]=o("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    //-
    const loading = ref(true);
  <\/script>
  <template>
    <div class="loading-demo" v-border-loading="loading">
      内容加载区域
    </div>
  </template>
`,-1))]),_:1})]),_:1}),e[5]||(e[5]=o("h3",{id:"更改动画时长",tabindex:"-1"},[t("更改动画时长 "),o("a",{class:"header-anchor",href:"#更改动画时长","aria-label":'Permalink to "更改动画时长"'},"​")],-1)),e[6]||(e[6]=o("p",null,[t("只需要将 "),o("code",null,"v-border-loading"),t(" 指向一个数字即可。")],-1)),n(d,null,{default:a(()=>[n(l,null,{preview:a(()=>[m((i(),r("div",b,[...e[2]||(e[2]=[t(" 内容加载区域 ",-1)])])),[[v(s),g.value]])]),default:a(()=>[e[3]||(e[3]=o("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    //-
    const loading1 = ref(15)
  <\/script>
  <template>
    <div class="loading-demo" v-border-loading="loading1">
      内容加载区域
    </div>
  </template>
  `,-1))]),_:1})]),_:1}),e[7]||(e[7]=o("blockquote",null,[o("p",null,[t("指令需要设置相对定位: "),o("code",null,"position: relative")])],-1))])}}});export{C as __pageData,q as default};
