import{render as a}from"./renderUtils-76d1e990.js";import{d as c}from"./user.api-dd1b3184.js";import{ad as n}from"./jeecg-online-vendor-bf2efbcb.js";import{a9 as d}from"./antd-vue-vendor-1561c1ba.js";const f="sys/checkRule/exportXls",F="sys/checkRule/importExcel",k=e=>n.get({url:"/sys/checkRule/list",params:e}),R=(e,u)=>n.delete({url:"/sys/checkRule/delete",data:e},{joinParamsToUrl:!0}).then(()=>{u()}),D=(e,u)=>{d.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>n.delete({url:"/sys/checkRule/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{u()})})},i=(e,u)=>{u=encodeURIComponent(u);let r={ruleCode:e,value:u};return n.get({url:"/sys/checkRule/checkByCode",params:r},{isTransformResponse:!1})},I=e=>n.post({url:"/sys/checkRule/add",params:e}),y=e=>n.put({url:"/sys/checkRule/edit",params:e}),b=[{title:"\u89C4\u5219\u540D\u79F0",dataIndex:"ruleName",width:200,align:"center"},{title:"\u89C4\u5219\u7F16\u7801",dataIndex:"ruleCode",width:200,align:"center"},{title:"\u89C4\u5219\u63CF\u8FF0",dataIndex:"ruleDescription",width:300,align:"center",customRender:function({text:e}){return a.renderTip(e,30)}}],g=[{field:"ruleName",label:"\u89C4\u5219\u540D\u79F0",component:"Input",colProps:{span:6}},{field:"ruleCode",label:"\u89C4\u5219\u7F16\u7801",component:"Input",colProps:{span:6}}],P=[{label:"",field:"id",component:"Input",show:!1},{field:"ruleName",label:"\u89C4\u5219\u540D\u79F0",component:"Input",required:!0,colProps:{span:24}},{field:"ruleCode",label:"\u89C4\u5219\u7F16\u7801",component:"Input",colProps:{span:24},dynamicDisabled:({values:e})=>!!e.id,dynamicRules:({model:e})=>[{required:!0,validator:(u,r)=>new Promise((s,l)=>{if(!r)return l("\u8BF7\u8F93\u5165\u89C4\u5219\u7F16\u7801\uFF01");let o={tableName:"sys_check_rule",fieldName:"rule_code",fieldVal:r,dataId:e.id};c(o).then(t=>{t.success?s():l("\u89C4\u5219\u7F16\u7801\u5DF2\u5B58\u5728!")}).catch(t=>{l(t.message||"\u6821\u9A8C\u5931\u8D25")})})}]},{field:"ruleDescription",label:"\u89C4\u5219\u63CF\u8FF0",colProps:{span:24},component:"InputTextArea",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u63CF\u8FF0",rows:2}}],x=[{label:"123",field:"ruleCode",component:"Input",show:!1},{field:"testValue",label:"\u9700\u8981\u6D4B\u8BD5\u7684\u503C:",component:"Input",componentProps:({formModel:e})=>({onChange:u=>{e.testValue=u.target.value}}),dynamicRules:({model:e})=>{const{ruleCode:u}=e;return[{required:!1,validator:(r,s)=>new Promise((l,o)=>{u&&s?i(u,s).then(t=>{t.success?l():o(t.message)}).catch(t=>{o(t.message||t)}):l()})}]}}];export{b as a,g as b,x as c,D as d,f as e,P as f,k as g,R as h,F as i,I as s,y as u};