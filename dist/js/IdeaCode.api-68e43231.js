import{ap as o,C as r}from"./jeecg-online-vendor-cfb58502.js";import{M as m}from"./antd-vue-vendor-b75e8c06.js";const n=e=>o.get({url:"/pms/ideaCode/getList",params:e}),p=(e,t,s)=>o.get({url:"/pms/ideaCode/getCodes",params:e},{joinParamsToUrl:!0}).then(d=>{t(d.join(`\r
`))}).catch(d=>{const{createMessage:a}=r();a.error(d),s()});const c=(e,t)=>{const s=t?"/pms/ideaCode/edit":"/pms/ideaCode/add";return o.post({url:s,params:e})};export{p as a,n as g,c as s};