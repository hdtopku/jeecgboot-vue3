var _=Object.defineProperty,v=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&p(e,o,t[o]);if(i)for(var o of i(t))C.call(t,o)&&p(e,o,t[o]);return e},c=(e,t)=>v(e,f(t));import{a as F}from"./index.e06f25f1.js";import{T as w}from"./index.28e29a88.js";import{j as h,dB as b,a8 as A,b8 as T,q as g,r,s as W,Q as $,w as n,v as l,aW as u}from"./index.639f1d60.js";import"./useContentHeight.63cba167.js";import"./onMountedOrActivated.491ea707.js";import"./useWindowSizeFn.7ec6649f.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";const P=h({components:{PageWrapper:F,Time:w,CollapseContainer:b},setup(){const e=new Date().getTime(),t=A({time1:e-60*3*1e3,time2:e-86400*3*1e3});return c(m({},T(t)),{now:e})}}),k=u("br",null,null,-1),E=u("br",null,null,-1),N=u("br",null,null,-1),V=u("br",null,null,-1);function j(e,t,o,q,y,D){const a=r("Time"),s=r("CollapseContainer"),d=r("PageWrapper");return W(),$(d,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[l(s,{title:"\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[l(a,{value:e.time1},null,8,["value"]),k,l(a,{value:e.time2},null,8,["value"])]),_:1}),l(s,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:n(()=>[l(a,{value:e.now,step:1},null,8,["value"]),E,l(a,{value:e.now,step:5},null,8,["value"])]),_:1}),l(s,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:n(()=>[l(a,{value:e.now,mode:"date"},null,8,["value"]),N,l(a,{value:e.now,mode:"datetime"},null,8,["value"]),V,l(a,{value:e.now},null,8,["value"])]),_:1})]),_:1})}const M=g(P,[["render",j]]);export{M as default};