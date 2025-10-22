import{s as r,r as h}from"./chunks/theme.DrcBp2Zx.js";import{p as b,B as c,c as m,o as f,at as v,G as d,j as e,w as a,k as l,a as o}from"./chunks/framework.DUND-OMv.js";const q=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1760171877000}'),x={name:"components/radio.md"},y=Object.assign(x,{setup(P){const i=b("0"),p=b(!1);return(g,t)=>{const s=c("CodePreview"),u=c("ClientOnly");return f(),m("div",null,[t[8]||(t[8]=v("",5)),d(u,null,{default:a(()=>[d(s,null,{preview:a(()=>[d(l(r),{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=n=>p.value=n)},{default:a(()=>[...t[3]||(t[3]=[e("span",null,[e("span",null,"同意"),e("a",{href:"#"},"隐私协议")],-1)])]),_:1},8,["modelValue"])]),default:a(()=>[t[4]||(t[4]=e("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  <\/script>
  <template>
    <lv-radio v-model="allowService">
      <span>
        <span>同意</span>
        <a href='#'>隐私协议</a>
      </span>
    </lv-radio>
  </template>
  `,-1))]),_:1})]),_:1}),t[9]||(t[9]=e("h3",{id:"禁用状态",tabindex:"-1"},[o("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),t[10]||(t[10]=e("p",null,[o("设置 "),e("code",null,"disabled"),o(" 属性即可。")],-1)),d(u,null,{default:a(()=>[d(s,null,{preview:a(()=>[d(l(r),{label:"禁用",disabled:""})]),default:a(()=>[t[5]||(t[5]=e("textarea",{lang:"vue-html"},`  <lv-radio label="禁用" disabled></lv-radio>
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=e("h3",{id:"单选框组",tabindex:"-1"},[o("单选框组 "),e("a",{class:"header-anchor",href:"#单选框组","aria-label":'Permalink to "单选框组"'},"​")],-1)),t[12]||(t[12]=e("p",null,[o("结合 "),e("code",null,"l-radio-group"),o(" 组件实现单选框组")],-1)),d(u,null,{default:a(()=>[d(s,null,{preview:a(()=>[d(l(h),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=n=>i.value=n)},{default:a(()=>[d(l(r),{label:"男",value:"0"}),d(l(r),{label:"女",value:"1"})]),_:1},8,["modelValue"])]),default:a(()=>[t[6]||(t[6]=e("textarea",{lang:"vue-html"},`  <script setup>
    import { ref } from 'vue';
    const sex = ref('0');
  <\/script>
  <template>
    <lv-radio-group v-model="sex">
      <lv-radio label="男" value="0" />
      <lv-radio label="女" value="1" />
    </lv-radio-group>
  </template>
  `,-1))]),_:1})]),_:1}),t[13]||(t[13]=e("h3",{id:"按钮样式",tabindex:"-1"},[o("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1)),t[14]||(t[14]=e("p",null,[o("在单选框组基础上，设置 "),e("code",null,"l-radio"),o(" 的 "),e("code",null,"type"),o(" 属性为 "),e("code",null,"button"),o(" 即可。")],-1)),d(u,null,{default:a(()=>[d(s,null,{preview:a(()=>[d(l(h),{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n)},{default:a(()=>[d(l(r),{label:"男",value:"0",type:"button"}),d(l(r),{label:"女",value:"1",type:"button"})]),_:1},8,["modelValue"])]),default:a(()=>[t[7]||(t[7]=e("textarea",{lang:"vue-html"},`  <template>
    <lv-radio-group v-model="sex">
      <lv-radio label="男" value="0" type="button" />
      <lv-radio label="女" value="1" type="button" />
    </lv-radio-group>
  </template>
  `,-1))]),_:1})]),_:1}),t[15]||(t[15]=v("",11))])}}});export{q as __pageData,y as default};
