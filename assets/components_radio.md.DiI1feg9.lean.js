import{x as r,y as u}from"./chunks/theme.BPBBkDg1.js";import{e as p,o as m,c as v,g as e,w as a,ae as _,b as t,J as d,X as b,l as o}from"./chunks/framework.-x160Rg7.js";const f=_("",5),x=t("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  <\/script>
  <template>
    <nt-radio v-model="allowService">
      <template #label>
        <span>
          <span>同意</span>
          <a href='#'>隐私协议</a>
        </span>
      </template>
    </nt-radio>
  </template>
  `,-1),P=t("span",null,[t("span",null,"同意"),t("a",{href:"#"},"隐私协议")],-1),g=t("h3",{id:"禁用状态",tabindex:"-1"},[d("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),y=t("p",null,[d("设置 "),t("code",null,"disabled"),d(" 属性即可。")],-1),q=t("textarea",{lang:"vue-html"},`
  <nt-radio label="禁用" disabled>
  `,-1),V=t("h3",{id:"单选框组",tabindex:"-1"},[d("单选框组 "),t("a",{class:"header-anchor",href:"#单选框组","aria-label":'Permalink to "单选框组"'},"​")],-1),k=t("p",null,[d("结合 "),t("code",null,"nt-radio-group"),d(" 组件实现单选框组")],-1),R=t("textarea",{lang:"vue-html"},`
  <script setup>
    import { ref } from 'vue';
    const sex = ref('0');
  <\/script>
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" />
      <nt-radio label="女" value="1" />
    </nt-radio-group>
  </template>
  `,-1),S=t("h3",{id:"按钮样式",tabindex:"-1"},[d("按钮样式 "),t("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1),T=t("p",null,[d("在单选框组基础上，设置 "),t("code",null,"nt-radio"),d(" 的 "),t("code",null,"type"),d(" 属性为 "),t("code",null,"button"),d(" 即可。")],-1),w=t("textarea",{lang:"vue-html"},`
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" type="button" />
      <nt-radio label="女" value="1" type="button" />
    </nt-radio-group>
  </template>
  `,-1),C=_("",11),O=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1721968438000}'),A={name:"components/radio.md"},U=Object.assign(A,{setup(E){const i=p("0"),h=p(!0);return(N,l)=>{const s=b("CodePreview"),c=b("ClientOnly");return m(),v("div",null,[f,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(r),{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=n=>h.value=n)},{label:a(()=>[P]),_:1},8,["modelValue"])]),default:a(()=>[x]),_:1})]),_:1}),g,y,e(c,null,{default:a(()=>[e(s,null,{default:a(()=>[q]),_:1})]),_:1}),V,k,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(u),{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=n=>i.value=n)},{default:a(()=>[e(o(r),{label:"男",value:"0"}),e(o(r),{label:"女",value:"1"})]),_:1},8,["modelValue"])]),default:a(()=>[R]),_:1})]),_:1}),S,T,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(u),{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=n=>i.value=n)},{default:a(()=>[e(o(r),{label:"男",value:"0",type:"button"}),e(o(r),{label:"女",value:"1",type:"button"})]),_:1},8,["modelValue"])]),default:a(()=>[w]),_:1})]),_:1}),C])}}});export{O as __pageData,U as default};
