import{d as p,a7 as t,ac as u,aa as a,a8 as d,ab as _,f as s,ad as i,u as e,ae as g,F as k,af as b}from"./vue-50733b77.js";import{bN as n}from"./antd-vue-vendor-c5335947.js";import{t as h}from"./index-b34ff7bc.js";import{q as x}from"./jeecg-online-vendor-d3e1865b.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";const C={class:"flex flex-col items-center"},B={class:"text-md mt-2"},z=p({__name:"QuickNav",setup(N){const r=n.Grid,c=x(),l=[{title:"业务受理",icon:"ion:home-outline",color:"#1fdaca"},{title:"业务管理",icon:"ion:grid-outline",color:"#bf0c2c"},{title:"文件管理",icon:"ion:layers-outline",color:"#e18525"},{title:"信息查询",icon:"ion:settings-outline",color:"#3fb27f"},{title:"通知公告",icon:"ion:notifications",color:"#13b0ff"},{title:"我的任务",icon:"ion:person-stalker",color:"#b27315"}];function f(){c.createMessage.success("根据业务自行处理跳转页面!")}return(m,y)=>(t(),u(e(n),b({title:"快捷导航"},m.$attrs),{default:a(()=>[(t(),d(k,null,_(l,o=>s(e(r),{key:o,onClick:f},{default:a(()=>[i("span",C,[s(e(h),{icon:o.icon,color:o.color,size:"20"},null,8,["icon","color"]),i("span",B,g(o.title),1)])]),_:2},1024)),64))]),_:1},16))}});export{z as default};