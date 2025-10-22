import{Q as c,S as u,o as _,p as d,q as b,_ as w}from"./chunks/theme.DrcBp2Zx.js";import{p as f,B as V,c as h,o as p,at as E,G as a,j as n,w as s,k as l,a as i,e as m,b as q}from"./chunks/framework.DUND-OMv.js";const A={class:"l-tabs"},C={class:"l-tabs-content"},x={key:0},F={key:1},D={class:"login-form-wrapper"},S={class:"l-tabs"},B={class:"l-tabs-content"},$={class:"l-tabs"},N={class:"l-tabs-content"},R={key:0},U={key:1},G=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md","lastUpdated":1760171877000}'),z={name:"components/tabs.md"},J=Object.assign(z,{setup(Z){const r=f("1"),k=f("login"),v=f({username:"",password:""}),o=f({username:"",password:"",password2:""}),P=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}],T=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"},{key:"password2",rules:["required","same:password"],message:"两次密码输入不一致"}];return(j,e)=>{const g=V("CodePreview"),y=V("ClientOnly");return p(),h("div",null,[e[19]||(e[19]=E('<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页 <a class="header-anchor" href="#tabs-标签页" aria-label="Permalink to &quot;Tabs 标签页&quot;">​</a></h1><p>选项卡切换组件；其实这个模块的内容就是 <a href="/litos-ui-vue/components/tabbar">Tabbar 标签栏</a> + 内容区域；所以就没有单独抽取为组件，转而提供 <code>css</code> 样式表，通过手动引入样式就能达到效果。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;litos-ui-vue/style/util/tabs.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基础的、简洁的标签页。</p>',7)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[n("div",A,[a(l(c),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),type:"bar"},{default:s(()=>[a(l(u),{name:"1"},{default:s(()=>[...e[8]||(e[8]=[i("标签一",-1)])]),_:1}),a(l(u),{name:"2"},{default:s(()=>[...e[9]||(e[9]=[i("标签二",-1)])]),_:1})]),_:1},8,["modelValue"]),n("div",C,[r.value==="1"?(p(),h("div",x,"标签一")):m("",!0),r.value==="2"?(p(),h("div",F,"标签二")):m("",!0)])])]),default:s(()=>[e[10]||(e[10]=n("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  <\/script>
  <template>
  <div class="l-tabs">
    <lv-tabbar v-model="active" type="bar">
      <lv-tabbar-item name="1">标签一</lv-tabbar-item>
      <lv-tabbar-item name="2">标签二</lv-tabbar-item>
    </lv-tabbar>
    <div class="l-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  `,-1))]),_:1})]),_:1}),e[20]||(e[20]=E('<h3 id="简单登录注册" tabindex="-1">简单登录注册 <a class="header-anchor" href="#简单登录注册" aria-label="Permalink to &quot;简单登录注册&quot;">​</a></h3><p>通过组件搭配: <a href="/litos-ui-vue/components/form">form 表单</a>、<a href="/litos-ui-vue/components/input">input 输入框</a>、<a href="/litos-ui-vue/components/button">button 按钮</a>、<a href="/litos-ui-vue/components/tabbar">tabbar 选项卡</a> 等组件，实现简单的登录注册。</p>',2)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[n("div",D,[n("div",S,[a(l(c),{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=t=>k.value=t),type:"bar","justify-content":"space-evenly"},{default:s(()=>[a(l(u),{name:"login"},{default:s(()=>[...e[11]||(e[11]=[i("登录",-1)])]),_:1}),a(l(u),{name:"regist"},{default:s(()=>[...e[12]||(e[12]=[i("注册",-1)])]),_:1})]),_:1},8,["modelValue"]),n("div",B,[k.value==="login"?(p(),q(l(_),{key:0,model:v.value,rules:P},{default:s(()=>[a(l(d),{label:"用户名",required:"",name:"username"},{default:s(()=>[a(l(b),{placeholder:"请输入用户名",modelValue:v.value.username,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value.username=t)},null,8,["modelValue"])]),_:1}),a(l(d),{label:"密码",required:"",name:"password"},{default:s(()=>[a(l(b),{placeholder:"请输入密码",modelValue:v.value.password,"onUpdate:modelValue":e[3]||(e[3]=t=>v.value.password=t),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(l(d),{label:""},{default:s(()=>[a(l(w),{"html-type":"submit"},{default:s(()=>[...e[13]||(e[13]=[i("提交",-1)])]),_:1})]),_:1})]),_:1},8,["model"])):m("",!0),k.value==="regist"?(p(),q(l(_),{key:1,model:o.value,rules:T},{default:s(()=>[a(l(d),{label:"用户名",required:"",name:"username"},{default:s(()=>[a(l(b),{placeholder:"请输入用户名",modelValue:o.value.username,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.username=t)},null,8,["modelValue"])]),_:1}),a(l(d),{label:"密码",required:"",name:"password"},{default:s(()=>[a(l(b),{placeholder:"请输入密码",modelValue:o.value.password,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.password=t),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(l(d),{label:"确认密码",required:"",name:"password2"},{default:s(()=>[a(l(b),{placeholder:"再次输入密码",modelValue:o.value.password2,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value.password2=t),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(l(d),{label:""},{default:s(()=>[a(l(w),{"html-type":"submit"},{default:s(()=>[...e[14]||(e[14]=[i("提交",-1)])]),_:1})]),_:1})]),_:1},8,["model"])):m("",!0)])])])]),default:s(()=>[e[15]||(e[15]=n("textarea",{lang:"vue"},`  <script setup>
    const templateType = ref('login');
    const loginParams = ref({
      username: '',
      password: ''
    });
    const registParams = ref({
      username: '',
      password: '',
      password2: ''
    })
    const loginRules = [
      {
        key: 'username',
        rules: ['required'],
        message: '用户名不能为空'
      },
      {
        key: 'password',
        rules: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],
        message: '密码为6~15位字母+数字'
      }
    ];
    const registRules = [
      {
        key: 'username',
        rules: ['required'],
        message: '用户名不能为空'
      },
      {
        key: 'password',
        rules: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],
        message: '密码为6~15位字母+数字'
      },
      {
        key: 'password2',
        rules: ['required', 'same:password'],
        message: '两次密码输入不一致'
      }
    ]
  <\/script>
  <template>
    <div class="login-form-wrapper">
      <div class="l-tabs">
        <lv-tabbar v-model="templateType" type="bar" justify-content="space-evenly">
          <lv-tabbar-item name="login">登录</lv-tabbar-item>
          <lv-tabbar-item name="regist">注册</lv-tabbar-item>
        </lv-tabbar>
        <div class="l-tabs-content">
          <!-- 登录 -->
          <lv-form v-if="templateType === 'login'" :model="loginParams" :rules="loginRules">
            <lv-form-item label="用户名" required name="username">
              <lv-input placeholder="请输入用户名" v-model="loginParams.username"></lv-input>
            </lv-form-item>
            <lv-form-item label="密码" required name="password">
              <lv-input placeholder="请输入密码" v-model="loginParams.password" html-type="password"></lv-input>
            </lv-form-item>
            <lv-form-item label="">
              <lv-button html-type="submit">提交</lv-button>
            </lv-form-item>
          </lv-form>
          <!-- 注册 -->
          <lv-form v-if="templateType === 'regist'" :model="registParams" :rules="registRules">
            <lv-form-item label="用户名" required name="username">
              <lv-input placeholder="请输入用户名" v-model="registParams.username"></lv-input>
            </lv-form-item>
            <lv-form-item label="密码" required name="password">
              <lv-input placeholder="请输入密码" v-model="registParams.password" html-type="password"></lv-input>
            </lv-form-item>
            <lv-form-item label="确认密码" required name="password2">
              <lv-input placeholder="再次输入密码" v-model="registParams.password2" html-type="password"></lv-input>
            </lv-form-item>
            <lv-form-item label="">
              <lv-button html-type="submit">提交</lv-button>
            </lv-form-item>
          </lv-form>
        </div>
      </div>
    </div>
  </template>
  `,-1))]),_:1})]),_:1}),e[21]||(e[21]=n("h3",{id:"卡片风格",tabindex:"-1"},[i("卡片风格 "),n("a",{class:"header-anchor",href:"#卡片风格","aria-label":'Permalink to "卡片风格"'},"​")],-1)),e[22]||(e[22]=n("p",null,[i("通过设置 "),n("code",null,"tabbar"),i(" 的 "),n("code",null,"type=card"),i(" 来使用卡片风格。")],-1)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[n("div",$,[a(l(c),{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=t=>r.value=t),type:"card"},{default:s(()=>[a(l(u),{name:"1"},{default:s(()=>[...e[16]||(e[16]=[i("标签一",-1)])]),_:1}),a(l(u),{name:"2"},{default:s(()=>[...e[17]||(e[17]=[i("标签二",-1)])]),_:1})]),_:1},8,["modelValue"]),n("div",N,[r.value==="1"?(p(),h("div",R,"标签一")):m("",!0),r.value==="2"?(p(),h("div",U,"标签二")):m("",!0)])])]),default:s(()=>[e[18]||(e[18]=n("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  <\/script>
  <template>
  <div class="l-tabs">
    <lv-tabbar v-model="active" type="card">
      <lv-tabbar-item name="1">标签一</lv-tabbar-item>
      <lv-tabbar-item name="2">标签二</lv-tabbar-item>
    </lv-tabbar>
    <div class="l-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  `,-1))]),_:1})]),_:1}),e[23]||(e[23]=E(`<h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l-tabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lv-tabbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lv-tabbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l-tabs-content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 内容区域--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2))])}}});export{G as __pageData,J as default};
