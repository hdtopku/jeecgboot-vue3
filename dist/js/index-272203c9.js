var K=Object.defineProperty,M=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var w=(n,e,t)=>e in n?K(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,F=(n,e)=>{for(var t in e||(e={}))$.call(e,t)&&w(n,t,e[t]);if(C)for(var t of C(e))O.call(e,t)&&w(n,t,e[t]);return n},k=(n,e)=>M(n,U(e));var d=(n,e,t)=>new Promise((_,u)=>{var p=a=>{try{c(t.next(a))}catch(l){u(l)}},b=a=>{try{c(t.throw(a))}catch(l){u(l)}},c=a=>a.done?_(a.value):Promise.resolve(a.value).then(p,b);c((t=t.apply(n,e)).next())});import P from"./BasicTable-29c6504d.js";import{T as q}from"./componentMap-a6d21ad6.js";import"./BasicTable.vue_vue_type_style_index_0_lang-b7d11241.js";import"./useTable-7e303edd.js";import{useListPage as H}from"./useListPage-5049b37a.js";import"./index-8cf3aabb.js";import{_ as L}from"./JeecgOrderModal.vue_vue_type_script_setup_true_lang-bdadf696.js";import{_ as j}from"./JeecgOrderCustomerList.vue_vue_type_script_setup_true_lang-b3f4914b.js";import{_ as G}from"./JeecgOrderTicketList.vue_vue_type_script_setup_true_lang-db1c669d.js";import{m as J,n as Q,o as W,p as X,q as Y}from"./erplist.api-2ed0a772.js";import{E as Z}from"./index-fde9c72f.js";import{d as v,e as tt,u as r,p as et,U as s,aV as S,as as ot,at,f as o,bi as i,E as f,ar as nt,V as it,F as rt}from"./vue-c7e3516e.js";import"./jeecg-online-vendor-bf2efbcb.js";import"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./BasicForm-83ba9c88.js";import"./BasicForm.vue_vue_type_style_index_0_lang-aeaafe88.js";import"./BasicModal-ff8f2086.js";import"./useWindowSizeFn-e5cad7ae.js";import"./useFormItem-4a12ff45.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import"./download-c8889ed9.js";import"./base64Conver-4e359726.js";import"./index-ee020524.js";import"./index-53e807bd.js";import"./useCountdown-473e4dcc.js";import"./JAddInput-2cbbbde9.js";import"./areaDataUtil-b2642a1f.js";import"./useSelectBiz-c744cf20.js";import"./props-8e8dbf4f.js";import"./index-d4783a30.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";import"./useTreeBiz-faf9875a.js";import"./index-63ed9c18.js";import"./depart.api-25dc3d39.js";import"./index-ed4be6fa.js";import"./useForm-fa63344e.js";import"./injectionKey-5da932b3.js";import"./JeecgOrderCustomerModal.vue_vue_type_script_setup_true_lang-297b6f9e.js";import"./JeecgOrderTicketModal.vue_vue_type_script_setup_true_lang-4e95f80d.js";import"./renderUtils-76d1e990.js";const mt=v({name:"tab-list"}),ne=v(k(F({},mt),{setup(n){const[e,{openModal:t}]=Z(),{tableContext:_}=H({tableProps:{api:J,tableSetting:{cacheKey:"erp_main"},columns:Q,canResize:!1,rowSelection:{type:"radio"},formConfig:{schemas:W},actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[u,{reload:p,updateTableDataRecord:b},{rowSelection:c,selectedRowKeys:a}]=_,l=tt(()=>r(a).length>0?r(a)[0]:"");et("orderId",l);function B(){t(!0,{isUpdate:!1,showFooter:!0})}function E(m){return d(this,null,function*(){t(!0,{record:m,isUpdate:!0,showFooter:!0})})}function R(m){return d(this,null,function*(){yield Y({id:m.id},p)})}function T(){return d(this,null,function*(){yield X({ids:a.value},()=>{a.value=[],p()})})}function x(){p()}function A(m){return[{label:"\u7F16\u8F91",onClick:E.bind(null,m)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:R.bind(null,m)}}]}return(m,st)=>{const g=s("a-button"),h=s("Icon"),V=s("a-menu-item"),D=s("a-menu"),I=s("a-dropdown"),y=s("a-tab-pane"),N=s("a-tabs");return S(),ot(rt,null,[at("div",null,[o(r(P),{onRegister:r(u),rowSelection:r(c)},{tableTitle:i(()=>[o(g,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:B},{default:i(()=>[f(" \u65B0\u589E")]),_:1}),r(a).length>0?(S(),nt(I,{key:0},{overlay:i(()=>[o(D,null,{default:i(()=>[o(V,{key:"1",onClick:T},{default:i(()=>[o(h,{icon:"ant-design:delete-outlined"}),f(" \u5220\u9664 ")]),_:1})]),_:1})]),default:i(()=>[o(g,null,{default:i(()=>[f("\u6279\u91CF\u64CD\u4F5C "),o(h,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):it("",!0)]),action:i(({record:z})=>[o(r(q),{actions:A(z)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(N,{defaultActiveKey:"1",style:{margin:"10px"}},{default:i(()=>[o(y,{tab:"\u5BA2\u6237\u4FE1\u606F",key:"1"},{default:i(()=>[o(j)]),_:1}),o(y,{tab:"\u673A\u7968\u4FE1\u606F",key:"2",forceRender:""},{default:i(()=>[o(G)]),_:1})]),_:1})]),o(L,{onRegister:r(e),onSuccess:x},null,8,["onRegister"])],64)}}}));export{ne as default};