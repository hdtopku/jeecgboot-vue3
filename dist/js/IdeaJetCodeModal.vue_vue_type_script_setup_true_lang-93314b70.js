var F=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(r,o,e)=>o in r?F(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,w=(r,o)=>{for(var e in o||(o={}))_.call(o,e)&&h(r,e,o[e]);if(d)for(var e of d(o))v.call(o,e)&&h(r,e,o[e]);return r};var f=(r,o,e)=>new Promise((u,l)=>{var c=t=>{try{n(e.next(t))}catch(a){l(a)}},m=t=>{try{n(e.throw(t))}catch(a){l(a)}},n=t=>t.done?u(t.value):Promise.resolve(t.value).then(c,m);n((e=e.apply(r,o)).next())});import{B as C}from"./index-8cf3aabb.js";import{B as b}from"./BasicForm-83ba9c88.js";import"./componentMap-a6d21ad6.js";import{u as k}from"./useForm-fa63344e.js";import"./JAddInput-2cbbbde9.js";import{A as M}from"./index-fde9c72f.js";import{s as I}from"./IdeaJetCode.api-7311e997.js";import{d as x,k as y,u as i,e as A,aV as R,ar as U,bi as L,f as O,aQ as V}from"./vue-c7e3516e.js";const j=[{label:"",field:"id",component:"Input",show:!1},{label:"jet\u6B63\u7248\u6FC0\u6D3B\u7801",field:"jetCode",component:"InputTextArea"},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],W=x({__name:"IdeaJetCodeModal",emits:["register","success"],setup(r,{emit:o}){const e=y(!0),[u,{resetFields:l,setFieldsValue:c,validate:m}]=k({labelWidth:150,schemas:j,showActionButtonGroup:!1}),[n,{setModalProps:t,closeModal:a}]=M(s=>f(this,null,function*(){yield l(),t({confirmLoading:!1,showCancelBtn:s==null?void 0:s.showFooter,showOkBtn:s==null?void 0:s.showFooter}),e.value=!!(s!=null&&s.isUpdate),i(e)&&(yield c(w({},s.record)))})),B=A(()=>i(e)?"\u7F16\u8F91":"\u65B0\u589E");function g(s){return f(this,null,function*(){try{let p=yield m();t({confirmLoading:!0}),yield I(p,e.value),a(),o("success",{isUpdate:e.value,values:p})}finally{t({confirmLoading:!1})}})}return(s,p)=>(R(),U(i(C),V(s.$attrs,{onRegister:i(n),title:B.value,onOk:g,width:"96%"}),{default:L(()=>[O(i(b),{onRegister:i(u)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{W as _};