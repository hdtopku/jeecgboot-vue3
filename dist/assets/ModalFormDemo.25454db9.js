import{B as s}from"./BasicForm.2046d1b4.js";import"./componentMap.87abb767.js";import{u as n}from"./useForm.26a3a85b.js";import"./JAddInput.da07cc21.js";import{j as a,Z as l,f2 as c,r as u,s as d,t as f,v as F}from"./index.639f1d60.js";import{p as g}from"./pick.5c5b7fa5.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./index.4727c32e.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./api.79286c6b.js";import"./index.28e29a88.js";import"./areaDataUtil.e23f696d.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";const h=()=>[{field:"name",component:"Input",label:"\u540D\u79F0"},{field:"age",component:"InputNumber",label:"\u5E74\u9F84",componentProps:{style:{width:"100%"}}},{field:"sex",label:"\u6027\u522B",component:"JDictSelectTag",componentProps:{dictCode:"sex"}},{field:"birthday",component:"DatePicker",label:"\u751F\u65E5",componentProps:{valueFormat:"YYYY-MM-DD",style:{width:"100%"}}},{field:"email",component:"Input",label:"\u90AE\u7BB1"}],B=a({components:{BasicForm:s},props:["id"],setup(o){const[e,{setFieldsValue:r}]=n({schemas:h(),showActionButtonGroup:!1,baseColProps:{span:24}});let m={id:o.id};return l.get({url:"/test/jeecgDemo/queryById",params:m},{isTransformResponse:!1}).then(t=>{if(t.success){let p=g(t.result,"name","age","birthday","sex","email");r(p)}}),{registerForm:e}}}),_={style:{margin:"50px auto",width:"800px"}};function b(o,e,r,m,t,p){const i=u("BasicForm");return d(),f("div",_,[F(i,{onRegister:o.registerForm},null,8,["onRegister"])])}var po=c(B,[["render",b]]);export{po as default};