var A=Object.defineProperty,F=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var B=(r,t,e)=>t in r?A(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))R.call(t,e)&&B(r,e,t[e]);if(w)for(var e of w(t))T.call(t,e)&&B(r,e,t[e]);return r},Y=(r,t)=>F(r,L(t));var d=(r,t,e)=>new Promise((f,u)=>{var g=o=>{try{i(e.next(o))}catch(n){u(n)}},M=o=>{try{i(e.throw(o))}catch(n){u(n)}},i=o=>o.done?f(o.value):Promise.resolve(o.value).then(g,M);i((e=e.apply(r,t)).next())});import{B as j}from"./index.fa33ec21.js";import{B as k}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as v}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as h,bH as x,cB as l,s as C,Q as E,w as N,v as Q,K as c,x as V}from"./index.9d4ffdff.js";import{c as b}from"./user.data.c2b85427.js";import{i as P,j as S}from"./user.api.649c11d7.js";const q=h({name:"user-quit-agent-modal"}),X=h(Y(p({},q),{emits:["success","register"],setup(r,{emit:t}){const[e,{resetFields:f,setFieldsValue:u,validate:g,clearValidate:M}]=v({schemas:b,showActionButtonGroup:!1}),[i,{setModalProps:o,closeModal:n}]=x(s=>d(this,null,function*(){yield f(),o({confirmLoading:!1}),o({confirmLoading:!1});const a=yield P({userName:s.userName});s=a.result?a.result:s;let m=new Date;s.startTime||(s.startTime=l(m).format("YYYY-MM-DD HH:mm:ss")),s.endTime||(s.endTime=H(m)),yield u(p({},s))}));function D(){return d(this,null,function*(){try{const s=yield g();o({confirmLoading:!0}),yield S(s),n(),t("success")}finally{o({confirmLoading:!1})}})}function H(s){let a=s.getFullYear()+30,m=l(s).format("MM"),_=l(s).format("DD"),y=l(s).format("HH:mm:ss");return console.log("\u5E74\u6708\u65E5",a+"-"+m+"-"+_),l(a+"-"+m+"-"+_+" "+y).format("YYYY-MM-DD HH:mm:ss")}return(s,a)=>(C(),E(c(j),V(s.$attrs,{onRegister:c(i),width:800,title:"\u79BB\u804C\u4EA4\u63A5",onOk:D}),{default:N(()=>[Q(c(k),{onRegister:c(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}}));export{X as _};