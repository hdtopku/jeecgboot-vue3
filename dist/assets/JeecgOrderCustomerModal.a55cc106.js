var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,g=(t,r)=>{for(var o in r||(r={}))w.call(r,o)&&f(t,o,r[o]);if(d)for(var o of d(r))v.call(r,o)&&f(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((a,n)=>{var c=e=>{try{p(o.next(e))}catch(m){n(m)}},l=e=>{try{p(o.throw(e))}catch(m){n(m)}},p=e=>e.done?a(e.value):Promise.resolve(e.value).then(c,l);p((o=o.apply(t,r)).next())});import{B as M}from"./index.1660bc1f.js";import{B as y}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as b}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{l as C,bi as I,F as L,bG as R,L as s,o as k,v as O,V as U,z as V,y as x,B as G}from"./index.23784a6b.js";import{e as P,s as S}from"./erplist.api.09f97687.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./uniqBy.d45e63ad.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./renderUtils.3022a5f1.js";const _o=C({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(t,{emit:r}){const o=I("orderId")||"",a=L(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=b({labelWidth:150,schemas:P,showActionButtonGroup:!1}),[e,{setModalProps:m,closeModal:B}]=R(i=>u(this,null,function*(){yield c(),m({confirmLoading:!1}),a.value=!!(i!=null&&i.isUpdate),s(a)&&(yield l(g({},i.record)))})),F=k(()=>s(a)?"\u7F16\u8F91":"\u65B0\u589E");function h(){return u(this,null,function*(){try{const i=yield p();m({confirmLoading:!0}),s(o)&&(i.orderId=s(o)),yield S(i,a.value),B(),r("success")}finally{m({confirmLoading:!1})}})}return(i,j)=>(O(),U(s(M),G(i.$attrs,{onRegister:s(e),title:s(F),onOk:h,width:700}),{default:V(()=>[x(s(y),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{_o as default};