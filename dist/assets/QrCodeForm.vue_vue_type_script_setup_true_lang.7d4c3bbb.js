import{_ as y}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang.cd3e18ca.js";import{j as I,C as f,cM as Q,e4 as w,m as g,E as L,s as T,t as B,v as s,aW as q,H as t,w as _,y as v,z as C,b7 as E,cK as N,ax as V,R as b,o as j,ea as D,eh as z,ei as F}from"./index.0be4b5b8.js";import{Q as R}from"./index.c7cdb5b8.js";const U={class:"enter-x min-w-64 min-h-64"},W=I({__name:"QrCodeForm",setup(H){const r=f("");let a;const{t:n}=j(),h=Q(),{handleBackLogin:k,getLoginState:p}=w(),o=f("0"),i=g(()=>t(p)===D.QR_CODE),x=g(()=>t(o)==="0"?n("sys.login.scanSign"):n("sys.login.scanSuccess"));function l(){o.value="0",z().then(e=>{r.value=e.qrcodeId,e.qrcodeId&&S(e.qrcodeId)})}function u(e){F({qrcodeId:e}).then(c=>{let m=c.token;m=="-2"&&(l(),clearInterval(a)),c.success&&(o.value="2",clearInterval(a),setTimeout(()=>{h.qrCodeLogin(m)},500))})}function S(e){u(e),d(),a=setInterval(()=>{u(e)},1500)}function d(){a&&clearInterval(a)}return L(i,e=>{e?l():d()}),(e,c)=>i.value?(T(),B(V,{key:0},[s(y,{class:"enter-x"}),q("div",U,[s(t(R),{value:r.value,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),s(t(E),{class:"enter-x"},{default:_(()=>[v(C(x.value),1)]),_:1}),s(t(N),{size:"large",block:"",class:"mt-4 enter-x",onClick:t(k)},{default:_(()=>[v(C(t(n)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])])],64)):b("",!0)}});export{W as _};