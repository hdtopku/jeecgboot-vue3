var E=Object.defineProperty;var f=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var D=(e,u,t)=>u in e?E(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,F=(e,u)=>{for(var t in u||(u={}))b.call(u,t)&&D(e,t,u[t]);if(f)for(var t of f(u))y.call(u,t)&&D(e,t,u[t]);return e};var B=(e,u,t)=>new Promise((d,i)=>{var l=a=>{try{n(t.next(a))}catch(s){i(s)}},m=a=>{try{n(t.throw(a))}catch(s){i(s)}},n=a=>a.done?d(a.value):Promise.resolve(a.value).then(l,m);n((t=t.apply(e,u)).next())});import{B as x}from"./index.2d23bddf.js";import{B as I}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as w}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{a1 as c,a5 as P,l as T,F as M,bG as A,L as r,o as _,v as j,V as v,z as C,y as k,B as Y}from"./index.b3d2a891.js";import{render as S}from"./renderUtils.a1668db6.js";const X=[{title:"\u59D3\u540D",dataIndex:"name",width:70,align:"left",sorter:!0},{title:"\u5173\u952E\u8BCD",dataIndex:"keyWord",width:30},{title:"\u6253\u5361\u65F6\u95F4",dataIndex:"punchTime",width:40},{title:"\u5DE5\u8D44",dataIndex:"salaryMoney",width:40,sorter:!0},{title:"\u5956\u91D1",dataIndex:"bonusMoney",width:40},{title:"\u6027\u522B",dataIndex:"sex",sorter:!0,customRender:({record:e})=>S.renderDict(e.sex,"sex"),width:20},{title:"\u751F\u65E5",dataIndex:"birthday",width:20},{title:"\u90AE\u7BB1",dataIndex:"email",width:20},{title:"\u4E2A\u4EBA\u7B80\u4ECB",dataIndex:"content",width:20}],$=[{field:"name",label:"\u59D3\u540D",component:"Input",colProps:{span:8}},{field:"birthday",label:"\u751F\u65E5",component:"RangePicker",componentProps:{valueType:"Date"},colProps:{span:8}},{field:"age",label:"\u5E74\u9F84",component:"Input",slot:"age",colProps:{span:8}},{field:"sex",label:"\u6027\u522B",colProps:{span:8},component:"JDictSelectTag",componentProps:{dictCode:"sex",placeholder:"\u8BF7\u9009\u62E9\u6027\u522B"}}],U=[{field:"id",label:"id",component:"Input",show:!1},{field:"createBy",label:"createBy",component:"Input",show:!1},{field:"createTime",label:"createTime",component:"Input",show:!1},{field:"name",label:"\u540D\u5B57",component:"Input",required:!0,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"}},{field:"keyWord",label:"\u5173\u952E\u8BCD",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"}},{field:"punchTime",label:"\u6253\u5361\u65F6\u95F4",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BF7\u9009\u62E9\u6253\u5361\u65F6\u95F4"}},{field:"salaryMoney",label:"\u5DE5\u8D44",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5DE5\u8D44"}},{field:"sex",label:"\u6027\u522B",component:"JDictSelectTag",defaultValue:"1",componentProps:{type:"radio",dictCode:"sex",placeholder:"\u8BF7\u9009\u62E9\u6027\u522B"}},{field:"age",label:"\u5E74\u9F84",component:"InputNumber",defaultValue:1,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"}},{field:"birthday",label:"\u751F\u65E5",component:"DatePicker",defaultValue:"",componentProps:{valueFormat:"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u751F\u65E5"}},{field:"email",label:"\u90AE\u7BB1",component:"Input",rules:[{required:!1,type:"email",message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E",trigger:"blur"}],componentProps:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"}},{field:"content",label:"\u4E2A\u4EBA\u7B80\u4ECB - To introduce myself",component:"InputTextArea",labelLength:4,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"}}],K="/test/jeecgDemo/exportXls",Q="/test/jeecgDemo/importExcel",Z=e=>c.get({url:"/test/jeecgDemo/list",params:e}),L=(e,u)=>{let t=u?"/test/jeecgDemo/edit":"/test/jeecgDemo/add";return c.post({url:t,params:e})},R=e=>c.get({url:"/test/jeecgDemo/queryById",params:e}),ee=(e,u)=>c.delete({url:"/test/jeecgDemo/delete",data:e},{joinParamsToUrl:!0}).then(()=>{u()}),te=(e,u)=>{P.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>c.delete({url:"/test/jeecgDemo/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{u()})})},V=T({__name:"DemoModal",emits:["register","success"],setup(e,{emit:u}){const t=M(!0),[d,{resetFields:i,setFieldsValue:l,validate:m}]=w({schemas:U,showActionButtonGroup:!1}),[n,{setModalProps:a,closeModal:s}]=A(o=>B(this,null,function*(){yield i(),a({confirmLoading:!1}),t.value=!!(o!=null&&o.isUpdate),o.createBy&&(yield l({createBy:o.createBy})),o.createTime&&(yield l({createTime:o.createTime})),r(t)&&(o.record=yield R({id:o.record.id}),yield l(F({},o.record)))})),h=_(()=>r(t)?"\u7F16\u8F91\u79DF\u6237":"\u65B0\u589E\u79DF\u6237");function g(o){return B(this,null,function*(){try{let p=yield m();a({confirmLoading:!0}),yield L(p,t.value),s(),u("success",p)}finally{a({confirmLoading:!1})}})}return(o,p)=>(j(),v(r(x),Y(o.$attrs,{onRegister:r(n),title:r(h),onOk:g,width:"40%"}),{default:C(()=>[k(r(I),{onRegister:r(d)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{ue as D,V as _,Q as a,K as b,X as c,ee as d,te as e,Z as g,$ as s};
