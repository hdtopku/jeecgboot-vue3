import{B as l}from"./index.2b083806.js";import{B as c}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as d}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{l as u,F as f,bG as B,q as g,Q as h,t as n,v as _,V as b,z as V,aV as C,y as v,B as F}from"./index.3bed7968.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./uniqBy.be18330d.js";import"./useFormItem.1483bf1f.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./api.9041b4ca.js";import"./index.e7272bc8.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],R=u({components:{BasicModal:l,BasicForm:c},props:{userData:{type:Object}},setup(e){const t=f({}),[i,{}]=d({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=B(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:p,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=n("BasicForm"),m=n("BasicModal");return _(),b(m,F(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:V(()=>[C("div",M,[v(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var io=g(R,[["render",D]]);export{io as default};