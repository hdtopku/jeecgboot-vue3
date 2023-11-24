import{d as y,l as D,w as P,V as d,a7 as x,ac as I,af as L,aa as s,f as c,E as q}from"./vue-ebecda47.js";import{B as V}from"./index-e91e8b28.js";import W from"./OnlineFormDetail-1b216792-7a3fba26.js";import{q as _}from"./useExtendComponent-48d37d9b-8d9aa8a0.js";import{q as E}from"./CommentPanel-8a0d5632.js";import{bB as O}from"./jeecg-online-vendor-cfb58502.js";import"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./DetailForm-e4538e7a-bdccad5c.js";import"./JUpload-ffe34816.js";import"./OnlineSubFormDetail-0aa4966c-430ecca2.js";import"./index-a2e0ccba.js";import"./constant-fe20103a-44089532.js";import"./componentMap-c36c4b8d.js";import"./lodash-es-vendor-cd7703c8.js";import"./index-38e4d5c0.js";import"./user.api-729c8827.js";import"./customExpression-62f5afd1.js";import"./index-993283cc.js";import"./useListPage-52971497.js";import"./LinkTableListPiece-34266919-8927295e.js";import"./OnlineSelectCascade-c7baf52b-8f32847b.js";import"./JModalTip-abe1515a-cd675860.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./tinymce-vendor-7c917b36.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./useForm-21b78d9f.js";import"./areaDataUtil-4a5c6609.js";import"./BasicTable-46b6c894.js";import"./injectionKey-69710956.js";import"./JAddInput-64f6e84f.js";import"./useFormItem-ba20c4de.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./JEllipsis-410bb5e8.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./cron-parser-vendor-afad4b1e.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";var j=(e,l,o)=>new Promise((n,i)=>{var p=t=>{try{m(o.next(t))}catch(r){i(r)}},a=t=>{try{m(o.throw(t))}catch(r){i(r)}},m=t=>t.done?n(t.value):Promise.resolve(t.value).then(p,a);m((o=o.apply(e,l)).next())});const z=y({name:"OnlineDetailModal",props:{id:{type:String,required:!1,default:""}},components:{BasicModal:V,OnlineFormDetail:W,CommentPanel:E},emits:["success","register","formConfig"],setup(e,{emit:l}){const o=D();function n(){o.value&&o.value.reload()}const{title:i,modalWidth:p,registerModal:a,cgButtonList:m,handleCgButtonClick:t,disableSubmit:r,handleSubmit:u,submitLoading:f,handleCancel:h,handleFormConfig:b,onlineFormCompRef:C,formTemplate:g,isTreeForm:w,pidFieldName:B,renderSuccess:S,formRendered:T,showSub:F,tableName:N,formDataId:R,enableComment:v,themeTemplate:k}=_(!1,{emit:l},n);P(()=>e.id,M,{immediate:!0});function M(){return j(this,null,function*(){T.value=!1,e.id&&(yield b(e.id,{}))})}return{title:i,onlineFormCompRef:C,renderSuccess:S,registerModal:a,handleSubmit:u,handleCancel:h,modalWidth:p,formTemplate:g,disableSubmit:r,cgButtonList:m,handleCgButtonClick:t,isTreeForm:w,pidFieldName:B,submitLoading:f,showSub:F,tableName:N,formDataId:R,enableComment:v,commentPanelRef:o,themeTemplate:k}}});function A(e,l,o,n,i,p){const a=d("a-button"),m=d("online-form-detail"),t=d("comment-panel"),r=d("BasicModal");return x(),I(r,L({title:e.title,width:e.modalWidth,height:600,enableComment:e.enableComment,defaultFullscreen:!1},e.$attrs,{onRegister:e.registerModal,wrapClassName:"jeecg-online-detail-modal"}),{footer:s(()=>[c(a,{key:"back",onClick:e.handleCancel},{default:s(()=>[q("关闭")]),_:1},8,["onClick"])]),comment:s(()=>[c(t,{ref:"commentPanelRef",tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:s(()=>[c(m,{ref:"onlineFormCompRef",id:e.id,"form-template":e.formTemplate,"show-sub":e.showSub,themeTemplate:e.themeTemplate,onRendered:e.renderSuccess},null,8,["id","form-template","show-sub","themeTemplate","onRendered"])]),_:1},16,["title","width","enableComment","onRegister"])}const Je=O(z,[["render",A]]);export{Je as default};