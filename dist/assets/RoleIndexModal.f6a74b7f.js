var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,B=(t,e)=>{for(var o in e||(e={}))F.call(e,o)&&h(t,o,e[o]);if(g)for(var o of g(e))_.call(e,o)&&h(t,o,e[o]);return t};var c=(t,e,o)=>new Promise((d,l)=>{var n=r=>{try{s(o.next(r))}catch(a){l(a)}},u=r=>{try{s(o.throw(r))}catch(a){l(a)}},s=r=>r.done?d(r.value):Promise.resolve(r.value).then(n,u);s((o=o.apply(t,e)).next())});import{B as y}from"./index.ea6d1b33.js";import{B as C}from"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import{u as x}from"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import{l as M,F as R,bG as I,L as p,v as L,V as b,z as k,y as U,B as V}from"./index.a1b4e527.js";import{r as G}from"./role.data.81d7af18.js";import{f as O,h as P}from"./role.api.e6825f1a.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./uniqBy.cec7465a.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./api.d480aed7.js";import"./index.b1e57df7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";const Bo=M({__name:"RoleIndexModal",emits:["register","success"],setup(t,{emit:e}){const o=R(!0),[d,{resetFields:l,setFieldsValue:n,validate:u}]=x({labelWidth:150,schemas:G,showActionButtonGroup:!1}),[s,{setModalProps:r,closeModal:a}]=I(m=>c(this,null,function*(){var f;yield l(),r({confirmLoading:!1}),n({roleCode:m.roleCode});let i=yield O({roleCode:m.roleCode});o.value=!!((f=i.result)!=null&&f.id),p(o)&&(yield n(B({},i.result)))}));function v(m){return c(this,null,function*(){try{let i=yield u();r({confirmLoading:!0}),yield P(i,o.value),a(),e("success",{isUpdate:o.value,values:i})}finally{r({confirmLoading:!1})}})}return(m,i)=>(L(),b(p(y),V(m.$attrs,{onRegister:p(s),title:"\u9996\u9875\u914D\u7F6E",onOk:v,width:"40%"}),{default:k(()=>[U(p(C),{onRegister:p(d)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{Bo as default};