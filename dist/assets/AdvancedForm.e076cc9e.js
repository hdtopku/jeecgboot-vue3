import{B as c}from"./BasicForm.2046d1b4.js";import"./componentMap.87abb767.js";import{u as a}from"./useForm.26a3a85b.js";import"./JAddInput.da07cc21.js";import{j as B,dB as d,q as f,r as n,s as b,Q as h,w as r,v as t}from"./index.639f1d60.js";import{a as C}from"./index.e06f25f1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./index.4727c32e.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./api.79286c6b.js";import"./index.28e29a88.js";import"./areaDataUtil.e23f696d.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";import"./useContentHeight.63cba167.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";const s=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function P(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=B({components:{BasicForm:c,CollapseContainer:d,PageWrapper:C},setup(){const[o]=a({labelWidth:120,schemas:s(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[l]=a({labelWidth:120,schemas:[...s(),...P(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:l}}});function g(o,p,l,e,_,A){const u=n("BasicForm"),i=n("CollapseContainer"),m=n("PageWrapper");return b(),h(m,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:r(()=>[t(i,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:r(()=>[t(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(i,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:r(()=>[t(u,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}const uo=f(F,[["render",g]]);export{uo as default};