import"./jeecg-online-vendor-885afdd4.js";import"./index-4b015b65.js";import{useECharts as o}from"./useECharts-0b04eaba.js";import{a5 as l}from"./antd-vue-vendor-a78909e6.js";import{d as s,k as u,w as d,a5 as m,a9 as c,a7 as f,aa as p,an as h,u as g}from"./vue-bcbaddf9.js";const B=s({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=u(null),{setOptions:r}=o(t);return d(()=>a.loading,()=>{a.loading||r({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"电子产品"},{value:310,name:"服装"},{value:274,name:"化妆品"},{value:400,name:"家居"}].sort(function(n,i){return n.value-i.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(n,i)=>(m(),c(g(l),{title:"成交占比",loading:e.loading},{default:f(()=>[p("div",{ref_key:"chartRef",ref:t,style:h({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{B as _};