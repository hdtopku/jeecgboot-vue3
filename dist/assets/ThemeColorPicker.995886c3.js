import{q as p,l as c,aJ as m,n as d,t as u,v as t,x as s,aw as C,bb as _,E as i,Y as f,y as k}from"./index.3bed7968.js";import{b as v}from"./index.f67224e5.js";import"./index.c00316d7.js";import"./useHeaderSetting.021dedfe.js";import"./useMultipleTabSetting.43e2675f.js";const h=c({name:"ThemeColorPicker",components:{CheckOutlined:m},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:r}=d("setting-theme-picker");function a(o){e.event&&v(e.event,o)}return{prefixCls:r,handleClick:a}}}),y=["onClick"];function $(e,r,a,o,b,g){const l=u("CheckOutlined");return t(),s("div",{class:i(e.prefixCls)},[(t(!0),s(C,null,_(e.colorList||[],n=>(t(),s("span",{key:n,onClick:x=>e.handleClick(n),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}]),style:f({background:n})},[k(l)],14,y))),128))],2)}var B=p(h,[["render",$]]);export{B as default};