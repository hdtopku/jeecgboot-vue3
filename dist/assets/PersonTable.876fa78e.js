import{B as h}from"./BasicTable.0cbd4b1b.js";import{T as k}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as C}from"./useTable.dfabdbf5.js";import{l as w,q as _,t as p,v as E,x as D,y as s,z as c,C as T}from"./index.a1b4e527.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],B=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=w({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:e}]=C({columns:g,showIndexColumn:!1,dataSource:B,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function m(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=e(),f=i.findIndex(b=>b.key===t.key);i.splice(f,1)}}function r(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){console.log(t)}function u(){const t=e(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function l(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:r.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:m.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:l,handleAdd:u,getDataSource:e,handleEditChange:d}}}),x=T(" \u65B0\u589E\u6210\u5458 ");function F(n,e,a,m,r,d){const u=p("TableAction"),l=p("BasicTable"),t=p("a-button");return E(),D("div",null,[s(l,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:i})=>[s(u,{actions:n.createActions(o,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),s(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[x]),_:1},8,["onClick"])])}var ft=_(N,[["render",F]]);export{ft as default};