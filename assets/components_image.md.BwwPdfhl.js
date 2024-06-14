import{i as r,j as d,k as b}from"./chunks/theme.699TBE5S.js";import{e as x,c as u,k as t,w as i,aa as p,b as e,y as a,R as v,o as _,z as n,F as f,S as w}from"./chunks/framework.Yy9K0PbY.js";const k=p('<h1 id="image-图片" tabindex="-1">Image 图片 <a class="header-anchor" href="#image-图片" aria-label="Permalink to &quot;Image 图片&quot;">​</a></h1><p>可预览的图片，在保留所有原生 <code>img</code> 的特性下，支持懒加载，自定义占位图片、加载失败等</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',4),P=e("textarea",{lang:"vue-html"},`
    <nt-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" width="100"></nt-image>
    `,-1),S=e("h3",{id:"适应容器",tabindex:"-1"},[a("适应容器 "),e("a",{class:"header-anchor",href:"#适应容器","aria-label":'Permalink to "适应容器"'},"​")],-1),y=e("p",null,[a("可以通过 "),e("code",null,"fit"),a(" 确定图片如何适应到容器框，同原生 "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noreferrer"},"object-fit"),a(),e("code",null,"CSS"),a(" 属性；如果不填浏览器默认为 "),e("code",null,"fill")],-1),T=e("textarea",{lang:"vue-html"},`
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="fill"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="contain"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="cover"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="none"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="scale-down"></nt-image>
  `,-1),q={class:"grid grid-cols-5"},C={class:"demo-img-item"},I=e("span",{class:"mt-15"},"fill",-1),j={class:"demo-img-item"},z=e("span",{class:"mt-15"},"contain",-1),A={class:"demo-img-item"},V=e("span",{class:"mt-15"},"cover",-1),N={class:"demo-img-item"},E=e("span",{class:"mt-15"},"none",-1),F={class:"demo-img-item"},D=e("span",{class:"mt-15"},"scale-down",-1),O=e("h3",{id:"占位",tabindex:"-1"},[a("占位 "),e("a",{class:"header-anchor",href:"#占位","aria-label":'Permalink to "占位"'},"​")],-1),R=e("p",null,[a("使用 "),e("code",null,"placeholder"),a(" 定义图片加载时显示的图片；通常用于加载大图时用来实现渐进加载，将 "),e("code",null,"placeholder"),a(" 设置为一个原图模糊后的图片")],-1),U=e("textarea",{lang:"vue-html"},`
  <nt-image src="/neatui-vue/img2.svg" width="100" height="100" placeholder="/neatui-vue/img_loading.png"></nt-image>
  `,-1),$=e("h3",{id:"加载失败",tabindex:"-1"},[a("加载失败 "),e("a",{class:"header-anchor",href:"#加载失败","aria-label":'Permalink to "加载失败"'},"​")],-1),B=e("p",null,"加载失败显示图像占位符",-1),L=e("textarea",{lang:"vue-html"},`
  <nt-image src="/neatui-vue/img3.svg" width="100" height="100" placeholder="/neatui-vue/loading_error.png"></nt-image>
  `,-1),W=e("h3",{id:"禁用预览",tabindex:"-1"},[a("禁用预览 "),e("a",{class:"header-anchor",href:"#禁用预览","aria-label":'Permalink to "禁用预览"'},"​")],-1),J=e("p",null,[a("使用 "),e("code",null,"preview-disabled"),a(" 来禁止预览")],-1),G=e("textarea",{lang:"vue-html"},`
  <nt-image src="/neatui-vue/img2.svg" width="100" height="100" preview-disable></nt-image>
  `,-1),H=e("h3",{id:"多图预览",tabindex:"-1"},[a("多图预览 "),e("a",{class:"header-anchor",href:"#多图预览","aria-label":'Permalink to "多图预览"'},"​")],-1),K=e("p",null,[a("可通过 "),e("code",null,"previewSrcList"),a(" 开启预览多图的功能。 可以通过 "),e("code",null,"initial-index"),a(" 初始化第一张预览图片的位置。 默认初始位置为 "),e("code",null,"0"),a("。")],-1),M=e("textarea",{lang:"vue"},`
  <script setup>
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  <\/script>
  <template>
    <nt-image v-for="src,index in imgs" :key="index" :src="src" :preview-src-list="imgs" :initial-index="index" width="100"></nt-image>
  </template>
  `,-1),Q=e("h3",{id:"懒加载",tabindex:"-1"},[a("懒加载 "),e("a",{class:"header-anchor",href:"#懒加载","aria-label":'Permalink to "懒加载"'},"​")],-1),X=e("p",null,[a("通过使用浏览器原生支持的 "),e("code",null,"loading"),a(" 属性来开启懒加载，只需要设置 "),e("code",null,'loading="lazy"')],-1),Y=e("textarea",{lang:"vue-html"},`
  <nt-image src="/neatui-vue/img2.svg" width="100" height="100" loading="lazy"></nt-image>
  `,-1),Z=p('<blockquote><p>从 <code>ios 15.4</code> 开始已经全面支持; 对于不支持 <code>loading=&quot;lazy&quot;</code> 属性的浏览器，可以通过 <a href="https://github.com/mfranzke/loading-attribute-polyfill" target="_blank" rel="noreferrer">loading-attribute-polyfill</a> 来兼容</p></blockquote><h3 id="手动预览" tabindex="-1">手动预览 <a class="header-anchor" href="#手动预览" aria-label="Permalink to &quot;手动预览&quot;">​</a></h3><p>如果不想通过 <code>Image</code> 组件来预览图片，也可以手动通过使用 <code>ImagePreview</code> 来预览图片</p>',3),ee=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const show = ref(false);
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  <\/script>
  <template>
    <img
      v-for="item, index in imgs"
      :key="index"
      :src="item"
      class="demo-img"
      @click="show = true"
    />
    <nt-image-preview
      v-model:show="show"
      :url-list="imgs"
      :initial-index="0"
    ></nt-image-preview>
  </template>
  <style>
    .demo-img {
      width: 100px;
      height: 100px;
      display: inline;
      cursor: pointer;
    }
  </style>
  `,-1),te=["src"],ie=p('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="image-props" tabindex="-1">Image Props <a class="header-anchor" href="#image-props" aria-label="Permalink to &quot;Image Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td><em>必填</em> , 图片源地址，同原生属性一致</td><td><code>string</code></td><td>—</td></tr><tr><td><code>width</code></td><td>宽度</td><td><code>string</code></td><td>-</td></tr><tr><td><code>height</code></td><td>高度</td><td><code>string</code></td><td>-</td></tr><tr><td><code>alt</code></td><td>原生属性 <code>alt</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>loading</code></td><td>原生属性, 浏览器加载图像的策略</td><td><code>eager</code>、<code>lazy</code></td><td><code>eager</code></td></tr><tr><td><code>fit</code></td><td>确定图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noreferrer">object-fit</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>fallback</code></td><td>图片加载失败时显示的地址</td><td><code>string</code></td><td>-</td></tr><tr><td><code>placeholder</code></td><td>图片占位, 用于加载大图时的占位</td><td><code>string</code></td><td>-</td></tr><tr><td><code>preview-disable</code></td><td>禁用图片预览</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>preview--src-list</code></td><td>预览图片地址列表, 多图预览时使用</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>initial-index</code></td><td>初始预览图像索引</td><td><code>number</code></td><td>0</td></tr></tbody></table>',3),re=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md","lastUpdated":1714270621000}'),ae={name:"components/image.md"},ce=Object.assign(ae,{setup(ne){const m=x(!1),c=["/neatui-vue/img1.svg","/neatui-vue/img2.svg","https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"];return(de,h)=>{const o=v("CodePreview"),l=v("ClientOnly");return _(),u("div",null,[k,t(l,null,{default:i(()=>[t(o,{class:"mt-15"},{default:i(()=>[P]),_:1})]),_:1}),S,y,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[e("div",q,[t(n(r),{placement:"topStart",title:"被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框"},{default:i(()=>[e("div",C,[t(n(d),{src:"/neatui-vue/img1.svg",width:"100",height:"100",fit:"fill"}),I])]),_:1}),t(n(r),{placement:"topStart",title:"被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比"},{default:i(()=>[e("div",j,[t(n(d),{src:"/neatui-vue/img1.svg",width:"100",height:"100",fit:"contain"}),z])]),_:1}),t(n(r),{placement:"top",title:"被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框"},{default:i(()=>[e("div",A,[t(n(d),{src:"/neatui-vue/img1.svg",width:"100",height:"100",fit:"cover"}),V])]),_:1}),t(n(r),{placement:"topEnd",title:"被替换的内容将保持其原有的尺寸"},{default:i(()=>[e("div",N,[t(n(d),{src:"/neatui-vue/img1.svg",width:"100",height:"100",fit:"none"}),E])]),_:1}),t(n(r),{placement:"topEnd",title:"内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些"},{default:i(()=>[e("div",F,[t(n(d),{src:"/neatui-vue/img1.svg",width:"100",height:"100",fit:"scale-down"}),D])]),_:1})])]),default:i(()=>[T]),_:1})]),_:1}),O,R,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[t(n(d),{src:"/neatui-vue/img2.svg",width:"100",height:"100",placeholder:"/neatui-vue/img_loading.png"})]),default:i(()=>[U]),_:1})]),_:1}),$,B,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[t(n(d),{src:"/neatui-vue/img3.svg",width:"100",height:"100",placeholder:"/neatui-vue/loading_error.png"})]),default:i(()=>[L]),_:1})]),_:1}),W,J,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[t(n(d),{src:"/neatui-vue/img2.svg",width:"100",height:"100","preview-disable":""})]),default:i(()=>[G]),_:1})]),_:1}),H,K,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[(_(),u(f,null,w(c,(s,g)=>t(n(d),{key:g,src:s,"preview-src-list":c,"initial-index":g,width:"100"},null,8,["src","initial-index"])),64))]),default:i(()=>[M]),_:1})]),_:1}),Q,X,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[t(n(d),{src:"/neatui-vue/img2.svg",width:"100",height:"100",loading:"lazy"})]),default:i(()=>[Y]),_:1})]),_:1}),Z,t(l,null,{default:i(()=>[t(o,null,{preview:i(()=>[(_(),u(f,null,w(c,(s,g)=>e("img",{key:g,src:s,style:{width:"100px",height:"100px",display:"inline",cursor:"pointer"},onClick:h[0]||(h[0]=oe=>m.value=!0)},null,8,te)),64)),t(n(b),{show:m.value,"onUpdate:show":h[1]||(h[1]=s=>m.value=s),"url-list":c,"initial-index":0},null,8,["show"])]),default:i(()=>[ee]),_:1})]),_:1}),ie])}}});export{re as __pageData,ce as default};