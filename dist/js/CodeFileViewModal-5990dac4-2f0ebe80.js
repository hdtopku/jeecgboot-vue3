import{Q as P,b as j}from"./jeecg-online-vendor-ecddc31b.js";import{B as q}from"./index-cd2db611.js";import{B as z}from"./index-b03d7914.js";import"./componentMap-bab84cb7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import{aD as H,Y as Q}from"./antd-vue-vendor-a78909e6.js";import{Q as U}from"./JAddInput-903fbbea.js";import"./JSelectUser-14c3fad5.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import"./cron-parser-vendor-d9194a40.js";import{d as Y,k as g,r as G,V as p,a5 as M,a9 as T,a7 as m,f as v,E as b,aa as I,an as Z,W as $}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-951c06ee.js";import"./useWindowSizeFn-13ef0f26.js";import"./echarts-vendor-6c8e2159.js";import"./useFormItem-4b66c33c.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./index-5ded5f19.js";import"./areaDataUtil-661e31ab.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";var E=(a,f,s)=>new Promise((C,h)=>{var w=i=>{try{d(s.next(i))}catch(l){h(l)}},x=i=>{try{d(s.throw(i))}catch(l){h(l)}},d=i=>i.done?C(i.value):Promise.resolve(i.value).then(w,x);d((s=s.apply(a,f)).next())});const X=Y({name:"CodeFileViewModal",components:{BasicModal:q,InfoCircleTwoTone:H,JCodeEditor:U},emits:["download","register","close"],setup(a,{emit:f}){const s=g([]),C=g(""),h=g([]),w=g(!1),x=window.innerHeight-160,d=g("java"),i=g("");let l=G({});const[_,{closeModal:V}]=z(e=>E(this,null,function*(){l=G({}),i.value="",s.value=e.codeList,C.value=e.pathKey,y(),w.value=!0}));function y(){let e=K(),n=e[0];k(n,e);let o=[];const t=function(c){if(c.children){let r=c.children;r.length==1?t(r[0]):r.length>1&&o.push(c)}};t(n),h.value=o,setTimeout(()=>{D(n)},300)}function D(e){return E(this,null,function*(){const n=function(t){if(t.isLeaf===!0)return t;if(t.children)return n(t.children[0])};let o=n(e);if(o&&o.isLeaf===!0){let t=o.path;l[t]||(yield S(t)),d.value=F(t),i.value=l[t]}})}function k(e,n){for(let o of n)e.key==o.pid&&(e.children||(e.children=[]),e.children.push(o),k(o,n))}function N(e,n){let o=0,t="";for(;o<=n;)t+=e[o],o++;return t}function K(){let e=[],n=[],o=s.value;for(let t of o){let c=t.replace(new RegExp("\\\\","g"),"/").replace("生成成功：","").trim();if(c){let r=c.split("/");for(let u=0;u<r.length;u++){let L=r[u],R=N(r,u);if(L){let B={title:L,key:R};if(L!=0){let W=N(r,u-1);W&&(B.pid=W)}u==r.length-1&&(B.isLeaf=!0,B.path=c),(n.indexOf(R)<0||u==r.length-1)&&(e.push(B),n.push(R))}}}}return e}function A(){V(),f("close")}function J(){f("download")}function F(e){return e.endsWith("xml")?"application/xml":e.endsWith("sql")?"text/x-sql":e.endsWith("vue")?"text/x-vue":e.endsWith("ts")?"text/typescript":"text/x-java"}function O(e,n){return E(this,null,function*(){let o=n.node.dataRef;if(o.isLeaf){let t=o.path;l[t]||(yield S(t)),d.value=F(t),i.value=l[t]}})}function S(e){return new Promise(n=>{let o={path:encodeURI(e),pathKey:C.value};j.get({url:"/online/cgform/api/codeView",params:o},{isTransformResponse:!1}).then(t=>{if(!t||t.size===0){Q.warning("文件下载失败");return}let c=new Blob([t]),r=new FileReader;r.readAsText(c,"utf8"),r.onload=function(){let u=this.result;l[e]=u,n(1)}})})}return{registerModal:_,codeList:s,onDownloadGenerateCode:J,handleClose:A,treeData:h,showCodeContent:O,activeCodeContent:i,expandStatus:w,height:x,language:d}}});function ee(a,f,s,C,h,w){const x=p("info-circle-two-tone"),d=p("a-directory-tree"),i=p("a-col"),l=p("JCodeEditor"),_=p("a-empty"),V=p("a-row"),y=p("a-button"),D=p("BasicModal");return M(),T(D,{onRegister:a.registerModal,okText:"",cancelText:"关闭",width:1200,defaultFullscreen:!0,canFullscreen:!1,onOk:a.onDownloadGenerateCode},{title:m(()=>[v(x),b(" 代码在线预览 ")]),footer:m(()=>[v(y,{onClick:a.handleClose},{default:m(()=>[b("关闭")]),_:1},8,["onClick"]),v(y,{type:"primary",onClick:a.onDownloadGenerateCode},{default:m(()=>[b("下载到本地")]),_:1},8,["onClick"])]),default:m(()=>[I("div",null,[v(V,null,{default:m(()=>[v(i,{span:6,gutter:3,style:{"border-right":"1px solid #eee"}},{default:m(()=>[I("div",{style:Z({height:a.height+"px",overflowY:"auto"})},[a.treeData.length?(M(),T(d,{key:0,defaultExpandAll:!0,"tree-data":a.treeData,onSelect:a.showCodeContent},null,8,["tree-data","onSelect"])):$("",!0)],4)]),_:1}),v(i,{span:18,gutter:3},{default:m(()=>[a.activeCodeContent?(M(),T(l,{key:0,value:a.activeCodeContent,"onUpdate:value":f[0]||(f[0]=k=>a.activeCodeContent=k),theme:"idea",language:a.language,fullScreen:!1,lineNumbers:!0,height:a.height+"px","language-change":!0},null,8,["value","language","height"])):(M(),T(_,{key:1,style:{"margin-top":"50px"},description:"请选择左侧文件，显示详细代码"}))]),_:1})]),_:1})])]),_:1},8,["onRegister","onOk"])}const Ge=P(X,[["render",ee]]);export{Ge as default};