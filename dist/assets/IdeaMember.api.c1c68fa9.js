import{a1 as a,u as d}from"./index.b3d2a891.js";const n=e=>a.get({url:"/pms/ideaMember/getList",params:e}),i=(e,s,t)=>a.get({url:"/pms/ideaMember/getCodes",params:e},{joinParamsToUrl:!0}).then(r=>{s(r.join(`\r
`))}).catch(r=>{const{createMessage:o}=d();o.error(r),t()}),g=(e,s)=>{const t=s?"/pms/ideaMember/edit":"/pms/ideaMember/add";return a.post({url:t,params:e})};export{n as a,i as g,g as s};
