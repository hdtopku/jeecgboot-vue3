import{Z as o,u as d}from"./index.85745acf.js";const i=e=>o.get({url:"/pms/ideaCode/getList",params:e}),g=(e,s,t)=>o.get({url:"/pms/ideaCode/getCodes",params:e},{joinParamsToUrl:!0}).then(a=>{s(a.join(`\r
`))}).catch(a=>{const{createMessage:r}=d();r.error(a),t()}),p=(e,s)=>{const t=s?"/pms/ideaCode/edit":"/pms/ideaCode/add";return o.post({url:t,params:e})};export{i as a,g,p as s};
