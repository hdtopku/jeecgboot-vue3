import{q as r,l as i,e as l,n as c,t as d,v as s,x as a,aw as _,bb as u,E as o,V as f,z as m,aV as n,dl as y,dm as v}from"./index.b3d2a891.js";const C=i({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),k=e=>(y("data-v-3bd5c878"),e=e(),v(),e),h=["onClick"],$=k(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function b(e,g,x,B,I,S){const p=d("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:w=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,h)]),_:2},1032,["title"]))),128))],2)}var P=r(C,[["render",b],["__scopeId","data-v-3bd5c878"]]);export{P as default};
