import{b as o,c as v}from"./chunks/theme.CQafP7Fx.js";import{p as i,q as C,B as g,c as V,o as P,au as x,G as t,j as l,w as a,k as d,a as n}from"./chunks/framework.B8v7S4uB.js";const T=JSON.parse('{"title":"Check 选择","description":"","frontmatter":{},"headers":[],"relativePath":"components/check.md","filePath":"components/check.md","lastUpdated":1761104492000}'),q={name:"components/check.md"},B=Object.assign(q,{setup(S){const b=i(!1),m=i(!1),k=i("0"),r=i(["CD"]),f=i(r.value.length>0&&r.value.length<4),p=i(!1);C(r,u=>{f.value=u.length>0&&u.length<4,u.length===4?p.value=!0:p.value=!1});function y(u){u?r.value=["CD","BJ","SH","GZ"]:r.value=[]}return(u,e)=>{const h=g("CodePreview"),s=g("ClientOnly");return P(),V("div",null,[e[18]||(e[18]=x("",5)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(o),{label:"单选",modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=c=>b.value=c)},null,8,["modelValue"]),t(d(o),{label:"多选",modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=c=>m.value=c),type:"checkbox",class:"ml-10"},null,8,["modelValue"])]),default:a(()=>[e[9]||(e[9]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const checked1 = ref(true);
    const checked2 = ref(false);
  <\/script>
  <template>
    <lv-check label="单选" v-model="checked1"></lv-check>
    <lv-check label="多选" v-model="checked2" type="checkbox" class="ml-10"></lv-check>
  </template>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=l("blockquote",null,[l("p",null,[n("也可以通过 "),l("code",null,"checked"),n(" 属性设置选中")])],-1)),e[20]||(e[20]=l("h3",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),l("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[21]||(e[21]=l("p",null,[n("通过 "),l("code",null,"disabled"),n(" 属性可以禁用选择框，禁用状态下不能点击选中")],-1)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(o),{label:"单选",disabled:""}),t(d(o),{label:"多选",type:"checkbox",class:"ml-10",disabled:""})]),default:a(()=>[e[10]||(e[10]=l("textarea",{lang:"vue"},`  <template>
    <lv-check label="单选" disabled></lv-check>
    <lv-check label="多选" type="checkbox" class="ml-10" disabled></lv-check>
  </template>
  `,-1))]),_:1})]),_:1}),e[22]||(e[22]=l("h3",{id:"自定义文本",tabindex:"-1"},[n("自定义文本 "),l("a",{class:"header-anchor",href:"#自定义文本","aria-label":'Permalink to "自定义文本"'},"​")],-1)),e[23]||(e[23]=l("p",null,[n("可以通过自定义 "),l("code",null,"default"),n(" 插槽来自定义选择框的文本")],-1)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(o),{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=c=>b.value=c)},{default:a(()=>[...e[11]||(e[11]=[l("span",null,"请阅读并同意",-1),l("a",null,"《服务协议》",-1),l("span",null,"和",-1),l("a",null,"《隐私协议》",-1)])]),_:1},8,["modelValue"])]),default:a(()=>[e[12]||(e[12]=l("textarea",{lang:"vue"},`  <template>
    <lv-check v-model="checked1">
      <span>请阅读并同意</span>
      <a>《服务协议》</a>
      <span>和</span>
      <a>《隐私协议》</a>
    </lv-check>
  </template>
  `,-1))]),_:1})]),_:1}),e[24]||(e[24]=l("h3",{id:"选择组",tabindex:"-1"},[n("选择组 "),l("a",{class:"header-anchor",href:"#选择组","aria-label":'Permalink to "选择组"'},"​")],-1)),e[25]||(e[25]=l("p",null,[n("使用 "),l("code",null,"lv-check-group"),n(" 元素来包裹 "),l("code",null,"lv-check"),n(" 元素，实现复选框组。使用时需要给 "),l("code",null,"lv-check"),n(" 传递 "),l("code",null,"value"),n(" 属性。")],-1)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(v),{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=c=>k.value=c),type:"radio"},{default:a(()=>[t(d(o),{value:"0",label:"男"}),t(d(o),{value:"1",label:"女"})]),_:1},8,["modelValue"]),e[13]||(e[13]=l("hr",null,null,-1)),t(d(v),{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=c=>r.value=c),type:"checkbox",name:"city"},{default:a(()=>[t(d(o),{value:"CD",label:"成都"}),t(d(o),{value:"BJ",label:"北京"}),t(d(o),{value:"SH",label:"上海"}),t(d(o),{value:"GZ",label:"广州"})]),_:1},8,["modelValue"])]),default:a(()=>[e[14]||(e[14]=l("textarea",{lang:"vue"},`  <template>
    <lv-check-group v-model="sex" type="radio">
      <lv-check value="0" label="男"></lv-check>
      <lv-check value="1" label="女"></lv-check>
    </lv-check-group>
    //-
    <lv-check-group v-model="cities" type="checkbox" name="city">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[26]||(e[26]=l("h3",{id:"按钮组",tabindex:"-1"},[n("按钮组 "),l("a",{class:"header-anchor",href:"#按钮组","aria-label":'Permalink to "按钮组"'},"​")],-1)),e[27]||(e[27]=l("p",null,[n("将 "),l("code",null,"appearance"),n(" 设置为 "),l("code",null,"button"),n(" 可以将选择框渲染为按钮组")],-1)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(v),{modelValue:k.value,"onUpdate:modelValue":e[5]||(e[5]=c=>k.value=c),type:"radio",appearance:"button"},{default:a(()=>[t(d(o),{value:"0",label:"男"}),t(d(o),{value:"1",label:"女"})]),_:1},8,["modelValue"]),e[15]||(e[15]=l("hr",null,null,-1)),t(d(v),{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=c=>r.value=c),type:"checkbox",name:"city",appearance:"button"},{default:a(()=>[t(d(o),{value:"CD",label:"成都"}),t(d(o),{value:"BJ",label:"北京"}),t(d(o),{value:"SH",label:"上海"}),t(d(o),{value:"GZ",label:"广州"})]),_:1},8,["modelValue"])]),default:a(()=>[e[16]||(e[16]=l("textarea",{lang:"vue"},`  <template>
    <lv-check-group v-model="sex" type="radio" appearance="button">
      <lv-check value="0" label="男"></lv-check>
      <lv-check value="1" label="女"></lv-check>
    </lv-check-group>
    //-
    <lv-check-group v-model="cities" type="checkbox" name="city" appearance="button">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[28]||(e[28]=l("h3",{id:"中间状态",tabindex:"-1"},[n("中间状态 "),l("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1)),e[29]||(e[29]=l("p",null,[n("通过 "),l("code",null,"indeterminate"),n(" 属性可以将选择框设置为中间状态")],-1)),t(s,null,{default:a(()=>[t(h,null,{preview:a(()=>[t(d(o),{modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=c=>p.value=c),type:"checkbox",indeterminate:f.value,label:"全选",onChange:y},null,8,["modelValue","indeterminate"]),t(d(v),{modelValue:r.value,"onUpdate:modelValue":e[8]||(e[8]=c=>r.value=c),type:"checkbox"},{default:a(()=>[t(d(o),{value:"CD",label:"成都"}),t(d(o),{value:"BJ",label:"北京"}),t(d(o),{value:"SH",label:"上海"}),t(d(o),{value:"GZ",label:"广州"})]),_:1},8,["modelValue"])]),default:a(()=>[e[17]||(e[17]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref, watch } from 'vue';
    //-
    const checkAll = ref(false);
    const isIndeterminate = ref(false);
    const cities = ref([]);
    //-
    watch(cities, (newVal) => {
      isIndeterminate.value = newVal.length > 0 && newVal.length < 4;
      if (newVal.length === 4) {
        checkAll.value = true;
      } else {
        checkAll.value = false;
      }
    });
    //-
    function checkAllChange(isAll) {
      if (isAll) {
        cities.value = ['CD', 'BJ', 'SH', 'GZ'];
      } else {
        cities.value = [];
      }
    }
  <\/script>
  <template>
    <lv-check
      v-model="checked1"
      type="checkbox"
      indeterminate
      label="全选"
      @change="checkAllChange"
    ></lv-check>
    <lv-check-group v-model="cities" type="checkbox">
      <lv-check value="CD" label="成都"></lv-check>
      <lv-check value="BJ" label="北京"></lv-check>
      <lv-check value="SH" label="上海"></lv-check>
    </lv-check-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[30]||(e[30]=x("",13))])}}});export{T as __pageData,B as default};
