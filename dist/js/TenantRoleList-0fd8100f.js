var j=Object.defineProperty,z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(r,o,e)=>o in r?j(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,x=(r,o)=>{for(var e in o||(o={}))L.call(o,e)&&y(r,e,o[e]);if(k)for(var e of k(o))M.call(o,e)&&y(r,e,o[e]);return r},U=(r,o)=>z(r,H(o));var g=(r,o,e)=>new Promise((d,c)=>{var u=i=>{try{m(e.next(i))}catch(s){c(s)}},f=i=>{try{m(e.throw(i))}catch(s){c(s)}},m=i=>i.done?d(i.value):Promise.resolve(i.value).then(u,f);m((e=e.apply(r,o)).next())});import Q from"./BasicTable-438c62dc.js";import{Q as W}from"./componentMap-8ca03aee.js";import"./useTable-28fc0fe6.js";import{a as w}from"./index-be443812.js";import"./index-abefda79.js";import{_ as q}from"./RoleDesc.vue_vue_type_script_setup_true_lang-443d4c20.js";import{_ as G}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-4352658e.js";import{_ as J}from"./RoleUserTable.vue_vue_type_script_setup_true_lang-1f8ddbc9.js";import{c as O,b as Y}from"./role.data-af0f07dc.js";import{l as Z,g as oo,h as eo,j as to,k as ro}from"./role.api-86861fbb.js";import{useListPage as no}from"./useListPage-66893768.js";import{z as io}from"./index-0d179770.js";import{d as S,k as ao,V as p,a5 as v,a6 as lo,f as n,a7 as a,E as b,u as l,a9 as mo,W as so,F as po}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9ce97bb7.js";import"./jeecg-online-vendor-658239c9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicForm-21b7ac92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3e2c32c1.js";import"./BasicModal-d4150903.js";import"./useWindowSizeFn-fbe431de.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-69b31c99.js";import"./JAddInput-b8d2ab38.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-9082d1c8.js";import"./JSelectUser-d2cfe039.js";import"./props-8e60cede.js";import"./JSelectBiz-8b34874f.js";import"./index-8e0aeea9.js";import"./codemirror-vendor-7570b8a9.js";import"./index-6219dca4.js";import"./bem-6b2974b6.js";import"./props-c7c3390f.js";import"./useContextMenu-fdbf9c9a.js";import"./depart.api-380afd6d.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import"./cron-parser-vendor-7c1c3251.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-e11e0a89.js";import"./download-f4ef666f.js";import"./base64Conver-fa2fe1af.js";import"./index-e3a70fab.js";import"./index-42cd22d1.js";import"./useCountdown-d0291e3c.js";import"./index-ebd3f065.js";import"./index-a034bb52.js";import"./UserDrawer.vue_vue_type_script_setup_true_lang-c75c3c08.js";import"./user.data-5cd7e8b1.js";import"./user.api-32d45f59.js";import"./validator-5fee0124.js";import"./renderUtils-2bee6b66.js";import"./useAdaptiveWidth-a05da323.js";import"./UseSelectModal.vue_vue_type_script_setup_true_lang-14ace9da.js";const co=S({name:"system-role"}),De=S(U(x({},co),{setup(r){const o=ao(!0),[e,{openDrawer:d}]=w(),[c,{openDrawer:u}]=w();io();const[f,{openDrawer:m}]=w(),{prefixCls:i,tableContext:s,onImportXls:uo,onExportXls:fo}=no({designScope:"role-template",tableProps:{title:"租户角色列表",api:Z,columns:O,formConfig:{schemas:Y},actionColumn:{width:120},rowSelection:null,defSort:{column:"id",order:"desc"}},exportConfig:{name:"角色列表",url:oo},importConfig:{url:eo}}),[E,{reload:_},{rowSelection:_o,selectedRowKeys:h}]=s;function F(){o.value=!0,u(!0,{isUpdate:!1})}function I(t){o.value=!0,u(!0,{record:t,isUpdate:!0})}function T(t){o.value=!1,m(!0,{record:t,isUpdate:!0})}function A(t){return g(this,null,function*(){yield ro({id:t.id},_)})}function B(){return g(this,null,function*(){yield to({ids:h.value},_)})}function V(t){d(!0,t)}function N(t){return[{label:"用户",onClick:V.bind(null,t)}]}function $(t){return[{label:"编辑",onClick:I.bind(null,t)},{label:"详情",onClick:T.bind(null,t)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:A.bind(null,t)}}]}return(t,go)=>{const C=p("a-button"),D=p("Icon"),K=p("a-menu-item"),P=p("a-menu"),X=p("a-dropdown");return v(),lo(po,null,[n(l(Q),{onRegister:l(E)},{tableTitle:a(()=>[n(C,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:F},{default:a(()=>[b(" 新增")]),_:1}),l(h).length>0?(v(),mo(X,{key:0},{overlay:a(()=>[n(P,null,{default:a(()=>[n(K,{key:"1",onClick:B},{default:a(()=>[n(D,{icon:"ant-design:delete-outlined"}),b(" 删除 ")]),_:1})]),_:1})]),default:a(()=>[n(C,null,{default:a(()=>[b("批量操作 "),n(D,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):so("",!0)]),action:a(({record:R})=>[n(l(W),{actions:N(R),dropDownActions:$(R)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),n(J,{onRegister:l(e),disableUserEdit:!0},null,8,["onRegister"]),n(G,{onRegister:l(c),onSuccess:l(_),showFooter:o.value},null,8,["onRegister","onSuccess","showFooter"]),n(q,{onRegister:l(f)},null,8,["onRegister"])],64)}}}));export{De as default};