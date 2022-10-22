import{render as o}from"./renderUtils.a1668db6.js";import{d as c}from"./user.api.365c9555.js";import{a1 as n,a5 as d}from"./index.b3d2a891.js";const C="sys/checkRule/exportXls",F="sys/checkRule/importExcel",f=e=>n.get({url:"/sys/checkRule/list",params:e}),k=(e,u)=>n.delete({url:"/sys/checkRule/delete",data:e},{joinParamsToUrl:!0}).then(()=>{u()}),R=(e,u)=>{d.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>n.delete({url:"/sys/checkRule/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{u()})})},i=(e,u)=>{u=encodeURIComponent(u);let s={ruleCode:e,value:u};return n.get({url:"/sys/checkRule/checkByCode",params:s},{isTransformResponse:!1})},D=e=>n.post({url:"/sys/checkRule/add",params:e}),I=e=>n.put({url:"/sys/checkRule/edit",params:e}),y=[{title:"\u89C4\u5219\u540D\u79F0",dataIndex:"ruleName",width:200,align:"center"},{title:"\u89C4\u5219\u7F16\u7801",dataIndex:"ruleCode",width:200,align:"center"},{title:"\u89C4\u5219\u63CF\u8FF0",dataIndex:"ruleDescription",width:300,align:"center",customRender:function({text:e}){return o.renderTip(e,30)}}],b=[{field:"ruleName",label:"\u89C4\u5219\u540D\u79F0",component:"Input",colProps:{span:6}},{field:"ruleCode",label:"\u89C4\u5219\u7F16\u7801",component:"Input",colProps:{span:6}}],g=[{label:"",field:"id",component:"Input",show:!1},{field:"ruleName",label:"\u89C4\u5219\u540D\u79F0",component:"Input",required:!0,colProps:{span:24}},{field:"ruleCode",label:"\u89C4\u5219\u7F16\u7801",component:"Input",colProps:{span:24},dynamicDisabled:({values:e})=>!!e.id,dynamicRules:({model:e})=>[{required:!0,validator:(u,s)=>new Promise((r,l)=>{if(!s)return l("\u8BF7\u8F93\u5165\u89C4\u5219\u7F16\u7801\uFF01");let a={tableName:"sys_check_rule",fieldName:"rule_code",fieldVal:s,dataId:e.id};c(a).then(t=>{t.success?r():l("\u89C4\u5219\u7F16\u7801\u5DF2\u5B58\u5728!")}).catch(t=>{l(t.message||"\u6821\u9A8C\u5931\u8D25")})})}]},{field:"ruleDescription",label:"\u89C4\u5219\u63CF\u8FF0",colProps:{span:24},component:"InputTextArea",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u63CF\u8FF0",rows:2}}],P=[{label:"123",field:"ruleCode",component:"Input",show:!1},{field:"testValue",label:"\u9700\u8981\u6D4B\u8BD5\u7684\u503C:",component:"Input",componentProps:({formModel:e})=>({onChange:u=>{e.testValue=u.target.value}}),dynamicRules:({model:e})=>{const{ruleCode:u}=e;return[{required:!1,validator:(s,r)=>new Promise((l,a)=>{u&&r?i(u,r).then(t=>{t.success?l():a(t.message)}).catch(t=>{a(t.message||t)}):l()})}]}}];export{y as a,b,P as c,R as d,C as e,g as f,f as g,k as h,F as i,D as s,I as u};
