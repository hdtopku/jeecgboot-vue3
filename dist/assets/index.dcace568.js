import f from"./BasicTable.4f050cd0.js";import{T as b}from"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{u as h}from"./useTable.06d516c7.js";import{a as g}from"./system.d707faa9.js";import"./index.fa33ec21.js";import{D as C,c as T,s as _}from"./DeptModal.caef9dae.js";import{j as E,bI as D,q as B,r as o,s as M,t as S,v as i,w as s,y as R}from"./index.9d4ffdff.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";const k=E({name:"system-dept",components:{BasicTable:f,DeptModal:C,TableAction:b},setup(){const[t,{openModal:r}]=D(),[p,{reload:m}]=h({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:_},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function n(e){console.log(e)}function a(){m()}return{registerTable:p,registerModal:t,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(t,r,p,m,l,c){const n=o("a-button"),a=o("TableAction"),e=o("BasicTable"),d=o("DeptModal");return M(),S("div",null,[i(e,{onRegister:t.registerTable},{tableTitle:s(()=>[i(n,{type:"primary",onClick:t.handleCreate},{default:s(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:s(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}const Ct=B(k,[["render",w]]);export{Ct as default};