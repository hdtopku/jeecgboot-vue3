var w=Object.defineProperty,R=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(s,a,e)=>a in s?w(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,p=(s,a)=>{for(var e in a||(a={}))V.call(a,e)&&v(s,e,a[e]);if(g)for(var e of g(a))S.call(a,e)&&v(s,e,a[e]);return s},F=(s,a)=>R(s,x(a));var _=(s,a,e)=>new Promise((t,r)=>{var d=o=>{try{l(e.next(o))}catch(n){r(n)}},c=o=>{try{l(e.throw(o))}catch(n){r(n)}},l=o=>o.done?t(o.value):Promise.resolve(o.value).then(d,c);l((e=e.apply(s,a)).next())});import{B as U}from"./BasicModal-ff8f2086.js";import{c as z,l as N}from"./jeecg-online-vendor-bf2efbcb.js";import"./index-8cf3aabb.js";import{A as O}from"./index-fde9c72f.js";import{rules as P}from"./validator-4a4216c7.js";import{a as j}from"./UserSetting.api-279c855f.js";import{d as y,r as q,k,U as f,aV as D,ar as I,bi as m,f as i,E as L,aQ as Q,u as T}from"./vue-c7e3516e.js";import{cS as $}from"./antd-vue-vendor-1561c1ba.js";const G=y({name:"user-replace-email-modal"}),se=y(F(p({},G),{emits:["register","success"],setup(s,{emit:a}){z();const{createMessage:e}=N(),t=q({email:""}),r=k(),d={email:[p({},P.duplicateCheckRule("sys_user","email",t,{label:"\u90AE\u7BB1"})[0]),{required:!0,type:"email",message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"}]};$.useForm;const c=k(""),[l,{setModalProps:o,closeModal:n}]=O(u=>_(this,null,function*(){r.value.resetFields(),r.value.clearValidate(),o({confirmLoading:!1}),c.value="\u4FEE\u6539\u90AE\u7BB1",u.record.smscode="",Object.assign(t,u.record)}));function A(){return _(this,null,function*(){yield r.value.validateFields(),j(t).then(u=>{u.success?(e.success("\u4FEE\u6539\u90AE\u7BB1\u6210\u529F"),a("success"),n()):e.warning(u.message)})})}return(u,B)=>{const C=f("a-input"),E=f("a-form-item"),M=f("a-button"),b=f("a-form");return D(),I(U,Q(u.$attrs,{onRegister:T(l),width:"500px",title:c.value,showCancelBtn:!1,showOkBtn:!1}),{default:m(()=>[i(b,{class:"antd-modal-form",ref_key:"formRef",ref:r,model:t,rules:d},{default:m(()=>[i(E,{name:"email"},{default:m(()=>[i(C,{size:"large",value:t.email,"onUpdate:value":B[0]||(B[0]=h=>t.email=h),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["value"])]),_:1}),i(E,null,{default:m(()=>[i(M,{size:"large",type:"primary",block:"",onClick:A},{default:m(()=>[L(" \u786E\u8BA4 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},16,["onRegister","title"])}}}));export{se as _};