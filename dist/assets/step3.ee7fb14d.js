import{l as t,cI as s,a7 as a,aB as e,dX as n,aN as o,s as u,dY as i,o as r,L as c,aa as l,$ as m,q as f,t as p,v as d,V as b,z as y,y as h,C}from"./index.435ab247.js";import{u as I}from"./useCountdown.adc4ab77.js";const T=t({name:"step3",components:{Button:s,Form:a,FormItem:a.Item,Input:e,Result:n},props:{accountInfo:{type:Object,default:()=>({})},count:o.number.def(5)},emits:["finish"],setup(t,{emit:s}){const{t:a}=u(),{handleBackLogin:e}=i(),{currentCount:n,start:o}=I(t.count),f=r((()=>a("sys.login.subTitleText",[c(n)])));function p(){e(),s("finish")}return l((()=>{1===c(n)&&setTimeout((()=>{p()}),500)})),m((()=>{o()})),{getSubTitle:f,finish:p}}}),g=C(" 返回登录 ");var k=f(T,[["render",function(t,s,a,e,n,o){const u=p("a-button"),i=p("Result");return d(),b(i,{status:"success",title:"更改密码成功","sub-title":t.getSubTitle},{extra:y((()=>[h(u,{key:"console",type:"primary",onClick:t.finish},{default:y((()=>[g])),_:1},8,["onClick"])])),_:1},8,["sub-title"])}]]);export{k as default};