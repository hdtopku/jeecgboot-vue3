import{l as P,F as s,o as T,H as w,eY as A,u as N,t as h,v as f,x as D,V as g,aw as V,aV as M,y as v,z as E,C as I}from"./index.b3d2a891.js";import{o as S,l as z,p as R}from"./auth.api.144b96ae.js";var m=(e,r,t)=>new Promise((l,c)=>{var i=a=>{try{u(t.next(a))}catch(o){c(o)}},n=a=>{try{u(t.throw(a))}catch(o){c(o)}},u=a=>a.done?l(a.value):Promise.resolve(a.value).then(i,n);u((t=t.apply(e,r)).next())});const $=P({name:"AuthDataTree",props:{cgformId:{type:String,required:!0}},setup(e){const{createMessage:r}=N(),t=s(""),l=s(3),c=s(!0),i=s([]),n=s([]),u=s([]),a=s(""),o=T(()=>!t.value);w(()=>e.cgformId,y,{immediate:!0});function y(){return m(this,null,function*(){if(!e.cgformId)return;let d=yield S(e.cgformId,l.value);u.value=d.map(p=>({key:p.id,title:p.ruleName}))})}function k(d,p){return m(this,null,function*(){t.value=d,a.value=p,n.value=[];let B=yield z({roleId:d,cgformId:e.cgformId,type:l.value,authMode:p});n.value=B.map(b=>b.authId)})}function _(){t.value=""}function C(){y(),k(t.value,a.value)}function K(){return m(this,null,function*(){yield R(t.value,e.cgformId,{authId:JSON.stringify(n.value),authMode:a.value}),r.success("\u4FDD\u5B58\u6210\u529F")})}function F(d){i.value=d,c.value=!1}function x(){t.value="",n.value=[]}return{loadChecked:k,clear:x,expandedKeys:i,autoExpandParent:c,checkedKeys:n,treeData:u,disabled:o,onSave:K,onExpand:F,onRefresh:C,clearChecked:_}}}),q={class:"onl-auth-tree-btns"};function H(e,r,t,l,c,i){const n=h("a-empty"),u=h("a-button"),a=h("a-tree");return f(),D("div",null,[e.disabled?(f(),g(n,{key:0,description:"\u8BF7\u5148\u9009\u4E2D\u5DE6\u4FA7\u89D2\u8272/\u90E8\u95E8/\u7528\u6237"})):e.treeData.length===0?(f(),g(n,{key:1,description:"\u65E0\u6743\u9650\u4FE1\u606F"})):(f(),D(V,{key:2},[M("div",q,[v(u,{onClick:e.onRefresh,size:"small",type:"primary",preIcon:"ant-design:redo",ghost:""},{default:E(()=>[I("\u5237\u65B0")]),_:1},8,["onClick"]),v(u,{onClick:e.onSave,size:"small",type:"primary",preIcon:"ant-design:save",ghost:""},{default:E(()=>[I("\u4FDD\u5B58")]),_:1},8,["onClick"])]),v(a,{checkable:"",checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":r[0]||(r[0]=o=>e.checkedKeys=o),expandedKeys:e.expandedKeys,autoExpandParent:e.autoExpandParent,treeData:e.treeData,onExpand:e.onExpand},null,8,["checkedKeys","expandedKeys","autoExpandParent","treeData","onExpand"])],64))])}var O=A($,[["render",H],["__scopeId","data-v-4ce74ac6"]]);export{O as default};
