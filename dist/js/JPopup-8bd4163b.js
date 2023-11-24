import{aD as L,ar as H,b5 as fe,K as N,q as W,_ as X}from"./jeecg-online-vendor-d3e1865b.js";import{d as Y,r as U,l as w,e as V,u as a,w as E,s as me,a5 as qe,a6 as Fe,V as l,a7 as h,a8 as k,f as o,af as Z,aa as t,a9 as ge,F as Q,ab as he,v as Ce,ac as z,B as ye,ad as G,E as F,ae as _e,W as x,o as we}from"./vue-50733b77.js";import{B as ve}from"./index-f7d688aa.js";import{E as be,p as n,F as Se}from"./index-b34ff7bc.js";const Re=Y({name:"JPopupOnlReportModal",components:{BasicModal:ve,SearchFormItem:L(()=>N(()=>import("./SearchFormItem-f6faf7e3.js"),["js/SearchFormItem-f6faf7e3.js","js/vue-50733b77.js","js/jeecg-online-vendor-d3e1865b.js","js/antd-vue-vendor-c5335947.js","js/tinymce-vendor-7c917b36.js","js/lodash-es-vendor-058e2396.js","js/vxe-table-vendor-838914b0.js","assets/jeecg-online-vendor-cee2ba5d.css","js/JAddInput-9c2385b5.js","js/index-b34ff7bc.js","js/codemirror-vendor-9b2dceac.js","js/echarts-vendor-ba343549.js","assets/index-fe1627ce.css","js/areaDataUtil-5dfcdadb.js","js/useFormItem-915d7f1b.js","js/index-f7d688aa.js","js/BasicModal-064024e0.js","js/useWindowSizeFn-34cbae37.js","assets/BasicModal-1e1b2ed9.css","assets/index-361bf2db.css","js/JSelectUser-99e618da.js","js/props-2079d80b.js","js/JSelectBiz-f98b6288.js","assets/JSelectBiz-ba37f0a8.css","assets/JSelectUser-7fda8076.css","js/index-95220aa0.js","js/index-7963a080.js","js/bem-e62027cc.js","js/props-12d3a914.js","js/useContextMenu-e6153f12.js","assets/useContextMenu-6fcaad79.css","assets/index-a95e0833.css","js/depart.api-1967d2cb.js","assets/JAddInput-7960f0e9.css","js/index-7e7a94e9.js","js/useForm-14ceb529.js","js/componentMap-5c02cfaf.js","js/index-fa22fec6.js","assets/index-0a01c8ed.css","js/download-49b89a1a.js","js/base64Conver-fa2fe1af.js","js/index-54db12ae.js","assets/index-399aa0e3.css","js/index-f3acc26c.js","js/useCountdown-9338ec9a.js","js/useFormItemSingle-37938520.js","assets/index-15cc10f8.css","js/JSelectDept-0fd43050.js","assets/JSelectDept-2ce3f5d2.css","js/cron-parser-vendor-19ac00ef.js","js/JEllipsis-66e02300.js","js/JUpload-c8630cc9.js","assets/JUpload-b67dde08.css","js/index-665aeeac.js","js/index-1ac4dcff.js","assets/index-d42612fa.css","assets/componentMap-11d05ddc.css","assets/useForm-9101c3b7.css","assets/SearchFormItem-25096473.css"]),{loading:!1}),BasicTable:L(()=>N(()=>import("./BasicTable-ca5b2c76.js"),["js/BasicTable-ca5b2c76.js","js/vue-50733b77.js","js/jeecg-online-vendor-d3e1865b.js","js/antd-vue-vendor-c5335947.js","js/tinymce-vendor-7c917b36.js","js/lodash-es-vendor-058e2396.js","js/vxe-table-vendor-838914b0.js","assets/jeecg-online-vendor-cee2ba5d.css","js/index-b34ff7bc.js","js/codemirror-vendor-9b2dceac.js","js/echarts-vendor-ba343549.js","assets/index-fe1627ce.css","js/index-7e7a94e9.js","js/useForm-14ceb529.js","js/componentMap-5c02cfaf.js","js/useFormItem-915d7f1b.js","js/index-f7d688aa.js","js/BasicModal-064024e0.js","js/useWindowSizeFn-34cbae37.js","assets/BasicModal-1e1b2ed9.css","assets/index-361bf2db.css","js/index-fa22fec6.js","assets/index-0a01c8ed.css","js/download-49b89a1a.js","js/base64Conver-fa2fe1af.js","js/index-54db12ae.js","assets/index-399aa0e3.css","js/index-f3acc26c.js","js/useCountdown-9338ec9a.js","js/useFormItemSingle-37938520.js","assets/index-15cc10f8.css","js/JAddInput-9c2385b5.js","js/areaDataUtil-5dfcdadb.js","js/JSelectUser-99e618da.js","js/props-2079d80b.js","js/JSelectBiz-f98b6288.js","assets/JSelectBiz-ba37f0a8.css","assets/JSelectUser-7fda8076.css","js/index-95220aa0.js","js/index-7963a080.js","js/bem-e62027cc.js","js/props-12d3a914.js","js/useContextMenu-e6153f12.js","assets/useContextMenu-6fcaad79.css","assets/index-a95e0833.css","js/depart.api-1967d2cb.js","assets/JAddInput-7960f0e9.css","js/JSelectDept-0fd43050.js","assets/JSelectDept-2ce3f5d2.css","js/cron-parser-vendor-19ac00ef.js","js/JEllipsis-66e02300.js","js/JUpload-c8630cc9.js","assets/JUpload-b67dde08.css","js/index-665aeeac.js","js/index-1ac4dcff.js","assets/index-d42612fa.css","assets/componentMap-11d05ddc.css","assets/useForm-9101c3b7.css","js/injectionKey-69710956.js","assets/BasicTable-300e7560.css"]),{loading:!0})},props:["multi","code","sorter","groupId","param"],emits:["ok","register"],setup(e,{emit:r,refs:P}){const{createMessage:C}=W(),v=U({xs:{span:24},sm:{span:6}}),y=U({xs:{span:24},sm:{span:18}}),[s,{closeModal:i}]=be(),m=w(),d=w(),g=w(!1),_=H(),b=w({x:!0}),S=V(()=>Object.assign({},a(e),a(_))),[{visibleChange:u,loadColumnsInfo:c,dynamicParamHandler:T,loadData:p,handleChangeInTable:O,combineRowKey:B,clickThenCheck:R,filterUnuseSelect:ee,getOkSelectRows:oe},{visible:ae,rowSelection:ne,checkedKeys:K,selectRows:I,pagination:D,dataSource:te,columns:j,loading:le,title:re,iSorter:M,queryInfo:$,queryParam:J,dictOptions:se}]=fe(S,d),ie=V(()=>a($)&&a($).length>0);E(()=>e.code,()=>{c()}),E(()=>e.param,()=>{ae&&(T(),p())}),me(()=>{if(e.sorter){let f=e.sorter.split("=");f.length===2&&["asc","desc"].includes(f[1].toLowerCase())&&(M.value={column:f[0],order:f[1].toLowerCase()},a(j).forEach(q=>{q.dataIndex===a(M).column?q.sortOrder=a(M).order==="asc"?"ascend":"descend":q.sortOrder=!1}))}}),E(()=>D.current,f=>{f&&d.value.setPagination({current:f})});function de(){g.value=!a(g)}function A(){i(),K.value=[],I.value=[],d.value.clearSelectedRowKeys()}function ce(){if(ee(),!e.multi&&a(I)&&a(I).length>1)return C.warning("只能选择一条记录"),!1;if(!a(I)||a(I).length==0)return C.warning("至少选择一条记录"),!1;let f=oe();r("ok",f),A()}function ue(){p(1)}function pe(){J.value={},p(1)}return{attrs:_,register:s,tableScroll:b,dataSource:te,pagination:D,columns:j,rowSelection:ne,checkedKeys:K,loading:le,title:re,handleCancel:A,handleSubmit:ce,clickThenCheck:R,loadData:p,combineRowKey:B,handleChangeInTable:O,visibleChange:u,queryInfo:$,queryParam:J,tableRef:d,formRef:m,labelCol:v,wrapperCol:y,dictOptions:se,showSearchFlag:ie,toggleSearchStatus:g,handleToggleSearch:de,searchQuery:ue,searchReset:pe}}});const Ie={key:0,class:"jeecg-basic-table-form-container"},ke={style:{float:"left",overflow:"hidden"},class:"table-page-search-submitButtons"};function Oe(e,r,P,C,v,y){const s=l("SearchFormItem"),i=l("a-col"),m=l("a-button"),d=l("Icon"),g=l("a-row"),_=l("a-form"),b=l("BasicTable"),S=l("BasicModal");return h(),k("div",null,[o(S,Z(e.$attrs,{onRegister:e.register,title:e.title,width:1200,onOk:e.handleSubmit,onCancel:e.handleCancel,cancelText:"关闭",wrapClassName:"j-popup-modal",onVisibleChange:e.visibleChange}),{default:t(()=>[e.showSearchFlag?(h(),k("div",Ie,[o(_,{ref:"formRef",model:e.queryParam,"label-col":e.labelCol,"wrapper-col":e.wrapperCol,onKeyup:ge(e.searchQuery,["enter","native"])},{default:t(()=>[o(g,{gutter:24},{default:t(()=>[(h(!0),k(Q,null,he(e.queryInfo,(u,c)=>(h(),k(Q,null,[u.hidden==="1"?Ce((h(),z(i,{md:8,sm:24,key:"query"+c},{default:t(()=>[o(s,{formElRef:e.formRef,queryParam:e.queryParam,item:u,dictOptions:e.dictOptions},null,8,["formElRef","queryParam","item","dictOptions"])]),_:2},1024)),[[ye,e.toggleSearchStatus]]):(h(),z(i,{md:8,sm:24,key:"query"+c},{default:t(()=>[o(s,{formElRef:e.formRef,queryParam:e.queryParam,item:u,dictOptions:e.dictOptions},null,8,["formElRef","queryParam","item","dictOptions"])]),_:2},1024))],64))),256)),o(i,{md:8,sm:8},{default:t(()=>[G("span",ke,[o(i,{lg:6},{default:t(()=>[o(m,{type:"primary",preIcon:"ant-design:reload-outlined",onClick:e.searchReset},{default:t(()=>[F("重置")]),_:1},8,["onClick"]),o(m,{type:"primary",preIcon:"ant-design:search-outlined",onClick:e.searchQuery,style:{"margin-left":"8px"}},{default:t(()=>[F("查询")]),_:1},8,["onClick"]),G("a",{onClick:r[0]||(r[0]=(...u)=>e.handleToggleSearch&&e.handleToggleSearch(...u)),style:{"margin-left":"8px"}},[F(_e(e.toggleSearchStatus?"收起":"展开")+" ",1),o(d,{icon:e.toggleSearchStatus?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])]),_:1})])]),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col","onKeyup"])])):x("",!0),o(b,{ref:"tableRef",canResize:!1,bordered:!0,loading:e.loading,rowKey:e.combineRowKey,columns:e.columns,showIndexColumn:!1,dataSource:e.dataSource,pagination:e.pagination,rowSelection:e.rowSelection,onRowClick:e.clickThenCheck,onChange:e.handleChangeInTable},{tableTitle:t(()=>[]),_:1},8,["loading","rowKey","columns","dataSource","pagination","rowSelection","onRowClick","onChange"])]),_:1},16,["onRegister","title","onOk","onCancel","onVisibleChange"])])}const Ee=X(Re,[["render",Oe],["__scopeId","data-v-6fd210c2"]]),Pe=Y({name:"JPopup",components:{JPopupOnlReportModal:Ee},inheritAttrs:!1,props:{code:n.string.def(""),value:n.string.def(""),sorter:n.string.def(""),width:n.number.def(1200),placeholder:n.string.def("请选择"),multi:n.bool.def(!1),param:n.object.def({}),spliter:n.string.def(","),groupId:n.string.def(""),formElRef:n.object,setFieldsValue:n.func,getContainer:n.func,fieldConfig:{type:Array,default:()=>[]}},emits:["update:value","register","popUpChange","focus"],setup(e,{emit:r,refs:P}){const{createMessage:C}=W(),v=H(),y=w(!0),s=w(""),[i,{openModal:m}]=Se();let{code:d,fieldConfig:g}=e;const _=V(()=>e.groupId?`${e.groupId}_${d}_${g[0].source}_${g[0].target}`:"");we(()=>{e.fieldConfig.length==0&&(C.error("popup参数未正确配置!"),y.value=!1)}),E(()=>e.value,c=>{s.value=c&&c.length>0?c.split(e.spliter).join(","):""},{immediate:!0});function b(){r("focus"),!e.disabled&&m(!0)}function S(){s.value=""}function u(c){let{fieldConfig:T}=e,p={};for(let O of T){let B=c.map(R=>R[O.source]).join(",");O.target.split(",").forEach(R=>{p[R]=B})}e.formElRef&&e.formElRef.setFieldsValue(p),e.setFieldsValue&&e.setFieldsValue(p),r("popUpChange",p)}return{showText:s,avalid:y,uniqGroupId:_,attrs:v,regModal:i,handleOpen:b,handleEmpty:S,callBack:u}}});const Te={key:0,class:"components-input-demo-presuffix"};function Be(e,r,P,C,v,y){const s=l("Icon"),i=l("a-input"),m=l("JPopupOnlReportModal");return e.avalid?(h(),k("div",Te,[o(i,Z({onClick:e.handleOpen,value:e.showText,"onUpdate:value":r[0]||(r[0]=d=>e.showText=d),placeholder:e.placeholder,readOnly:""},e.attrs),{prefix:t(()=>[o(s,{icon:"ant-design:cluster-outlined"})]),_:1},16,["onClick","value","placeholder"]),o(m,{onRegister:e.regModal,code:e.code,multi:e.multi,sorter:e.sorter,groupId:e.uniqGroupId,param:e.param,onOk:e.callBack,getContainer:e.getContainer},null,8,["onRegister","code","multi","sorter","groupId","param","onOk","getContainer"])])):x("",!0)}const De=X(Pe,[["render",Be],["__scopeId","data-v-4d3ebe5e"]]);export{De as d};