import{B as a}from"./Bar.a1a3c433.js";import{B as t,G as e}from"./Gauge.87bc58a9.js";import{L as r,T as n}from"./Line.f785ec84.js";import{L as l}from"./LineMulti.8ba2f8a0.js";import{P as i}from"./Pie.86b55591.js";import{useECharts as h}from"./useECharts.7a6f7516.js";import{l as o,F as u,a8 as s,aa as c,q as p,v as m,x as d,Y as f,t as y,y as v,z as D,L as g}from"./index.435ab247.js";import{R as b}from"./RankList.8107852b.js";import"./install.ca160351.js";import"./echarts.6d32f04e.js";const x=(()=>{let a=+new Date;const t=[],e=[],r=[];for(let n=0;n<20;n++){let e={name:"",value:0};const r=new Date(a+=864e5);e.name=[r.getFullYear(),r.getMonth()+1,r.getDate()].join("-"),e.value=200*Math.random(),t.push(e)}for(let n=0;n<2;n++)for(let t=0;t<20;t++){let r={name:"",value:0,type:2010+n+""};const l=new Date(a+864e5*t);r.name=[l.getFullYear(),l.getMonth()+1,l.getDate()].join("-"),r.value=200*Math.random(),e.push(r)}for(let n=0;n<2;n++)for(let t=0;t<15;t++){let e={name:"",value:0,type:2010+n+"",seriesType:n>=1?"line":"bar"};const l=new Date(a+864e5*t);e.name=[l.getFullYear(),l.getMonth()+1,l.getDate()].join("-"),e.value=200*Math.random(),r.push(e)}return{barDataSource:t,barMultiData:e,pieData:[{value:335,name:"客服电话"},{value:310,name:"奥迪官网"},{value:234,name:"媒体曝光"},{value:135,name:"质检总局"},{value:105,name:"其他"}],barLineData:r,radarData:[{value:75,name:"政治",type:"文综",max:100},{value:65,name:"历史",type:"文综",max:100},{value:55,name:"地理",type:"文综",max:100},{value:74,name:"化学",type:"文综",max:100},{value:38,name:"物理",type:"文综",max:100},{value:88,name:"生物",type:"文综",max:100}]}})();var w=p(o({name:"Radar",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(a){const t=u(null),{setOptions:e,echarts:r}=h(t),n=s({title:{text:"基础雷达图"},legend:{data:["文综","理综"]},radar:{indicator:[{name:"历史",max:100},{name:"地理",max:110},{name:"生物",max:120},{name:"化学",max:130},{name:"物理",max:140},{name:"政治",max:150}]},series:[{type:"radar",data:[{value:[82,70,60,55,90,66],name:"文综"}]}]});return c((()=>{a.chartData&&function(){a.option&&Object.assign(n,a.option);let t=Array.from(new Set(a.chartData.map((a=>a.type)))),r=Array.from(new Set(a.chartData.map((a=>{let{name:t,max:e}=a;return{name:t,max:e}})))),l=[];t.forEach((t=>{let e={name:t},r=a.chartData.filter((a=>t===a.type));e.value=r.map((a=>a.value)),l.push(e)})),n.radar.indicator=r,n.series[0].data=l,e(n)}()})),{chartRef:t}}}),[["render",function(a,t,e,r,n,l){return m(),d("div",{ref:"chartRef",style:f({height:a.height,width:a.width})},null,4)}]]);var j=p(o({name:"barAndLine",props:{chartData:{type:Array,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(a){const t=u(null),{setOptions:e,echarts:r}=h(t),n=s({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{name:"bar",type:"bar",data:[]}]});return c((()=>{a.chartData&&function(){a.option&&Object.assign(n,a.option);let t=Array.from(new Set(a.chartData.map((a=>a.type)))),r=Array.from(new Set(a.chartData.map((a=>a.name)))),l=[];t.forEach((t=>{let e={name:t},r=a.chartData.filter((a=>t===a.type));e.data=r.map((a=>a.value)),e.type=r[0].seriesType,l.push(e)})),n.series=l,n.xAxis.data=r,e(n)}()})),{chartRef:t}}}),[["render",function(a,t,e,r,n,l){return m(),d("div",{ref:"chartRef",style:f({height:a.height,width:a.width})},null,4)}]]);const _={class:"p-4"},k=o({__name:"index",setup(h){const o=u("1"),{barDataSource:s,barMultiData:c,pieData:p,barLineData:f,radarData:k}=x,M={title:{text:"多列柱状图",left:"center"}},A=function(a,t,e,r,n="",l="月"){let i=[];for(let h=0;h<12;h+=1)i.push({[a]:`${n}${h+1}${l}`,[t]:Math.floor(Math.random()*e)+r});return i}("name","total",2e3,100,"北京朝阳 "," 号店");function S(a){}return(h,u)=>{const x=y("a-col"),L=y("a-row"),R=y("a-tab-pane"),O=y("a-tabs"),T=y("a-card");return m(),d("div",_,[v(T,{bordered:!1,style:{height:"100%"}},{default:D((()=>[v(O,{activeKey:o.value,"onUpdate:activeKey":u[0]||(u[0]=a=>o.value=a),animated:"",onChange:S},{default:D((()=>[v(R,{key:"1",tab:"柱状图"},{default:D((()=>[v(L,null,{default:D((()=>[v(x,{span:24},{default:D((()=>[v(a,{chartData:g(s),height:"50vh",option:{title:{text:"销售额排行",left:"center"}}},null,8,["chartData"])])),_:1})])),_:1})])),_:1}),v(R,{key:"2",tab:"多列柱状图","force-render":""},{default:D((()=>[v(t,{chartData:g(c),option:M,height:"50vh"},null,8,["chartData"])])),_:1}),v(R,{key:"3",tab:"迷你柱状图",style:{display:"flex","justify-content":"center"}},{default:D((()=>[v(a,{chartData:g(s),width:"30%",height:"50vh"},null,8,["chartData"])])),_:1}),v(R,{key:"4",tab:"面积图"},{default:D((()=>[v(r,{chartData:g(s),height:"50vh",option:{title:{text:"销售额排行",left:"center"}}},null,8,["chartData"])])),_:1}),v(R,{key:"5",tab:"迷你面积图",style:{display:"flex","justify-content":"center"}},{default:D((()=>[v(r,{chartData:g(s),width:"30%",height:"50vh"},null,8,["chartData"])])),_:1}),v(R,{key:"6",tab:"多行折线图"},{default:D((()=>[v(l,{chartData:g(c),height:"50vh",option:M,type:"line"},null,8,["chartData"])])),_:1}),v(R,{key:"7",tab:"饼图"},{default:D((()=>[v(i,{chartData:g(p),height:"40vh",option:{title:{text:"基础饼状图",left:"center"}}},null,8,["chartData"])])),_:1}),v(R,{key:"8",tab:"雷达图"},{default:D((()=>[v(w,{chartData:g(k),height:"50vh"},null,8,["chartData"])])),_:1}),v(R,{key:"9",tab:"仪表盘"},{default:D((()=>[v(e,{chartData:{name:"出勤率",value:70},height:"50vh"})])),_:1}),v(R,{key:"10",tab:"折柱图"},{default:D((()=>[v(j,{chartData:g(f),height:"50vh"},null,8,["chartData"])])),_:1}),v(R,{key:"11",tab:"排名列表"},{default:D((()=>[v(b,{title:"门店销售排行榜",list:g(A),style:{width:"600px",margin:"0 auto"}},null,8,["list"])])),_:1}),v(R,{key:"13",tab:"趋势"},{default:D((()=>[v(n,{title:"Trend",term:"Trend：",percentage:30})])),_:1})])),_:1},8,["activeKey"])])),_:1})])}}});export{k as default};