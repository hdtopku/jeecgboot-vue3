var V=Object.defineProperty,b=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(e,a,n)=>a in e?V(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,r=(e,a)=>{for(var n in a||(a={}))w.call(a,n)&&f(e,n,a[n]);if(p)for(var n of p(a))F.call(a,n)&&f(e,n,a[n]);return e},s=(e,a)=>b(e,J(a));import{e$ as I,bI as O,m as i,I as U,bd as _,bw as E,f0 as N,f1 as S}from"./index.25572ab7.js";import{c as j}from"./api.c80928e5.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import{_ as k}from"./JUploadModal.vue_vue_type_script_setup_true_lang.e8853ef1.js";import"./index.117f635e.js";function z(e,a,n){const m=I(e,r({token:!0,action:j},n)),{innerFile:o,handleChangeCommon:c,originColumn:u}=m,[v,{openModal:h}]=O(),C=i(()=>{let l=5,t=o.value;return!t||!t.name?"":t.name.length>l?t.name.substr(0,l)+"\u2026":t.name}),g=i(()=>{if(o.value){if(o.value.url)return o.value.url;if(o.value.path)return o.value.path}return""}),d=i(()=>{let l=u.value.maxCount;if(u.value&&u.value.fieldExtendJson){let t=JSON.parse(u.value.fieldExtendJson);l=t.uploadnum?t.uploadnum:0}return l!=null?l:0});function x(){h(!0,s(r({removeConfirm:!0,mover:!0,download:!0},u.value.props),{maxCount:d.value,fileType:a}))}function M(l){l&&(o.value.path=l,c(o.value))}return s(r({},m),{modalValue:g,maxCount:d,ellipsisFileName:C,registerModel:v,onModalChange:M,handleMoreOperation:x})}const A={Icon:U,Dropdown:_,LoadingOutlined:E,JUploadModal:k},B={switches:{visible:!0},getValue:e=>N(e),setValue:e=>S(e)};export{A as c,B as e,z as u};