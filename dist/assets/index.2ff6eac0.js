var K=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))Y.call(t,o)&&b(e,o,t[o]);if(S)for(var o of S(t))Z.call(t,o)&&b(e,o,t[o]);return e},_=(e,t)=>U(e,X(t));import{l as B,q as V,n as j,an as G,v as g,x as F,aV as y,X as a,E as d,Y as z,cj as J,aM as n,F as m,bA as Q,o as r,H as x,aT as w,L as ee,t as k,V as R,bj as te,bb as oe,z as $,bk as ne,bl as re,aw as ae,C as se,D as le,B as ie,W,Z as T}from"./index.b3d2a891.js";import{useContentHeight as ge}from"./useContentHeight.0b543e32.js";const de=B({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=j("page-footer"),{getCalcContentWidth:t}=G();return{prefixCls:e,getCalcContentWidth:t}}});function ce(e,t,o,c,p,u){return g(),F("div",{class:d(e.prefixCls),style:z({width:e.getCalcContentWidth})},[y("div",{class:d(`${e.prefixCls}__left`)},[a(e.$slots,"left",{},void 0,!0)],2),a(e.$slots,"default",{},void 0,!0),y("div",{class:d(`${e.prefixCls}__right`)},[a(e.$slots,"right",{},void 0,!0)],2)],6)}var A=V(de,[["render",ce],["__scopeId","data-v-70cfe876"]]);const pe=B({name:"PageWrapper",components:{PageFooter:A,PageHeader:J},inheritAttrs:!1,props:{title:n.string,dense:n.bool,ghost:n.bool,content:n.string,contentStyle:{type:Object},contentBackground:n.bool,contentFullHeight:n.bool,contentClass:n.string,fixedHeight:n.bool,upwardSpace:n.oneOfType([n.number,n.string]).def(0)},setup(e,{slots:t,attrs:o}){const c=m(null),p=m(null),u=m(null),i=m(null),{prefixCls:s}=j("page-wrapper");Q(he,r(()=>e.fixedHeight));const f=r(()=>e.contentFullHeight),v=r(()=>e.upwardSpace),{redoHeight:D,setCompensation:I,contentHeight:L}=ge(f,c,[p,i],[u],v);I({useLayoutFooter:!0,elements:[i]});const N=r(()=>{var l;return[s,{[`${s}--dense`]:e.dense},(l=o.class)!=null?l:{}]}),H=r(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),O=r(()=>Object.keys(w(t,"default","leftFooter","rightFooter","headerContent"))),E=r(()=>{const{contentFullHeight:l,contentStyle:h,fixedHeight:q}=e;if(!l)return C({},h);const P=`${ee(L)}px`;return C(_(C({},h),{minHeight:P}),q?{height:P}:{})}),M=r(()=>{const{contentBackground:l,contentClass:h}=e;return[`${s}-content`,h,{[`${s}-content-bg`]:l}]});return x(()=>[H.value],()=>{D()},{flush:"post",immediate:!0}),{getContentStyle:E,wrapperRef:c,headerRef:p,contentRef:u,footerRef:i,getClass:N,getHeaderSlots:O,prefixCls:s,getShowFooter:H,omit:w,getContentClass:M}}});function ue(e,t,o,c,p,u){const i=k("PageHeader"),s=k("PageFooter");return g(),F("div",{class:d(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(g(),R(i,ie({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),te({default:$(()=>[e.content?(g(),F(ae,{key:0},[se(le(e.content),1)],64)):a(e.$slots,"headerContent",{key:1})]),_:2},[oe(e.getHeaderSlots,f=>({name:f,fn:$(v=>[a(e.$slots,f,ne(re(v||{})))])}))]),1040,["ghost","title"])):W("",!0),y("div",{class:d(["overflow-hidden",e.getContentClass]),style:z(e.getContentStyle),ref:"contentRef"},[a(e.$slots,"default")],6),e.getShowFooter?(g(),R(s,{key:1,ref:"footerRef"},{left:$(()=>[a(e.$slots,"leftFooter")]),right:$(()=>[a(e.$slots,"rightFooter")]),_:3},512)):W("",!0)],2)}var fe=V(pe,[["render",ue]]);T(A);const ve=T(fe),he="PageWrapperFixedHeight";export{he as P,ve as a};
