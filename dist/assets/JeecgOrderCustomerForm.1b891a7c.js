var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(o,r,t)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,u=(o,r)=>{for(var t in r||(r={}))h.call(r,t)&&g(o,t,r[t]);if(f)for(var t of f(r))y.call(r,t)&&g(o,t,r[t]);return o};var d=(o,r,t)=>new Promise((i,p)=>{var l=e=>{try{a(t.next(e))}catch(s){p(s)}},m=e=>{try{a(t.throw(e))}catch(s){p(s)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(l,m);a((t=t.apply(o,r)).next())});import{B as C}from"./BasicForm.e500713f.js";import"./helper.15e1830a.js";import{u as D}from"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import{q as O,l as v,aL as w,o as $,t as j,v as k,V as q,a1 as V}from"./index.6c1aeca2.js";import{g as x}from"./data.45851239.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";const I=v({name:"JeecgOrderCustomerForm",components:{BasicForm:C},props:{formData:w.object.def({})},setup(o){const[r,{setFieldsValue:t,setProps:i,getFieldsValue:p,updateSchema:l}]=D({labelWidth:150,schemas:x(o.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),m=$(()=>o.formData.disabled!==!1);let a={};const e="/test/jeecgOrderMain/queryOrderCustomerListByMainId";function s(n){return d(this,null,function*(){let B={id:n};const c=yield V.get({url:e,params:B});if(console.log("data",c),c&&c.length>0){let _=c[0];a=u({},_),yield t(a),yield i({disabled:m.value})}})}function F(){return d(this,null,function*(){let n=u({},a);return Object.keys(n).length>0?n:!1})}return{registerForm:r,formDisabled:m,initFormData:s,getFormData:F}}});function J(o,r,t,i,p,l){const m=j("BasicForm");return k(),q(m,{onRegister:o.registerForm},null,8,["onRegister"])}var Ft=O(I,[["render",J]]);export{Ft as default};