var de=Object.defineProperty;var J=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var H=(a,u,c)=>u in a?de(a,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[u]=c,Z=(a,u)=>{for(var c in u||(u={}))me.call(u,c)&&H(a,c,u[c]);if(J)for(var c of J(u))fe.call(u,c)&&H(a,c,u[c]);return a};import{d as V,e as C,r as ie,k as F,s as ge,f as r,u as g,E as pe,m as ve,a5 as E,a6 as R,t as K,A as Q,aa as y,F as re,w as ee,V as te,a7 as ne,ab as ae,W as se,a9 as he,ag as we,am as be,q as _e,S as xe}from"./vue-bcbaddf9.js";import{p as v,m as ue,t as T,E as Ce,g as j}from"./index-4b015b65.js";import{x as Le,av as ye,u as ce,aa as Ie,C as Se}from"./jeecg-online-vendor-885afdd4.js";import{aZ as oe,aH as ke,bu as Ae,bv as $e}from"./antd-vue-vendor-a78909e6.js";V({name:"ImagePreview",components:{Image:oe,PreviewGroup:oe.PreviewGroup},props:{functional:v.bool,imageList:{type:Array}},setup(a){const{prefixCls:u}=ue("image-preview"),c=C(()=>{const{imageList:l}=a;return l?l.map(n=>Le(n)?{src:n,placeholder:!1}:n):[]});return{prefixCls:u,getImageList:c}}});const Ne="/assets/resume-8f27866b.svg",Ue="/assets/p-rotate-cb8bbfc3.svg",Oe="/assets/scale-44abde22.svg",Me="/assets/unscale-c552f416.svg",Pe="/assets/unrotate-ef6a2daf.svg";var A=function(a){return a[a.LOADING=0]="LOADING",a[a.DONE=1]="DONE",a[a.FAIL=2]="FAIL",a}(A||{});const Ee={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},h="img-preview",Fe=V({name:"ImagePreview",props:Ee,emits:["img-load","img-error"],setup(a,{expose:u,emit:c}){const l=new Map,n=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:A.LOADING,currentIndex:0,moveX:0,moveY:0,show:a.show}),I=F(null),_=F(null);function S(){o();const{index:e,imageList:s}=a;if(!s||!s.length)throw new Error("imageList is undefined");n.currentIndex=e,x(s[e])}function L(){n.imgScale=1,n.imgRotate=0,n.imgTop=0,n.imgLeft=0}function o(){const e=g(I);e&&(e.onmousewheel=m,document.body.addEventListener("DOMMouseScroll",m),document.ondragstart=function(){return!1})}const d=C(()=>{var s;const e=(s=a==null?void 0:a.scaleStep)!=null?s:0;return(e!=null?e:0>0)?e/100:n.imgScale/10});function m(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&b(d.value),e.delta<0&&b(-d.value)}function b(e){n.imgScale<=.2&&e<0||(n.imgScale+=e)}function p(e){n.imgRotate+=e}function k(){const e=g(_);e&&(e.onmousemove=null)}function x(e){n.status=A.LOADING;const s=new Image;s.src=e,s.onload=f=>{if(n.currentUrl!==e){const w=f.composedPath();if(a.rememberState){l.set(n.currentUrl,{scale:n.imgScale,top:n.imgTop,left:n.imgLeft,rotate:n.imgRotate});const P=l.get(e);P?(n.imgScale=P.scale,n.imgTop=P.top,n.imgRotate=P.rotate,n.imgLeft=P.left):(L(),a.defaultWidth&&(n.imgScale=a.defaultWidth/w[0].naturalWidth))}else a.defaultWidth&&(n.imgScale=a.defaultWidth/w[0].naturalWidth);w&&c("img-load",{index:n.currentIndex,dom:w[0],url:e})}n.currentUrl=e,n.status=A.DONE},s.onerror=f=>{const w=f.composedPath();w&&c("img-error",{index:n.currentIndex,dom:w[0],url:e}),n.status=A.FAIL}}function $(e){e&&e.stopPropagation(),N()}function N(){n.show=!1,document.body.removeEventListener("DOMMouseScroll",m),document.ondragstart=null}function U(){L()}u({resume:U,close:N,prev:O.bind(null,"left"),next:O.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(n.imgScale=e)},setRotate:e=>{n.imgRotate=e}});function O(e){const{currentIndex:s}=n,{imageList:f}=a;e==="left"&&(n.currentIndex--,s<=0&&(n.currentIndex=f.length-1)),e==="right"&&(n.currentIndex++,s>=f.length-1&&(n.currentIndex=0)),x(f[n.currentIndex])}function W(e){e=e||window.event,n.moveX=e.clientX,n.moveY=e.clientY;const s=g(_);s&&(s.onmousemove=X)}function X(e){e=e||window.event,e.preventDefault();const s=e.clientX-n.moveX,f=e.clientY-n.moveY;n.imgLeft+=s,n.imgTop+=f,n.moveX=e.clientX,n.moveY=e.clientY}const G=C(()=>{const{imgScale:e,imgRotate:s,imgTop:f,imgLeft:w}=n;return{transform:`scale(${e}) rotate(${s}deg)`,marginTop:`${f}px`,marginLeft:`${w}px`,maxWidth:a.defaultWidth?"unset":"100%"}}),D=C(()=>{const{imageList:e}=a;return e.length>1});ge(()=>{a.show&&S(),a.imageList&&L()});const M=e=>{a.maskClosable&&e.target&&e.target.classList.contains(`${h}-content`)&&$(e)},B=()=>r("div",{class:`${h}__close`,onClick:$},[r(ke,{class:`${h}__close-icon`},null)]),Y=()=>{if(!g(D))return null;const{currentIndex:e}=n,{imageList:s}=a;return r("div",{class:`${h}__index`},[e+1,pe(" / "),s.length])},t=()=>r("div",{class:`${h}__controller`},[r("div",{class:`${h}__controller-item`,onClick:()=>b(-d.value)},[r("img",{src:Me},null)]),r("div",{class:`${h}__controller-item`,onClick:()=>b(d.value)},[r("img",{src:Oe},null)]),r("div",{class:`${h}__controller-item`,onClick:U},[r("img",{src:Ne},null)]),r("div",{class:`${h}__controller-item`,onClick:()=>p(-90)},[r("img",{src:Pe},null)]),r("div",{class:`${h}__controller-item`,onClick:()=>p(90)},[r("img",{src:Ue},null)])]),i=e=>g(D)?r("div",{class:[`${h}__arrow`,e],onClick:()=>O(e)},[e==="left"?r(Ae,null,null):r($e,null,null)]):null;return()=>n.show&&r("div",{class:h,ref:I,onMouseup:k,onClick:M},[r("div",{class:`${h}-content`},[r("img",{style:g(G),class:[`${h}-image`,n.status===A.DONE?"":"hidden"],ref:_,src:n.currentUrl,onMousedown:W},null),B(),Y(),t(),i("left"),i("right")])])}});let q=null;function Te(a){var l;if(!ye)return;const u={},c=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},a),q=r(Fe,u),ve(q,c),document.body.appendChild(c),(l=q.component)==null?void 0:l.exposed}var z=(a=>(a.all="all",a.image="image",a.file="file",a))(z||{});const De={class:"upload-download-handler"},Be={class:"upload-mover-handler"},Re=V({__name:"UploadItemActions",props:{element:{type:HTMLElement,required:!0},fileList:{type:Object,required:!0},mover:{type:Boolean,required:!0},download:{type:Boolean,required:!0},emitValue:{type:Function,required:!0}},setup(a){const u=a,{createMessage:c}=ce(),l=C(()=>g(u.fileList));function n(){let o=S();if(o===-1){c.warn("移动失败："+o);return}if(o===0){_(o,g(l).length-1);return}_(o,o-1)}function I(){let o=S();if(o===-1){c.warn("移动失败："+o);return}if(o==g(l).length-1){_(o,0);return}_(o,o+1)}function _(o,d){if(o!==d){let m=[...g(l)],b=m[o];m[o]=m[d],m[d]=b,u.emitValue(m.map(p=>p.url).join(","))}}function S(){var d,m;const o=(m=(d=u.element)==null?void 0:d.getElementsByTagName("img")[0])==null?void 0:m.src;if(o){const b=g(l);for(let p=0;p<b.length;p++){let k=b[p].url;const x=o.replace(window.location.origin,"");if(k===x||encodeURI(k)===x)return p}}return-1}function L(){var d,m;const o=(m=(d=u.element)==null?void 0:d.getElementsByTagName("img")[0])==null?void 0:m.src;window.open(o)}return(o,d)=>(E(),R(re,null,[K(y("div",De,[y("a",{class:"download",title:"下载",onClick:L},[r(g(T),{icon:"ant-design:download"})])],512),[[Q,a.download]]),K(y("div",Be,[y("a",{title:"向前移动",onClick:n},[r(g(T),{icon:"ant-design:arrow-left"})]),y("a",{title:"向后移动",onClick:I},[r(g(T),{icon:"ant-design:arrow-right"})])],512),[[Q,a.mover&&l.value.length>1]])],64))}}),Ve={key:0},We={class:"ant-upload-text"},le="ant-upload-list-item",ze=V({__name:"JUpload",props:{value:v.oneOfType([v.string,v.array]),text:v.string.def("上传"),fileType:v.string.def(z.all),bizPath:v.string.def("temp"),returnUrl:v.bool.def(!0),maxCount:v.number.def(0),buttonVisible:v.bool.def(!0),multiple:v.bool.def(!0),mover:v.bool.def(!0),download:v.bool.def(!0),removeConfirm:v.bool.def(!1),beforeUpload:v.func,disabled:v.bool.def(!1)},emits:["change","update:value"],setup(a,{expose:u,emit:c}){const l=a,{createMessage:n,createConfirm:I}=ce(),{prefixCls:_}=ue("j-upload"),S=Ie(),L=ie({"X-Access-Token":Se()}),o=F([]),d=F(!0),m=F(),b=C(()=>l.maxCount>0&&o.value.length>=l.maxCount),p=C(()=>l.fileType===z.image),k=C(()=>{const t=Object.assign({},l,g(S));return t.name="file",t.listType=p.value?"picture-card":"text",t.class=[t.class,{"upload-disabled":l.disabled}],t.data=Z({biz:l.bizPath},t.data),t.beforeUpload||(t.beforeUpload=O),p.value&&!t.accept&&(t.accept="image/*"),t});ee(()=>l.value,t=>{Array.isArray(t)?l.returnUrl?N(t.join(",")):U(t):l.returnUrl?N(t):t&&U(JSON.parse(t))},{immediate:!0}),ee(o,()=>_e(()=>x()),{immediate:!0});function x(){if(!p.value)return;const t=m.value?m.value.getElementsByClassName(le):null;if(!(!t||t.length===0))for(const i of t)i.getAttribute("data-has-actions")==="true"||i.addEventListener("mouseover",$)}function $(t){const e=(()=>{for(const w of t.path){if(w.classList.contains(le))return w;if(w.classList.contains(`${_}-container`))return null}return null})();if(!e)return;const s=e.getElementsByClassName("ant-upload-list-item-actions");if(!s||s.length===0)return;const f=document.createElement("div");f.className="upload-actions-container",xe(Re,{element:e,fileList:o,mover:l.mover,download:l.download,emitValue:M}).mount(f),s[0].appendChild(f),e.setAttribute("data-has-actions","true"),e.removeEventListener("mouseover",$)}function N(t){if(!t||t.length==0){o.value=[];return}let i=[];for(const e of t.split(",")){let s=j(e);i.push({uid:B(),name:Y(e),status:"done",url:s,response:{status:"history",message:e}})}o.value=i}function U(t){if(!t||t.length==0){o.value=[];return}let i=[];for(const e of t){let s=j(e.filePath);i.push({uid:B(),name:e.fileName,url:s,status:"done",response:{status:"history",message:e.filePath}})}o.value=i}function O(t){return d.value=!0,p.value&&t.type.indexOf("image")<0?(n.warning("请上传图片"),d.value=!1,!1):typeof l.beforeUpload=="function"?l.beforeUpload(t):!0}function W(){return l.removeConfirm?new Promise(t=>{I({title:"删除",content:`确定要删除这${p.value?"张图片":"个文件"}吗？`,iconType:"warning",onOk:()=>t(!0),onCancel:()=>t(!1)})}):!0}function X(t){!t.file.status&&d.value===!1&&t.fileList.pop();let i=t.fileList;if(l.maxCount>0&&i.length>=l.maxCount)if(l.maxCount-i.length>=0)i=i.slice(-l.maxCount);else return;if(t.file.status==="done"){let e=[];t.file.response.success?e=i.map(s=>{if(s.response){let f=s.response.message;s.url=j(f)}return s}):(e=i.filter(s=>s.uid!=t.file.uid),n.error(`${t.file.name} 上传失败.`)),i=e}else t.file.status==="error"&&n.error(`${t.file.name} 上传失败.`);if(o.value=i,t.file.status==="done"||t.file.status==="removed")if(l.returnUrl)G();else{let e=[];for(const s of i)if(s.status==="done"){let f={fileName:s.name,filePath:s.response.message,fileSize:s.size};e.push(f)}else return;M(e)}}function G(){let t=o.value,i="";(!t||t.length==0)&&(i="");let e=[];for(const s of t)if(s.status==="done")e.push(s.response.message);else return;e.length>0&&(i=e.join(",")),M(i)}function D(t){p.value?Te({imageList:[t.url],maskClosable:!0}):window.open(t.url)}function M(t){c("change",t),c("update:value",t)}function B(){return"-"+parseInt(Math.random()*1e4+1,10)}function Y(t){if(t.lastIndexOf("\\")>=0){let i=new RegExp("\\\\","g");t=t.replace(i,"/")}return t.substring(t.lastIndexOf("/")+1)}return u({addActionsListener:x}),(t,i)=>{const e=te("a-button"),s=te("a-upload");return E(),R("div",{ref_key:"containerRef",ref:m,class:be(`${g(_)}-container`)},[r(s,we({headers:L,multiple:a.multiple,action:g(Ce),fileList:o.value,disabled:a.disabled},k.value,{onRemove:W,onChange:X,onPreview:D}),{default:ne(()=>[p.value?(E(),R(re,{key:0},[b.value?se("",!0):(E(),R("div",Ve,[r(g(T),{icon:"ant-design:plus-outlined"}),y("div",We,ae(a.text),1)]))],64)):a.buttonVisible?(E(),he(e,{key:1,disabled:b.value||a.disabled},{default:ne(()=>[r(g(T),{icon:"ant-design:upload-outlined"}),y("span",null,ae(a.text),1)]),_:1},8,["disabled"])):se("",!0)]),_:1},16,["headers","multiple","action","fileList","disabled"])],2)}}});export{z as U,ze as _,Te as c};