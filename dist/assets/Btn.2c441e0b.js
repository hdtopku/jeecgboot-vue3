import{q as e,l as s,t as a,aV as o,v as t,V as r,z as i,bG as n,b7 as d,aY as c,eg as l,G as u,d7 as m,o as f,y as p,aW as y,D as h,x as P,W as _,R as x,ax as k,dF as v,C}from"./index.435ab247.js";import b from"./CurrentPermissionMode.d8722a5b.js";import{A as g}from"./index.1d41ffc4.js";import{a as j}from"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./onMountedOrActivated.e9ddbd41.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";const M=s({components:{Alert:n,PageWrapper:j,CurrentPermissionMode:b,Divider:d,Authority:g},setup(){const{hasPermission:e}=c(),s=l(),a=u(),o=m(),t=f((()=>a.getProjectConfig.permissionMode===v.BACK));return{hasPermission:e,permissionStore:s,switchToken:function(e){return a=this,t=null,r=function*(){const a="fakeToken"+e;o.setToken(a),o.getUserInfoAction(),s.changePermissionCode()},new Promise(((e,s)=>{var o=e=>{try{n(r.next(e))}catch(a){s(a)}},i=e=>{try{n(r.throw(e))}catch(a){s(a)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(o,i);n((r=r.apply(a,t)).next())}));var a,t,r},isBackPremissionMode:t}}}),w=C(" 当前拥有的code列表: "),A=C(" 点击切换按钮权限(用户id为2) "),B=C(" 点击切换按钮权限(用户id为1,默认) "),T=C("组件方式判断权限"),W=C(" 拥有code ['1000']权限可见 "),D=C(" 拥有code ['2000']权限可见 "),S=C(" 拥有code ['1000','2000']角色权限可见 "),V=C("函数方式方式判断权限"),z=C(" 拥有code ['1000']权限可见 "),F=C(" 拥有code ['2000']权限可见 "),G=C(" 拥有code ['1000','2000']角色权限可见 "),H=C("指令方式方式判断权限(该方式不能动态修改权限.)"),I=C(" 拥有code ['1000']权限可见 "),q=C(" 拥有code ['2000']权限可见 "),K=C(" 拥有code ['1000','2000']角色权限可见 ");var L=e(M,[["render",function(e,s,n,d,c,l){const u=a("CurrentPermissionMode"),m=a("Divider"),f=a("Alert"),v=a("a-button"),C=a("Authority"),b=a("PageWrapper"),g=o("auth");return t(),r(b,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:i((()=>[p(u),y("p",null,[w,y("a",null,h(e.permissionStore.getPermCodeList),1)]),p(m),p(f,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),p(m),p(v,{type:"primary",class:"mr-2",onClick:s[0]||(s[0]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:i((()=>[A])),_:1},8,["disabled"]),p(v,{type:"primary",onClick:s[1]||(s[1]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:i((()=>[B])),_:1},8,["disabled"]),e.isBackPremissionMode?(t(),P(k,{key:0},[p(m,null,{default:i((()=>[T])),_:1}),p(C,{value:"1000"},{default:i((()=>[p(v,{type:"primary",class:"mx-4"},{default:i((()=>[W])),_:1})])),_:1}),p(C,{value:"2000"},{default:i((()=>[p(v,{color:"success",class:"mx-4"},{default:i((()=>[D])),_:1})])),_:1}),p(C,{value:["1000","2000"]},{default:i((()=>[p(v,{color:"error",class:"mx-4"},{default:i((()=>[S])),_:1})])),_:1}),p(m,null,{default:i((()=>[V])),_:1}),e.hasPermission("1000")?(t(),r(v,{key:0,type:"primary",class:"mx-4"},{default:i((()=>[z])),_:1})):_("",!0),e.hasPermission("2000")?(t(),r(v,{key:1,color:"success",class:"mx-4"},{default:i((()=>[F])),_:1})):_("",!0),e.hasPermission(["1000","2000"])?(t(),r(v,{key:2,color:"error",class:"mx-4"},{default:i((()=>[G])),_:1})):_("",!0),p(m,null,{default:i((()=>[H])),_:1}),x((t(),r(v,{type:"primary",class:"mx-4"},{default:i((()=>[I])),_:1})),[[g,"1000"]]),x((t(),r(v,{color:"success",class:"mx-4"},{default:i((()=>[q])),_:1})),[[g,"2000"]]),x((t(),r(v,{color:"error",class:"mx-4"},{default:i((()=>[K])),_:1})),[[g,["1000","2000"]]])],64)):_("",!0)])),_:1})}],["__scopeId","data-v-dd3689dc"]]);export{L as default};