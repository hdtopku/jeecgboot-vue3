import{d as u,l as g,a5 as v,a6 as f,ad as o,V as r,a7 as h,a8 as C,ak as e,v as n,f as a,B as m}from"./vue-50733b77.js";import y from"./ThirdAppDingTalkConfigForm-092e371b.js";import{m as k}from"./index-b34ff7bc.js";import{_ as T}from"./jeecg-online-vendor-d3e1865b.js";import"./ThirdAppConfigModal-60ea0f60.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./useWindowSizeFn-34cbae37.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-7e7a94e9.js";import"./useForm-14ceb529.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";const A=u({name:"ThirdAppConfigList",components:{ThirdAppDingTalkConfigForm:y},setup(){const{prefixCls:i}=k("j-dd-container"),t=g("ding");function p(s){t.value=s}return{activeKey:t,dingLiClick:p,prefixCls:i}}});const c=i=>(v("data-v-c811e762"),i=i(),f(),i),F={class:"ding-header"},L={class:"ding-menu-tab"},$=c(()=>o("a",null,"钉钉集成",-1)),w=[$],D=c(()=>o("a",null,"企业微信集成?",-1)),E=[D],K={class:"base-collapse"},B={class:"p-5 empty-image"};function I(i,t,p,s,S,V){const d=r("ThirdAppDingTalkConfigForm"),l=r("a-empty");return h(),C("div",{class:e(["ding-ding-container",[`${i.prefixCls}`]])},[o("div",F,[o("ul",L,[o("li",{class:e(i.activeKey==="ding"?"active":""),onClick:t[0]||(t[0]=_=>i.dingLiClick("ding"))},w,2),o("li",{class:e(i.activeKey==="wechat"?"active":""),onClick:t[1]||(t[1]=_=>i.dingLiClick("wechat"))},E,2)])]),n(o("div",K,[a(d)],512),[[m,i.activeKey==="ding"]]),n(o("div",B,[a(l,{description:"暂不支持","image-style":{margin:"0 auto",height:"160px"}})],512),[[m,i.activeKey==="wechat"]])],2)}const Fi=T(A,[["render",I],["__scopeId","data-v-c811e762"]]);export{Fi as default};