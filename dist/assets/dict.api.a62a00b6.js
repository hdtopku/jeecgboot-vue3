import{a1 as s,a5 as r}from"./index.6c1aeca2.js";const i="/sys/dict/exportXls",a="/sys/dict/importExcel",n=t=>s.get({url:"/sys/dict/list",params:t}),d=(t,e)=>s.delete({url:"/sys/dict/delete",params:t},{joinParamsToUrl:!0}).then(()=>{e()}),u=(t,e)=>{r.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>s.delete({url:"/sys/dict/deleteBatch",data:t},{joinParamsToUrl:!0}).then(()=>{e()})})},o=(t,e)=>{let c=e?"/sys/dict/edit":"/sys/dict/add";return s.post({url:c,params:t})},m=t=>s.get({url:"/sys/dict/deleteList",params:t}),y=(t,e)=>s.put({url:`/sys/dict/back/${t}`}).then(()=>{e()}),p=(t,e)=>s.delete({url:`/sys/dict/deletePhysic/${t}`}).then(()=>{e()}),h=t=>s.get({url:"/sys/dictItem/list",params:t}),f=(t,e)=>s.delete({url:"/sys/dictItem/delete",params:t},{joinParamsToUrl:!0}).then(()=>{e()}),I=(t,e)=>{let c=e?"/sys/dictItem/edit":"/sys/dictItem/add";return s.post({url:c,params:t})},g=t=>s.get({url:"/sys/dictItem/dictItemCheck",params:t},{isTransformResponse:!1}),D=()=>s.get({url:"/sys/dict/refleshCache"},{isTransformResponse:!1}),T=()=>s.get({url:"/sys/dict/queryAllDictItems"},{isTransformResponse:!1});export{a,u as b,f as c,d,m as e,p as f,i as g,g as h,h as i,I as j,n as l,y as p,T as q,D as r,o as s};