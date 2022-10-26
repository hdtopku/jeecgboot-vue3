import{B as S}from"./BasicTable.1db2499e.js";import{T as F}from"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{u as y}from"./useTable.d616a74c.js";import{b as B}from"./system.1467cc0f.js";import{a as D}from"./index.866fff1a.js";import w from"./DeptTree.06e1a2a0.js";import"./index.c1c509d9.js";import{A,c as k,s as I}from"./AccountModal.5e714f44.js";import{q as E,l as M,dW as V,bG as W,a7 as R,t,v as C,V as _,z as n,y as r,W as $,C as v}from"./index.6c1aeca2.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const N=M({name:"system-account",components:{BasicTable:S,PageWrapper:D,DeptTree:w,AccountModal:A,TableAction:F},setup(){const o=V(),[h,{openModal:i}]=W(),a=R({}),[b,{reload:l,updateTableDataRecord:s}]=y({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:k,formConfig:{labelWidth:120,schemas:I,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return console.log("handleSearchInfoFn",e),e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function c(){i(!0,{isUpdate:!1})}function u(e){console.log(e),i(!0,{record:e,isUpdate:!0})}function p(e){console.log(e)}function m({isUpdate:e,values:g}){if(e){const T=s(g.id,g);console.log(T)}else l()}function d(e=""){a.deptId=e,l()}function f(e){o("/system/account_detail/"+e.id)}return{registerTable:b,registerModal:h,handleCreate:c,handleEdit:u,handleDelete:p,handleSuccess:m,handleSelect:d,handleView:f,searchInfo:a}}}),P=v("\u65B0\u589E\u8D26\u53F7");function x(o,h,i,a,b,l){const s=t("DeptTree"),c=t("a-button"),u=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),r(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:n(()=>[r(c,{type:"primary",onClick:o.handleCreate},{default:n(()=>[P]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:e})=>[f.key==="action"?(C(),_(u,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,e)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister","searchInfo"]),r(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Ee=E(N,[["render",x]]);export{Ee as default};