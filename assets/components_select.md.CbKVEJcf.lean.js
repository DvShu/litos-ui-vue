import{H as c}from"./chunks/theme.DD-_cGzL.js";import{p as v,B as x,c as _,o as y,at as b,G as t,j as l,w as o,k as a,a as s}from"./chunks/framework.BSvSrwQ3.js";const k=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md","lastUpdated":1760171877000}'),P={name:"components/select.md"},A=Object.assign(P,{setup(T){const f=["苹果","香蕉","橙子","葡萄","柠檬","草莓","樱桃","芒果","猕猴桃","杨梅","菠萝","西瓜","哈密瓜","桃子","梨","柿子","榴莲","椰子","龙眼","荔枝"],i=f.slice(0,10).map((p,e)=>({value:e,label:p})),h=v(i),r=v(""),g=v([]),u=v([]),V=v(!1);function S(p){V.value=!0,setTimeout(()=>{p?h.value=f.filter(e=>e.includes(p)).map((e,n)=>({value:n,label:e})):h.value=f.slice(0,10).map((e,n)=>({value:n,label:e})),V.value=!1},1500)}return(p,e)=>{const n=x("CodePreview"),m=x("ClientOnly");return y(),_("div",null,[e[13]||(e[13]=b("",7)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=d=>r.value=d),style:{width:"180px"}},null,8,["options","modelValue"])]),default:o(()=>[e[8]||(e[8]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];
    //-
    const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
    //-
    const value = ref('');
  <\/script>
  <template>
    <lv-select :options="options" v-model="value" style="width:180px;"></lv-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[14]||(e[14]=l("h3",{id:"多选",tabindex:"-1"},[s("多选 "),l("a",{class:"header-anchor",href:"#多选","aria-label":'Permalink to "多选"'},"​")],-1)),e[15]||(e[15]=l("p",null,[s("设置 "),l("code",null,"multiple"),s(" 属性即可启用多选， 此时 "),l("code",null,"v-model"),s(" 的值为当前选中值所组成的数组。默认情况下选中值会以 "),l("a",{href:"/litos-ui-vue/components/tag",target:"_blank"},"Tag"),s(" 组件的形式展现， 你也可以设置 "),l("code",null,"collapse-tags"),s(" 属性将它们合并为一段文字。")],-1)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=d=>g.value=d),multiple:"",style:{width:"180px"}},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":""},null,8,["options","modelValue"])]),default:o(()=>[e[9]||(e[9]=l("textarea",{lang:"vue"},`  <template>
    <lv-select :options="options" v-model="value1" multiple style="width:180px;"></lv-select>
    <lv-select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
    ></lv-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[16]||(e[16]=l("h3",{id:"可清空",tabindex:"-1"},[s("可清空 "),l("a",{class:"header-anchor",href:"#可清空","aria-label":'Permalink to "可清空"'},"​")],-1)),e[17]||(e[17]=l("p",null,[s("设置 "),l("code",null,"clearable"),s(" 属性，则可将选择器清空。使用清除图标来清除选择。")],-1)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=d=>r.value=d),style:{width:"180px"},clearable:""},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":"",clearable:""},null,8,["options","modelValue"])]),default:o(()=>[e[10]||(e[10]=l("textarea",{lang:"vue"},`  <template>
  <lv-select
    :options="options"
    v-model="selectedValue"
    style="width:180px;"
    clearable
  ></lv-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[18]||(e[18]=b("",3)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=d=>r.value=d),style:{width:"180px"},filterable:""},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":"",filterable:""},null,8,["options","modelValue"])]),default:o(()=>[e[11]||(e[11]=l("textarea",{lang:"vue"},`  <template>
    <lv-select
      :options="options"
      v-model="selectedValue"
      style="width:180px;"
      filterable
    ></lv-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=b("",3)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:h.value,modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=d=>r.value=d),style:{width:"180px"},filterable:"",remote:"",onSearch:S,loading:V.value},null,8,["options","modelValue","loading"])]),default:o(()=>[e[12]||(e[12]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];
    const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
    //-
    const loading = ref(false);
    const options2 = ref(options);
    const selectedValue = ref('');
    //-
    function handleSearch(val) {
      loading.value = true;
      setTimeout(() => {
        if (val) {
          options2.value = fruits.filter((item) => item.includes(val)).map((item, i) => { return { value: i, label: item } })
        } else {
          options2.value = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
        }
        loading.value = false;
      }, 1500);
    }
  <\/script>
  <template>
    <lv-select
      :options="options2"
      v-model="selectedValue"
      style="width:180px;"
      filterable
      remote
      @search="handleSearch"
      :loading="loading"
    ></lv-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[20]||(e[20]=b("",7))])}}});export{k as __pageData,A as default};
