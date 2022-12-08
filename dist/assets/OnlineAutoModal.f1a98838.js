import{B as $}from"./index.117f635e.js";import L from"./OnlineForm.31793db0.js";import{k as O}from"./useAutoForm.b428d250.js";import{C as A}from"./CommentPanel.2170f3cf.js";import{j as V,C as _,E as j,f2 as W,r as u,s as c,Q as f,w as a,t as z,ax as Q,bc as q,y as C,z as G,R as H,v as h,x as J}from"./index.25572ab7.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./componentMap.c8679e96.js";import"./JAddInput.09222b6f.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.e8853ef1.js";import"./pick.5c5b7fa5.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./omit.80ddddf5.js";import"./_baseClone.d9404320.js";import"./OnlineSelectCascade.6e6329b2.js";import"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import"./Area.595c917d.js";import"./functional.ad7cd28c.js";import"./LinkTableListPiece.463fb0b6.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./BasicForm.0e850cba.js";import"./useForm.8e9d7e3a.js";import"./FormSchemaFactory.a3e23150.js";import"./uniqBy.0cca5e55.js";import"./useFormItem.06b13257.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./index.23d6b964.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./user.api.b828e243.js";import"./_commonjsHelpers.dc2475b4.js";import"./customExpression.05dc2408.js";import"./BasicTable.1043d787.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./useListPage.b0d7f469.js";import"./useTable.c365558e.js";import"./JModalTip.94a0f791.js";import"./_baseSlice.db64aae6.js";var K=(e,l,t)=>new Promise((s,p)=>{var d=o=>{try{m(t.next(o))}catch(n){p(n)}},r=o=>{try{m(t.throw(o))}catch(n){p(n)}},m=o=>o.done?s(o.value):Promise.resolve(o.value).then(d,r);m((t=t.apply(e,l)).next())});const U=V({name:"OnlineModal",props:{id:{type:String,default:""}},components:{BasicModal:$,OnlineForm:L,CommentPanel:A},emits:["success","register","formConfig"],setup(e,{emit:l}){console.log("\u8FDB\u5165\u8868\u5355\u5F39\u6846\u300B\u300B\u300B\u300Bmodal");const t=_();function s(){t.value&&t.value.reload()}const{title:p,modalWidth:d,registerModal:r,closeModal:m,cgButtonList:o,handleCgButtonClick:n,disableSubmit:i,handleSubmit:b,submitLoading:g,handleCancel:k,handleFormConfig:v,onlineFormCompRef:y,formTemplate:F,isTreeForm:S,pidFieldName:N,renderSuccess:R,formRendered:I,tableName:M,formDataId:w,enableComment:T,onCloseEvent:B}=O(!1,{emit:l},s);function D(P){l("success",P),m(),B()}j(()=>e.id,E,{immediate:!0});function E(){return K(this,null,function*(){I.value=!1,e.id&&(console.log("\u91CD\u65B0\u6E32\u67D3\u8868\u5355\u300B\u300B\u300B\u300Bmodal"),yield v(e.id,{}))})}return{title:p,onlineFormCompRef:y,renderSuccess:R,registerModal:r,handleSubmit:b,handleSuccess:D,handleCancel:k,modalWidth:d,formTemplate:F,disableSubmit:i,cgButtonList:o,handleCgButtonClick:n,isTreeForm:S,pidFieldName:N,submitLoading:g,tableName:M,formDataId:w,enableComment:T,commentPanelRef:t,onCloseEvent:B}}});function X(e,l,t,s,p,d){const r=u("a-button"),m=u("online-form"),o=u("comment-panel"),n=u("BasicModal");return c(),f(n,J({title:e.title,onCancel:e.onCloseEvent,enableComment:e.enableComment,width:e.modalWidth},e.$attrs,{height:600,onRegister:e.registerModal,wrapClassName:"jeecg-online-modal",onOk:e.handleSubmit}),{footer:a(()=>[(c(!0),z(Q,null,q(e.cgButtonList,i=>(c(),f(r,{key:i.id,type:"primary",onClick:b=>e.handleCgButtonClick(i.optType,i.buttonCode),preIcon:i.buttonIcon?"ant-design:"+i.buttonIcon:""},{default:a(()=>[C(G(i.buttonName),1)]),_:2},1032,["onClick","preIcon"]))),128)),e.disableSubmit?H("",!0):(c(),f(r,{key:"submit",type:"primary",onClick:e.handleSubmit,loading:e.submitLoading},{default:a(()=>[C("\u786E\u5B9A")]),_:1},8,["onClick","loading"])),h(r,{key:"back",onClick:e.handleCancel},{default:a(()=>[C("\u5173\u95ED")]),_:1},8,["onClick"])]),comment:a(()=>[h(o,{ref:"commentPanelRef",tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:a(()=>[h(m,{ref:"onlineFormCompRef",id:e.id,disabled:e.disableSubmit,"form-template":e.formTemplate,isTree:e.isTreeForm,pidField:e.pidFieldName,onRendered:e.renderSuccess,onSuccess:e.handleSuccess},null,8,["id","disabled","form-template","isTree","pidField","onRendered","onSuccess"])]),_:1},16,["title","onCancel","enableComment","width","onRegister","onOk"])}var ao=W(U,[["render",X]]);export{ao as default};