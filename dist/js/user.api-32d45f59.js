import{b as s}from"./jeecg-online-vendor-658239c9.js";import{M as n}from"./antd-vue-vendor-a78909e6.js";const l="/sys/user/exportXls",o="/sys/user/importExcel",c=e=>s.get({url:"/sys/user/list",params:e}),y=e=>s.get({url:"/sys/user/listAll",params:e}),i=e=>s.get({url:"/sys/user/queryUserRole",params:e},{errorMessageMode:"none"}),g=(e,t)=>s.delete({url:"/sys/user/delete",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),p=(e,t)=>{n.confirm({title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>s.delete({url:"/sys/user/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},d=(e,t)=>{let r=t?"/sys/user/edit":"/sys/user/add";return s.post({url:r,params:e})},U=e=>s.get({url:"/sys/duplicate/check",params:e},{isTransformResponse:!1}),T=e=>s.get({url:"/sys/role/queryall",params:e}),m=e=>s.get({url:"/sys/role/queryallNoByTenant",params:e}),h=e=>s.get({url:"/sys/tenant/queryList",params:e}),f=e=>s.get({url:"/sys/user/userDepartList",params:e},{successMessageMode:"none"}),A=e=>s.get({url:"/sys/user/recycleBin",params:e}),B=(e,t)=>s.put({url:"/sys/user/putRecycleBin",params:e}).then(()=>{t()}),R=(e,t)=>s.delete({url:"/sys/user/deleteRecycleBin",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),L=e=>s.put({url:"/sys/user/changePassword",params:e}),P=(e,t)=>s.put({url:"/sys/user/frozenBatch",params:e}).then(()=>{t()}),x=e=>s.get({url:"/sys/sysUserAgent/queryByUserName",params:e},{isTransformResponse:!1}),j=e=>{let t=e.id?"/sys/sysUserAgent/edit":"/sys/sysUserAgent/add";return s.post({url:t,params:e})},q=()=>s.put({url:"/act/process/extActProcess/doSyncUser"}),M=e=>s.put({url:"/sys/user/userQuitAgent",params:e}),Q=e=>s.get({url:"/sys/user/getQuitList",params:e}),k=(e,t)=>s.put({url:"/sys/user/putCancelQuit",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),C=e=>s.get({url:"/sys/tenant/getUserTenantPageList",params:e}),N=e=>s.put({url:"/sys/tenant/updateUserTenantStatus",params:e},{joinParamsToUrl:!0,isTransformResponse:!1});export{f as a,T as b,m as c,U as d,h as e,L as f,i as g,x as h,j as i,A as j,R as k,c as l,C as m,N as n,y as o,B as p,l as q,o as r,d as s,p as t,M as u,P as v,q as w,g as x,Q as y,k as z};