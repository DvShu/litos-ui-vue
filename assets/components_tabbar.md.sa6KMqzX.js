import{Q as b,S as l,T as v,U as f,V as h,W as y,X as c}from"./chunks/theme.DrcBp2Zx.js";import{p as x,B as s,c as T,o as g,at as u,G as e,j as n,w as a,k as r,a as d}from"./chunks/framework.DUND-OMv.js";const C=JSON.parse('{"title":"Tabbar 标签栏","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabbar.md","filePath":"components/tabbar.md","lastUpdated":1760171877000}'),P={name:"components/tabbar.md"},j=Object.assign(P,{setup(S){const m=x("2");return(q,t)=>{const o=s("CodePreview"),i=s("ClientOnly");return g(),T("div",null,[t[35]||(t[35]=u('<h1 id="tabbar-标签栏" tabindex="-1">Tabbar 标签栏 <a class="header-anchor" href="#tabbar-标签栏" aria-label="Permalink to &quot;Tabbar 标签栏&quot;">​</a></h1><p>使用场景如下:</p><ol><li>底部导航栏，用于在不同页面之间进行切换</li><li>标签切换</li><li>选项卡</li></ol><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="导航栏模式" tabindex="-1">导航栏模式 <a class="header-anchor" href="#导航栏模式" aria-label="Permalink to &quot;导航栏模式&quot;">​</a></h3><p>将 <code>type</code> 设置为 <code>nav</code>[默认]</p>',6)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{style:{border:"1px solid #dedede"}},{default:a(()=>[e(r(l),{name:"Reduction"},{icon:a(()=>[e(r(v))]),default:a(()=>[t[1]||(t[1]=n("span",null,"Reduction",-1))]),_:1}),e(r(l),{name:"RefreshLeft"},{icon:a(()=>[e(r(f))]),default:a(()=>[t[2]||(t[2]=n("span",null,"RefreshLeft",-1))]),_:1}),e(r(l),{name:"Search"},{icon:a(()=>[e(r(h))]),default:a(()=>[t[3]||(t[3]=n("span",null,"Search",-1))]),_:1}),e(r(l),{name:"RefreshRight"},{icon:a(()=>[e(r(y))]),default:a(()=>[t[4]||(t[4]=n("span",null,"RefreshRight",-1))]),_:1}),e(r(l),{name:"Sort"},{icon:a(()=>[e(r(c))]),default:a(()=>[t[5]||(t[5]=n("span",null,"Sort",-1))]),_:1})]),_:1})]),default:a(()=>[t[6]||(t[6]=n("textarea",{lang:"vue-html"},`  <lv-tabbar style="border: 1px solid #dedede">
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
  `,-1))]),_:1})]),_:1}),t[42]||(t[42]=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tabbar-props" tabindex="-1">Tabbar Props <a class="header-anchor" href="#tabbar-props" aria-label="Permalink to &quot;Tabbar Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>选中的选项卡</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>风格</td><td><code>nav</code>、<code>bar</code>、<code>card</code></td><td><code>nav</code></td></tr><tr><td><code>justify-content</code></td><td>主轴的排列方式</td><td><code>string</code></td><td><code>flex-start</code></td></tr><tr><td><code>gap</code></td><td>选项卡之间的间距</td><td><code>number</code></td><td><code>0</code></td></tr></tbody></table><h3 id="tabbar-events" tabindex="-1">Tabbar Events <a class="header-anchor" href="#tabbar-events" aria-label="Permalink to &quot;Tabbar Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选项卡切换时触发</td><td><code>(active: string) =&gt; void</code></td></tr></tbody></table><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props <a class="header-anchor" href="#tabbaritem-props" aria-label="Permalink to &quot;TabbarItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的唯一标识</td><td><code>string</code> | <code>name</code></td><td>-</td></tr></tbody></table><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots <a class="header-anchor" href="#tabbaritem-slots" aria-label="Permalink to &quot;TabbarItem Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>icon</code></td><td>选项卡的图标</td></tr><tr><td><code>default</code></td><td>选项卡的内容</td></tr></tbody></table><h3 id="tabbar-css-vars" tabindex="-1">Tabbar Css Vars <a class="header-anchor" href="#tabbar-css-vars" aria-label="Permalink to &quot;Tabbar Css Vars&quot;">​</a></h3><table tabindex="0"><thead><tr><th>变量名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--l-tabbar-hover-color</code></td><td>选项卡的鼠标悬浮时的颜色</td><td><code>var(--l-primary-color-light1)</code></td></tr><tr><td><code>--l-tabbar-active-color</code></td><td>选项卡的选中时的颜色</td><td><code>var(--l-primary-color)</code></td></tr><tr><td><code>--l-tabbar-item-gap</code></td><td>选项卡之间的间距</td><td><code>0</code></td></tr><tr><td><code>--l-tabbar-height</code></td><td>选项卡的高度</td><td><code>38px</code>[<code>nav</code>时默认为: <code>50px</code>]</td></tr><tr><td><code>--l-tabbar-line-color</code></td><td>下划线的颜色</td><td><code>var(--l-primary-color)</code></td></tr><tr><td><code>--l-tabbar-card-border-color</code></td><td>卡片选项卡的边框颜色</td><td><code>#f5f7fa</code></td></tr><tr><td><code>--l-tabbar-card-border-radius</code></td><td>卡片选项卡的边框圆角</td><td><code>5px</code></td></tr></tbody></table>',11))])}}});export{C as __pageData,j as default};
