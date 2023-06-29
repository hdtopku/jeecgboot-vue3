import{Z as r,u as c}from"./index.c1d8dbc8.js";const n=(e,s,t=()=>{})=>r.get({url:"/pms/ideaCrack/getCodes",params:e},{joinParamsToUrl:!0}).then(a=>{s(a.join(`\r
`))}).catch(a=>{const{createMessage:o}=c();o.error(a),t()}),i=e=>r.get({url:"/pms/ideaCrack/getList",params:e}),g=(e,s)=>{const t=s?"/pms/ideaCrack/edit":"/pms/ideaCrack/add";return r.post({url:t,params:e})};export{i as a,n as g,g as s};
