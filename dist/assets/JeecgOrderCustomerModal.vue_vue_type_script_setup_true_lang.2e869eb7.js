var B=Object.defineProperty;var f=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(o,s,e)=>s in o?B(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,g=(o,s)=>{for(var e in s||(s={}))F.call(s,e)&&p(o,e,s[e]);if(f)for(var e of f(s))v.call(s,e)&&p(o,e,s[e]);return o};var d=(o,s,e)=>new Promise((n,m)=>{var l=r=>{try{c(e.next(r))}catch(i){m(i)}},u=r=>{try{c(e.throw(r))}catch(i){m(i)}},c=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,u);c((e=e.apply(o,s)).next())});import{B as M}from"./index.fa33ec21.js";import{B as C}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as b}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as y,bj as I,C as R,bH as j,K as a,m as k,s as x,Q as L,w as O,v as U,x as P}from"./index.9d4ffdff.js";import{e as S,s as V}from"./erplist.api.7420ab78.js";const W=y({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(o,{emit:s}){const e=I("orderId")||"",n=R(!0),[m,{resetFields:l,setFieldsValue:u,validate:c}]=b({labelWidth:150,schemas:S,showActionButtonGroup:!1}),[r,{setModalProps:i,closeModal:_}]=j(t=>d(this,null,function*(){yield l(),i({confirmLoading:!1}),n.value=!!(t!=null&&t.isUpdate),a(n)&&(yield u(g({},t.record)))})),h=k(()=>a(n)?"\u7F16\u8F91":"\u65B0\u589E");function w(){return d(this,null,function*(){try{const t=yield c();i({confirmLoading:!0}),a(e)&&(t.orderId=a(e)),yield V(t,n.value),_(),s("success")}finally{i({confirmLoading:!1})}})}return(t,A)=>(x(),L(a(M),P(t.$attrs,{onRegister:a(r),title:h.value,onOk:w,width:700}),{default:O(()=>[U(a(C),{onRegister:a(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{W as _};