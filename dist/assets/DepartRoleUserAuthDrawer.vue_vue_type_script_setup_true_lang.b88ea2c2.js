var w=(k,o,e)=>new Promise((i,l)=>{var u=a=>{try{d(e.next(a))}catch(p){l(p)}},t=a=>{try{d(e.throw(a))}catch(p){l(p)}},d=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,t);d((e=e.apply(k,o)).next())});import{u as V,B as q}from"./index.2f5d3d5b.js";import{i as z,j as S,k as $}from"./depart.user.api.6f8423b4.js";import{j as A,C as c,K as y,r as n,s as _,Q as I,w as s,v,t as h,ax as x,bc as K,y as P,z as Q,aW as B}from"./index.b3c2d15d.js";const T={style:{width:"100%","margin-top":"15px"}},W=B("span",null,"\u70B9\u51FB\u4FDD\u5B58",-1),O=A({__name:"DepartRoleUserAuthDrawer",emits:["register"],setup(k){const o=c(!1),e=c(""),i=c(""),l=c(""),u=c([]),t=c([]),[d,{closeDrawer:a}]=V(r=>{e.value=y(r.userId),i.value=y(r.departId),p()});function p(){return w(this,null,function*(){try{o.value=!0;const r={departId:i.value,userId:e.value},[m,g]=yield Promise.all([z(r),S(r)]);u.value=m,t.value=g.map(D=>D.droleId),l.value=t.value.join(",")}finally{o.value=!1}})}function b(){return w(this,null,function*(){try{o.value=!0,yield $({userId:e.value,newRoleId:t.value.join(","),oldRoleId:l.value}),E()}finally{o.value=!1}})}function C(){R()}function E(){R(),a()}function R(){e.value="",i.value="",l.value="",u.value=[],t.value=[]}return(r,m)=>{const g=n("a-checkbox"),D=n("a-col"),F=n("a-row"),L=n("a-checkbox-group"),N=n("a-button"),U=n("a-empty"),j=n("a-spin");return _(),I(y(q),{title:"\u90E8\u95E8\u89D2\u8272\u5206\u914D",width:365,onClose:C,onRegister:y(d)},{default:s(()=>[v(j,{spinning:o.value},{default:s(()=>[u.value.length>0?(_(),h(x,{key:0},[v(L,{value:t.value,"onUpdate:value":m[0]||(m[0]=f=>t.value=f)},{default:s(()=>[v(F,null,{default:s(()=>[(_(!0),h(x,null,K(u.value,f=>(_(),I(D,{span:24},{default:s(()=>[v(g,{value:f.id},{default:s(()=>[P(Q(f.roleName),1)]),_:2},1032,["value"])]),_:2},1024))),256))]),_:1})]),_:1},8,["value"]),B("div",T,[v(N,{type:"primary",loading:o.value,size:"small",preIcon:"ant-design:save-filled",onClick:b},{default:s(()=>[W]),_:1},8,["loading"])])],64)):(_(),I(U,{key:1,description:"\u65E0\u914D\u7F6E\u4FE1\u606F"}))]),_:1},8,["spinning"])]),_:1},8,["onRegister"])}}});export{O as _};