import{a1 as s,L as e,u as a}from"./index.435ab247.js";const{createConfirm:r}=a(),t=e=>s.get({url:"/sys/sysDepart/queryMyDeptTreeList",params:e},{isTransformResponse:!1}),p=e=>s.get({url:"/sys/sysDepart/queryIdTree",params:e}),o=e=>s.get({url:"/sys/sysDepart/searchBy",params:e}),l=e=>s.get({url:"/sys/user/departUserList",params:e}),y=(e,a)=>s.post({url:"/sys/user/editSysDepartWithUser",params:{depId:e,userIdList:a}}),n=(e,a=!1)=>new Promise(((t,p)=>{const o=()=>{t(s.delete({url:"/sys/user/deleteUserInDepartBatch",params:e},{joinParamsToUrl:!0}))};a?r({iconType:"warning",title:"取消关联",content:"确定要取消关联吗？",onOk:()=>o(),onCancel:()=>p()}):o()})),i=e=>s.get({url:"/sys/sysDepartRole/list",params:e}),m=(e,a)=>a?s.put({url:"/sys/sysDepartRole/edit",params:e}):s.post({url:"/sys/sysDepartRole/add",params:e}),u=(e,a=!1)=>new Promise(((t,p)=>{const o=()=>{t(s.delete({url:"/sys/sysDepartRole/deleteBatch",params:e},{joinParamsToUrl:!0}))};a?r({iconType:"warning",title:"删除",content:"确定要删除吗？",onOk:()=>o(),onCancel:()=>p()}):o()})),D=e=>s.get({url:"/sys/sysDepartPermission/queryTreeListForDeptRole",params:e}),d=e=>s.get({url:"/sys/sysDepartPermission/queryDeptRolePermission",params:e}),R=e=>s.post({url:"/sys/sysDepartPermission/saveDeptRolePermission",params:e}),g=(a,r,t,p)=>{let o=`/sys/sysDepartRole/datarule/${e(a)}/${e(r)}/${e(t)}`;return s.get({url:o,params:p})},c=e=>s.post({url:"/sys/sysDepartRole/datarule",params:e}),P=e=>s.get({url:"/sys/sysDepartRole/getDeptRoleList",params:e}),T=e=>s.get({url:"/sys/sysDepartRole/getDeptRoleByUserId",params:e}),U=e=>s.post({url:"/sys/sysDepartRole/deptRoleUserAdd",params:e});export{p as a,i as b,u as c,l as d,P as e,T as f,U as g,m as h,D as i,d as j,R as k,y as l,g as m,c as n,t as q,o as s,n as u};