import{j as C,dB as _,C as v,e1 as y,K as l,u as F,q as B,r as a,s as g,Q as h,w as n,v as s,aW as w,y as b}from"./index.639f1d60.js";import{a as x}from"./index.e06f25f1.js";import"./useContentHeight.63cba167.js";import"./onMountedOrActivated.491ea707.js";import"./useWindowSizeFn.7ec6649f.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";const k=C({name:"Copy",components:{CollapseContainer:_,PageWrapper:x},setup(){const e=v(""),{createMessage:o}=F(),{clipboardRef:u,copiedRef:r}=y();function p(){const t=l(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}u.value=t,l(r)&&o.warning("copy success\uFF01")}return{handleCopy:p,value:e}}}),W={class:"flex justify-center"};function $(e,o,u,r,p,t){const c=a("a-input"),i=a("a-button"),d=a("CollapseContainer"),f=a("PageWrapper");return g(),h(f,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(d,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[w("div",W,[s(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=m=>e.value=m)},null,8,["value"]),s(i,{type:"primary",onClick:e.handleCopy},{default:n(()=>[b(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}const T=B(k,[["render",$]]);export{T as default};