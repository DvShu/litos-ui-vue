import{y as m}from"./chunks/theme.CQafP7Fx.js";import{p as _,B as v,c as s,o as d,au as b,G as i,j as e,w as a,t as r,k as h,F as x,C as P,a as l}from"./chunks/framework.B8v7S4uB.js";const q={lang:"vue"},T={class:"list-wrapper"},y={lang:"vue-html"},L={class:"list-wrapper"},w=JSON.parse('{"title":"List","description":"","frontmatter":{},"headers":[],"relativePath":"components/list.md","filePath":"components/list.md","lastUpdated":1760171877000}'),C={name:"components/list.md"},S=Object.assign(C,{setup(g){const u=_(!1);let n=_(15);function k(){setTimeout(()=>{n.value=n.value+15,n.value>=50&&(u.value=!0)},1500)}return(c,t)=>{const p=v("CodePreview"),f=v("ClientOnly");return d(),s("div",null,[t[0]||(t[0]=b("",5)),i(f,null,{default:a(()=>[i(p,null,{preview:a(()=>[e("div",T,[i(h(m),{finish:u.value,onLoadMore:k},{default:a(()=>[(d(!0),s(x,null,P(h(n),o=>(d(),s("div",{class:"list-item",key:o},r(o),1))),128))]),_:1},8,["finish"])])]),default:a(()=>[e("textarea",q,`  <template>
  <div style="height: 300px">
    <lv-list :finish="finish" @load-more="handleLoadmore">
      <div style="padding: 10px; border-bottom: 1px solid #dedede;" v-for="i in max" :key="i">`+r(c.i)+`</div>
    </lv-list>
  </div>
  </template>
  <script setup>
    import { ref } from 'vue'
    let max = ref(15)
    function handleLoadmore() {
      // 模拟数据加载
      setTimeout(() => {
        max.value = max.value + 15
        if (max.value >= 50) {
          finish.value = true
        }
      }, 1500);
    }
  <\/script>
  `,1)]),_:1})]),_:1}),t[1]||(t[1]=e("blockquote",null,[e("p",null,[l("内部是使用 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",target:"_blank",rel:"noreferrer"},"IntersectionObserver"),l(" 实现")])],-1)),t[2]||(t[2]=e("h3",{id:"普通列表",tabindex:"-1"},[l("普通列表 "),e("a",{class:"header-anchor",href:"#普通列表","aria-label":'Permalink to "普通列表"'},"​")],-1)),t[3]||(t[3]=e("p",null,[l("通过传递 "),e("code",null,"infinite=false"),l(" 禁用滚动加载这样就成了一个单纯的可以滚动的列表。")],-1)),i(f,null,{default:a(()=>[i(p,null,{preview:a(()=>[e("div",L,[i(h(m),{infinite:!1},{default:a(()=>[(d(),s(x,null,P(100,o=>e("div",{class:"list-item",key:o},r(o),1)),64))]),_:1})])]),default:a(()=>[e("textarea",y,`  <div class="list-wrapper">
    <List :infinite="false">
      <div class="list-item" v-for="i in 100" :key="i">`+r(c.i)+`</div>
    </List>
  </div>
  `,1)]),_:1})]),_:1}),t[4]||(t[4]=b("",6))])}}});export{w as __pageData,S as default};
