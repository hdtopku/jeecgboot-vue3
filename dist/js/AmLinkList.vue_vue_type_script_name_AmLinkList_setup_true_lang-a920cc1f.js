var x=Object.defineProperty,K=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,_=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&m(t,a,e[a]);if(f)for(var a of f(e))M.call(e,a)&&m(t,a,e[a]);return t},p=(t,e)=>K(t,R(e));import{_ as B}from"./Search.vue_vue_type_script_setup_true_lang-6c747541.js";import{_ as E}from"./AmLinkDataList.vue_vue_type_script_setup_true_lang-65d4c2be.js";import{_ as Q}from"./AmLinkModal.vue_vue_type_script_setup_true_lang-fcfd10e6.js";import"./index-465fff25.js";import{z as V}from"./index-7711d1b4.js";import{d as v,k as i,o as $,V as y,a5 as z,a9 as D,a7 as l,f as c,E as F,u as H}from"./vue-bcbaddf9.js";const P=v({name:"AmLinkList"}),J=v(p(_({},P),{setup(t){const[e,{openModal:a}]=V(),d=i(!1),b={tabs:[{tabKey:"-1",tabName:"回收站"},{tabKey:"1",tabName:"待使用"},{tabKey:"0",tabName:"使用中"},{tabKey:"100",tabName:"所有"}],activeKey:"0"};function g(){a(!0,{isUpdate:!1,showFooter:!0})}function h(s){a(!0,{record:s,isUpdate:!0,showFooter:!0})}const o=i(),L=()=>{o.value.changeAdvanced()},A=()=>{d.value=!0,o.value.copyCode().finally(()=>{d.value=!1})},u=i(),n=(s={},r=!1)=>{r&&(u.value=s),o.value.startQuery(u.value)};return $(()=>{n()}),(s,r)=>{const k=y("a-button"),C=y("a-card");return z(),D(C,{size:"small"},{default:l(()=>[c(B,{onChangeAdvanced:L,onQueryList:r[0]||(r[0]=N=>n(N,!0)),ref:"SearchRef",placeholder:"模糊搜索",tabPane:b},{suffixAdvanced:l(()=>[c(k,{type:"warning",onClick:A,loading:d.value},{default:l(()=>[F("复制1条")]),_:1},8,["loading"])]),_:1},512),c(E,{onHandleAdd:g,ref_key:"AmLinkDataListRef",ref:o,onHandleEdit:h,onQueryList:n},null,512),c(Q,{onRegister:H(e),onSuccess:n},null,8,["onRegister"])]),_:1})}}}));export{J as _};