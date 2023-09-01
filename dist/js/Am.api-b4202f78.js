import{b as r,u as m}from"./jeecg-online-vendor-216a3b98.js";const g=s=>r.get({url:"/pms/am/getList",params:s}),p=(s,t)=>{const e=t?"/pms/am/edit":"/pms/am/add";return r.post({url:e,params:s})},c=(s,t,e=()=>{})=>r.get({url:"/pms/am/getCodes",params:s},{joinParamsToUrl:!0}).then(a=>{t(a.join(`\r
`))}).catch(a=>{const{createMessage:o}=m();o.error(a),e()});export{g as a,c as g,p as s};
