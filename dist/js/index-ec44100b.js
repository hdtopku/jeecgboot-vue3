var M=Object.defineProperty,$=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))O.call(e,t)&&C(n,t,e[t]);if(w)for(var t of w(e))P.call(e,t)&&C(n,t,e[t]);return n},S=(n,e)=>$(n,A(e));var u=(n,e,t)=>new Promise((_,d)=>{var s=a=>{try{c(t.next(a))}catch(l){d(l)}},b=a=>{try{c(t.throw(a))}catch(l){d(l)}},c=a=>a.done?_(a.value):Promise.resolve(a.value).then(s,b);c((t=t.apply(n,e)).next())});import U from"./BasicTable-438c62dc.js";import{Q as q}from"./componentMap-8ca03aee.js";import"./useTable-28fc0fe6.js";import{useListPage as H}from"./useListPage-66893768.js";import"./index-abefda79.js";import{_ as L}from"./JeecgOrderModal.vue_vue_type_script_setup_true_lang-94822380.js";import{_ as Q}from"./JeecgOrderCustomerList.vue_vue_type_script_setup_true_lang-296aacd7.js";import{_ as W}from"./JeecgOrderTicketList.vue_vue_type_script_setup_true_lang-67917d49.js";import{m as j,n as G,o as J,p as X,q as Y}from"./erplist.api-65b4b73d.js";import{z as Z}from"./index-0d179770.js";import{d as R,e as tt,u as r,p as et,V as p,a5 as v,a6 as ot,aa as at,f as o,a7 as i,E as f,a9 as nt,W as it,F as rt}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9ce97bb7.js";import"./jeecg-online-vendor-658239c9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicForm-21b7ac92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3e2c32c1.js";import"./BasicModal-d4150903.js";import"./useWindowSizeFn-fbe431de.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-69b31c99.js";import"./JAddInput-b8d2ab38.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-9082d1c8.js";import"./JSelectUser-d2cfe039.js";import"./props-8e60cede.js";import"./JSelectBiz-8b34874f.js";import"./index-8e0aeea9.js";import"./codemirror-vendor-7570b8a9.js";import"./index-6219dca4.js";import"./bem-6b2974b6.js";import"./props-c7c3390f.js";import"./useContextMenu-fdbf9c9a.js";import"./depart.api-380afd6d.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import"./cron-parser-vendor-7c1c3251.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-e11e0a89.js";import"./download-f4ef666f.js";import"./base64Conver-fa2fe1af.js";import"./index-e3a70fab.js";import"./index-42cd22d1.js";import"./useCountdown-d0291e3c.js";import"./index-ebd3f065.js";import"./JeecgOrderCustomerModal.vue_vue_type_script_setup_true_lang-0ccd2af3.js";import"./JeecgOrderTicketModal.vue_vue_type_script_setup_true_lang-4bb60a0a.js";import"./renderUtils-2bee6b66.js";const mt=R({name:"tab-list"}),re=R(S(k({},mt),{setup(n){const[e,{openModal:t}]=Z(),{tableContext:_}=H({tableProps:{api:j,tableSetting:{cacheKey:"erp_main"},columns:G,canResize:!1,rowSelection:{type:"radio"},formConfig:{schemas:J},actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[d,{reload:s,updateTableDataRecord:b},{rowSelection:c,selectedRowKeys:a}]=_,l=tt(()=>r(a).length>0?r(a)[0]:"");et("orderId",l);function x(){t(!0,{isUpdate:!1,showFooter:!0})}function F(m){return u(this,null,function*(){t(!0,{record:m,isUpdate:!0,showFooter:!0})})}function I(m){return u(this,null,function*(){yield Y({id:m.id},s)})}function T(){return u(this,null,function*(){yield X({ids:a.value},()=>{a.value=[],s()})})}function V(){s()}function z(m){return[{label:"编辑",onClick:F.bind(null,m)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:I.bind(null,m)}}]}return(m,pt)=>{const g=p("a-button"),h=p("Icon"),B=p("a-menu-item"),D=p("a-menu"),K=p("a-dropdown"),y=p("a-tab-pane"),N=p("a-tabs");return v(),ot(rt,null,[at("div",null,[o(r(U),{onRegister:r(d),rowSelection:r(c)},{tableTitle:i(()=>[o(g,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:x},{default:i(()=>[f(" 新增")]),_:1}),r(a).length>0?(v(),nt(K,{key:0},{overlay:i(()=>[o(D,null,{default:i(()=>[o(B,{key:"1",onClick:T},{default:i(()=>[o(h,{icon:"ant-design:delete-outlined"}),f(" 删除 ")]),_:1})]),_:1})]),default:i(()=>[o(g,null,{default:i(()=>[f("批量操作 "),o(h,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):it("",!0)]),action:i(({record:E})=>[o(r(q),{actions:z(E)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(N,{defaultActiveKey:"1",style:{margin:"10px"}},{default:i(()=>[o(y,{tab:"客户信息",key:"1"},{default:i(()=>[o(Q)]),_:1}),o(y,{tab:"机票信息",key:"2",forceRender:""},{default:i(()=>[o(W)]),_:1})]),_:1})]),o(L,{onRegister:r(e),onSuccess:V},null,8,["onRegister"])],64)}}}));export{re as default};