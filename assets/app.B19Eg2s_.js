import{a0 as s,aa as p,ab as u,ac as l,ad as c,ae as f,af as d,ag as m,ah as h,ai as g,aj as A,_,d as P,y as v,i as y,I as R,ak as w,al as C,am as E,h as b}from"./chunks/framework.DxEymtZt.js";import{R as T}from"./chunks/theme.GytRFExE.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(T),S=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),E(),o.setup&&o.setup(),()=>b(o.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=I(),a=j();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function j(){return h(S)}function I(){let e=s,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=_(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};