import{l as s,b7 as e,G as o,o as i,aY as n,dF as a,q as r,t,v as d,x as m,y as l,z as u,C as c,D as p}from"./index.435ab247.js";const M=s({name:"CurrentPermissionMode",components:{Divider:e},setup(){const s=o(),e=i((()=>s.getProjectConfig.permissionMode)),{togglePermissionMode:r}=n();return{permissionMode:e,PermissionModeEnum:a,togglePermissionMode:r}}}),g={class:"mt-2"},P=c(" 当前权限模式： "),f=c(" 切换权限模式 ");var C=r(M,[["render",function(s,e,o,i,n,a){const r=t("a-button"),M=t("Divider");return d(),m("div",g,[P,l(r,{type:"link"},{default:u((()=>[c(p(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),l(r,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:u((()=>[f])),_:1},8,["onClick"]),l(M)])}]]);export{C as default};