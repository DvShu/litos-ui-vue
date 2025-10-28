import{a7 as m}from"./chunks/theme.j-P-CnI_.js";import{B as o,c as h,o as p,at as i,G as d,w as e,j as a,k as l,t as _}from"./chunks/framework.DUND-OMv.js";const b={class:"virtual-list-demo-container"},y=JSON.parse('{"title":"VirtualList 虚拟列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/virtuallist.md","filePath":"components/virtuallist.md","lastUpdated":1760171877000}'),f={name:"components/virtuallist.md"},q=Object.assign(f,{setup(v){const r=Array.from({length:1e4},(s,t)=>({id:`${t}`,value:t}));return(s,t)=>{const n=o("CodePreview"),c=o("ClientOnly");return p(),h("div",null,[t[1]||(t[1]=i("",7)),d(c,null,{default:e(()=>[d(n,null,{preview:e(()=>[a("div",b,[d(l(m),{items:l(r),"item-size":42,"key-field":"id"},{default:e(({item:u})=>[a("span",null,_(u.value),1)]),_:1},8,["items"])])]),default:e(()=>[t[0]||(t[0]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
    const items = Array.from({ length: 10000 }, (_, i) => ({
      id: \`\${i}\`,
      value: i,
    }));
  <\/script>
  <template>
    <lv-virtual-list :items="items" :item-size="42" key-field="id">
      <template  #default="{ item }">
        <span>{{ item.value }}</span>
      </template>
    </lv-virtual-list>
  </template>
  `,-1))]),_:1})]),_:1}),t[2]||(t[2]=i("",5))])}}});export{y as __pageData,q as default};
