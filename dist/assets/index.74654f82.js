import{j as h,aN as v,C as a,l as y,m as x,s as H,t as w,v as S,w as C,aW as R,B as f,H as e,V as u,aL as z,q as B}from"./index.0be4b5b8.js";import{useWindowSizeFn as L}from"./useWindowSizeFn.6297694a.js";import{u as k}from"./useContentViewHeight.2ffe4fbc.js";import"./usePageContext.c7f93940.js";const N=["src"],V=h({__name:"index",props:{frameSrc:v.string.def("")},setup(m){const n=a(!0),p=a(50),i=a(window.innerHeight),o=a(),{headerHeightRef:d}=k(),{prefixCls:r}=y("iframe-page");L(l,150,{immediate:!0});const c=x(()=>({height:`${e(i)}px`}));function l(){const s=e(o);if(!s)return;const t=d.value;p.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;s.style.height=`${g}px`}function _(){n.value=!1,l()}return(s,t)=>(H(),w("div",{class:f(e(r)),style:u(c.value)},[S(e(z),{spinning:n.value,size:"large",style:u(c.value)},{default:C(()=>[R("iframe",{src:m.frameSrc,class:f(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:_},null,42,N)]),_:1},8,["spinning","style"])],6))}});const j=B(V,[["__scopeId","data-v-3ac3885e"]]);export{j as default};