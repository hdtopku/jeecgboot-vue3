var h=Object.defineProperty,_=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(e,s,t)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,m=(e,s)=>{for(var t in s||(s={}))g.call(s,t)&&c(e,t,s[t]);if(p)for(var t of p(s))x.call(s,t)&&c(e,t,s[t]);return e},u=(e,s)=>_(e,v(s));import{d as V,e as n,V as J,a7 as S,a8 as P,ak as U,f as k,af as E}from"./vue-50733b77.js";import{n as y}from"./JSelectUser-99e618da.js";import{aB as B,aC as $,aE as w}from"./index-b34ff7bc.js";import{am as b,k as A,i as N,_ as T}from"./jeecg-online-vendor-d3e1865b.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./useWindowSizeFn-34cbae37.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./useFormItem-915d7f1b.js";const j=V({name:"JVxeUserSelectCell",components:{JSelectUser:y},props:B(),setup(e){const{innerValue:s,cellProps:t,handleChangeCommon:o,useCellDesign:l}=$(e),{prefixCls:i}=l("user-select"),r=n(()=>{let a=s.value;return a==null?a:b(a)?[]:A(a)?a:N(a)?a.split(","):[a]}),f=n(()=>t.value.multi!=!1),d=n(()=>u(m({},t.value),{value:r.value,showButton:!1,showSearch:!1,maxTagCount:1,maxTagPlaceholder:({length:a})=>"+"+a}));function C(a){o(a.join(","))}return{prefixCls:i,selectedValue:r,multiple:f,cellProps:t,getProps:d,handleChange:C}},enhanced:{switches:{visible:!0},translate:{enabled:!1},aopEvents:{editActived({$event:e}){w({$event:e,props:this.props,className:".ant-select .ant-select-selection-search-input",isClick:!0})}}}});function z(e,s,t,o,l,i){const r=J("JSelectUser");return S(),P("div",{class:U([e.prefixCls])},[k(r,E(e.getProps,{onChange:e.handleChange}),null,16,["onChange"])],2)}const se=T(j,[["render",z]]);export{se as default};