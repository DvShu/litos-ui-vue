import{p as m,B as v,c as n,o as d,at as h,G as e,j as s,w as i,k as p,a as t,T as c,e as k}from"./chunks/framework.DUND-OMv.js";import{i as o,_ as g,a8 as f}from"./chunks/theme.DrcBp2Zx.js";const y={key:0,class:"ml-10"},_={key:0,class:"inline ml-10"},x={key:0,class:"inline ml-10",style:{"--l-fadein-offset":"-50px"}},C={key:0,class:"inline ml-10"},T={class:"icon-list mt-15"},q={class:"icon-item center"},B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css-util.md","filePath":"css-util.md","lastUpdated":1760171877000}'),w={name:"css-util.md"},D=Object.assign(w,{setup(F){const u=m(!0),r=m(!0),b=m(!0);return(P,a)=>{const l=v("ClientOnly");return d(),n("div",null,[a[12]||(a[12]=h("",7)),e(l,null,{default:i(()=>[e(o,{class:"mb-15"},{preview:i(()=>[e(p(g),{onClick:a[0]||(a[0]=E=>u.value=!u.value)},{default:i(()=>[...a[3]||(a[3]=[t("Toggle",-1)])]),_:1}),e(c,{name:"l-opacity"},{default:i(()=>[u.value?(d(),n("span",y,"Hello World")):k("",!0)]),_:1})]),default:i(()=>[a[4]||(a[4]=s("textarea",{lang:"vue-html"},`<lv-button @click="show = !show">Toggle</lv-button>
<Transition name="l-opacity">
<p v-if="show">Hello world</p>
</Transition>
`,-1))]),_:1})]),_:1}),a[13]||(a[13]=s("h4",{id:"_1-2-2-l-fadein",tabindex:"-1"},[t("1.2.2 "),s("code",null,"l-fadein"),t(),s("a",{class:"header-anchor",href:"#_1-2-2-l-fadein","aria-label":'Permalink to "1.2.2 `l-fadein`"'},"​")],-1)),a[14]||(a[14]=s("p",null,[t("从顶部往下移动渐变的进入/退出; 支持通过 "),s("code",null,"--l-fadein-offset"),t(" 控制距离, 默认为 "),s("code",null,"-20px")],-1)),e(l,null,{default:i(()=>[e(o,{class:"mb-15"},{preview:i(()=>[e(p(g),{onClick:a[1]||(a[1]=E=>r.value=!r.value)},{default:i(()=>[...a[5]||(a[5]=[t("Toggle",-1)])]),_:1}),e(c,{name:"l-fadein"},{default:i(()=>[r.value?(d(),n("div",_,"Hello World")):k("",!0)]),_:1}),e(c,{name:"l-fadein"},{default:i(()=>[r.value?(d(),n("div",x,"Hello World")):k("",!0)]),_:1})]),default:i(()=>[a[6]||(a[6]=s("textarea",{lang:"vue-html"},`<lv-button @click="show = !show">Toggle</lv-button>
<Transition name="l-fadein">
<p v-if="show">Hello world</p>
</Transition>
<Transition name="nl-fadein">
<p v-if="show" style="--l-fadein-offset:-50px;">Hello world</p>
</Transition>
`,-1))]),_:1})]),_:1}),a[15]||(a[15]=s("h4",{id:"_1-2-3-l-scale",tabindex:"-1"},[t("1.2.3 "),s("code",null,"l-scale"),t(),s("a",{class:"header-anchor",href:"#_1-2-3-l-scale","aria-label":'Permalink to "1.2.3 `l-scale`"'},"​")],-1)),a[16]||(a[16]=s("p",null,"缩放进入/退出",-1)),e(l,null,{default:i(()=>[e(o,null,{preview:i(()=>[e(p(g),{onClick:a[2]||(a[2]=E=>b.value=!b.value)},{default:i(()=>[...a[7]||(a[7]=[t("Toggle",-1)])]),_:1}),e(c,{name:"l-scale",appear:""},{default:i(()=>[b.value?(d(),n("div",C,"Hello world")):k("",!0)]),_:1})]),default:i(()=>[a[8]||(a[8]=s("textarea",{lang:"vue-html"},`  <lv-button @click="show = !show">Toggle</lv-button>
  <Transition name="l-scale">
    <p v-if="show">Hello world</p>
  </Transition>
  `,-1))]),_:1})]),_:1}),a[17]||(a[17]=h("",15)),s("div",T,[s("div",q,[e(p(f),{class:"l-rotate-anim"}),a[9]||(a[9]=s("span",{class:"icon-name"},"rotate",-1))])]),a[18]||(a[18]=h("",6)),e(l,null,{default:i(()=>[e(o,{class:"mb-15"},{default:i(()=>[...a[10]||(a[10]=[s("textarea",{lang:"html"},`  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1)])]),_:1})]),_:1}),a[19]||(a[19]=s("h4",{id:"更改滚动条颜色以及大小",tabindex:"-1"},[t("更改滚动条颜色以及大小 "),s("a",{class:"header-anchor",href:"#更改滚动条颜色以及大小","aria-label":'Permalink to "更改滚动条颜色以及大小"'},"​")],-1)),a[20]||(a[20]=s("p",null,[t("通过使用下面表格中的 "),s("code",null,"CSS"),t(" 变量，可以更改滚动条的颜色以及大小")],-1)),e(l,null,{default:i(()=>[e(o,null,{default:i(()=>[...a[11]||(a[11]=[s("textarea",{lang:"html"},`  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1)])]),_:1})]),_:1}),a[21]||(a[21]=h("",2))])}}});export{B as __pageData,D as default};
