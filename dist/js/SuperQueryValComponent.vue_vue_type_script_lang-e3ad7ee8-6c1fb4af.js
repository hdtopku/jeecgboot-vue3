import{c as E}from"./componentMap-b7e1d2b2.js";import{S}from"./jeecg-online-vendor-885afdd4.js";import{D as V}from"./lodash-es-vendor-9b741fb8.js";import{d as x,e as h,f as v,u as f}from"./vue-bcbaddf9.js";var N=Object.defineProperty,A=Object.defineProperties,D=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&O(e,r,t[r]);if(y)for(var r of y(t))G.call(t,r)&&O(e,r,t[r]);return e},Q=(e,t)=>A(e,D(t));const z=x({name:"OnlineSuperQueryValComponent",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null}},emits:["submit"],setup(e,{emit:t}){const r=h(()=>{var n;const{schema:o,formModel:u}=e;let{componentProps:a={}}=o;return S(a)&&(a=(n=a({schema:o,formModel:u}))!=null?n:{}),a}),g=h(()=>{const{formModel:n,schema:o}=e;return{field:o.field,model:n,values:c({},n),schema:o}});function P(){var n;const{component:o,changeEvent:u="change",valueField:a}=e.schema,m="val",b=o&&["Switch","Checkbox"].includes(o),p=`on${V(u)}`,w={[p]:(...s)=>{const[i]=s;l[p]&&l[p](...s);const d=i?i.target:null,k=d?b?d.checked:d.value:i;e.setFormModel(m,k)}},C=E.get(o),l=c({allowClear:!0,getPopupContainer:s=>s.parentNode},f(r));!l.disabled&&o!=="RangePicker"&&o&&(l.placeholder=((n=f(r))==null?void 0:n.placeholder)||j(o)+e.schema.label),l.codeField=m,l.formValues=f(g);const M={[a||(b?"checked":"value")]:e.formModel[m]},F=Q(c(c(c({},l),w),M),{allowClear:!0,onPressEnter(){t("submit")}});return v(C,F,null)}return()=>v("div",{style:"width:100%"},[P()]);function j(n){return n.includes("Input")||n.includes("Complete")?"请输入":"请选择"}}});export{z as G};