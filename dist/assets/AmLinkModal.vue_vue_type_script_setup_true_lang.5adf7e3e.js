var w=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(t,o,e)=>o in t?w(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,h=(t,o)=>{for(var e in o||(o={}))g.call(o,e)&&d(t,e,o[e]);if(f)for(var e of f(o))C.call(o,e)&&d(t,e,o[e]);return t};var F=(t,o,e)=>new Promise((a,i)=>{var p=s=>{try{r(e.next(s))}catch(l){i(l)}},c=s=>{try{r(e.throw(s))}catch(l){i(l)}},r=s=>s.done?a(s.value):Promise.resolve(s.value).then(p,c);r((e=e.apply(t,o)).next())});import{B as k}from"./index.df1721d5.js";import{B as A}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as b}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{j as v,C as D,bH as _,H as n,m as x,s as I,Q as P,w as y,v as L,x as M}from"./index.0be4b5b8.js";import{s as T}from"./AmLink.api.a7c67fb9.js";const R=[{label:"",field:"id",component:"Input",show:!1},{label:"\u6FC0\u6D3B\u94FE",field:"link",component:"InputTextArea",componentProps:{placeholder:"\u77ED\u94FE\u3001\u6216https://itunes.apple.com..."}},{label:"\u9884\u5B58",field:"email",component:"InputTextArea",componentProps:{placeholder:"\u53EF\u590D\u5236\uFF0C\u5982\u90AE\u7BB1\u3001\u77ED\u94FE\u3001\u6FC0\u6D3B\u94FE\u7B49"}},{label:"\u957F\u94FE\u63A5",field:"longLink",component:"InputTextArea",componentProps:{placeholder:"https://email.myunidays.uk..."}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea",componentProps:{placeholder:"\u91CD\u8981\u7684\u4FE1\u606F"}},{label:"\u9884\u5B58",field:"thirdLink",component:"InputTextArea",componentProps:{placeholder:"\u53EF\u590D\u5236\uFF0C\u5982\u90AE\u7BB1\u3001\u77ED\u94FE\u3001\u6FC0\u6D3B\u94FE\u7B49"}}],Q=v({__name:"AmLinkModal",emits:["register","success"],setup(t,{emit:o}){const e=D(!0),[a,{resetFields:i,setFieldsValue:p,validate:c}]=b({labelWidth:150,schemas:R,showActionButtonGroup:!1}),[r,{setModalProps:s,closeModal:l}]=_(u=>F(this,null,function*(){yield i(),s({confirmLoading:!1,showCancelBtn:u==null?void 0:u.showFooter,showOkBtn:u==null?void 0:u.showFooter}),e.value=!!(u!=null&&u.isUpdate),n(e)&&(yield p(h({},u.record)))})),B=x(()=>n(e)?"\u7F16\u8F91":"\u65B0\u589E");function E(u){return F(this,null,function*(){try{let m=yield c();s({confirmLoading:!0}),yield T(m,e.value),l(),o("success",{isUpdate:e.value,values:m})}finally{s({confirmLoading:!1})}})}return(u,m)=>(I(),P(n(k),M(u.$attrs,{onRegister:n(r),title:B.value,onOk:E,width:"96%"}),{default:y(()=>[L(n(A),{onRegister:n(a)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Q as _};