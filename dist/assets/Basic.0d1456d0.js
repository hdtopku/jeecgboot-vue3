import B from"./BasicTable.4f050cd0.js";import"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{getBasicColumns as b,getBasicData as v}from"./tableData.de5b3584.js";import{j as h,C as t,q as A,r as c,s as E,t as k,v as i,w as r,y as p,z as m}from"./index.9d4ffdff.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";const y=h({components:{BasicTable:B},setup(){const o=t(!1),a=t(!1),n=t(!0),u=t(!0),s=t(!1);function d(){o.value=!o.value}function e(){n.value=!n.value}function l(){a.value=!0,setTimeout(()=>{a.value=!1,s.value={pageSize:20}},3e3)}function g(){u.value=!u.value}function C(f){console.log("ColumnChanged",f)}return{columns:b(),data:v(),canResize:o,loading:a,striped:n,border:u,toggleStriped:e,toggleCanResize:d,toggleLoading:l,toggleBorder:g,pagination:s,handleColumnChange:C}}}),z={class:"p-4"};function F(o,a,n,u,s,d){const e=c("a-button"),l=c("BasicTable");return E(),k("div",z,[i(l,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(e,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[p(m(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(e,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[p(m(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(e,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[p(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),i(e,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[p(m(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}const Co=A(y,[["render",F]]);export{Co as default};