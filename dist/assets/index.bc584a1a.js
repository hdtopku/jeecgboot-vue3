import{q as _,l as S,aB as m,ey as f,ez as T,eA as R,eB as X,eC as h,eD as x,eE as y,eF as C,eG as B,eH as E,eI as Y,eJ as F,eK as w,F as n,t as s,v as r,V as i,z as o,aU as l,y as p,dH as k,R as $,S as b,C as g}from"./index.6c1aeca2.js";import{a as A}from"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./onMountedOrActivated.0e85db74.js";import"./useWindowSizeFn.a6a246d2.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const V=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],D=V.map(e=>({label:e,value:e,key:e})),N=S({components:{Select:m,PageWrapper:A,FadeTransition:f,ScaleTransition:T,SlideYTransition:R,ScrollYTransition:X,SlideYReverseTransition:h,ScrollYReverseTransition:x,SlideXTransition:y,ScrollXTransition:C,SlideXReverseTransition:B,ScrollXReverseTransition:E,ScaleRotateTransition:Y,ExpandXTransition:F,ExpandTransition:w},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:D,value:e,start:t,show:a}}}),P={class:"flex"},W=g(" start "),z={class:"box"};function H(e,a,t,I,U,q){const c=s("Select"),d=s("a-button"),u=s("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:o(()=>[l("div",P,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:o(()=>[W]),_:1},8,["onClick"])]),(r(),i(k(`${e.value}Transition`),null,{default:o(()=>[$(l("div",z,null,512),[[b,e.show]])]),_:1}))]),_:1})}var Q=_(N,[["render",H],["__scopeId","data-v-437083f0"]]);export{Q as default};