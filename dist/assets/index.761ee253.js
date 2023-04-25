var A=Object.defineProperty,x=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&g(e,o,t[o]);if(f)for(var o of f(t))P.call(t,o)&&g(e,o,t[o]);return e},B=(e,t)=>x(e,v(t));import H from"./BasicTable.6f8187cc.js";import{T as N}from"./componentMap.a24260de.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import S from"./DetailModal.e1dcdcbd.js";import{g as k,e as D,s as F,a as Y,r as L}from"./mynews.api.6c80f36d.js";import{render as s}from"./renderUtils.1494c29f.js";import{j as M,k as O,C as h,bI as U,D as V,X as j,r as G,s as K,t as X,v as u,w as p,y as q,K as l}from"./index.b3c2d15d.js";import"./index.c08fb6c5.js";import{useListPage as z}from"./useListPage.2b7a424e.js";import{u as J}from"./useSysMessage.6d73f247.js";import"./BasicForm.1d30e5fc.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JAddInput.eb06f3b7.js";import"./areaDataUtil.26505ac2.js";import"./api.363f3378.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./useForm.853cc25f.js";import"./index.82bab5e4.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./RedoOutlined.66bed16b.js";import"./useTable.f4111a7b.js";const Q=[{title:"\u6807\u9898",dataIndex:"titile",width:100,align:"left"},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"msgCategory",width:80,customRender:({text:e})=>s.renderDictNative(e,[{label:"\u901A\u77E5\u516C\u544A",value:"1",color:"blue"},{label:"\u7CFB\u7EDF\u6D88\u606F",value:"2"}],!0)},{title:"\u53D1\u5E03\u4EBA",dataIndex:"sender",width:80},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"sendTime",width:80},{title:"\u4F18\u5148\u7EA7",dataIndex:"priority",width:80,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return s.renderTag(s.renderDict(e,"priority"),t)}},{title:"\u9605\u8BFB\u72B6\u6001",dataIndex:"readFlag",width:80,customRender:({text:e})=>s.renderDictNative(e,[{label:"\u672A\u8BFB",value:"0",color:"red"},{label:"\u5DF2\u8BFB",value:"1"}],!0)}],W=[{field:"titile",label:"\u6807\u9898",component:"Input",colProps:{span:8}},{field:"sender",label:"\u53D1\u5E03\u4EBA",component:"Input",colProps:{span:8}}],Z=M({name:"monitor-mynews"}),Je=M(B(b({},Z),{setup(e){O(),h([]),h({});const t={logType:"1"},[o,{openModal:d}]=U(),c=V(),{goPage:_}=J(),{prefixCls:$,tableContext:C}=z({designScope:"mynews-list",tableProps:{title:"\u6211\u7684\u6D88\u606F",api:k,columns:Q,formConfig:{schemas:W,fieldMapToTime:[["fieldTime",["createTime_begin","createTime_end"],"YYYY-MM-DD HH:mm:ss"]]}}}),[I,{reload:m}]=C;function T(r){return[{label:"\u67E5\u770B",onClick:w.bind(null,r)}]}function w(r){let i=r.anntId;D({anntId:i}).then(a=>{m(),F({anntId:i})}),_(r,()=>{d(!0,{record:r,isUpdate:!0})})}function y(){L({},m)}j(()=>{E()});function E(){let r=c.getMessageHrefParams;if(r){let i=r.id;i&&D({anntId:i}).then(()=>{m(),F({anntId:i})});let n=r.detailId;n&&Y(n).then(a=>{console.log("getOne",a),d(!0,{record:a,isUpdate:!0}),c.setMessageHrefParams("")})}}return(r,i)=>{const n=G("a-button");return K(),X("div",null,[u(l(H),{onRegister:l(I),searchInfo:t},{tableTitle:p(()=>[u(n,{type:"primary",onClick:y},{default:p(()=>[q("\u5168\u90E8\u6807\u6CE8\u5DF2\u8BFB")]),_:1})]),action:p(({record:a})=>[u(l(N),{actions:T(a)},null,8,["actions"])]),_:1},8,["onRegister"]),u(S,{onRegister:l(o)},null,8,["onRegister"])])}}}));export{Je as default};