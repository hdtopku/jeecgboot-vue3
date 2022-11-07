import{B as A}from"./BasicForm.638a5420.js";import"./helper.df0282ae.js";import{u as v}from"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import{l as y,F as C,bH as M,t as m,v as h,x,y as e,z as u,L as a,aw as U,C as i}from"./index.a86a095a.js";import{U as n}from"./JUpload.bd403882.js";import{_ as B}from"./JUploadModal.cd922936.js";import"./index.6aad32b5.js";import"./uniqBy.37746f07.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./index.2f02ed00.js";import"./api.8ffe844e.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";const w=i("\u542F\u7528"),k=i("\u7981\u7528"),J=i("\u6587\u4EF6\u5F39\u7A97"),co=y({__name:"JUploadDemo",setup(R){const s=C(""),d=[{field:"uploadFile",component:"JUpload",helpMessage:"\u65E0\u9650\u5236\u4E0A\u4F20",label:"\u4E0A\u4F20\u6587\u4EF6"},{field:"uploadFileMax",component:"JUpload",helpMessage:"\u6700\u591A\u4E0A\u4F203\u4E2A\u6587\u4EF6",label:"\u4E0A\u4F20\u6587\u4EF6\uFF083\uFF09",componentProps:{maxCount:3}},{field:"uploadImage",component:"JUpload",label:"\u4E0A\u4F20\u56FE\u7247",helpMessage:"\u65E0\u9650\u5236\u4E0A\u4F20",componentProps:{fileType:n.image}},{field:"uploadImageMax",component:"JUpload",label:"\u4E0A\u4F20\u56FE\u7247\uFF081\uFF09",helpMessage:"\u6700\u591A\u4E0A\u4F201\u5F20\u56FE\u7247",componentProps:{fileType:n.image,maxCount:1}}],[F,{openModal:c}]=M(),[f,{setProps:_,validate:T,setFieldsValue:P}]=v({labelWidth:120,schemas:d,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function E(t){console.log(t)}function r(t){_({disabled:!!t})}function g(){c(!0,{maxCount:9,fileType:n.image})}return(t,o)=>{const p=m("a-button"),b=m("a-button-group");return h(),x(U,null,[e(b,{class:"j-table-operator"},{default:u(()=>[e(p,{type:"primary",onClick:o[0]||(o[0]=l=>r(0))},{default:u(()=>[w]),_:1}),e(p,{type:"primary",onClick:o[1]||(o[1]=l=>r(1))},{default:u(()=>[k]),_:1}),e(p,{type:"primary",onClick:g},{default:u(()=>[J]),_:1})]),_:1}),e(a(A),{onRegister:a(f),onSubmit:E},null,8,["onRegister"]),e(a(B),{value:s.value,"onUpdate:value":o[2]||(o[2]=l=>s.value=l),onRegister:a(F)},null,8,["value","onRegister"])],64)}}});export{co as default};