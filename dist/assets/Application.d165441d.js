import{j as L,dw as _,dt as x,I as y,cG as d,cv as f,q as B,r as e,s as n,Q as l,w as t,B as o,v as i,t as k,bc as F,aW as c,R as m,y as r,z as p,ax as g}from"./index.639f1d60.js";import{applicationList as A}from"./data.0640b6c4.js";const N=L({components:{List:_,ListItem:_.Item,Card:x,Icon:y,[d.name]:d,[f.name]:f},setup(){return{prefixCls:"account-center-application",list:A}}});function V(a,h,D,E,b,z){const u=e("Icon"),C=e("Card"),v=e("ListItem"),w=e("a-col"),$=e("a-row"),I=e("List");return n(),l(I,{class:o(a.prefixCls)},{default:t(()=>[i($,{gutter:16},{default:t(()=>[(n(!0),k(g,null,F(a.list,s=>(n(),l(w,{key:s.title,span:6},{default:t(()=>[i(v,null,{default:t(()=>[i(C,{hoverable:!0,class:o(`${a.prefixCls}__card`)},{default:t(()=>[c("div",{class:o(`${a.prefixCls}__card-title`)},[s.icon?(n(),l(u,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):m("",!0),r(" "+p(s.title),1)],2),c("div",{class:o(`${a.prefixCls}__card-num`)},[r(" \u6D3B\u8DC3\u7528\u6237\uFF1A"),c("span",null,p(s.active),1),r(" \u4E07 ")],2),c("div",{class:o(`${a.prefixCls}__card-num`)},[r(" \u65B0\u589E\u7528\u6237\uFF1A"),c("span",null,p(s.new),1)],2),s.download?(n(),l(u,{key:0,class:o(`${a.prefixCls}__card-download`),icon:s.download},null,8,["class","icon"])):m("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const q=B(N,[["render",V]]);export{q as default};