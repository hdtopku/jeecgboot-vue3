var m=(o,a,r)=>new Promise((i,s)=>{var c=e=>{try{n(r.next(e))}catch(p){s(p)}},t=e=>{try{n(r.throw(e))}catch(p){s(p)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(c,t);n((r=r.apply(o,a)).next())});import{d as l,l as u,e as f,u as d,V as w,a7 as g,ac as D,af as _}from"./vue-ebecda47.js";import{B,u as h}from"./index-5c1c038a.js";import{_ as $}from"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./index-85cfc899.js";import"./lodash-es-vendor-cd7703c8.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";const k=l({name:"tableDrawer",components:{BasicDrawer:B},emits:["success","register"],setup(o,{emit:a}){const r=u(!0),[i,{setDrawerProps:s,closeDrawer:c}]=h(e=>m(this,null,function*(){s({confirmLoading:!1}),r.value=!!(e!=null&&e.isUpdate)})),t=f(()=>d(r)?"编辑角色":"新增角色");function n(){return m(this,null,function*(){try{s({confirmLoading:!0}),c(),a("success")}finally{s({confirmLoading:!1})}})}return{registerDrawer:i,getTitle:t,handleSubmit:n}}});function y(o,a,r,i,s,c){const t=w("BasicDrawer");return g(),D(t,_(o.$attrs,{onRegister:o.registerDrawer,showFooter:"",title:o.getTitle,width:"500px",onOk:o.handleSubmit}),null,16,["onRegister","title","onOk"])}const I=$(k,[["render",y]]);export{I as default};