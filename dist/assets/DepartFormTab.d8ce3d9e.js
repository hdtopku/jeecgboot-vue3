var O=Object.defineProperty;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(a,e,t)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))k.call(e,t)&&C(a,t,e[t]);if(h)for(var t of h(e))P.call(e,t)&&C(a,t,e[t]);return a};var n=(a,e,t)=>new Promise((p,m)=>{var s=r=>{try{i(t.next(r))}catch(c){m(c)}},u=r=>{try{i(t.throw(r))}catch(c){m(c)}},i=r=>r.done?p(r.value):Promise.resolve(r.value).then(s,u);i((t=t.apply(a,e)).next())});import{B as S}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as V}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{j as N,bj as R,C as f,m as A,X as E,E as _,H as b,r as D,s as U,Q as q,w as y,v,aW as w,y as x,q as G}from"./index.0be4b5b8.js";import{b as H}from"./depart.api.a4de2579.js";import{u as M,o as j}from"./depart.data.ff6c9320.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./MinusCircleOutlined.339270b0.js";const Q={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},W={class:"j-box-bottom-button-float"},X=N({__name:"DepartFormTab",props:{data:{type:Object,default:()=>({})},rootTreeData:{type:Array,default:()=>[]}},emits:["success"],setup(a,{emit:e}){const t=a;R("prefixCls");const p=f(!1),m=f(!0),s=f({}),[u,{resetFields:i,setFieldsValue:r,validate:c,updateSchema:d}]=V({schemas:M().basicFormSchema,showActionButtonGroup:!1}),g=A(()=>{var o;return(o=t==null?void 0:t.data)!=null&&o.parentId?j.child:j.root});E(()=>{d([{field:"parentId",componentProps:{disabled:!0}},{field:"orgCode",componentProps:{disabled:!0}}]),_(()=>t.data,()=>n(this,null,function*(){let o=b(t.data);typeof o!="object"&&(o={}),s.value=o,yield i(),yield r(l({},o))}),{deep:!0,immediate:!0}),_(()=>t.rootTreeData,()=>n(this,null,function*(){d([{field:"parentId",componentProps:{treeData:t.rootTreeData}}])}),{deep:!0,immediate:!0}),_(g,()=>n(this,null,function*(){d([{field:"orgCategory",componentProps:{options:g.value}}])}),{immediate:!0})});function B(){return n(this,null,function*(){yield i(),yield r(l({},s.value))})}function T(){return n(this,null,function*(){try{p.value=!0;let o=yield c();o=Object.assign({},s.value,o),yield H(o,m.value),e("success"),Object.assign(s.value,o)}finally{p.value=!1}})}return(o,z)=>{const F=D("a-button"),I=D("a-spin");return U(),q(I,{spinning:p.value},{default:y(()=>[v(b(S),{onRegister:b(u)},null,8,["onRegister"]),w("div",Q,[w("div",W,[v(F,{preIcon:"ant-design:sync-outlined",onClick:B},{default:y(()=>[x("\u91CD\u7F6E")]),_:1}),v(F,{type:"primary",preIcon:"ant-design:save-filled",onClick:T},{default:y(()=>[x("\u4FDD\u5B58")]),_:1})])])]),_:1},8,["spinning"])}}});const xt=G(X,[["__scopeId","data-v-3680cdcf"]]);export{xt as default};