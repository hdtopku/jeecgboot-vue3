var b=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var r=(t,a,e)=>a in t?b(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,d=(t,a)=>{for(var e in a||(a={}))D.call(a,e)&&r(t,e,a[e]);if(l)for(var e of l(a))C.call(a,e)&&r(t,e,a[e]);return t},_=(t,a)=>v(t,x(a));import{t as k,D as w}from"./jeecg-online-vendor-885afdd4.js";import{a9 as S,ae as N}from"./antd-vue-vendor-a78909e6.js";import{d as f,k as W,r as B,o as I,a5 as c,a6 as i,aa as s,f as p,an as m,u,ab as o,W as g,ap as q,aq as V}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";const n=t=>(q("data-v-7e0237f6"),t=t(),V(),t),z={class:"account-padding"},F=n(()=>s("div",{class:"my-account"},"第三方APP",-1)),P={class:"account-row-item"},U=n(()=>s("div",{class:"account-label gray-75"},"企业微信绑定",-1)),j=n(()=>s("span",{class:"gray-75",style:{"margin-left":"12px"}},"企业微信",-1)),A={key:0,class:"gray-75",style:{"margin-left":"8px"}},E={class:"account-row-item"},M=n(()=>s("div",{class:"account-label gray-75"},"钉钉绑定",-1)),G=n(()=>s("span",{class:"gray-75",style:{"margin-left":"12px"}},"钉钉",-1)),H={key:0,class:"gray-75",style:{"margin-left":"8px"}},J=f({name:"we-chat-ding-setting"}),K=f(_(d({},J),{setup(t){const a=S({scriptUrl:"//at.alicdn.com/t/font_2316098_umqusozousr.js"});W([]),k();const e=B({bindWechat:!1,weChatName:"昵称",bindDing:!1,dingName:"昵称"});function y(){}function h(){}return I(()=>{}),(L,O)=>(c(),i("div",z,[F,s("div",P,[U,s("span",null,[p(u(a),{style:m(e.bindWechat?{color:"#1ec563"}:{color:"#9e9e9e"}),class:"item-icon",type:"icon-qiyeweixin3"},null,8,["style"]),j,e.bindWechat?(c(),i("span",A,o("已绑定："+e.weChatName),1)):g("",!0),s("span",{class:"blue-e5 pointer",style:{"margin-left":"24px"},onClick:y},o(e.bindWechat?"解绑":"绑定"),1)])]),s("div",E,[M,s("span",null,[p(u(N),{style:m(e.bindDing?{color:"#1ec563"}:{color:"#9e9e9e"}),class:"item-icon"},null,8,["style"]),G,e.bindDing?(c(),i("span",H,o("已绑定："+e.dingName),1)):g("",!0),s("span",{class:"blue-e5 pointer",style:{"margin-left":"24px"},onClick:h},o(e.bindDing?"解绑":"绑定"),1)])])]))}}));const ee=w(K,[["__scopeId","data-v-7e0237f6"]]);export{ee as default};