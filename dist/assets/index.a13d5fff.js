import{a as l}from"./index.2eb12fc8.js";import{j as c,dB as u,q as g,r as n,s as _,Q as d,w as t,v as o,y as p}from"./index.25572ab7.js";import{$ as r}from"./print.65ed6d12.js";import"./useContentHeight.86f0abdd.js";import"./onMountedOrActivated.2e2f37d7.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";const f=c({name:"AppLogo",components:{PageWrapper:l,CollapseContainer:u},setup(){function e(){r({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function a(){r({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;"})}return{jsonPrint:e,imagePrint:a}}});function C(e,a,h,b,w,y){const i=n("a-button"),s=n("CollapseContainer"),m=n("PageWrapper");return _(),d(m,{title:"\u6253\u5370\u793A\u4F8B"},{default:t(()=>[o(s,{title:"json\u6253\u5370\u8868\u683C"},{default:t(()=>[o(i,{type:"primary",onClick:e.jsonPrint},{default:t(()=>[p("\u6253\u5370")]),_:1},8,["onClick"])]),_:1}),o(i,{type:"primary",class:"mt-5",onClick:e.imagePrint},{default:t(()=>[p("Image Print")]),_:1},8,["onClick"])]),_:1})}const W=g(f,[["render",C]]);export{W as default};