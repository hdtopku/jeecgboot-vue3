var B=(e,u,l)=>new Promise((r,p)=>{var c=o=>{try{n(l.next(o))}catch(i){p(i)}},t=o=>{try{n(l.throw(o))}catch(i){p(i)}},n=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,t);n((l=l.apply(e,u)).next())});import{B as h}from"./BasicForm.0e850cba.js";import"./componentMap.c8679e96.js";import{u as f}from"./useForm.8e9d7e3a.js";import"./JAddInput.09222b6f.js";import{j as C,dB as F,aX as P,q as g,r as m,s as _,Q as k,w as s,aW as w,v as a,y as d}from"./index.25572ab7.js";import{a as W}from"./index.2eb12fc8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./index.117f635e.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./functional.ad7cd28c.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./api.c80928e5.js";import"./index.23d6b964.js";import"./areaDataUtil.91d1dc96.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";const{hasPermission:A}=P(),b=[{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",defaultValue:!0,colProps:{span:12},labelWidth:200},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},show:({values:e})=>A("test001")},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",defaultValue:!0,colProps:{span:12},labelWidth:200},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12},ifShow:({values:e})=>!!e.field6},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:12},labelWidth:200},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:12},dynamicDisabled:({values:e})=>!!e.field7},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:12},labelWidth:200},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:12},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}}],v=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:u=>{e.f2=u.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:u}=e,l=yield u();console.log(l)})})}],y=C({components:{BasicForm:h,CollapseContainer:F,PageWrapper:W},setup(){const[e,{setProps:u,updateSchema:l,appendSchemaByField:r,removeSchemaByFiled:p}]=f({labelWidth:120,schemas:b,disabled:!0,labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:v,actionColOptions:{span:24}});function t(){l({field:"field3",label:"\u5B57\u6BB53 New"})}function n(){l([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){r({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function i(){p("field11")}return{register:e,register1:c,schemas:b,setProps:u,changeLabel3:t,changeLabel34:n,appendField:o,deleteField:i}}}),D={class:"mb-4"};function E(e,u,l,r,p,c){const t=m("a-button"),n=m("BasicForm"),o=m("CollapseContainer"),i=m("PageWrapper");return _(),k(i,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:s(()=>[w("div",D,[a(t,{onClick:e.changeLabel3,class:"mr-2"},{default:s(()=>[d(" \u66F4\u6539\u5B57\u6BB53label ")]),_:1},8,["onClick"]),a(t,{onClick:e.changeLabel34,class:"mr-2"},{default:s(()=>[d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label ")]),_:1},8,["onClick"]),a(t,{onClick:e.appendField,class:"mr-2"},{default:s(()=>[d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 ")]),_:1},8,["onClick"]),a(t,{onClick:e.deleteField,class:"mr-2"},{default:s(()=>[d(" \u5220\u9664\u5B57\u6BB511 ")]),_:1},8,["onClick"])]),a(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register},null,8,["onRegister"])]),_:1}),a(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const fe=g(y,[["render",E]]);export{fe as default};