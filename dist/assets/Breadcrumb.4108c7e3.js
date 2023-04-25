var z=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,k=(e,t)=>{for(var s in t||(t={}))G.call(t,s)&&P(e,s,t[s]);if($)for(var s of $(t))L.call(t,s)&&P(e,s,t[s]);return e},y=(e,t)=>T(e,V(t));var w=(e,t,s)=>new Promise((h,d)=>{var g=l=>{try{f(s.next(l))}catch(c){d(c)}},p=l=>{try{f(s.throw(l))}catch(c){d(c)}},f=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);f((s=s.apply(e,t)).next())});import{j as O,I as j,gb as E,aN as q,C as Q,e5 as x,l as F,ap as H,e8 as J,aa as K,o as U,aP as W,fz as X,fG as Y,fx as Z,da as ee,q as te,r as B,s as b,t as M,v as ne,w as A,Q as N,R as ae,z as S,y as se,B as re}from"./index.b3c2d15d.js";const oe=O({name:"LayoutBreadcrumb",components:{Icon:j,[E.name]:E},props:{theme:q.oneOf(["dark","light"])},setup(){const e=Q([]),{currentRoute:t}=x(),{prefixCls:s}=F("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=H(),d=J(),{t:g}=U();K(()=>w(this,null,function*(){var C,I,R;if(t.value.name===X)return;const r=yield Y(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const i=Z(r,o),m=r.filter(D=>D.path===i[0]),u=p(m,i);if(!u||u.length===0)return;const _=f(u);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(y(k({},t.value),{name:((R=t.value.meta)==null?void 0:R.title)||t.value.name})),e.value=_}));function p(r,n){const a=[];return r.forEach(o=>{var i,m;n.includes(o.path)&&a.push(y(k({},o),{name:((i=o.meta)==null?void 0:i.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function f(r){return ee(r,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:i,hideBreadcrumb:m}=a;return!(!i||m)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(r,n,a){a==null||a.preventDefault();const{children:o,redirect:i,meta:m}=r;if((o==null?void 0:o.length)&&!i){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(i&&W(i))d(i);else{let u="";n.length===1?u=n[0]:u=`${n.slice(1).pop()||""}`,u=/^\//.test(u)?u:`/${u}`,d(u)}}function c(r,n){return r.indexOf(n)!==r.length-1}function v(r){var n;return r.icon||((n=r.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:s,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}});const ce={key:1};function ie(e,t,s,h,d,g){const p=B("Icon"),f=B("router-link"),l=B("a-breadcrumb");return b(),M("div",{class:re([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[ne(l,{routes:e.routes},{itemRender:A(({route:c,routes:v,paths:r})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),N(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):ae("",!0),e.hasRedirect(v,c)?(b(),N(f,{key:2,to:"",onClick:n=>e.handleClick(c,r,n),style:{color:"inherit"}},{default:A(()=>[se(S(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),M("span",ce,S(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}const me=te(oe,[["render",ie]]);export{me as default};