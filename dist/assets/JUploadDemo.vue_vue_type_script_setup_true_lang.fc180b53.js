import{B as A}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as v}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as y,C,bI as M,r as m,s as x,t as U,v as o,w as a,y as s,K as t,ax as h}from"./index.9d4ffdff.js";import{U as p}from"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import{_ as B}from"./JUploadModal.vue_vue_type_script_setup_true_lang.2cde3efd.js";import"./index.fa33ec21.js";const D=y({__name:"JUploadDemo",setup(w){const r=C(""),d=[{field:"uploadFile",component:"JUpload",helpMessage:"\u65E0\u9650\u5236\u4E0A\u4F20",label:"\u4E0A\u4F20\u6587\u4EF6"},{field:"uploadFileMax",component:"JUpload",helpMessage:"\u6700\u591A\u4E0A\u4F203\u4E2A\u6587\u4EF6",label:"\u4E0A\u4F20\u6587\u4EF6\uFF083\uFF09",componentProps:{maxCount:3}},{field:"uploadImage",component:"JUpload",label:"\u4E0A\u4F20\u56FE\u7247",helpMessage:"\u65E0\u9650\u5236\u4E0A\u4F20",componentProps:{fileType:p.image}},{field:"uploadImageMax",component:"JUpload",label:"\u4E0A\u4F20\u56FE\u7247\uFF081\uFF09",helpMessage:"\u6700\u591A\u4E0A\u4F201\u5F20\u56FE\u7247",componentProps:{fileType:p.image,maxCount:1}}],[F,{openModal:c}]=M(),[f,{setProps:E,validate:k,setFieldsValue:J}]=v({labelWidth:120,schemas:d,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function g(u){console.log(u)}function i(u){E({disabled:!!u})}function b(){c(!0,{maxCount:9,fileType:p.image})}return(u,e)=>{const l=m("a-button"),_=m("a-button-group");return x(),U(h,null,[o(_,{class:"j-table-operator"},{default:a(()=>[o(l,{type:"primary",onClick:e[0]||(e[0]=n=>i(0))},{default:a(()=>[s("\u542F\u7528")]),_:1}),o(l,{type:"primary",onClick:e[1]||(e[1]=n=>i(1))},{default:a(()=>[s("\u7981\u7528")]),_:1}),o(l,{type:"primary",onClick:b},{default:a(()=>[s("\u6587\u4EF6\u5F39\u7A97")]),_:1})]),_:1}),o(t(A),{onRegister:t(f),onSubmit:g},null,8,["onRegister"]),o(t(B),{value:r.value,"onUpdate:value":e[2]||(e[2]=n=>r.value=n),onRegister:t(F)},null,8,["value","onRegister"])],64)}}});export{D as _};