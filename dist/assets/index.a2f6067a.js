import{q as c,l as u,dw as d,F as f,t as n,v as _,V as C,z as o,y as r,C as s}from"./index.a86a095a.js";import{useWatermark as k}from"./useWatermark.0f082e68.js";import{a as W}from"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./onMountedOrActivated.ab6edd17.js";import"./useWindowSizeFn.b7d480b1.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";const w=u({components:{CollapseContainer:d,PageWrapper:W},setup(){const t=f(null),{setWatermark:e,clear:l}=k();return{setWatermark:e,clear:l,areaRef:t}}}),$=s(" Create "),g=s(" Clear "),v=s(" Reset ");function b(t,e,l,h,x,y){const a=n("a-button"),p=n("CollapseContainer"),i=n("PageWrapper");return _(),C(i,{title:"\u6C34\u5370\u793A\u4F8B"},{default:o(()=>[r(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:o(()=>[r(a,{type:"primary",class:"mr-2",onClick:e[0]||(e[0]=m=>t.setWatermark("WaterMark Info"))},{default:o(()=>[$]),_:1}),r(a,{color:"error",class:"mr-2",onClick:t.clear},{default:o(()=>[g]),_:1},8,["onClick"]),r(a,{color:"warning",class:"mr-2",onClick:e[1]||(e[1]=m=>t.setWatermark("WaterMark Info New"))},{default:o(()=>[v]),_:1})]),_:1})]),_:1})}var q=c(w,[["render",b]]);export{q as default};