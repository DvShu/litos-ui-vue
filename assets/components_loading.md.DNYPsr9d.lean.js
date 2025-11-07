import{L as o,_ as c}from"./chunks/theme.CQafP7Fx.js";import{p as g,B as E,c as r,o as p,au as b,G as s,j as a,w as e,a5 as h,a as t,k as i}from"./chunks/framework.B8v7S4uB.js";const F={class:"loading-demo"},x={class:"loading-demo","l-loading-text":"loading……","l-loading-background":"rgba(255, 255, 255, .9)"},T={class:"loading-demo"},I=JSON.parse('{"title":"Loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md","lastUpdated":1760325285000}'),A={name:"components/loading.md"},q=Object.assign(A,{setup(L){const v=g(!0),u=g(!1);function f(){u.value=!0,setTimeout(()=>{u.value=!1},3e3)}const k=g(!1);function y(){k.value=!0}function C(){k.value=!1}let m;function _(){m=o.open(),setTimeout(()=>{m.close()},3e3)}return(P,n)=>{const l=E("CodePreview"),d=E("ClientOnly");return p(),r("div",null,[n[11]||(n[11]=b("",5)),s(d,null,{default:e(()=>[s(l,null,{preview:e(()=>[h((p(),r("div",F,[...n[0]||(n[0]=[t(" 内容加载区域 ",-1)])])),[[i(o),v.value]])]),default:e(()=>[n[1]||(n[1]=a("textarea",{lang:"vue-html"},`  <div class="loading-demo" v-loading="loading">
    内容加载区域
  </div>
  `,-1))]),_:1})]),_:1}),n[12]||(n[12]=a("h3",{id:"自定义内容",tabindex:"-1"},[t("自定义内容 "),a("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),n[13]||(n[13]=a("p",null,"你可以自定义加载中组件的文字，背景颜色。",-1)),n[14]||(n[14]=a("p",null,[t("在绑定了 "),a("code",null,"v-loading"),t(" 指令的元素上添加 "),a("code",null,"l-loading-text"),t(" 属性，其值会被渲染为加载文案，并显示在加载图标的下方；将其设置为空字符串可以用于取消文本。"),a("code",null,"l-loading-background"),t(" 用来设定背景色值。")],-1)),s(d,null,{default:e(()=>[s(l,null,{preview:e(()=>[h((p(),r("div",x,[...n[2]||(n[2]=[t(" 内容加载区域 ",-1)])])),[[i(o),v.value]])]),default:e(()=>[n[3]||(n[3]=a("textarea",{lang:"vue-html"},`  <div
    class="loading-demo"
    v-loading="loading"
    l-loading-text="loading……"
    l-loading-background="rgba(255, 255, 255, .9)"
  >
    内容加载区域
  </div>
  `,-1))]),_:1})]),_:1}),n[15]||(n[15]=a("h3",{id:"全屏",tabindex:"-1"},[t("全屏 "),a("a",{class:"header-anchor",href:"#全屏","aria-label":'Permalink to "全屏"'},"​")],-1)),n[16]||(n[16]=a("p",null,[t("通过传递 "),a("code",null,"fullscreen"),t(" 修饰符将遮罩插入至 "),a("code",null,"body"),t(" 上保证加载数据時显示全屏动画；当全屏时默认会禁止滚动，通过传递 "),a("code",null,"unlock"),t(" 修饰符可以允许滚动。")],-1)),s(d,null,{default:e(()=>[s(l,null,{preview:e(()=>[h((p(),r("div",null,[s(i(c),{onClick:f},{default:e(()=>[...n[4]||(n[4]=[t("加载",-1)])]),_:1})])),[[i(o),u.value,void 0,{fullscreen:!0}]])]),default:e(()=>[n[5]||(n[5]=a("textarea",{lang:"vue"},`  <script setup>
    const loading2 = ref(false)
    function handleOpenLoading() {
      loading2.value = true
      setTimeout(() => {
        loading2.value = false
      }, 3000);
    }
  <\/script>
  <template>
    <div v-loading.fullscreen="loading2">
      <lv-button @click="handleOpenLoading">加载</lv-button>
    </div>
  </template>
  `,-1))]),_:1})]),_:1}),n[17]||(n[17]=a("h3",{id:"进度条风格",tabindex:"-1"},[t("进度条风格 "),a("a",{class:"header-anchor",href:"#进度条风格","aria-label":'Permalink to "进度条风格"'},"​")],-1)),n[18]||(n[18]=a("p",null,[t("通过传递 "),a("code",null,"bar"),t(" 参数可以将圆形加载变为进度条风格。")],-1)),s(d,null,{default:e(()=>[s(l,null,{preview:e(()=>[h((p(),r("div",T,[s(i(c),{onClick:y},{default:e(()=>[...n[6]||(n[6]=[t("开始",-1)])]),_:1}),s(i(c),{onClick:C},{default:e(()=>[...n[7]||(n[7]=[t("结束",-1)])]),_:1})])),[[i(o),k.value,"bar",{fullscreen:!0,unlock:!0}]])]),default:e(()=>[n[8]||(n[8]=a("textarea",{lang:"vue"},`  <script setup>
    const loading3 = ref(false)
    function handleBarOpen() {
      loading3.value = true;
    }
    function handleBarClose() {
      loading3.value = false;
    }
  <\/script>
  <template>
    <div class="loading-demo" v-loading:bar.fullscreen.unlock="loading3">
      <lv-button @click="handleBarOpen">开始</lv-button>
      <lv-button @click="handleBarClose">结束</lv-button>
    </div>
  </template>
  `,-1))]),_:1})]),_:1}),n[19]||(n[19]=b("",7)),s(d,null,{default:e(()=>[s(l,null,{preview:e(()=>[s(i(c),{onClick:_},{default:e(()=>[...n[9]||(n[9]=[t("开始",-1)])]),_:1})]),default:e(()=>[n[10]||(n[10]=a("textarea",{lang:"vue-html"},`  <script setup>
    let loadingInstance;
    function handleApiOpen() {
      loadingInstance = NtLoading.open();
      setTimeout(() => {
        loadingInstance.close()
      }, 3000);
    }
  <\/script>
  <template>
    <lv-button @click="handleApiOpen">开始</lv-button>
  </template>
  `,-1))]),_:1})]),_:1}),n[20]||(n[20]=b("",5))])}}});export{I as __pageData,q as default};
