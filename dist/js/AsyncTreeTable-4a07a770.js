var T=Object.defineProperty,C=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(o,t,r)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,_=(o,t)=>{for(var r in t||(t={}))y.call(t,r)&&f(o,r,t[r]);if(c)for(var r of c(t))k.call(t,r)&&f(o,r,t[r]);return o},h=(o,t)=>C(o,v(t));var p=(o,t,r)=>new Promise((s,l)=>{var n=e=>{try{a(r.next(e))}catch(i){l(i)}},d=e=>{try{a(r.throw(e))}catch(i){l(i)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,d);a((r=r.apply(o,t)).next())});import{ad as E}from"./jeecg-online-vendor-bf2efbcb.js";import{P as I}from"./index-97b07c1c.js";import R from"./BasicTable-29c6504d.js";import"./componentMap-a6d21ad6.js";import"./BasicTable.vue_vue_type_style_index_0_lang-b7d11241.js";import{u as w}from"./useTable-7e303edd.js";import{d as B,k as g,U as F,aV as S,ar as L,bi as b,f as x,u}from"./vue-c7e3516e.js";import"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./index-fde9c72f.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./useContentHeight-e8205a5b.js";import"./useWindowSizeFn-e5cad7ae.js";import"./useContentViewHeight-c99c81b1.js";import"./usePageContext-7a6a8ce0.js";import"./injectionKey-5da932b3.js";import"./BasicForm-83ba9c88.js";import"./BasicForm.vue_vue_type_style_index_0_lang-aeaafe88.js";import"./index-8cf3aabb.js";import"./BasicModal-ff8f2086.js";import"./useFormItem-4a12ff45.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import"./download-c8889ed9.js";import"./base64Conver-4e359726.js";import"./index-ee020524.js";import"./index-53e807bd.js";import"./useCountdown-473e4dcc.js";import"./JAddInput-2cbbbde9.js";import"./areaDataUtil-b2642a1f.js";import"./useSelectBiz-c744cf20.js";import"./props-8e8dbf4f.js";import"./index-d4783a30.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";import"./useTreeBiz-faf9875a.js";import"./index-63ed9c18.js";import"./depart.api-25dc3d39.js";import"./index-ed4be6fa.js";import"./useForm-fa63344e.js";const N="/mock/api/asynTreeList",Et=B({__name:"AsyncTreeTable",setup(o){const t=g(!1),r=g([]),[s,{setLoading:l}]=w({rowKey:"id",bordered:!0,canResize:!1,isTreeTable:!0,showIndexColumn:!0,columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u7EC4\u4EF6",dataIndex:"component"},{title:"\u6392\u5E8F",dataIndex:"orderNum"}]});function n(e){return p(this,null,function*(){t.value=!0;let i=yield E.get({url:N,params:e});return t.value=!1,i.map(m=>m.hasChildren?h(_({},m),{children:[]}):m)})}function d(){return p(this,null,function*(){r.value=yield n({id:"0"})})}d();function a(e,i){return p(this,null,function*(){e&&i.hasChildren&&i.children.length===0&&(i.children=yield n({id:i.id}))})}return(e,i)=>{const m=F("a-card");return S(),L(u(I),null,{default:b(()=>[x(m,{bordered:!1},{default:b(()=>[x(u(R),{loading:t.value,dataSource:r.value,onRegister:u(s),onExpand:a},null,8,["loading","dataSource","onRegister"])]),_:1})]),_:1})}}});export{Et as default};