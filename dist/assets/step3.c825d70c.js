import{j as m,cK as l,a6 as r,aB as d,e3 as _,aN as b,o as h,e4 as C,m as y,H as i,a9 as B,X as T,q as k,r as p,s as F,Q as g,w as f,v as x,y as I}from"./index.0be4b5b8.js";import{u as w}from"./useCountdown.28a04794.js";const $=m({name:"step3",components:{Button:l,Form:r,FormItem:r.Item,Input:d,Result:_},props:{accountInfo:{type:Object,default:()=>({})},count:b.number.def(5)},emits:["finish"],setup(t,{emit:n}){const{t:u}=h(),{handleBackLogin:a}=C(),{currentCount:s,start:c}=w(t.count),o=y(()=>u("sys.login.subTitleText",[i(s)]));B(()=>{i(s)===1&&setTimeout(()=>{e()},500)});function e(){a(),n("finish")}return T(()=>{c()}),{getSubTitle:o,finish:e}}});function N(t,n,u,a,s,c){const o=p("a-button"),e=p("Result");return F(),g(e,{status:"success",title:"\u66F4\u6539\u5BC6\u7801\u6210\u529F","sub-title":t.getSubTitle},{extra:f(()=>[x(o,{key:"console",type:"primary",onClick:t.finish},{default:f(()=>[I(" \u8FD4\u56DE\u767B\u5F55 ")]),_:1},8,["onClick"])]),_:1},8,["sub-title"])}const j=k($,[["render",N]]);export{j as default};