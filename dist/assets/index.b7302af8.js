import{B as c}from"./helper.15e1830a.js";import{q as l,l as d,bE as i,t as r,v as g,V as f,z as B,y as e,u as F}from"./index.6c1aeca2.js";import{B as _}from"./BasicForm.e500713f.js";import{u as A}from"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import{a as C}from"./index.866fff1a.js";import{u as m}from"./upload.690443cf.js";import"./useFormItem.63b4eda3.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./uniqBy.b316cd09.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=d({components:{BasicUpload:c,BasicForm:_,PageWrapper:C,[i.name]:i},setup(){const{createMessage:o}=F(),[t]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:t}}});function P(o,t,p,$,b,x){const a=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return g(),f(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:B(()=>[e(a,{message:"\u57FA\u7840\u793A\u4F8B"}),e(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),e(a,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),e(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var co=l(E,[["render",P]]);export{co as default};