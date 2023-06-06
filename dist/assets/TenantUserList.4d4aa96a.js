var j=Object.defineProperty,z=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var T=(n,t,o)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,D=(n,t)=>{for(var o in t||(t={}))N.call(t,o)&&T(n,o,t[o]);if(h)for(var o of h(t))V.call(t,o)&&T(n,o,t[o]);return n},B=(n,t)=>z(n,J(t));var w=(n,t,o)=>new Promise((d,a)=>{var g=s=>{try{l(o.next(s))}catch(p){a(p)}},b=s=>{try{l(o.throw(s))}catch(p){a(p)}},l=s=>s.done?d(s.value):Promise.resolve(s.value).then(g,b);l((o=o.apply(n,t)).next())});import X from"./BasicTable.8e358715.js";import{T as H}from"./componentMap.6d6ce384.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import"./useTable.9835c939.js";import{_ as K}from"./UserDrawer.vue_vue_type_script_setup_true_lang.6bbc5016.js";import{J as O}from"./JThirdAppButton.e814e5bd.js";import{_ as q}from"./UserQuitAgentModal.vue_vue_type_script_setup_true_name_user-quit-agent-modal_lang.cc0938c2.js";import G from"./UserQuitModal.6d70e18f.js";import{a as W}from"./index.0a5ccf4a.js";import{useListPage as Y}from"./useListPage.3cb53a3e.js";import"./index.df1721d5.js";import{j as R,bI as F,cM as Z,r as ee,s as te,t as oe,v as i,w as f,y as M,H as r,u as ne}from"./index.0be4b5b8.js";import{h as re,u as se}from"./user.api.324b85f8.js";import{u as ie,b as ae}from"./user.data.76251684.js";import"./BasicForm.be7f03c1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./JAddInput.d2fd0723.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./useForm.b4df01c5.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";import"./useAdaptiveWidth.9105af26.js";import"./validator.9246a07a.js";import"./renderUtils.e4a72d30.js";const ue=R({name:"tenant-system-user"}),it=R(B(D({},ue),{setup(n){const{createMessage:t,createConfirm:o}=ne(),[d,{openDrawer:a}]=W(),[g,{openModal:b}]=F(),[l,{openModal:s}]=F(),C=Z().getUserInfo.username,{prefixCls:le,tableContext:k,onExportXls:pe,onImportXls:me}=Y({designScope:"user-list",tableProps:{title:"\u79DF\u6237\u7528\u6237\u5217\u8868",api:re,columns:ie,size:"small",formConfig:{schemas:ae},actionColumn:{width:120},beforeFetch:e=>(e.userTenantStatus="1,3,4",Object.assign({column:"createTime",order:"desc"},e))}}),[A,{reload:m,updateTableDataRecord:ce},{rowSelection:E,selectedRows:fe,selectedRowKeys:U}]=k;function x(){a(!0,{isUpdate:!1,showFooter:!0,tenantSaas:!0})}function I(e){return w(this,null,function*(){a(!0,{record:e,isUpdate:!0,showFooter:!0,tenantSaas:!0})})}function Q(e){return w(this,null,function*(){a(!0,{record:e,isUpdate:!0,showFooter:!1,tenantSaas:!0})})}function y(){m()}function v({isToLocal:e}){e&&m()}function L(e){return[{label:"\u7F16\u8F91",onClick:I.bind(null,e)}]}function P(e){return[{label:"\u8BE6\u60C5",onClick:Q.bind(null,e)},{label:"\u79BB\u804C",onClick:$.bind(null,e.username),ifShow:()=>e.username!==e.createBy},{label:"\u540C\u610F",onClick:_.bind(null,e.id,"1"),ifShow:()=>(e.status==="3"||e.status==="4")&&e.createBy===C},{label:"\u62D2\u7EDD",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u62D2\u7EDD",confirm:_.bind(null,e.id,"4")},ifShow:()=>e.status==="3"&&e.createBy===C}]}function $(e){b(!0,{userName:e})}function _(e,c){se({userId:e,status:c}).then(u=>{u.success&&y()}).catch(u=>{t.warning(u.message)})}return(e,c)=>{const u=ee("a-button");return te(),oe("div",null,[i(r(X),{onRegister:r(A),rowSelection:r(E)},{tableTitle:f(()=>[i(u,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:x},{default:f(()=>[M(" \u65B0\u589E")]),_:1}),i(O,{"biz-type":"user","selected-row-keys":r(U),syncToApp:"",syncToLocal:"",onSyncFinally:v},null,8,["selected-row-keys"]),i(u,{type:"primary",onClick:c[0]||(c[0]=S=>r(s)(!0,{})),preIcon:"ant-design:user-delete-outlined"},{default:f(()=>[M("\u79BB\u804C\u4FE1\u606F")]),_:1})]),action:f(({record:S})=>[i(r(H),{actions:L(S),dropDownActions:P(S)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),i(K,{onRegister:r(d),onSuccess:y},null,8,["onRegister"]),i(q,{onRegister:r(g),onSuccess:r(m)},null,8,["onRegister","onSuccess"]),i(G,{onRegister:r(l),onSuccess:r(m)},null,8,["onRegister","onSuccess"])])}}}));export{it as default};