var A=Object.defineProperty;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var B=(r,o,e)=>o in r?A(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,F=(r,o)=>{for(var e in o||(o={}))M.call(o,e)&&B(r,e,o[e]);if(f)for(var e of f(o))v.call(o,e)&&B(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((m,p)=>{var l=t=>{try{u(e.next(t))}catch(a){p(a)}},n=t=>{try{u(e.throw(t))}catch(a){p(a)}},u=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,n);u((e=e.apply(r,o)).next())});import{B as D}from"./index.6aad32b5.js";import{B as _}from"./BasicForm.638a5420.js";import"./helper.df0282ae.js";import{u as w}from"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import{l as y,F as C,bG as I,L as i,o as P,v as k,V as L,z as R,y as Y,B as x,a1 as E}from"./index.a86a095a.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./uniqBy.37746f07.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";const fe=y({__name:"JeecgOrderModal",emits:["register","success"],setup(r,{emit:o}){const e=C(!0),[m,{resetFields:p,setFieldsValue:l,validate:n}]=w({labelWidth:150,schemas:[{field:"orderCode",label:"\u8BA2\u5355\u53F7",component:"Input",required:!0},{field:"ctype",label:"\u8BA2\u5355\u7C7B\u578B",component:"Select",componentProps:{options:[{label:"\u56FD\u5185\u8BA2\u5355",value:"1"},{label:"\u56FD\u9645\u8BA2\u5355",value:"2"}]}},{field:"orderDate",label:"\u8BA2\u5355\u65E5\u671F",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD hh:mm:ss"}},{field:"orderMoney",label:"\u8BA2\u5355\u91D1\u989D",component:"InputNumber"},{field:"content",label:"\u8BA2\u5355\u5907\u6CE8",component:"Input"},{field:"id",label:"id",component:"Input",show:!1}],showActionButtonGroup:!1}),[u,{setModalProps:t,closeModal:a}]=I(s=>c(this,null,function*(){yield p(),t({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate),i(e)&&(yield l(F({},s.record)))})),b=P(()=>i(e)?"\u7F16\u8F91\u8BA2\u5355":"\u65B0\u589E\u8BA2\u5355");function g(s){return c(this,null,function*(){try{let d=yield n();t({confirmLoading:!0});let h=i(e)?"/test/order/edit":"/test/order/add";E.post({url:h,params:d}),a(),o("success")}finally{t({confirmLoading:!1})}})}return(s,d)=>(k(),L(i(D),x(s.$attrs,{onRegister:i(u),title:i(b),onOk:g,width:"700px"}),{default:R(()=>[Y(i(_),{onRegister:i(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{fe as default};