var _=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,g=(t,r)=>{for(var o in r||(r={}))w.call(r,o)&&f(t,o,r[o]);if(d)for(var o of d(r))v.call(r,o)&&f(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((a,n)=>{var c=e=>{try{p(o.next(e))}catch(m){n(m)}},l=e=>{try{p(o.throw(e))}catch(m){n(m)}},p=e=>e.done?a(e.value):Promise.resolve(e.value).then(c,l);p((o=o.apply(t,r)).next())});import{B as M}from"./index.6aad32b5.js";import{B as y}from"./BasicForm.638a5420.js";import"./helper.df0282ae.js";import{u as b}from"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import{l as C,bi as I,F as L,bG as R,L as s,o as k,v as O,V as U,z as V,y as x,B as G}from"./index.a86a095a.js";import{e as P,s as S}from"./erplist.api.127aea3f.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./uniqBy.37746f07.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";import"./renderUtils.54699d77.js";const _o=C({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(t,{emit:r}){const o=I("orderId")||"",a=L(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=b({labelWidth:150,schemas:P,showActionButtonGroup:!1}),[e,{setModalProps:m,closeModal:B}]=R(i=>u(this,null,function*(){yield c(),m({confirmLoading:!1}),a.value=!!(i!=null&&i.isUpdate),s(a)&&(yield l(g({},i.record)))})),F=k(()=>s(a)?"\u7F16\u8F91":"\u65B0\u589E");function h(){return u(this,null,function*(){try{const i=yield p();m({confirmLoading:!0}),s(o)&&(i.orderId=s(o)),yield S(i,a.value),B(),r("success")}finally{m({confirmLoading:!1})}})}return(i,j)=>(O(),U(s(M),G(i.$attrs,{onRegister:s(e),title:s(F),onOk:h,width:700}),{default:V(()=>[x(s(y),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{_o as default};