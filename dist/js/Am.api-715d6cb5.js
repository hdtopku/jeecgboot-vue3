import{ap as m,q as o}from"./jeecg-online-vendor-d3e1865b.js";import{M as p}from"./antd-vue-vendor-c5335947.js";const c=e=>m.get({url:"/pms/am/getList",params:e});const d=(e,t)=>{const s=t?"/pms/am/edit":"/pms/am/add";return m.post({url:s,params:e})},g=(e,t,s=()=>{})=>m.get({url:"/pms/am/getCodes",params:e},{joinParamsToUrl:!0}).then(a=>{t(a.join(`\r
`))}).catch(a=>{const{createMessage:r}=o();r.error(a),s()});export{c as a,g,d as s};