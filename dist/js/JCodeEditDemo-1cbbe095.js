import{B as d}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import"./antd-vue-vendor-a78909e6.js";import{u as f,D as h}from"./jeecg-online-vendor-885afdd4.js";import{Q as C}from"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{d as _}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import"./index-9d0047d3.js";import{o as B}from"./select-c50eba10.js";import{d as S,k as p,e as b,u as v,V as n,a5 as k,a9 as E,a7 as J,f as g}from"./vue-bcbaddf9.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./echarts-vendor-6c8e2159.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";const w=[{field:"field1",component:"JCodeEditor",label:"代码编辑器",required:!0,slot:"jCodeEdit",colProps:{span:15},defaultValue:"Hello JeecgBoot"}],R=S({components:{BasicForm:d,JCodeEditor:C},setup(){const o=p(null),{createMessage:r}=f(),t=p(""),s=b(()=>({keyword:v(t)}));function i(e){t.value=e}return{schemas:w,optionsListApi:B,onSearch:_(i,300),searchParams:s,handleReset:()=>{t.value=""},handleSubmit:e=>{r.success("click search,values:"+JSON.stringify(e))},check:o}}});function y(o,r,t,s,i,e){const c=n("JCodeEditor"),u=n("BasicForm");return k(),E(u,{labelWidth:200,schemas:o.schemas,showResetButton:!1,showSubmitButton:!1,actionColOptions:{span:24},onSubmit:o.handleSubmit,onReset:o.handleReset,style:{height:"800px"}},{jCodeEdit:J(({model:m,field:a})=>[g(c,{value:m[a],"onUpdate:value":l=>m[a]=l,mode:"js",height:"300px",fullScreen:!0},null,8,["value","onUpdate:value"])]),_:1},8,["schemas","onSubmit","onReset"])}const fo=h(R,[["render",y]]);export{fo as default};