import{i as a}from"./role.api.3d5baaec.js";const i=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",width:100},{title:"\u89D2\u8272\u7F16\u7801",dataIndex:"roleCode",width:100},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:100}],d=[{title:"\u7528\u6237\u8D26\u53F7",dataIndex:"username"},{title:"\u7528\u6237\u59D3\u540D",dataIndex:"realname"},{title:"\u72B6\u6001",dataIndex:"status_dictText",width:80}],c=[{field:"roleName",label:"\u89D2\u8272\u540D\u79F0",component:"Input",colProps:{span:6}},{field:"roleCode",label:"\u89D2\u8272\u7F16\u7801",component:"Input",colProps:{span:6}}],m=[{field:"username",label:"\u7528\u6237\u8D26\u53F7",component:"Input",colProps:{span:12}}],p=[{field:"id",label:"",component:"Input",show:!1},{field:"roleName",label:"\u89D2\u8272\u540D\u79F0",required:!0,component:"Input"},{field:"roleCode",label:"\u89D2\u8272\u7F16\u7801",required:!0,component:"Input",dynamicDisabled:({values:u})=>!!u.id,dynamicRules:({values:u,model:l})=>(console.log("values:",u),[{required:!0,validator:(r,o)=>o?u?new Promise((n,t)=>{a({id:l.id,roleCode:o}).then(e=>{e.success?n():t(e.message||"\u6821\u9A8C\u5931\u8D25")}).catch(e=>{t(e.message||"\u9A8C\u8BC1\u5931\u8D25")})}):Promise.resolve():Promise.reject("\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801")}])},{label:"\u5907\u6CE8",field:"description",component:"InputTextArea"}],F=[{field:"roleName",label:"\u89D2\u8272\u540D\u79F0"},{field:"roleCode",label:"\u89D2\u8272\u7F16\u7801"},{label:"\u5907\u6CE8",field:"description"}],D=[{field:"id",label:"",component:"Input",show:!1},{label:"\u89D2\u8272\u7F16\u7801",field:"roleCode",component:"Input",dynamicDisabled:!0},{label:"\u9996\u9875\u8DEF\u7531",field:"url",component:"Input",required:!0,helpMessage:"\u9996\u9875\u8DEF\u7531\u7684\u8BBF\u95EE\u5730\u5740"},{label:"\u7EC4\u4EF6\u5730\u5740",field:"component",component:"Input",helpMessage:"\u9996\u9875\u8DEF\u7531\u7684\u7EC4\u4EF6\u5730\u5740",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u524D\u7AEF\u7EC4\u4EF6"},required:!0},{field:"route",label:"\u662F\u5426\u8DEF\u7531\u83DC\u5355",helpMessage:"\u975E\u8DEF\u7531\u83DC\u5355\u8BBE\u7F6E\u6210\u9996\u9875\uFF0C\u9700\u5F00\u542F",component:"Switch",defaultValue:!0},{label:"\u4F18\u5148\u7EA7",field:"priority",component:"InputNumber"},{label:"\u662F\u5426\u5F00\u542F",field:"status",component:"JSwitch",componentProps:{options:["1","0"]}}];export{p as a,m as b,i as c,F as f,D as r,c as s,d as u};