var V=Object.defineProperty,Y=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var T=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))B.call(e,r)&&T(t,r,e[r]);if(S)for(var r of S(e))k.call(e,r)&&T(t,r,e[r]);return t},I=(t,e)=>Y(t,U(e));import z from"./BasicTable-f6cf85af.js";import"./componentMap-da21b34e.js";import{u as J}from"./useTable-20c32c9e.js";import{b as W}from"./jeecg-online-vendor-59c8fbe3.js";import{d as X,W as _}from"./antd-vue-vendor-a78909e6.js";import{c as l,g as Q}from"./tinymce-vendor-676f8393.js";import"./index-7711d1b4.js";import{n as g,d as H,k as Z,o as tt,V as et,a5 as rt,a6 as nt,f as O,a7 as ot,aa as P,E as at,ab as it,u as j}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./BasicForm-2f1a8584.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./lodash-es-vendor-9b741fb8.js";import"./index-465fff25.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./vxe-table-vendor-173f2e92.js";import"./echarts-vendor-6c8e2159.js";import"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-d5fd9260.js";import"./JSelectUser-5289e428.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./cron-parser-vendor-15f47fa7.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";const st=()=>W.get({url:"/actuator/httptrace"},{isTransformResponse:!1});var ct="Expected a function",$="__lodash_hash_undefined__",F=1/0,ut="[object Function]",pt="[object GeneratorFunction]",ft="[object Symbol]",lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dt=/^\w*$/,ht=/^\./,mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/[\\^$.*+?()[\]{}|]/g,gt=/\\(\\)?/g,yt=/^\[object .+?Constructor\]$/,bt=typeof l=="object"&&l&&l.Object===Object&&l,vt=typeof self=="object"&&self&&self.Object===Object&&self,b=bt||vt||Function("return this")();function xt(t,e){return t==null?void 0:t[e]}function Ct(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch(r){}return e}var St=Array.prototype,Tt=Function.prototype,G=Object.prototype,y=b["__core-js_shared__"],E=function(){var t=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),M=Tt.toString,v=G.hasOwnProperty,A=G.toString,wt=RegExp("^"+M.call(v).replace(_t,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=b.Symbol,It=St.splice,Ot=K(b,"Map"),f=K(Object,"create"),R=D?D.prototype:void 0,N=R?R.toString:void 0;function i(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(){this.__data__=f?f(null):{}}function jt(t){return this.has(t)&&delete this.__data__[t]}function Et(t){var e=this.__data__;if(f){var r=e[t];return r===$?void 0:r}return v.call(e,t)?e[t]:void 0}function Dt(t){var e=this.__data__;return f?e[t]!==void 0:v.call(e,t)}function Rt(t,e){var r=this.__data__;return r[t]=f&&e===void 0?$:e,this}i.prototype.clear=Pt;i.prototype.delete=jt;i.prototype.get=Et;i.prototype.has=Dt;i.prototype.set=Rt;function u(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nt(){this.__data__=[]}function Ht(t){var e=this.__data__,r=h(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():It.call(e,r,1),!0}function $t(t){var e=this.__data__,r=h(e,t);return r<0?void 0:e[r][1]}function Ft(t){return h(this.__data__,t)>-1}function Gt(t,e){var r=this.__data__,n=h(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}u.prototype.clear=Nt;u.prototype.delete=Ht;u.prototype.get=$t;u.prototype.has=Ft;u.prototype.set=Gt;function s(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(){this.__data__={hash:new i,map:new(Ot||u),string:new i}}function At(t){return m(this,t).delete(t)}function Kt(t){return m(this,t).get(t)}function Lt(t){return m(this,t).has(t)}function qt(t,e){return m(this,t).set(t,e),this}s.prototype.clear=Mt;s.prototype.delete=At;s.prototype.get=Kt;s.prototype.has=Lt;s.prototype.set=qt;function h(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function Vt(t,e){e=kt(e,t)?[e]:Bt(e);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Xt(e[r++])];return r&&r==n?t:void 0}function Yt(t){if(!q(t)||Jt(t))return!1;var e=te(t)||Ct(t)?wt:yt;return e.test(Qt(t))}function Ut(t){if(typeof t=="string")return t;if(C(t))return N?N.call(t):"";var e=t+"";return e=="0"&&1/t==-F?"-0":e}function Bt(t){return L(t)?t:Wt(t)}function m(t,e){var r=t.__data__;return zt(e)?r[typeof e=="string"?"string":"hash"]:r.map}function K(t,e){var r=xt(t,e);return Yt(r)?r:void 0}function kt(t,e){if(L(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||C(t)?!0:dt.test(t)||!lt.test(t)||e!=null&&t in Object(e)}function zt(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Jt(t){return!!E&&E in t}var Wt=x(function(t){t=re(t);var e=[];return ht.test(t)&&e.push(""),t.replace(mt,function(r,n,o,a){e.push(o?a.replace(gt,"$1"):n||r)}),e});function Xt(t){if(typeof t=="string"||C(t))return t;var e=t+"";return e=="0"&&1/t==-F?"-0":e}function Qt(t){if(t!=null){try{return M.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function x(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(ct);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var c=t.apply(this,n);return r.cache=a.set(o,c),c};return r.cache=new(x.Cache||s),r}x.Cache=s;function Zt(t,e){return t===e||t!==t&&e!==e}var L=Array.isArray;function te(t){var e=q(t)?A.call(t):"";return e==ut||e==pt}function q(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ee(t){return!!t&&typeof t=="object"}function C(t){return typeof t=="symbol"||ee(t)&&A.call(t)==ft}function re(t){return t==null?"":Ut(t)}function ne(t,e,r){var n=t==null?void 0:Vt(t,e);return n===void 0?r:n}var oe=ne;const d=Q(oe),ae=[{title:"请求时间",dataIndex:"timestamp",width:50,customRender({text:t}){return X(t).format("YYYY-MM-DD HH:mm:ss")}},{title:"请求方法",dataIndex:"request.method",width:20,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r==="GET"&&(n="#87d068"),r==="POST"&&(n="#2db7f5"),r==="PUT"&&(n="#ffba5a"),r==="DELETE"&&(n="#ff5500"),g(_,{color:n},()=>r)}},{title:"请求URL",dataIndex:"request.uri",width:200,customRender({record:t,column:e}){return d(t,e.dataIndex)}},{title:"响应状态",dataIndex:"response.status",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r<200?n="pink":r<201?n="green":r<399?n="cyan":r<403?n="orange":r<501&&(n="red"),g(_,{color:n},()=>r)}},{title:"请求耗时",dataIndex:"timeTaken",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="red";return r<500?n="green":r<1e3?n="cyan":r<1500&&(n="orange"),g(_,{color:n},()=>`${r} ms`)}}],ie={class:"p-4"},se={slot:"message"},ce=H({name:"monitor-trace"}),Qe=H(I(w({},ce),{setup(t){const e=Z([]),[r,{reload:n}]=J({columns:ae,showIndexColumn:!1,bordered:!0,rowKey:"id"});function o(){st().then(a=>{let c=[];for(let p of a.traces)p.request.method!=="OPTIONS"&&p.request.uri.indexOf("httptrace")===-1&&c.push(p);e.value=c})}return tt(()=>{o()}),(a,c)=>{const p=et("a-divider");return rt(),nt("div",ie,[O(j(z),{onRegister:j(r),dataSource:e.value},{tableTitle:ot(()=>[P("div",se,[at(" 共追踪到 "+it(e.value.length)+" 条近期HTTP请求记录 ",1),O(p,{type:"vertical"}),P("a",{onClick:o},"立即刷新")])]),_:1},8,["onRegister","dataSource"])])}}}));export{Qe as default};