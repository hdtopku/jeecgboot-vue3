import{d as N,l as c,e as M,w as S,V as h,a7 as f,a8 as x,ac as g,F as V,ad as _,f as v,aa as I,E as C}from"./vue-ebecda47.js";import{C as z,bB as T}from"./jeecg-online-vendor-cfb58502.js";import{d as q,A,C as F}from"./auth.api-d3a6c4b3-03058a58.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";var y=(e,d,t)=>new Promise((u,l)=>{var i=a=>{try{o(t.next(a))}catch(r){l(r)}},n=a=>{try{o(t.throw(a))}catch(r){l(r)}},o=a=>a.done?u(a.value):Promise.resolve(a.value).then(i,n);o((t=t.apply(e,d)).next())});const J=N({name:"AuthDataTree",props:{cgformId:{type:String,required:!0}},setup(e){const{createMessage:d}=z(),t=c(""),u=c(3),l=c(!0),i=c([]),n=c([]),o=c([]),a=c(""),r=M(()=>!t.value);S(()=>e.cgformId,m,{immediate:!0});function m(){return y(this,null,function*(){if(!e.cgformId)return;let s=yield q(e.cgformId,u.value);o.value=s.map(p=>({key:p.id,title:p.ruleName}))})}function k(s,p){return y(this,null,function*(){t.value=s,a.value=p,n.value=[],yield m();let w=yield A({roleId:s,cgformId:e.cgformId,type:u.value,authMode:p});n.value=w.map(B=>B.authId)})}function K(){t.value="",m()}function E(){m(),k(t.value,a.value)}function b(){return y(this,null,function*(){yield F(t.value,e.cgformId,{authId:JSON.stringify(n.value),authMode:a.value}),d.success("保存成功")})}function D(s){i.value=s,l.value=!1}function P(){t.value="",n.value=[]}return{loadChecked:k,clear:P,expandedKeys:i,autoExpandParent:l,checkedKeys:n,treeData:o,disabled:r,onSave:b,onExpand:D,onRefresh:E,clearChecked:K}}}),R={class:"onl-auth-tree-btns"};function $(e,d,t,u,l,i){const n=h("a-empty"),o=h("a-button"),a=h("a-tree");return f(),x("div",null,[e.disabled?(f(),g(n,{key:0,description:"请先选中左侧角色/部门/用户"})):e.treeData.length===0?(f(),g(n,{key:1,description:"无权限信息"})):(f(),x(V,{key:2},[_("div",R,[v(o,{onClick:e.onRefresh,size:"small",type:"primary",preIcon:"ant-design:redo",ghost:""},{default:I(()=>[C("刷新")]),_:1},8,["onClick"]),v(o,{onClick:e.onSave,size:"small",type:"primary",preIcon:"ant-design:save",ghost:""},{default:I(()=>[C("保存")]),_:1},8,["onClick"])]),v(a,{checkable:"",checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":d[0]||(d[0]=r=>e.checkedKeys=r),expandedKeys:e.expandedKeys,autoExpandParent:e.autoExpandParent,treeData:e.treeData,onExpand:e.onExpand},null,8,["checkedKeys","expandedKeys","autoExpandParent","treeData","onExpand"])],64))])}const Q=T(J,[["render",$],["__scopeId","data-v-c6be2157"]]);export{Q as default};