var Z=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var v=(n,e,o)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,D=(n,e)=>{for(var o in e||(e={}))ot.call(e,o)&&v(n,o,e[o]);if(x)for(var o of x(e))nt.call(e,o)&&v(n,o,e[o]);return n},R=(n,e)=>tt(n,et(e));var d=(n,e,o)=>new Promise((_,f)=>{var g=r=>{try{l(o.next(r))}catch(u){f(u)}},w=r=>{try{l(o.throw(r))}catch(u){f(u)}},l=r=>r.done?_(r.value):Promise.resolve(r.value).then(g,w);l((o=o.apply(n,e)).next())});import it from"./BasicTable-f6cf85af.js";import{Q as at}from"./componentMap-da21b34e.js";import"./useTable-20c32c9e.js";import"./index-465fff25.js";import{useListPage as rt}from"./useListPage-b93a4fee.js";import{_ as st}from"./TemplateModal.vue_vue_type_script_setup_true_lang-5b7cbca9.js";import{_ as lt}from"./TemplateTestModal.vue_vue_type_script_setup_true_lang-053066b8.js";import{l as pt,c as mt,d as ct,A as B,s as M,e as ut}from"./template.api-d061cd9e.js";import{u as dt}from"./jeecg-online-vendor-59c8fbe3.js";import{z as A}from"./index-7711d1b4.js";import{d as T,e as ft,V as c,a5 as I,a6 as _t,f as i,a7 as s,E as h,u as a,a9 as gt,W as wt,am as Ct,aa as U,J as bt}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./BasicForm-2f1a8584.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./vxe-table-vendor-173f2e92.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-d5fd9260.js";import"./JSelectUser-5289e428.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./cron-parser-vendor-15f47fa7.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";import"./validator-ee9b9da7.js";import"./user.api-79d1ef80.js";const ht=U("span",null,"删除",-1),yt=U("span",null,"批量操作",-1),kt=T({name:"message-template"}),Ce=T(R(D({},kt),{setup(n){const{createMessage:e}=dt(),{prefixCls:o,onExportXls:_,onImportXls:f,tableContext:g}=rt({designScope:"message-template",tableProps:{title:"消息中心模板列表数据",api:pt,columns:mt,formConfig:{schemas:ct}},exportConfig:{url:B.exportXls,name:"消息中心模板列表"},importConfig:{url:B.importXls,success:()=>l()}}),[w,{reload:l,setLoading:r},{rowSelection:u,selectedRowKeys:C,selectedRows:N}]=g,[V,{openModal:b}]=A(),[E,F]=A(),X=ft(()=>C.value.length>0);function j(){b(!0,{title:"新增消息模板",isUpdate:!1,showFooter:!0,record:{}})}function L(t){if(t.useStatus==="1"){e.warning("此模板已被应用，禁止编辑!");return}b(!0,{title:"修改消息模板",isUpdate:!0,record:t,showFooter:!0})}function z(t){if(t){if(t.useStatus=="1"){e.warning("该模板已被应用禁止删除!");return}y([t.id],!1)}}function y(t,m=!0){return d(this,null,function*(){const p=a(t);if(p.length>0)try{r(!0),yield ut({ids:p.join(",")},m),yield l()}finally{r(!1)}})}function K(){return d(this,null,function*(){try{if(bt(N.value).filter(p=>p.useStatus=="1").length>0){e.warning("选中的模板已被应用禁止删除!");return}yield y(C),C.value=[]}finally{}})}function P(t){F.openModal(!0,{record:t})}function $(t){return[{label:"查看",onClick:W.bind(null,t)},{label:"编辑",onClick:L.bind(null,t)}]}function J(t){return[{label:"应用",onClick:O.bind(null,t)},{label:"停用",onClick:Q.bind(null,t)},{label:"发送测试",onClick:P.bind(null,t)},{label:"删除",color:"error",popConfirm:{title:"确认要删除吗？",confirm:z.bind(null,t)}}]}function O(t){return d(this,null,function*(){let m={id:t.id,useStatus:"1"};yield M(m,!0),yield l()})}function Q(t){return d(this,null,function*(){let m={id:t.id,useStatus:"0"};yield M(m,!0),yield l()})}function W(t){b(!0,{isUpdate:!0,showFooter:!1,record:t})}return(t,m)=>{const p=c("a-button"),q=c("j-upload-button"),k=c("Icon"),G=c("a-menu-item"),H=c("a-menu"),Y=c("a-dropdown");return I(),_t("div",{class:Ct(a(o))},[i(a(it),{onRegister:a(w),rowSelection:a(u)},{tableTitle:s(()=>[i(p,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:j},{default:s(()=>[h("新增")]),_:1}),i(p,{type:"primary",preIcon:"ant-design:export-outlined",onClick:a(_)},{default:s(()=>[h(" 导出")]),_:1},8,["onClick"]),i(q,{type:"primary",preIcon:"ant-design:import-outlined",onClick:a(f)},{default:s(()=>[h("导入")]),_:1},8,["onClick"]),X.value?(I(),gt(Y,{key:0},{overlay:s(()=>[i(H,null,{default:s(()=>[i(G,{key:"1",onClick:K},{default:s(()=>[i(k,{icon:"ant-design:delete-outlined"}),ht]),_:1})]),_:1})]),default:s(()=>[i(p,null,{default:s(()=>[yt,i(k,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):wt("",!0)]),action:s(({record:S})=>[i(a(at),{actions:$(S),dropDownActions:J(S)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),i(st,{onRegister:a(V),onSuccess:a(l)},null,8,["onRegister","onSuccess"]),i(lt,{onRegister:a(E)},null,8,["onRegister"])],2)}}}));export{Ce as default};