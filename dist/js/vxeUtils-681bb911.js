var y=(e,u,t)=>new Promise((r,o)=>{var n=a=>{try{i(t.next(a))}catch(l){o(l)}},s=a=>{try{i(t.throw(a))}catch(l){o(l)}},i=a=>a.done?r(a.value):Promise.resolve(a.value).then(n,s);i((t=t.apply(e,u)).next())});import{aG as c}from"./jeecg-online-vendor-bf2efbcb.js";import"./antd-vue-vendor-1561c1ba.js";import"./vue-c7e3516e.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";const F=Symbol();function h(e,u,t,r,o){return y(this,null,function*(){if(!(e&&typeof e=="function"))throw`validate \u53C2\u6570\u9700\u8981\u7684\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u800C\u4F20\u5165\u7684\u5374\u662F${typeof e}`;let n={},s=yield new Promise((a,l)=>{e().then(()=>{for(let f in u)u[f]instanceof Array&&c(r,f)==="string"&&(u[f]=u[f].join(","));a(u)}).catch(()=>{l({error:F})})});Object.assign(n,{formValue:s});let i=yield v(t,o);return n=Object.assign(n,{tablesValue:i}),n})}function v(e,u=!0){if(!(e instanceof Array))throw`'validateTables'\u51FD\u6570\u7684'cases'\u53C2\u6570\u9700\u8981\u7684\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u800C\u4F20\u5165\u7684\u5374\u662F${typeof e}`;return new Promise((t,r)=>{let o=[],n=0;(!e||e.length===0)&&t(o),function s(){let i=e[n];i.value.validateTable().then(a=>{if(!a)o[n]={tableData:i.value.getTableData()},++n===e.length?t(o):s();else{let l,f=b(i.value,"ATabPane");if(f&&(l=f.$.vnode.key,u)){let p=b(f,"Tabs");p&&p.setActiveKey&&p.setActiveKey(l)}r({error:F,index:n,paneKey:l,errMap:a})}})}()})}function b(e,u){let t=e.$parent;if(t&&t.$options){if(t.$options.name===u)return t;{let r=b(t,u);if(r)return r}}return null}export{F as VALIDATE_FAILED,b as getVmParentByName,h as validateFormModelAndTables,v as validateTables};