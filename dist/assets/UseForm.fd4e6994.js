import{B}from"./BasicForm.0e850cba.js";import"./componentMap.c8679e96.js";import{u as F}from"./useForm.8e9d7e3a.js";import"./JAddInput.09222b6f.js";import{j as P,dB as b,u as E,q as v,r as n,s as k,Q as c,w as t,aW as a,v as s,y as l}from"./index.25572ab7.js";import{a as $}from"./index.2eb12fc8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./index.117f635e.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./functional.ad7cd28c.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./api.c80928e5.js";import"./index.23d6b964.js";import"./areaDataUtil.91d1dc96.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{console.log(e)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",componentProps:{valueType:"Date"},colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],D=P({components:{BasicForm:B,CollapseContainer:b,PageWrapper:$},setup(){const{createMessage:e}=E(),[o,{setProps:i}]=F({labelWidth:120,schemas:m,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});return{register:o,schemas:m,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},setProps:i}}}),A={class:"mb-4"},g={class:"mb-4"};function S(e,o,i,p,w,W){const u=n("a-button"),d=n("BasicForm"),f=n("CollapseContainer"),C=n("PageWrapper");return k(),c(C,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[a("div",A,[s(u,{onClick:o[0]||(o[0]=r=>e.setProps({labelWidth:150})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539labelWidth ")]),_:1}),s(u,{onClick:o[1]||(o[1]=r=>e.setProps({labelWidth:120})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FlabelWidth ")]),_:1}),s(u,{onClick:o[2]||(o[2]=r=>e.setProps({size:"large"})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539Size ")]),_:1}),s(u,{onClick:o[3]||(o[3]=r=>e.setProps({size:"default"})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FSize ")]),_:1}),s(u,{onClick:o[4]||(o[4]=r=>e.setProps({disabled:!0})),class:"mr-2"},{default:t(()=>[l(" \u7981\u7528\u8868\u5355 ")]),_:1}),s(u,{onClick:o[5]||(o[5]=r=>e.setProps({disabled:!1})),class:"mr-2"},{default:t(()=>[l(" \u89E3\u9664\u7981\u7528 ")]),_:1}),s(u,{onClick:o[6]||(o[6]=r=>e.setProps({compact:!0})),class:"mr-2"},{default:t(()=>[l(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),s(u,{onClick:o[7]||(o[7]=r=>e.setProps({compact:!1})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),s(u,{onClick:o[8]||(o[8]=r=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:t(()=>[l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),a("div",g,[s(u,{onClick:o[9]||(o[9]=r=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),s(u,{onClick:o[10]||(o[10]=r=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),s(u,{onClick:o[11]||(o[11]=r=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),s(u,{onClick:o[12]||(o[12]=r=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),s(u,{onClick:o[13]||(o[13]=r=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),s(u,{onClick:o[14]||(o[14]=r=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),s(u,{onClick:o[15]||(o[15]=r=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),s(u,{onClick:o[16]||(o[16]=r=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1})]),s(f,{title:"useForm\u793A\u4F8B"},{default:t(()=>[s(d,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}const Co=v(D,[["render",S]]);export{Co as default};