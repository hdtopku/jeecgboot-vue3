import{B as a}from"./index.6aad32b5.js";import{D as i}from"./index.d235854f.js";import{l as n,s as c,v as m,V as l,z as p,y as f,L as e,B as u}from"./index.a86a095a.js";import{getDescSchema as d}from"./data.c196376b.js";import{u as g}from"./useDescription.60eb2ea2.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";const x=n({__name:"DetailModal",props:{info:{type:Object,default:null}},setup(t){const{t:o}=c(),[s]=g({column:2,schema:d()});return(r,D)=>(m(),l(e(a),u({width:800,title:e(o)("sys.errorLog.tableActionDesc")},r.$attrs),{default:p(()=>[f(e(i),{data:t.info,onRegister:e(s)},null,8,["data","onRegister"])]),_:1},16,["title"]))}});export{x as default};