import{l as y,ds as p,T as $,I as x,q as k,t as o,v as s,V as i,z as l,x as _,bb as u,aw as m,E as n,y as V,aV as r,D as c,C as d,W as g}from"./index.a1b4e527.js";import{articleList as T,actions as B}from"./data.15204bbf.js";const M=y({components:{List:p,ListItem:p.Item,ListItemMeta:p.Item.Meta,Tag:$,Icon:x},setup(){return{prefixCls:"account-center-article",list:T,actions:B}}});function N(e,b,h,w,z,A){const f=o("Tag"),C=o("ListItemMeta"),I=o("Icon"),v=o("ListItem"),L=o("List");return s(),i(L,{"item-layout":"vertical",class:n(e.prefixCls)},{default:l(()=>[(s(!0),_(m,null,u(e.list,a=>(s(),i(v,{key:a.title},{default:l(()=>[V(C,null,{description:l(()=>[r("div",{class:n(`${e.prefixCls}__content`)},c(a.content),3)]),title:l(()=>[r("p",{class:n(`${e.prefixCls}__title`)},c(a.title),3),r("div",null,[(s(!0),_(m,null,u(a.description,t=>(s(),i(f,{key:t,class:"mb-2"},{default:l(()=>[d(c(t),1)]),_:2},1024))),128))])]),_:2},1024),r("div",null,[(s(!0),_(m,null,u(e.actions,t=>(s(),_("div",{key:t.text,class:n(`${e.prefixCls}__action`)},[t.icon?(s(),i(I,{key:0,class:n(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):g("",!0),d(" "+c(t.text),1)],2))),128)),r("span",{class:n(`${e.prefixCls}__time`)},c(a.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var q=k(M,[["render",N],["__scopeId","data-v-59360453"]]);export{q as default};