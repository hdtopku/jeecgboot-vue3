import{D as o}from"./index.74c1ed26.js";import{q as a,l as u,t as i,v as c,V as l}from"./index.6c1aeca2.js";import{u as m}from"./useDescription.0390352b.js";const r={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},s=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],p=u({components:{Description:o},setup(){const[e]=m({title:"useDescription",data:r,schema:s});return{mockData:r,schema:s,register:e}}});function d(e,t,x,f,D,_){const n=i("Description");return c(),l(n,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"])}var b=a(p,[["render",d]]);export{b as default};