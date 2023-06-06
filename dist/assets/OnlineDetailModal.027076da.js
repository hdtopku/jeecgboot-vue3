import{B as k}from"./index.df1721d5.js";import y from"./OnlineFormDetail.1c1c771f.js";import{k as M}from"./useAutoForm.6b2a8b3c.js";import{C as N}from"./CommentPanel.755e7cef.js";import{j as R,E as S,eH as I,r as s,s as $,Q as P,w as d,v as u,y as T,x as E}from"./index.0be4b5b8.js";import"./DetailForm.3e7b685a.js";import"./api.dbe6bd39.js";import"./Area.f5fd3d92.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.5d18f06b.js";import"./componentMap.6d6ce384.js";import"./OnlineSelectCascade.26764fec.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./JAddInput.d2fd0723.js";import"./pick.5c5b7fa5.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import"./useTable.9835c939.js";import"./LinkTableListPiece.2a96846d.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./OnlineSubFormDetail.2a0fd6ef.js";import"./BasicForm.be7f03c1.js";import"./uniqBy.a356d751.js";import"./useFormItem.77c38aa9.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./FormSchemaFactory.cd64bfa6.js";import"./user.api.324b85f8.js";import"./_commonjsHelpers.dc2475b4.js";import"./customExpression.05dc2408.js";import"./useForm.b4df01c5.js";import"./BasicTable.8e358715.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";import"./useListPage.3cb53a3e.js";import"./JModalTip.d56fa914.js";var O=(e,n,t)=>new Promise((l,i)=>{var p=o=>{try{r(t.next(o))}catch(m){i(m)}},a=o=>{try{r(t.throw(o))}catch(m){i(m)}},r=o=>o.done?l(o.value):Promise.resolve(o.value).then(p,a);r((t=t.apply(e,n)).next())});const j=R({name:"OnlineDetailModal",props:{id:{type:String,required:!1,default:""}},components:{BasicModal:k,OnlineFormDetail:y,CommentPanel:N},emits:["success","register"],setup(e){console.log("\u8FDB\u5165\u8868\u5355\u5F39\u6846\u300B\u300B\u300B\u300Bmodal");const{title:n,modalWidth:t,registerModal:l,cgButtonList:i,handleCgButtonClick:p,disableSubmit:a,handleSubmit:r,submitLoading:o,handleCancel:m,handleFormConfig:c,onlineFormCompRef:f,formTemplate:h,isTreeForm:C,pidFieldName:b,renderSuccess:B,formRendered:g,showSub:w,tableName:_,formDataId:v,enableComment:F}=M();S(()=>e.id,D,{immediate:!0});function D(){return O(this,null,function*(){g.value=!1,e.id&&(console.log("\u91CD\u65B0\u6E32\u67D3\u8868\u5355\u300B\u300B\u300B\u300Bmodal"),yield c(e.id,{}))})}return{title:n,onlineFormCompRef:f,renderSuccess:B,registerModal:l,handleSubmit:r,handleCancel:m,modalWidth:t,formTemplate:h,disableSubmit:a,cgButtonList:i,handleCgButtonClick:p,isTreeForm:C,pidFieldName:b,submitLoading:o,showSub:w,tableName:_,formDataId:v,enableComment:F}}});function L(e,n,t,l,i,p){const a=s("a-button"),r=s("online-form-detail"),o=s("comment-panel"),m=s("BasicModal");return $(),P(m,E({title:e.title,width:e.modalWidth,height:600,enableComment:e.enableComment,defaultFullscreen:!1},e.$attrs,{onRegister:e.registerModal,wrapClassName:"jeecg-online-detail-modal"}),{footer:d(()=>[u(a,{key:"back",onClick:e.handleCancel},{default:d(()=>[T("\u5173\u95ED")]),_:1},8,["onClick"])]),comment:d(()=>[u(o,{tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:d(()=>[u(r,{ref:"onlineFormCompRef",id:e.id,"form-template":e.formTemplate,"show-sub":e.showSub,onRendered:e.renderSuccess},null,8,["id","form-template","show-sub","onRendered"])]),_:1},16,["title","width","enableComment","onRegister"])}var We=I(j,[["render",L]]);export{We as default};