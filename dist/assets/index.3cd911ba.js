import{B as c}from"./componentMap.87abb767.js";import{j as l,bG as i,u as d,q as g,r,s as f,Q as B,w as F,v as e}from"./index.639f1d60.js";import{B as _}from"./BasicForm.2046d1b4.js";import{u as A}from"./useForm.26a3a85b.js";import"./JAddInput.da07cc21.js";import{a as C}from"./index.e06f25f1.js";import{u as m}from"./upload.58be01b8.js";import"./useFormItem.6352fd1e.js";import"./index.4727c32e.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./api.79286c6b.js";import"./index.28e29a88.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./areaDataUtil.e23f696d.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";import"./useContentHeight.63cba167.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=l({components:{BasicUpload:c,BasicForm:_,PageWrapper:C,[i.name]:i},setup(){const{createMessage:o}=d(),[t]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:t}}});function P(o,t,p,$,b,x){const a=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[e(a,{message:"\u57FA\u7840\u793A\u4F8B"}),e(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),e(a,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),e(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}const co=g(E,[["render",P]]);export{co as default};