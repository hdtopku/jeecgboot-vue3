var Z=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var A=(n,e,o)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,E=(n,e)=>{for(var o in e||(e={}))ot.call(e,o)&&A(n,o,e[o]);if(y)for(var o of y(e))nt.call(e,o)&&A(n,o,e[o]);return n},k=(n,e)=>tt(n,et(e));var d=(n,e,o)=>new Promise((f,_)=>{var F=a=>{try{s(o.next(a))}catch(c){_(c)}},g=a=>{try{s(o.throw(a))}catch(c){_(c)}},s=a=>a.done?f(a.value):Promise.resolve(a.value).then(F,g);s((o=o.apply(n,e)).next())});import ut from"./BasicTable.4f050cd0.js";import{T as it}from"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import"./index.fa33ec21.js";import{useListPage as at}from"./useListPage.30b1ebd9.js";import{_ as rt}from"./TemplateModal.vue_vue_type_script_setup_true_lang.72131283.js";import{_ as st}from"./TemplateTestModal.vue_vue_type_script_setup_true_lang.b32e983c.js";import{l as lt,c as pt,d as mt,A as S,s as v,e as ct}from"./template.api.cd53531b.js";import{j as T,bI as x,m as dt,r as m,s as R,t as _t,v as u,w as r,y as B,K as i,Q as ft,R as Ft,B as gt,aW as M,ac as Ct,u as wt}from"./index.9d4ffdff.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";import"./useTable.06d516c7.js";import"./validator.5f3e0429.js";import"./user.api.649c11d7.js";const Bt=M("span",null,"\u5220\u9664",-1),bt=M("span",null,"\u6279\u91CF\u64CD\u4F5C",-1),Dt=T({name:"message-template"}),ge=T(k(E({},Dt),{setup(n){const{createMessage:e}=wt(),{prefixCls:o,onExportXls:f,onImportXls:_,tableContext:F}=at({designScope:"message-template",tableProps:{title:"\u6D88\u606F\u4E2D\u5FC3\u6A21\u677F\u5217\u8868\u6570\u636E",api:lt,columns:pt,formConfig:{schemas:mt}},exportConfig:{url:S.exportXls,name:"\u6D88\u606F\u4E2D\u5FC3\u6A21\u677F\u5217\u8868"},importConfig:{url:S.importXls,success:()=>s()}}),[g,{reload:s,setLoading:a},{rowSelection:c,selectedRowKeys:C,selectedRows:I}]=F,[U,{openModal:w}]=x(),[N,j]=x(),V=dt(()=>C.value.length>0);function X(){w(!0,{title:"\u65B0\u589E\u6D88\u606F\u6A21\u677F",isUpdate:!1,showFooter:!0,record:{}})}function L(t){if(t.useStatus==="1"){e.warning("\u6B64\u6A21\u677F\u5DF2\u88AB\u5E94\u7528\uFF0C\u7981\u6B62\u7F16\u8F91!");return}w(!0,{title:"\u4FEE\u6539\u6D88\u606F\u6A21\u677F",isUpdate:!0,record:t,showFooter:!0})}function K(t){if(t){if(t.useStatus=="1"){e.warning("\u8BE5\u6A21\u677F\u5DF2\u88AB\u5E94\u7528\u7981\u6B62\u5220\u9664!");return}b([t.id],!1)}}function b(t,p=!0){return d(this,null,function*(){const l=i(t);if(l.length>0)try{a(!0),yield ct({ids:l.join(",")},p),yield s()}finally{a(!1)}})}function P(){return d(this,null,function*(){try{if(Ct(I.value).filter(l=>l.useStatus=="1").length>0){e.warning("\u9009\u4E2D\u7684\u6A21\u677F\u5DF2\u88AB\u5E94\u7528\u7981\u6B62\u5220\u9664!");return}yield b(C),C.value=[]}finally{}})}function $(t){j.openModal(!0,{record:t})}function z(t){return[{label:"\u67E5\u770B",onClick:q.bind(null,t)},{label:"\u7F16\u8F91",onClick:L.bind(null,t)}]}function O(t){return[{label:"\u5E94\u7528",onClick:Q.bind(null,t)},{label:"\u505C\u7528",onClick:W.bind(null,t)},{label:"\u53D1\u9001\u6D4B\u8BD5",onClick:$.bind(null,t)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F",confirm:K.bind(null,t)}}]}function Q(t){return d(this,null,function*(){let p={id:t.id,useStatus:"1"};yield v(p,!0),yield s()})}function W(t){return d(this,null,function*(){let p={id:t.id,useStatus:"0"};yield v(p,!0),yield s()})}function q(t){w(!0,{isUpdate:!0,showFooter:!1,record:t})}return(t,p)=>{const l=m("a-button"),G=m("j-upload-button"),D=m("Icon"),H=m("a-menu-item"),J=m("a-menu"),Y=m("a-dropdown");return R(),_t("div",{class:gt(i(o))},[u(i(ut),{onRegister:i(g),rowSelection:i(c)},{tableTitle:r(()=>[u(l,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:X},{default:r(()=>[B("\u65B0\u589E")]),_:1}),u(l,{type:"primary",preIcon:"ant-design:export-outlined",onClick:i(f)},{default:r(()=>[B(" \u5BFC\u51FA")]),_:1},8,["onClick"]),u(G,{type:"primary",preIcon:"ant-design:import-outlined",onClick:i(_)},{default:r(()=>[B("\u5BFC\u5165")]),_:1},8,["onClick"]),V.value?(R(),ft(Y,{key:0},{overlay:r(()=>[u(J,null,{default:r(()=>[u(H,{key:"1",onClick:P},{default:r(()=>[u(D,{icon:"ant-design:delete-outlined"}),Bt]),_:1})]),_:1})]),default:r(()=>[u(l,null,{default:r(()=>[bt,u(D,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Ft("",!0)]),action:r(({record:h})=>[u(i(it),{actions:z(h),dropDownActions:O(h)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),u(rt,{onRegister:i(U),onSuccess:i(s)},null,8,["onRegister","onSuccess"]),u(st,{onRegister:i(N)},null,8,["onRegister"])],2)}}}));export{ge as default};