import{B as f}from"./BasicTable.f15f6361.js";import{T as h}from"./helper.df0282ae.js";import"./TableImg.1a54e7ea.js";import{u as b}from"./useTable.1fe79c1d.js";import{c as C}from"./system.6822f91a.js";import{a as T}from"./index.8ce2f7e8.js";import{M as g,c as _,s as D}from"./MenuDrawer.8b7a59b0.js";import{q as w,l as S,t as o,v as B,x as F,y as r,z as m,Q as M,C as k}from"./index.a86a095a.js";import"./BasicForm.638a5420.js";import"./uniqBy.37746f07.js";import"./index.6aad32b5.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import"./useFormItem.26c7ddf2.js";import"./api.8ffe844e.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./RedoOutlined.cb450b29.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./index.2f02ed00.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:g,TableAction:h},setup(){const[e,{openDrawer:n}]=T(),[p,{reload:l,expandAll:u}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:_,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function i(t){n(!0,{record:t,isUpdate:!0})}function a(t){console.log(t)}function s(){l()}function c(){M(u)}return{registerTable:p,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:a,handleSuccess:s,onFetchSuccess:c}}}),v=k(" \u65B0\u589E\u83DC\u5355 ");function x(e,n,p,l,u,d){const i=o("a-button"),a=o("TableAction"),s=o("BasicTable"),c=o("MenuDrawer");return B(),F("div",null,[r(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{tableTitle:m(()=>[r(i,{type:"primary",onClick:e.handleCreate},{default:m(()=>[v]),_:1},8,["onClick"])]),action:m(({record:t})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ge=w(R,[["render",x]]);export{ge as default};