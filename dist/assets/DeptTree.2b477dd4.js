var p=(o,s,e)=>new Promise((n,a)=>{var r=t=>{try{i(e.next(t))}catch(l){a(l)}},c=t=>{try{i(e.throw(t))}catch(l){a(l)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(r,c);i((e=e.apply(o,s)).next())});import{_ as m}from"./index.0991c9be.js";import{a as d}from"./system.d707faa9.js";import{j as f,C as u,X as _,q as h,r as D,s as T,t as v,v as B}from"./index.9d4ffdff.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";const $=f({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(o,{emit:s}){const e=u([]);function n(){return p(this,null,function*(){e.value=yield d()})}function a(r){s("select",r[0])}return _(()=>{n()}),{treeData:e,handleSelect:a}}}),k={class:"m-4 mr-0 overflow-hidden bg-white"};function w(o,s,e,n,a,r){const c=D("BasicTree");return T(),v("div",k,[B(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}const y=h($,[["render",w]]);export{y as default};