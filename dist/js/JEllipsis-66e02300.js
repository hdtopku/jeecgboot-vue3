import{d as p,e as r,V as c,a7 as u,ac as i,aa as o,ad as m,ae as n,E as v}from"./vue-50733b77.js";import{p as a}from"./index-b34ff7bc.js";const g=p({__name:"JEllipsis",props:{value:a.oneOfType([a.string,a.number,a.array]),length:a.number.def(25)},setup(t){const e=t,s=r(()=>e.value&&e.value.length>e.length?e.value.slice(0,e.length)+"...":e.value);return(_,d)=>{const l=c("a-tooltip");return u(),i(l,{placement:"topLeft"},{title:o(()=>[m("span",null,n(t.value),1)]),default:o(()=>[v(" "+n(s.value),1)]),_:1})}}});export{g as _};