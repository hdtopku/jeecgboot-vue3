import{l as u,o as l,q as p,t as m,v as f,x as y,C as _,D as c,aV as d,y as g,E as v,F as x,a7 as b,a9 as $,Y as w}from"./index.3bed7968.js";import{useECharts as D}from"./useECharts.76713e93.js";const C=u({name:"Trend",props:{term:{type:String,default:"",required:!0},percentage:{type:Number,default:null},type:{type:Boolean,default:null},target:{type:Number,default:0},value:{type:Number,default:0},fixed:{type:Number,default:2}},setup(e){const t=l(()=>(e.type===null?e.value>=e.target:e.type)?"up":"down"),n=l(()=>(e.percentage===null?Math.abs(e.value-e.target)*100/e.target:e.percentage).toFixed(e.fixed));return{trend:t,rate:n}}}),N={class:"chart-trend"};function S(e,t,n,r,a,s){const o=m("Icon");return f(),y("div",N,[_(c(e.term)+" ",1),d("span",null,c(e.rate)+"%",1),d("span",{class:v(["trend-icon",e.trend])},[g(o,{icon:"ant-design:caret-"+e.trend+"-outlined"},null,8,["icon"])],2)])}var V=p(C,[["render",S],["__scopeId","data-v-c4f90dd4"]]);const A=u({name:"line",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(e){const t=x(null),{setOptions:n,echarts:r}=D(t),a=b({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{type:"line",showSymbol:!1,smooth:!0,areaStyle:{},data:[]}]});$(()=>{e.chartData&&s()});function s(){e.option&&Object.assign(a,e.option);let o=e.chartData.map(i=>i.value),h=e.chartData.map(i=>i.name);a.series[0].data=o,a.xAxis.data=h,n(a)}return{chartRef:t}}});function T(e,t,n,r,a,s){return f(),y("div",{ref:"chartRef",style:w({height:e.height,width:e.width})},null,4)}var k=p(A,[["render",T]]);export{k as L,V as T};