var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(s,o,e)=>o in s?I(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,F=(s,o)=>{for(var e in o||(o={}))w.call(o,e)&&b(s,e,o[e]);if(f)for(var e of f(o))B.call(o,e)&&b(s,e,o[e]);return s};var d=(s,o,e)=>new Promise((a,l)=>{var c=u=>{try{r(e.next(u))}catch(i){l(i)}},m=u=>{try{r(e.throw(u))}catch(i){l(i)}},r=u=>u.done?a(u.value):Promise.resolve(u.value).then(c,m);r((e=e.apply(s,o)).next())});import{B as g}from"./index.df1721d5.js";import{B as E}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as v}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{j as _,C as x,bH as k,H as n,m as M,s as D,Q as y,w as N,v as R,x as U}from"./index.0be4b5b8.js";import{s as L}from"./Product.api.22cd55be.js";const W=[{title:"\b\u5546\u54C1\u540D\u79F0",dataIndex:"name"},{title:"\b\u5546\u54C1\u4EF7\u683C",dataIndex:"price"},{title:"\b\u5546\u54C1\u8FDB\u4EF7",dataIndex:"cost"},{title:"\u5907\u6CE8",dataIndex:"remark"},{title:"\b\u5546\u54C1\u56FE\u7247",dataIndex:"pic"}],$=[{label:"\b\u5546\u54C1\u540D\u79F0",field:"name",component:"Input"},{label:"\b\u5546\u54C1\u4EF7\u683C",field:"price",component:"InputNumber"}],O=[{label:"",field:"id",component:"Input",show:!1},{label:"\b\u5546\u54C1\u540D\u79F0",field:"name",component:"Input"},{label:"\b\u5546\u54C1\u4EF7\u683C",field:"price",component:"InputNumber"},{label:"\b\u5546\u54C1\u8FDB\u4EF7",field:"cost",component:"InputNumber"},{label:"\u5907\u6CE8",field:"remark",component:"Input"},{label:"\b\u5546\u54C1\u56FE\u7247",field:"pic",component:"Input"}],q=_({__name:"ProductModal",emits:["register","success"],setup(s,{emit:o}){const e=x(!0),[a,{resetFields:l,setFieldsValue:c,validate:m}]=v({labelWidth:150,schemas:O,showActionButtonGroup:!1}),[r,{setModalProps:u,closeModal:i}]=k(t=>d(this,null,function*(){yield l(),u({confirmLoading:!1,showCancelBtn:t==null?void 0:t.showFooter,showOkBtn:t==null?void 0:t.showFooter}),e.value=!!(t!=null&&t.isUpdate),n(e)&&(yield c(F({},t.record)))})),C=M(()=>n(e)?"\u7F16\u8F91":"\u65B0\u589E");function h(t){return d(this,null,function*(){try{let p=yield m();u({confirmLoading:!0}),yield L(p,e.value),i(),o("success",{isUpdate:e.value,values:p})}finally{u({confirmLoading:!1})}})}return(t,p)=>(D(),y(n(g),U(t.$attrs,{onRegister:n(r),title:C.value,onOk:h,width:"80%"}),{default:N(()=>[R(n(E),{onRegister:n(a)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{q as _,W as c,$ as s};