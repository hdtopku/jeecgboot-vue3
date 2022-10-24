var L=Object.defineProperty;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(r,t,o)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,B=(r,t)=>{for(var o in t||(t={}))R.call(t,o)&&C(r,o,t[o]);if(D)for(var o of D(t))S.call(t,o)&&C(r,o,t[o]);return r};var w=(r,t,o)=>new Promise((f,m)=>{var p=i=>{try{n(o.next(i))}catch(u){m(u)}},c=i=>{try{n(o.throw(i))}catch(u){m(u)}},n=i=>i.done?f(i.value):Promise.resolve(i.value).then(p,c);n((o=o.apply(r,t)).next())});import{B as T}from"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import{u as U}from"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import{l as V,dM as k,F as v,L as s,o as I,v as M,V as W,z as x,y as N,B as O}from"./index.a1b4e527.js";import{f as $,l as j,C as q,g as z}from"./menu.data.c5b0dc66.js";import{u as G,B as H}from"./index.a4221efd.js";import{useDrawerAdaptiveWidth as J}from"./useAdaptiveWidth.8f1f6468.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./api.d480aed7.js";import"./index.b1e57df7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./user.api.790518f7.js";import"./renderUtils.ec63b001.js";import"./validator.db5ea725.js";const Ve=V({__name:"MenuDrawer",emits:["success","register"],setup(r,{emit:t}){const{adaptiveWidth:o}=J(),f=k(),m=v(!0),p=v(0),c=e=>e===2,[n,{setProps:i,resetFields:u,setFieldsValue:y,updateSchema:g,validate:_,clearValidate:K}]=U({labelCol:{md:{span:4},sm:{span:6}},wrapperCol:{md:{span:20},sm:{span:18}},schemas:$,showActionButtonGroup:!1}),[b,{setDrawerProps:d,closeDrawer:A}]=G(e=>w(this,null,function*(){var F;yield u(),d({confirmLoading:!1}),m.value=!!(e!=null&&e.isUpdate),p.value=(F=e==null?void 0:e.record)==null?void 0:F.menuType;const a=yield j();if(g([{field:"parentId",componentProps:{treeData:a}},{field:"name",label:c(s(p))?"\u6309\u94AE/\u6743\u9650":"\u83DC\u5355\u540D\u79F0"},{field:"url",required:!c(s(p)),componentProps:{onChange:l=>h(l.target.value)}}]),typeof e.record=="object"){let l=B({},e.record);y(l),h(l.url)}i({disabled:!f.showFooter})})),P=I(()=>s(m)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");function E(){return w(this,null,function*(){try{const e=yield _();q.IFrame===e.component&&(e.component=e.frameSrc),d({confirmLoading:!0}),yield z(e,s(m)),A(),t("success")}finally{d({confirmLoading:!1})}})}function h(e){let a="";e!=null&&e!=""?(e.startsWith("/")&&(e=e.substring(1)),e=e.replaceAll("/","-"),e=e.replaceAll(":","@"),a=`${e}`):a="\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",g([{field:"componentName",componentProps:{placeholder:a}}])}return(e,a)=>(M(),W(s(H),O(e.$attrs,{onRegister:s(b),showFooter:"",width:s(o),title:s(P),onOk:E}),{default:x(()=>[N(s(T),{onRegister:s(n),class:"menuForm"},null,8,["onRegister"])]),_:1},16,["onRegister","width","title"]))}});export{Ve as default};