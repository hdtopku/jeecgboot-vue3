var h=(d,i,l)=>new Promise((s,m)=>{var f=t=>{try{n(l.next(t))}catch(o){m(o)}},e=t=>{try{n(l.throw(t))}catch(o){m(o)}},n=t=>t.done?s(t.value):Promise.resolve(t.value).then(f,e);n((l=l.apply(d,i)).next())});import{F as g,a1 as b,L as p}from"./index.6c1aeca2.js";import{validateFormModelAndTables as F,VALIDATE_FAILED as w}from"./vxeUtils.55606bfb.js";function L(d,i,l,s,m,f){const e=g();function n(r,a,c,D){c.loading=!0,b.get({url:r,params:a},{isTransformResponse:!1}).then(y=>{let{result:v}=y;y.success&&v&&(Array.isArray(v)?c.dataSource=v:Array.isArray(v.records)&&(c.dataSource=v.records)),typeof D=="function"&&D(y)}).finally(()=>{c.loading=!1})}function t(r){var a,c;(c=(a=l[r])==null?void 0:a.value)==null||c.resetScrollTop(0)}function o(){let r=Object.values(l);return Promise.all(r)}function A(){o().then(r=>{let a=e.value.getFieldsValue();return F(e.value.validate,a,r,e.value.getProps)}).then(r=>f&&typeof f=="function"?f(r):u(r)).then(r=>{if(typeof i!="function")throw T("classifyIntoFormData");let a=i(r);return d(a)}).catch(r=>{r.error===w?s.value=r.index==null?p(s):m.value[r.index]:console.error(r)})}function u(r){return new Promise(a=>{a(r)})}function T(r){return`${r} \u672A\u5B9A\u4E49\u6216\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570`}return[t,A,n,e]}function P(d,i){function l(){return h(this,null,function*(){let e={},n=Object.keys(i),t="";for(let o=0;o<n.length;o++){t=n[o];let A=i[t].value;if(A.isForm){let u=yield f(A,t);u&&(e[t+"List"]=[u])}else{let u=yield m(A,t);u&&u.length>0&&(e[t+"List"]=u)}}return e})}function s(e){return e&&Object.keys(e).map(n=>{e[n]instanceof Array&&(e[n]=e[n].join(","))}),e}function m(e,n){return h(this,null,function*(){return(yield e.validateTable())?(d.value=n,e.resetScrollTop(0),Promise.reject(1)):e.getTableData()})}function f(e,n){return h(this,null,function*(){try{let t=yield e.getFormData();return s(t),t}catch(t){return d.value=n,Promise.reject(t)}})}return{getSubFormAndTableData:l,transformData:s}}export{L as useJvxeMethod,P as useValidateAntFormAndTable};