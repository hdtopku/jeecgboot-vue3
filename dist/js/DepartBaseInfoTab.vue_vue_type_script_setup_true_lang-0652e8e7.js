import{q as p}from"./depart.user.api-04f5b351.js";import{u as m}from"./depart.user.data-c3439e8e.js";import{D as u}from"./index-d595c6b0.js";import{u as f}from"./useDescription-9d55348d.js";import{d,c as l,k as D,o as _,w as h,a5 as x,a9 as B,u as s}from"./vue-bcbaddf9.js";const y=d({__name:"DepartBaseInfoTab",props:{data:{require:!0,type:Object}},setup(r){const t=r;l("prefixCls");const a=D([]),{descItems:o}=m(a),[n,{setDescProps:c}]=f({data:t.data,schema:o,column:1,labelStyle:{width:"180px"}});function i(e){c({data:e})}return _(()=>{h(()=>t.data,()=>i(t.data),{immediate:!0})}),p().then(e=>a.value=e),(e,I)=>(x(),B(s(u),{onRegister:s(n)},null,8,["onRegister"]))}});export{y as _};