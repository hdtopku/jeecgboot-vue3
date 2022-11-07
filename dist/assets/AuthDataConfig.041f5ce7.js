import{B as U}from"./BasicTable.f15f6361.js";import{T as E}from"./helper.df0282ae.js";import"./TableImg.1a54e7ea.js";import{u as L}from"./useTable.1fe79c1d.js";import{B as j}from"./index.6aad32b5.js";import{B as $}from"./BasicForm.638a5420.js";import{u as V}from"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import{l as z,F as N,H as C,bH as q,a7 as x,e$ as H,t as s,v as Q,x as G,y as l,z as c,C as K,bk as J,bl as W,Q as X}from"./index.a86a095a.js";import{g as Y,h as Z,i as tt,j as et}from"./auth.api.6e22479c.js";import{d as ot,u as at,U as D}from"./auth.data.1c0a22ac.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./onMountedOrActivated.ab6edd17.js";import"./useWindowSizeFn.b7d480b1.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./BasicModal.e80a23a3.js";import"./RedoOutlined.cb450b29.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./uniqBy.37746f07.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";var rt=Object.defineProperty,nt=Object.defineProperties,it=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,P=(e,o,a)=>o in e?rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,ut=(e,o)=>{for(var a in o||(o={}))st.call(o,a)&&P(e,a,o[a]);if(F)for(var a of F(o))lt.call(o,a)&&P(e,a,o[a]);return e},ct=(e,o)=>nt(e,it(o)),A=(e,o,a)=>new Promise((u,p)=>{var m=r=>{try{n(a.next(r))}catch(i){p(i)}},d=r=>{try{n(a.throw(r))}catch(i){p(i)}},n=r=>r.done?u(r.value):Promise.resolve(r.value).then(m,d);n((a=a.apply(e,o)).next())});const pt=z({name:"AuthDataConfig",components:{BasicTable:U,TableAction:E,BasicModal:j,BasicForm:$},props:{cgformId:{type:String,required:!0},authFields:{type:Array,required:!0}},setup(e){const o=N(!1),[a,{reload:u,setLoading:p}]=L({api:t=>Y(e.cgformId,t),rowKey:"id",bordered:!0,columns:ot,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",fixed:!1,dataIndex:"action",slots:{customRender:"action"}}});C(o,t=>p(t));const[m,{openModal:d,closeModal:n}]=q(),r=x({title:"",width:800,confirmLoading:!1,onOk:S,onCancel:n,onRegister:m});let i=!1,f={};const{formSchemas:v}=at(e,{onRuleOperatorChange:k}),[b,{validate:g,resetFields:h,setFieldsValue:y}]=V({schemas:v,showActionButtonGroup:!1,labelAlign:"right"});C(()=>e.cgformId,()=>{u().catch(()=>null)},{immediate:!0});function w(t){return A(this,null,function*(){var _;i=(_=t.isUpdate)!=null?_:!1,r.title=t.title,d(),yield X(),yield h(),f=Object.assign({},t.record),yield y(f)})}function B(){w({title:"\u65B0\u589E"})}function O(t){w({title:"\u7F16\u8F91",record:t,isUpdate:!0})}function T(t){o.value=!0,et(t).then(u).finally(()=>o.value=!1)}function S(){return A(this,null,function*(){try{r.confirmLoading=!0;let t=yield g();t=Object.assign({},f,t),t.ruleOperator==D&&(t.ruleColumn=""),t.cgformId=e.cgformId,yield Z(t,i),u(),n()}finally{r.confirmLoading=!1}})}function M(t){o.value=!0;let _=Math.abs(t.status-1);tt(ct(ut({},t),{status:_})).then(()=>{t.status=_}).finally(()=>{o.value=!1})}function k(t){t==D&&y({ruleColumn:""})}function I(t){return[{label:"\u7F16\u8F91",onClick:()=>O(t)}]}function R(t){return[{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",placement:"left",confirm:()=>T(t.id)}}]}return{loading:o,formModalProps:r,onAdd:B,onUpdateStatus:M,getTableAction:I,getDropDownAction:R,registerTable:a,registerModal:m,registerForm:b}}});function mt(e,o,a,u,p,m){const d=s("a-button"),n=s("a-switch"),r=s("TableAction"),i=s("BasicTable"),f=s("BasicForm"),v=s("a-spin"),b=s("BasicModal");return Q(),G("div",null,[l(i,{onRegister:e.registerTable,loading:e.loading},{tableTitle:c(()=>[l(d,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:c(()=>[K("\u65B0\u589E")]),_:1},8,["onClick"])]),switch:c(({text:g,record:h})=>[l(n,{size:"small",checked:h.status===1,onClick:()=>e.onUpdateStatus(h)},null,8,["checked","onClick"])]),action:c(({record:g})=>[l(r,{actions:e.getTableAction(g),dropDownActions:e.getDropDownAction(g)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","loading"]),l(b,J(W(e.formModalProps)),{default:c(()=>[l(v,{spinning:e.formModalProps.confirmLoading},{default:c(()=>[l(f,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)])}var te=H(pt,[["render",mt]]);export{te as default};