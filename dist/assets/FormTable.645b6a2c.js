import{B as f}from"./BasicTable.f15f6361.js";import"./helper.df0282ae.js";import"./TableImg.1a54e7ea.js";import{u as h}from"./useTable.1fe79c1d.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.01351cef.js";import{q as k,l as y,bF as C,F as b,t as i,v as s,V as B,z as o,y as n,x as c,aV as E,D as T,aw as D,C as m}from"./index.a86a095a.js";import{d as S}from"./table.36e37ea9.js";import"./BasicForm.638a5420.js";import"./uniqBy.37746f07.js";import"./index.6aad32b5.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import"./useFormItem.26c7ddf2.js";import"./api.8ffe844e.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./RedoOutlined.cb450b29.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./index.2f02ed00.js";const w=y({components:{BasicTable:f,AAlert:C},setup(){const e=b([]),[t,{getForm:a}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){console.log(a().getFieldsValue())}function u(r){console.log(r),e.value=r}return{registerTable:t,getFormValues:p,checkedKeys:e,onSelectChange:u}}}),A=m(" custom-slot "),V=m("\u6E05\u7A7A"),K={key:1},v=m("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(e,t,a,p,u,r){const l=i("a-button"),d=i("a-alert"),g=i("BasicTable");return s(),B(g,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":o(()=>[A]),headerTop:o(()=>[n(d,{type:"info","show-icon":""},{message:o(()=>[e.checkedKeys.length>0?(s(),c(D,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(e.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),n(l,{type:"link",onClick:t[0]||(t[0]=N=>e.checkedKeys=[]),size:"small"},{default:o(()=>[V]),_:1})],64)):(s(),c("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:o(()=>[n(l,{type:"primary",onClick:e.getFormValues},{default:o(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var be=k(w,[["render",$]]);export{be as default};