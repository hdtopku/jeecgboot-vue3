var c=(n,r,t)=>new Promise((a,o)=>{var s=e=>{try{u(t.next(e))}catch(f){o(f)}},l=e=>{try{u(t.throw(e))}catch(f){o(f)}},u=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,l);u((t=t.apply(n,r)).next())});import{F as i,L as v}from"./index.a86a095a.js";function m(n){const r=i(!1);return function(...t){return c(this,null,function*(){if(!v(r)){r.value=!0;try{const a=yield n(...t);return r.value=!1,a}catch(a){throw r.value=!1,a}}})}}export{m as useLockFn};