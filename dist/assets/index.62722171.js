import{q as e,l as a,dw as l,aB as t,bG as s,dU as o,F as c,dO as n,t as r,v as i,V as u,z as d,y as f,aW as m,x as C,bc as p,C as b,D as k,ax as g,u as h}from"./index.435ab247.js";import{a as _}from"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./onMountedOrActivated.e9ddbd41.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";const v=a({name:"TabsDemo",components:{CollapseContainer:l,PageWrapper:_,[t.name]:t,[s.name]:s},setup(){const e=o(),a=c(""),{closeAll:l,closeLeft:t,closeRight:s,closeOther:r,closeCurrent:i,refreshPage:u,setTitle:d}=n(),{createMessage:f}=h();return{closeAll:l,closeLeft:t,closeRight:s,closeOther:r,closeCurrent:i,toDetail:function(a){e(`/comp/basic/tabs/detail/${a}`)},refreshPage:u,setTabTitle:function(){a.value?d(a.value):f.error("请输入要设置的Tab标题！")},title:a}}}),T={class:"mt-2 flex flex-grow-0"},x=b(" 设置Tab标题 "),j=b(" 关闭所有 "),P=b(" 关闭左侧 "),w=b(" 关闭右侧 "),O=b(" 关闭其他 "),y=b(" 关闭当前 "),A=b(" 刷新当前 ");var D=e(v,[["render",function(e,a,l,t,s,o){const c=r("a-alert"),n=r("a-button"),h=r("a-input"),_=r("CollapseContainer"),v=r("PageWrapper");return i(),u(v,{title:"标签页操作示例"},{default:d((()=>[f(_,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:d((()=>[f(c,{banner:"",message:"该操作不会影响页面标题，仅修改Tab标题"}),m("div",T,[f(n,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:d((()=>[x])),_:1},8,["onClick"]),f(h,{placeholder:"请输入",value:e.title,"onUpdate:value":a[0]||(a[0]=a=>e.title=a),class:"mr-4 w-12"},null,8,["value"])])])),_:1}),f(_,{class:"mt-4",title:"标签页操作"},{default:d((()=>[f(n,{class:"mr-2",onClick:e.closeAll},{default:d((()=>[j])),_:1},8,["onClick"]),f(n,{class:"mr-2",onClick:e.closeLeft},{default:d((()=>[P])),_:1},8,["onClick"]),f(n,{class:"mr-2",onClick:e.closeRight},{default:d((()=>[w])),_:1},8,["onClick"]),f(n,{class:"mr-2",onClick:e.closeOther},{default:d((()=>[O])),_:1},8,["onClick"]),f(n,{class:"mr-2",onClick:e.closeCurrent},{default:d((()=>[y])),_:1},8,["onClick"]),f(n,{class:"mr-2",onClick:e.refreshPage},{default:d((()=>[A])),_:1},8,["onClick"])])),_:1}),f(_,{class:"mt-4",title:"标签页复用超出限制自动关闭(使用场景: 动态路由)"},{default:d((()=>[(i(),C(g,null,p(6,(a=>f(n,{key:a,class:"mr-2",onClick:l=>e.toDetail(a)},{default:d((()=>[b(" 打开"+k(a)+"详情页 ",1)])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1})}]]);export{D as default};