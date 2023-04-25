var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&h(e,r,t[r]);if(y)for(var r of y(t))D.call(t,r)&&h(e,r,t[r]);return e};var f=(e,t,r)=>new Promise((m,c)=>{var p=o=>{try{l(r.next(o))}catch(i){c(i)}},g=o=>{try{l(r.throw(o))}catch(i){c(i)}},l=o=>o.done?m(o.value):Promise.resolve(o.value).then(p,g);l((r=r.apply(e,t)).next())});import{B as T}from"./index.c08fb6c5.js";import{B as b}from"./BasicForm.1d30e5fc.js";import"./componentMap.a24260de.js";import{u as E}from"./useForm.853cc25f.js";import"./JAddInput.eb06f3b7.js";import{Z as a,j as A,C as R,bH as _,K as s,m as x,s as P,Q as v,w as S,v as L,x as M}from"./index.b3c2d15d.js";import{rules as U}from"./validator.020069d8.js";import{render as n}from"./renderUtils.1494c29f.js";const Q=[{title:"\u6807\u9898",width:150,dataIndex:"titile"},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"msgCategory",width:100,customRender:({text:e})=>n.renderDict(e,"msg_category")},{title:"\u53D1\u5E03\u4EBA",width:100,dataIndex:"sender"},{title:"\u4F18\u5148\u7EA7",dataIndex:"priority",width:70,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return n.renderTag(n.renderDict(e,"priority"),t)}},{title:"\u901A\u544A\u5BF9\u8C61",dataIndex:"msgType",width:100,customRender:({text:e})=>n.renderDict(e,"msg_type")},{title:"\u53D1\u5E03\u72B6\u6001",dataIndex:"sendStatus",width:70,customRender:({text:e})=>{const t=e=="0"?"red":e=="1"?"green":"gray";return n.renderTag(n.renderDict(e,"send_status"),t)}},{title:"\u53D1\u5E03\u65F6\u95F4",width:100,dataIndex:"sendTime"},{title:"\u64A4\u9500\u65F6\u95F4",width:100,dataIndex:"cancelTime"}],X=[{field:"titile",label:"\u6807\u9898",component:"JInput",colProps:{span:8}}],k=[{field:"id",label:"id",component:"Input",show:!1},{field:"msgCategory",label:"\u6D88\u606F\u7C7B\u578B",required:!0,component:"JDictSelectTag",defaultValue:"1",componentProps:{type:"radio",dictCode:"msg_category",placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"}},{field:"titile",label:"\u6807\u9898",component:"Input",required:!0,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{field:"msgAbstract",label:"\u6458\u8981",component:"InputTextArea",required:!0},{field:"endTime",label:"\u622A\u81F3\u65E5\u671F",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BF7\u9009\u62E9\u622A\u81F3\u65E5\u671F"},dynamicRules:({model:e})=>U.endTime(e.startTime,!0)},{field:"msgType",label:"\u63A5\u6536\u7528\u6237",defaultValue:"ALL",component:"JDictSelectTag",required:!0,componentProps:{type:"radio",dictCode:"msg_type",placeholder:"\u8BF7\u9009\u62E9\u53D1\u5E03\u8303\u56F4"}},{field:"userIds",label:"\u6307\u5B9A\u7528\u6237",component:"JSelectUser",required:!0,componentProps:{rowKey:"id",labelKey:"username"},ifShow:({values:e})=>e.msgType=="USER"},{field:"priority",label:"\u4F18\u5148\u7EA7",defaultValue:"H",component:"JDictSelectTag",componentProps:{dictCode:"priority",type:"radio",placeholder:"\u8BF7\u9009\u62E9\u4F18\u5148\u7EA7"}},{field:"msgContent",label:"\u5185\u5BB9",component:"Input",render:n.renderTinymce}],Z="/sys/annountCement/exportXls",$="/sys/annountCement/importExcel",z=e=>a.get({url:"/sys/annountCement/list",params:e}),q=(e,t)=>{let r=t?"/sys/annountCement/edit":"/sys/annountCement/add";return a.post({url:r,params:e})},W=(e,t)=>a.delete({url:"/sys/annountCement/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),ee=e=>a.delete({url:"/sys/annountCement/deleteBatch",data:e},{joinParamsToUrl:!0}),te=e=>a.get({url:"/sys/annountCement/doReleaseData",params:e}),re=e=>a.get({url:"/sys/annountCement/doReovkeData",params:e}),oe=A({__name:"NoticeModal",emits:["register","success"],setup(e,{emit:t}){const r=R(!0),[m,{resetFields:c,setFieldsValue:p,validate:g}]=E({schemas:k,showActionButtonGroup:!1}),[l,{setModalProps:o,closeModal:i}]=_(u=>f(this,null,function*(){yield c(),o({confirmLoading:!1}),r.value=!!(u!=null&&u.isUpdate),s(r)&&(u.record.userIds&&(u.record.userIds=u.record.userIds.substring(0,u.record.userIds.length-1)),yield p(F({},u.record)))})),B=x(()=>s(r)?"\u7F16\u8F91":"\u65B0\u589E");function C(u){return f(this,null,function*(){try{let d=yield g();o({confirmLoading:!0}),d.msgType==="ALL"?d.userIds="":d.userIds+=",",yield q(d,r.value),i(),t("success")}finally{o({confirmLoading:!1})}})}return(u,d)=>(P(),v(s(T),M(u.$attrs,{onRegister:s(l),title:s(B),onOk:C,width:"900px",destroyOnClose:""}),{default:S(()=>[L(s(b),{onRegister:s(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{oe as _,Z as a,$ as b,Q as c,ee as d,W as e,te as f,z as g,re as h,X as s};