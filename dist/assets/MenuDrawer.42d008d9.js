var L=Object.defineProperty;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(r,t,o)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,B=(r,t)=>{for(var o in t||(t={}))R.call(t,o)&&C(r,o,t[o]);if(D)for(var o of D(t))S.call(t,o)&&C(r,o,t[o]);return r};var w=(r,t,o)=>new Promise((f,m)=>{var p=i=>{try{n(o.next(i))}catch(u){m(u)}},c=i=>{try{n(o.throw(i))}catch(u){m(u)}},n=i=>i.done?f(i.value):Promise.resolve(i.value).then(p,c);n((o=o.apply(r,t)).next())});import{B as T}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as U}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{l as V,dP as k,F as v,L as s,o as I,v as W,V as x,z as M,y as N,B as O}from"./index.3bed7968.js";import{f as $,l as j,C as q,g as z}from"./menu.data.b86bda04.js";import{u as G,B as H}from"./index.c00316d7.js";import{useDrawerAdaptiveWidth as J}from"./useAdaptiveWidth.736f6846.js";import"./uniqBy.be18330d.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useFormItem.1483bf1f.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./api.9041b4ca.js";import"./index.e7272bc8.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./user.api.c3bf9153.js";import"./renderUtils.afbb852b.js";import"./validator.01907e0c.js";const Ve=V({__name:"MenuDrawer",emits:["success","register"],setup(r,{emit:t}){const{adaptiveWidth:o}=J(),f=k(),m=v(!0),p=v(0),c=e=>e===2,[n,{setProps:i,resetFields:u,setFieldsValue:y,updateSchema:g,validate:_,clearValidate:K}]=U({labelCol:{md:{span:4},sm:{span:6}},wrapperCol:{md:{span:20},sm:{span:18}},schemas:$,showActionButtonGroup:!1}),[P,{setDrawerProps:d,closeDrawer:b}]=G(e=>w(this,null,function*(){var F;yield u(),d({confirmLoading:!1}),m.value=!!(e!=null&&e.isUpdate),p.value=(F=e==null?void 0:e.record)==null?void 0:F.menuType;const a=yield j();if(g([{field:"parentId",componentProps:{treeData:a}},{field:"name",label:c(s(p))?"\u6309\u94AE/\u6743\u9650":"\u83DC\u5355\u540D\u79F0"},{field:"url",required:!c(s(p)),componentProps:{onChange:l=>h(l.target.value)}}]),typeof e.record=="object"){let l=B({},e.record);y(l),h(l.url)}i({disabled:!f.showFooter})})),A=I(()=>s(m)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");function E(){return w(this,null,function*(){try{const e=yield _();q.IFrame===e.component&&(e.component=e.frameSrc),d({confirmLoading:!0}),yield z(e,s(m)),b(),t("success")}finally{d({confirmLoading:!1})}})}function h(e){let a="";e!=null&&e!=""?(e.startsWith("/")&&(e=e.substring(1)),e=e.replaceAll("/","-"),e=e.replaceAll(":","@"),a=`${e}`):a="\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",g([{field:"componentName",componentProps:{placeholder:a}}])}return(e,a)=>(W(),x(s(H),O(e.$attrs,{onRegister:s(P),showFooter:"",width:s(o),title:s(A),onOk:E}),{default:M(()=>[N(s(T),{onRegister:s(n),class:"menuForm"},null,8,["onRegister"])]),_:1},16,["onRegister","width","title"]))}});export{Ve as default};