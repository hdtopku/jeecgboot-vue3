import{a as z,s as N}from"./Wenku.api.c9577a09.js";import{_ as F}from"./CommonList.vue_vue_type_script_setup_true_lang.029d1d78.js";import{j as V,C as c,r as s,s as h,Q as x,w as a,v as n,y as l,R as q,aW as o,B as r,z as _}from"./index.9d4ffdff.js";const D=V({__name:"WenkuDataList",emits:["queryList","handleEdit"],setup(w,{expose:i,emit:d}){const p=c(),C=c(),f=c("0"),k=(t={pageNo:1,pageSize:30,status:f.value})=>{C.value=t,f.value=t==null?void 0:t.status,p.value.execQuery(z,t)},B=t=>{N({id:t},!0).then(()=>{d("queryList")})},E=t=>{d("handleEdit",t)};return i({startQuery:k}),(t,Q)=>{const y=s("a-button"),g=s("a-menu-item"),L=s("a-menu"),u=s("a-typography-text"),v=s("a-tag");return h(),x(F,{ref_key:"CommonListRef",ref:p},{operate:a(({item:e})=>[n(L,null,{default:a(()=>[(e==null?void 0:e.status)!==0?(h(),x(g,{key:0,onClick:b=>B(e.id)},{default:a(()=>[n(y,{type:"warning",ghost:"",size:"small"},{default:a(()=>[l("\u7F6E\u9876")]),_:1})]),_:2},1032,["onClick"])):q("",!0),n(g,{onClick:b=>E(e)},{default:a(()=>[n(y,{type:"link",size:"small"},{default:a(()=>[l("\u7F16\u8F91")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),left:a(({item:e})=>[o("div",null,[n(u,{copyable:""},{default:a(()=>[o("span",{class:r(["",(e==null?void 0:e.valid)===-1?"text-gray-500 line-through":"text-purple-900 font-medium"])},_(e==null?void 0:e.code),3)]),_:2},1024)])]),top:a(({item:e})=>[o("div",null,[n(v,null,{default:a(()=>[l("\u90AE\u7BB1")]),_:1}),n(u,{copyable:""},{default:a(()=>[o("span",{class:r(["",(e==null?void 0:e.valid)===-1?"text-gray-500 line-through":"text-red-500 font-medium"])},_(e==null?void 0:e.email),3)]),_:2},1024)]),o("div",null,[n(v,null,{default:a(()=>[l("\u94FE\u63A5")]),_:1}),n(u,{copyable:""},{default:a(()=>[o("span",{class:r(["",(e==null?void 0:e.valid)===-1?"text-gray-500 line-through":"text-red-500 font-medium"])},_(e==null?void 0:e.link),3)]),_:2},1024)])]),_:1},512)}}});export{D as _};