import{Q as P,b as j}from"./jeecg-online-vendor-885afdd4.js";import{B as q}from"./index-9d0047d3.js";import{B as z}from"./index-4b015b65.js";import"./componentMap-b7e1d2b2.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import{aD as H,Y as Q}from"./antd-vue-vendor-a78909e6.js";import{Q as U}from"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import"./cron-parser-vendor-658b8fec.js";import{d as Y,k as g,r as G,V as p,a5 as M,a9 as T,a7 as m,f as v,E as b,aa as I,an as Z,W as $}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./echarts-vendor-6c8e2159.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";var E=(a,f,s)=>new Promise((C,h)=>{var w=i=>{try{d(s.next(i))}catch(l){h(l)}},x=i=>{try{d(s.throw(i))}catch(l){h(l)}},d=i=>i.done?C(i.value):Promise.resolve(i.value).then(w,x);d((s=s.apply(a,f)).next())});const X=Y({name:"CodeFileViewModal",components:{BasicModal:q,InfoCircleTwoTone:H,JCodeEditor:U},emits:["download","register","close"],setup(a,{emit:f}){const s=g([]),C=g(""),h=g([]),w=g(!1),x=window.innerHeight-160,d=g("java"),i=g("");let l=G({});const[_,{closeModal:V}]=z(e=>E(this,null,function*(){l=G({}),i.value="",s.value=e.codeList,C.value=e.pathKey,y(),w.value=!0}));function y(){let e=K(),n=e[0];k(n,e);let o=[];const t=function(c){if(c.children){let r=c.children;r.length==1?t(r[0]):r.length>1&&o.push(c)}};t(n),h.value=o,setTimeout(()=>{D(n)},300)}function D(e){return E(this,null,function*(){const n=function(t){if(t.isLeaf===!0)return t;if(t.children)return n(t.children[0])};let o=n(e);if(o&&o.isLeaf===!0){let t=o.path;l[t]||(yield S(t)),d.value=F(t),i.value=l[t]}})}function k(e,n){for(let o of n)e.key==o.pid&&(e.children||(e.children=[]),e.children.push(o),k(o,n))}function N(e,n){let o=0,t="";for(;o<=n;)t+=e[o],o++;return t}function K(){let e=[],n=[],o=s.value;for(let t of o){let c=t.replace(new RegExp("\\\\","g"),"/").replace("生成成功：","").trim();if(c){let r=c.split("/");for(let u=0;u<r.length;u++){let L=r[u],R=N(r,u);if(L){let B={title:L,key:R};if(L!=0){let W=N(r,u-1);W&&(B.pid=W)}u==r.length-1&&(B.isLeaf=!0,B.path=c),(n.indexOf(R)<0||u==r.length-1)&&(e.push(B),n.push(R))}}}}return e}function A(){V(),f("close")}function J(){f("download")}function F(e){return e.endsWith("xml")?"application/xml":e.endsWith("sql")?"text/x-sql":e.endsWith("vue")?"text/x-vue":e.endsWith("ts")?"text/typescript":"text/x-java"}function O(e,n){return E(this,null,function*(){let o=n.node.dataRef;if(o.isLeaf){let t=o.path;l[t]||(yield S(t)),d.value=F(t),i.value=l[t]}})}function S(e){return new Promise(n=>{let o={path:encodeURI(e),pathKey:C.value};j.get({url:"/online/cgform/api/codeView",params:o},{isTransformResponse:!1}).then(t=>{if(!t||t.size===0){Q.warning("文件下载失败");return}let c=new Blob([t]),r=new FileReader;r.readAsText(c,"utf8"),r.onload=function(){let u=this.result;l[e]=u,n(1)}})})}return{registerModal:_,codeList:s,onDownloadGenerateCode:J,handleClose:A,treeData:h,showCodeContent:O,activeCodeContent:i,expandStatus:w,height:x,language:d}}});function ee(a,f,s,C,h,w){const x=p("info-circle-two-tone"),d=p("a-directory-tree"),i=p("a-col"),l=p("JCodeEditor"),_=p("a-empty"),V=p("a-row"),y=p("a-button"),D=p("BasicModal");return M(),T(D,{onRegister:a.registerModal,okText:"",cancelText:"关闭",width:1200,defaultFullscreen:!0,canFullscreen:!1,onOk:a.onDownloadGenerateCode},{title:m(()=>[v(x),b(" 代码在线预览 ")]),footer:m(()=>[v(y,{onClick:a.handleClose},{default:m(()=>[b("关闭")]),_:1},8,["onClick"]),v(y,{type:"primary",onClick:a.onDownloadGenerateCode},{default:m(()=>[b("下载到本地")]),_:1},8,["onClick"])]),default:m(()=>[I("div",null,[v(V,null,{default:m(()=>[v(i,{span:6,gutter:3,style:{"border-right":"1px solid #eee"}},{default:m(()=>[I("div",{style:Z({height:a.height+"px",overflowY:"auto"})},[a.treeData.length?(M(),T(d,{key:0,defaultExpandAll:!0,"tree-data":a.treeData,onSelect:a.showCodeContent},null,8,["tree-data","onSelect"])):$("",!0)],4)]),_:1}),v(i,{span:18,gutter:3},{default:m(()=>[a.activeCodeContent?(M(),T(l,{key:0,value:a.activeCodeContent,"onUpdate:value":f[0]||(f[0]=k=>a.activeCodeContent=k),theme:"idea",language:a.language,fullScreen:!1,lineNumbers:!0,height:a.height+"px","language-change":!0},null,8,["value","language","height"])):(M(),T(_,{key:1,style:{"margin-top":"50px"},description:"请选择左侧文件，显示详细代码"}))]),_:1})]),_:1})])]),_:1},8,["onRegister","onOk"])}const Ge=P(X,[["render",ee]]);export{Ge as default};