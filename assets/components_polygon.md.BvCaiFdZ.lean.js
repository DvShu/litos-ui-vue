import{G as l}from"./chunks/theme.j-P-CnI_.js";import{B as i,c as g,o as h,at as p,G as o,j as e,w as a,k as n,a as d}from"./chunks/framework.DUND-OMv.js";const c={class:"grid grid-cols-4"},u={class:"center flex-col"},f={class:"center flex-col"},b={class:"center flex-col"},m={class:"center flex-col"},y={class:"grid grid-cols-4 mt-15"},v={class:"center flex-col"},_={class:"center flex-col"},P={class:"center flex-col"},x={class:"center flex-col"},A=JSON.parse('{"title":"Polygon 多边形","description":"","frontmatter":{},"headers":[],"relativePath":"components/polygon.md","filePath":"components/polygon.md","lastUpdated":1760171877000}'),k={name:"components/polygon.md"},N=Object.assign(k,{setup(T){return(q,t)=>{const r=i("CodePreview"),s=i("ClientOnly");return h(),g("div",null,[t[10]||(t[10]=p("",5)),o(s,null,{default:a(()=>[o(r,null,{preview:a(()=>[e("div",c,[e("div",u,[o(n(l),{shape:"triangle-top"}),t[0]||(t[0]=e("span",null,"triangle-top",-1))]),e("div",f,[o(n(l),{shape:"triangle-bottom"}),t[1]||(t[1]=e("span",null,"triangle-bottom",-1))]),e("div",b,[o(n(l),{shape:"triangle-left"}),t[2]||(t[2]=e("span",null,"triangle-left",-1))]),e("div",m,[o(n(l),{shape:"triangle-right"}),t[3]||(t[3]=e("span",null,"triangle-right",-1))])]),e("div",y,[e("div",v,[o(n(l),{shape:"triangle-top-right"}),t[4]||(t[4]=e("span",null,"triangle-top-right",-1))]),e("div",_,[o(n(l),{shape:"triangle-top-left"}),t[5]||(t[5]=e("span",null,"triangle-top-left",-1))]),e("div",P,[o(n(l),{shape:"triangle-bottom-right"}),t[6]||(t[6]=e("span",null,"triangle-bottom-right",-1))]),e("div",x,[o(n(l),{shape:"triangle-bottom-left"}),t[7]||(t[7]=e("span",null,"triangle-bottom-left",-1))])])]),default:a(()=>[t[8]||(t[8]=e("textarea",{lang:"vue-html"},`  <div class="grid grid-cols-4">
    <div class="center flex-col">
      <Polygon shape="triangle-top"></Polygon>
      <span>triangle-top</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom"></Polygon>
      <span>triangle-bottom</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-left"></Polygon>
      <span>triangle-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-right"></Polygon>
      <span>triangle-right</span>
    </div>
  </div>
  <div class="grid grid-cols-4 mt-15">
    <div class="center flex-col">
      <Polygon shape="triangle-top-right"></Polygon>
      <span>triangle-top-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-top-left"></Polygon>
      <span>triangle-top-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-right"></Polygon>
      <span>triangle-bottom-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-left"></Polygon>
      <span>triangle-bottom-left</span>
    </div>
  </div>
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=e("h3",{id:"自定义菱形",tabindex:"-1"},[d("自定义菱形 "),e("a",{class:"header-anchor",href:"#自定义菱形","aria-label":'Permalink to "自定义菱形"'},"​")],-1)),t[12]||(t[12]=e("p",null,[d("传递 "),e("code",null,"shape"),d(" 为 "),e("code",null,"rhombus"),d("。然后自己定义 "),e("code",null,"l-polygon-rhombus"),d(" 样式即可。同时可以通过 "),e("code",null,"background"),d(" 设置图形颜色")],-1)),o(s,null,{default:a(()=>[o(r,null,{preview:a(()=>[o(n(l),{shape:"rhombus",background:"red"})]),default:a(()=>[t[9]||(t[9]=e("textarea",{lang:"vue"},`  <template>
    <lt-polygon shape="rhombus" background="red"></lt-polygon>
  </template>
  <style>
    .l-polygon-rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  </style>
  `,-1))]),_:1})]),_:1}),t[13]||(t[13]=p("",5))])}}});export{A as __pageData,N as default};
