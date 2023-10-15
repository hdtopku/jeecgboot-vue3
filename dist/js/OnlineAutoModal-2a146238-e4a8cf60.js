import{B as x}from"./index-9d0047d3.js";import{O as W}from"./OnlineForm-630a22c2-b12a784f.js";import{q as D}from"./useExtendComponent-48d37d9b-a1e8211d.js";import{q as V}from"./CommentPanel-611e3474.js";import{Q as _}from"./jeecg-online-vendor-885afdd4.js";import"./index-4b015b65.js";import"./componentMap-b7e1d2b2.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./antd-vue-vendor-a78909e6.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import"./cron-parser-vendor-658b8fec.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang-5217d4dd.js";import"./BasicTable.vue_vue_type_style_index_0_lang-d58c7acd.js";import"./useTable-7249c6ae.js";import"./LinkTableListPiece-34266919-dfff3108.js";import{d as q,k as A,w as $,V as c,a5 as u,a9 as f,a7 as n,a6 as j,F as Q,a8 as X,E as b,ab as Y,W as z,f as C,ag as G}from"./vue-bcbaddf9.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm-cb329d14.js";import"./useForm-fd714c19.js";import"./constant-fe20103a-44089532.js";import"./useFormItem-4c9e708e.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";import"./user.api-023a32e5.js";import"./customExpression-62f5afd1.js";import"./BasicTable-96d859ce.js";import"./injectionKey-69710956.js";import"./useListPage-761bc624.js";import"./OnlineSelectCascade-c7baf52b-18ff6e90.js";import"./JModalTip-abe1515a-b57dc82d.js";var H=(e,l,o)=>new Promise((s,d)=>{var p=t=>{try{a(o.next(t))}catch(r){d(r)}},m=t=>{try{a(o.throw(t))}catch(r){d(r)}},a=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,m);a((o=o.apply(e,l)).next())});const J=q({name:"OnlineAutoModal",props:{id:{type:String,default:""}},components:{BasicModal:x,OnlineForm:W,CommentPanel:V},emits:["success","register","formConfig"],setup(e,{emit:l}){const o=A();function s(){o.value&&o.value.reload()}const{title:d,modalWidth:p,registerModal:m,closeModal:a,cgButtonList:t,handleCgButtonClick:r,disableSubmit:i,handleSubmit:h,submitLoading:k,handleCancel:S,handleFormConfig:F,onlineFormCompRef:T,formTemplate:y,isTreeForm:B,pidFieldName:N,renderSuccess:v,formRendered:R,tableName:I,formDataId:M,enableComment:w,onCloseEvent:g,themeTemplate:L}=D(!1,{emit:l},s);function E(P){l("success",P),a(),g()}$(()=>e.id,O,{immediate:!0});function O(){return H(this,null,function*(){R.value=!1,e.id&&(yield F(e.id,{}))})}return{title:d,onlineFormCompRef:T,renderSuccess:v,registerModal:m,handleSubmit:h,handleSuccess:E,handleCancel:S,modalWidth:p,formTemplate:y,disableSubmit:i,cgButtonList:t,handleCgButtonClick:r,isTreeForm:B,pidFieldName:N,submitLoading:k,tableName:I,formDataId:M,enableComment:w,commentPanelRef:o,onCloseEvent:g,themeTemplate:L}}});function K(e,l,o,s,d,p){const m=c("a-button"),a=c("online-form"),t=c("comment-panel"),r=c("BasicModal");return u(),f(r,G({title:e.title,onCancel:e.onCloseEvent,enableComment:e.enableComment,width:e.modalWidth},e.$attrs,{height:600,onRegister:e.registerModal,wrapClassName:"jeecg-online-modal",onOk:e.handleSubmit}),{footer:n(()=>[(u(!0),j(Q,null,X(e.cgButtonList,i=>(u(),f(m,{key:i.id,type:"primary",onClick:h=>e.handleCgButtonClick(i.optType,i.buttonCode),preIcon:i.buttonIcon?"ant-design:"+i.buttonIcon:""},{default:n(()=>[b(Y(i.buttonName),1)]),_:2},1032,["onClick","preIcon"]))),128)),e.disableSubmit?z("",!0):(u(),f(m,{key:"submit",type:"primary",onClick:e.handleSubmit,loading:e.submitLoading},{default:n(()=>[b("确定")]),_:1},8,["onClick","loading"])),C(m,{key:"back",onClick:e.handleCancel},{default:n(()=>[b("关闭")]),_:1},8,["onClick"])]),comment:n(()=>[C(t,{ref:"commentPanelRef",tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:n(()=>[C(a,{ref:"onlineFormCompRef",id:e.id,disabled:e.disableSubmit,"form-template":e.formTemplate,isTree:e.isTreeForm,pidField:e.pidFieldName,themeTemplate:e.themeTemplate,onRendered:e.renderSuccess,onSuccess:e.handleSuccess},null,8,["id","disabled","form-template","isTree","pidField","themeTemplate","onRendered","onSuccess"])]),_:1},16,["title","onCancel","enableComment","width","onRegister","onOk"])}const Ke=_(J,[["render",K]]);export{Ke as default};