var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,a,r)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;import{l as o,F as s,ds as l,o as i,L as u,aa as d,H as p,$ as f,dt as c,N as y,q as m,v as b,x as g,D as v,Y as S,Z as x}from"./index.435ab247.js";const V=x(m(o({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:t=>t>=0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{emit:o}){const m=s(t.startVal),b=s(!1);let g=l(m);const v=i((()=>function(e){if(!e&&0!==e)return"";const{decimals:a,decimal:r,separator:n,suffix:o,prefix:s}=t;e=Number(e).toFixed(a);const l=(e+="").split(".");let i=l[0];const u=l.length>1?r+l[1]:"",d=/(\d+)(\d{3})/;if(n&&!y(n))for(;d.test(i);)i=i.replace(d,"$1"+n+"$2");return s+i+u+o}(u(g))));function S(){x(),m.value=t.endVal}function x(){g=l(m,((t,o)=>{for(var s in o||(o={}))a.call(o,s)&&n(t,s,o[s]);if(e)for(var s of e(o))r.call(o,s)&&n(t,s,o[s]);return t})({disabled:b,duration:t.duration,onFinished:()=>o("onFinished"),onStarted:()=>o("onStarted")},t.useEasing?{transition:c[t.transition]}:{}))}return d((()=>{m.value=t.startVal})),p([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&S()})),f((()=>{t.autoplay&&S()})),{value:v,start:S,reset:function(){m.value=t.startVal,x()}}}}),[["render",function(t,e,a,r,n,o){return b(),g("span",{style:S({color:t.color})},v(t.value),5)}]]));export{V as C};