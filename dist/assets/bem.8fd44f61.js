import{p as u}from"./index.b3d2a891.js";function i(t,r){return r?typeof r=="string"?` ${t}--${r}`:Array.isArray(r)?r.reduce((e,n)=>e+i(t,n),""):Object.keys(r).reduce((e,n)=>e+(r[n]?i(t,n):""),""):""}function f(t){return(r,e)=>(r&&typeof r!="string"&&(e=r,r=""),r=r?`${t}__${r}`:t,`${r}${i(r,e)}`)}function $(t){return[f(`${u}-${t}`)]}function p(t){const r=`${u}-${t}`;return[r,f(r)]}export{f as buildBEM,$ as createBEM,p as createNamespace};
