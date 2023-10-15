import{B as A}from"./index-9d0047d3.js";import{B as I}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as R}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as q}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{Q as L,b as N,u as _}from"./jeecg-online-vendor-885afdd4.js";import{S as H}from"./antd-vue-vendor-a78909e6.js";import{k as b,V as h,a5 as J,a9 as K,a7 as v,f as F,ag as Q}from"./vue-bcbaddf9.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";var E=Object.defineProperty,T=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,x=(i,o,t)=>o in i?E(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,$=(i,o)=>{for(var t in o||(o={}))G.call(o,t)&&x(i,t,o[t]);if(T)for(var t of T(o))U.call(o,t)&&x(i,t,o[t]);return i},m=(i,o,t)=>new Promise((l,a)=>{var s=r=>{try{p(t.next(r))}catch(d){a(d)}},c=r=>{try{p(t.throw(r))}catch(d){a(d)}},p=r=>r.done?l(r.value):Promise.resolve(r.value).then(s,c);p((t=t.apply(i,o)).next())});const z={name:"LinkTableFieldConfigModal",emits:["success","register"],components:{BasicModal:A,BasicForm:I},setup(i,{emit:o}){const t=b(!1),l=b([]),a=b([]);let s={},c={};const{createMessage:p}=_(),[r,{closeModal:d}]=q(e=>m(this,null,function*(){c=$({},e.record),s=e.tableAndFieldsMap,yield B(),yield y({dictTable:e.record.dictTable}),setTimeout(()=>m(this,null,function*(){let n=H(e.record,"dictTable");yield y(n),yield M()}),200)}));function B(){return m(this,null,function*(){let e=Object.keys(s);if(!e||e.length==0)l.value=[];else{let n=[];for(let u of e)n.push({text:s[u].title,value:u});l.value=n}})}function w(e){return m(this,null,function*(){if(e){const{table:n,fields:u}=s[e];if(!n){p.warning("请先完善字段["+e+"]关联记录的配置");return}const P="/online/cgform/field/listByHeadCode",g=yield N.get({url:P,params:{headCode:n}});if(g&&g.length>0){let V=g.map(f=>({text:f.dbFieldTxt,value:f.dbFieldName})),j=u.split(",");a.value=V.filter(f=>j.indexOf(f.value)>0)}else a.value=[]}})}const O=[{label:"rowKey",field:"rowKey",component:"Input",show:!1},{label:"字段描述",field:"dbFieldTxt",component:"Input",required:!0},{label:"关联记录",field:"dictTable",component:"JSearchSelect",required:!0,componentProps:({formActionType:e})=>({async:!1,popContainer:".link-table-field-config-modal",dictOptions:l.value,immediateChange:!0,onChange:n=>m(this,null,function*(){c.dictText&&(yield e.setFieldsValue({dictText:""}),yield e.clearValidate()),w(n)})})},{label:"显示字段",field:"dictText",component:"JSearchSelect",required:!0,componentProps:{async:!1,popContainer:".link-table-field-config-modal",dictOptions:a,onChange:e=>{c.dictText=e}}}],[k,{validate:C,setFieldsValue:y,clearValidate:M}]=R({schemas:O,showActionButtonGroup:!1,labelAlign:"right"});function S(){return m(this,null,function*(){const e=yield C();o("success",e),d()})}return{registerModal:r,spinningLoading:t,registerForm:k,handleSubmit:S}}};function D(i,o,t,l,a,s){const c=h("BasicForm"),p=h("a-spin"),r=h("BasicModal");return J(),K(r,Q({wrapClassName:"link-table-field-config-modal"},i.$attrs,{title:"他表字段配置",onRegister:l.registerModal,keyboard:"",canFullscreen:!1,cancelText:"关闭",onOk:l.handleSubmit}),{default:v(()=>[F(p,{spinning:l.spinningLoading},{default:v(()=>[F(c,{onRegister:l.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16,["onRegister","onOk"])}const Ie=L(z,[["render",D]]);export{Ie as default};