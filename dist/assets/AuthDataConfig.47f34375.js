import U from"./BasicTable.8e358715.js";import{T as k}from"./componentMap.6d6ce384.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import{u as j}from"./useTable.9835c939.js";import{B as L}from"./index.df1721d5.js";import{B as V}from"./BasicForm.be7f03c1.js";import{u as $}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{j as z,C as N,E as C,bI as q,a7 as x,eH as G,r as s,s as H,t as K,v as l,w as c,y as Q,by as J,bz as W,M as X}from"./index.0be4b5b8.js";import{g as Y,h as Z,i as tt,j as et}from"./auth.api.37d9c80e.js";import{d as ot,u as at,U as D}from"./auth.data.990417da.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";var rt=Object.defineProperty,nt=Object.defineProperties,it=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,P=(e,o,a)=>o in e?rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,ut=(e,o)=>{for(var a in o||(o={}))st.call(o,a)&&P(e,a,o[a]);if(F)for(var a of F(o))lt.call(o,a)&&P(e,a,o[a]);return e},ct=(e,o)=>nt(e,it(o)),A=(e,o,a)=>new Promise((u,p)=>{var m=r=>{try{n(a.next(r))}catch(i){p(i)}},d=r=>{try{n(a.throw(r))}catch(i){p(i)}},n=r=>r.done?u(r.value):Promise.resolve(r.value).then(m,d);n((a=a.apply(e,o)).next())});const pt=z({name:"AuthDataConfig",components:{BasicTable:U,TableAction:k,BasicModal:L,BasicForm:V},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(e){const o=N(!1),[a,{reload:u,setLoading:p}]=j({api:t=>Y(e.cgformId,t),rowKey:"id",bordered:!0,columns:ot,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});C(o,t=>p(t));const[m,{openModal:d,closeModal:n}]=q(),r=x({title:"",width:800,confirmLoading:!1,onOk:M,onCancel:n,onRegister:m});let i=!1,f={};const{formSchemas:v}=at(e,{onRuleOperatorChange:I}),[b,{validate:g,resetFields:h,setFieldsValue:y}]=$({schemas:v,showActionButtonGroup:!1,labelAlign:"right"});C(()=>e.cgformId,()=>{u().catch(()=>null)},{immediate:!0});function w(t){return A(this,null,function*(){var _;i=(_=t.isUpdate)!=null?_:!1,r.title=t.title,d(),yield X(),yield h(),f=Object.assign({},t.record),yield y(f)})}function O(){w({title:"\u65B0\u589E"})}function B(t){w({title:"\u7F16\u8F91",record:t,isUpdate:!0})}function T(t){o.value=!0,et(t).then(u).finally(()=>o.value=!1)}function M(){return A(this,null,function*(){try{r.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==D&&(t.ruleColumn=""),t.cgformId=e.cgformId,yield Z(t,i),u(),n()}finally{r.confirmLoading=!1}})}function S(t){o.value=!0;let _=Math.abs(t.status-1);tt(ct(ut({},t),{status:_})).then(()=>{t.status=_}).finally(()=>{o.value=!1})}function I(t){t==D&&y({ruleColumn:""})}function E(t){return[{label:"\u7F16\u8F91",onClick:()=>B(t)}]}function R(t){return[{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",placement:"left",confirm:()=>T(t.id)}}]}return{loading:o,formModalProps:r,onAdd:O,onUpdateStatus:S,getTableAction:E,getDropDownAction:R,registerTable:a,registerModal:m,registerForm:b}}});function mt(e,o,a,u,p,m){const d=s("a-button"),n=s("a-switch"),r=s("TableAction"),i=s("BasicTable"),f=s("BasicForm"),v=s("a-spin"),b=s("BasicModal");return H(),K("div",null,[l(i,{onRegister:e.registerTable,loading:e.loading},{tableTitle:c(()=>[l(d,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:c(()=>[Q("\u65B0\u589E")]),_:1},8,["onClick"])]),switch:c(({text:g,record:h})=>[l(n,{size:"small",checked:h.status===1,onClick:()=>e.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:c(({record:g})=>[l(r,{actions:e.getTableAction(g),dropDownActions:e.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),l(b,J(W(e.formModalProps)),{default:c(()=>[l(v,{spinning:e.formModalProps.confirmLoading},{default:c(()=>[l(f,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}var Jt=G(pt,[["render",mt]]);export{Jt as default};