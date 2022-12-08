import S from"./OnlineForm.31793db0.js";import{j as k,C as p,E as C,f2 as T,Z as E,G as N,r as f,s as v,t as F,v as h,w as y,y as w,R as B}from"./index.25572ab7.js";import{g as b}from"./useAutoForm.b428d250.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./componentMap.c8679e96.js";import"./JAddInput.09222b6f.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.e8853ef1.js";import"./index.117f635e.js";import"./pick.5c5b7fa5.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./omit.80ddddf5.js";import"./_baseClone.d9404320.js";import"./OnlineSelectCascade.6e6329b2.js";import"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import"./Area.595c917d.js";import"./functional.ad7cd28c.js";import"./LinkTableListPiece.463fb0b6.js";import"./BasicForm.0e850cba.js";import"./useForm.8e9d7e3a.js";import"./FormSchemaFactory.a3e23150.js";import"./uniqBy.0cca5e55.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./index.23d6b964.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./user.api.b828e243.js";import"./_commonjsHelpers.dc2475b4.js";import"./customExpression.05dc2408.js";import"./BasicTable.1043d787.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./useListPage.b0d7f469.js";import"./useTable.c365558e.js";import"./JModalTip.94a0f791.js";import"./_baseSlice.db64aae6.js";var c=(e,i,o)=>new Promise((l,s)=>{var d=t=>{try{m(o.next(t))}catch(a){s(a)}},n=t=>{try{m(o.throw(t))}catch(a){s(a)}},m=t=>t.done?l(t.value):Promise.resolve(t.value).then(d,n);m((o=o.apply(e,i)).next())});const P=k({name:"ProcessOnlineForm",inheritAttrs:!1,components:{OnlineForm:S},props:{dataId:{type:String,default:""},tableName:{type:String,default:""},taskId:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(e){const i=p(),o=p(""),l=p(1),s=p(!1),d=p(""),n=p(!1);C(()=>e.tableName,u=>{!u||m()},{immediate:!0});function m(){return c(this,null,function*(){n.value=!0;const u=`/online/cgform/api/getFormItemBytbname/${e.tableName}`,I={taskId:e.taskId};try{let r=yield E.get({url:u,params:I});console.log("\u52A8\u6001\u8868\u5355\u67E5\u8BE2\u7ED3\u679C\u662F\uFF1A",r),o.value=r.head.id,l.value=Number(r.head.formTemplate||1),s.value=r.head.isTree==="Y",d.value=r.head.treeParentIdField||"",yield N(()=>c(this,null,function*(){(yield b(i)).createRootProperties(r)}))}catch(r){console.error("\u6D41\u7A0B\u8868\u5355\u67E5\u8BE2\u5F02\u5E38",r)}})}function t(){return c(this,null,function*(){let u=yield b(i);n.value=!1,u.show(!0,{id:e.dataId})})}const a=p(!1);function g(){return c(this,null,function*(){a.value=!0,i.value.handleSubmit()})}function _(){a.value=!1}return{onlineFormCompRef:i,formId:o,formTemplate:l,isTreeForm:s,pidFieldName:d,renderSuccess:t,handleSuccess:_,handleSubmit:g,buttonLoading:a,spinLoading:n}}}),R={class:"cust-onl-form"},A={key:0,style:{width:"100%","text-align":"center","margin-top":"5px"}};function L(e,i,o,l,s,d){const n=f("a-button"),m=f("online-form"),t=f("a-spin");return v(),F("div",R,[h(t,{spinning:e.spinLoading},{default:y(()=>[h(m,{ref:"onlineFormCompRef",id:e.formId,disabled:e.disabled,"form-template":e.formTemplate,isTree:e.isTreeForm,pidField:e.pidFieldName,onRendered:e.renderSuccess,onSuccess:e.handleSuccess},{bottom:y(()=>[!e.disabled&&!e.spinLoading?(v(),F("div",A,[h(n,{preIcon:"ant-design:check",style:{width:"126px"},type:"primary",onClick:e.handleSubmit,loading:e.buttonLoading},{default:y(()=>[w(" \u63D0 \u4EA4 ")]),_:1},8,["onClick","loading"])])):B("",!0)]),_:1},8,["id","disabled","form-template","isTree","pidField","onRendered","onSuccess"])]),_:1},8,["spinning"])])}var qe=T(P,[["render",L],["__scopeId","data-v-9b256bc4"]]);export{qe as default};