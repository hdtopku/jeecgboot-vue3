import{useContextMenu as d}from"./useContextMenu.41f709dc.js";import{q as m,l as C,dw as _,t as l,v as f,V as b,z as t,y as a,C as p,u as x}from"./index.3bed7968.js";import{a as h}from"./index.e57fdc92.js";import"./useContentHeight.2c22b941.js";import"./onMountedOrActivated.b5477b8f.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=d(),{createMessage:n}=x();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}}),N=p(" Right Click on me "),g=p(" Right Click on me ");function k(e,n,s,i,o,M){const r=l("a-button"),c=l("CollapseContainer"),u=l("PageWrapper");return f(),b(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(c,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[N]),_:1},8,["onContextmenu"])]),_:1}),a(c,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[g]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var R=m(w,[["render",k]]);export{R as default};