var L=Object.defineProperty;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(r,t,o)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,B=(r,t)=>{for(var o in t||(t={}))R.call(t,o)&&C(r,o,t[o]);if(D)for(var o of D(t))S.call(t,o)&&C(r,o,t[o]);return r};var w=(r,t,o)=>new Promise((f,m)=>{var p=i=>{try{n(o.next(i))}catch(u){m(u)}},c=i=>{try{n(o.throw(i))}catch(u){m(u)}},n=i=>i.done?f(i.value):Promise.resolve(i.value).then(p,c);n((o=o.apply(r,t)).next())});import{B as T}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as U}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{l as V,dM as k,F as v,L as s,o as I,v as M,V as W,z as x,y as N,B as O}from"./index.b3d2a891.js";import{f as $,l as j,C as q,g as z}from"./menu.data.b4aa7b37.js";import{u as G,B as H}from"./index.804bf00b.js";import{useDrawerAdaptiveWidth as J}from"./useAdaptiveWidth.584cb82a.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./user.api.365c9555.js";import"./renderUtils.a1668db6.js";import"./validator.87cfc387.js";const Ve=V({__name:"MenuDrawer",emits:["success","register"],setup(r,{emit:t}){const{adaptiveWidth:o}=J(),f=k(),m=v(!0),p=v(0),c=e=>e===2,[n,{setProps:i,resetFields:u,setFieldsValue:y,updateSchema:g,validate:_,clearValidate:K}]=U({labelCol:{md:{span:4},sm:{span:6}},wrapperCol:{md:{span:20},sm:{span:18}},schemas:$,showActionButtonGroup:!1}),[b,{setDrawerProps:d,closeDrawer:A}]=G(e=>w(this,null,function*(){var F;yield u(),d({confirmLoading:!1}),m.value=!!(e!=null&&e.isUpdate),p.value=(F=e==null?void 0:e.record)==null?void 0:F.menuType;const a=yield j();if(g([{field:"parentId",componentProps:{treeData:a}},{field:"name",label:c(s(p))?"\u6309\u94AE/\u6743\u9650":"\u83DC\u5355\u540D\u79F0"},{field:"url",required:!c(s(p)),componentProps:{onChange:l=>h(l.target.value)}}]),typeof e.record=="object"){let l=B({},e.record);y(l),h(l.url)}i({disabled:!f.showFooter})})),P=I(()=>s(m)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");function E(){return w(this,null,function*(){try{const e=yield _();q.IFrame===e.component&&(e.component=e.frameSrc),d({confirmLoading:!0}),yield z(e,s(m)),A(),t("success")}finally{d({confirmLoading:!1})}})}function h(e){let a="";e!=null&&e!=""?(e.startsWith("/")&&(e=e.substring(1)),e=e.replaceAll("/","-"),e=e.replaceAll(":","@"),a=`${e}`):a="\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",g([{field:"componentName",componentProps:{placeholder:a}}])}return(e,a)=>(M(),W(s(H),O(e.$attrs,{onRegister:s(b),showFooter:"",width:s(o),title:s(P),onOk:E}),{default:x(()=>[N(s(T),{onRegister:s(n),class:"menuForm"},null,8,["onRegister"])]),_:1},16,["onRegister","width","title"]))}});export{Ve as default};
