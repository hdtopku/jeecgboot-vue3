import{a1 as s}from"./index.435ab247.js";const t=t=>s.get({url:"/mock/system/getAccountList",params:t}),e=t=>s.get({url:"/mock/system/getDeptList",params:t}),a=t=>s.get({url:"/mock/system/getMenuList",params:t}),m=t=>s.get({url:"/mock/system/getRoleListByPage",params:t}),o=t=>s.get({url:"/mock/system/getAllRoleList",params:t}),r=(t,e)=>s.post({url:"/mock/system/setRoleStatus",params:{id:t,status:e}}),c=t=>s.get({url:"/mock/system/getTestListByPage",params:t}),g=t=>s.post({url:"/mock/system/accountExist",params:{account:t}},{errorMessageMode:"none"});export{e as a,t as b,a as c,m as d,c as e,o as g,g as i,r as s};