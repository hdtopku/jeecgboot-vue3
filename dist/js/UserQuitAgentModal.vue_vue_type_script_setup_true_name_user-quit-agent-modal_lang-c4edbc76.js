var H=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var Y=(s,r,e)=>r in s?H(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e,g=(s,r)=>{for(var e in r||(r={}))R.call(r,e)&&Y(s,e,r[e]);if(_)for(var e of _(r))T.call(r,e)&&Y(s,e,r[e]);return s},h=(s,r)=>A(s,L(r));var d=(s,r,e)=>new Promise((c,l)=>{var p=o=>{try{a(e.next(o))}catch(i){l(i)}},M=o=>{try{a(e.throw(o))}catch(i){l(i)}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,M);a((e=e.apply(s,r)).next())});import{B as k}from"./index-9d0047d3.js";import{B as N}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as V}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as b}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{b as v}from"./user.data-7db57e64.js";import{h as x,u as C}from"./user.api-023a32e5.js";import{d as n}from"./antd-vue-vendor-a78909e6.js";import{d as w,a5 as P,a9 as Q,a7 as S,f as j,u as f,ag as q}from"./vue-bcbaddf9.js";const G=w({name:"user-quit-agent-modal"}),oe=w(h(g({},G),{emits:["success","register"],setup(s,{emit:r}){const[e,{resetFields:c,setFieldsValue:l,validate:p,clearValidate:M}]=V({schemas:v,showActionButtonGroup:!1}),[a,{setModalProps:o,closeModal:i}]=b(t=>d(this,null,function*(){yield c(),o({confirmLoading:!1}),o({confirmLoading:!1});const m=yield x({userName:t.userName});t=m.result?m.result:t;let u=new Date;t.startTime||(t.startTime=n(u).format("YYYY-MM-DD HH:mm:ss")),t.endTime||(t.endTime=D(u)),yield l(g({},t))}));function B(){return d(this,null,function*(){try{const t=yield p();o({confirmLoading:!0}),yield C(t),i(),r("success")}finally{o({confirmLoading:!1})}})}function D(t){let m=t.getFullYear()+30,u=n(t).format("MM"),y=n(t).format("DD"),F=n(t).format("HH:mm:ss");return n(m+"-"+u+"-"+y+" "+F).format("YYYY-MM-DD HH:mm:ss")}return(t,m)=>(P(),Q(f(k),q(t.$attrs,{onRegister:f(a),width:800,title:"离职交接",onOk:B}),{default:S(()=>[j(f(N),{onRegister:f(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}}));export{oe as _};