import{B as s}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{q as u,l,dw as c,t as r,v as d,V as f,z as a,y as i,h as _,u as C}from"./index.23784a6b.js";import"./JAddInput.f96768b3.js";import{M as h}from"./index.b48c2101.js";import{a as g}from"./index.1525978f.js";import"./uniqBy.d45e63ad.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:t,field:o})=>_(h,{value:t[o],onChange:e=>{t[o]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:g},setup(){const{createMessage:t}=C();return{schemas:b,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function w(t,o,e,B,F,M){const p=r("BasicForm"),m=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:a(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:a(()=>[i(p,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var it=u(k,[["render",w]]);export{it as default};