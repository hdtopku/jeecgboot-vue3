import{l,cF as m,bZ as r,aA as d,dU as _,aM as b,s as h,dV as C,o as y,L as i,a9 as F,$ as T,q as k,t as p,v as B,V as g,z as f,y as x,C as I}from"./index.b3d2a891.js";import{u as $}from"./useCountdown.a4eb9495.js";const V=l({name:"step3",components:{Button:m,Form:r,FormItem:r.Item,Input:d,Result:_},props:{accountInfo:{type:Object,default:()=>({})},count:b.number.def(5)},emits:["finish"],setup(t,{emit:n}){const{t:u}=h(),{handleBackLogin:a}=C(),{currentCount:s,start:c}=$(t.count),o=y(()=>u("sys.login.subTitleText",[i(s)]));F(()=>{i(s)===1&&setTimeout(()=>{e()},500)});function e(){a(),n("finish")}return T(()=>{c()}),{getSubTitle:o,finish:e}}}),v=I(" \u8FD4\u56DE\u767B\u5F55 ");function w(t,n,u,a,s,c){const o=p("a-button"),e=p("Result");return B(),g(e,{status:"success",title:"\u66F4\u6539\u5BC6\u7801\u6210\u529F","sub-title":t.getSubTitle},{extra:f(()=>[x(o,{key:"console",type:"primary",onClick:t.finish},{default:f(()=>[v]),_:1},8,["onClick"])]),_:1},8,["sub-title"])}var S=k(V,[["render",w]]);export{S as default};
