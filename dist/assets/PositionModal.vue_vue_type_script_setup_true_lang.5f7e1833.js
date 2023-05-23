var F=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(t,s,e)=>s in t?F(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,h=(t,s)=>{for(var e in s||(s={}))w.call(s,e)&&g(t,e,s[e]);if(f)for(var e of f(s))P.call(s,e)&&g(t,e,s[e]);return t};var p=(t,s,e)=>new Promise((c,l)=>{var d=o=>{try{r(e.next(o))}catch(a){l(a)}},m=o=>{try{r(e.throw(o))}catch(a){l(a)}},r=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,m);r((e=e.apply(t,s)).next())});import{B as x}from"./index.fa33ec21.js";import{B as E}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as _}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{Z as u,a2 as A,j as C,C as I,bH as b,K as i,m as v,s as D,Q as M,w as U,v as k,x as T}from"./index.9d4ffdff.js";const Q=[{title:"\u804C\u52A1\u540D\u79F0",dataIndex:"name",width:200}],X=[{field:"name",label:"\u804C\u52A1\u540D\u79F0",component:"Input",colProps:{span:8}}],L=[{label:"\u4E3B\u952E",field:"id",component:"Input",show:!1},{field:"name",label:"\u804C\u52A1\u540D\u79F0",component:"Input",required:!0}],Z="/sys/position/exportXls",$="/sys/position/importExcel",z=t=>u.get({url:"/sys/position/list",params:t}),R=(t,s)=>{let e=s?"/sys/position/edit":"/sys/position/add";return u.post({url:e,params:t})},j=t=>u.get({url:"/sys/position/queryById",params:t}),J=(t,s)=>u.delete({url:"/sys/position/delete",data:t},{joinParamsToUrl:!0}).then(()=>{s()}),W=(t,s)=>{A.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>u.delete({url:"/sys/position/deleteBatch",data:t},{joinParamsToUrl:!0}).then(()=>{s()})})},Y=C({__name:"PositionModal",emits:["success","register"],setup(t,{emit:s}){const e=I(!0),[c,{resetFields:l,setFieldsValue:d,validate:m}]=_({schemas:L,showActionButtonGroup:!1}),[r,{setModalProps:o,closeModal:a}]=b(n=>p(this,null,function*(){yield l(),o({confirmLoading:!1}),e.value=!!(n!=null&&n.isUpdate),i(e)&&(n.record=yield j({id:n.record.id}),yield d(h({},n.record)))})),y=v(()=>i(e)?"\u7F16\u8F91\u804C\u52A1":"\u65B0\u589E\u804C\u52A1");function B(){return p(this,null,function*(){try{const n=yield m();o({confirmLoading:!0}),yield R(n,e.value),a(),s("success")}finally{o({confirmLoading:!1})}})}return(n,O)=>(D(),M(i(x),T(n.$attrs,{onRegister:i(r),title:y.value,onOk:B,width:700}),{default:U(()=>[k(i(E),{onRegister:i(c)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Y as _,Z as a,$ as b,Q as c,J as d,W as e,z as g,X as s};