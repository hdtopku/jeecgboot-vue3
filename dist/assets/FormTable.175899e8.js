import d from"./BasicTable.4f050cd0.js";import"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{u as h}from"./useTable.06d516c7.js";import{getBasicColumns as F,getFormConfig as k}from"./tableData.de5b3584.js";import{j as y,bG as C,C as b,q as _,r as i,s as m,Q as B,w as o,y as s,v as n,t as c,ax as E,aW as T,z as S}from"./index.9d4ffdff.js";import{d as w}from"./table.9588b1fb.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";const A=y({components:{BasicTable:d,AAlert:C},setup(){const e=b([]),[t,{getForm:a}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:w,columns:F(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){console.log(a().getFieldsValue())}function u(r){console.log(r),e.value=r}return{registerTable:t,getFormValues:p,checkedKeys:e,onSelectChange:u}}}),D={key:1};function K(e,t,a,p,u,r){const l=i("a-button"),g=i("a-alert"),f=i("BasicTable");return m(),B(f,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":o(()=>[s(" custom-slot ")]),headerTop:o(()=>[n(g,{type:"info","show-icon":""},{message:o(()=>[e.checkedKeys.length>0?(m(),c(E,{key:0},[T("span",null,"\u5DF2\u9009\u4E2D"+S(e.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),n(l,{type:"link",onClick:t[0]||(t[0]=V=>e.checkedKeys=[]),size:"small"},{default:o(()=>[s("\u6E05\u7A7A")]),_:1})],64)):(m(),c("span",D,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:o(()=>[n(l,{type:"primary",onClick:e.getFormValues},{default:o(()=>[s("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}const be=_(A,[["render",K]]);export{be as default};