import{g as s}from"./chunks/theme.DD-_cGzL.js";import{B as o,c as r,o as c,at as d,G as t,j as e,w as l,a as n}from"./chunks/framework.BSvSrwQ3.js";const b=JSON.parse('{"title":"Container 容器布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md","lastUpdated":1760171877000}'),h={name:"components/container.md"},x=Object.assign(h,{setup(m){return(u,a)=>{const i=o("ClientOnly");return c(),r("div",null,[a[6]||(a[6]=d('<h1 id="container-容器布局" tabindex="-1">Container 容器布局 <a class="header-anchor" href="#container-容器布局" aria-label="Permalink to &quot;Container 容器布局&quot;">​</a></h1><p>容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：</p><ul><li><code>l-container</code>：外层容器，一般用于 <code>section</code> 标签，基本排版为水平左右排列，可以通过设置 <code>l-layout-verticle</code> 调整为垂直上下排列。可以嵌套</li><li><code>l-header</code>：顶栏容器，一般用于 <code>header</code> 标签</li><li><code>l-aside</code>: 侧边栏容器，一般用于 <code>aside</code> 标签</li><li><code>l-main</code>: 主要区域容器，一般用于 <code>main</code> 标签</li><li><code>l-footer</code>: 底栏容器，一般用于 <code>footer</code> 标签</li></ul><p>通常用于后台管理系统的首页排版</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>由于使用不是特别频繁，所以没有封装为组件，在需要时手动引入样式表</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;litos-ui-vue/style/container.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2><h3 id="上下两栏排版" tabindex="-1">上下两栏排版 <a class="header-anchor" href="#上下两栏排版" aria-label="Permalink to &quot;上下两栏排版&quot;">​</a></h3>',9)),t(i,null,{default:l(()=>[t(s,{class:"mt-15"},{default:l(()=>[...a[0]||(a[0]=[e("textarea",{lang:"html"},`  <section class="l-container l-layout-vertical">
    <header class="l-header">Header</header>
    <main class="l-main">Main</main>
  </section>
  `,-1)])]),_:1})]),_:1}),a[7]||(a[7]=e("h3",{id:"左右两栏排版",tabindex:"-1"},[n("左右两栏排版 "),e("a",{class:"header-anchor",href:"#左右两栏排版","aria-label":'Permalink to "左右两栏排版"'},"​")],-1)),t(i,null,{default:l(()=>[t(s,{class:"mt-15"},{default:l(()=>[...a[1]||(a[1]=[e("textarea",{lang:"html"},`  <section class="l-container">
    <aside class="l-aside">Aside</aside>
    <main class="l-main">Main</main>
  </section>
  `,-1)])]),_:1})]),_:1}),a[8]||(a[8]=e("h3",{id:"上下两栏嵌套",tabindex:"-1"},[n("上下两栏嵌套 "),e("a",{class:"header-anchor",href:"#上下两栏嵌套","aria-label":'Permalink to "上下两栏嵌套"'},"​")],-1)),t(i,null,{default:l(()=>[t(s,{class:"mt-15"},{default:l(()=>[...a[2]||(a[2]=[e("textarea",{lang:"html"},`  <section class="l-container l-layout-vertical">
    <header class="l-header">Header</header>
    <section class="l-container">
      <aside class="l-aside">Aside</aside>
      <main class="l-main">Main</main>
    </section>
  </section>
  `,-1)])]),_:1})]),_:1}),a[9]||(a[9]=e("h3",{id:"左右两栏嵌套",tabindex:"-1"},[n("左右两栏嵌套 "),e("a",{class:"header-anchor",href:"#左右两栏嵌套","aria-label":'Permalink to "左右两栏嵌套"'},"​")],-1)),t(i,null,{default:l(()=>[t(s,{class:"mt-15"},{default:l(()=>[...a[3]||(a[3]=[e("textarea",{lang:"html"},`  <section class="l-container">
    <aside class="l-aside">Aside</aside>
    <section class="l-container l-layout-vertical">
      <header class="l-header">Header</header>
      <main class="l-main">Main</main>
    </section>
  </section>
  `,-1)])]),_:1})]),_:1}),a[10]||(a[10]=e("h3",{id:"上中下三栏",tabindex:"-1"},[n("上中下三栏 "),e("a",{class:"header-anchor",href:"#上中下三栏","aria-label":'Permalink to "上中下三栏"'},"​")],-1)),t(i,null,{default:l(()=>[t(s,{class:"mt-15"},{default:l(()=>[...a[4]||(a[4]=[e("textarea",{lang:"html"},`  <section class="l-container l-layout-vertical">
    <header class="l-header">Header</header>
    <main class="l-main">Main</main>
    <footer class="l-footer">Footer</footer>
  </section>
  `,-1)])]),_:1})]),_:1}),a[11]||(a[11]=e("h3",{id:"经典后台系统",tabindex:"-1"},[n("经典后台系统 "),e("a",{class:"header-anchor",href:"#经典后台系统","aria-label":'Permalink to "经典后台系统"'},"​")],-1)),a[12]||(a[12]=e("p",null,[n("在 "),e("code",null,"header"),n(" 里面放点东西就成了，就成了经典的后台管理系统的模板, 左边是图标，右边是登录用户；"),e("code",null,"Aside"),n(" 里面放菜单("),e("code",null,"Menu"),n(")，"),e("code",null,"Main"),n(" 里面放内容就是经典的后台管理系统模板")],-1)),t(i,null,{default:l(()=>[t(s,null,{default:l(()=>[...a[5]||(a[5]=[e("textarea",{lang:"html"},`  <section class="l-container l-layout-vertical">
    <header class="l-header">
      <a href="#">LitosUI</a>
      <div>登录用户</div>
    </header>
    <section class="l-container">
      <aside class="l-aside">Aside</aside>
      <main class="l-main">Main</main>
    </section>
  </section>
  `,-1)])]),_:1})]),_:1}),a[13]||(a[13]=d('<h2 id="主题定制" tabindex="-1">主题定制 <a class="header-anchor" href="#主题定制" aria-label="Permalink to &quot;主题定制&quot;">​</a></h2><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--l-header-height</code></td><td>header高度</td><td><code>50px</code></td></tr><tr><td><code>--l-aside-width</code></td><td>侧边栏宽度</td><td><code>240px</code></td></tr><tr><td><code>--l-footer-height</code></td><td>底栏高度</td><td><code>var(--l-header-height, 50px)</code></td></tr></tbody></table>',3))])}}});export{b as __pageData,x as default};
