var _=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))w.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))F.call(a,e)&&m(t,e,a[e]);return t};import{l as T,F as g,dv as x,o as B,L as C,a9 as E,H as k,$ as D,dw as q,N as z,q as H,v as I,x as L,D as M,Y as P,Z as Y}from"./index.6c1aeca2.js";const Z={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},j=T({name:"CountTo",props:Z,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let o=x(e);const d=B(()=>h(C(o)));E(()=>{e.value=t.startVal}),k([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&s()}),D(()=>{t.autoplay&&s()});function s(){c(),e.value=t.endVal}function S(){e.value=t.startVal,c()}function c(){o=x(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:q[t.transition]}:{}))}function h(n){if(!n&&n!==0)return"";const{decimals:v,decimal:V,separator:i,suffix:b,prefix:N}=t;n=Number(n).toFixed(v),n+="";const l=n.split(".");let r=l[0];const $=l.length>1?V+l[1]:"",f=/(\d+)(\d{3})/;if(i&&!z(i))for(;f.test(r);)r=r.replace(f,"$1"+i+"$2");return N+r+$+b}return{value:d,start:s,reset:S}}});function A(t,a,e,u,o,d){return I(),L("span",{style:P({color:t.color})},M(t.value),5)}var G=H(j,[["render",A]]);const O=Y(G);export{O as C};