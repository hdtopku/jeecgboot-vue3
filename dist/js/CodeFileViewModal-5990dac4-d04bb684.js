import{d as O,l as g,r as W,V as u,a7 as B,ac as M,aa as m,f as v,E as b,ad as G,aq as P,W as j}from"./vue-50733b77.js";import{ap as z,bB as H}from"./jeecg-online-vendor-d3e1865b.js";import{B as U}from"./index-f7d688aa.js";import{dr as Q,c as Y}from"./antd-vue-vendor-c5335947.js";import"./index-7e7a94e9.js";import{Q as Z}from"./JAddInput-9c2385b5.js";import{E as $}from"./index-b34ff7bc.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./useForm-14ceb529.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./JSelectDept-0fd43050.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./areaDataUtil-5dfcdadb.js";import"./index-95220aa0.js";import"./depart.api-1967d2cb.js";var D=(i,f,s)=>new Promise((C,h)=>{var w=r=>{try{d(s.next(r))}catch(l){h(l)}},x=r=>{try{d(s.throw(r))}catch(l){h(l)}},d=r=>r.done?C(r.value):Promise.resolve(r.value).then(w,x);d((s=s.apply(i,f)).next())});const X=O({name:"CodeFileViewModal",components:{BasicModal:U,InfoCircleTwoTone:Q,JCodeEditor:Z},emits:["download","register","close"],setup(i,{emit:f}){const s=g([]),C=g(""),h=g([]),w=g(!1),x=window.innerHeight-160,d=g("java"),r=g("");let l=W({});const[_,{closeModal:V}]=$(e=>D(this,null,function*(){l=W({}),r.value="",s.value=e.codeList,C.value=e.pathKey,y(),w.value=!0}));function y(){let e=q(),n=e[0];k(n,e);let o=[];const t=function(p){if(p.children){let a=p.children;a.length==1?t(a[0]):a.length>1&&o.push(p)}};t(n),h.value=o,setTimeout(()=>{E(n)},300)}function E(e){return D(this,null,function*(){const n=function(t){if(t.isLeaf===!0)return t;if(t.children)return n(t.children[0])};let o=n(e);if(o&&o.isLeaf===!0){let t=o.path;l[t]||(yield I(t)),d.value=F(t),r.value=l[t]}})}function k(e,n){for(let o of n)e.key==o.pid&&(e.children||(e.children=[]),e.children.push(o),k(o,n))}function N(e,n){let o=0,t="";for(;o<=n;)t+=e[o],o++;return t}function q(){let e=[],n=[],o=s.value;for(let t of o){let p=t.replace(new RegExp("\\\\","g"),"/").replace("生成成功：","").trim();if(p){let a=p.split("/");for(let c=0;c<a.length;c++){let L=a[c],R=N(a,c);if(L){let T={title:L,key:R};if(L!=0){let S=N(a,c-1);S&&(T.pid=S)}c==a.length-1&&(T.isLeaf=!0,T.path=p),(n.indexOf(R)<0||c==a.length-1)&&(e.push(T),n.push(R))}}}}return e}function A(){V(),f("close")}function J(){f("download")}function F(e){return e.endsWith("xml")?"application/xml":e.endsWith("sql")?"text/x-sql":e.endsWith("vue")?"text/x-vue":e.endsWith("ts")?"text/typescript":"text/x-java"}function K(e,n){return D(this,null,function*(){let o=n.node.dataRef;if(o.isLeaf){let t=o.path;l[t]||(yield I(t)),d.value=F(t),r.value=l[t]}})}function I(e){return new Promise(n=>{let o={path:encodeURI(e),pathKey:C.value};z.get({url:"/online/cgform/api/codeView",params:o},{isTransformResponse:!1}).then(t=>{if(!t||t.size===0){Y.warning("文件下载失败");return}let p=new Blob([t]),a=new FileReader;a.readAsText(p,"utf8"),a.onload=function(){let c=this.result;l[e]=c,n(1)}})})}return{registerModal:_,codeList:s,onDownloadGenerateCode:J,handleClose:A,treeData:h,showCodeContent:K,activeCodeContent:r,expandStatus:w,height:x,language:d}}});function ee(i,f,s,C,h,w){const x=u("info-circle-two-tone"),d=u("a-directory-tree"),r=u("a-col"),l=u("JCodeEditor"),_=u("a-empty"),V=u("a-row"),y=u("a-button"),E=u("BasicModal");return B(),M(E,{onRegister:i.registerModal,okText:"",cancelText:"关闭",width:1200,defaultFullscreen:!0,canFullscreen:!1,onOk:i.onDownloadGenerateCode},{title:m(()=>[v(x),b(" 代码在线预览 ")]),footer:m(()=>[v(y,{onClick:i.handleClose},{default:m(()=>[b("关闭")]),_:1},8,["onClick"]),v(y,{type:"primary",onClick:i.onDownloadGenerateCode},{default:m(()=>[b("下载到本地")]),_:1},8,["onClick"])]),default:m(()=>[G("div",null,[v(V,null,{default:m(()=>[v(r,{span:6,gutter:3,style:{"border-right":"1px solid #eee"}},{default:m(()=>[G("div",{style:P({height:i.height+"px",overflowY:"auto"})},[i.treeData.length?(B(),M(d,{key:0,defaultExpandAll:!0,"tree-data":i.treeData,onSelect:i.showCodeContent},null,8,["tree-data","onSelect"])):j("",!0)],4)]),_:1}),v(r,{span:18,gutter:3},{default:m(()=>[i.activeCodeContent?(B(),M(l,{key:0,value:i.activeCodeContent,"onUpdate:value":f[0]||(f[0]=k=>i.activeCodeContent=k),theme:"idea",language:i.language,fullScreen:!1,lineNumbers:!0,height:i.height+"px","language-change":!0},null,8,["value","language","height"])):(B(),M(_,{key:1,style:{"margin-top":"50px"},description:"请选择左侧文件，显示详细代码"}))]),_:1})]),_:1})])]),_:1},8,["onRegister","onOk"])}const Ke=H(X,[["render",ee]]);export{Ke as default};