var G=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var y=(n,e,o)=>e in n?G(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,D=(n,e)=>{for(var o in e||(e={}))W.call(e,o)&&y(n,o,e[o]);if(S)for(var o of S(e))J.call(e,o)&&y(n,o,e[o]);return n},R=(n,e)=>H(n,Q(e));var m=(n,e,o)=>new Promise((u,d)=>{var b=l=>{try{_(o.next(l))}catch(p){d(p)}},f=l=>{try{_(o.throw(l))}catch(p){d(p)}},_=l=>l.done?u(l.value):Promise.resolve(l.value).then(b,f);_((o=o.apply(n,e)).next())});import O from"./BasicTable-11e9afcb.js";import{Q as Y}from"./componentMap-bab84cb7.js";import"./useTable-992ea772.js";import"./index-cd2db611.js";import{_ as Z,g as tt,c as ot,s as et,a as nt,b as it,d as at,e as rt,f as lt,h as st}from"./NoticeModal.vue_vue_type_script_setup_true_lang-71f76077.js";import pt from"./DetailModal-88edca62.js";import{s as mt,C as ct}from"./jeecg-online-vendor-ecddc31b.js";import{useListPage as ut}from"./useListPage-0a663f0c.js";import{z as x}from"./index-b03d7914.js";import{d as I,k as dt,V as s,a5 as v,a6 as ft,f as i,a7 as a,E as c,u as r,a9 as _t,W as gt}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-cd503db7.js";import"./BasicForm-1c4cfe6b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-951c06ee.js";import"./useWindowSizeFn-13ef0f26.js";import"./vxe-table-vendor-9edfd3ae.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-799a6766.js";import"./JAddInput-903fbbea.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-4b66c33c.js";import"./JSelectUser-14c3fad5.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import"./cron-parser-vendor-d9194a40.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./index-5ded5f19.js";import"./validator-9b1f714d.js";import"./user.api-a4776d25.js";import"./renderUtils-d0274a04.js";const bt=I({name:"system-notice"}),_o=I(R(D({},bt),{setup(n){const e=mt(),[o,{openModal:u}]=x(),[d,{openModal:b}]=x(),f=dt(""),{prefixCls:_,onExportXls:l,onImportXls:p,tableContext:U,doRequest:A}=ut({designScope:"notice-template",tableProps:{title:"消息通知",api:tt,columns:ot,formConfig:{schemas:et}},exportConfig:{name:"消息通知列表",url:nt},importConfig:{url:it}}),[E,{reload:g},{rowSelection:M,selectedRowKeys:h}]=U;function N(){u(!0,{isUpdate:!1})}function T(t){u(!0,{record:t,isUpdate:!0})}function V(t){return m(this,null,function*(){yield rt({id:t.id},g)})}function $(){return m(this,null,function*(){A(()=>at({ids:h.value}))})}function B(t){return m(this,null,function*(){yield lt({id:t}),g()})}function j(t){return m(this,null,function*(){yield st({id:t}),g()})}function z(t){f.value=`${e.uploadUrl}/sys/annountCement/show/${t.id}?token=${ct()}`,b(!0)}function K(t){return[{label:"编辑",onClick:T.bind(null,t),ifShow:t.sendStatus==0}]}function L(t){return[{label:"删除",ifShow:t.sendStatus!=1,popConfirm:{title:"是否确认删除",confirm:V.bind(null,t)}},{label:"发布",ifShow:t.sendStatus==0,onClick:B.bind(null,t.id)},{label:"撤销",ifShow:t.sendStatus==1,popConfirm:{title:"确定要撤销吗？",confirm:j.bind(null,t.id)}},{label:"查看",onClick:z.bind(null,t)}]}return(t,Ct)=>{const C=s("a-button"),P=s("j-upload-button"),k=s("Icon"),X=s("a-menu-item"),q=s("a-menu"),F=s("a-dropdown");return v(),ft("div",null,[i(r(O),{onRegister:r(E),rowSelection:r(M)},{tableTitle:a(()=>[i(C,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:N},{default:a(()=>[c("新增")]),_:1}),i(C,{type:"primary",preIcon:"ant-design:export-outlined",onClick:r(l)},{default:a(()=>[c(" 导出")]),_:1},8,["onClick"]),i(P,{type:"primary",preIcon:"ant-design:import-outlined",onClick:r(p)},{default:a(()=>[c("导入")]),_:1},8,["onClick"]),r(h).length>0?(v(),_t(F,{key:0},{overlay:a(()=>[i(q,null,{default:a(()=>[i(X,{key:"1",onClick:$},{default:a(()=>[i(k,{icon:"ant-design:delete-outlined"}),c(" 删除 ")]),_:1})]),_:1})]),default:a(()=>[i(C,null,{default:a(()=>[c("批量操作 "),i(k,{style:{fontsize:"12px"},icon:"ant-design:down-outlined"})]),_:1})]),_:1})):gt("",!0)]),action:a(({record:w})=>[i(r(Y),{actions:K(w),dropDownActions:L(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),i(Z,{onRegister:r(o),onSuccess:r(g)},null,8,["onRegister","onSuccess"]),i(pt,{onRegister:r(d),frameSrc:f.value},null,8,["onRegister","frameSrc"])])}}}));export{_o as default};