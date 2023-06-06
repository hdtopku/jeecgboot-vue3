import{B as E}from"./index.df1721d5.js";import{B as L}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as A}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{eH as I,C as h,bH as D,r as B,s as H,Q as R,w as v,v as y,x as j,Z as q,u as N}from"./index.0be4b5b8.js";import{o as $}from"./omit.80ddddf5.js";import"./toString.e0eec860.js";import"./isArray.3186d40a.js";import"./_baseClone.d9404320.js";import"./_arrayPush.48fa8f83.js";import"./_flatRest.1893f573.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./_baseSlice.db64aae6.js";var J=Object.defineProperty,F=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,O=(i,o,t)=>o in i?J(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,Q=(i,o)=>{for(var t in o||(o={}))K.call(o,t)&&O(i,t,o[t]);if(F)for(var t of F(o))G.call(o,t)&&O(i,t,o[t]);return i},d=(i,o,t)=>new Promise((n,a)=>{var s=r=>{try{c(t.next(r))}catch(m){a(m)}},u=r=>{try{c(t.throw(r))}catch(m){a(m)}},c=r=>r.done?n(r.value):Promise.resolve(r.value).then(s,u);c((t=t.apply(i,o)).next())});const Z={name:"LinkTableFieldConfigModal",emits:["success","register"],components:{BasicModal:E,BasicForm:L},setup(i,{emit:o}){const t=h(!1),n=h([]),a=h([]);let s={},u={};const{createMessage:c}=N(),[r,{closeModal:m}]=D(e=>d(this,null,function*(){console.log("data",e),u=Q({},e.record),s=e.tableAndFieldsMap,yield C(),yield _({dictTable:e.record.dictTable}),setTimeout(()=>d(this,null,function*(){let l=$(e.record,"dictTable");yield _(l),yield P()}),200)}));function C(){return d(this,null,function*(){let e=Object.keys(s);if(!e||e.length==0)n.value=[];else{let l=[];for(let p of e)l.push({text:s[p].title,value:p});n.value=l}})}function w(e){return d(this,null,function*(){if(e){const{table:l,fields:p}=s[e];if(!l){c.warning("\u8BF7\u5148\u5B8C\u5584\u5B57\u6BB5["+e+"]\u5173\u8054\u8BB0\u5F55\u7684\u914D\u7F6E");return}const S="/online/cgform/field/listByHeadCode",g=yield q.get({url:S,params:{headCode:l}});if(g&&g.length>0){let b=g.map(f=>({text:f.dbFieldTxt,value:f.dbFieldName}));console.log("\u5B57\u6BB5\u5B57\u5178",b);let V=p.split(",");a.value=b.filter(f=>V.indexOf(f.value)>0)}else a.value=[]}})}const T=[{label:"rowKey",field:"rowKey",component:"Input",show:!1},{label:"\u5B57\u6BB5\u63CF\u8FF0",field:"dbFieldTxt",component:"Input",required:!0},{label:"\u5173\u8054\u8BB0\u5F55",field:"dictTable",component:"JSearchSelect",required:!0,componentProps:({formActionType:e})=>({async:!1,popContainer:".link-table-field-config-modal",dictOptions:n.value,immediateChange:!0,onChange:p=>d(this,null,function*(){u.dictText&&(yield e.setFieldsValue({dictText:""}),yield e.clearValidate()),w(p)})})},{label:"\u663E\u793A\u5B57\u6BB5",field:"dictText",component:"JSearchSelect",required:!0,componentProps:{async:!1,popContainer:".link-table-field-config-modal",dictOptions:a,onChange:e=>{u.dictText=e}}}],[x,{validate:M,setFieldsValue:_,clearValidate:P}]=A({schemas:T,showActionButtonGroup:!1,labelAlign:"right"});function k(){return d(this,null,function*(){const e=yield M();console.log("handlesub",e),o("success",e),m()})}return{registerModal:r,spinningLoading:t,registerForm:x,handleSubmit:k}}};function z(i,o,t,n,a,s){const u=B("BasicForm"),c=B("a-spin"),r=B("BasicModal");return H(),R(r,j({wrapClassName:"link-table-field-config-modal"},i.$attrs,{title:"\u4ED6\u8868\u5B57\u6BB5\u914D\u7F6E",onRegister:n.registerModal,keyboard:"",canFullscreen:!1,cancelText:"\u5173\u95ED",onOk:n.handleSubmit}),{default:v(()=>[y(c,{spinning:n.spinningLoading},{default:v(()=>[y(u,{onRegister:n.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16,["onRegister","onOk"])}var Ve=I(Z,[["render",z]]);export{Ve as default};