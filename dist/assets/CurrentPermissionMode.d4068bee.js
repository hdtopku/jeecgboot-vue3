import{l as c,b6 as d,G as m,o as p,aX as _,dF as l,q as F,t as i,v as f,x as C,y as o,z as r,C as s,D as M}from"./index.3bed7968.js";const A=c({name:"CurrentPermissionMode",components:{Divider:d},setup(){const e=m(),t=p(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:n}=_();return{permissionMode:t,PermissionModeEnum:l,togglePermissionMode:n}}}),D={class:"mt-2"},P=s(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A "),g=s(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ");function v(e,t,n,h,k,y){const u=i("a-button"),a=i("Divider");return f(),C("div",D,[P,o(u,{type:"link"},{default:r(()=>[s(M(e.permissionMode===e.PermissionModeEnum.BACK?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),o(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:r(()=>[g]),_:1},8,["onClick"]),o(a)])}var $=F(A,[["render",v]]);export{$ as default};