var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))F.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))T.call(a,e)&&m(t,e,a[e]);return t};import{l as w,F as g,ds as x,o as B,L as C,a9 as E,H as k,$ as D,dt as q,N as z,q as H,v as I,x as L,D as M,Y as P,Z as Y}from"./index.a86a095a.js";const Z={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},j=w({name:"CountTo",props:Z,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let s=x(e);const d=B(()=>h(C(s)));E(()=>{e.value=t.startVal}),k([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&o()}),D(()=>{t.autoplay&&o()});function o(){c(),e.value=t.endVal}function S(){e.value=t.startVal,c()}function c(){s=x(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:q[t.transition]}:{}))}function h(n){if(!n&&n!==0)return"";const{decimals:V,decimal:b,separator:i,suffix:v,prefix:N}=t;n=Number(n).toFixed(V),n+="";const l=n.split(".");let r=l[0];const $=l.length>1?b+l[1]:"",f=/(\d+)(\d{3})/;if(i&&!z(i))for(;f.test(r);)r=r.replace(f,"$1"+i+"$2");return N+r+$+v}return{value:d,start:o,reset:S}}});function A(t,a,e,u,s,d){return I(),L("span",{style:P({color:t.color})},M(t.value),5)}var G=H(j,[["render",A]]);const O=Y(G);export{O as C};