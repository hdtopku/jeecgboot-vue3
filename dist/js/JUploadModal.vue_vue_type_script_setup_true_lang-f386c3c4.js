var m=(r,p,s)=>new Promise((o,i)=>{var d=a=>{try{t(s.next(a))}catch(e){i(e)}},u=a=>{try{t(s.throw(a))}catch(e){i(e)}},t=a=>a.done?o(a.value):Promise.resolve(a.value).then(d,u);t((s=s.apply(r,p)).next())});import{B as h}from"./index-cd2db611.js";import"./jeecg-online-vendor-ecddc31b.js";import{U as n,_ as y}from"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import{p as l,B as T}from"./index-b03d7914.js";import{d as _,k as v,r as k,e as B,u as f,q as w,a5 as M,a9 as R,a7 as x,f as C,ag as g}from"./vue-bcbaddf9.js";const A=_({__name:"JUploadModal",props:{value:l.oneOfType([l.string,l.array]),width:l.number.def(520)},emits:["change","update:value","register"],setup(r,{emit:p}){const s=v(),o=k({props:{}}),i=B(()=>{var e;return((e=o.props)==null?void 0:e.fileType)===n.image?"图片上传":"文件上传"}),[d,{closeModal:u}]=T(e=>m(this,null,function*(){var c;o.props=f(e)||{},[n.image,"img","picture"].includes((c=o.props)==null?void 0:c.fileType)?o.props.fileType=n.image:o.props.fileType=n.file,w(()=>s.value.addActionsListener())}));function t(){u()}function a(e){p("change",e),p("update:value",e)}return(e,c)=>(M(),R(f(h),g({onRegister:f(d),title:i.value,width:r.width,onOk:t},e.$attrs),{default:x(()=>[C(y,g({ref_key:"uploadRef",ref:s,value:r.value},o.props,{onChange:a}),null,16,["value"])]),_:1},16,["onRegister","title","width"]))}});export{A as _};