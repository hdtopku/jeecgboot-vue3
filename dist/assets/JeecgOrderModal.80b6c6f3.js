var F=Object.defineProperty;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&d(e,o,t[o]);if(f)for(var o of f(t))w.call(t,o)&&d(e,o,t[o]);return e};var u=(e,t,o)=>new Promise((n,p)=>{var c=r=>{try{m(o.next(r))}catch(a){p(a)}},l=r=>{try{m(o.throw(r))}catch(a){p(a)}},m=r=>r.done?n(r.value):Promise.resolve(r.value).then(c,l);m((o=o.apply(e,t)).next())});import{B as v}from"./index.1660bc1f.js";import{B as M}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as y}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{l as L,F as R,bG as b,L as s,o as k,v as O,V as U,z as V,y as x,B as C}from"./index.23784a6b.js";import{p as G,q as P}from"./erplist.api.09f97687.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./uniqBy.d45e63ad.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./renderUtils.3022a5f1.js";const ho=L({__name:"JeecgOrderModal",emits:["success","register"],setup(e,{emit:t}){const o=R(!0),[n,{resetFields:p,setFieldsValue:c,validate:l}]=y({labelWidth:150,schemas:G,showActionButtonGroup:!1}),[m,{setModalProps:r,closeModal:a}]=b(i=>u(this,null,function*(){yield p(),r({confirmLoading:!1}),o.value=!!(i!=null&&i.isUpdate),s(o)&&(yield c(g({},i.record)))})),B=k(()=>s(o)?"\u7F16\u8F91":"\u65B0\u589E");function h(){return u(this,null,function*(){try{const i=yield l();r({confirmLoading:!0}),yield P(i,o.value),a(),t("success")}finally{r({confirmLoading:!1})}})}return(i,S)=>(O(),U(s(v),C(i.$attrs,{onRegister:s(m),title:s(B),onOk:h,width:700}),{default:V(()=>[x(s(M),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{ho as default};