import{B as e}from"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import{q as o,l as s,F as t,o as i,L as a,al as d,t as r,v as c,V as n,z as m,y as p,u as l}from"./index.435ab247.js";import{k as u}from"./JAddInput.8c125e2c.js";import{o as j}from"./select.ba0488c9.js";import"./uniqBy.91f18935.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useFormItem.816007c4.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./api.bc301b0f.js";import"./index.cdc49bf1.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";const b=[{field:"field1",component:"JCodeEditor",label:"代码编辑器",required:!0,slot:"jCodeEdit",colProps:{span:15},defaultValue:"Hello JeecgBoot"}];var f=o(s({components:{BasicForm:e,JCodeEditor:u},setup(){const e=t(null),{createMessage:o}=l(),s=t(""),r=i((()=>({keyword:a(s)})));return{schemas:b,optionsListApi:j,onSearch:d((function(e){s.value=e}),300),searchParams:r,handleReset:()=>{s.value=""},handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}}),[["render",function(e,o,s,t,i,a){const d=r("JCodeEditor"),l=r("BasicForm");return c(),n(l,{labelWidth:200,schemas:e.schemas,showResetButton:!1,showSubmitButton:!1,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset,style:{height:"800px"}},{jCodeEdit:m((({model:e,field:o})=>[p(d,{value:e[o],"onUpdate:value":s=>e[o]=s,mode:"js",height:"300px",fullScreen:!0},null,8,["value","onUpdate:value"])])),_:1},8,["schemas","onSubmit","onReset"])}]]);export{f as default};