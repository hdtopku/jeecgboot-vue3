var g=(o,i,t)=>new Promise((m,r)=>{var s=e=>{try{n(t.next(e))}catch(p){r(p)}},u=e=>{try{n(t.throw(e))}catch(p){r(p)}},n=e=>e.done?m(e.value):Promise.resolve(e.value).then(s,u);n((t=t.apply(o,i)).next())});import{U as l,_ as T}from"./JUpload-ffe34816.js";import{d as v,l as M,r as _,e as k,a7 as w,ac as B,aa as C,f as R,af as h,u as f,n as x}from"./vue-ebecda47.js";import{B as O}from"./index-e91e8b28.js";import{C as U}from"./jeecg-online-vendor-cfb58502.js";import{p as c,E}from"./index-85cfc899.js";const L=v({__name:"JUploadModal",props:{value:c.oneOfType([c.string,c.array]),width:c.number.def(520)},emits:["change","update:value","register"],setup(o,{emit:i}){const t=o,{createMessage:m}=U(),r=M(),s=_({props:{}}),u=k(()=>{var a;return((a=s.props)==null?void 0:a.fileType)===l.image?"图片上传":"文件上传"}),[n,{closeModal:e}]=E(a=>g(this,null,function*(){var d;s.props=f(a)||{},[l.image,"img","picture"].includes((d=s.props)==null?void 0:d.fileType)?s.props.fileType=l.image:s.props.fileType=l.file,x(()=>r.value.addActionsListener())}));function p(){e()}function y(a){i("change",a),i("update:value",a)}return(a,d)=>(w(),B(f(O),h({onRegister:f(n),title:u.value,width:o.width,onOk:p},a.$attrs),{default:C(()=>[R(T,h({ref_key:"uploadRef",ref:r,value:o.value},s.props,{onChange:y}),null,16,["value"])]),_:1},16,["onRegister","title","width"]))}});export{L as _};