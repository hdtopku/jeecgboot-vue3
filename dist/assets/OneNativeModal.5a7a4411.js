import e from"./OneNativeForm.03b1d3d0.js";import{B as t}from"./index.e1e06dd6.js";import{l as i,F as o,v as s,V as a,z as d,y as r,L as n,Q as m}from"./index.435ab247.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./JUpload.e164672b.js";import"./functional.be5901d6.js";const p=i({__name:"OneNativeModal",emits:["register","ok"],setup(i,{expose:p,emit:u}){const l=o(""),c=o(800),j=o(!1),v=o(!1),b=o();function f(){b.value.submitForm()}function x(){k(),u("ok")}function k(){j.value=!1}return p({add:function(){l.value="新增",j.value=!0,m((()=>{b.value.add()}))},edit:function(e){l.value=v.value?"详情":"编辑",j.value=!0,m((()=>{b.value.edit(e)}))},disableSubmit:v}),(i,o)=>(s(),a(n(t),{title:l.value,width:c.value,visible:j.value,height:600,onOk:f,okButtonProps:{class:{"jee-hidden":v.value}},onCancel:k,cancelText:"关闭"},{default:d((()=>[r(e,{ref_key:"realForm",ref:b,onOk:x,disabled:v.value},null,8,["disabled"])])),_:1},8,["title","width","visible","okButtonProps"]))}});export{p as default};