var Y=Object.defineProperty,U=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var w=(t,e,r)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,I=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&w(t,r,e[r]);if(T)for(var r of T(e))k.call(e,r)&&w(t,r,e[r]);return t},O=(t,e)=>U(t,B(e));import{h as g,d as $,l as J,o as W,V as X,a7 as Q,a8 as Z,f as P,aa as tt,ad as j,E as et,ae as rt,u as E}from"./vue-50733b77.js";import{u as nt}from"./index-f191817e.js";import{ap as ot,q as at}from"./jeecg-online-vendor-d3e1865b.js";import{e as it,bW as y}from"./antd-vue-vendor-c5335947.js";import{c as l,g as st}from"./tinymce-vendor-7c917b36.js";import"./index-b34ff7bc.js";import ct from"./BasicTable-ca5b2c76.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./index-7e7a94e9.js";import"./useForm-14ceb529.js";import"./injectionKey-69710956.js";const ut=()=>ot.get({url:"/actuator/httptrace"},{isTransformResponse:!1});var pt="Expected a function",M="__lodash_hash_undefined__",F=1/0,ft="[object Function]",lt="[object GeneratorFunction]",dt="[object Symbol]",ht=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mt=/^\w*$/,_t=/^\./,gt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/[\\^$.*+?()[\]{}|]/g,bt=/\\(\\)?/g,vt=/^\[object .+?Constructor\]$/,xt=typeof l=="object"&&l&&l.Object===Object&&l,Ct=typeof self=="object"&&self&&self.Object===Object&&self,v=xt||Ct||Function("return this")();function St(t,e){return t==null?void 0:t[e]}function Tt(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch(r){}return e}var wt=Array.prototype,It=Function.prototype,G=Object.prototype,b=v["__core-js_shared__"],D=function(){var t=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),L=It.toString,x=G.hasOwnProperty,q=G.toString,Ot=RegExp("^"+L.call(x).replace(yt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=v.Symbol,Pt=wt.splice,jt=A(v,"Map"),f=A(Object,"create"),N=R?R.prototype:void 0,H=N?N.toString:void 0;function a(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(){this.__data__=f?f(null):{}}function Dt(t){return this.has(t)&&delete this.__data__[t]}function Rt(t){var e=this.__data__;if(f){var r=e[t];return r===M?void 0:r}return x.call(e,t)?e[t]:void 0}function Nt(t){var e=this.__data__;return f?e[t]!==void 0:x.call(e,t)}function Ht(t,e){var r=this.__data__;return r[t]=f&&e===void 0?M:e,this}a.prototype.clear=Et;a.prototype.delete=Dt;a.prototype.get=Rt;a.prototype.has=Nt;a.prototype.set=Ht;function c(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(){this.__data__=[]}function Mt(t){var e=this.__data__,r=h(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Pt.call(e,r,1),!0}function Ft(t){var e=this.__data__,r=h(e,t);return r<0?void 0:e[r][1]}function Gt(t){return h(this.__data__,t)>-1}function Lt(t,e){var r=this.__data__,n=h(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}c.prototype.clear=$t;c.prototype.delete=Mt;c.prototype.get=Ft;c.prototype.has=Gt;c.prototype.set=Lt;function i(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function qt(){this.__data__={hash:new a,map:new(jt||c),string:new a}}function At(t){return m(this,t).delete(t)}function Kt(t){return m(this,t).get(t)}function Vt(t){return m(this,t).has(t)}function Yt(t,e){return m(this,t).set(t,e),this}i.prototype.clear=qt;i.prototype.delete=At;i.prototype.get=Kt;i.prototype.has=Vt;i.prototype.set=Yt;function h(t,e){for(var r=t.length;r--;)if(ee(t[r][0],e))return r;return-1}function Ut(t,e){e=Jt(e,t)?[e]:kt(e);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Zt(e[r++])];return r&&r==n?t:void 0}function Bt(t){if(!V(t)||Xt(t))return!1;var e=re(t)||Tt(t)?Ot:vt;return e.test(te(t))}function zt(t){if(typeof t=="string")return t;if(S(t))return H?H.call(t):"";var e=t+"";return e=="0"&&1/t==-F?"-0":e}function kt(t){return K(t)?t:Qt(t)}function m(t,e){var r=t.__data__;return Wt(e)?r[typeof e=="string"?"string":"hash"]:r.map}function A(t,e){var r=St(t,e);return Bt(r)?r:void 0}function Jt(t,e){if(K(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||S(t)?!0:mt.test(t)||!ht.test(t)||e!=null&&t in Object(e)}function Wt(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Xt(t){return!!D&&D in t}var Qt=C(function(t){t=oe(t);var e=[];return _t.test(t)&&e.push(""),t.replace(gt,function(r,n,s,o){e.push(s?o.replace(bt,"$1"):n||r)}),e});function Zt(t){if(typeof t=="string"||S(t))return t;var e=t+"";return e=="0"&&1/t==-F?"-0":e}function te(t){if(t!=null){try{return L.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function C(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(pt);var r=function(){var n=arguments,s=e?e.apply(this,n):n[0],o=r.cache;if(o.has(s))return o.get(s);var u=t.apply(this,n);return r.cache=o.set(s,u),u};return r.cache=new(C.Cache||i),r}C.Cache=i;function ee(t,e){return t===e||t!==t&&e!==e}var K=Array.isArray;function re(t){var e=V(t)?q.call(t):"";return e==ft||e==lt}function V(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ne(t){return!!t&&typeof t=="object"}function S(t){return typeof t=="symbol"||ne(t)&&q.call(t)==dt}function oe(t){return t==null?"":zt(t)}function ae(t,e,r){var n=t==null?void 0:Ut(t,e);return n===void 0?r:n}var ie=ae;const d=st(ie),se=[{title:"请求时间",dataIndex:"timestamp",width:50,customRender({text:t}){return it(t).format("YYYY-MM-DD HH:mm:ss")}},{title:"请求方法",dataIndex:"request.method",width:20,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r==="GET"&&(n="#87d068"),r==="POST"&&(n="#2db7f5"),r==="PUT"&&(n="#ffba5a"),r==="DELETE"&&(n="#ff5500"),g(y,{color:n},()=>r)}},{title:"请求URL",dataIndex:"request.uri",width:200,customRender({record:t,column:e}){return d(t,e.dataIndex)}},{title:"响应状态",dataIndex:"response.status",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r<200?n="pink":r<201?n="green":r<399?n="cyan":r<403?n="orange":r<501&&(n="red"),g(y,{color:n},()=>r)}},{title:"请求耗时",dataIndex:"timeTaken",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="red";return r<500?n="green":r<1e3?n="cyan":r<1500&&(n="orange"),g(y,{color:n},()=>`${r} ms`)}}],ce={class:"p-4"},ue={slot:"message"},pe=$({name:"monitor-trace"}),rr=$(O(I({},pe),{setup(t){const e=J([]),{createMessage:r}=at(),[n,{reload:s}]=nt({columns:se,showIndexColumn:!1,bordered:!0,rowKey:"id"});function o(){ut().then(u=>{let _=[];for(let p of u.traces)p.request.method!=="OPTIONS"&&p.request.uri.indexOf("httptrace")===-1&&_.push(p);e.value=_})}return W(()=>{o()}),(u,_)=>{const p=X("a-divider");return Q(),Z("div",ce,[P(E(ct),{onRegister:E(n),dataSource:e.value},{tableTitle:tt(()=>[j("div",ue,[et(" 共追踪到 "+rt(e.value.length)+" 条近期HTTP请求记录 ",1),P(p,{type:"vertical"}),j("a",{onClick:o},"立即刷新")])]),_:1},8,["onRegister","dataSource"])])}}}));export{rr as default};