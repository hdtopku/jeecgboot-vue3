import{d as l,l as t,r as c,o as m,a7 as p,a8 as d,ad as u}from"./vue-ebecda47.js";import{C as f}from"./jeecg-online-vendor-cfb58502.js";import{useECharts as h}from"./useECharts-db530a54.js";import"./index-85cfc899.js";import{L as g}from"./echarts-vendor-ba343549.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./echarts-41b2b1fd.js";import"./codemirror-vendor-9b2dceac.js";const R=l({__name:"gauge",props:{data:{}},setup(s){const a=s,v=t([]),o=t(null),{setOptions:r,echarts:i}=h(o),w=t(!1),{createMessage:_}=f(),e=c({series:[{type:"gauge",progress:{show:!0,width:18},axisLine:{lineStyle:{width:18}},axisTick:{show:!0},splitLine:{length:15,lineStyle:{width:2,color:"#999"}},axisLabel:{distance:25,color:"#999",fontSize:15},anchor:{show:!0,showAbove:!0,size:25,itemStyle:{borderWidth:10}},title:{},detail:{valueAnimation:!0,fontSize:50,formatter:"{value}%",offsetCenter:[0,"80%"]},data:[{value:70,name:"本地磁盘"}]}]});function n(){e.series[0].data[0].name=a.data.name,e.series[0].data[0].value=a.data.restPPT,r(e)}return m(()=>{i.use(g),n()}),(x,y)=>(p(),d("div",null,[u("div",{ref_key:"chartRef",ref:o,style:{width:"100%",height:"400px"}},null,512)]))}});export{R as default};