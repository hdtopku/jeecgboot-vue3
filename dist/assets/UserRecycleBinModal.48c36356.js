var _=(h,p,r)=>new Promise((n,l)=>{var d=t=>{try{s(r.next(t))}catch(a){l(a)}},m=t=>{try{s(r.throw(t))}catch(a){l(a)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(d,m);s((r=r.apply(h,p)).next())});import{B as S}from"./index.ea6d1b33.js";import{B as A}from"./BasicTable.0cbd4b1b.js";import{T as M}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as V}from"./useTable.dfabdbf5.js";import{r as j}from"./user.data.5124849d.js";import{i as K,p as N,j as O}from"./user.api.790518f7.js";import{l as z,F as H,bG as L,t as c,v as C,V as g,z as o,y as i,W as w,L as u,B as W,C as b,ab as B,u as G}from"./index.a1b4e527.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";import"./validator.db5ea725.js";import"./renderUtils.ec63b001.js";const P=b(" \u6279\u91CF\u5220\u9664 "),U=b(" \u6279\u91CF\u8FD8\u539F "),$=b("\u6279\u91CF\u64CD\u4F5C "),Oe=z({__name:"UserRecycleBinModal",emits:["success","register"],setup(h,{emit:p}){const{createConfirm:r}=G(),n=H([]),[l]=L(()=>{n.value=[]}),[d,{reload:m}]=V({api:K,columns:j,rowKey:"id",striped:!0,useSearchForm:!1,showTableSetting:!1,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,pagination:!0,tableSetting:{fullScreen:!0},canResize:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}}),s={type:"checkbox",columnWidth:50,selectedRowKeys:n,onChange:t};function t(e){n.value=e}function a(e){return _(this,null,function*(){yield N({userIds:e.id},m),p("success")})}function k(){a({id:B(u(n)).join(",")})}function y(e){return _(this,null,function*(){yield O({userIds:e.id},m)})}function R(){r({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u6C38\u4E45\u5220\u9664\u5417\uFF1F\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF01",onOk:()=>y({id:B(u(n)).join(",")}),onCancel(){}})}function D(e){return[{label:"\u53D6\u56DE",icon:"ant-design:redo-outlined",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u8FD8\u539F",confirm:a.bind(null,e)}},{label:"\u5F7B\u5E95\u5220\u9664",icon:"ant-design:scissor-outlined",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:y.bind(null,e)}}]}return(e,q)=>{const f=c("Icon"),F=c("a-menu-item"),T=c("a-menu"),E=c("a-button"),v=c("a-dropdown");return C(),g(u(S),W(e.$attrs,{onRegister:u(l),title:"\u7528\u6237\u56DE\u6536\u7AD9",showOkBtn:!1,width:"1000px",destroyOnClose:""}),{default:o(()=>[i(u(A),{onRegister:u(d),rowSelection:s},{tableTitle:o(()=>[n.value.length>0?(C(),g(v,{key:0},{overlay:o(()=>[i(T,null,{default:o(()=>[i(F,{key:"1",onClick:R},{default:o(()=>[i(f,{icon:"ant-design:delete-outlined"}),P]),_:1}),i(F,{key:"1",onClick:k},{default:o(()=>[i(f,{icon:"ant-design:redo-outlined"}),U]),_:1})]),_:1})]),default:o(()=>[i(E,null,{default:o(()=>[$,i(f,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):w("",!0)]),bodyCell:o(({column:x,record:I})=>[x.key==="action"?(C(),g(u(M),{key:0,actions:D(I)},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1},16,["onRegister"])}}});export{Oe as default};