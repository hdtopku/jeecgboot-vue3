import $ from"./BasicTable-11e9afcb.js";import{Q as L}from"./componentMap-bab84cb7.js";import{u as S}from"./useTable-992ea772.js";import{B as U}from"./index-cd2db611.js";import{B as V}from"./BasicForm-1c4cfe6b.js";import{u as q}from"./useForm-799a6766.js";import"./JAddInput-903fbbea.js";import"./JSelectUser-14c3fad5.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import{z as E}from"./index-b03d7914.js";import"./cron-parser-vendor-d9194a40.js";import{p as _,$ as z,g as K,m as N}from"./auth.api-d3a6c4b3-f2c34e5d.js";import{r as Q,c as G,a as A}from"./auth.data-8be5c9e3-e3b37a89.js";import{Q as H}from"./jeecg-online-vendor-ecddc31b.js";import{d as J,k as W,w as O,r as X,V as l,a5 as Y,a6 as Z,f as s,a7 as m,E as tt,ae as ot,af as rt,q as et}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-cd503db7.js";import"./injectionKey-69710956.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import"./lodash-es-vendor-9b741fb8.js";import"./useWindowSizeFn-13ef0f26.js";import"./vxe-table-vendor-9edfd3ae.js";import"./echarts-vendor-6c8e2159.js";import"./BasicModal-951c06ee.js";import"./useFormItem-4b66c33c.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./areaDataUtil-661e31ab.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";import"./index-5ded5f19.js";var it=Object.defineProperty,nt=Object.defineProperties,at=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,P=(o,r,e)=>r in o?it(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ct=(o,r)=>{for(var e in r||(r={}))lt.call(r,e)&&P(o,e,r[e]);if(B)for(var e of B(r))st.call(r,e)&&P(o,e,r[e]);return o},mt=(o,r)=>nt(o,at(r)),T=(o,r,e)=>new Promise((c,p)=>{var d=i=>{try{n(e.next(i))}catch(a){p(a)}},u=i=>{try{n(e.throw(i))}catch(a){p(a)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(d,u);n((e=e.apply(o,r)).next())});const pt=J({name:"AuthDataConfig",components:{BasicTable:$,TableAction:L,BasicModal:U,BasicForm:V},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(o){const r=W(!1),[e,{reload:c,setLoading:p}]=S({api:t=>_(o.cgformId,t),rowKey:"id",bordered:!0,columns:Q,showIndexColumn:!1,actionColumn:{width:120,title:"操作",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});O(r,t=>p(t));const[d,{openModal:u,closeModal:n}]=E(),i=X({title:"",width:800,confirmLoading:!1,onOk:I,onCancel:n,onRegister:d});let a=!1,f={};const{formSchemas:y}=G(o,{onRuleOperatorChange:D}),[v,{validate:g,resetFields:h,setFieldsValue:w}]=q({schemas:y,showActionButtonGroup:!1,labelAlign:"right"});O(()=>o.cgformId,()=>{c().catch(()=>null)},{immediate:!0});function C(t){return T(this,null,function*(){var b;a=(b=t.isUpdate)!=null?b:!1,i.title=t.title,u(),yield et(),yield h(),f=Object.assign({},t.record),yield w(f)})}function k(){C({title:"新增"})}function M(t){C({title:"编辑",record:t,isUpdate:!0})}function x(t){r.value=!0,N(t).then(c).finally(()=>r.value=!1)}function I(){return T(this,null,function*(){try{i.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==A&&(t.ruleColumn=""),t.cgformId=o.cgformId,yield z(t,a),c(),n()}finally{i.confirmLoading=!1}})}function j(t){r.value=!0;let b=Math.abs(t.status-1);K(mt(ct({},t),{status:b})).then(()=>{t.status=b}).finally(()=>{r.value=!1})}function D(t){t==A&&w({ruleColumn:""})}function F(t){return[{label:"编辑",onClick:()=>M(t)}]}function R(t){return[{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>x(t.id)}}]}return{loading:r,formModalProps:i,onAdd:k,onUpdateStatus:j,getTableAction:F,getDropDownAction:R,registerTable:e,registerModal:d,registerForm:v}}});function dt(o,r,e,c,p,d){const u=l("a-button"),n=l("a-switch"),i=l("TableAction"),a=l("BasicTable"),f=l("BasicForm"),y=l("a-spin"),v=l("BasicModal");return Y(),Z("div",null,[s(a,{onRegister:o.registerTable,loading:o.loading},{tableTitle:m(()=>[s(u,{onClick:o.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:m(()=>[tt("新增")]),_:1},8,["onClick"])]),switch:m(({text:g,record:h})=>[s(n,{size:"small",checked:h.status===1,onClick:()=>o.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:m(({record:g})=>[s(i,{actions:o.getTableAction(g),dropDownActions:o.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),s(v,ot(rt(o.formModalProps)),{default:m(()=>[s(y,{spinning:o.formModalProps.confirmLoading},{default:m(()=>[s(f,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}const eo=H(pt,[["render",dt]]);export{eo as default};