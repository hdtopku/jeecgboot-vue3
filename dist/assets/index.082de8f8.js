import{a as l}from"./index.4cdbd2ab.js";import{q as a,l as s,dr as e,c7 as d,bY as t,t as i,v as o,V as n,z as c,y as r,aW as u,C as m}from"./index.435ab247.js";import"./useContentHeight.60ff243a.js";import"./onMountedOrActivated.e9ddbd41.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";const f=s({components:{PageWrapper:l,ACard:e,ARow:d,ACol:t}}),g={class:"my-2"},p=u("h3",null,"success",-1),y={class:"py-2"},_=m(" 成功 "),h=m(" 禁用 "),k=m(" loading "),b=m(" link "),v=m(" loading link "),w=m(" disabled link "),x={class:"my-2"},j=u("h3",null,"warning",-1),C=m(" 警告 "),A=m(" 禁用 "),B=m(" loading "),W=m(" link "),H=m(" loading link "),P=m(" disabled link "),z={class:"my-2"},F=u("h3",null,"error",-1),I=m(" 错误 "),V=m(" 禁用 "),q=m(" loading "),M=m(" link "),O=m(" loading link "),R=m(" disabled link "),S={class:"my-2"},T=u("h3",null,"ghost",-1),Y=m(" 幽灵成功 "),D=m(" 幽灵警告 "),E=m(" 幽灵错误 "),G=m(" 幽灵警告dashed "),J=m(" 幽灵危险 "),K={class:"my-2"},L=u("h3",null,"primary",-1),N=m(" 主按钮 "),Q=m(" 禁用 "),U=m(" 危险 "),X=m(" loading "),Z=m(" link "),$=m(" loading link "),ll=m(" disabled link "),al={class:"my-2"},sl=u("h3",null,"default",-1),el=m(" 默认 "),dl=m(" 禁用 "),tl=m(" 危险 "),il=m(" loading "),ol=m(" link "),nl=m(" loading link "),cl=m(" disabled link "),rl={class:"my-2"},ul=u("h3",null,"dashed",-1),ml=m(" dashed "),fl=m(" 禁用 "),gl=m(" 危险 "),pl=m(" loading "),yl={class:"my-2"},_l=u("h3",null,"ghost 常规幽灵按钮通常用于有色背景下",-1),hl={class:"bg-gray-400 py-2"},kl=m(" 幽灵主要 "),bl=m(" 幽灵默认 "),vl=m(" 幽灵dashed "),wl=m(" 禁用 "),xl=m(" loading ");var jl=a(f,[["render",function(l,a,s,e,d,t){const m=i("a-button"),f=i("a-card"),jl=i("a-col"),Cl=i("a-row"),Al=i("PageWrapper");return o(),n(Al,{contentFullHeight:"",title:"基础组件",content:" 基础组件依赖于ant-design-vue,组件库已有的基础组件,项目中不会再次进行demo展示（二次封装组件除外）"},{default:c((()=>[r(Cl,{gutter:[20,20]},{default:c((()=>[r(jl,{xl:10,lg:24},{default:c((()=>[r(f,{title:"BasicButton Color"},{default:c((()=>[u("div",g,[p,u("div",y,[r(m,{color:"success"},{default:c((()=>[_])),_:1}),r(m,{color:"success",class:"ml-2",disabled:""},{default:c((()=>[h])),_:1}),r(m,{color:"success",class:"ml-2",loading:""},{default:c((()=>[k])),_:1}),r(m,{color:"success",type:"link",class:"ml-2"},{default:c((()=>[b])),_:1}),r(m,{color:"success",type:"link",class:"ml-2",loading:""},{default:c((()=>[v])),_:1}),r(m,{color:"success",type:"link",class:"ml-2",disabled:""},{default:c((()=>[w])),_:1})])]),u("div",x,[j,r(m,{color:"warning"},{default:c((()=>[C])),_:1}),r(m,{color:"warning",class:"ml-2",disabled:""},{default:c((()=>[A])),_:1}),r(m,{color:"warning",class:"ml-2",loading:""},{default:c((()=>[B])),_:1}),r(m,{color:"warning",type:"link",class:"ml-2"},{default:c((()=>[W])),_:1}),r(m,{color:"warning",type:"link",class:"ml-2",loading:""},{default:c((()=>[H])),_:1}),r(m,{color:"warning",type:"link",class:"ml-2",disabled:""},{default:c((()=>[P])),_:1})]),u("div",z,[F,r(m,{color:"error"},{default:c((()=>[I])),_:1}),r(m,{color:"error",class:"ml-2",disabled:""},{default:c((()=>[V])),_:1}),r(m,{color:"error",class:"ml-2",loading:""},{default:c((()=>[q])),_:1}),r(m,{color:"error",type:"link",class:"ml-2"},{default:c((()=>[M])),_:1}),r(m,{color:"error",type:"link",class:"ml-2",loading:""},{default:c((()=>[O])),_:1}),r(m,{color:"error",type:"link",class:"ml-2",disabled:""},{default:c((()=>[R])),_:1})]),u("div",S,[T,r(m,{ghost:"",color:"success",class:"ml-2"},{default:c((()=>[Y])),_:1}),r(m,{ghost:"",color:"warning",class:"ml-2"},{default:c((()=>[D])),_:1}),r(m,{ghost:"",color:"error",class:"ml-2"},{default:c((()=>[E])),_:1}),r(m,{ghost:"",type:"dashed",color:"warning",class:"ml-2"},{default:c((()=>[G])),_:1}),r(m,{ghost:"",danger:"",class:"ml-2"},{default:c((()=>[J])),_:1})])])),_:1})])),_:1}),r(jl,{xl:14,lg:24},{default:c((()=>[r(f,{title:"BasicButton Types"},{default:c((()=>[u("div",K,[L,r(m,{type:"primary",preIcon:"mdi:page-next-outline"},{default:c((()=>[N])),_:1}),r(m,{type:"primary",class:"ml-2",disabled:""},{default:c((()=>[Q])),_:1}),r(m,{type:"primary",class:"ml-2",danger:"",preIcon:"mdi:page-next-outline"},{default:c((()=>[U])),_:1}),r(m,{type:"primary",class:"ml-2",loading:""},{default:c((()=>[X])),_:1}),r(m,{type:"link",class:"ml-2"},{default:c((()=>[Z])),_:1}),r(m,{type:"link",class:"ml-2",loading:""},{default:c((()=>[$])),_:1}),r(m,{type:"link",class:"ml-2",disabled:""},{default:c((()=>[ll])),_:1})]),u("div",al,[sl,r(m,{type:"default"},{default:c((()=>[el])),_:1}),r(m,{type:"default",class:"ml-2",disabled:""},{default:c((()=>[dl])),_:1}),r(m,{type:"default",class:"ml-2",danger:""},{default:c((()=>[tl])),_:1}),r(m,{type:"default",class:"ml-2",loading:""},{default:c((()=>[il])),_:1}),r(m,{type:"link",class:"ml-2"},{default:c((()=>[ol])),_:1}),r(m,{type:"link",class:"ml-2",loading:""},{default:c((()=>[nl])),_:1}),r(m,{type:"link",class:"ml-2",disabled:""},{default:c((()=>[cl])),_:1})]),u("div",rl,[ul,r(m,{type:"dashed"},{default:c((()=>[ml])),_:1}),r(m,{type:"dashed",class:"ml-2",disabled:""},{default:c((()=>[fl])),_:1}),r(m,{type:"dashed",class:"ml-2",danger:""},{default:c((()=>[gl])),_:1}),r(m,{type:"dashed",class:"ml-2",loading:""},{default:c((()=>[pl])),_:1})]),u("div",yl,[_l,u("div",hl,[r(m,{ghost:"",type:"primary",class:"ml-2"},{default:c((()=>[kl])),_:1}),r(m,{ghost:"",type:"default",class:"ml-2"},{default:c((()=>[bl])),_:1}),r(m,{ghost:"",type:"dashed",class:"ml-2"},{default:c((()=>[vl])),_:1}),r(m,{ghost:"",type:"primary",class:"ml-2",disabled:""},{default:c((()=>[wl])),_:1}),r(m,{ghost:"",type:"primary",class:"ml-2",loading:""},{default:c((()=>[xl])),_:1})])])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{jl as default};