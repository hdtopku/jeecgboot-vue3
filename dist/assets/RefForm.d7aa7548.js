import{B as C}from"./BasicForm.e500713f.js";import"./helper.15e1830a.js";import{q as B,l as c,dz as E,F,t as i,v as b,V as P,z as e,aU as a,y as s,u as v,C as l}from"./index.6c1aeca2.js";import"./JAddInput.5c78e955.js";import{a as k}from"./index.866fff1a.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{console.log(t)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=F(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:r=>{o.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=t.value;!p||p.setProps(r)}}}}),D={class:"mb-4"},A=l(" \u66F4\u6539labelWidth "),g=l(" \u8FD8\u539FlabelWidth "),S=l(" \u66F4\u6539Size "),h=l(" \u8FD8\u539FSize "),w=l(" \u7981\u7528\u8868\u5355 "),W=l(" \u89E3\u9664\u7981\u7528 "),R=l(" \u7D27\u51D1\u8868\u5355 "),z=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),N=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),O={class:"mb-4"},y=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),G=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),M=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),q=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),J=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),T=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function U(t,o,r,p,j,H){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),P(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=n=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=n=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=n=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=n=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=n=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=n=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=n=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=n=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=n=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[N]),_:1})]),a("div",O,[s(u,{onClick:o[9]||(o[9]=n=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[10]||(o[10]=n=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[G]),_:1}),s(u,{onClick:o[11]||(o[11]=n=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=n=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=n=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[14]||(o[14]=n=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[q]),_:1}),s(u,{onClick:o[15]||(o[15]=n=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[16]||(o[16]=n=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[T]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var wo=B($,[["render",U]]);export{wo as default};