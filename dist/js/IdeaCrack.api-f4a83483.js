import{ap as s,C as d}from"./jeecg-online-vendor-cfb58502.js";import{M as i}from"./antd-vue-vendor-b75e8c06.js";const m=(e,t,a=()=>{})=>s.get({url:"/pms/ideaCrack/getCodes",params:e},{joinParamsToUrl:!0}).then(r=>{t(r.join(`\r
`))}).catch(r=>{const{createMessage:c}=d();c.error(r),a()}),n=e=>s.get({url:"/pms/ideaCrack/getList",params:e});const p=(e,t)=>{const a=t?"/pms/ideaCrack/edit":"/pms/ideaCrack/add";return s.post({url:a,params:e})};export{n as a,m as g,p as s};