var s=Object.defineProperty;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var l=(o,r,t)=>r in o?s(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,p=(o,r)=>{for(var t in r||(r={}))b.call(r,t)&&l(o,t,r[t]);if(m)for(var t of m(r))d.call(r,t)&&l(o,t,r[t]);return o};var c=(o,r,t)=>new Promise((u,i)=>{var f=e=>{try{a(t.next(e))}catch(n){i(n)}},_=e=>{try{a(t.throw(e))}catch(n){i(n)}},a=e=>e.done?u(e.value):Promise.resolve(e.value).then(f,_);a((t=t.apply(o,r)).next())});import{A as y}from"./jeecg-online-vendor-ecddc31b.js";import{q as S,u as O}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";function k(o,r){function t(){S(()=>c(this,null,function*(){if(!o)return;(yield y(()=>import("./index-b03d7914.js").then(i=>i.b$),["js/index-b03d7914.js","js/jeecg-online-vendor-ecddc31b.js","js/vue-bcbaddf9.js","js/antd-vue-vendor-a78909e6.js","js/tinymce-vendor-676f8393.js","js/vxe-table-vendor-9edfd3ae.js","js/lodash-es-vendor-9b741fb8.js","assets/jeecg-online-vendor-0a2b6c82.css","js/echarts-vendor-6c8e2159.js","assets/index-fdc74769.css"])).default.create(O(o),p({animation:500,delay:400,delayOnTouchOnly:!0},r))}))}return{initSortable:t}}export{k as useSortable};