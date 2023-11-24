import{d as $,l as L,w as A,r as S,n as U,V as l,a7 as V,a8 as E,f as s,aa as m,E as _,ai as q,aj as z}from"./vue-ebecda47.js";import{u as K}from"./index-993283cc.js";import{B as N}from"./index-e91e8b28.js";import"./index-a2e0ccba.js";import{p as G,m as Q,$ as H,g as J}from"./auth.api-d3a6c4b3-03058a58.js";import{r as W,c as X,a as B}from"./auth.data-8be5c9e3-1ff5018b.js";import{bB as Y}from"./jeecg-online-vendor-cfb58502.js";import Z from"./BasicTable-46b6c894.js";import{Q as tt}from"./componentMap-c36c4b8d.js";import{B as ot,u as rt}from"./useForm-21b78d9f.js";import{F as et}from"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./index-be9b0972.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./useFormItem-ba20c4de.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./JEllipsis-410bb5e8.js";import"./injectionKey-69710956.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./cron-parser-vendor-afad4b1e.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";var it=Object.defineProperty,nt=Object.defineProperties,at=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,P=(o,r,e)=>r in o?it(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ct=(o,r)=>{for(var e in r||(r={}))lt.call(r,e)&&P(o,e,r[e]);if(O)for(var e of O(r))st.call(r,e)&&P(o,e,r[e]);return o},mt=(o,r)=>nt(o,at(r)),T=(o,r,e)=>new Promise((c,p)=>{var d=i=>{try{n(e.next(i))}catch(a){p(a)}},u=i=>{try{n(e.throw(i))}catch(a){p(a)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(d,u);n((e=e.apply(o,r)).next())});const pt=$({name:"AuthDataConfig",components:{BasicTable:Z,TableAction:tt,BasicModal:N,BasicForm:ot},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(o){const r=L(!1),[e,{reload:c,setLoading:p}]=K({api:t=>G(o.cgformId,t),rowKey:"id",bordered:!0,columns:W,showIndexColumn:!1,actionColumn:{width:120,title:"操作",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});A(r,t=>p(t));const[d,{openModal:u,closeModal:n}]=et(),i=S({title:"",width:800,confirmLoading:!1,onOk:x,onCancel:n,onRegister:d});let a=!1,f={};const{formSchemas:y}=X(o,{onRuleOperatorChange:I}),[v,{validate:g,resetFields:h,setFieldsValue:w}]=rt({schemas:y,showActionButtonGroup:!1,labelAlign:"right"});A(()=>o.cgformId,()=>{c().catch(()=>null)},{immediate:!0});function C(t){return T(this,null,function*(){var b;a=(b=t.isUpdate)!=null?b:!1,i.title=t.title,u(),yield U(),yield h(),f=Object.assign({},t.record),yield w(f)})}function M(){C({title:"新增"})}function k(t){C({title:"编辑",record:t,isUpdate:!0})}function j(t){r.value=!0,Q(t).then(c).finally(()=>r.value=!1)}function x(){return T(this,null,function*(){try{i.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==B&&(t.ruleColumn=""),t.cgformId=o.cgformId,yield H(t,a),c(),n()}finally{i.confirmLoading=!1}})}function F(t){r.value=!0;let b=Math.abs(t.status-1);J(mt(ct({},t),{status:b})).then(()=>{t.status=b}).finally(()=>{r.value=!1})}function I(t){t==B&&w({ruleColumn:""})}function D(t){return[{label:"编辑",onClick:()=>k(t)}]}function R(t){return[{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>j(t.id)}}]}return{loading:r,formModalProps:i,onAdd:M,onUpdateStatus:F,getTableAction:D,getDropDownAction:R,registerTable:e,registerModal:d,registerForm:v}}});function dt(o,r,e,c,p,d){const u=l("a-button"),n=l("a-switch"),i=l("TableAction"),a=l("BasicTable"),f=l("BasicForm"),y=l("a-spin"),v=l("BasicModal");return V(),E("div",null,[s(a,{onRegister:o.registerTable,loading:o.loading},{tableTitle:m(()=>[s(u,{onClick:o.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:m(()=>[_("新增")]),_:1},8,["onClick"])]),switch:m(({text:g,record:h})=>[s(n,{size:"small",checked:h.status===1,onClick:()=>o.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:m(({record:g})=>[s(i,{actions:o.getTableAction(g),dropDownActions:o.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),s(v,q(z(o.formModalProps)),{default:m(()=>[s(y,{spinning:o.formModalProps.confirmLoading},{default:m(()=>[s(f,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}const no=Y(pt,[["render",dt]]);export{no as default};