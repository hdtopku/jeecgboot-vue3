import{d9 as y,F as x,L as a,da as v,db as w,J as b,dc as k,dd as d,a6 as p}from"./index.a1b4e527.js";const W=Symbol("watermark-dom");function C(c=x(document.body)){const u=k(function(){const e=a(c);if(!e)return;const{clientHeight:t,clientWidth:i}=e;l({height:t,width:i})}),s=W.toString(),r=y(),f=()=>{const e=a(r);r.value=void 0;const t=a(c);!t||(e&&t.removeChild(e),v(t,u))};function h(e){const t=document.createElement("canvas"),i=300,o=240;Object.assign(t,{width:i,height:o});const n=t.getContext("2d");return n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(e,i/20,o)),t.toDataURL("image/png")}function l(e={}){const t=a(r);!t||(d(e.width)&&(t.style.width=`${e.width}px`),d(e.height)&&(t.style.height=`${e.height}px`),d(e.str)&&(t.style.background=`url(${h(e.str)}) left top repeat`))}const m=e=>{if(a(r))return l({str:e}),s;const t=document.createElement("div");r.value=t,t.id=s,t.style.pointerEvents="none",t.style.top="0px",t.style.left="0px",t.style.position="absolute",t.style.zIndex="100000";const i=a(c);if(!i)return s;const{clientHeight:o,clientWidth:n}=i;return l({str:e,width:n,height:o}),i.appendChild(t),s};function g(e){m(e),w(document.documentElement,u),p()&&b(()=>{f()})}return{setWatermark:g,clear:f}}export{C as useWatermark};