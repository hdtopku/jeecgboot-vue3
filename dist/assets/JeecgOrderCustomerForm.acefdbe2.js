var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(o,r,t)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,l=(o,r)=>{for(var t in r||(r={}))h.call(r,t)&&g(o,t,r[t]);if(f)for(var t of f(r))y.call(r,t)&&g(o,t,r[t]);return o};var d=(o,r,t)=>new Promise((i,p)=>{var u=e=>{try{a(t.next(e))}catch(s){p(s)}},m=e=>{try{a(t.throw(e))}catch(s){p(s)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(u,m);a((t=t.apply(o,r)).next())});import{B as C}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as D}from"./useForm.b4df01c5.js";import{q as O,j,aN as w,m as $,r as k,s as q,Q as v,Z as x}from"./index.0be4b5b8.js";import"./JAddInput.d2fd0723.js";import{g as I}from"./data.b0f04951.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";const J=j({name:"JeecgOrderCustomerForm",components:{BasicForm:C},props:{formData:w.object.def({})},setup(o){const[r,{setFieldsValue:t,setProps:i,getFieldsValue:p,updateSchema:u}]=D({labelWidth:150,schemas:I(o.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),m=$(()=>o.formData.disabled!==!1);let a={};const e="/test/jeecgOrderMain/queryOrderCustomerListByMainId";function s(n){return d(this,null,function*(){let B={id:n};const c=yield x.get({url:e,params:B});if(console.log("data",c),c&&c.length>0){let _=c[0];a=l({},_),yield t(a),yield i({disabled:m.value})}})}function F(){return d(this,null,function*(){let n=l({},a);return Object.keys(n).length>0?n:!1})}return{registerForm:r,formDisabled:m,initFormData:s,getFormData:F}}});function M(o,r,t,i,p,u){const m=k("BasicForm");return q(),v(m,{onRegister:o.registerForm},null,8,["onRegister"])}const lt=O(J,[["render",M]]);export{lt as default};