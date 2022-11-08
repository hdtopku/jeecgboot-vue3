import{y as e,av as t,l as n,F as a,a8 as o,bH as l,f0 as i,a1 as r,dn as s,t as c,v as u,V as d,z as f,C as h,aW as p,Y as g,W as v}from"./index.435ab247.js";import{B as m}from"./index.e1e06dd6.js";import"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import{k as y}from"./JAddInput.8c125e2c.js";var w={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm32 588c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",fill:t}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",fill:e}}]}},name:"info-circle",theme:"twotone"};function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){x(e,t,n[t])}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(n,a){var o=C({},n,a.attrs);return e(t,C({},o,{icon:w}),null)};b.displayName="InfoCircleTwoTone",b.inheritAttrs=!1;var j=b,k=(e,t,n)=>new Promise(((a,o)=>{var l=e=>{try{r(n.next(e))}catch(t){o(t)}},i=e=>{try{r(n.throw(e))}catch(t){o(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,i);r((n=n.apply(e,t)).next())}));var O=i(n({name:"CodeFileViewModal",components:{BasicModal:m,InfoCircleTwoTone:j,JCodeEditor:y},emits:["download","register","close"],setup(e,{emit:t}){const n=a([]),i=a(""),c=a([]),u=a(!1),d=window.innerHeight-160,f=a("java"),h=a("");let p=o({});const[g,{closeModal:v}]=l((e=>k(this,null,(function*(){p=o({}),h.value="",n.value=e.codeList,i.value=e.pathKey,function(){let e=function(){let e=[],t=[],a=n.value;for(let n of a){let a=n.replace(new RegExp("\\\\","g"),"/").replace("生成成功：","").trim();if(a){let n=a.split("/");for(let o=0;o<n.length;o++){let l=n[o],i=y(n,o);if(l){let r={title:l,key:i};if(0==l);else{let e=y(n,o-1);e&&(r.pid=e)}o==n.length-1&&(r.isLeaf=!0,r.path=a),(t.indexOf(i)<0||o==n.length-1)&&(e.push(r),t.push(i))}}}}return e}(),t=e[0];m(t,e);let a=[];const o=function(e){if(e.children){let t=e.children;1==t.length?o(t[0]):t.length>1&&a.push(e)}};o(t),c.value=a,setTimeout((()=>{!function(e){k(this,null,(function*(){const t=function(e){return!0===e.isLeaf?e:e.children?t(e.children[0]):void 0};let n=t(e);if(n&&!0===n.isLeaf){let e=n.path;p[e]||(yield C(e)),f.value=w(e),h.value=p[e]}}))}(t)}),300)}(),u.value=!0}))));function m(e,t){for(let n of t)if(e.key==n.pid){e.children||(e.children=[]),e.children.push(n),m(n,t)}}function y(e,t){let n=0,a="";for(;n<=t;)a+=e[n],n++;return a}function w(e){return e.endsWith("xml")?"application/xml":e.endsWith("sql")?"text/x-sql":e.endsWith("vue")?"text/x-vue":e.endsWith("ts")?"text/typescript":"text/x-java"}function C(e){return new Promise((t=>{let n={path:encodeURI(e),pathKey:i.value};r.get({url:"/online/cgform/api/codeView",params:n},{isTransformResponse:!1}).then((n=>{if(!n||0===n.size)return void s.warning("文件下载失败");let a=new Blob([n]),o=new FileReader;o.readAsText(a,"utf8"),o.onload=function(){let n=this.result;p[e]=n,t(1)}}))}))}return{registerModal:g,codeList:n,onDownloadGenerateCode:function(){t("download")},handleClose:function(){v(),t("close")},treeData:c,showCodeContent:function(e,t){return k(this,null,(function*(){let e=t.node.dataRef;if(e.isLeaf){let t=e.path;p[t]||(yield C(t)),f.value=w(t),h.value=p[t]}}))},activeCodeContent:h,expandStatus:u,height:d,language:f}}}),[["render",function(t,n,a,o,l,i){const r=c("info-circle-two-tone"),s=c("a-directory-tree"),m=c("a-col"),y=c("JCodeEditor"),w=c("a-empty"),C=c("a-row"),x=c("a-button"),b=c("BasicModal");return u(),d(b,{onRegister:t.registerModal,okText:"",cancelText:"关闭",width:1200,defaultFullscreen:!0,canFullscreen:!1,onOk:t.onDownloadGenerateCode},{title:f((()=>[e(r),h(" 代码在线预览 ")])),footer:f((()=>[e(x,{onClick:t.handleClose},{default:f((()=>[h("关闭")])),_:1},8,["onClick"]),e(x,{type:"primary",onClick:t.onDownloadGenerateCode},{default:f((()=>[h("下载到本地")])),_:1},8,["onClick"])])),default:f((()=>[p("div",null,[e(C,null,{default:f((()=>[e(m,{span:6,gutter:3,style:{"border-right":"1px solid #eee"}},{default:f((()=>[p("div",{style:g({height:t.height+"px",overflowY:"auto"})},[t.treeData.length?(u(),d(s,{key:0,defaultExpandAll:!0,"tree-data":t.treeData,onSelect:t.showCodeContent},null,8,["tree-data","onSelect"])):v("",!0)],4)])),_:1}),e(m,{span:18,gutter:3},{default:f((()=>[t.activeCodeContent?(u(),d(y,{key:0,value:t.activeCodeContent,"onUpdate:value":n[0]||(n[0]=e=>t.activeCodeContent=e),theme:"idea",language:t.language,fullScreen:!1,lineNumbers:!0,height:t.height+"px","language-change":!0},null,8,["value","language","height"])):(u(),d(w,{key:1,style:{"margin-top":"50px"},description:"请选择左侧文件，显示详细代码"}))])),_:1})])),_:1})])])),_:1},8,["onRegister","onOk"])}]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{O as C,j as I,z as a};