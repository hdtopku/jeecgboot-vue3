var M=Object.defineProperty,U=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&_(e,o,t[o]);if(S)for(var o of S(t))Q.call(t,o)&&_(e,o,t[o]);return e},w=(e,t)=>U(e,G(t));import{_ as B,y as V}from"./jeecg-online-vendor-cfb58502.js";import{d as j,a7 as g,a8 as F,ak as p,aq as z,ad as v,R as s,l as C,p as X,e as r,u as Y,w as Z,V as k,ac as b,af as x,as as ee,aa as $,F as te,E as oe,ae as ne,ab as re,ai as se,aj as ae,W as R}from"./vue-ebecda47.js";import{m as I,k as le,p as n}from"./index-85cfc899.js";import"./lodash-es-vendor-cd7703c8.js";import{b_ as ie,o as W}from"./antd-vue-vendor-b75e8c06.js";import{useContentHeight as ge}from"./useContentHeight-d1e0ec25.js";import{P as pe}from"./injectionKey-69710956.js";const ce=j({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=I("page-footer"),{getCalcContentWidth:t}=le();return{prefixCls:e,getCalcContentWidth:t}}});function de(e,t,o,c,d,f){return g(),F("div",{class:p(e.prefixCls),style:z({width:e.getCalcContentWidth})},[v("div",{class:p(`${e.prefixCls}__left`)},[s(e.$slots,"left",{},void 0,!0)],2),s(e.$slots,"default",{},void 0,!0),v("div",{class:p(`${e.prefixCls}__right`)},[s(e.$slots,"right",{},void 0,!0)],2)],6)}const N=B(ce,[["render",de],["__scopeId","data-v-3e586038"]]),fe=j({name:"PageWrapper",components:{PageFooter:N,PageHeader:ie},inheritAttrs:!1,props:{title:n.string,dense:n.bool,ghost:n.bool,content:n.string,contentStyle:{type:Object},contentBackground:n.bool,contentFullHeight:n.bool,contentClass:n.string,fixedHeight:n.bool,upwardSpace:n.oneOfType([n.number,n.string]).def(0)},setup(e,{slots:t,attrs:o}){const c=C(null),d=C(null),f=C(null),i=C(null),{prefixCls:a}=I("page-wrapper");X(pe,r(()=>e.fixedHeight));const u=r(()=>e.contentFullHeight),y=r(()=>e.upwardSpace),{redoHeight:O,setCompensation:T,contentHeight:A}=ge(u,c,[d,i],[f],y);T({useLayoutFooter:!0,elements:[i]});const D=r(()=>{var l;return[a,{[`${a}--dense`]:e.dense},(l=o.class)!=null?l:{}]}),H=r(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),E=r(()=>Object.keys(W(t,"default","leftFooter","rightFooter","headerContent"))),L=r(()=>{const{contentFullHeight:l,contentStyle:h,fixedHeight:K}=e;if(!l)return m({},h);const P=`${Y(A)}px`;return m(w(m({},h),{minHeight:P}),K?{height:P}:{})}),q=r(()=>{const{contentBackground:l,contentClass:h}=e;return[`${a}-content`,h,{[`${a}-content-bg`]:l}]});return Z(()=>[H.value],()=>{O()},{flush:"post",immediate:!0}),{getContentStyle:L,wrapperRef:c,headerRef:d,contentRef:f,footerRef:i,getClass:D,getHeaderSlots:E,prefixCls:a,getShowFooter:H,omit:W,getContentClass:q}}});function ue(e,t,o,c,d,f){const i=k("PageHeader"),a=k("PageFooter");return g(),F("div",{class:p(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(g(),b(i,x({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),ee({default:$(()=>[e.content?(g(),F(te,{key:0},[oe(ne(e.content),1)],64)):s(e.$slots,"headerContent",{key:1})]),_:2},[re(e.getHeaderSlots,u=>({name:u,fn:$(y=>[s(e.$slots,u,se(ae(y||{})))])}))]),1040,["ghost","title"])):R("",!0),v("div",{class:p(["overflow-hidden",e.getContentClass]),style:z(e.getContentStyle),ref:"contentRef"},[s(e.$slots,"default")],6),e.getShowFooter?(g(),b(a,{key:1,ref:"footerRef"},{left:$(()=>[s(e.$slots,"leftFooter")]),right:$(()=>[s(e.$slots,"rightFooter")]),_:3},512)):R("",!0)],2)}const he=B(fe,[["render",ue]]),Se=V(N),_e=V(he);export{_e as P};