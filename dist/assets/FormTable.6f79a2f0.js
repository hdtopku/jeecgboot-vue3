import{B as f}from"./BasicTable.1db2499e.js";import"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{u as h}from"./useTable.d616a74c.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.01351cef.js";import{q as k,l as y,bE as C,F as b,t as i,v as s,V as B,z as e,y as m,x as c,aU as E,D as T,av as D,C as n}from"./index.6c1aeca2.js";import{d as S}from"./table.255bf560.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";const A=y({components:{BasicTable:f,AAlert:C},setup(){const o=b([]),[t,{getForm:a}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){console.log(a().getFieldsValue())}function u(r){console.log(r),o.value=r}return{registerTable:t,getFormValues:p,checkedKeys:o,onSelectChange:u}}}),w=n(" custom-slot "),V=n("\u6E05\u7A7A"),v={key:1},K=n("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,t,a,p,u,r){const l=i("a-button"),d=i("a-alert"),g=i("BasicTable");return s(),B(g,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":e(()=>[w]),headerTop:e(()=>[m(d,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(s(),c(D,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),m(l,{type:"link",onClick:t[0]||(t[0]=N=>o.checkedKeys=[]),size:"small"},{default:e(()=>[V]),_:1})],64)):(s(),c("span",v,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[m(l,{type:"primary",onClick:o.getFormValues},{default:e(()=>[K]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var To=k(A,[["render",$]]);export{To as default};