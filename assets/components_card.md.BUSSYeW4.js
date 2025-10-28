import{a as o,_ as n}from"./chunks/theme.j-P-CnI_.js";import{B as u,c as p,o as f,j as d,G as a,at as v,a as l,w as e,k as r}from"./chunks/framework.DUND-OMv.js";const m={class:"grid grid-cols-3 gap-4"},P=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1760171877000}'),x={name:"components/card.md"},C=Object.assign(x,{setup(h){return(b,t)=>{const s=u("CodePreview"),i=u("ClientOnly");return f(),p("div",null,[t[20]||(t[20]=d("h1",{id:"card-卡片",tabindex:"-1"},[l("Card 卡片 "),d("a",{class:"header-anchor",href:"#card-卡片","aria-label":'Permalink to "Card 卡片"'},"​")],-1)),t[21]||(t[21]=d("p",null,"通用卡片应用，常用于后台概览页面。",-1)),t[22]||(t[22]=d("h2",{id:"典型卡片",tabindex:"-1"},[l("典型卡片 "),d("a",{class:"header-anchor",href:"#典型卡片","aria-label":'Permalink to "典型卡片"'},"​")],-1)),t[23]||(t[23]=d("p",null,"包含标题、内容、操作区域。",-1)),a(i,null,{default:e(()=>[a(s,null,{preview:e(()=>[a(r(o),{"header-text":"card title"},{default:e(()=>[...t[0]||(t[0]=[d("div",null,"卡片内容",-1)])]),"header-extra":e(()=>[a(r(n),{text:""},{default:e(()=>[...t[1]||(t[1]=[l("按钮",-1)])]),_:1})]),_:1})]),default:e(()=>[t[2]||(t[2]=d("textarea",{lang:"vue-html"},`<lv-card header-text="card title">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lv-button text>按钮</lv-button>
</template>
</lv-card>
`,-1))]),_:1})]),_:1}),t[24]||(t[24]=d("h2",{id:"简洁卡片",tabindex:"-1"},[l("简洁卡片 "),d("a",{class:"header-anchor",href:"#简洁卡片","aria-label":'Permalink to "简洁卡片"'},"​")],-1)),t[25]||(t[25]=d("p",null,"只包含内容区域",-1)),a(i,null,{default:e(()=>[a(s,null,{preview:e(()=>[a(r(o),{"header-text":"card title","show-header":!1},{default:e(()=>[...t[3]||(t[3]=[d("div",null,"卡片内容",-1)])]),_:1})]),default:e(()=>[t[4]||(t[4]=d("textarea",{lang:"vue-html"},`<lv-card header-text="card title" :show-header="false">
<template v-slot:default>
<div>卡片内容</div>
</template>
</lv-card>
`,-1))]),_:1})]),_:1}),t[26]||(t[26]=d("h2",{id:"完整卡片",tabindex:"-1"},[l("完整卡片 "),d("a",{class:"header-anchor",href:"#完整卡片","aria-label":'Permalink to "完整卡片"'},"​")],-1)),t[27]||(t[27]=d("p",null,"卡片包含标题，内容、操作区域以及底部区域。",-1)),a(i,null,{default:e(()=>[a(s,null,{preview:e(()=>[a(r(o),{"header-text":"card title","show-footer":"","footer-text":"底部区域"},{default:e(()=>[...t[5]||(t[5]=[d("div",null,"卡片内容",-1)])]),"header-extra":e(()=>[a(r(n),{text:"",type:"primary"},{default:e(()=>[...t[6]||(t[6]=[l("按钮",-1)])]),_:1})]),_:1})]),default:e(()=>[t[7]||(t[7]=d("textarea",{lang:"vue-html"},`<lv-card header-text="card title" show-footer footer-text="底部区域">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lv-button text>按钮</lv-button>
</template>
</lv-card>
`,-1))]),_:1})]),_:1}),t[28]||(t[28]=v('<h2 id="卡片标题" tabindex="-1">卡片标题 <a class="header-anchor" href="#卡片标题" aria-label="Permalink to &quot;卡片标题&quot;">​</a></h2><p>标题和底部区域除了可以通过 <code>header-text</code> 和 <code>footer-text</code> 传递以外，也可以通过 <code>header</code> 和 <code>footer</code> <code>slot</code> 自定义 。</p>',2)),a(i,null,{default:e(()=>[a(s,null,{preview:e(()=>[a(r(o),{"show-footer":!0},{header:e(()=>[...t[8]||(t[8]=[d("span",{style:{color:"red"}},"卡片标题",-1)])]),default:e(()=>[...t[9]||(t[9]=[d("div",null,"卡片内容",-1)])]),"header-extra":e(()=>[a(r(n),{text:""},{default:e(()=>[...t[10]||(t[10]=[l("按钮",-1)])]),_:1})]),footer:e(()=>[...t[11]||(t[11]=[d("span",{style:{color:"orange"}},"卡片标题",-1)])]),_:1})]),default:e(()=>[t[12]||(t[12]=d("textarea",{lang:"vue-html"},`<lv-card :show-footer="true">
<template v-slot:header>
<span style="color: red">卡片标题</span>
</template>
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lv-button text>按钮</lv-button>
</template>
<template v-slot:footer>
<span style="color: orange">卡片标题</span>
</template>
</lv-card>
`,-1))]),_:1})]),_:1}),t[29]||(t[29]=d("h2",{id:"栅格卡片",tabindex:"-1"},[l("栅格卡片 "),d("a",{class:"header-anchor",href:"#栅格卡片","aria-label":'Permalink to "栅格卡片"'},"​")],-1)),t[30]||(t[30]=d("p",null,"在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。",-1)),t[31]||(t[31]=d("p",null,[l("关于栅格布局，框架不提供，推荐使用 "),d("a",{href:"https://unocss.dev/interactive/?s=grid",target:"_blank",rel:"noreferrer"},"unocss"),l(" 或者 "),d("a",{href:"https://www.tailwindcss.cn/docs/display#grid",target:"_blank",rel:"noreferrer"},"tailwindcss"),l(" 的 "),d("code",null,"grid"),l(" 实现")],-1)),a(i,null,{default:e(()=>[a(s,null,{preview:e(()=>[d("div",m,[a(r(o),{"header-text":"卡片标题1"},{default:e(()=>[...t[13]||(t[13]=[d("div",null,"卡片内容1",-1)])]),"header-extra":e(()=>[a(r(n),{text:""},{default:e(()=>[...t[14]||(t[14]=[l("按钮",-1)])]),_:1})]),_:1}),a(r(o),{"header-text":"卡片标题2"},{default:e(()=>[...t[15]||(t[15]=[d("div",null,"卡片内容2",-1)])]),"header-extra":e(()=>[a(r(n),{text:""},{default:e(()=>[...t[16]||(t[16]=[l("按钮",-1)])]),_:1})]),_:1}),a(r(o),{"header-text":"卡片标题3"},{default:e(()=>[...t[17]||(t[17]=[d("div",null,"卡片内容3",-1)])]),"header-extra":e(()=>[a(r(n),{text:""},{default:e(()=>[...t[18]||(t[18]=[l("按钮",-1)])]),_:1})]),_:1})])]),default:e(()=>[t[19]||(t[19]=d("textarea",{lang:"vue-html"},`  <div class="grid grid-cols-3 gap-4">
    <lv-card header-text="卡片标题1">
      <template v-slot:default>
        <div>卡片内容1</div>
      </template>
      <template v-slot:header-extra>
        <lv-button text>按钮</lv-button>
      </template>
    </lv-card>
    <lv-card header-text="卡片标题2">
      <template v-slot:default>
        <div>卡片内容2</div>
      </template>
      <template v-slot:header-extra>
        <lv-button text>按钮</lv-button>
      </template>
    </lv-card>
    <lv-card header-text="卡片标题3">
      <template v-slot:default>
        <div>卡片内容3</div>
      </template>
      <template v-slot:header-extra>
        <lv-button text>按钮</lv-button>
      </template>
    </lv-card>
  </div>
  `,-1))]),_:1})]),_:1}),t[32]||(t[32]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="card-props" tabindex="-1">Card Props <a class="header-anchor" href="#card-props" aria-label="Permalink to &quot;Card Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>header-text</code></td><td><code>string</code></td><td>-</td><td>标题</td></tr><tr><td><code>show-header</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示标题</td></tr><tr><td><code>footer-text</code></td><td><code>string</code></td><td>-</td><td>底部区域内容</td></tr><tr><td><code>show-footer</code></td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示底部区域</td></tr><tr><td><code>body-class</code></td><td><code>string</code></td><td>-</td><td>内容区域样式</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots <a class="header-anchor" href="#card-slots" aria-label="Permalink to &quot;Card Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>内容区域内容</td></tr><tr><td><code>header</code></td><td>自定义标题内容</td></tr><tr><td><code>footer</code></td><td>自定义底部区域内容</td></tr><tr><td><code>header-extra</code></td><td>自定义标题右侧内容[操作区域]</td></tr></tbody></table>',5))])}}});export{P as __pageData,C as default};
