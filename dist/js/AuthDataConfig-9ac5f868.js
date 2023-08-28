import k from"./BasicTable-29c6504d.js";import{T as R}from"./componentMap-a6d21ad6.js";import"./BasicTable.vue_vue_type_style_index_0_lang-b7d11241.js";import{u as L}from"./useTable-7e303edd.js";import{B as j}from"./index-8cf3aabb.js";import{B as V}from"./BasicForm-83ba9c88.js";import{u as $}from"./useForm-fa63344e.js";import"./JAddInput-2cbbbde9.js";import{E as N}from"./index-fde9c72f.js";import{g as q,h as z,i as x,j as G}from"./auth.api-9f2a65b5.js";import{d as K,u as Q,U as D}from"./auth.data-1d7a4570.js";import{bW as W}from"./jeecg-online-vendor-bf2efbcb.js";import{d as H,k as J,w as C,r as X,U as s,aV as Y,as as Z,f as l,bi as m,E as tt,ae as et,aI as ot,n as at}from"./vue-c7e3516e.js";import"./lodash-es-vendor-42c8d3d4.js";import"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./BasicForm.vue_vue_type_style_index_0_lang-aeaafe88.js";import"./BasicModal-ff8f2086.js";import"./useWindowSizeFn-e5cad7ae.js";import"./useFormItem-4a12ff45.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import"./download-c8889ed9.js";import"./base64Conver-4e359726.js";import"./index-ee020524.js";import"./index-53e807bd.js";import"./useCountdown-473e4dcc.js";import"./areaDataUtil-b2642a1f.js";import"./useSelectBiz-c744cf20.js";import"./props-8e8dbf4f.js";import"./index-d4783a30.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";import"./useTreeBiz-faf9875a.js";import"./index-63ed9c18.js";import"./depart.api-25dc3d39.js";import"./index-ed4be6fa.js";import"./injectionKey-5da932b3.js";var rt=Object.defineProperty,nt=Object.defineProperties,it=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,P=(e,o,a)=>o in e?rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,ut=(e,o)=>{for(var a in o||(o={}))st.call(o,a)&&P(e,a,o[a]);if(F)for(var a of F(o))lt.call(o,a)&&P(e,a,o[a]);return e},mt=(e,o)=>nt(e,it(o)),A=(e,o,a)=>new Promise((u,p)=>{var c=r=>{try{n(a.next(r))}catch(i){p(i)}},d=r=>{try{n(a.throw(r))}catch(i){p(i)}},n=r=>r.done?u(r.value):Promise.resolve(r.value).then(c,d);n((a=a.apply(e,o)).next())});const pt=H({name:"AuthDataConfig",components:{BasicTable:k,TableAction:R,BasicModal:j,BasicForm:V},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(e){const o=J(!1),[a,{reload:u,setLoading:p}]=L({api:t=>q(e.cgformId,t),rowKey:"id",bordered:!0,columns:K,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});C(o,t=>p(t));const[c,{openModal:d,closeModal:n}]=N(),r=X({title:"",width:800,confirmLoading:!1,onOk:S,onCancel:n,onRegister:c});let i=!1,f={};const{formSchemas:v}=Q(e,{onRuleOperatorChange:E}),[b,{validate:g,resetFields:h,setFieldsValue:y}]=$({schemas:v,showActionButtonGroup:!1,labelAlign:"right"});C(()=>e.cgformId,()=>{u().catch(()=>null)},{immediate:!0});function w(t){return A(this,null,function*(){var _;i=(_=t.isUpdate)!=null?_:!1,r.title=t.title,d(),yield at(),yield h(),f=Object.assign({},t.record),yield y(f)})}function O(){w({title:"\u65B0\u589E"})}function B(t){w({title:"\u7F16\u8F91",record:t,isUpdate:!0})}function T(t){o.value=!0,G(t).then(u).finally(()=>o.value=!1)}function S(){return A(this,null,function*(){try{r.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==D&&(t.ruleColumn=""),t.cgformId=e.cgformId,yield z(t,i),u(),n()}finally{r.confirmLoading=!1}})}function M(t){o.value=!0;let _=Math.abs(t.status-1);x(mt(ut({},t),{status:_})).then(()=>{t.status=_}).finally(()=>{o.value=!1})}function E(t){t==D&&y({ruleColumn:""})}function I(t){return[{label:"\u7F16\u8F91",onClick:()=>B(t)}]}function U(t){return[{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",placement:"left",confirm:()=>T(t.id)}}]}return{loading:o,formModalProps:r,onAdd:O,onUpdateStatus:M,getTableAction:I,getDropDownAction:U,registerTable:a,registerModal:c,registerForm:b}}});function ct(e,o,a,u,p,c){const d=s("a-button"),n=s("a-switch"),r=s("TableAction"),i=s("BasicTable"),f=s("BasicForm"),v=s("a-spin"),b=s("BasicModal");return Y(),Z("div",null,[l(i,{onRegister:e.registerTable,loading:e.loading},{tableTitle:m(()=>[l(d,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:m(()=>[tt("\u65B0\u589E")]),_:1},8,["onClick"])]),switch:m(({text:g,record:h})=>[l(n,{size:"small",checked:h.status===1,onClick:()=>e.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:m(({record:g})=>[l(r,{actions:e.getTableAction(g),dropDownActions:e.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),l(b,et(ot(e.formModalProps)),{default:m(()=>[l(v,{spinning:e.formModalProps.confirmLoading},{default:m(()=>[l(f,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}var ee=W(pt,[["render",ct]]);export{ee as default};