var L=(h,m,t)=>new Promise((e,p)=>{var u=r=>{try{s(t.next(r))}catch(a){p(a)}},f=r=>{try{s(t.throw(r))}catch(a){p(a)}},s=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);s((t=t.apply(h,m)).next())});import{a1 as C,l as T,F as w,s as k,dP as D,bH as R,H as A,Q as S,aW as B,t as I,v as g,x as _,aw as V,bb as H,R as M,S as j,y as i,L as o,z as n,C as b,D as y}from"./index.a1b4e527.js";import F from"./DetailModal.adc57811.js";import{B as N}from"./BasicTable.0cbd4b1b.js";import{T as $}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as z}from"./useTable.dfabdbf5.js";import"./index.ea6d1b33.js";import{getColumns as P}from"./data.a355cf2d.js";import"./index.adaca91a.js";import"./useDescription.889f00ce.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";const Q=()=>C.get({url:"/error"}),W={class:"p-4"},q=["src"],jr=T({__name:"index",setup(h){const m=w(),t=w([]),{t:e}=k(),p=D(),[u,{setTableData:f}]=z({title:e("sys.errorLog.tableTitle"),columns:P(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[s,{openModal:r}]=R();A(()=>p.getErrorLogInfoList,l=>{S(()=>{f(B(l))})},{immediate:!0});function a(l){m.value=l,r(!0)}function E(){throw new Error("fire vue error!")}function v(){t.value.push(`${new Date().getTime()}.png`)}function x(){return L(this,null,function*(){yield Q()})}return(l,G)=>{const d=I("a-button");return g(),_("div",W,[(g(!0),_(V,null,H(t.value,c=>M((g(),_("img",{key:c,src:c},null,8,q)),[[j,!1]])),128)),i(F,{info:m.value,onRegister:o(s)},null,8,["info","onRegister"]),i(o(N),{onRegister:o(u),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:E,type:"primary"},{default:n(()=>[b(y(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:v,type:"primary"},{default:n(()=>[b(y(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:x,type:"primary"},{default:n(()=>[b(y(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:n(({record:c})=>[i(o($),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{jr as default};