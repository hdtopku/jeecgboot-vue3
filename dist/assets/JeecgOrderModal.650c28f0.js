var A=Object.defineProperty;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var B=(r,o,e)=>o in r?A(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,b=(r,o)=>{for(var e in o||(o={}))M.call(o,e)&&B(r,e,o[e]);if(f)for(var e of f(o))v.call(o,e)&&B(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((a,p)=>{var l=t=>{try{u(e.next(t))}catch(m){p(m)}},n=t=>{try{u(e.throw(t))}catch(m){p(m)}},u=t=>t.done?a(t.value):Promise.resolve(t.value).then(l,n);u((e=e.apply(r,o)).next())});import{B as w}from"./index.4727c32e.js";import{B as D}from"./BasicForm.2046d1b4.js";import"./componentMap.87abb767.js";import{u as _}from"./useForm.26a3a85b.js";import"./JAddInput.da07cc21.js";import{j as y,C,bH as I,K as i,m as P,s as k,Q as x,w as R,v as Y,x as E,Z as L}from"./index.639f1d60.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./api.79286c6b.js";import"./index.28e29a88.js";import"./areaDataUtil.e23f696d.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";const be=y({__name:"JeecgOrderModal",emits:["register","success"],setup(r,{emit:o}){const e=C(!0),[a,{resetFields:p,setFieldsValue:l,validate:n}]=_({labelWidth:150,schemas:[{field:"orderCode",label:"\u8BA2\u5355\u53F7",component:"Input",required:!0},{field:"ctype",label:"\u8BA2\u5355\u7C7B\u578B",component:"Select",componentProps:{options:[{label:"\u56FD\u5185\u8BA2\u5355",value:"1"},{label:"\u56FD\u9645\u8BA2\u5355",value:"2"}]}},{field:"orderDate",label:"\u8BA2\u5355\u65E5\u671F",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD hh:mm:ss"}},{field:"orderMoney",label:"\u8BA2\u5355\u91D1\u989D",component:"InputNumber"},{field:"content",label:"\u8BA2\u5355\u5907\u6CE8",component:"Input"},{field:"id",label:"id",component:"Input",show:!1}],showActionButtonGroup:!1}),[u,{setModalProps:t,closeModal:m}]=I(s=>c(this,null,function*(){yield p(),t({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate),i(e)&&(yield l(b({},s.record)))})),g=P(()=>i(e)?"\u7F16\u8F91\u8BA2\u5355":"\u65B0\u589E\u8BA2\u5355");function F(s){return c(this,null,function*(){try{let d=yield n();t({confirmLoading:!0});let h=i(e)?"/test/order/edit":"/test/order/add";L.post({url:h,params:d}),m(),o("success")}finally{t({confirmLoading:!1})}})}return(s,d)=>(k(),x(i(w),E(s.$attrs,{onRegister:i(u),title:i(g),onOk:F,width:"700px"}),{default:R(()=>[Y(i(D),{onRegister:i(a)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{be as default};