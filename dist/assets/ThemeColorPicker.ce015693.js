import{q as p,l as c,aJ as m,n as d,t as u,v as t,x as s,aw as C,bb as _,E as i,Y as f,y as k}from"./index.23784a6b.js";import{b as v}from"./index.357aa12e.js";import"./index.69ca9e44.js";import"./useHeaderSetting.79ceb37f.js";import"./useMultipleTabSetting.c5acd275.js";const h=c({name:"ThemeColorPicker",components:{CheckOutlined:m},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:r}=d("setting-theme-picker");function a(o){e.event&&v(e.event,o)}return{prefixCls:r,handleClick:a}}}),y=["onClick"];function $(e,r,a,o,b,g){const l=u("CheckOutlined");return t(),s("div",{class:i(e.prefixCls)},[(t(!0),s(C,null,_(e.colorList||[],n=>(t(),s("span",{key:n,onClick:x=>e.handleClick(n),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}]),style:f({background:n})},[k(l)],14,y))),128))],2)}var B=p(h,[["render",$]]);export{B as default};