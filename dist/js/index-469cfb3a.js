import{a4 as M,e as d,J as B,u as p,d as C,V as h,a7 as i,a8 as l,F,ab as I,v as S,ac as g,B as K,W as _,f as b,aa as V,az as N,ah as P,o as A,x as D,ak as E}from"./vue-ebecda47.js";import O from"./index-f3453633.js";import{ay as $,l as w,aZ as k,m as Q}from"./index-85cfc899.js";import{a as z}from"./lodash-es-vendor-cd7703c8.js";import{useMultipleTabSetting as R}from"./useMultipleTabSetting-9c4429b7.js";import{_ as L,m as q}from"./jeecg-online-vendor-cfb58502.js";import{a as G}from"./useContentViewHeight-45430ff2.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./useWindowSizeFn-50bd5ea0.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./usePageContext-17112021.js";function H(){const e=M(),{currentRoute:r}=e,{getShowMultipleTab:a}=R(),s=$(),c=d(()=>n(B(e.getRoutes()))||[]),u=d(()=>s.getTabList.reduce((o,m)=>(m.meta&&Reflect.has(m.meta,"frameSrc")&&o.push(m.name),o),[]));function n(o){let m=[];for(const v of o){const{meta:{frameSrc:T}={},children:y}=v;T&&m.push(v),y&&y.length&&m.push(...n(y))}return m=z(m,"name"),m}function t(o){return o.name===p(r).name}function f(o){return p(a)?p(u).includes(o):e.currentRoute.value.name===o}return{hasRenderFrame:f,getFramePages:c,showIframe:t,getAllFramePages:n}}const J=C({name:"FrameLayout",components:{FramePage:O},setup(){const{getFramePages:e,hasRenderFrame:r,showIframe:a}=H(),s=d(()=>p(e).length>0);return{getFramePages:e,hasRenderFrame:r,showIframe:a,showFrame:s}}}),W={key:0};function Z(e,r,a,s,c,u){const n=h("FramePage");return e.showFrame?(i(),l("div",W,[(i(!0),l(F,null,I(e.getFramePages,t=>(i(),l(F,{key:t.path},[t.meta.frameSrc&&e.hasRenderFrame(t.name)?S((i(),g(n,{key:0,frameSrc:t.meta.frameSrc},null,8,["frameSrc"])),[[K,e.showIframe(t)]]):_("",!0)],64))),128))])):_("",!0)}const j=L(J,[["render",Z]]);function U({route:e,openCache:r,cacheTabs:a,enableTransition:s,def:c}){if(!s)return;const u=a.includes(e.name),n="fade-slide";let t=n;return r&&(t=u&&e.meta.loaded?n:void 0),t||e.meta.transitionName||c}const X=C({name:"PageLayout",components:{FrameLayout:j},setup(){const{getShowMultipleTab:e}=R(),r=$(),{getOpenKeepAlive:a,getCanEmbedIFramePage:s}=w(),{getBasicTransition:c,getEnableTransition:u}=k(),n=d(()=>p(a)&&p(e)),t=d(()=>p(a)?r.getCachedTabList:[]);return{getTransitionName:U,openCache:n,getEnableTransition:u,getBasicTransition:c,getCaches:t,getCanEmbedIFramePage:s}}});function Y(e,r,a,s,c,u){const n=h("RouterView"),t=h("FrameLayout");return i(),l(F,null,[b(n,null,{default:V(({Component:f,route:o})=>[e.openCache?(i(),g(N,{key:0,include:e.getCaches},[(i(),g(P(f),{key:o.fullPath}))],1032,["include"])):(i(),g(P(f),{key:o.fullPath}))]),_:1}),e.getCanEmbedIFramePage?(i(),g(t,{key:0})):_("",!0)],64)}const x=L(X,[["render",Y]]),ee=C({name:"LayoutContent",components:{PageLayout:x},setup(){const{prefixCls:e}=Q("layout-content"),{getOpenPageLoading:r}=k(),{getLayoutContentMode:a,getPageLoading:s}=w(),u=q().openQianKun;return G(),A(()=>{}),{prefixCls:e,openQianKun:u,getOpenPageLoading:r,getLayoutContentMode:a,getPageLoading:s}}});const te={key:0,id:"content",class:"app-view-box"};function ne(e,r,a,s,c,u){const n=h("PageLayout"),t=D("loading");return S((i(),l("div",{class:E([e.prefixCls,e.getLayoutContentMode])},[b(n),e.openQianKun=="true"?(i(),l("div",te)):_("",!0)],2)),[[t,e.getOpenPageLoading&&e.getPageLoading]])}const _e=L(ee,[["render",ne]]);export{_e as default};