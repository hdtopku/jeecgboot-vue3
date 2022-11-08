import{B as e}from"./BasicTable.0748ea8a.js";import{T as t}from"./helper.1c9dc9a5.js";import"./TableImg.e204e8e3.js";import{u as o}from"./useTable.6359f662.js";import{e as i}from"./system.d1710ccf.js";import{a as s}from"./index.65c1cb1a.js";import{T as r,c as n,s as a}from"./TestDrawer.97640535.js";import{q as d,l as c,t as m,v as p,x as l,y as u,z as j,C as b}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./uniqBy.91f18935.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";const f=c({name:"system-test",components:{BasicTable:e,TestDrawer:r,TableAction:t},setup(){const[e,{openDrawer:t}]=s(),[r,{reload:d}]=o({title:"列表数据",api:i,columns:n,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}}),h=b(" 新增 ");var x=d(f,[["render",function(e,t,o,i,s,r){const n=m("a-button"),a=m("TableAction"),d=m("BasicTable"),c=m("TestDrawer");return p(),l("div",null,[u(d,{onRegister:e.registerTable},{tableTitle:j((()=>[u(n,{type:"primary",onClick:e.handleCreate},{default:j((()=>[h])),_:1},8,["onClick"])])),action:j((({record:t})=>[u(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}]]);export{x as default};