import{a2 as m}from"./chunks/theme.CVO0TTn9.js";import{c as h,af as o,l as d,w as e,a0 as i,o as p,b as a,u as r,j as b}from"./chunks/framework.hs56f8h4.js";const f={class:"virtual-list-demo-container"},q=JSON.parse('{"title":"VirtualList 虚拟列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/virtuallist.md","filePath":"components/virtuallist.md","lastUpdated":1726671680000}'),v={name:"components/virtuallist.md"},P=Object.assign(v,{setup(_){const l=Array.from({length:1e4},(s,t)=>({id:`${t}`,value:t}));return(s,t)=>{const n=i("CodePreview"),c=i("ClientOnly");return p(),h("div",null,[t[1]||(t[1]=o('<h1 id="virtuallist-虚拟列表" tabindex="-1">VirtualList 虚拟列表 <a class="header-anchor" href="#virtuallist-虚拟列表" aria-label="Permalink to &quot;VirtualList 虚拟列表&quot;">​</a></h1><p>当我们遇到数据量很大的情况时，传统的渲染方式会导致浏览器负载过大，页面渲染速度慢，滚动卡顿等一系列问题。</p><p>对于这种列表数据，我们可以采用虚拟滚动来进行性能优化。</p><blockquote><ol><li><strong>现在暂时只支持固定高度的列表</strong></li><li>以后可以考虑使用 <code>css3</code> 属性 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/content-visibility" target="_blank" rel="noreferrer">content-visibility</a></li></ol></blockquote><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>对于固定高度, 一次性渲染 <code>1w</code> 条数据。<code>item-size</code> 表示每一行的高度</p>',7)),d(c,null,{default:e(()=>[d(n,null,{preview:e(()=>[a("div",f,[d(r(m),{items:r(l),"item-size":42,"key-field":"id"},{default:e(({item:u})=>[a("span",null,b(u.value),1)]),_:1},8,["items"])])]),default:e(()=>[t[0]||(t[0]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
    const items = Array.from({ length: 10000 }, (_, i) => ({
      id: \`\${i}\`,
      value: i,
    }));
  <\/script>
  <template>
    <nt-virtual-list :items="items" :item-size="42" key-field="id">
      <template  #default="{ item }">
        <span>{{ item.value }}</span>
      </template>
    </nt-virtual-list>
  </template>
  `,-1))]),_:1})]),_:1}),t[2]||(t[2]=o('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="virtuallist-props" tabindex="-1">VirtualList Props <a class="header-anchor" href="#virtuallist-props" aria-label="Permalink to &quot;VirtualList Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>items</code></td><td><em>必传</em>, 需要展示的数据</td><td><code>any[]</code></td><td>-</td></tr><tr><td><code>item-size</code></td><td><em>必传</em>, 表项的高度，用于计算滚动大小和位置</td><td><code>number</code></td><td>-</td></tr><tr><td><code>item-class</code></td><td>列表项的 <code>class</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>key-field</code></td><td>选项 <code>key</code> 的字段名, 用于 <code>v-for</code> 的 <code>key</code>, 不传则用 <code>index</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>buffer</code></td><td>冲区数量，列表会在上下多渲染额外的项</td><td><code>number</code></td><td><code>2</code></td></tr></tbody></table><h3 id="virtuallist-slots" tabindex="-1">VirtualList Slots <a class="header-anchor" href="#virtuallist-slots" aria-label="Permalink to &quot;VirtualList Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>字段</th></tr></thead><tbody><tr><td><code>default</code></td><td>渲染列表项内容</td><td><code>item</code>: 列表项数据</td></tr><tr><td><code>render</code></td><td>渲染整个列表项, 需要手动遍历数据列表进行渲染</td><td><code>items</code>: 可现实列表数据</td></tr></tbody></table>',5))])}}});export{q as __pageData,P as default};