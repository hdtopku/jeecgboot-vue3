import{m as p}from"./index-0d179770.js";import{b as l}from"./index-ea730dee.js";import{d as c,V as d,a5 as r,a6 as n,F as f,a8 as u,am as a,an as C,f as _}from"./vue-bcbaddf9.js";import{aw as k}from"./antd-vue-vendor-a78909e6.js";import{D as h}from"./jeecg-online-vendor-658239c9.js";import"./lodash-es-vendor-9b741fb8.js";import"./tinymce-vendor-676f8393.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";import"./index-be443812.js";import"./useHeaderSetting-1b950f6d.js";import"./useMultipleTabSetting-bf82b485.js";const v=c({name:"ThemeColorPicker",components:{CheckOutlined:k},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=p("setting-theme-picker");function s(i){e.event&&l(e.event,i)}return{prefixCls:o,handleClick:s}}});const y=["onClick"];function $(e,o,s,i,g,b){const m=d("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(f,null,u(e.colorList||[],t=>(r(),n("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[_(m)],14,y))),128))],2)}const A=h(v,[["render",$]]);export{A as default};