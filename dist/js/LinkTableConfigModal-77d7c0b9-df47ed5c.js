import{B as _}from"./index-e91e8b28.js";import{l as c,e as I,V as v,a7 as R,ac as j,af as J,aa as C,f as w}from"./vue-ebecda47.js";import"./index-a2e0ccba.js";import{ap as L,bB as q}from"./jeecg-online-vendor-cfb58502.js";import"./lodash-es-vendor-cd7703c8.js";import{B as A,u as E}from"./useForm-21b78d9f.js";import{E as G}from"./index-85cfc899.js";import{o as H}from"./antd-vue-vendor-b75e8c06.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./tinymce-vendor-7c917b36.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";var K=Object.defineProperty,P=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,x=(i,o,t)=>o in i?K(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,U=(i,o)=>{for(var t in o||(o={}))z.call(o,t)&&x(i,t,o[t]);if(P)for(var t of P(o))Q.call(o,t)&&x(i,t,o[t]);return i},u=(i,o,t)=>new Promise((n,r)=>{var g=l=>{try{d(t.next(l))}catch(s){r(s)}},f=l=>{try{d(t.throw(l))}catch(s){r(s)}},d=l=>l.done?n(l.value):Promise.resolve(l.value).then(g,f);d((t=t.apply(i,o)).next())});const W={name:"LinkTableConfigModal",emits:["success","register"],components:{BasicModal:_,BasicForm:A},setup(i,{emit:o}){const t=c(!1),n=c("");let r={};const[g,{closeModal:f}]=G(e=>u(this,null,function*(){r=U({},e.record),yield y({dictTable:e.record.dictTable}),setTimeout(()=>u(this,null,function*(){let m=H(e.record,"dictTable");yield y(m),yield M()}),200),n.value=e.fieldName})),d=c(""),l=c(""),s=c([]),h=c([]);function B(e){return u(this,null,function*(){if(e){const m="/online/cgform/field/listByHeadCode",p=yield L.get({url:m,params:{headCode:e}});if(p&&p.length>0){let b=p.filter(a=>a.dbFieldName!="id"&&a.dbIsPersist==1);b.length>0?s.value=b.map(a=>({text:a.dbFieldTxt,value:a.dbFieldName})):s.value=[];let F=p.filter(a=>a.dbFieldName!="id"&&a.fieldShowType=="image"&&a.dbIsPersist==1);F.length>0?h.value=F.map(a=>({text:a.dbFieldTxt,value:a.dbFieldName})):h.value=[{text:"无图片字段可以选择",value:"",key:"",disabled:!0}]}else s.value=[],h.value=[{text:"无图片字段可以选择",value:"",key:"",disabled:!0}]}})}function S(e){return u(this,null,function*(){d.value="",l.value="",yield B(e)})}const T=I(()=>{let e=s.value,m=d.value,p=l.value;return e.filter(b=>b.value!=m&&b.value!=p)}),k=[{label:"rowKey",field:"rowKey",component:"Input",show:!1},{label:"dictField",field:"dictField",component:"Input",defaultValue:"id",show:!1},{label:"字段描述",field:"dbFieldTxt",component:"Input",required:!0},{label:"关联表",field:"dictTable",component:"JSearchSelect",required:!0,componentProps:({formActionType:e})=>({dict:"onl_cgform_head where copy_type = 0,table_txt,table_name",pageSize:10,async:!0,immediateChange:!0,popContainer:".link-table-config-modal",params:{order:"desc",column:"create_time"},onChange:m=>u(this,null,function*(){(r.titleField||r.otherFields)&&(yield e.setFieldsValue({titleField:"",otherFields:"",imageField:""}),yield e.clearValidate()),yield S(m)})})},{label:"标题字段",field:"titleField",component:"JSearchSelect",required:!0,componentProps:{async:!1,popContainer:".link-table-config-modal",dictOptions:s,immediateChange:!0,onChange:e=>{d.value=e,r.titleField=e}}},{label:"封面图片",field:"imageField",component:"JSearchSelect",componentProps:{async:!1,popContainer:".link-table-config-modal",dictOptions:h,immediateChange:!0,onChange:e=>{l.value=e,r.imageFieldName=e}}},{label:"其他字段",field:"otherFields",component:"JSelectMultiple",componentProps:{popContainer:".link-table-config-modal",options:T,onChange:e=>{r.otherFields=e}}},{label:"显示方式",field:"showType",component:"Select",defaultValue:"card",componentProps:{options:[{label:"卡片",value:"card"},{label:"下拉框",value:"select"}]}},{label:"是否多选",field:"multiSelect",component:"RadioGroup",defaultValue:!1,componentProps:{options:[{label:"否",value:!1},{label:"是",value:!0}]}}],[O,{validate:V,setFieldsValue:y,clearValidate:M,resetFields:D}]=E({schemas:k,showActionButtonGroup:!1,labelAlign:"right"});function N(){return u(this,null,function*(){let e=yield V();e.fieldName=n.value,o("success",e),f()})}return{registerModal:g,spinningLoading:t,registerForm:O,handleSubmit:N}}};function $(i,o,t,n,r,g){const f=v("BasicForm"),d=v("a-spin"),l=v("BasicModal");return R(),j(l,J({wrapClassName:"link-table-config-modal"},i.$attrs,{title:"关联记录配置",onRegister:n.registerModal,keyboard:"",canFullscreen:!1,cancelText:"关闭",onOk:n.handleSubmit}),{default:C(()=>[w(d,{spinning:n.spinningLoading},{default:C(()=>[w(f,{onRegister:n.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16,["onRegister","onOk"])}const Le=q(W,[["render",$]]);export{Le as default};