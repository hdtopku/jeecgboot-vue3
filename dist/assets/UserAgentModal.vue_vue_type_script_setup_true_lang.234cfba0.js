var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(r,s,e)=>s in r?_(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,w=(r,s)=>{for(var e in s||(s={}))h.call(s,e)&&g(r,e,s[e]);if(d)for(var e of d(s))B.call(s,e)&&g(r,e,s[e]);return r};var p=(r,s,e)=>new Promise((c,n)=>{var l=t=>{try{a(e.next(t))}catch(i){n(i)}},u=t=>{try{a(e.throw(t))}catch(i){n(i)}},a=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,u);a((e=e.apply(r,s)).next())});import{B as M}from"./index.fa33ec21.js";import{B as A}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as F}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as v,bH as y,s as R,Q as k,w as x,v as L,K as m,x as N}from"./index.9d4ffdff.js";import{d as U}from"./user.data.c2b85427.js";import{i as b,m as C}from"./user.api.649c11d7.js";const K=v({__name:"UserAgentModal",emits:["success","register"],setup(r,{emit:s}){const[e,{resetFields:c,setFieldsValue:n,validate:l}]=F({schemas:U,showActionButtonGroup:!1}),[u,{setModalProps:a,closeModal:t}]=y(o=>p(this,null,function*(){yield c(),a({confirmLoading:!1});const f=yield b({userName:o.userName});o=f.result?f.result:o,yield n(w({},o))}));function i(){return p(this,null,function*(){try{const o=yield l();a({confirmLoading:!0}),yield C(o),t(),s("success")}finally{a({confirmLoading:!1})}})}return(o,f)=>(R(),k(m(M),N(o.$attrs,{onRegister:m(u),width:800,title:"\u7528\u6237\u4EE3\u7406",onOk:i}),{default:x(()=>[L(m(A),{onRegister:m(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{K as _};