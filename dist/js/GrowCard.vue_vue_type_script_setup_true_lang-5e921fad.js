var j=Object.defineProperty;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(t,e,a)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))D.call(e,a)&&w(t,a,e[a]);if(h)for(var a of h(e))L.call(e,a)&&w(t,a,e[a]);return t};import{y as G,D as I,w as M}from"./jeecg-online-vendor-59c8fbe3.js";import{am as S,an as P,t as W}from"./index-7711d1b4.js";import{d as $,k as v,e as q,u as s,s as A,w as H,o as J,a5 as u,a6 as x,ab as y,an as K,F as O,a8 as Q,a9 as R,a7 as p,f as i,E as U,aa as m,am as X}from"./vue-bcbaddf9.js";import{g as Y}from"./data-49176b6b.js";import{W as Z,a5 as tt}from"./antd-vue-vendor-a78909e6.js";const at={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},et=$({name:"CountTo",props:at,emits:["onStarted","onFinished"],setup(t,{emit:e}){const a=v(t.startVal),n=v(!1);let o=S(a);const _=q(()=>B(s(o)));A(()=>{a.value=t.startVal}),H([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&d()}),J(()=>{t.autoplay&&d()});function d(){g(),a.value=t.endVal}function C(){a.value=t.startVal,g()}function g(){o=S(a,b({disabled:n,duration:t.duration,onFinished:()=>e("onFinished"),onStarted:()=>e("onStarted")},t.useEasing?{transition:P[t.transition]}:{}))}function B(l){if(!l&&l!==0)return"";const{decimals:T,decimal:E,separator:c,suffix:F,prefix:k}=t;l=Number(l).toFixed(T),l+="";const f=l.split(".");let r=f[0];const z=f.length>1?E+f[1]:"",V=/(\d+)(\d{3})/;if(c&&!G(c))for(;V.test(r);)r=r.replace(V,"$1"+c+"$2");return k+r+z+F}return{value:_,start:d,reset:C}}});function nt(t,e,a,n,o,_){return u(),x("span",{style:K({color:t.color})},y(t.value),5)}const st=I(et,[["render",nt]]),N=M(st),lt={class:"md:flex"},ot={class:"py-4 px-4 flex justify-between"},rt={class:"p-2 px-4 flex justify-between"},mt=$({__name:"GrowCard",props:{loading:{type:Boolean}},setup(t){return(e,a)=>(u(),x("div",lt,[(u(!0),x(O,null,Q(s(Y),(n,o)=>(u(),R(s(tt),{key:n.title,size:"small",loading:t.loading,title:n.title,class:X(["md:w-1/4 w-full !md:mt-0 !mt-4",[o+1<4&&"!md:mr-4"]]),canExpan:!1},{extra:p(()=>[i(s(Z),{color:n.color},{default:p(()=>[U(y(n.action),1)]),_:2},1032,["color"])]),default:p(()=>[m("div",ot,[i(s(N),{prefix:"$",startVal:1,endVal:n.value,class:"text-2xl"},null,8,["endVal"]),i(s(W),{icon:n.icon,size:40},null,8,["icon"])]),m("div",rt,[m("span",null,"总"+y(n.title),1),i(s(N),{prefix:"$",startVal:1,endVal:n.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{mt as _};