var h=Object.defineProperty;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(t,s,e)=>s in t?h(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,w=(t,s)=>{for(var e in s||(s={}))v.call(s,e)&&g(t,e,s[e]);if(p)for(var e of p(s))y.call(s,e)&&g(t,e,s[e]);return t};var d=(t,s,e)=>new Promise((l,c)=>{var m=a=>{try{n(e.next(a))}catch(r){c(r)}},u=a=>{try{n(e.throw(a))}catch(r){c(r)}},n=a=>a.done?l(a.value):Promise.resolve(a.value).then(m,u);n((e=e.apply(t,s)).next())});import{B as M}from"./index.c08fb6c5.js";import{B as b}from"./BasicForm.1d30e5fc.js";import"./componentMap.a24260de.js";import{u as x}from"./useForm.853cc25f.js";import"./JAddInput.eb06f3b7.js";import{j as D,C as R,bH as k,K as i,m as C,s as L,Q as S,w as T,v as U,x as I}from"./index.b3c2d15d.js";import{f as O}from"./tenant.data.796cd352.js";import{g as P,s as V}from"./tenant.api.32670921.js";const q=D({__name:"TenantModal",emits:["register","success"],setup(t,{emit:s}){const e=R(!0),[l,{resetFields:c,setFieldsValue:m,validate:u,updateSchema:n}]=x({schemas:O,showActionButtonGroup:!1}),[a,{setModalProps:r,closeModal:B}]=k(o=>d(this,null,function*(){yield c(),r({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate),i(e)?(n({field:"id",dynamicDisabled:!0}),o.record=yield P({id:o.record.id}),yield m(w({},o.record))):n({field:"id",dynamicDisabled:!1})})),F=C(()=>i(e)?"\u7F16\u8F91\u79DF\u6237":"\u65B0\u589E\u79DF\u6237");function _(o){return d(this,null,function*(){try{let f=yield u();r({confirmLoading:!0}),yield V(f,e.value),B(),s("success")}finally{r({confirmLoading:!1})}})}return(o,f)=>(L(),S(i(M),I(o.$attrs,{onRegister:i(a),title:i(F),onOk:_,width:"700px"}),{default:T(()=>[U(i(b),{onRegister:i(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{q as _};