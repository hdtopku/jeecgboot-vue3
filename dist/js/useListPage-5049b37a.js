var T=Object.defineProperty,j=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))k.call(r,t)&&R(e,t,r[t]);if(F)for(var t of F(r))E.call(r,t)&&R(e,t,r[t]);return e},b=(e,r)=>j(e,A(r));var v=(e,r,t)=>new Promise((g,m)=>{var s=i=>{try{c(t.next(i))}catch(f){m(f)}},u=i=>{try{c(t.throw(i))}catch(f){m(f)}},c=i=>i.done?g(i.value):Promise.resolve(i.value).then(s,u);c((t=t.apply(e,r)).next())});import"./BasicTable.vue_vue_type_style_index_0_lang-b7d11241.js";import"./componentMap-a6d21ad6.js";import{u as I}from"./useTable-7e303edd.js";import{l as K,aK as M}from"./jeecg-online-vendor-bf2efbcb.js";import{l as X,m as D}from"./index-fde9c72f.js";import{m as L}from"./lodash-es-vendor-42c8d3d4.js";import{k as O,r as B,u as U}from"./vue-c7e3516e.js";import"./BasicForm-83ba9c88.js";import"./BasicForm.vue_vue_type_style_index_0_lang-aeaafe88.js";import"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./index-8cf3aabb.js";import"./BasicModal-ff8f2086.js";import"./useWindowSizeFn-e5cad7ae.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./useForm-fa63344e.js";import"./JAddInput-2cbbbde9.js";import"./areaDataUtil-b2642a1f.js";import"./useFormItem-4a12ff45.js";import"./useSelectBiz-c744cf20.js";import"./props-8e8dbf4f.js";import"./index-d4783a30.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";import"./useTreeBiz-faf9875a.js";import"./index-63ed9c18.js";import"./depart.api-25dc3d39.js";import"./injectionKey-5da932b3.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import"./download-c8889ed9.js";import"./base64Conver-4e359726.js";import"./index-ee020524.js";import"./index-53e807bd.js";import"./useCountdown-473e4dcc.js";import"./index-ed4be6fa.js";const{handleExportXls:W,handleImportXls:$}=M();function Ae(e){const r=K();let t={};e.designScope&&(t=X(e.designScope));const g=q(e.tableProps),[,{getForm:m,reload:s,setLoading:u},{selectedRowKeys:c}]=g;function i(){return v(this,null,function*(){var p;let{url:a,name:o,params:C}=(p=e==null?void 0:e.exportConfig)!=null?p:{},d=typeof a=="function"?a():a;if(d){let S=typeof o=="function"?o():o,l={};try{l=yield m().validate()}catch(h){}return l!=null&&l.column||Object.assign(l,{column:"createTime",order:"desc"}),C&&Object.keys(C).map(h=>{let w=C[h];w&&(l[h]=U(w))}),c.value&&c.value.length>0&&(l.selections=c.value.join(",")),W(S,d,D(l))}else return r.createMessage.warn("\u6CA1\u6709\u4F20\u9012 exportConfig.url \u53C2\u6570"),Promise.reject()})}function f(a){var p;let{url:o,success:C}=(p=e==null?void 0:e.importConfig)!=null?p:{},d=typeof o=="function"?o():o;return d?$(a,d,C||s):(r.createMessage.warn("\u6CA1\u6709\u4F20\u9012 importConfig.url \u53C2\u6570"),Promise.reject())}function y(a,o){return new Promise((C,d)=>{var S;const p=()=>v(this,null,function*(){var l,h;try{u(!0);const w=yield a();((l=o==null?void 0:o.reload)==null||l)&&s(),((h=o==null?void 0:o.clearSelection)==null||h)&&(c.value=[]),C(w)}catch(w){d(w)}finally{u(!1)}});(S=o==null?void 0:o.confirm)==null||S?r.createConfirm({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>p(),onCancel:()=>d()}):p()})}function n(a){return y(a,{confirm:!1,clearSelection:!1})}return b(x(x({},t),r),{onExportXls:i,onImportXls:f,doRequest:y,doDeleteRecord:n,tableContext:g})}function q(e){var i,f,y;const r={xs:24,sm:12,md:12,lg:8,xl:8,xxl:6},t={rowKey:"id",useSearchForm:!0,formConfig:{compact:!0,autoSubmitOnEnter:!0,rowProps:{gutter:8},baseColProps:x({},r),labelCol:{xs:24,sm:8,md:6,lg:8,xl:6,xxl:6},wrapperCol:{},showAdvancedButton:!0,autoAdvancedCol:3,actionColOptions:b(x({},r),{style:{textAlign:"left"}})},striped:!1,canResize:!0,minHeight:500,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!1},showActionColumn:!0,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}};e&&L(t,e);function g(n){return Object.assign({column:"createTime",order:"desc"},n)}Object.assign(t,{beforeFetch:g}),typeof e.beforeFetch=="function"&&(t.beforeFetch=function(n){return n=g(n),e.beforeFetch(n),n});const m=O([]),s=O([]),u=(i=e==null?void 0:e.rowSelection)!=null?i:{},c=B(b(x({},u),{type:(f=u.type)!=null?f:"checkbox",columnWidth:(y=u.columnWidth)!=null?y:50,selectedRows:s,selectedRowKeys:m,onChange(...n){m.value=n[0],s.value=n[1],typeof u.onChange=="function"&&u.onChange(...n)}}));return delete t.rowSelection,[...I(t),{selectedRows:s,selectedRowKeys:m,rowSelection:c}]}export{Ae as useListPage,q as useListTable};