import{q as s,l as a,I as t,bF as e,dv as l,c7 as i,bY as n,t as o,v as c,V as r,z as p,E as d,aW as u,y as f,x as m,bc as _,ax as v,W as x,D as g,C,dp as b,dq as j}from"./index.435ab247.js";import{cardList as I}from"./data.4effb0ce.js";import{a as w}from"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./onMountedOrActivated.e9ddbd41.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";const P=a({components:{Icon:t,Progress:e,PageWrapper:w,[l.name]:l,[l.Item.name]:l.Item,AListItemMeta:l.Item.Meta,[i.name]:i,[n.name]:n},setup:()=>({prefixCls:"list-basic",list:I,pagination:{show:!0,pageSize:3}})}),W=s=>(b("data-v-091ccf36"),s=s(),j(),s),$=W((()=>u("div",null,"我的待办",-1))),h=W((()=>u("p",null,"8个任务",-1))),y=W((()=>u("div",null,"本周任务平均处理时间",-1))),k=W((()=>u("p",null,"32分钟",-1))),z=W((()=>u("div",null,"本周完成任务数",-1))),M=W((()=>u("p",null,"24个任务",-1))),q={key:0,class:"extra"},A={class:"description"},F={class:"info"},H=W((()=>u("span",null,"Owner",-1))),O=W((()=>u("span",null,"开始时间",-1))),S={class:"progress"};var V=s(P,[["render",function(s,a,t,e,l,i){const n=o("a-col"),b=o("a-row"),j=o("Icon"),I=o("Progress"),w=o("a-list-item-meta"),P=o("a-list-item"),W=o("a-list"),V=o("PageWrapper");return c(),r(V,{class:d(s.prefixCls),title:"标准列表"},{default:p((()=>[u("div",{class:d(`${s.prefixCls}__top`)},[f(b,{gutter:12},{default:p((()=>[f(n,{span:8,class:d(`${s.prefixCls}__top-col`)},{default:p((()=>[$,h])),_:1},8,["class"]),f(n,{span:8,class:d(`${s.prefixCls}__top-col`)},{default:p((()=>[y,k])),_:1},8,["class"]),f(n,{span:8,class:d(`${s.prefixCls}__top-col`)},{default:p((()=>[z,M])),_:1},8,["class"])])),_:1})],2),u("div",{class:d(`${s.prefixCls}__content`)},[f(W,{pagination:s.pagination},{default:p((()=>[(c(!0),m(v,null,_(s.list,(s=>(c(),r(P,{key:s.id,class:"list"},{default:p((()=>[f(w,null,{avatar:p((()=>[s.icon?(c(),r(j,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):x("",!0)])),title:p((()=>[u("span",null,g(s.title),1),s.extra?(c(),m("div",q,g(s.extra),1)):x("",!0)])),description:p((()=>[u("div",A,g(s.description),1),u("div",F,[u("div",null,[H,C(g(s.author),1)]),u("div",null,[O,C(g(s.datetime),1)])]),u("div",S,[f(I,{percent:s.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}],["__scopeId","data-v-091ccf36"]]);export{V as default};