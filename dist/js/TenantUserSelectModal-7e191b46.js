import{aD as g,X as h,_ as x}from"./jeecg-online-vendor-cfb58502.js";import{d as T,l,V as m,a7 as b,a8 as y,f as p,af as I,aa as d}from"./vue-ebecda47.js";import{B as S}from"./index-e91e8b28.js";import{e as C}from"./tenant.api-82c12bef.js";import{useListPage as v}from"./useListPage-52971497.js";import{u as R,a as B}from"./tenant.data-d59cff77.js";import{E as M}from"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-993283cc.js";import"./BasicTable-46b6c894.js";import"./index-a2e0ccba.js";import"./useForm-21b78d9f.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./injectionKey-69710956.js";import"./renderUtils-e0ecd00e.js";import"./validator-fb5fa821.js";import"./user.api-729c8827.js";const O=T({name:"TenantUserSelectModal",components:{BasicModal:S,BasicTable:g(()=>h(()=>import("./BasicTable-46b6c894.js"),["js/BasicTable-46b6c894.js","js/vue-ebecda47.js","js/jeecg-online-vendor-cfb58502.js","js/antd-vue-vendor-b75e8c06.js","js/tinymce-vendor-7c917b36.js","js/lodash-es-vendor-cd7703c8.js","js/vxe-table-vendor-4aae63bf.js","assets/jeecg-online-vendor-cee2ba5d.css","js/index-85cfc899.js","js/codemirror-vendor-9b2dceac.js","js/echarts-vendor-ba343549.js","assets/index-fe1627ce.css","js/index-a2e0ccba.js","js/useForm-21b78d9f.js","js/componentMap-c36c4b8d.js","js/useFormItem-ba20c4de.js","js/index-e91e8b28.js","js/BasicModal-7e6e7ae9.js","js/useWindowSizeFn-50bd5ea0.js","assets/BasicModal-1e1b2ed9.css","assets/index-361bf2db.css","js/index-be9b0972.js","assets/index-0a01c8ed.css","js/download-c9e5f3f7.js","js/base64Conver-fa2fe1af.js","js/index-96e99de8.js","assets/index-59756ec7.css","js/index-118a05d7.js","js/useCountdown-00a25cd7.js","js/useFormItemSingle-36e25e6f.js","assets/index-15cc10f8.css","js/JAddInput-64f6e84f.js","js/areaDataUtil-4a5c6609.js","js/JSelectUser-94adcf4d.js","js/props-c57324f9.js","js/JSelectBiz-4fc2f082.js","assets/JSelectBiz-ba37f0a8.css","assets/JSelectUser-7fda8076.css","js/index-1c3e0ea1.js","js/index-097af6f9.js","js/bem-311698ef.js","js/props-13a58630.js","js/useContextMenu-eb481e60.js","assets/useContextMenu-6fcaad79.css","assets/index-a95e0833.css","js/depart.api-1888bf18.js","assets/JAddInput-7960f0e9.css","js/JSelectDept-394df716.js","assets/JSelectDept-2ce3f5d2.css","js/JPopup-f9a8bda3.js","assets/JPopup-00750b3f.css","js/cron-parser-vendor-afad4b1e.js","js/JEllipsis-410bb5e8.js","js/JUpload-ffe34816.js","assets/JUpload-b67dde08.css","js/index-ae3841ab.js","js/index-ab54dd3c.js","assets/index-d42612fa.css","assets/componentMap-11d05ddc.css","assets/useForm-9101c3b7.css","js/injectionKey-69710956.js","assets/BasicTable-300e7560.css"]),{loading:!0})},props:{modalTitle:{type:String,default:"选择用户"},tenantId:{type:Number,default:0},excludeUserIdList:{type:Array,default:[]}},emits:["register","on-select"],setup(e,{emit:a,refs:c}){const t=l({x:!1}),o=l(),[s,{closeModal:n}]=M(()=>{window.innerWidth<900?t.value={x:900}:t.value={x:!1},setTimeout(()=>{o.value&&o.value.setSelectedRowKeys([])},800)}),r=[{title:"账号",dataIndex:"username",width:40,align:"left"},{title:"姓名",dataIndex:"realname",width:40},{title:"性别",dataIndex:"sex_dictText",width:20},{title:"手机号码",dataIndex:"phone",width:30},{title:"邮箱",dataIndex:"email",width:40},{title:"状态",dataIndex:"status_dictText",width:20}],{prefixCls:P,tableContext:f}=v({designScope:"tenant-template",tableProps:{api:C,columns:R,scroll:{y:390},rowKey:"id",showActionColumn:!1,formConfig:{schemas:B,labelWidth:60,actionColOptions:{xs:24,sm:8,md:8,lg:8,xl:8,xxl:8}},beforeFetch:w=>Object.assign(w,{userTenantId:e.tenantId})}}),[u,{reload:U},{rowSelection:i,selectedRowKeys:$}]=f;function _(){a("on-select",i.selectedRows,i.selectedRowKeys)}return{handleOk:_,register:s,columns:r,rowSelection:i,tableScroll:t,tableRef:o,registerTable:u}}});function k(e,a,c,t,o,s){const n=m("BasicTable"),r=m("BasicModal");return b(),y("div",null,[p(r,I(e.$attrs,{onRegister:e.register,title:e.modalTitle,width:"900px",wrapClassName:"j-user-select-modal",onOk:e.handleOk,destroyOnClose:""}),{default:d(()=>[p(n,{ref:"tableRef",onRegister:e.registerTable,rowSelection:e.rowSelection},{tableTitle:d(()=>[]),_:1},8,["onRegister","rowSelection"])]),_:1},16,["onRegister","title","onOk"])])}const ke=x(O,[["render",k],["__scopeId","data-v-3efd8791"]]);export{ke as default};