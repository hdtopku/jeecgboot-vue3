import{B as c}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as i}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{q as B,l as d,dw as f,t as n,v as b,V as h,z as r,y as t}from"./index.3bed7968.js";import{a as C}from"./index.e57fdc92.js";import"./uniqBy.be18330d.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useFormItem.1483bf1f.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./api.9041b4ca.js";import"./index.e7272bc8.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./useContentHeight.2c22b941.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";const s=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function P(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:C},setup(){const[o]=i({labelWidth:120,schemas:s(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[l]=i({labelWidth:120,schemas:[...s(),...P(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:l}}});function g(o,p,l,e,_,A){const u=n("BasicForm"),a=n("CollapseContainer"),m=n("PageWrapper");return b(),h(m,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:r(()=>[t(a,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:r(()=>[t(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(a,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:r(()=>[t(u,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var ro=B(F,[["render",g]]);export{ro as default};