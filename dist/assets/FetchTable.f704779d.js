import{B as c}from"./BasicTable.1db2499e.js";import"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{u as l}from"./useTable.d616a74c.js";import{getBasicColumns as d}from"./tableData.01351cef.js";import{a as _}from"./index.866fff1a.js";import{d as f}from"./table.255bf560.js";import{q as g,l as C,t as r,v as B,V as h,z as t,y as i,C as n}from"./index.6c1aeca2.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const b=C({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:e}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){e()}function a(){e({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:a}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,e,p,a,R,y){const m=r("a-button"),s=r("BasicTable"),u=r("PageWrapper");return B(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(m,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(m,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var go=g(b,[["render",F]]);export{go as default};