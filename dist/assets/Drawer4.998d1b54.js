import{B as a,u as n}from"./index.2f5d3d5b.js";import{B as c}from"./BasicForm.1d30e5fc.js";import"./componentMap.a24260de.js";import{u as l}from"./useForm.853cc25f.js";import"./JAddInput.eb06f3b7.js";import{j as u,q as f,r as i,s as d,Q as B,w,aW as _,v as g,x as F}from"./index.b3c2d15d.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./index.c08fb6c5.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./api.363f3378.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./areaDataUtil.26505ac2.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";const s=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],h=u({components:{BasicDrawer:a,BasicForm:c},setup(){const[o,{setFieldsValue:t}]=l({labelWidth:120,schemas:s,showActionButtonGroup:!1,actionColOptions:{span:24}}),[e]=n(r=>{t({field2:r.data,field1:r.info})});return{register:e,schemas:s,registerForm:o}}});function D(o,t,e,r,$,C){const p=i("BasicForm"),m=i("BasicDrawer");return d(),B(m,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:w(()=>[_("div",null,[g(p,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const so=f(h,[["render",D]]);export{so as default};