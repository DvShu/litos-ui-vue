import{_ as a,M as l}from"./chunks/theme.CQafP7Fx.js";import{B as m,c as x,o as P,j as o,G as n,au as c,a as d,w as t,k as s}from"./chunks/framework.B8v7S4uB.js";const L=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1762507319000}'),T={name:"components/message.md"},S=Object.assign(T,{setup(w){let p="",g="";function M(f=3e3){p=l.info({content:"这是一条提示信息",duration:f})}function v(){l.close(p)}function b(){g=l.loading({content:"加载中……",duration:0})}function C(){l.update(g,{content:"加载成功",type:"success",duration:3e3})}function k(){l.update(g,{content:"加载失败",type:"error",duration:3e3})}return(f,e)=>{const i=m("CodePreview"),u=m("ClieLvOnly");return P(),x("div",null,[e[23]||(e[23]=o("h1",{id:"message-消息提示",tabindex:"-1"},[d("Message 消息提示 "),o("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[24]||(e[24]=o("p",null,"常用于主动操作后的反馈提示。更多用于系统级通知的被动提醒。",-1)),e[25]||(e[25]=o("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[26]||(e[26]=o("p",null,[d("从顶部出现，"),o("code",null,"3"),d(" 秒后自动消失; 可以接收一个字符串被显示为正文内容")],-1)),n(u,null,{default:t(()=>[n(i,null,{preview:t(()=>[n(s(a),{onClick:e[0]||(e[0]=r=>s(l).info("这是一条普通的提示信息"))},{default:t(()=>[...e[7]||(e[7]=[d("显示信息",-1)])]),_:1})]),default:t(()=>[e[8]||(e[8]=o("textarea",{lang:"ts"},`LvMessage.info("这是一条普通的提示信息")
`,-1))]),_:1})]),_:1}),e[27]||(e[27]=c("",3)),n(u,null,{default:t(()=>[n(i,null,{preview:t(()=>[n(s(a),{onClick:e[1]||(e[1]=r=>s(l).success("这是一条成功的提示信息")),class:"ml-10"},{default:t(()=>[...e[9]||(e[9]=[d("显示成功",-1)])]),_:1}),n(s(a),{onClick:e[2]||(e[2]=r=>s(l).warn("这是一条警告的提示信息")),class:"ml-10"},{default:t(()=>[...e[10]||(e[10]=[d("显示警告",-1)])]),_:1}),n(s(a),{onClick:e[3]||(e[3]=r=>s(l).error("这是一条错误的提示信息")),class:"ml-10"},{default:t(()=>[...e[11]||(e[11]=[d("显示错误",-1)])]),_:1}),n(s(a),{onClick:e[4]||(e[4]=r=>s(l).loading("这是一条加载的提示信息")),class:"ml-10"},{default:t(()=>[...e[12]||(e[12]=[d("显示加载",-1)])]),_:1})]),default:t(()=>[e[13]||(e[13]=o("textarea",{lang:"ts"},`LvMessage.success("这是一条成功的提示信息")
LvMessage.warn("这是一条警告的提示信息")
LvMessage.error("这是一条错误的提示信息")
LvMessage.loading("这是一条加载的提示信息")
`,-1))]),_:1})]),_:1}),e[28]||(e[28]=c("",2)),n(u,null,{default:t(()=>[n(i,null,{preview:t(()=>[n(s(a),{onClick:e[5]||(e[5]=r=>M(0))},{default:t(()=>[...e[14]||(e[14]=[d("打开",-1)])]),_:1}),n(s(a),{onClick:v,class:"ml-10"},{default:t(()=>[...e[15]||(e[15]=[d("关闭",-1)])]),_:1})]),default:t(()=>[e[16]||(e[16]=o("textarea",{lang:"ts"},`// 打开消息
let msgId = LvMessage.info({
content: '这是一条提示信息',
duration: 0
})
// 关闭消息
LvMessage.close(msgId)
`,-1))]),_:1})]),_:1}),e[29]||(e[29]=o("h2",{id:"持续时间",tabindex:"-1"},[d("持续时间 "),o("a",{class:"header-anchor",href:"#持续时间","aria-label":'Permalink to "持续时间"'},"​")],-1)),e[30]||(e[30]=o("p",null,[d("通过 "),o("code",null,"duration"),d(" 属性设定 "),o("code",null,"Message"),d(" 的持续时间。")],-1)),n(u,null,{default:t(()=>[n(i,null,{preview:t(()=>[n(s(a),{onClick:e[6]||(e[6]=r=>s(l).info({content:"这是一条提示信息",duration:5e3}))},{default:t(()=>[...e[17]||(e[17]=[d("持续5s",-1)])]),_:1})]),default:t(()=>[e[18]||(e[18]=o("textarea",{lang:"ts"},`LvMessage.info({
content: "这是一条提示信息",
duration: 5000
})
`,-1))]),_:1})]),_:1}),e[31]||(e[31]=o("h2",{id:"更新消息",tabindex:"-1"},[d("更新消息 "),o("a",{class:"header-anchor",href:"#更新消息","aria-label":'Permalink to "更新消息"'},"​")],-1)),e[32]||(e[32]=o("p",null,[d("通过 "),o("code",null,"updateMessage"),d(" 方法可以更新指定 "),o("code",null,"id"),d(" 的消息内容。")],-1)),n(u,null,{default:t(()=>[n(i,null,{preview:t(()=>[n(s(a),{onClick:b},{default:t(()=>[...e[19]||(e[19]=[d("加载",-1)])]),_:1}),n(s(a),{onClick:C,class:"ml-10"},{default:t(()=>[...e[20]||(e[20]=[d("加载成功",-1)])]),_:1}),n(s(a),{onClick:k,class:"ml-10"},{default:t(()=>[...e[21]||(e[21]=[d("加载失败",-1)])]),_:1})]),default:t(()=>[e[22]||(e[22]=o("textarea",{lang:"ts"},`// 打开消息
let msgId = LvMessage.loading({
  content: '加载中……',
  duration: 0
});
// 加载成功
LvMessage.update(msgId, {
  content: '加载成功',
  type: 'success',
  duration: 3000
});
// 加载失败
LvMessage.update(msgId, {
  content: '加载失败',
  type: 'error',
  duration: 3000
});
`,-1))]),_:1})]),_:1}),e[33]||(e[33]=c("",5))])}}});export{L as __pageData,S as default};
