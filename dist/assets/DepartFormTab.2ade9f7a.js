var I=Object.defineProperty;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var F=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))T.call(e,t)&&F(a,t,e[t]);if(C)for(var t of C(e))k.call(e,t)&&F(a,t,e[t]);return a};var n=(a,e,t)=>new Promise((p,c)=>{var s=r=>{try{i(t.next(r))}catch(m){c(m)}},u=r=>{try{i(t.throw(r))}catch(m){c(m)}},i=r=>r.done?p(r.value):Promise.resolve(r.value).then(s,u);i((t=t.apply(a,e)).next())});import{B as P}from"./BasicForm.638a5420.js";import"./helper.df0282ae.js";import{u as S}from"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import{l as N,bi as R,F as f,o as A,$ as U,H as _,L as y,t as w,v as z,V as E,z as b,y as g,aV as D,C as B}from"./index.a86a095a.js";import{s as G}from"./depart.api.b742e74c.js";import{u as H,o as x}from"./depart.data.ff6c9320.js";import"./uniqBy.37746f07.js";import"./index.6aad32b5.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */const L={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},M={class:"j-box-bottom-button-float"},$=B("\u91CD\u7F6E"),q=B("\u4FDD\u5B58"),jt=N({__name:"DepartFormTab",props:{data:{type:Object,default:()=>({})},rootTreeData:{type:Array,default:()=>[]}},emits:["success"],setup(a,{emit:e}){const t=a;R("prefixCls");const p=f(!1),c=f(!0),s=f({}),[u,{resetFields:i,setFieldsValue:r,validate:m,updateSchema:d}]=S({schemas:H().basicFormSchema,showActionButtonGroup:!1}),v=A(()=>{var o;return(o=t==null?void 0:t.data)!=null&&o.parentId?x.child:x.root});U(()=>{d([{field:"parentId",componentProps:{disabled:!0}},{field:"orgCode",componentProps:{disabled:!0}}]),_(()=>t.data,()=>n(this,null,function*(){let o=y(t.data);typeof o!="object"&&(o={}),s.value=o,yield i(),yield r(l({},o))}),{deep:!0,immediate:!0}),_(()=>t.rootTreeData,()=>n(this,null,function*(){d([{field:"parentId",componentProps:{treeData:t.rootTreeData}}])}),{deep:!0,immediate:!0}),_(v,()=>n(this,null,function*(){d([{field:"orgCategory",componentProps:{options:v.value}}])}),{immediate:!0})});function j(){return n(this,null,function*(){yield i(),yield r(l({},s.value))})}function O(){return n(this,null,function*(){try{p.value=!0;let o=yield m();o=Object.assign({},s.value,o),yield G(o,c.value),e("success"),Object.assign(s.value,o)}finally{p.value=!1}})}return(o,J)=>{const h=w("a-button"),V=w("a-spin");return z(),E(V,{spinning:p.value},{default:b(()=>[g(y(P),{onRegister:y(u)},null,8,["onRegister"]),D("div",L,[D("div",M,[g(h,{preIcon:"ant-design:sync-outlined",onClick:j},{default:b(()=>[$]),_:1}),g(h,{type:"primary",preIcon:"ant-design:save-filled",onClick:O},{default:b(()=>[q]),_:1})])])]),_:1},8,["spinning"])}}});export{jt as default};