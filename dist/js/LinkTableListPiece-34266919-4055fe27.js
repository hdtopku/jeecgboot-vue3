import{p as o}from"./index-0d179770.js";import{Q as r}from"./jeecg-online-vendor-658239c9.js";import{a5 as l,a6 as p,aa as s,ab as c}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";const d={name:"LinkTableListPiece",props:{text:o.string.def(""),id:o.string.def("")},emits:["tab"],setup(i,{emit:t}){function a(e){e==null||e.stopPropagation(),e==null||e.preventDefault(),t("tab",i.id)}return{handleClick:a}}};function m(i,t,a,e,f,u){return l(),p("div",{class:"link-table-piece",onClick:t[0]||(t[0]=(...n)=>e.handleClick&&e.handleClick(...n))},[s("span",null,c(a.text),1)])}const _=r(d,[["render",m],["__scopeId","data-v-ade036b6"]]);export{_ as default};