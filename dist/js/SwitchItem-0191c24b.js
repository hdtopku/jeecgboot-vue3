import{d as r,e as d,V as l,a7 as c,a8 as m,ak as p,ad as f,ae as h,f as u,af as C}from"./vue-50733b77.js";import{bM as _}from"./antd-vue-vendor-c5335947.js";import{m as g}from"./index-b34ff7bc.js";import{o as b,_ as y}from"./jeecg-online-vendor-d3e1865b.js";import{b as k}from"./index-c502ab75.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";import"./index-52f25951.js";import"./useHeaderSetting-0928c647.js";import"./useMultipleTabSetting-bbc2fc13.js";const v=r({name:"SwitchItem",components:{Switch:_},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=g("setting-switch-item"),{t:n}=b(),o=d(()=>e.def?{checked:e.def}:{});function a(s){e.event&&k(e.event,s)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function S(e,t,n,o,a,s){const i=l("Switch");return c(),m("div",{class:p(e.prefixCls)},[f("span",null,h(e.title),1),u(i,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}const q=y(v,[["render",S],["__scopeId","data-v-0f0bf616"]]);export{q as default};