var E=(h,m,t)=>new Promise((e,p)=>{var u=r=>{try{s(t.next(r))}catch(a){p(a)}},f=r=>{try{s(t.throw(r))}catch(a){p(a)}},s=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);s((t=t.apply(h,m)).next())});import{Z as C,j as T,C as w,o as k,d_ as D,bI as R,E as A,M as I,aY as M,r as S,s as g,t as _,ax as V,bc as j,N as B,O as N,v as i,H as o,w as n,y,z as b}from"./index.0be4b5b8.js";import{_ as H}from"./DetailModal.vue_vue_type_script_setup_true_lang.02e741f9.js";import $ from"./BasicTable.8e358715.js";import{T as z}from"./componentMap.6d6ce384.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import{u as F}from"./useTable.9835c939.js";import"./index.df1721d5.js";import{getColumns as O}from"./data.a31eb62b.js";import"./index.965687c5.js";import"./useDescription.48c91166.js";import"./BasicForm.be7f03c1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./JAddInput.d2fd0723.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./useForm.b4df01c5.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";const Y=()=>C.get({url:"/error"}),Z={class:"p-4"},q=["src"],Mr=T({__name:"index",setup(h){const m=w(),t=w([]),{t:e}=k(),p=D(),[u,{setTableData:f}]=F({title:e("sys.errorLog.tableTitle"),columns:O(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[s,{openModal:r}]=R();A(()=>p.getErrorLogInfoList,l=>{I(()=>{f(M(l))})},{immediate:!0});function a(l){m.value=l,r(!0)}function L(){throw new Error("fire vue error!")}function v(){t.value.push(`${new Date().getTime()}.png`)}function x(){return E(this,null,function*(){yield Y()})}return(l,G)=>{const d=S("a-button");return g(),_("div",Z,[(g(!0),_(V,null,j(t.value,c=>B((g(),_("img",{key:c,src:c},null,8,q)),[[N,!1]])),128)),i(H,{info:m.value,onRegister:o(s)},null,8,["info","onRegister"]),i(o($),{onRegister:o(u),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:v,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:x,type:"primary"},{default:n(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:n(({record:c})=>[i(o(z),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{Mr as default};