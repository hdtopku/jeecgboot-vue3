var w=(D,o,e)=>new Promise((c,l)=>{var r=a=>{try{d(e.next(a))}catch(p){l(p)}},t=a=>{try{d(e.throw(a))}catch(p){l(p)}},d=a=>a.done?c(a.value):Promise.resolve(a.value).then(r,t);d((e=e.apply(D,o)).next())});import{u as E,B as F}from"./index-e95eba3a.js";import{i as S,j as $,k as z}from"./depart.user.api-ce7f4603.js";import{d as A,k as i,V as n,a5 as _,a9 as k,a7 as s,f as v,a6 as h,F as x,a8 as P,E as T,ab as G,aa as b,u as g}from"./vue-bcbaddf9.js";const H={style:{width:"100%","margin-top":"15px"}},J=b("span",null,"点击保存",-1),W=A({__name:"DepartRoleUserAuthDrawer",emits:["register"],setup(D){const o=i(!1),e=i(""),c=i(""),l=i(""),r=i([]),t=i([]),[d,{closeDrawer:a}]=E(u=>{e.value=g(u.userId),c.value=g(u.departId),p()});function p(){return w(this,null,function*(){try{o.value=!0;const u={departId:c.value,userId:e.value},[m,y]=yield Promise.all([S(u),$(u)]);r.value=m,t.value=y.map(I=>I.droleId),l.value=t.value.join(",")}finally{o.value=!1}})}function B(){return w(this,null,function*(){try{o.value=!0,yield z({userId:e.value,newRoleId:t.value.join(","),oldRoleId:l.value}),L()}finally{o.value=!1}})}function C(){R()}function L(){R(),a()}function R(){e.value="",c.value="",l.value="",r.value=[],t.value=[]}return(u,m)=>{const y=n("a-checkbox"),I=n("a-col"),N=n("a-row"),U=n("a-checkbox-group"),V=n("a-button"),j=n("a-empty"),q=n("a-spin");return _(),k(g(F),{title:"部门角色分配",width:365,onClose:C,onRegister:g(d)},{default:s(()=>[v(q,{spinning:o.value},{default:s(()=>[r.value.length>0?(_(),h(x,{key:0},[v(U,{value:t.value,"onUpdate:value":m[0]||(m[0]=f=>t.value=f)},{default:s(()=>[v(N,null,{default:s(()=>[(_(!0),h(x,null,P(r.value,f=>(_(),k(I,{span:24},{default:s(()=>[v(y,{value:f.id},{default:s(()=>[T(G(f.roleName),1)]),_:2},1032,["value"])]),_:2},1024))),256))]),_:1})]),_:1},8,["value"]),b("div",H,[v(V,{type:"primary",loading:o.value,size:"small",preIcon:"ant-design:save-filled",onClick:B},{default:s(()=>[J]),_:1},8,["loading"])])],64)):(_(),k(j,{key:1,description:"无配置信息"}))]),_:1},8,["spinning"])]),_:1},8,["onRegister"])}}});export{W as _};