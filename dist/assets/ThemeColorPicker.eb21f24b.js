import{j as c,aK as p,l as m,q as d,r as u,s as n,t as s,ax as C,bc as _,B as i,V as f,v as k}from"./index.9d4ffdff.js";import{b as h}from"./index.00a62e8b.js";import"./index.ff40b9f5.js";import"./useHeaderSetting.59aa93b9.js";import"./useMultipleTabSetting.acccb846.js";const v=c({name:"ThemeColorPicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:r}=m("setting-theme-picker");function o(a){e.event&&h(e.event,a)}return{prefixCls:r,handleClick:o}}});const y=["onClick"];function $(e,r,o,a,g,b){const l=u("CheckOutlined");return n(),s("div",{class:i(e.prefixCls)},[(n(!0),s(C,null,_(e.colorList||[],t=>(n(),s("span",{key:t,onClick:x=>e.handleClick(t),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(l)],14,y))),128))],2)}const z=d(v,[["render",$]]);export{z as default};