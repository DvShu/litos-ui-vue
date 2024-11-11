import{G as l,_ as p}from"./chunks/theme.DS74rj3R.js";import{f as c,c as v,ag as u,l as o,w as e,b as n,R as r,a1 as g,o as f,u as d}from"./chunks/framework.DcK8S9T6.js";const b={class:"popover-p-row"},h={class:"popover-p-row"},w={class:"popover-p-row"},P={class:"popover-p-row"},E=JSON.parse('{"title":"Popover 弹出气泡","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover.md","filePath":"components/popover.md","lastUpdated":1731177244000}'),x={name:"components/popover.md"},M=Object.assign(x,{setup(k){const a=c();function m(){a.value!=null&&(a.value.isShow()?a.value.hide():a.value.show("#popoverTo"))}return(q,t)=>{const i=g("CodePreview"),s=g("ClientOnly");return f(),v("div",null,[t[23]||(t[23]=u('<h1 id="popover-弹出气泡" tabindex="-1">Popover 弹出气泡 <a class="header-anchor" href="#popover-弹出气泡" aria-label="Permalink to &quot;Popover 弹出气泡&quot;">​</a></h1><p>点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>最简单的用法，通过 <code>content</code> 传递浮层内容。</p>',5)),o(s,null,{default:e(()=>[o(i,null,{preview:e(()=>[o(d(l),{content:"悬浮提示"},{trigger:e(()=>t[0]||(t[0]=[n("span",null,"悬浮",-1)])),_:1})]),default:e(()=>[t[1]||(t[1]=n("textarea",{lang:"vue-html"},`  <nt-popover content="悬浮提示">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  `,-1))]),_:1})]),_:1}),t[24]||(t[24]=n("h3",{id:"触发方式",tabindex:"-1"},[r("触发方式 "),n("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1)),t[25]||(t[25]=n("p",null,[r("两种触发方式：鼠标移入["),n("code",null,"hover"),r("]、点击["),n("code",null,"click"),r("]；通过 "),n("code",null,"trigger"),r(" 属性设置触发方式。")],-1)),o(s,null,{default:e(()=>[o(i,null,{preview:e(()=>[o(d(l),{content:"悬浮提示",trigger:"hover"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[2]||(t[2]=[r("悬浮")])),_:1})]),_:1}),o(d(l),{content:"点击提示",trigger:"click"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[3]||(t[3]=[r("点击")])),_:1})]),_:1})]),default:e(()=>[t[4]||(t[4]=n("textarea",{lang:"vue-html"},`  <nt-popover content="悬浮提示" trigger='hover'>
    <template #trigger>
      <nt-button>悬浮</nt-button>
    </template>
  </nt-popover>
  <nt-popover content="点击提示" trigger='click'>
    <template #trigger>
      <nt-button>点击</nt-button>
    </template>
  </nt-popover>
  `,-1))]),_:1})]),_:1}),t[26]||(t[26]=n("h3",{id:"位置",tabindex:"-1"},[r("位置 "),n("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1)),t[27]||(t[27]=n("p",null,[r("有 "),n("code",null,"12"),r(" 个弹出位置。通过 "),n("code",null,"placement"),r(" 属性设置弹出位置。")],-1)),o(s,null,{default:e(()=>[o(i,null,{preview:e(()=>[n("div",b,[o(d(l),{content:"提示内容",placement:"top-start"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[5]||(t[5]=[r("top-start")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"top"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[6]||(t[6]=[r("top")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"top-end"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[7]||(t[7]=[r("top-end")])),_:1})]),_:1})]),n("div",h,[o(d(l),{content:"提示内容",placement:"left-start"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[8]||(t[8]=[r("left-start")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"left"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[9]||(t[9]=[r("left")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"left-end"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[10]||(t[10]=[r("left-end")])),_:1})]),_:1})]),n("div",w,[o(d(l),{content:"提示内容",placement:"right-start"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[11]||(t[11]=[r("right-start")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"right"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[12]||(t[12]=[r("right")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"right-end"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[13]||(t[13]=[r("right-end")])),_:1})]),_:1})]),n("div",P,[o(d(l),{content:"提示内容",placement:"bottom-start"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[14]||(t[14]=[r("bottom-start")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"bottom"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[15]||(t[15]=[r("bottom")])),_:1})]),_:1}),o(d(l),{content:"提示内容",placement:"bottom-end"},{trigger:e(()=>[o(d(p),null,{default:e(()=>t[16]||(t[16]=[r("bottom-end")])),_:1})]),_:1})])]),default:e(()=>[t[17]||(t[17]=n("textarea",{lang:"vue-html"},`  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="top-start">
      <template #trigger>
        <nt-button>top-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top-end">
      <template #trigger>
        <nt-button>top-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="left-start">
      <template #trigger>
        <nt-button>left-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left-end">
      <template #trigger>
        <nt-button>left-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="right-start">
      <template #trigger>
        <nt-button>right-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right-end">
      <template #trigger>
        <nt-button>right-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottom-start">
      <template #trigger>
        <nt-button>bottom-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom-end">
      <template #trigger>
        <nt-button>bottom-end</nt-button>
      </template>
    </nt-popover>
  </div>
  `,-1))]),_:1})]),_:1}),t[28]||(t[28]=n("h3",{id:"非受控模式",tabindex:"-1"},[r("非受控模式 "),n("a",{class:"header-anchor",href:"#非受控模式","aria-label":'Permalink to "非受控模式"'},"​")],-1)),t[29]||(t[29]=n("p",null,[r("不需要自动弹出，需要进行手动控制是否展示；通过传递 "),n("code",null,"visible"),r(" 属性设置是否展示，然后设置 "),n("code",null,"to"),r(" 属性指向弹层对标节点。")],-1)),o(s,null,{default:e(()=>[o(i,null,{preview:e(()=>[t[19]||(t[19]=n("span",{id:"popoverTo"},"对标元素",-1)),o(d(p),{onClick:m,class:"ml-10"},{default:e(()=>t[18]||(t[18]=[r("弹出/隐藏")])),_:1}),o(d(l),{ref_key:"$popover",ref:a,content:"提示内容",trigger:"manual"},null,512)]),default:e(()=>[t[20]||(t[20]=n("textarea",{lang:"vue-html"},`  <script setup>
  import { ref } from 'vue'
  const $popover = ref()
  function toggleShow() {
    $popover.value.toggle();
  }
  <\/script>
  <template>
    <span id="popoverTo">对标元素</span>
    <nt-button @click='toggleShow' class="ml-10">弹出/隐藏</nt-button>
    <nt-popover reference="#popoverTo" ref="$popover" content="提示内容" trigger="manual"></nt-popover>
  </template>
  `,-1))]),_:1})]),_:1}),t[30]||(t[30]=n("h3",{id:"不显示箭头",tabindex:"-1"},[r("不显示箭头 "),n("a",{class:"header-anchor",href:"#不显示箭头","aria-label":'Permalink to "不显示箭头"'},"​")],-1)),t[31]||(t[31]=n("p",null,[r("通过传递 "),n("code",null,"show-arrow"),r(" 为 "),n("code",null,"false"),r(" 来取消箭头显示")],-1)),o(s,null,{default:e(()=>[o(i,null,{preview:e(()=>[o(d(l),{content:"悬浮提示","show-arrow":!1},{trigger:e(()=>t[21]||(t[21]=[n("span",null,"悬浮",-1)])),_:1})]),default:e(()=>[t[22]||(t[22]=n("textarea",{lang:"vue-html"},`  <nt-popover content="悬浮提示" :show-arrow="false">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  `,-1))]),_:1})]),_:1}),t[32]||(t[32]=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="popover-props" tabindex="-1">Popover Props <a class="header-anchor" href="#popover-props" aria-label="Permalink to &quot;Popover Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>trigger</code></td><td>触发方式, <code>manual</code> 非受控模式, 手动调用 <code>show</code> 显示, <code>hide</code> 隐藏</td><td><code>hover</code>、<code>click</code>、<code>manual</code></td><td><code>hover</code></td></tr><tr><td><code>content</code></td><td>显示内容, 也可以通过 <code>default-slot</code> 显示</td><td><code>string</code></td><td>-</td></tr><tr><td><code>placement</code></td><td>弹出位置</td><td><code>top-start</code>、<code>top</code>、<code>top-end</code>、<code>left-start</code>、<code>left</code>、<code>left-end</code>、<code>right-start</code>、<code>right</code>、<code>right-end</code>、<code>bottom-start</code>、<code>bottom</code>、<code>bottom-end</code></td><td><code>top</code></td></tr><tr><td><code>reference</code></td><td>非受控模式, 手动指定目标元素</td><td><code>HTMLElement | string | Ref&lt;HTMLElement&gt;</code></td><td>-</td></tr><tr><td><code>destroy-on-hide</code></td><td>隐藏时销毁 <code>DOM</code> 结构; <code>false</code> 隐藏时未销毁只是设置 <code>display: none</code></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots <a class="header-anchor" href="#popover-slots" aria-label="Permalink to &quot;Popover Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义内容</td></tr><tr><td><code>trigger</code></td><td>自定义触发元素</td></tr></tbody></table><h3 id="popover-exposes" tabindex="-1">Popover Exposes <a class="header-anchor" href="#popover-exposes" aria-label="Permalink to &quot;Popover Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>hide</code></td><td>隐藏弹层</td><td><code>() =&gt; void</code></td></tr><tr><td><code>show</code></td><td>非受控模式, 显示弹层</td><td><code>(reference?: HTMLElement | string | Ref&lt;HTMLElement&gt;) =&gt; void</code></td></tr><tr><td><code>isShow</code></td><td>是否显示</td><td><code>() =&gt; boolean</code></td></tr><tr><td><code>toggle</code></td><td>非受控模式, 切换弹层显示或隐藏</td><td><code>(reference?: HTMLElement | string | Ref&lt;HTMLElement&gt;) =&gt; void</code></td></tr><tr><td><code>updatePosition</code></td><td>更新弹层位置</td><td><code>(reference?: HTMLElement | string | Ref&lt;HTMLElement&gt;) =&gt; void</code></td></tr></tbody></table>',7))])}}});export{E as __pageData,M as default};
