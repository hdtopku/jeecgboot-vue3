import{l as c,dI as p,L as _,v as i,x as l}from"./index.b3d2a891.js";const h=c({__name:"index",setup(u){const{currentRoute:s,replace:a}=p(),{params:e,query:n}=_(s),{path:r,_redirect_type:o="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(o==="name"?{name:t,query:n,params:e}:{path:t.startsWith("/")?t:"/"+t,query:n}),(d,m)=>(i(),l("div"))}});export{h as default};
