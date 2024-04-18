import{M as n,a as c}from"./chunks/theme.GytRFExE.js";import{N as u,c as p,f as o,w as d,b as e,q as t,a9 as g,o as b,C as s}from"./chunks/framework.DxEymtZt.js";const M=e("h1",{id:"message-消息提示",tabindex:"-1"},[t("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1),C=e("p",null,"常用于主动操作后的反馈提示。更多用于系统级通知的被动提醒。",-1),P=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),k=e("p",null,[t("从顶部出现，"),e("code",null,"3"),t(" 秒后自动消失; 可以接收一个字符串被显示为正文内容")],-1),x=e("textarea",{lang:"ts"},`
NtMessage.info("这是一条普通的提示信息")
`,-1),v=g('<h2 id="不同状态" tabindex="-1">不同状态 <a class="header-anchor" href="#不同状态" aria-label="Permalink to &quot;不同状态&quot;">​</a></h2><p>用来显示「成功、警告、消息、错误」类的操作反馈。</p><p>当需要自定义更多属性时，<code>Message</code> 也可以接收一个对象为参数。 比如，设置 <code>type</code> 字段可以定义不同的状态，默认为 <code>info</code> 。 此时正文内容以 <code>message</code> 的值传入。 同时，也为 <code>Message</code> 的各种 <code>type</code> 注册了方法，可以在不传入 <code>type</code> 字段的情况下, 直接调用指定类型的函数, 例如: <code>Message.info(&#39;x&#39;)</code>。</p>',3),N=e("textarea",{lang:"ts"},`
NtMessage.success("这是一条成功的提示信息")
NtMessage.warn("这是一条警告的提示信息")
NtMessage.error("这是一条错误的提示信息")
`,-1),w=e("h2",{id:"手动关闭",tabindex:"-1"},[t("手动关闭 "),e("a",{class:"header-anchor",href:"#手动关闭","aria-label":'Permalink to "手动关闭"'},"​")],-1),T=e("p",null,[t("将 "),e("code",null,"duration"),t(" 属性设置为 "),e("code",null,"0``, 可以使 Message"),t(" 不自动消失。然后显示消息的函数会返回一个消息 "),e("code",null,"id"),t(", 通过手动调用 "),e("code",null,"close"),t(" 手动关闭")],-1),y=e("textarea",{lang:"ts"},`
// 打开消息
let msgId = NtMessage.info({
message: '这是一条提示信息',
duration: 0
})
// 关闭消息
NtMessage.close(msgId)
`,-1),q=e("h2",{id:"持续时间",tabindex:"-1"},[t("持续时间 "),e("a",{class:"header-anchor",href:"#持续时间","aria-label":'Permalink to "持续时间"'},"​")],-1),I=e("p",null,[t("通过 "),e("code",null,"duration"),t(" 属性设定 "),e("code",null,"Message"),t(" 的持续时间。")],-1),S=e("textarea",{lang:"ts"},`
NtMessage.info({
message: "这是一条提示信息",
duration: 5000
})
`,-1),A=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="message-配置项" tabindex="-1">Message 配置项 <a class="header-anchor" href="#message-配置项" aria-label="Permalink to &quot;Message 配置项&quot;">​</a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>string</code></td><td>-</td><td>消息正文内容</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td><code>3000</code></td><td>消息显示的持续时间，单位为毫秒。如果设置为 <code>0</code>，则不会自动关闭</td></tr><tr><td><code>type</code></td><td><code>string</code></td><td><code>info</code></td><td>消息类型，可选值为 <code>success</code>、<code>warning</code>、<code>error</code>、<code>info</code></td></tr><tr><td><code>customClass</code></td><td><code>string</code></td><td>-</td><td>自定义类名</td></tr></tbody></table><h3 id="message-方法" tabindex="-1">Message 方法 <a class="header-anchor" href="#message-方法" aria-label="Permalink to &quot;Message 方法&quot;">​</a></h3><table><thead><tr><th>名称</th><th>参数</th><th>说明</th><th>返回类型</th></tr></thead><tbody><tr><td><code>info</code></td><td><code>{...}</code></td><td>显示普通提示信息, 参数为配置项, 返回消息 <code>id</code></td><td><code>string</code></td></tr><tr><td><code>success</code></td><td><code>{...}</code></td><td>显示成功提示信息</td><td><code>string</code></td></tr><tr><td><code>warn</code></td><td><code>{...}</code></td><td>显示警告提示信息</td><td><code>string</code></td></tr><tr><td><code>error</code></td><td><code>{...}</code></td><td>显示错误提示信息</td><td><code>string</code></td></tr><tr><td><code>close</code></td><td><code>id: string</code></td><td>手动关闭消息</td><td>-</td></tr></tbody></table>',5),D=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1713346936000}'),V={name:"components/message.md"},E=Object.assign(V,{setup($){let _="";function m(h=3e3){_=n.info({message:"这是一条提示信息",duration:h})}function f(){n.close(_)}return(h,a)=>{const r=u("CodePreview"),i=u("ClientOnly");return b(),p("div",null,[M,C,P,k,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(c),{onClick:a[0]||(a[0]=l=>s(n).info("这是一条普通的提示信息"))},{default:d(()=>[t("显示信息")]),_:1})]),default:d(()=>[x]),_:1})]),_:1}),v,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(c),{onClick:a[1]||(a[1]=l=>s(n).success("这是一条成功的提示信息")),class:"ml-10"},{default:d(()=>[t("显示成功")]),_:1}),o(s(c),{onClick:a[2]||(a[2]=l=>s(n).warn("这是一条警告的提示信息")),class:"ml-10"},{default:d(()=>[t("显示警告")]),_:1}),o(s(c),{onClick:a[3]||(a[3]=l=>s(n).error("这是一条错误的提示信息")),class:"ml-10"},{default:d(()=>[t("显示错误")]),_:1})]),default:d(()=>[N]),_:1})]),_:1}),w,T,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(c),{onClick:a[4]||(a[4]=l=>m(0))},{default:d(()=>[t("打开")]),_:1}),o(s(c),{onClick:f,class:"ml-10"},{default:d(()=>[t("关闭")]),_:1})]),default:d(()=>[y]),_:1})]),_:1}),q,I,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(c),{onClick:a[5]||(a[5]=l=>s(n).info({message:"这是一条提示信息",duration:5e3}))},{default:d(()=>[t("持续5s")]),_:1})]),default:d(()=>[S]),_:1})]),_:1}),A])}}});export{D as __pageData,E as default};