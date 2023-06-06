var O=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?O(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))q.call(e,t)&&D(n,t,e[t]);if(x)for(var t of x(e))G.call(e,t)&&D(n,t,e[t]);return n},y=(n,e)=>Q(n,W(e));var b=(n,e,t)=>new Promise((f,l)=>{var _=a=>{try{p(t.next(a))}catch(s){l(s)}},C=a=>{try{p(t.throw(a))}catch(s){l(s)}},p=a=>a.done?f(a.value):Promise.resolve(a.value).then(_,C);p((t=t.apply(n,e)).next())});import J from"./BasicTable.8e358715.js";import{T as X}from"./componentMap.6d6ce384.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import"./useTable.9835c939.js";import{useListPage as Y}from"./useListPage.3cb53a3e.js";import{a as A}from"./index.0a5ccf4a.js";import{_ as Z}from"./MenuDrawer.vue_vue_type_script_setup_true_lang.28591812.js";import{_ as ee}from"./DataRuleList.vue_vue_type_script_setup_true_lang.63d8da02.js";import{l as te,h as oe,i as ne,j as re,k as ie}from"./menu.data.8968ce5c.js";import{j as T,C as F,r as c,s as v,t as ae,v as r,w as i,y as m,H as u,Q as ue,R as le}from"./index.0be4b5b8.js";import"./BasicForm.be7f03c1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./JAddInput.d2fd0723.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./useForm.b4df01c5.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";import"./useAdaptiveWidth.9105af26.js";import"./DataRuleModal.vue_vue_type_script_setup_true_lang.56d596d0.js";import"./renderUtils.e4a72d30.js";const se={class:"p-4"},ce=T({name:"system-menu"}),tt=T(y(k({},ce),{setup(n){const e=F([]),t=F(!0),[f,{openDrawer:l}]=A(),[_,{openDrawer:C}]=A(),{prefixCls:p,tableContext:a}=Y({tableProps:{title:"\u83DC\u5355\u5217\u8868",api:te,columns:oe,size:"small",pagination:!1,isTreeTable:!0,striped:!0,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},formConfig:{schemas:ne,autoAdvancedCol:4,baseColProps:{xs:24,sm:12,md:6,lg:6,xl:6,xxl:6},actionColOptions:{xs:24,sm:12,md:6,lg:6,xl:6,xxl:6}},actionColumn:{width:120}}}),[s,{reload:h,expandAll:E,collapseAll:R}]=a,S={type:"checkbox",columnWidth:30,selectedRowKeys:e,onChange:B};function B(o){e.value=o}function I(){t.value=!0,l(!0,{isUpdate:!1})}function N(o){t.value=!0,l(!0,{record:o,isUpdate:!0})}function P(o){l(!0,{record:{parentId:o.id,menuType:1},isUpdate:!1})}function U(o){C(!0,{id:o.id})}function V(o){return b(this,null,function*(){yield ie({id:o.id},h)})}function j(){return b(this,null,function*(){yield re({ids:e.value},h)})}function H(){h()}function K(o){return[{label:"\u7F16\u8F91",onClick:N.bind(null,o)}]}function M(o){return[{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:P.bind(null,o)},{label:"\u6570\u636E\u89C4\u5219",onClick:U.bind(null,o)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:V.bind(null,o)}}]}return(o,me)=>{const d=c("a-button"),g=c("Icon"),$=c("a-menu-item"),z=c("a-menu"),L=c("a-dropdown");return v(),ae("div",se,[r(u(J),{onRegister:u(s),rowSelection:S},{tableTitle:i(()=>[r(d,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:i(()=>[m(" \u65B0\u589E\u83DC\u5355")]),_:1}),r(d,{type:"primary",preIcon:"ic:round-expand",onClick:u(E)},{default:i(()=>[m("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),r(d,{type:"primary",preIcon:"ic:round-compress",onClick:u(R)},{default:i(()=>[m("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"]),e.value.length>0?(v(),ue(L,{key:0},{overlay:i(()=>[r(z,null,{default:i(()=>[r($,{key:"1",onClick:j},{default:i(()=>[r(g,{icon:"ant-design:delete-outlined"}),m(" \u5220\u9664 ")]),_:1})]),_:1})]),default:i(()=>[r(d,null,{default:i(()=>[m("\u6279\u91CF\u64CD\u4F5C "),r(g,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):le("",!0)]),action:i(({record:w})=>[r(u(X),{actions:K(w),dropDownActions:M(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),r(Z,{onRegister:u(f),onSuccess:H,showFooter:t.value},null,8,["onRegister","showFooter"]),r(ee,{onRegister:u(_)},null,8,["onRegister"])])}}}));export{tt as default};