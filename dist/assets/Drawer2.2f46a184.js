import{B as c,u as i}from"./index.b4620f2a.js";import{j as p,q as u,r as t,s as w,Q as l,w as o,y as a,v as m,x as _}from"./index.639f1d60.js";const d=p({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=i();return{register:e,closeDrawer:r}}});function f(e,r,D,B,g,C){const s=t("a-button"),n=t("BasicDrawer");return w(),l(n,_(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o(()=>[a(" Drawer Info. "),m(s,{type:"primary",onClick:e.closeDrawer},{default:o(()=>[a(" \u5185\u90E8\u5173\u95EDdrawer ")]),_:1},8,["onClick"])]),_:1},16,["onRegister"])}const h=u(d,[["render",f]]);export{h as default};