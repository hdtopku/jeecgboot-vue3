import{B as e}from"./BasicTable.0748ea8a.js";import{T as t}from"./helper.1c9dc9a5.js";import"./TableImg.e204e8e3.js";import{u as o}from"./useTable.6359f662.js";import{a as i}from"./system.d1710ccf.js";import"./index.e1e06dd6.js";import{D as s,c as n,s as a}from"./DeptModal.5d9ddadc.js";import{q as r,l as d,bI as c,t as m,v as p,x as l,y as u,z as j,C as b}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./uniqBy.91f18935.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";const f=d({name:"system-dept",components:{BasicTable:e,DeptModal:s,TableAction:t},setup(){const[e,{openModal:t}]=c(),[s,{reload:r}]=o({title:"部门列表",api:i,columns:n,formConfig:{labelWidth:120,schemas:a},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){r()}}}}),h=b(" 新增部门 ");var x=r(f,[["render",function(e,t,o,i,s,n){const a=m("a-button"),r=m("TableAction"),d=m("BasicTable"),c=m("DeptModal");return p(),l("div",null,[u(d,{onRegister:e.registerTable},{tableTitle:j((()=>[u(a,{type:"primary",onClick:e.handleCreate},{default:j((()=>[h])),_:1},8,["onClick"])])),action:j((({record:t})=>[u(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}]]);export{x as default};