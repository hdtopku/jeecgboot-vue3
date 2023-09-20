import{B as x}from"./index-abefda79.js";import{O as W}from"./OnlineForm-630a22c2-04e23fa6.js";import{q as D}from"./useExtendComponent-48d37d9b-12d786a6.js";import{q as V}from"./CommentPanel-14e41c4c.js";import{Q as _}from"./jeecg-online-vendor-658239c9.js";import"./index-0d179770.js";import"./componentMap-8ca03aee.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3e2c32c1.js";import"./antd-vue-vendor-a78909e6.js";import"./JAddInput-b8d2ab38.js";import"./JSelectUser-d2cfe039.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import"./cron-parser-vendor-7c1c3251.js";import"./JUpload.vue_vue_type_style_index_0_lang-e11e0a89.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang-366be6b6.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9ce97bb7.js";import"./useTable-28fc0fe6.js";import"./LinkTableListPiece-34266919-4055fe27.js";import{d as q,k as A,w as $,V as c,a5 as u,a9 as f,a7 as n,a6 as j,F as Q,a8 as X,E as b,ab as Y,W as z,f as C,ag as G}from"./vue-bcbaddf9.js";import"./BasicModal-d4150903.js";import"./useWindowSizeFn-fbe431de.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm-21b7ac92.js";import"./useForm-69b31c99.js";import"./constant-fe20103a-44089532.js";import"./useFormItem-9082d1c8.js";import"./download-f4ef666f.js";import"./base64Conver-fa2fe1af.js";import"./index-e3a70fab.js";import"./index-42cd22d1.js";import"./useCountdown-d0291e3c.js";import"./index-ebd3f065.js";import"./areaDataUtil-661e31ab.js";import"./props-8e60cede.js";import"./JSelectBiz-8b34874f.js";import"./index-8e0aeea9.js";import"./codemirror-vendor-7570b8a9.js";import"./index-6219dca4.js";import"./bem-6b2974b6.js";import"./props-c7c3390f.js";import"./useContextMenu-fdbf9c9a.js";import"./depart.api-380afd6d.js";import"./user.api-32d45f59.js";import"./customExpression-62f5afd1.js";import"./BasicTable-438c62dc.js";import"./injectionKey-69710956.js";import"./useListPage-66893768.js";import"./OnlineSelectCascade-c7baf52b-00f9ce78.js";import"./JModalTip-abe1515a-19b37ab6.js";var H=(e,l,o)=>new Promise((s,d)=>{var p=t=>{try{a(o.next(t))}catch(r){d(r)}},m=t=>{try{a(o.throw(t))}catch(r){d(r)}},a=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,m);a((o=o.apply(e,l)).next())});const J=q({name:"OnlineAutoModal",props:{id:{type:String,default:""}},components:{BasicModal:x,OnlineForm:W,CommentPanel:V},emits:["success","register","formConfig"],setup(e,{emit:l}){const o=A();function s(){o.value&&o.value.reload()}const{title:d,modalWidth:p,registerModal:m,closeModal:a,cgButtonList:t,handleCgButtonClick:r,disableSubmit:i,handleSubmit:h,submitLoading:k,handleCancel:S,handleFormConfig:F,onlineFormCompRef:T,formTemplate:y,isTreeForm:B,pidFieldName:N,renderSuccess:v,formRendered:R,tableName:I,formDataId:M,enableComment:w,onCloseEvent:g,themeTemplate:L}=D(!1,{emit:l},s);function E(P){l("success",P),a(),g()}$(()=>e.id,O,{immediate:!0});function O(){return H(this,null,function*(){R.value=!1,e.id&&(yield F(e.id,{}))})}return{title:d,onlineFormCompRef:T,renderSuccess:v,registerModal:m,handleSubmit:h,handleSuccess:E,handleCancel:S,modalWidth:p,formTemplate:y,disableSubmit:i,cgButtonList:t,handleCgButtonClick:r,isTreeForm:B,pidFieldName:N,submitLoading:k,tableName:I,formDataId:M,enableComment:w,commentPanelRef:o,onCloseEvent:g,themeTemplate:L}}});function K(e,l,o,s,d,p){const m=c("a-button"),a=c("online-form"),t=c("comment-panel"),r=c("BasicModal");return u(),f(r,G({title:e.title,onCancel:e.onCloseEvent,enableComment:e.enableComment,width:e.modalWidth},e.$attrs,{height:600,onRegister:e.registerModal,wrapClassName:"jeecg-online-modal",onOk:e.handleSubmit}),{footer:n(()=>[(u(!0),j(Q,null,X(e.cgButtonList,i=>(u(),f(m,{key:i.id,type:"primary",onClick:h=>e.handleCgButtonClick(i.optType,i.buttonCode),preIcon:i.buttonIcon?"ant-design:"+i.buttonIcon:""},{default:n(()=>[b(Y(i.buttonName),1)]),_:2},1032,["onClick","preIcon"]))),128)),e.disableSubmit?z("",!0):(u(),f(m,{key:"submit",type:"primary",onClick:e.handleSubmit,loading:e.submitLoading},{default:n(()=>[b("确定")]),_:1},8,["onClick","loading"])),C(m,{key:"back",onClick:e.handleCancel},{default:n(()=>[b("关闭")]),_:1},8,["onClick"])]),comment:n(()=>[C(t,{ref:"commentPanelRef",tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:n(()=>[C(a,{ref:"onlineFormCompRef",id:e.id,disabled:e.disableSubmit,"form-template":e.formTemplate,isTree:e.isTreeForm,pidField:e.pidFieldName,themeTemplate:e.themeTemplate,onRendered:e.renderSuccess,onSuccess:e.handleSuccess},null,8,["id","disabled","form-template","isTree","pidField","themeTemplate","onRendered","onSuccess"])]),_:1},16,["title","onCancel","enableComment","width","onRegister","onOk"])}const Ke=_(J,[["render",K]]);export{Ke as default};