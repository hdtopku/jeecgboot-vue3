var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(s,o,e)=>o in s?w(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,g=(s,o)=>{for(var e in o||(o={}))v.call(o,e)&&f(s,e,o[e]);if(p)for(var e of p(o))F.call(o,e)&&f(s,e,o[e]);return s};var d=(s,o,e)=>new Promise((n,c)=>{var l=r=>{try{m(e.next(r))}catch(i){c(i)}},u=r=>{try{m(e.throw(r))}catch(i){c(i)}},m=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,u);m((e=e.apply(s,o)).next())});import{B as M}from"./index-9d0047d3.js";import{B as k}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as y}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as C}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{e as I,s as R}from"./erplist.api-270a15df.js";import{d as L,c as O,k as U,u as a,e as b,a5 as x,a9 as P,a7 as S,f as V,ag as j}from"./vue-bcbaddf9.js";const X=L({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(s,{emit:o}){const e=O("orderId")||"",n=U(!0),[c,{resetFields:l,setFieldsValue:u,validate:m}]=y({labelWidth:150,schemas:I,showActionButtonGroup:!1}),[r,{setModalProps:i,closeModal:_}]=C(t=>d(this,null,function*(){yield l(),i({confirmLoading:!1}),n.value=!!(t!=null&&t.isUpdate),a(n)&&(yield u(g({},t.record)))})),h=b(()=>a(n)?"编辑":"新增");function B(){return d(this,null,function*(){try{const t=yield m();i({confirmLoading:!0}),a(e)&&(t.orderId=a(e)),yield R(t,n.value),_(),o("success")}finally{i({confirmLoading:!1})}})}return(t,A)=>(x(),P(a(M),j(t.$attrs,{onRegister:a(r),title:h.value,onOk:B,width:700}),{default:S(()=>[V(a(k),{onRegister:a(c)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{X as _};