import{d as v,l as t,a7 as k,ac as b,aa as h,f as _,u as x,n as m}from"./vue-50733b77.js";import B from"./OneNativeForm-882977d4.js";import{B as C}from"./index-f7d688aa.js";import"./jeecg-online-vendor-d3e1865b.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./index-b34ff7bc.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./useFormItem-915d7f1b.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JUpload-c8630cc9.js";import"./index-fa22fec6.js";import"./JPopup-8bd4163b.js";import"./JSelectDept-0fd43050.js";const tt=v({__name:"OneNativeModal",emits:["register","ok"],setup(O,{expose:n,emit:p}){const a=t(""),s=t(800),e=t(!1),o=t(!1),i=t();function u(){a.value="新增",e.value=!0,m(()=>{i.value.add()})}function c(l){a.value=o.value?"详情":"编辑",e.value=!0,m(()=>{i.value.edit(l)})}function d(){i.value.submitForm()}function f(){r(),p("ok")}function r(){e.value=!1}return n({add:u,edit:c,disableSubmit:o}),(l,w)=>(k(),b(x(C),{title:a.value,width:s.value,visible:e.value,height:600,onOk:d,okButtonProps:{class:{"jee-hidden":o.value}},onCancel:r,cancelText:"关闭"},{default:h(()=>[_(B,{ref_key:"realForm",ref:i,onOk:f,disabled:o.value},null,8,["disabled"])]),_:1},8,["title","width","visible","okButtonProps"]))}});export{tt as default};