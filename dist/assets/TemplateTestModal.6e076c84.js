var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,g=(r,o)=>{for(var t in o||(o={}))h.call(o,t)&&f(r,t,o[t]);if(d)for(var t of d(o))w.call(o,t)&&f(r,t,o[t]);return r};var c=(r,o,t)=>new Promise((n,p)=>{var l=e=>{try{i(t.next(e))}catch(s){p(s)}},u=e=>{try{i(t.throw(e))}catch(s){p(s)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,u);i((t=t.apply(r,o)).next())});import{B as M}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as F}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{l as y,bG as R,L as m,v as T,V as b,z as k,y as v,B as D}from"./index.3bed7968.js";import{B as L}from"./index.2b083806.js";import{a as S,b as V}from"./template.api.ad996d11.js";import"./uniqBy.be18330d.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useFormItem.1483bf1f.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./api.9041b4ca.js";import"./index.e7272bc8.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./validator.01907e0c.js";import"./user.api.c3bf9153.js";const ft=y({__name:"TemplateTestModal",emits:["register"],setup(r,{emit:o}){const[t,{resetFields:n,setFieldsValue:p,validate:l,updateSchema:u}]=F({schemas:S,showActionButtonGroup:!1}),[i,{setModalProps:e,closeModal:s}]=R(a=>c(this,null,function*(){yield n(),yield p(g({},m(a.record)))}));function B(){return c(this,null,function*(){try{const a=yield l();e({confirmLoading:!0}),yield V(a),s()}finally{e({confirmLoading:!1})}})}return(a,x)=>(T(),b(m(L),D({onRegister:m(i),title:"\u53D1\u9001\u6D4B\u8BD5",width:800},a.$attrs,{onOk:B}),{default:k(()=>[v(m(M),{onRegister:m(t)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{ft as default};