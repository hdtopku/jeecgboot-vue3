var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(e,o,n)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,L=(e,o)=>{for(var n in o||(o={}))D.call(o,n)&&F(e,n,o[n]);if(f)for(var n of f(o))B.call(o,n)&&F(e,n,o[n]);return e};import{dL as h,K as A,j as T,dM as W,bG as C,C as b,a8 as w,b8 as R,q as N,r as l,aV as P,N as V,s as $,Q as j,w as u,aW as q,v as t,y as r}from"./index.9d4ffdff.js";import{P as G}from"./index.dc6bea19.js";import"./useContentHeight.aa81b320.js";import"./onMountedOrActivated.1516be09.js";import"./useWindowSizeFn.722b7aaa.js";import"./useContentViewHeight.aac4ad23.js";import"./usePageContext.037686fe.js";import"./injectionKey.1ad13e6c.js";function y(e){let o,n=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const a=e;o=a.props||{},n=a.target||document.body}else o=e;const s=h(o,void 0,!0);return[()=>{const a=A(n);!a||s.open(a)},()=>{s.close()},a=>{s.setTip(a)}]}const K=T({components:{Loading:W,PageWrapper:G,[C.name]:C},setup(){const e=b(null),o=b(!1),n=w({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"\u52A0\u8F7D\u4E2D..."}),[s,p]=y({tip:"\u52A0\u8F7D\u4E2D..."}),[c,i]=y({target:e,props:{tip:"\u52A0\u8F7D\u4E2D...",absolute:!0}});function a(E){n.absolute=E,n.loading=!0,setTimeout(()=>{n.loading=!1},2e3)}function d(){a(!1)}function g(){a(!0)}function m(){s(),setTimeout(()=>{p()},2e3)}function k(){c(),setTimeout(()=>{i()},2e3)}function _(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return L({openCompFullLoading:d,openFnFullLoading:m,openFnWrapLoading:k,openCompAbsolute:g,wrapEl:e,loadingRef:o,openDirectiveLoading:_},R(n))}}),M={ref:"wrapEl"};function Q(e,o,n,s,p,c){const i=l("a-alert"),a=l("a-button"),d=l("Loading"),g=l("PageWrapper"),m=P("loading");return V(($(),j(g,{"loading-tip":"\u52A0\u8F7D\u4E2D...",title:"Loading\u7EC4\u4EF6\u793A\u4F8B"},{default:u(()=>[q("div",M,[t(i,{message:"\u7EC4\u4EF6\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[r(" \u5168\u5C4F Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[r(" \u5BB9\u5668\u5185 Loading ")]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i,{message:"\u51FD\u6570\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[r(" \u5168\u5C4F Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[r(" \u5BB9\u5668\u5185 Loading ")]),_:1},8,["onClick"]),t(i,{message:"\u6307\u4EE4\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[r(" \u6253\u5F00\u6307\u4EE4Loading ")]),_:1},8,["onClick"])],512)]),_:1})),[[m,e.loadingRef]])}const Z=N(K,[["render",Q]]);export{Z as default};