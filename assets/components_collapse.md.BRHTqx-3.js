import{d as p,e as r}from"./chunks/theme.CSHym8GW.js";import{p as v,B as m,c as b,o as f,at as u,G as a,j as l,w as t,a as d,k as i}from"./chunks/framework.BSvSrwQ3.js";const w=JSON.parse('{"title":"Collapase 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1760171877000}'),h={name:"components/collapse.md"},C=Object.assign(h,{setup(g){v(["1"]);const s=v(["1"]);return(x,e)=>{const n=m("CodePreview"),o=m("ClientOnly");return f(),b("div",null,[e[16]||(e[16]=u('<h1 id="collapase-折叠面板" tabindex="-1">Collapase 折叠面板 <a class="header-anchor" href="#collapase-折叠面板" aria-label="Permalink to &quot;Collapase 折叠面板&quot;">​</a></h1><p>折叠/展开的内容区域; 通常用于后台系统的首页边栏的控制面板上</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>可以同时展开多个面板，面板之间不影响</p>',5)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[1]||(e[1]=[l("textarea",{lang:"vue-html"},`  <lv-collapse>
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[17]||(e[17]=l("h3",{id:"手动展开",tabindex:"-1"},[d("手动展开 "),l("a",{class:"header-anchor",href:"#手动展开","aria-label":'Permalink to "手动展开"'},"​")],-1)),e[18]||(e[18]=l("p",null,[d("通过传递 "),l("code",null,"v-model"),d(" 来设置展开的面板。")],-1)),a(o,null,{default:t(()=>[a(n,null,{preview:t(()=>[a(i(p),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value=c)},{default:t(()=>[a(i(r),{title:"红灯",name:"1"},{default:t(()=>[...e[2]||(e[2]=[l("div",null,"红灯 - 停",-1)])]),_:1}),a(i(r),{title:"绿灯",name:"2"},{default:t(()=>[...e[3]||(e[3]=[l("div",null,"绿灯 - 行",-1)])]),_:1}),a(i(r),{title:"黄灯",name:"3"},{default:t(()=>[...e[4]||(e[4]=[l("div",null,"黄灯 - 注意",-1)])]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[e[5]||(e[5]=l("textarea",{lang:"vue-html"},`  <lv-collapse v-model='active1' arrow-placement="right">
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=l("h3",{id:"手风琴效果",tabindex:"-1"},[d("手风琴效果 "),l("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1)),e[20]||(e[20]=l("p",null,[d("手风琴模式，始终只有一个面板处在激活状态。通过 "),l("code",null,"accordion"),d(" 属性来设置是否以手风琴模式显示。")],-1)),a(o,null,{default:t(()=>[a(n,null,{preview:t(()=>[a(i(p),{accordion:""},{default:t(()=>[a(i(r),{title:"红灯",name:"1"},{default:t(()=>[...e[6]||(e[6]=[l("div",null,"红灯 - 停",-1)])]),_:1}),a(i(r),{title:"绿灯",name:"2"},{default:t(()=>[...e[7]||(e[7]=[l("div",null,"绿灯 - 行",-1)])]),_:1}),a(i(r),{title:"黄灯",name:"3"},{default:t(()=>[...e[8]||(e[8]=[l("div",null,"黄灯 - 提示",-1)])]),_:1})]),_:1})]),default:t(()=>[e[9]||(e[9]=l("textarea",{lang:"vue-html"},`  <lv-collapse :default-expanded-names='["1"]'>
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1))]),_:1})]),_:1}),e[21]||(e[21]=l("h3",{id:"箭头位置",tabindex:"-1"},[d("箭头位置 "),l("a",{class:"header-anchor",href:"#箭头位置","aria-label":'Permalink to "箭头位置"'},"​")],-1)),e[22]||(e[22]=l("p",null,[d("使用 "),l("code",null,"arrow-placement"),d(" 来设定箭头的位置。")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[10]||(e[10]=[l("textarea",{lang:"vue-html"},`  <lv-collapse arrow-placement="right">
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[23]||(e[23]=l("h3",{id:"标题栏对齐方式",tabindex:"-1"},[d("标题栏对齐方式 "),l("a",{class:"header-anchor",href:"#标题栏对齐方式","aria-label":'Permalink to "标题栏对齐方式"'},"​")],-1)),e[24]||(e[24]=l("p",null,[d("通过 "),l("code",null,"header-justify"),d(" 来设置对齐方式，例如设置为 "),l("code",null,"space-between"),d(" 表明两端对齐，这个时候，配合 "),l("code",null,"arrow-placement: right"),d(" 就能实现，箭头和文本两端对齐的效果")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[11]||(e[11]=[l("textarea",{lang:"vue-html"},`  <lv-collapse arrow-placement="right" header-justify="space-between">
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[25]||(e[25]=l("h3",{id:"背景边框",tabindex:"-1"},[d("背景边框 "),l("a",{class:"header-anchor",href:"#背景边框","aria-label":'Permalink to "背景边框"'},"​")],-1)),e[26]||(e[26]=l("p",null,[d("通过设置 "),l("code",null,"background"),d(" 就能实现带背景边框样式")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[12]||(e[12]=[l("textarea",{lang:"vue-html"},`  <lv-collapse arrow-placement="right" header-justify="space-between" background>
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[27]||(e[27]=l("h3",{id:"项间距",tabindex:"-1"},[d("项间距 "),l("a",{class:"header-anchor",href:"#项间距","aria-label":'Permalink to "项间距"'},"​")],-1)),e[28]||(e[28]=l("p",null,[d("通过设置 "),l("code",null,"gap"),d(" 设置项间距")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[13]||(e[13]=[l("textarea",{lang:"vue-html"},`  <lv-collapse arrow-placement="right" header-justify="space-between" background gap="10px">
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[29]||(e[29]=l("h3",{id:"圆角",tabindex:"-1"},[d("圆角 "),l("a",{class:"header-anchor",href:"#圆角","aria-label":'Permalink to "圆角"'},"​")],-1)),e[30]||(e[30]=l("p",null,[d("通过 "),l("code",null,"border-radius"),d(" 设置边框圆角")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[14]||(e[14]=[l("textarea",{lang:"vue-html"},`  <lv-collapse arrow-placement="right" header-justify="space-between" background border-radius="5px" gap="10px">
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[31]||(e[31]=l("h3",{id:"网格模式",tabindex:"-1"},[d("网格模式 "),l("a",{class:"header-anchor",href:"#网格模式","aria-label":'Permalink to "网格模式"'},"​")],-1)),e[32]||(e[32]=l("p",null,[d("通过传递 "),l("code",null,"grid"),d(" 属性让折叠面板变为网格模式。")],-1)),a(o,null,{default:t(()=>[a(n,null,{default:t(()=>[...e[15]||(e[15]=[l("textarea",{lang:"vue-html"},`  <lv-collapse
    arrow-placement="right"
    header-justify="space-between"
    background
    border-radius="5px"
    gap="10px"
    grid
  >
    <lv-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </lv-collapse-item>
    <lv-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </lv-collapse-item>
    <lv-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </lv-collapse-item>
  </lv-collapse>
  `,-1)])]),_:1})]),_:1}),e[33]||(e[33]=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="collapse-props" tabindex="-1">Collapse Props <a class="header-anchor" href="#collapse-props" aria-label="Permalink to &quot;Collapse Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>展开的面板</td><td><code>(string|numberr)[]</code></td><td><code>[]</code></td></tr><tr><td><code>accordion</code></td><td>手风琴模式，是否只允许展开一个面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>arrow-placement</code></td><td>箭头位置</td><td><code>left</code> | <code>right</code></td><td><code>left</code></td></tr><tr><td><code>header-justify</code></td><td>面板头部, 水平对齐方式</td><td><code>flex-start</code> | <code>space-between</code></td><td><code>flex-start</code></td></tr><tr><td><code>background</code></td><td>是否带有背景和边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>gap</code></td><td>面板之间的间隔</td><td><code>string</code></td><td>-</td></tr><tr><td><code>default-expanded-names</code></td><td>默认展开的面板</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td><code>border-radius</code></td><td>边框圆角</td><td><code>string</code></td><td>-</td></tr><tr><td><code>grid</code></td><td>网格模式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events <a class="header-anchor" href="#collapse-events" aria-label="Permalink to &quot;Collapse Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>(expandedNames: (string | number)[])</code></td><td>面板变化时触发</td></tr></tbody></table><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props <a class="header-anchor" href="#collapseitem-props" aria-label="Permalink to &quot;CollapseItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>name</code></td><td>名称, <strong>必传</strong></td><td><code>string</code></td><td>-</td></tr><tr><td><code>header-class</code></td><td>头部样式类</td><td><code>string</code></td><td>-</td></tr></tbody></table>',7))])}}});export{w as __pageData,C as default};
