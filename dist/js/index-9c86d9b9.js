var B=Object.defineProperty,V=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var R=(o,t,e)=>t in o?B(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,v=(o,t)=>{for(var e in t||(t={}))O.call(t,e)&&R(o,e,t[e]);if(I)for(var e of I(t))D.call(t,e)&&R(o,e,t[e]);return o},b=(o,t)=>V(o,M(t));import E from"./BasicTable-f6cf85af.js";import"./componentMap-da21b34e.js";import{u as G}from"./useTable-20c32c9e.js";import{b as _}from"./jeecg-online-vendor-59c8fbe3.js";import{d as N}from"./antd-vue-vendor-a78909e6.js";import{useECharts as k}from"./useECharts-ee43c283.js";import{d as T,k as n,r as A,o as j,b as H,V as y,a5 as P,a6 as U,f as i,a7 as l,aa as S,u as h}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./index-7711d1b4.js";import"./lodash-es-vendor-9b741fb8.js";import"./tinymce-vendor-676f8393.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-173f2e92.js";import"./BasicForm-2f1a8584.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./index-465fff25.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-d5fd9260.js";import"./JSelectUser-5289e428.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./cron-parser-vendor-15f47fa7.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";import"./echarts-ca919d75.js";const q=()=>_.get({url:"/sys/actuator/redis/keysSize"},{isTransformResponse:!1}),F=()=>_.get({url:"/sys/actuator/redis/memoryInfo"},{isTransformResponse:!1}),J=()=>_.get({url:"/sys/actuator/redis/info"}),L=()=>Promise.all([q(),F()]),Q=[{title:"Key",dataIndex:"key",width:100},{title:"Description",dataIndex:"description",width:80},{title:"Value",dataIndex:"value",width:80}],W={class:"p-4"},X=T({name:"monitor-redis"}),Ft=T(b(v({},X),{setup(o){n([]);const t=n(null),e=n(null),{setOptions:x,echarts:Y}=k(t),{setOptions:g,echarts:Z}=k(e);n(!1);let p=null;const r=A({title:{text:"Redis Key 实时数量（个）"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{color:"#ff6987"},lineStyle:{color:"#dc143c",width:10,type:"solid"}}]}),s=A({title:{text:"Redis 内存实时占用情况（KB）"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{color:"#74bcff"},lineStyle:{color:"#1890ff",width:10,type:"solid"}}]}),[C,{reload:$}]=G({columns:Q,showIndexColumn:!1,pagination:!1,bordered:!0});function K(){x(s),g(r)}function z(){m(),w(),p=setInterval(()=>{m()},5e3)}function w(){p&&clearInterval(p)}function m(){L().then(c=>{let d=N().format("hh:mm:ss"),[{dbSize:a},f]=c,u=f.used_memory/1e3;r.xAxis.data.push(d),r.series[0].data.push(a),s.xAxis.data.push(d),s.series[0].data.push(u),r.series[0].data.length>6&&(r.xAxis.data.splice(0,1),r.series[0].data.splice(0,1),s.xAxis.data.splice(0,1),s.series[0].data.splice(0,1)),x(s,!1),g(r,!1)}).catch(c=>{})}return j(()=>{K(),z(),setTimeout(()=>{m()},1e3)}),H(()=>{w()}),(c,d)=>{const a=y("a-col"),f=y("a-row"),u=y("a-card");return P(),U("div",W,[i(u,null,{default:l(()=>[i(f,{gutter:8},{default:l(()=>[i(a,{sm:24,xl:12},{default:l(()=>[S("div",{ref_key:"chartRef",ref:t,style:{width:"100%",height:"300px"}},null,512)]),_:1}),i(a,{sm:24,xl:12},{default:l(()=>[S("div",{ref_key:"chartRef2",ref:e,style:{width:"100%",height:"300px"}},null,512)]),_:1})]),_:1})]),_:1}),i(h(E),{onRegister:h(C),api:h(J)},null,8,["onRegister","api"])])}}}));export{Ft as default};