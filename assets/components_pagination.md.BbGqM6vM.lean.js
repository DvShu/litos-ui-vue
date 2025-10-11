import{A as l,n as c,C as m}from"./chunks/theme.DD-_cGzL.js";import{p as h,B as p,c as b,o as f,at as u,G as a,j as e,w as n,k as o,a as d}from"./chunks/framework.BSvSrwQ3.js";const T=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1760171877000}'),v={name:"components/pagination.md"},k=Object.assign(v,{setup(P){const s=h(!1);return(_,t)=>{const i=p("CodePreview"),r=p("ClientOnly");return f(),b("div",null,[t[8]||(t[8]=u("",5)),a(r,null,{default:n(()=>[a(i,null,{preview:n(()=>[a(o(l),{total:100})]),default:n(()=>[t[1]||(t[1]=e("textarea",{lang:"vue"},`  <script setup lang="ts">
    function handlePageChange(currentPage: number) {
      console.log(currentPage)
    }
  <\/script>
  <template>
    <lv-pagination :total="100" @change="handlePageChange"></lv-pagination>
  </template>
  `,-1))]),_:1})]),_:1}),t[9]||(t[9]=e("h3",{id:"对齐方式",tabindex:"-1"},[d("对齐方式 "),e("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1)),t[10]||(t[10]=e("p",null,[d("通过 "),e("code",null,"align"),d(" 可以设置对齐方式，取值有: "),e("code",null,"start"),e("strong",null,"默认"),d("、"),e("code",null,"center"),d("、"),e("code",null,"end")],-1)),a(r,null,{default:n(()=>[a(i,null,{preview:n(()=>[a(o(l),{total:100,align:"start"}),t[2]||(t[2]=e("hr",null,null,-1)),a(o(l),{total:100,align:"center"}),t[3]||(t[3]=e("hr",null,null,-1)),a(o(l),{total:100,align:"end"})]),default:n(()=>[t[4]||(t[4]=e("textarea",{lang:"vue-html"},`  <lv-pagination :total="100" align="start"></lv-pagination>
  <hr />
  <lv-pagination :total="100" align="center"></lv-pagination>
  <hr />
  <lv-pagination :total="100" align="end"></lv-pagination>
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=e("h3",{id:"单页隐藏",tabindex:"-1"},[d("单页隐藏 "),e("a",{class:"header-anchor",href:"#单页隐藏","aria-label":'Permalink to "单页隐藏"'},"​")],-1)),t[12]||(t[12]=e("p",null,[d("当只有一页时，通过 "),e("code",null,"single-hide"),d(" 配置隐藏分页")],-1)),a(r,null,{default:n(()=>[a(i,null,{preview:n(()=>[a(o(c),{label:"单页隐藏"},{default:n(()=>[a(o(m),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=g=>s.value=g)},null,8,["modelValue"])]),_:1}),t[5]||(t[5]=e("hr",null,null,-1)),a(o(l),{"page-count":1,"hide-on-single-page":s.value},null,8,["hide-on-single-page"])]),default:n(()=>[t[6]||(t[6]=e("textarea",{lang:"vue"},`  <script setup lang="ts">
    const singleHide = ref(false)
  <\/script>
  <template>
    <lv-form-item label="单页隐藏">
      <lv-switch v-model="singleHide" />
    </lv-form-item>
    <hr />
    <lv-pagination :page-count="1" :hide-on-single-page="singleHide"></lv-pagination>
  </template>
  `,-1))]),_:1})]),_:1}),t[13]||(t[13]=e("h3",{id:"简单分页",tabindex:"-1"},[d("简单分页 "),e("a",{class:"header-anchor",href:"#简单分页","aria-label":'Permalink to "简单分页"'},"​")],-1)),t[14]||(t[14]=e("p",null,"简单的分页，在空间有限的情况下，可以使用简单分页。",-1)),a(r,null,{default:n(()=>[a(i,null,{preview:n(()=>[a(o(l),{"page-count":100,simple:""})]),default:n(()=>[t[7]||(t[7]=e("textarea",{lang:"vue-html"},`  <lv-pagination :page-count="100" simple></lv-pagination>
  `,-1))]),_:1})]),_:1}),t[15]||(t[15]=u("",5))])}}});export{T as __pageData,k as default};
