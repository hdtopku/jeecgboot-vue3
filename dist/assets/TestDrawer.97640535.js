var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(e,t,r)=>new Promise(((a,o)=>{var s=e=>{try{i(r.next(e))}catch(t){o(t)}},n=e=>{try{i(r.throw(e))}catch(t){o(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,n);i((r=r.apply(e,t)).next())}));import{B as n}from"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import{u as i}from"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import{l,F as c,o as u,L as d,q as m,t as p,v as f,V as b,z as g,y as h,B as w}from"./index.435ab247.js";import{B as y,u as v}from"./index.65c1cb1a.js";const j=[{title:"名称",dataIndex:"testName",width:200},{title:"值",dataIndex:"testValue",width:180},{title:"创建时间",dataIndex:"createTime",width:180}],F=[{field:"testName",label:"名称",component:"Input",colProps:{span:8}}],O=[{field:"testName",label:"名称",required:!0,component:"Input"},{field:"testValue",label:"值",required:!0,component:"Input"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var x=m(l({name:"RoleDrawer",components:{BasicDrawer:y,BasicForm:n},emits:["success","register"],setup(e,{emit:n}){const l=c(!0),[m,{resetFields:p,setFieldsValue:f,validate:b}]=i({labelWidth:90,schemas:O,showActionButtonGroup:!1}),[g,{setDrawerProps:h,closeDrawer:w}]=v((e=>s(this,null,(function*(){p(),h({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate),d(l)&&f(((e,s)=>{for(var n in s||(s={}))r.call(s,n)&&o(e,n,s[n]);if(t)for(var n of t(s))a.call(s,n)&&o(e,n,s[n]);return e})({},e.record))}))));return{registerDrawer:g,registerForm:m,getTitle:u((()=>d(l)?"编辑角色":"新增角色")),handleSubmit:function(){return s(this,null,(function*(){try{yield b();h({confirmLoading:!0}),w(),n("success")}finally{h({confirmLoading:!1})}}))}}}}),[["render",function(e,t,r,a,o,s){const n=p("BasicForm"),i=p("BasicDrawer");return f(),b(i,w(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:g((()=>[h(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}]]),B=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{x as T,B as a,j as c,F as s};