import{de as y,C as x,K as r,df as v,dg as w,H as b,dh as k,a6 as p,di as d}from"./index.639f1d60.js";const W=Symbol("watermark-dom");function R(c=x(document.body)){const f=k(function(){const e=r(c);if(!e)return;const{clientHeight:t,clientWidth:i}=e;l({height:t,width:i})}),s=W.toString(),a=y(),u=()=>{const e=r(a);a.value=void 0;const t=r(c);!t||(e&&t.removeChild(e),v(t,f))};function h(e){const t=document.createElement("canvas"),i=300,o=240;Object.assign(t,{width:i,height:o});const n=t.getContext("2d");return n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(e,i/20,o)),t.toDataURL("image/png")}function l(e={}){const t=r(a);!t||(d(e.width)&&(t.style.width=`${e.width}px`),d(e.height)&&(t.style.height=`${e.height}px`),d(e.str)&&(t.style.background=`url(${h(e.str)}) left top repeat`))}const m=e=>{if(r(a))return l({str:e}),s;const t=document.createElement("div");a.value=t,t.id=s,t.style.pointerEvents="none",t.style.top="0px",t.style.left="0px",t.style.position="absolute",t.style.zIndex="100000";const i=r(c);if(!i)return s;const{clientHeight:o,clientWidth:n}=i;return l({str:e,width:n,height:o}),i.appendChild(t),s};function g(e){m(e),w(document.documentElement,f),p()&&b(()=>{u()})}return{setWatermark:g,clear:u}}export{R as useWatermark};