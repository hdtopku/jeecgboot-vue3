import{a1 as a,u as o}from"./index.6c1aeca2.js";const g=e=>a.get({url:"/pms/wenku/getList",params:e}),p=(e,s,t)=>a.get({url:"/pms/wenku/getCodes",params:e},{joinParamsToUrl:!0}).then(r=>{s(r.join(`\r
`))}).catch(r=>{const{createMessage:n}=o();n.error(r),t()}),c=(e,s)=>{const t=s?"/pms/wenku/edit":"/pms/wenku/add";return a.post({url:t,params:e})};export{g as a,p as g,c as s};
