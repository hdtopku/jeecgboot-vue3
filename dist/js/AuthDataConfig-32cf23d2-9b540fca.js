import $ from"./BasicTable-f6cf85af.js";import{Q as L}from"./componentMap-da21b34e.js";import{u as S}from"./useTable-20c32c9e.js";import{B as U}from"./index-465fff25.js";import{B as V}from"./BasicForm-2f1a8584.js";import{u as q}from"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./JSelectUser-5289e428.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import{z as E}from"./index-7711d1b4.js";import"./cron-parser-vendor-15f47fa7.js";import{p as _,$ as z,g as K,m as N}from"./auth.api-d3a6c4b3-b01533f3.js";import{r as Q,c as G,a as A}from"./auth.data-8be5c9e3-e3b37a89.js";import{Q as H}from"./jeecg-online-vendor-59c8fbe3.js";import{d as J,k as W,w as O,r as X,V as l,a5 as Y,a6 as Z,f as s,a7 as m,E as tt,ae as ot,af as rt,q as et}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./injectionKey-69710956.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./lodash-es-vendor-9b741fb8.js";import"./useWindowSizeFn-b083d2b7.js";import"./vxe-table-vendor-173f2e92.js";import"./echarts-vendor-6c8e2159.js";import"./BasicModal-62e49180.js";import"./useFormItem-d5fd9260.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./areaDataUtil-661e31ab.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./index-9df7768e.js";var it=Object.defineProperty,nt=Object.defineProperties,at=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,P=(o,r,e)=>r in o?it(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ct=(o,r)=>{for(var e in r||(r={}))lt.call(r,e)&&P(o,e,r[e]);if(B)for(var e of B(r))st.call(r,e)&&P(o,e,r[e]);return o},mt=(o,r)=>nt(o,at(r)),T=(o,r,e)=>new Promise((c,p)=>{var d=i=>{try{n(e.next(i))}catch(a){p(a)}},u=i=>{try{n(e.throw(i))}catch(a){p(a)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(d,u);n((e=e.apply(o,r)).next())});const pt=J({name:"AuthDataConfig",components:{BasicTable:$,TableAction:L,BasicModal:U,BasicForm:V},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(o){const r=W(!1),[e,{reload:c,setLoading:p}]=S({api:t=>_(o.cgformId,t),rowKey:"id",bordered:!0,columns:Q,showIndexColumn:!1,actionColumn:{width:120,title:"操作",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});O(r,t=>p(t));const[d,{openModal:u,closeModal:n}]=E(),i=X({title:"",width:800,confirmLoading:!1,onOk:I,onCancel:n,onRegister:d});let a=!1,f={};const{formSchemas:y}=G(o,{onRuleOperatorChange:D}),[v,{validate:g,resetFields:h,setFieldsValue:w}]=q({schemas:y,showActionButtonGroup:!1,labelAlign:"right"});O(()=>o.cgformId,()=>{c().catch(()=>null)},{immediate:!0});function C(t){return T(this,null,function*(){var b;a=(b=t.isUpdate)!=null?b:!1,i.title=t.title,u(),yield et(),yield h(),f=Object.assign({},t.record),yield w(f)})}function k(){C({title:"新增"})}function M(t){C({title:"编辑",record:t,isUpdate:!0})}function x(t){r.value=!0,N(t).then(c).finally(()=>r.value=!1)}function I(){return T(this,null,function*(){try{i.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==A&&(t.ruleColumn=""),t.cgformId=o.cgformId,yield z(t,a),c(),n()}finally{i.confirmLoading=!1}})}function j(t){r.value=!0;let b=Math.abs(t.status-1);K(mt(ct({},t),{status:b})).then(()=>{t.status=b}).finally(()=>{r.value=!1})}function D(t){t==A&&w({ruleColumn:""})}function F(t){return[{label:"编辑",onClick:()=>M(t)}]}function R(t){return[{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>x(t.id)}}]}return{loading:r,formModalProps:i,onAdd:k,onUpdateStatus:j,getTableAction:F,getDropDownAction:R,registerTable:e,registerModal:d,registerForm:v}}});function dt(o,r,e,c,p,d){const u=l("a-button"),n=l("a-switch"),i=l("TableAction"),a=l("BasicTable"),f=l("BasicForm"),y=l("a-spin"),v=l("BasicModal");return Y(),Z("div",null,[s(a,{onRegister:o.registerTable,loading:o.loading},{tableTitle:m(()=>[s(u,{onClick:o.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:m(()=>[tt("新增")]),_:1},8,["onClick"])]),switch:m(({text:g,record:h})=>[s(n,{size:"small",checked:h.status===1,onClick:()=>o.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:m(({record:g})=>[s(i,{actions:o.getTableAction(g),dropDownActions:o.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),s(v,ot(rt(o.formModalProps)),{default:m(()=>[s(y,{spinning:o.formModalProps.confirmLoading},{default:m(()=>[s(f,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}const eo=H(pt,[["render",dt]]);export{eo as default};