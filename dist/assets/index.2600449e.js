import{D as i}from"./index.bada6e2e.js";import{a as p}from"./index.2ff6eac0.js";import{q as c,l as m,t as u,v as d,V as f,z as g,y as s}from"./index.b3d2a891.js";import{u as n}from"./useDescription.46ff4e41.js";import"./useContentHeight.0b543e32.js";import"./onMountedOrActivated.12413c39.js";import"./useWindowSizeFn.ab02708a.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";const r={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},o=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],h=m({components:{Description:i,PageWrapper:p},setup(){const[e]=n({title:"useDescription",data:r,schema:o}),[a]=n({title:"\u65E0\u8FB9\u6846",bordered:!1,data:r,schema:o});return{mockData:r,schema:o,register:e,register1:a}}});function x(e,a,D,B,E,F){const t=u("Description"),l=u("PageWrapper");return d(),f(l,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:g(()=>[s(t,{title:"\u57FA\u7840\u793A\u4F8B",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{class:"mt-4",title:"\u5782\u76F4\u793A\u4F8B",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),s(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}var y=c(h,[["render",x]]);export{y as default};
