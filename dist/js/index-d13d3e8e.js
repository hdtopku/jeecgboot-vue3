var P=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var k=(i,e,o)=>e in i?P(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o,D=(i,e)=>{for(var o in e||(e={}))J.call(e,o)&&k(i,o,e[o]);if(x)for(var o of x(e))K.call(e,o)&&k(i,o,e[o]);return i},S=(i,e)=>j(i,q(e));var m=(i,e,o)=>new Promise((g,d)=>{var f=n=>{try{s(o.next(n))}catch(c){d(c)}},_=n=>{try{s(o.throw(n))}catch(c){d(c)}},s=n=>n.done?g(n.value):Promise.resolve(n.value).then(f,_);s((o=o.apply(i,e)).next())});import L from"./BasicTable-f6cf85af.js";import{Q as W}from"./componentMap-da21b34e.js";import"./useTable-20c32c9e.js";import"./index-465fff25.js";import{useListPage as X}from"./useListPage-b93a4fee.js";import{_ as F,g as $,c as G,s as O,a as Z,b as tt,d as ot,e as et,p as nt,r as it,f as at}from"./QuartzModal.vue_vue_type_script_setup_true_lang-4b6162da.js";import"./jeecg-online-vendor-59c8fbe3.js";import{z as rt}from"./index-7711d1b4.js";import{d as z,V as p,a5 as I,a6 as lt,f as a,a7 as r,E as u,u as l,a9 as mt,W as pt}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./BasicForm-2f1a8584.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./vxe-table-vendor-173f2e92.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-d5fd9260.js";import"./JSelectUser-5289e428.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./cron-parser-vendor-15f47fa7.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";import"./renderUtils-dfee8dc4.js";import"./validator-78c4e9c9.js";const st=z({name:"monitor-quartz"}),io=z(S(D({},st),{setup(i){const[e,{openModal:o}]=rt(),{prefixCls:g,tableContext:d,onExportXls:f,onImportXls:_}=X({designScope:"quartz-template",tableProps:{title:"任务列表",api:$,columns:G,actionColumn:{width:180},formConfig:{labelWidth:120,schemas:O,fieldMapToTime:[["fieldTime",["beginDate","endDate"],"YYYY-MM-DD HH:mm:ss"]]}},exportConfig:{name:"定时任务列表",url:Z},importConfig:{url:tt}}),[s,{reload:n},{rowSelection:c,selectedRowKeys:C}]=d;function E(t){return[{label:"启动",popConfirm:{title:"是否启动选中任务?",confirm:U.bind(null,t)},ifShow:h=>t.status==-1},{label:"停止",popConfirm:{title:"是否暂停选中任务?",confirm:Q.bind(null,t)},ifShow:h=>t.status==0}]}function M(t){return[{label:"立即执行",popConfirm:{title:"是否立即执行任务?",confirm:A.bind(null,t)}},{label:"编辑",onClick:T.bind(null,t)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:v.bind(null,t)}}]}function R(){o(!0,{isUpdate:!1})}function T(t){o(!0,{record:t,isUpdate:!0})}function v(t){return m(this,null,function*(){yield ot({id:t.id},n)})}function A(t){return m(this,null,function*(){yield et({id:t.id},n)})}function Q(t){return m(this,null,function*(){yield nt({id:t.id},n)})}function U(t){return m(this,null,function*(){yield it({id:t.id},n)})}function V(){return m(this,null,function*(){yield at({ids:C.value},n)})}return(t,h)=>{const b=p("a-button"),Y=p("j-upload-button"),w=p("Icon"),B=p("a-menu-item"),H=p("a-menu"),N=p("a-dropdown");return I(),lt("div",null,[a(l(L),{onRegister:l(s),rowSelection:l(c)},{tableTitle:r(()=>[a(b,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:R,style:{"margin-right":"5px"}},{default:r(()=>[u("新增")]),_:1}),a(b,{type:"primary",preIcon:"ant-design:export-outlined",onClick:l(f)},{default:r(()=>[u(" 导出")]),_:1},8,["onClick"]),a(Y,{type:"primary",preIcon:"ant-design:import-outlined",onClick:l(_)},{default:r(()=>[u("导入")]),_:1},8,["onClick"]),l(C).length>0?(I(),mt(N,{key:0},{overlay:r(()=>[a(H,null,{default:r(()=>[a(B,{key:"1",onClick:V},{default:r(()=>[a(w,{icon:"ant-design:delete-outlined"}),u(" 删除 ")]),_:1})]),_:1})]),default:r(()=>[a(b,null,{default:r(()=>[u("批量操作 "),a(w,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):pt("",!0)]),action:r(({record:y})=>[a(l(W),{actions:E(y),dropDownActions:M(y)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),a(F,{onRegister:l(e),onSuccess:l(n)},null,8,["onRegister","onSuccess"])])}}}));export{io as default};