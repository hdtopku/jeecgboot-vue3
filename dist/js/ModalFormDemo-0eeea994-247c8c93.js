import{d as s,V as n,a7 as a,a8 as l,f as c}from"./vue-50733b77.js";import"./index-7e7a94e9.js";import{ap as d,bB as u}from"./jeecg-online-vendor-d3e1865b.js";import"./lodash-es-vendor-058e2396.js";import{B as f,u as b}from"./useForm-14ceb529.js";import{p as g}from"./antd-vue-vendor-c5335947.js";import"./index-b34ff7bc.js";import"./tinymce-vendor-7c917b36.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";const h=()=>[{field:"name",component:"Input",label:"名称"},{field:"age",component:"InputNumber",label:"年龄",componentProps:{style:{width:"100%"}}},{field:"sex",label:"性别",component:"JDictSelectTag",componentProps:{dictCode:"sex"}},{field:"birthday",component:"DatePicker",label:"生日",componentProps:{valueFormat:"YYYY-MM-DD",style:{width:"100%"}}},{field:"email",component:"Input",label:"邮箱"}],B=s({components:{BasicForm:f},props:["id"],setup(o){const[e,{setFieldsValue:r}]=b({schemas:h(),showActionButtonGroup:!1,baseColProps:{span:24}});let i={id:o.id};return d.get({url:"/test/jeecgDemo/queryById",params:i},{isTransformResponse:!1}).then(t=>{if(t.success){let m=g(t.result,"name","age","birthday","sex","email");r(m)}}),{registerForm:e}}}),F={style:{margin:"50px auto",width:"800px"}};function x(o,e,r,i,t,m){const p=n("BasicForm");return a(),l("div",F,[c(p,{onRegister:o.registerForm},null,8,["onRegister"])])}const no=u(B,[["render",x]]);export{no as default};