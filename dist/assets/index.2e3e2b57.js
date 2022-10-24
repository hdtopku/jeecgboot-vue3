import{B as f}from"./BasicTable.0cbd4b1b.js";import{T as h}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as b}from"./useTable.dfabdbf5.js";import{d as C}from"./system.9531b9d3.js";import{a as _}from"./index.a4221efd.js";import{R as g,c as T,s as D}from"./RoleDrawer.fda88728.js";import{q as w,l as R,t,v as B,x as S,y as r,z as s,C as y}from"./index.a1b4e527.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";const k=R({name:"system-demorole",components:{BasicTable:f,RoleDrawer:g,TableAction:h},setup(){const[e,{openDrawer:i}]=_(),[m,{reload:l}]=b({title:"\u89D2\u8272\u5217\u8868",api:C,columns:T,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){l()}return{registerTable:m,registerDrawer:e,handleCreate:p,handleEdit:c,handleDelete:n,handleSuccess:a}}}),v=y(" \u65B0\u589E\u89D2\u8272 ");function E(e,i,m,l,p,c){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),d=t("RoleDrawer");return B(),S("div",null,[r(o,{onRegister:e.registerTable},{tableTitle:s(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:s(()=>[v]),_:1},8,["onClick"])]),action:s(({record:u})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var _e=w(k,[["render",E]]);export{_e as default};
