var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(o,r,t)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,u=(o,r)=>{for(var t in r||(r={}))h.call(r,t)&&g(o,t,r[t]);if(f)for(var t of f(r))y.call(r,t)&&g(o,t,r[t]);return o};var d=(o,r,t)=>new Promise((i,p)=>{var l=e=>{try{a(t.next(e))}catch(s){p(s)}},m=e=>{try{a(t.throw(e))}catch(s){p(s)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(l,m);a((t=t.apply(o,r)).next())});import{B as C}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as D}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{q as O,l as v,aM as w,o as $,t as j,v as k,V as q,a1 as M}from"./index.23784a6b.js";import{g as V}from"./data.0fd8ad8a.js";import"./uniqBy.d45e63ad.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";const x=v({name:"JeecgOrderCustomerForm",components:{BasicForm:C},props:{formData:w.object.def({})},setup(o){const[r,{setFieldsValue:t,setProps:i,getFieldsValue:p,updateSchema:l}]=D({labelWidth:150,schemas:V(o.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),m=$(()=>o.formData.disabled!==!1);let a={};const e="/test/jeecgOrderMain/queryOrderCustomerListByMainId";function s(n){return d(this,null,function*(){let B={id:n};const c=yield M.get({url:e,params:B});if(console.log("data",c),c&&c.length>0){let _=c[0];a=u({},_),yield t(a),yield i({disabled:m.value})}})}function F(){return d(this,null,function*(){let n=u({},a);return Object.keys(n).length>0?n:!1})}return{registerForm:r,formDisabled:m,initFormData:s,getFormData:F}}});function I(o,r,t,i,p,l){const m=j("BasicForm");return k(),q(m,{onRegister:o.registerForm},null,8,["onRegister"])}var ft=O(x,[["render",I]]);export{ft as default};