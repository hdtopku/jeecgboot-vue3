var v=Object.defineProperty;var B=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(s,u,e)=>u in s?v(s,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[u]=e,F=(s,u)=>{for(var e in u||(u={}))A.call(u,e)&&f(s,e,u[e]);if(B)for(var e of B(u))g.call(u,e)&&f(s,e,u[e]);return s};var p=(s,u,e)=>new Promise((l,n)=>{var c=t=>{try{i(e.next(t))}catch(a){n(a)}},m=t=>{try{i(e.throw(t))}catch(a){n(a)}},i=t=>t.done?l(t.value):Promise.resolve(t.value).then(c,m);i((e=e.apply(s,u)).next())});import{B as _}from"./index.2d23bddf.js";import{B as w}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as b}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{l as y,F as I,bG as E,L as r,o as x,v as M,V as k,z as O,y as S,B as L}from"./index.b3d2a891.js";import{s as R}from"./Am.api.2f8295b1.js";const $=[{title:"\u94FE\u63A5key",dataIndex:"code"},{title:"\u6FC0\u6D3B\u7801\u72B6\u6001(0-\u6B63\u5E38,-1-\u5931\u6548)",dataIndex:"valid"},{title:"\u9A8C\u8BC1\u72B6\u6001(0-\u5F85\u4F7F\u7528,1-\u5F85\u9A8C\u8BC1,2-\u9A8C\u8BC1\u4E2D,3-\u9A8C\u8BC1\u5B8C\u6210)",dataIndex:"status"},{title:"\u5BA2\u6237\u9996\u6B21\u8BBF\u95EE\u7684\u65F6\u95F4",dataIndex:"visitTime"},{title:"\u5BA2\u6237\u5F00\u59CB\u9A8C\u8BC1\u7684\u65F6\u95F4",dataIndex:"verifyTime"}],q=[{label:"\u94FE\u63A5key",field:"code",component:"Input"},{label:"\u6FC0\u6D3B\u7801\u72B6\u6001(0-\u6B63\u5E38,-1-\u5931\u6548)",field:"valid",component:"Input"}],T=[{label:"",field:"id",component:"Input",show:!1},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],U=y({__name:"AmModal",emits:["register","success"],setup(s,{emit:u}){const e=I(!0),[l,{resetFields:n,setFieldsValue:c,validate:m}]=b({labelWidth:150,schemas:T,showActionButtonGroup:!1}),[i,{setModalProps:t,closeModal:a}]=E(o=>p(this,null,function*(){yield n(),t({confirmLoading:!1,showCancelBtn:o==null?void 0:o.showFooter,showOkBtn:o==null?void 0:o.showFooter}),e.value=!!(o!=null&&o.isUpdate),r(e)&&(yield c(F({},o.record)))})),C=x(()=>r(e)?"\u7F16\u8F91":"\u65B0\u589E");function h(o){return p(this,null,function*(){try{let d=yield m();t({confirmLoading:!0}),yield R(d,e.value),a(),u("success",{isUpdate:e.value,values:d})}finally{t({confirmLoading:!1})}})}return(o,d)=>(M(),k(r(_),L(o.$attrs,{onRegister:r(i),title:r(C),onOk:h,width:"96%"}),{default:O(()=>[S(r(w),{onRegister:r(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var H=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{H as A,U as _,$ as c,q as s};
