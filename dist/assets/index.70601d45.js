var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{B as m}from"./BasicTable.0748ea8a.js";import"./helper.1c9dc9a5.js";import"./TableImg.e204e8e3.js";import{u as i}from"./useTable.6359f662.js";import n from"./DiskInfo.80c99d7c.js";import{a1 as u,l,F as p,$ as d,t as v,v as j,x as f,y as g,z as x,V as y,W as b,aW as T,C as R,D as M,L as h,c3 as C}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./uniqBy.91f18935.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";import"./gauge.d7f63e3f.js";import"./useECharts.7a6f7516.js";import"./echarts.6d32f04e.js";import"./install.ca160351.js";const k=[{title:"参数",dataIndex:"param",width:80,align:"left",slots:{customRender:"param"}},{title:"描述",dataIndex:"text",slots:{customRender:"text"},width:80},{title:"当前值",dataIndex:"value",slots:{customRender:"value"},width:80}],w={class:"p-4"},B={slot:"message"},q=l({name:"monitor-server"}),A=l((J=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))a.call(t,r)&&c(e,r,t[r]);return e})({},q),t(J,r({setup(e){const t=p([]),r=p("1"),s=p({}),o=p({});let a=p({});p([]);const c={logType:"1"},[l,{reload:q}]=i({columns:k,showIndexColumn:!1,bordered:!0,pagination:!1,canResize:!1,tableSetting:{fullScreen:!0},rowKey:"id"});function A(e){4!=e&&J(e)}function J(e){o.value=C().format("YYYY年MM月DD日 HH时mm分ss秒"),(e=>"1"==e?Promise.all([u.get({url:"/actuator/metrics/system.cpu.count"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/system.cpu.usage"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/process.start.time"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/process.uptime"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/process.cpu.usage"},{isTransformResponse:!1})]):"2"==e?Promise.all([u.get({url:"/actuator/metrics/jvm.memory.max"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.memory.committed"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.memory.used"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.buffer.count"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.buffer.memory.used"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.threads.daemon"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.threads.live"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.threads.peak"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.classes.loaded"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.classes.unloaded"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.gc.live.data.size"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.gc.max.data.size"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.gc.memory.allocated"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.gc.memory.promoted"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/jvm.gc.pause"},{isTransformResponse:!1})]):"3"==e?Promise.all([u.get({url:"/actuator/metrics/tomcat.sessions.active.current"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/tomcat.sessions.active.max"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/tomcat.sessions.created"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/tomcat.sessions.expired"},{isTransformResponse:!1}),u.get({url:"/actuator/metrics/tomcat.sessions.rejected"},{isTransformResponse:!1})]):void 0)(e).then((r=>{a.value=(e=>"1"==e?{"system.cpu.count":{color:"green",text:"CPU 数量",unit:"核"},"system.cpu.usage":{color:"green",text:"系统 CPU 使用率",unit:"%",valueType:"Number"},"process.start.time":{color:"purple",text:"应用启动时间点",unit:"",valueType:"Date"},"process.uptime":{color:"purple",text:"应用已运行时间",unit:"秒"},"process.cpu.usage":{color:"purple",text:"当前应用 CPU 使用率",unit:"%",valueType:"Number"}}:"2"==e?{"jvm.memory.max":{color:"purple",text:"JVM 最大内存",unit:"MB",valueType:"RAM"},"jvm.memory.committed":{color:"purple",text:"JVM 可用内存",unit:"MB",valueType:"RAM"},"jvm.memory.used":{color:"purple",text:"JVM 已用内存",unit:"MB",valueType:"RAM"},"jvm.buffer.memory.used":{color:"cyan",text:"JVM 缓冲区已用内存",unit:"MB",valueType:"RAM"},"jvm.buffer.count":{color:"cyan",text:"当前缓冲区数量",unit:"个"},"jvm.threads.daemon":{color:"green",text:"JVM 守护线程数量",unit:"个"},"jvm.threads.live":{color:"green",text:"JVM 当前活跃线程数量",unit:"个"},"jvm.threads.peak":{color:"green",text:"JVM 峰值线程数量",unit:"个"},"jvm.classes.loaded":{color:"orange",text:"JVM 已加载 Class 数量",unit:"个"},"jvm.classes.unloaded":{color:"orange",text:"JVM 未加载 Class 数量",unit:"个"},"jvm.gc.memory.allocated":{color:"pink",text:"GC 时, 年轻代分配的内存空间",unit:"MB",valueType:"RAM"},"jvm.gc.memory.promoted":{color:"pink",text:"GC 时, 老年代分配的内存空间",unit:"MB",valueType:"RAM"},"jvm.gc.max.data.size":{color:"pink",text:"GC 时, 老年代的最大内存空间",unit:"MB",valueType:"RAM"},"jvm.gc.live.data.size":{color:"pink",text:"FullGC 时, 老年代的内存空间",unit:"MB",valueType:"RAM"},"jvm.gc.pause.count":{color:"blue",text:"系统启动以来GC 次数",unit:"次"},"jvm.gc.pause.totalTime":{color:"blue",text:"系统启动以来GC 总耗时",unit:"秒"}}:"3"==e?{"tomcat.sessions.created":{color:"green",text:"tomcat 已创建 session 数",unit:"个"},"tomcat.sessions.expired":{color:"green",text:"tomcat 已过期 session 数",unit:"个"},"tomcat.sessions.active.current":{color:"green",text:"tomcat 当前活跃 session 数",unit:"个"},"tomcat.sessions.active.max":{color:"green",text:"tomcat 活跃 session 数峰值",unit:"个"},"tomcat.sessions.rejected":{color:"green",text:"超过session 最大配置后，拒绝的 session 个数",unit:"个"},"tomcat.global.sent":{color:"purple",text:"发送的字节数",unit:"bytes"},"tomcat.global.request.max":{color:"purple",text:"request 请求最长耗时",unit:"秒"},"tomcat.global.request.count":{color:"purple",text:"全局 request 请求次数",unit:"次"},"tomcat.global.request.totalTime":{color:"purple",text:"全局 request 请求总耗时",unit:"秒"},"tomcat.servlet.request.max":{color:"cyan",text:"servlet 请求最长耗时",unit:"秒"},"tomcat.servlet.request.count":{color:"cyan",text:"servlet 总请求次数",unit:"次"},"tomcat.servlet.request.totalTime":{color:"cyan",text:"servlet 请求总耗时",unit:"秒"},"tomcat.threads.current":{color:"pink",text:"tomcat 当前线程数（包括守护线程）",unit:"个"},"tomcat.threads.config.max":{color:"pink",text:"tomcat 配置的线程最大数",unit:"个"}}:void 0)(e),s.value=(e=>"1"==e?{}:"2"==e?{"jvm.gc.pause":[".count",".totalTime"]}:"3"==e?{"tomcat.global.request":[".count",".totalTime"],"tomcat.servlet.request":[".count",".totalTime"]}:void 0)(e);let o=[];r.forEach(((e,t)=>{let r=h(s)[e.name];r instanceof Array||(r=[""]),r.forEach(((r,s)=>{let c=e.name+r,m=function(e,t){return"Number"===t?Number(100*e).toFixed(2):"Date"===t?C(1e3*e).format("YYYY-MM-DD HH:mm:ss"):"RAM"===t?Number(e/1048576).toFixed(3):e}(e.measurements[s].value,h(a)[c].valueType);o.push({id:c+t,param:c,text:"false value",value:m})}))})),t.value=o}))}function P(){J(r.value)}return d((()=>{J(r.value)})),(e,s)=>{const i=v("a-tab-pane"),u=v("a-tabs"),p=v("a-divider"),d=v("a-tag"),C=v("a-card");return j(),f("div",w,[g(C,{bordered:!1,style:{height:"100%"}},{default:x((()=>[g(u,{activeKey:r.value,"onUpdate:activeKey":s[0]||(s[0]=e=>r.value=e),onChange:A},{default:x((()=>[g(i,{key:"1",tab:"服务器信息"}),g(i,{key:"2",tab:"JVM信息","force-render":""}),g(i,{key:"3",tab:"Tomcat信息"}),g(i,{key:"4",tab:"磁盘监控"},{default:x((()=>[4==r.value?(j(),y(n,{key:0,style:{height:"100%"}})):b("",!0)])),_:1})])),_:1},8,["activeKey"]),4!=r.value?(j(),y(h(m),{key:0,onRegister:h(l),searchInfo:c,dataSource:t.value},{tableTitle:x((()=>[T("div",B,[R("上次更新时间："+M(o.value)+" ",1),g(p,{type:"vertical"}),T("a",{onClick:P},"立即更新")])])),param:x((({record:e,text:t})=>[g(d,{color:h(a)[e.param].color},{default:x((()=>[R(M(t),1)])),_:2},1032,["color"])])),text:x((({record:e})=>[R(M(h(a)[e.param].text),1)])),value:x((({record:e,text:t})=>[R(M(t)+" "+M(h(a)[e.param].unit),1)])),_:1},8,["onRegister","dataSource"])):b("",!0)])),_:1})])}}}))));var J;export{A as default};