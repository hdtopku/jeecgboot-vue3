import{B as c}from"./BasicTable.0cbd4b1b.js";import"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as l}from"./useTable.dfabdbf5.js";import{getBasicColumns as d}from"./tableData.01351cef.js";import{a as _}from"./index.6fc95f6c.js";import{d as f}from"./table.2d93b69f.js";import{q as g,l as C,t as r,v as B,V as h,z as t,y as i,C as n}from"./index.a1b4e527.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";const b=C({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:e}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){e()}function a(){e({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:a}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,e,p,a,R,y){const m=r("a-button"),s=r("BasicTable"),u=r("PageWrapper");return B(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(m,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(m,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var _o=g(b,[["render",F]]);export{_o as default};
