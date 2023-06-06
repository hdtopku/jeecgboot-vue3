var V=Object.defineProperty,k=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&v(t,r,e[r]);if(j)for(var r of j(e))Q.call(e,r)&&v(t,r,e[r]);return t},x=(t,e)=>k(t,H(e));import{j as R,C as Y,l as q,bv as F,m as p,H as s,v as i,x as G,dY as P,bh as J,dM as K,cz as T,aQ as S,b1 as U,W as X}from"./index.0be4b5b8.js";function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const tt={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},et=R({name:"Description",props:tt,emits:["register"],setup(t,{slots:e,emit:r}){const m=Y(null),{prefixCls:_}=q("description"),M=F(),g=p(()=>o(o({},t),s(m))),d=p(()=>x(o({},s(g)),{title:void 0})),W=p(()=>!!s(g).title),w=p(()=>o({canExpand:!1},s(d).collapseOptions)),E=p(()=>o(o({},s(M)),s(d)));function I(n){m.value=o(o({},s(m)),n)}function N({label:n,labelMinWidth:l,labelStyle:a}){if(!a&&!l)return n;const c=x(o({},a),{minWidth:`${l}px `});return i("div",{style:c},[n])}function $(){const{schema:n,data:l}=s(d);return s(n).map(a=>{const{render:c,field:b,span:A,show:h,contentMinWidth:C}=a;if(h&&S(h)&&!h(l))return null;const D=()=>{var O;const u=(O=s(d))==null?void 0:O.data;if(!u)return null;const f=U(u,b);return S(c)?c(f,u):f!=null?f:""},B=C;return i(P.Item,{label:N(a),key:b,span:A},{default:()=>{if(!C)return D();const u={minWidth:`${B}px`};return i("div",{style:u},[D()])}})}).filter(a=>!!a)}const y=()=>{let n;return i(P,G({class:`${_}`},s(E)),Z(n=$())?n:{default:()=>[n]})},z=()=>{const n=t.useCollapse?y():i("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:l,helpMessage:a}=s(w),{title:c}=s(g);return i(K,{title:c,canExpan:l,helpMessage:a},{default:()=>n,action:()=>J(e,"action")})};return r("register",{setDescProps:I}),()=>s(W)?z():y()}}),ot=X(et);export{ot as D};