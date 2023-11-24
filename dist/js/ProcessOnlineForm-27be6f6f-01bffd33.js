import{O as k}from"./OnlineForm-630a22c2-2f3f9359.js";import{d as T,l as m,w as x,n as N,V as f,a7 as v,a8 as b,f as h,aa as g,E as w,W as C}from"./vue-50733b77.js";import{ap as B,bB as L}from"./jeecg-online-vendor-d3e1865b.js";import{g as y}from"./useExtendComponent-48d37d9b-605c45a2.js";import"./index-7e7a94e9.js";import"./lodash-es-vendor-058e2396.js";import"./index-b34ff7bc.js";import"./antd-vue-vendor-c5335947.js";import"./index-f7d688aa.js";import"./constant-fe20103a-44089532.js";import"./componentMap-5c02cfaf.js";import"./index-5593b297.js";import"./user.api-c252cb60.js";import"./customExpression-62f5afd1.js";import"./index-f191817e.js";import"./useListPage-4f9607d2.js";import"./JUpload-c8630cc9.js";import"./LinkTableListPiece-34266919-7405b407.js";import"./OnlineSelectCascade-c7baf52b-e9e1ca05.js";import"./JModalTip-abe1515a-57f430d6.js";import"./useForm-14ceb529.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./tinymce-vendor-7c917b36.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./useFormItem-915d7f1b.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./BasicTable-ca5b2c76.js";import"./injectionKey-69710956.js";var u=(t,i,o)=>new Promise((d,p)=>{var s=e=>{try{n(o.next(e))}catch(a){p(a)}},r=e=>{try{n(o.throw(e))}catch(a){p(a)}},n=e=>e.done?d(e.value):Promise.resolve(e.value).then(s,r);n((o=o.apply(t,i)).next())});const P=T({name:"ProcessOnlineForm",inheritAttrs:!1,components:{OnlineForm:k},props:{dataId:{type:String,default:""},tableName:{type:String,default:""},taskId:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(t){const i=m(),o=m(""),d=m(1),p=m(!1),s=m(""),r=m(!1);x(()=>t.tableName,c=>{c&&n()},{immediate:!0});function n(){return u(this,null,function*(){r.value=!0;const c=`/online/cgform/api/getFormItemBytbname/${t.tableName}`,S={taskId:t.taskId};try{let l=yield B.get({url:c,params:S});o.value=l.head.id,d.value=Number(l.head.formTemplate||1),p.value=l.head.isTree==="Y",s.value=l.head.treeParentIdField||"",yield N(()=>u(this,null,function*(){(yield y(i)).createRootProperties(l)}))}catch(l){}})}function e(){return u(this,null,function*(){let c=yield y(i);r.value=!1,c.show(!0,{id:t.dataId})})}const a=m(!1);function F(){return u(this,null,function*(){a.value=!0,i.value.handleSubmit()})}function I(){a.value=!1}return{onlineFormCompRef:i,formId:o,formTemplate:d,isTreeForm:p,pidFieldName:s,renderSuccess:e,handleSuccess:I,handleSubmit:F,buttonLoading:a,spinLoading:r}}}),R={class:"cust-onl-form"},_={key:0,style:{width:"100%","text-align":"center","margin-top":"5px"}};function O(t,i,o,d,p,s){const r=f("a-button"),n=f("online-form"),e=f("a-spin");return v(),b("div",R,[h(e,{spinning:t.spinLoading},{default:g(()=>[h(n,{ref:"onlineFormCompRef",id:t.formId,disabled:t.disabled,"form-template":t.formTemplate,isTree:t.isTreeForm,pidField:t.pidFieldName,onRendered:t.renderSuccess,onSuccess:t.handleSuccess},{bottom:g(()=>[!t.disabled&&!t.spinLoading?(v(),b("div",_,[h(r,{preIcon:"ant-design:check",style:{width:"126px"},type:"primary",onClick:t.handleSubmit,loading:t.buttonLoading},{default:g(()=>[w(" 提 交 ")]),_:1},8,["onClick","loading"])])):C("",!0)]),_:1},8,["id","disabled","form-template","isTree","pidField","onRendered","onSuccess"])]),_:1},8,["spinning"])])}const Vt=L(P,[["render",O],["__scopeId","data-v-530d8f91"]]);export{Vt as default};