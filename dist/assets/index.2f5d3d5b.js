var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Q=(e,o,s)=>o in e?de(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,D=(e,o)=>{for(var s in o||(o={}))we.call(o,s)&&Q(e,s,o[s]);if(G)for(var s of G(o))he.call(o,s)&&Q(e,s,o[s]);return e},L=(e,o)=>fe(e,ge(o));var W=(e,o,s)=>new Promise((c,l)=>{var p=i=>{try{n(s.next(i))}catch(u){l(u)}},t=i=>{try{n(s.throw(i))}catch(u){l(u)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(p,t);n((s=s.apply(e,o)).next())});import{o as Z,j as E,l as z,m as w,q,r as C,s as f,t as B,ax as ye,S as g,Q as S,w as h,y as R,z as O,x as _,R as P,B as k,V as x,bg as me,dG as De,aN as N,aW as K,v as j,dH as Ce,b6 as be,C as b,bv as ke,E as U,cF as X,K as a,ac as $,L as ve,G as ee,aQ as te,a6 as F,aV as $e,bx as J,N as Be,bc as Pe,by as Se,bz as Te,a8 as se,ab as Oe,aa as _e,ak as oe,bV as Fe,bX as ne,W as Ve}from"./index.b3c2d15d.js";const{t:Y}=Z(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Y("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Y("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},He=D({class:{type:[String,Object,Array]},isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re),Le=E({name:"BasicDrawerFooter",props:L(D({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:s}=z("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:t}});function l(){o("ok")}function p(){o("close")}return{handleOk:l,prefixCls:s,handleClose:p,getStyle:c}}});function Ne(e,o,s,c,l,p){const t=C("a-button");return e.showFooter||e.$slots.footer?(f(),B("div",{key:0,class:k(e.prefixCls),style:x(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),B(ye,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),S(t,_({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(O(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),S(t,_({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(O(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}const Re=q(Le,[["render",Ne]]),je=E({name:"BasicDrawerHeader",components:{BasicTitle:me,ArrowLeftOutlined:De},props:{isDetail:N.bool,showDetailBack:N.bool,title:N.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:s}=z("basic-drawer-header");function c(){o("close")}return{prefixCls:s,handleClose:c}}});const Ae={key:1};function Ee(e,o,s,c,l,p){const t=C("BasicTitle"),n=C("ArrowLeftOutlined");return e.isDetail?(f(),B("div",{key:1,class:k([e.prefixCls,`${e.prefixCls}--detail`])},[K("span",{class:k(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),B("span",{key:0,onClick:o[0]||(o[0]=(...i)=>e.handleClose&&e.handleClose(...i))},[j(n,{class:k(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(f(),B("span",Ae,O(e.title),1)):P("",!0)],2),K("span",{class:k(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),S(t,{key:0,class:k(e.prefixCls)},{default:h(()=>[g(e.$slots,"title"),R(" "+O(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}const ze=q(je,[["render",Ee]]),qe=E({components:{Drawer:Ce,ScrollContainer:be,DrawerFooter:Re,DrawerHeader:ze},inheritAttrs:!1,props:He,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const s=b(!1),c=ke(),l=b(null),{t:p}=Z(),{prefixVar:t,prefixCls:n}=z("basic-drawer"),i={setDrawerProps:ce,emitVisible:void 0},u=F();u&&o("register",i,u.uid);const m=w(()=>X($(e),a(l))),y=w(()=>{const r=L(D(D({placement:"right"},a(c)),a(m)),{visible:a(s)});r.title=void 0;let{isDetail:d,width:H,wrapClassName:T,getContainer:pe}=r;if(d){H||(r.width="100%");const M=`${n}__detail`;T=r.class?r.class:T,r.class=T?`${T} ${M}`:M,pe||(r.getContainer=`.${t}-layout-content`)}return r}),V=w(()=>D(D({},c),a(y))),I=w(()=>{const{footerHeight:r,showFooter:d}=a(y);return d&&r?ve(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=w(()=>({position:"relative",height:`calc(100% - ${a(I)})`})),le=w(()=>{var r;return!!((r=a(y))!=null&&r.loading)});U(()=>e.visible,(r,d)=>{r!==d&&(s.value=r)},{deep:!0}),U(()=>s.value,r=>{ee(()=>{var d;o("visible-change",r),u&&((d=i.emitVisible)==null||d.call(i,r,u.uid))})});function ie(r){return W(this,null,function*(){const{closeFunc:d}=a(y);if(o("close",r),d&&te(d)){const H=yield d();s.value=!H;return}s.value=!1})}function ce(r){l.value=X(a(l)||{},r),Reflect.has(r,"visible")&&(s.value=!!r.visible)}function ue(){o("ok")}return{onClose:ie,t:p,prefixCls:n,getMergeProps:m,getScrollContentStyle:ae,getProps:y,getLoading:le,getBindValues:V,getFooterHeight:I,handleOk:ue}}});function Ie(e,o,s,c,l,p){const t=C("DrawerHeader"),n=C("ScrollContainer"),i=C("DrawerFooter"),u=C("Drawer"),m=$e("loading");return f(),S(u,_({class:e.prefixCls,onClose:e.onClose},e.getBindValues),J({default:h(()=>[Be((f(),S(n,{style:x(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[m,e.getLoading]]),j(i,_(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),J({_:2},[Pe(Object.keys(e.$slots),y=>({name:y,fn:h(V=>[g(e.$slots,y,Se(Te(V||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[g(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[j(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["class","onClose"])}const Me=q(qe,[["render",Ie]]),v=se({}),A=se({});function We(){if(!F())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=b(null),o=b(!1),s=b("");function c(t,n){oe(()=>{e.value=null,o.value=null,v[a(s)]=null}),!(a(o)&&Fe()&&t===a(e))&&(s.value=n,e.value=t,o.value=!0,t.emitVisible=(i,u)=>{A[u]=i})}const l=()=>{const t=a(e);return t||ne("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getVisible:w(()=>A[~~a(s)]),openDrawer:(t=!0,n,i=!0)=>{var m;if((m=l())==null||m.setDrawerProps({visible:t}),!n)return;if(i){v[a(s)]=null,v[a(s)]=$(n);return}Oe($(v[a(s)]),$(n))||(v[a(s)]=$(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const Ke=e=>{const o=b(null),s=F(),c=b("");if(!F())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(o);if(!t){ne("useDrawerInner instance is undefined!");return}return t},p=(t,n)=>{oe(()=>{o.value=null}),c.value=n,o.value=t,s==null||s.emit("register",t,n)};return _e(()=>{const t=v[a(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getVisible:w(()=>A[~~a(c)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},Ue=Ve(Me);export{Ue as B,We as a,Ke as u};