var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(t,o,e)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))_.call(o,e)&&m(t,e,o[e]);if(p)for(var e of p(o))M.call(o,e)&&m(t,e,o[e]);return t};var d=(t,o,e)=>new Promise((n,s)=>{var c=a=>{try{u(e.next(a))}catch(r){s(r)}},i=a=>{try{u(e.throw(a))}catch(r){s(r)}},u=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,i);u((e=e.apply(t,o)).next())});import{B as D}from"./index.2d23bddf.js";import{B as I}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as P}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{h as y,T as C,l as S,F as w,bG as N,L as F,o as T,q as k,t as g,v as x,V as R,z as $,y as q,B as A}from"./index.b3d2a891.js";import{a as L}from"./system.186e63e8.js";const Y=[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",width:160,align:"left"},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,n=e?"green":"red",s=e?"\u542F\u7528":"\u505C\u7528";return y(C,{color:n},()=>s)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],Z=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],O=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",required:!0},{field:"parentDept",label:"\u4E0A\u7EA7\u90E8\u95E8",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",required:!0},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},required:!0},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],V=S({name:"DeptModal",components:{BasicModal:D,BasicForm:I},emits:["success","register"],setup(t,{emit:o}){const e=w(!0),[n,{resetFields:s,setFieldsValue:c,updateSchema:i,validate:u}]=P({labelWidth:100,schemas:O,showActionButtonGroup:!1}),[a,{setModalProps:r,closeModal:b}]=N(l=>d(this,null,function*(){s(),r({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),F(e)&&c(f({},l.record));const h=yield L();i({field:"parentDept",componentProps:{treeData:h}})})),E=T(()=>F(e)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8");function B(){return d(this,null,function*(){try{const l=yield u();r({confirmLoading:!0}),console.log(l),b(),o("success")}finally{r({confirmLoading:!1})}})}return{registerModal:a,registerForm:n,getTitle:E,handleSubmit:B}}});function G(t,o,e,n,s,c){const i=g("BasicForm"),u=g("BasicModal");return x(),R(u,A(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:$(()=>[q(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var j=k(V,[["render",G]]),ee=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{j as D,ee as a,Y as c,Z as s};
