var u=(t,n,e)=>new Promise((p,i)=>{var m=o=>{try{r(e.next(o))}catch(a){i(a)}},s=o=>{try{r(e.throw(o))}catch(a){i(a)}},r=o=>o.done?p(o.value):Promise.resolve(o.value).then(m,s);r((e=e.apply(t,n)).next())});import{B as d}from"./index.c08fb6c5.js";import{B}from"./BasicForm.1d30e5fc.js";import"./componentMap.a24260de.js";import{u as f}from"./useForm.853cc25f.js";import"./JAddInput.eb06f3b7.js";import{j as F,C as g,bH as h,q as M,r as c,s as _,Q as v,w,v as C}from"./index.b3c2d15d.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./api.363f3378.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./areaDataUtil.26505ac2.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";const b=F({name:"TenantInviteUserModal",components:{BasicModal:d,BasicForm:B},setup(t,{emit:n}){const e=g("\u9080\u8BF7\u6210\u5458"),[p,{resetFields:i,validate:m}]=f({schemas:[{label:"\u624B\u673A\u53F7",field:"phone",component:"Input",dynamicRules:()=>[{required:!0,message:"\u8BF7\u586B\u5199\u624B\u673A\u53F7"},{pattern:/^1[3456789]\d{9}$/,message:"\u624B\u673A\u53F7\u7801\u683C\u5F0F\u6709\u8BEF"}]}],showActionButtonGroup:!1,labelCol:{span:24},wrapperCol:{span:24}}),[s,{setModalProps:r,closeModal:o}]=h(l=>u(this,null,function*(){yield i(),r({minHeight:100})}));function a(){return u(this,null,function*(){let l=yield m();n("inviteOk",l.phone),o()})}return{title:e,registerModal:s,registerForm:p,handleSubmit:a}}});function k(t,n,e,p,i,m){const s=c("BasicForm"),r=c("BasicModal");return _(),v(r,{onRegister:t.registerModal,width:500,title:t.title,onOk:t.handleSubmit},{default:w(()=>[C(s,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},8,["onRegister","title","onOk"])}const no=M(b,[["render",k]]);export{no as default};