import{useECharts as h}from"./useECharts.97c2d744.js";import{l as p,F as u,a7 as d,a9 as m,H as y,q as b,v as g,x as k,Y as w}from"./index.b3d2a891.js";const _=p({name:"Pie",props:{chartData:{type:Array,default:()=>[]},size:{type:Object,default:()=>{}},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},emits:["click"],setup(t,{emit:n}){const a=u(null),{setOptions:o,getInstance:i,resize:r}=h(a),c=d({tooltip:{formatter:"{b} ({c})"},series:[{type:"pie",radius:"72%",center:["50%","55%"],data:[],labelLine:{show:!0},label:{show:!0,formatter:`{b} 
 ({d}%)`,color:"#B1B9D3"}}]});m(()=>{t.chartData&&f()}),y(()=>t.size,()=>{r()},{immediate:!0});function f(){var e,l;t.option&&Object.assign(c,t.option),c.series[0].data=t.chartData,o(c),r(),(e=i())==null||e.off("click",s),(l=i())==null||l.on("click",s)}function s(e){n("click",e)}return{chartRef:a}}});function v(t,n,a,o,i,r){return g(),k("div",{ref:"chartRef",style:w({height:t.height,width:t.width})},null,4)}var C=b(_,[["render",v]]);export{C as P};
