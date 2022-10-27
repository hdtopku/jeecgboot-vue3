var z=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var g=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&g(e,r,t[r]);if(b)for(var r of b(t))J.call(t,r)&&g(e,r,t[r]);return e};var f=(e,t,r)=>new Promise((d,c)=>{var p=u=>{try{n(r.next(u))}catch(l){c(l)}},m=u=>{try{n(r.throw(u))}catch(l){c(l)}},n=u=>u.done?d(u.value):Promise.resolve(u.value).then(p,m);n((r=r.apply(e,t)).next())});import{B as x}from"./index.1660bc1f.js";import{B as w}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as T}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{a1 as a,a5 as _,l as q,F as I,bG as v,L as s,ch as S,o as A,v as j,V as D,z as M,y as P,B as N}from"./index.23784a6b.js";import{render as B}from"./renderUtils.3022a5f1.js";import{J as O}from"./validator.6ba09320.js";const Y=[{title:"\u4EFB\u52A1\u7C7B\u540D",dataIndex:"jobClassName",width:200,align:"left"},{title:"Cron\u8868\u8FBE\u5F0F",dataIndex:"cronExpression",width:200},{title:"\u53C2\u6570",dataIndex:"parameter",width:200},{title:"\u63CF\u8FF0",dataIndex:"description",width:200},{title:"\u72B6\u6001",dataIndex:"status",width:100,customRender:({text:e})=>{const t=e=="0"?"green":e=="-1"?"red":"gray";return B.renderTag(B.renderDict(e,"quartz_status"),t)}}],Z=[{field:"jobClassName",label:"\u4EFB\u52A1\u7C7B\u540D",component:"Input",colProps:{span:8}},{field:"status",label:"\u4EFB\u52A1\u72B6\u6001",component:"JDictSelectTag",componentProps:{dictCode:"quartz_status",stringToNumber:!0},colProps:{span:8}}],Q=[{field:"id",label:"id",component:"Input",show:!1},{field:"jobClassName",label:"\u4EFB\u52A1\u7C7B\u540D",component:"Input",required:!0},{field:"cronExpression",label:"Cron\u8868\u8FBE\u5F0F",component:"JEasyCron",defaultValue:"* * * * * ? *",rules:[{required:!0,message:"\u8BF7\u8F93\u5165Cron\u8868\u8FBE\u5F0F"},{validator:O}]},{field:"paramterType",label:"\u53C2\u6570\u7C7B\u578B",component:"Select",defaultValue:"string",componentProps:{options:[{label:"\u5B57\u7B26\u4E32",value:"string"},{label:"JSON\u5BF9\u8C61",value:"json"}]}},{field:"parameter",label:"\u53C2\u6570",component:"InputTextArea",ifShow:({values:e})=>e.paramterType=="string"},{field:"parameter",label:"\u53C2\u6570",component:"JAddInput",helpMessage:"\u952E\u503C\u5BF9\u5F62\u5F0F\u586B\u5199",ifShow:({values:e})=>e.paramterType=="json"},{field:"status",label:"\u72B6\u6001",component:"JDictSelectTag",componentProps:{dictCode:"quartz_status",type:"radioButton",stringToNumber:!0,dropdownStyle:{maxHeight:"6vh"}}},{field:"description",label:"\u63CF\u8FF0",component:"InputTextArea"}],ee="sys/quartzJob/exportXls",te="sys/quartzJob/importExcel",re=e=>a.get({url:"/sys/quartzJob/list",params:e}),U=(e,t)=>{let r=t?"/sys/quartzJob/edit":"/sys/quartzJob/add";return a.post({url:r,params:e})},ue=(e,t)=>a.delete({url:"/sys/quartzJob/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),oe=(e,t)=>a.get({url:"/sys/quartzJob/resume",params:e}).then(()=>{t()}),se=(e,t)=>a.get({url:"/sys/quartzJob/pause",params:e}).then(()=>{t()}),ae=(e,t)=>a.get({url:"sys/quartzJob/execute",params:e}).then(()=>{t()}),ne=(e,t)=>{_.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>a.delete({url:"/sys/quartzJob/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},V=q({__name:"QuartzModal",emits:["register","success"],setup(e,{emit:t}){const r=I(!0),[d,{resetFields:c,setFieldsValue:p,validate:m}]=T({labelWidth:150,schemas:Q,showActionButtonGroup:!1}),[n,{setModalProps:u,closeModal:l}]=v(o=>f(this,null,function*(){var i;if(yield c(),u({confirmLoading:!1}),r.value=!!(o!=null&&o.isUpdate),s(r)){try{o.record.paramterType=S((i=o==null?void 0:o.record)==null?void 0:i.parameter)?"json":"string"}catch(C){console.log(C)}yield p(F({},o.record))}})),h=A(()=>s(r)?"\u7F16\u8F91\u4EFB\u52A1":"\u65B0\u589E\u4EFB\u52A1");function y(o){return f(this,null,function*(){try{let i=yield m();u({confirmLoading:!0}),yield U(i,r.value),l(),t("success")}finally{u({confirmLoading:!1})}})}return(o,i)=>(j(),D(s(x),N(o.$attrs,{onRegister:s(n),title:s(h),onOk:y,width:"40%"}),{default:M(()=>[P(s(w),{onRegister:s(d)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{le as Q,V as _,ee as a,te as b,Y as c,ue as d,ae as e,ne as f,re as g,se as p,oe as r,Z as s};