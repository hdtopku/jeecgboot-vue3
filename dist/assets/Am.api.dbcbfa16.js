import{a1 as a,a5 as s,u as e}from"./index.435ab247.js";const t="/pms/am/exportXls",m="/pms/am/importExcel",r=s=>a.get({url:"/pms/am/list",params:s}),o=s=>a.get({url:"/pms/am/getList",params:s}),l=(s,e)=>a.delete({url:"/pms/am/delete",params:s},{joinParamsToUrl:!0}).then((()=>{e()})),p=(e,t)=>{s.confirm({title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>a.delete({url:"/pms/am/deleteBatch",data:e},{joinParamsToUrl:!0}).then((()=>{t()}))})},n=(s,e)=>{const t=e?"/pms/am/edit":"/pms/am/add";return a.post({url:t,params:s})},c=(s,t,m=(()=>{}))=>a.get({url:"/pms/am/getCodes",params:s},{joinParamsToUrl:!0}).then((a=>{t(a.join("\r\n"))})).catch((a=>{const{createMessage:s}=e();s.error(a),m()}));export{o as a,t as b,m as c,p as d,l as e,c as g,r as l,n as s};