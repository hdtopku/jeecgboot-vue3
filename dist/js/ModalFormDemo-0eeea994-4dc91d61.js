import{B as s}from"./BasicForm-2f1a8584.js";import"./componentMap-da21b34e.js";import{u as n}from"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./JSelectUser-5289e428.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./index-7711d1b4.js";import"./cron-parser-vendor-15f47fa7.js";import"./index-465fff25.js";import{Q as a,b as l}from"./jeecg-online-vendor-59c8fbe3.js";import{_ as c}from"./antd-vue-vendor-a78909e6.js";import{d,V as u,a5 as f,a6 as b,f as g}from"./vue-bcbaddf9.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-173f2e92.js";import"./echarts-vendor-6c8e2159.js";import"./useFormItem-d5fd9260.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";import"./areaDataUtil-661e31ab.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";const h=()=>[{field:"name",component:"Input",label:"名称"},{field:"age",component:"InputNumber",label:"年龄",componentProps:{style:{width:"100%"}}},{field:"sex",label:"性别",component:"JDictSelectTag",componentProps:{dictCode:"sex"}},{field:"birthday",component:"DatePicker",label:"生日",componentProps:{valueFormat:"YYYY-MM-DD",style:{width:"100%"}}},{field:"email",component:"Input",label:"邮箱"}],F=d({components:{BasicForm:s},props:["id"],setup(o){const[e,{setFieldsValue:r}]=n({schemas:h(),showActionButtonGroup:!1,baseColProps:{span:24}});let m={id:o.id};return l.get({url:"/test/jeecgDemo/queryById",params:m},{isTransformResponse:!1}).then(t=>{if(t.success){let i=c(t.result,"name","age","birthday","sex","email");r(i)}}),{registerForm:e}}}),B={style:{margin:"50px auto",width:"800px"}};function x(o,e,r,m,t,i){const p=u("BasicForm");return f(),b("div",B,[g(p,{onRegister:o.registerForm},null,8,["onRegister"])])}const io=a(F,[["render",x]]);export{io as default};