import{d as h,e as x}from"./chunks/theme.CQafP7Fx.js";import{d as q,p,B as y,c as v,o as k,au as P,G as o,j as t,w as d,k as n,a,F as f,C}from"./chunks/framework.B8v7S4uB.js";const D=JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md","lastUpdated":1760171877000}'),S={name:"components/checkbox.md"},I=q({...S,setup(A){const r=[["CD","成都"],["BJ","北京"],["SZ","深圳"],["HZ","杭州"]],g=p(!0),c=p(["CD","SZ"]),m=p(!1),s=p(!0);function V(b){s.value=!1,c.value=b?r.map(e=>e[0]):[]}function _(b){const e=b.length;m.value=e===r.length,e===0?s.value=!1:s.value=e<r.length}return(b,e)=>{const i=y("CodePreview"),u=y("ClientOnly");return k(),v("div",null,[e[10]||(e[10]=P("",5)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(h),{label:"Option1",modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=l=>g.value=l)},null,8,["modelValue"])]),default:d(()=>[e[5]||(e[5]=t("textarea",{lang:"vue-html"},`  <lv-checkbox label="Option1" v-model="isCheckOption"></lv-checkbox>
  `,-1))]),_:1})]),_:1}),e[11]||(e[11]=t("h3",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[12]||(e[12]=t("p",null,[a("多选框不可用状态, 设置 "),t("code",null,"disabled"),a(" 属性即可。")],-1)),o(u,null,{default:d(()=>[o(i,null,{default:d(()=>[...e[6]||(e[6]=[t("textarea",{lang:"vue-html"},`  <lv-checkbox label="Option1" disabled></lv-checkbox>
  `,-1)])]),_:1})]),_:1}),e[13]||(e[13]=t("h3",{id:"选项框组",tabindex:"-1"},[a("选项框组 "),t("a",{class:"header-anchor",href:"#选项框组","aria-label":'Permalink to "选项框组"'},"​")],-1)),e[14]||(e[14]=t("p",null,[a("使用 "),t("code",null,"lv-checkbox-group"),a(" 元素来包裹 "),t("code",null,"lv-checkbox"),a(" 元素，实现复选框组。使用时需要给 "),t("code",null,"lv-checkbox"),a(" 传递 "),t("code",null,"value"),a(" 属性。")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l)},{default:d(()=>[(k(),v(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[7]||(e[7]=t("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <lv-checkbox-group v-model="checkedCities">
      <lv-checkbox v-for="city in cities" :key="city[0]" :value="city[0]" :label="city[1]"></lv-checkbox>
    </lv-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[15]||(e[15]=t("h3",{id:"中间状态",tabindex:"-1"},[a("中间状态 "),t("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1)),e[16]||(e[16]=t("p",null,[a("设置 "),t("code",null,"indeterminate"),a(" 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(h),{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),label:"全选",indeterminate:s.value,onChange:V},null,8,["modelValue","indeterminate"]),o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),onChange:_},{default:d(()=>[(k(),v(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[8]||(e[8]=t("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    import { Checkbox, CheckboxGroup } from '../../src';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    function handleCheckAllChange(val: boolean) {
      checkedCities.value = val ? cities.map(c => c[0]) : [];
      isIndeterminate.value = false;
    }
    function handleGroupChange(val: string[]) {
      const checkedCount = val.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount < cities.length;
    }
  <\/script>
  <template>
    <lv-checkbox
      v-model="checkAll"
      label="全选"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <lv-checkbox-group
      v-model="checkedCities"
      @change="handleGroupChange"
    >
      <lv-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
      ></lv-checkbox>
    </lv-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[17]||(e[17]=t("h3",{id:"按钮样式",tabindex:"-1"},[a("按钮样式 "),t("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1)),e[18]||(e[18]=t("p",null,[a("只需要设置 "),t("code",null,"checkbox"),a(" 的 "),t("code",null,"type"),a(" 为 "),t("code",null,"button"),a("；就能将复选框变为按钮样式")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l)},{default:d(()=>[(k(),v(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1],type:"button"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[9]||(e[9]=t("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <lv-checkbox-group v-model="checkedCities">
      <lv-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
        type="button"
      ></lv-checkbox>
    </lv-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=P("",9))])}}});export{D as __pageData,I as default};
