var g=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(u,o,e)=>o in u?g(u,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[o]=e,B=(u,o)=>{for(var e in o||(o={}))w.call(o,e)&&d(u,e,o[e]);if(f)for(var e of f(o))k.call(o,e)&&d(u,e,o[e]);return u};var F=(u,o,e)=>new Promise((m,n)=>{var l=r=>{try{s(e.next(r))}catch(p){n(p)}},a=r=>{try{s(e.throw(r))}catch(p){n(p)}},s=r=>r.done?m(r.value):Promise.resolve(r.value).then(l,a);s((e=e.apply(u,o)).next())});import{B as A}from"./index.ea6d1b33.js";import{B as C}from"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import{u as b}from"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import{l as D,F as v,bG as _,L as i,o as x,v as y,V as I,z as L,y as P,B as M}from"./index.a1b4e527.js";import{s as T}from"./AmLink.api.41cc94ba.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./uniqBy.cec7465a.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./api.d480aed7.js";import"./index.b1e57df7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";const R=[{label:"",field:"id",component:"Input",show:!1},{label:"\u6FC0\u6D3B\u94FE",field:"link",component:"InputTextArea",componentProps:{placeholder:"\u77ED\u94FE\u3001\u6216https://itunes.apple.com..."}},{label:"\u9884\u5B58",field:"email",component:"InputTextArea",componentProps:{placeholder:"\u53EF\u590D\u5236\uFF0C\u5982\u90AE\u7BB1\u3001\u77ED\u94FE\u3001\u6FC0\u6D3B\u94FE\u7B49"}},{label:"\u957F\u94FE\u63A5",field:"longLink",component:"InputTextArea",componentProps:{placeholder:"https://email.myunidays.uk..."}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea",componentProps:{placeholder:"\u91CD\u8981\u7684\u4FE1\u606F"}},{label:"\u9884\u5B58",field:"thirdLink",component:"InputTextArea",componentProps:{placeholder:"\u53EF\u590D\u5236\uFF0C\u5982\u90AE\u7BB1\u3001\u77ED\u94FE\u3001\u6FC0\u6D3B\u94FE\u7B49"}}],de=D({__name:"AmLinkModal",emits:["register","success"],setup(u,{emit:o}){const e=v(!0),[m,{resetFields:n,setFieldsValue:l,validate:a}]=b({labelWidth:150,schemas:R,showActionButtonGroup:!1}),[s,{setModalProps:r,closeModal:p}]=_(t=>F(this,null,function*(){yield n(),r({confirmLoading:!1,showCancelBtn:t==null?void 0:t.showFooter,showOkBtn:t==null?void 0:t.showFooter}),e.value=!!(t!=null&&t.isUpdate),i(e)&&(yield l(B({},t.record)))})),h=x(()=>i(e)?"\u7F16\u8F91":"\u65B0\u589E");function E(t){return F(this,null,function*(){try{let c=yield a();r({confirmLoading:!0}),yield T(c,e.value),p(),o("success",{isUpdate:e.value,values:c})}finally{r({confirmLoading:!1})}})}return(t,c)=>(y(),I(i(A),M(t.$attrs,{onRegister:i(s),title:i(h),onOk:E,width:"96%"}),{default:L(()=>[P(i(C),{onRegister:i(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{de as default};