import{a as W}from"./index.1fef09c9.js";import{q as M,l as X,t as Y,aU as A,v as C,V as D,z as S,R as q,x as V,C as z}from"./index.a86a095a.js";import"./useContentHeight.30d7d1c7.js";import"./onMountedOrActivated.ab6edd17.js";import"./useWindowSizeFn.b7d480b1.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";const m={event:"mousedown",transition:400},_={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");H(Object.keys(t.modifiers),m);const i=o||_.background,r=_.zIndex;e.addEventListener(m.event,d=>{F({event:d,el:e,background:i,zIndex:r})})},updated(e,t){var i,r;if(!t.value){(i=e==null?void 0:e.clearRipple)==null||i.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function F({event:e,el:t,zIndex:o,background:i}){var w,E;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:L,top:T}=g,{offsetWidth:x,offsetHeight:b}=t,{transition:B}=m,u=d-L,l=f-T,y=Math.max(u,x-u),$=Math.max(l,b-l),N=window.getComputedStyle(t),h=Math.sqrt(y*y+$*$),R=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((w=a.style)!=null?w:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${B}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:i!=null?i:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((E=n.style)!=null?E:{},{position:"absolute",left:`${0-R}px`,top:`${0-R}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${l}px`,marginLeft:`${u}px`});const{borderTopLeftRadius:k,borderTopRightRadius:j,borderBottomLeftRadius:O,borderBottomRightRadius:P}=N;Object.assign(n.style,{width:`${x}px`,height:`${b}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:j,borderBottomLeftRadius:O,borderBottomRightRadius:P}),setTimeout(()=>{var p;const s=`${h*2}px`;Object.assign((p=a.style)!=null?p:{},{width:s,height:s,marginLeft:`${u-h}px`,marginTop:`${l-h}px`})},0);function c(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var s;(s=n==null?void 0:n.parentNode)==null||s.removeChild(n)},850),t.removeEventListener("mouseup",c,!1),t.removeEventListener("mouseleave",c,!1),t.removeEventListener("dragstart",c,!1),setTimeout(()=>{let s=!0;for(let p=0;p<t.childNodes.length;p++)t.childNodes[p].className==="ripple-container"&&(s=!1);s&&(t.style.position=v!=="static"?v:"")},m.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",c,!1),t.addEventListener("mouseleave",c,!1),t.addEventListener("dragstart",c,!1)):c(),t.setBackground=s=>{!s||(a.style.backgroundColor=s)}}function H(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const I=X({components:{PageWrapper:W},directives:{Ripple:_}}),U={class:"demo-box"},G=z(" content "),J=[G];function K(e,t,o,i,r,d){const f=Y("PageWrapper"),g=A("ripple");return C(),D(f,{title:"Ripple\u793A\u4F8B"},{default:S(()=>[q((C(),V("div",U,J)),[[g]])]),_:1})}var nt=M(I,[["render",K],["__scopeId","data-v-3cd1560f"]]);export{nt as default};