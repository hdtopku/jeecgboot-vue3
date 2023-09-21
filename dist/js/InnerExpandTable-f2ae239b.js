import{b as s,D as S}from"./jeecg-online-vendor-ecddc31b.js";import _ from"./BasicTable-11e9afcb.js";import{Q as B}from"./componentMap-bab84cb7.js";import{u as E}from"./useTable-992ea772.js";import"./index-cd2db611.js";import D from"./JVxeTableModal-b424ff60.js";import{z as V}from"./index-b03d7914.js";import{d as z,k as p,V as x,a5 as L,a9 as U,a7 as n,f as r,u as o,E as A}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicTable.vue_vue_type_style_index_0_lang-cd503db7.js";import"./BasicForm-1c4cfe6b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import"./BasicModal-951c06ee.js";import"./useWindowSizeFn-13ef0f26.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-799a6766.js";import"./JAddInput-903fbbea.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-4b66c33c.js";import"./JSelectUser-14c3fad5.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import"./cron-parser-vendor-d9194a40.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./index-5ded5f19.js";import"./jvxetable.api-c5e475f9.js";import"./useJvxeMethods-34429193.js";import"./vxeUtils-7ec74011.js";const N=z({__name:"InnerExpandTable",setup(j){const a={list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"},d=p([]),c=p([]),l=p([]),g=[{title:"订单号",align:"center",dataIndex:"orderCode",width:100},{title:"订单类型",align:"center",dataIndex:"ctype",width:100,customRender:({text:e})=>{let t="";return e==="1"?t="国内订单":e==="2"&&(t="国际订单"),t}},{title:"订单日期",align:"center",width:100,dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney",width:100},{title:"订单备注",align:"center",dataIndex:"content",width:100}],h=[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return e.value=="1"?"男":e.value=="2"?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"}],b=e=>s.get({url:a.list,params:e}),[I,{openModal:m}]=V(),[w,{reload:u}]=E({columns:g,api:b,rowKey:"id",striped:!0,useSearchForm:!1,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,actionColumn:{width:110,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),y={type:"checkbox",columnWidth:30,selectedRowKeys:c,onChange:R};function R(e){c.value=e}function v(e,t){d.value=[],l.value=[],e===!0&&(d.value.push(t.id),s.get({url:a.customerListByMainId,params:{orderId:t.id}},{isTransformResponse:!1}).then(i=>{i.success&&(l.value=i.result.records)}))}function T(){m(!0,{isUpdate:!1})}function C(e){m(!0,{record:e,isUpdate:!0})}function k(e){s.delete({url:a.delete,data:{id:e.id}},{joinParamsToUrl:!0}).then(()=>{u()})}function K(e){return[{label:"编辑",onClick:C.bind(null,e)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:k.bind(null,e)}}]}return(e,t)=>{const i=x("a-button"),M=x("a-card");return L(),U(M,{bordered:!1},{default:n(()=>[r(o(_),{onRegister:o(w),expandedRowKeys:d.value,rowSelection:y,onExpand:v},{tableTitle:n(()=>[r(i,{type:"primary",onClick:T,preIcon:"ant-design:plus-outlined"},{default:n(()=>[A(" 新增")]),_:1})]),expandedRowRender:n(()=>[r(o(_),{bordered:"",size:"middle",rowKey:"id",canResize:!1,columns:h,dataSource:l.value,pagination:!1},null,8,["dataSource"])]),action:n(({record:f})=>[r(o(B),{actions:K(f)},null,8,["actions"])]),_:1},8,["onRegister","expandedRowKeys"]),r(D,{onRegister:o(I),onSuccess:t[0]||(t[0]=f=>o(u)())},null,8,["onRegister"])]),_:1})}}});const De=S(N,[["__scopeId","data-v-eb82fc77"]]);export{De as default};