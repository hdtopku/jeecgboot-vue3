import{c as B,_ as w}from"./jeecg-online-vendor-bf2efbcb.js";import{ap as x,I as D}from"./index-fde9c72f.js";import S from"./Article-671da3d8.js";import F from"./Application-1e3cf75b.js";import P from"./Project-c616781b.js";import{h as U}from"./header-102ede9c.js";import{tags as V,teams as L,details as N,achieveList as A}from"./data-56c6c5a2.js";import{d as R,e as j,U as l,aV as t,as as r,f as s,bi as o,ad as n,at as c,F as i,a_ as u,E as v,ag as m,ar as _,a$ as z,aX as J,aW as K}from"./vue-c7e3516e.js";import{cK as W,cR as $,cT as b,cU as g}from"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";const X=R({components:{CollapseContainer:x,Icon:D,Tag:W,Tabs:$,TabPane:$.TabPane,Article:S,Application:F,Project:P,[b.name]:b,[g.name]:g},setup(){const a=B();return{prefixCls:"account-center",avatar:j(()=>a.getUserInfo.avatar||U),tags:V,teams:L,details:N,achieveList:A}}});const h=a=>(J("data-v-f5596f52"),a=a(),K(),a),q=["src"],G=h(()=>c("span",null,"Jeecg",-1)),H=h(()=>c("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function M(a,T,O,Q,Y,Z){const p=l("a-col"),f=l("Icon"),d=l("a-row"),I=l("Tag"),C=l("CollapseContainer"),y=l("TabPane"),E=l("Tabs");return t(),r("div",{class:n(a.prefixCls)},[s(d,{class:n(`${a.prefixCls}-top`)},{default:o(()=>[s(p,{span:9,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(d,null,{default:o(()=>[s(p,{span:8},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__avatar`)},[c("img",{width:"70",src:a.avatar},null,8,q),G,H],2)]),_:1}),s(p,{span:16},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(a.details,e=>(t(),r("p",{key:e.title},[s(f,{icon:e.icon},null,8,["icon"]),v(" "+m(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),s(p,{span:7,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{title:"\u6807\u7B7E",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.tags,e=>(t(),_(I,{key:e,class:"mb-2"},{default:o(()=>[v(m(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),s(p,{span:8,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{class:n(`${a.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.teams,(e,k)=>(t(),r("div",{key:k,class:n(`${a.prefixCls}-top__team-item`)},[s(f,{icon:e.icon,color:e.color},null,8,["icon","color"]),c("span",null,m(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),c("div",{class:n(`${a.prefixCls}-bottom`)},[s(E,null,{default:o(()=>[(t(!0),r(i,null,u(a.achieveList,e=>(t(),_(y,{key:e.key,tab:e.name},{default:o(()=>[(t(),_(z(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}const da=w(X,[["render",M],["__scopeId","data-v-f5596f52"]]);export{da as default};