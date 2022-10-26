var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Q=(e,o,s)=>o in e?de(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,m=(e,o)=>{for(var s in o||(o={}))we.call(o,s)&&Q(e,s,o[s]);if(U)for(var s of U(o))he.call(o,s)&&Q(e,s,o[s]);return e},H=(e,o)=>fe(e,ge(o));var W=(e,o,s)=>new Promise((c,l)=>{var p=i=>{try{n(s.next(i))}catch(u){l(u)}},t=i=>{try{n(s.throw(i))}catch(u){l(u)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(p,t);n((s=s.apply(e,o)).next())});import{s as K,l as E,n as M,o as w,q,t as C,v as f,x as B,av as ye,X as g,V as S,z as h,C as j,D as O,B as _,W as P,E as b,Y as x,be as De,dL as me,aL as R,aU as X,y as N,dM as Ce,b4 as ve,F as v,bw as be,c5 as Y,L as a,ab as $,N as ke,H as Z,Q as ee,a6 as F,aO as te,aT as $e,bi as G,R as Be,ba as Pe,bj as Se,bk as Te,a7 as se,aa as Oe,aj as oe,bT as _e,bV as ne,a9 as Fe,Z as Le}from"./index.6c1aeca2.js";const{t:J}=K(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:J("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:J("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Ve=m({class:{type:[String,Object,Array]},isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re);const He=E({name:"BasicDrawerFooter",props:H(m({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:s}=M("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:t}});function l(){o("ok")}function p(){o("close")}return{handleOk:l,prefixCls:s,handleClose:p,getStyle:c}}});function Re(e,o,s,c,l,p){const t=C("a-button");return e.showFooter||e.$slots.footer?(f(),B("div",{key:0,class:b(e.prefixCls),style:x(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),B(ye,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),S(t,_({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[j(O(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),S(t,_({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[j(O(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}var je=q(He,[["render",Re]]);const Ne=E({name:"BasicDrawerHeader",components:{BasicTitle:De,ArrowLeftOutlined:me},props:{isDetail:R.bool,showDetailBack:R.bool,title:R.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:s}=M("basic-drawer-header");function c(){o("close")}return{prefixCls:s,handleClose:c}}}),Ae={key:1};function Ee(e,o,s,c,l,p){const t=C("BasicTitle"),n=C("ArrowLeftOutlined");return e.isDetail?(f(),B("div",{key:1,class:b([e.prefixCls,`${e.prefixCls}--detail`])},[X("span",{class:b(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),B("span",{key:0,onClick:o[0]||(o[0]=(...i)=>e.handleClose&&e.handleClose(...i))},[N(n,{class:b(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(f(),B("span",Ae,O(e.title),1)):P("",!0)],2),X("span",{class:b(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),S(t,{key:0,class:b(e.prefixCls)},{default:h(()=>[g(e.$slots,"title"),j(" "+O(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Me=q(Ne,[["render",Ee]]);const qe=E({components:{Drawer:Ce,ScrollContainer:ve,DrawerFooter:je,DrawerHeader:Me},inheritAttrs:!1,props:Ve,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const s=v(!1),c=be(),l=v(null),{t:p}=K(),{prefixVar:t,prefixCls:n}=M("basic-drawer"),i={setDrawerProps:ce,emitVisible:void 0},u=F();u&&o("register",i,u.uid);const D=w(()=>Y($(e),a(l))),y=w(()=>{const r=H(m(m({placement:"right"},a(c)),a(D)),{visible:a(s)});r.title=void 0;let{isDetail:d,width:V,wrapClassName:T,getContainer:pe}=r;if(d){V||(r.width="100%");const I=`${n}__detail`;T=r.class?r.class:T,r.class=T?`${T} ${I}`:I,pe||(r.getContainer=`.${t}-layout-content`)}return r}),L=w(()=>m(m({},c),a(y))),z=w(()=>{const{footerHeight:r,showFooter:d}=a(y);return d&&r?ke(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=w(()=>{const r=a(z);return{position:"relative",height:`calc(100% - ${r})`}}),le=w(()=>{var r;return!!((r=a(y))!=null&&r.loading)});Z(()=>e.visible,(r,d)=>{r!==d&&(s.value=r)},{deep:!0}),Z(()=>s.value,r=>{ee(()=>{var d;o("visible-change",r),u&&((d=i.emitVisible)==null||d.call(i,r,u.uid))})});function ie(r){return W(this,null,function*(){const{closeFunc:d}=a(y);if(o("close",r),d&&te(d)){const V=yield d();s.value=!V;return}s.value=!1})}function ce(r){l.value=Y(a(l)||{},r),Reflect.has(r,"visible")&&(s.value=!!r.visible)}function ue(){o("ok")}return{onClose:ie,t:p,prefixCls:n,getMergeProps:D,getScrollContentStyle:ae,getProps:y,getLoading:le,getBindValues:L,getFooterHeight:z,handleOk:ue}}});function ze(e,o,s,c,l,p){const t=C("DrawerHeader"),n=C("ScrollContainer"),i=C("DrawerFooter"),u=C("Drawer"),D=$e("loading");return f(),S(u,_({class:e.prefixCls,onClose:e.onClose},e.getBindValues),G({default:h(()=>[Be((f(),S(n,{style:x(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[D,e.getLoading]]),N(i,_(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),G({_:2},[Pe(Object.keys(e.$slots),y=>({name:y,fn:h(L=>[g(e.$slots,y,Se(Te(L||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[g(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[N(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["class","onClose"])}var Ie=q(qe,[["render",ze]]);const k=se({}),A=se({});function We(){if(!F())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=v(null),o=v(!1),s=v("");function c(t,n){oe(()=>{e.value=null,o.value=null,k[a(s)]=null}),!(a(o)&&_e()&&t===a(e))&&(s.value=n,e.value=t,o.value=!0,t.emitVisible=(i,u)=>{A[u]=i})}const l=()=>{const t=a(e);return t||ne("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getVisible:w(()=>A[~~a(s)]),openDrawer:(t=!0,n,i=!0)=>{var D;if((D=l())==null||D.setDrawerProps({visible:t}),!n)return;if(i){k[a(s)]=null,k[a(s)]=$(n);return}Oe($(k[a(s)]),$(n))||(k[a(s)]=$(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const Xe=e=>{const o=v(null),s=F(),c=v("");if(!F())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(o);if(!t){ne("useDrawerInner instance is undefined!");return}return t},p=(t,n)=>{oe(()=>{o.value=null}),c.value=n,o.value=t,s==null||s.emit("register",t,n)};return Fe(()=>{const t=k[a(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getVisible:w(()=>A[~~a(c)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},Ye=Le(Ie);export{Ye as B,We as a,Xe as u};