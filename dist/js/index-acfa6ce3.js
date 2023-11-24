var G=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var y=(n,e,o)=>e in n?G(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,D=(n,e)=>{for(var o in e||(e={}))W.call(e,o)&&y(n,o,e[o]);if(k)for(var o of k(e))j.call(e,o)&&y(n,o,e[o]);return n},R=(n,e)=>H(n,Q(e));var s=(n,e,o)=>new Promise((p,c)=>{var g=a=>{try{d(o.next(a))}catch(f){c(f)}},u=a=>{try{d(o.throw(a))}catch(f){c(f)}},d=a=>a.done?p(a.value):Promise.resolve(a.value).then(g,u);d((o=o.apply(n,e)).next())});import{d as U,l as J,V as m,a7 as x,a8 as O,f as i,aa as r,E as b,u as l,ac as Y,W as Z}from"./vue-50733b77.js";import"./index-f191817e.js";import"./index-f7d688aa.js";import{_ as tt,g as ot,c as et,s as nt,a as it,b as at,d as rt,e as lt,f as st,h as mt}from"./NoticeModal-f594c972.js";import pt from"./DetailModal-5d087c9b.js";import{d as ct,ao as ut}from"./jeecg-online-vendor-d3e1865b.js";import{useListPage as dt}from"./useListPage-4f9607d2.js";import{F as v}from"./index-b34ff7bc.js";import{Q as ft}from"./componentMap-5c02cfaf.js";import _t from"./BasicTable-ca5b2c76.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./index-fa22fec6.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-7e7a94e9.js";import"./useForm-14ceb529.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./useFormItem-915d7f1b.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./JEllipsis-66e02300.js";import"./renderUtils-74a3a0ef.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./cron-parser-vendor-19ac00ef.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./injectionKey-69710956.js";const gt=U({name:"system-notice"}),fo=U(R(D({},gt),{setup(n){const e=ct(),[o,{openModal:p}]=v(),[c,{openModal:g}]=v(),u=J(""),{prefixCls:d,onExportXls:a,onImportXls:f,tableContext:A,doRequest:E}=dt({designScope:"notice-template",tableProps:{title:"消息通知",api:ot,columns:et,formConfig:{schemas:nt}},exportConfig:{name:"消息通知列表",url:it},importConfig:{url:at}}),[I,{reload:_},{rowSelection:M,selectedRowKeys:h}]=A;function N(){p(!0,{isUpdate:!1})}function T(t){p(!0,{record:t,isUpdate:!0})}function V(t){return s(this,null,function*(){yield rt({id:t.id},_)})}function $(){return s(this,null,function*(){E(()=>lt({ids:h.value}))})}function B(t){return s(this,null,function*(){yield st({id:t}),_()})}function F(t){return s(this,null,function*(){yield mt({id:t}),_()})}function K(t){u.value=`${e.uploadUrl}/sys/annountCement/show/${t.id}?token=${ut()}`,g(!0)}function L(t){return[{label:"编辑",onClick:T.bind(null,t),ifShow:t.sendStatus==0}]}function P(t){return[{label:"删除",ifShow:t.sendStatus!=1,popConfirm:{title:"是否确认删除",confirm:V.bind(null,t)}},{label:"发布",ifShow:t.sendStatus==0,onClick:B.bind(null,t.id)},{label:"撤销",ifShow:t.sendStatus==1,popConfirm:{title:"确定要撤销吗？",confirm:F.bind(null,t.id)}},{label:"查看",onClick:K.bind(null,t)}]}return(t,bt)=>{const w=m("a-button"),S=m("Icon"),X=m("a-menu-item"),q=m("a-menu"),z=m("a-dropdown");return x(),O("div",null,[i(l(_t),{onRegister:l(I),rowSelection:l(M)},{tableTitle:r(()=>[i(w,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:N},{default:r(()=>[b("新增")]),_:1}),l(h).length>0?(x(),Y(z,{key:0},{overlay:r(()=>[i(q,null,{default:r(()=>[i(X,{key:"1",onClick:$},{default:r(()=>[i(S,{icon:"ant-design:delete-outlined"}),b(" 删除 ")]),_:1})]),_:1})]),default:r(()=>[i(w,null,{default:r(()=>[b("批量操作 "),i(S,{style:{fontsize:"12px"},icon:"ant-design:down-outlined"})]),_:1})]),_:1})):Z("",!0)]),action:r(({record:C})=>[i(l(ft),{actions:L(C),dropDownActions:P(C)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),i(tt,{onRegister:l(o),onSuccess:l(_)},null,8,["onRegister","onSuccess"]),i(pt,{onRegister:l(c),frameSrc:u.value},null,8,["onRegister","frameSrc"])])}}}));export{fo as default};