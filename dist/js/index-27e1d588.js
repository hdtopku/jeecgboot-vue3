var V=Object.defineProperty,z=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&S(t,r,e[r]);if(j)for(var r of j(e))R.call(e,r)&&S(t,r,e[r]);return t},x=(t,e)=>z(t,J(e));import{aa as q,S as v,w as F}from"./jeecg-online-vendor-59c8fbe3.js";import{m as G,a1 as H,a0 as K}from"./index-7711d1b4.js";import{aI as P,aJ as Q}from"./antd-vue-vendor-a78909e6.js";import{d as T,k as U,e as p,u as s,f as c,ag as X,i as Y}from"./vue-bcbaddf9.js";function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Y(t)}const tt={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},et=T({name:"Description",props:tt,emits:["register"],setup(t,{slots:e,emit:r}){const m=U(null),{prefixCls:_}=G("description"),w=q(),g=p(()=>o(o({},t),s(m))),d=p(()=>x(o({},s(g)),{title:void 0})),I=p(()=>!!s(g).title),E=p(()=>o({canExpand:!1},s(d).collapseOptions)),M=p(()=>o(o({},s(w)),s(d)));function N(n){m.value=o(o({},s(m)),n)}function W({label:n,labelMinWidth:l,labelStyle:a}){if(!a&&!l)return n;const i=x(o({},a),{minWidth:`${l}px `});return c("div",{style:i},[n])}function $(){const{schema:n,data:l}=s(d);return s(n).map(a=>{const{render:i,field:C,span:A,show:h,contentMinWidth:b}=a;if(h&&v(h)&&!h(l))return null;const D=()=>{var O;const u=(O=s(d))==null?void 0:O.data;if(!u)return null;const f=Q(u,C);return v(i)?i(f,u):f!=null?f:""},B=b;return c(P.Item,{label:W(a),key:C,span:A},{default:()=>{if(!b)return D();const u={minWidth:`${B}px`};return c("div",{style:u},[D()])}})}).filter(a=>!!a)}const y=()=>{let n;return c(P,X({class:`${_}`},s(M)),Z(n=$())?n:{default:()=>[n]})},k=()=>{const n=t.useCollapse?y():c("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:l,helpMessage:a}=s(E),{title:i}=s(g);return c(K,{title:i,canExpan:l,helpMessage:a},{default:()=>n,action:()=>H(e,"action")})};return r("register",{setDescProps:N}),()=>s(I)?k():y()}}),it=F(et);export{it as D};