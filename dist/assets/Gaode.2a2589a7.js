var c=(e,r,t)=>new Promise((n,o)=>{var i=a=>{try{s(t.next(a))}catch(p){o(p)}},f=a=>{try{s(t.throw(a))}catch(p){o(p)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,f);s((t=t.apply(e,r)).next())});import{useScript as d}from"./useScript.7e645165.js";import{q as l,l as u,F as m,$ as w,v as h,x as M,Y as _,Q as v,L as y}from"./index.b3d2a891.js";const g="https://webapi.amap.com/maps?v=2.0&key=06313eb9c6563b674a8fd789db0692c3",A=u({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=d({src:g});function t(){return c(this,null,function*(){yield r(),yield v();const n=y(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return w(()=>{t()}),{wrapRef:e}}});function $(e,r,t,n,o,i){return h(),M("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var S=l(A,[["render",$]]);export{S as default};
