import{d as p,V as l,a7 as r,a8 as n,ak as a,F as c,ab as f,aq as d,f as u}from"./vue-50733b77.js";import{cp as _}from"./antd-vue-vendor-c5335947.js";import{m as C}from"./index-b34ff7bc.js";import{b as k}from"./index-c502ab75.js";import{_ as h}from"./jeecg-online-vendor-d3e1865b.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";import"./index-52f25951.js";import"./useHeaderSetting-0928c647.js";import"./useMultipleTabSetting-bbc2fc13.js";const v=p({name:"ThemeColorPicker",components:{CheckOutlined:_},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=C("setting-theme-picker");function s(i){e.event&&k(e.event,i)}return{prefixCls:o,handleClick:s}}});const y=["onClick"];function $(e,o,s,i,b,g){const m=l("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(c,null,f(e.colorList||[],t=>(r(),n("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t,[`${e.prefixCls}__item--black`]:t=="#ffffff"}]),style:d({background:t})},[u(m)],14,y))),128))],2)}const E=h(v,[["render",$]]);export{E as default};