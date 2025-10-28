import{B as n,c as u,o as g,at as s,G as o,j as e,w as l,a,k as i,T as m}from"./chunks/framework.DUND-OMv.js";import{Z as c}from"./chunks/theme.j-P-CnI_.js";const T=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag.md","filePath":"components/tag.md","lastUpdated":1760171877000}'),h={name:"components/tag.md"},y=Object.assign(h,{setup(b){function p(){console.log("close")}return(f,t)=>{const r=n("CodePreview"),d=n("ClientOnly");return g(),u("div",null,[t[5]||(t[5]=s("",5)),o(d,null,{default:l(()=>[o(r,null,{default:l(()=>[...t[0]||(t[0]=[e("textarea",{lang:"vue-html"},`  <lv-tag type="primary" class="ml-10">标签</lv-tag>
  <lv-tag type="info" class="ml-10">标签</lv-tag>
  <lv-tag type="success" class="ml-10">标签</lv-tag>
  <lv-tag type="error" class="ml-10">标签</lv-tag>
  <lv-tag class="ml-10" color="#409eff">标签</lv-tag>
  `,-1)])]),_:1})]),_:1}),t[6]||(t[6]=e("h3",{id:"可移除标签",tabindex:"-1"},[a("可移除标签 "),e("a",{class:"header-anchor",href:"#可移除标签","aria-label":'Permalink to "可移除标签"'},"​")],-1)),t[7]||(t[7]=e("p",null,[a("设置 "),e("code",null,"closable"),a(" 属性可以定义一个标签是否可移除。 它接受一个 "),e("code",null,"Boolean"),a("。 当 "),e("code",null,"Tag"),a(" 被移除时会触发 "),e("code",null,"close"),a(" 事件。")],-1)),o(d,null,{default:l(()=>[o(r,null,{preview:l(()=>[o(i(c),{closable:"",onClose:p},{default:l(()=>[...t[1]||(t[1]=[a("标签",-1)])]),_:1})]),default:l(()=>[t[2]||(t[2]=e("textarea",{lang:"vue"},`  <script setup lang="ts">
    function handleTagClose() {
      console.log("close");
    }
  <\/script>
  <template>
    <lv-tag closable @close="handleTagClose">标签</lv-tag>
  </template>
  `,-1))]),_:1})]),_:1}),t[8]||(t[8]=e("h3",{id:"动画",tabindex:"-1"},[a("动画 "),e("a",{class:"header-anchor",href:"#动画","aria-label":'Permalink to "动画"'},"​")],-1)),t[9]||(t[9]=e("p",null,[a("如果想给标签添加显示或移除时的动画，只需要 "),e("a",{href:"/litos-ui-vue/css-util#_1-vue3-transition-渐变"},"添加渐变"),a(" 即可。如果是一个标签列表就需要配合 "),e("a",{href:"https://cn.vuejs.org/guide/built-ins/transition-group",target:"_blank",rel:"noreferrer"},"Vue3 TransitionGroup"),a(" 组件。")],-1)),t[10]||(t[10]=e("blockquote",null,[e("p",null,[a("注意：列表中的每个元素都必须有一个独一无二的 "),e("code",null,"key attribute"),a("。")])],-1)),o(d,null,{default:l(()=>[o(r,null,{preview:l(()=>[o(m,{appear:"",name:"nt-scale"},{default:l(()=>[o(i(c),{type:"primary"},{default:l(()=>[...t[3]||(t[3]=[a("标签",-1)])]),_:1})]),_:1})]),default:l(()=>[t[4]||(t[4]=e("textarea",{lang:"vue"},`  <template>
    <Transition appear name="nt-scale">
      <lv-tag type="primary">标签</lv-tag>
    </Transition>
  </template>
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=s("",5))])}}});export{T as __pageData,y as default};
