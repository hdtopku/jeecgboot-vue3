import{B as f}from"./BasicTable.0cbd4b1b.js";import{T as h}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as b}from"./useTable.dfabdbf5.js";import{a as C}from"./system.9531b9d3.js";import"./index.ea6d1b33.js";import{D as _,c as g,s as T}from"./DeptModal.0a787724.js";import{q as E,l as B,bH as D,t as o,v as M,x as S,y as i,z as s,C as R}from"./index.a1b4e527.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";const k=B({name:"system-dept",components:{BasicTable:f,DeptModal:_,TableAction:h},setup(){const[e,{openModal:n}]=D(),[l,{reload:p}]=b({title:"\u90E8\u95E8\u5217\u8868",api:C,columns:g,formConfig:{labelWidth:120,schemas:T},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function m(){n(!0,{isUpdate:!1})}function c(t){n(!0,{record:t,isUpdate:!0})}function r(t){console.log(t)}function a(){p()}return{registerTable:l,registerModal:e,handleCreate:m,handleEdit:c,handleDelete:r,handleSuccess:a}}}),v=R(" \u65B0\u589E\u90E8\u95E8 ");function y(e,n,l,p,m,c){const r=o("a-button"),a=o("TableAction"),t=o("BasicTable"),d=o("DeptModal");return M(),S("div",null,[i(t,{onRegister:e.registerTable},{tableTitle:s(()=>[i(r,{type:"primary",onClick:e.handleCreate},{default:s(()=>[v]),_:1},8,["onClick"])]),action:s(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ce=E(k,[["render",y]]);export{Ce as default};
