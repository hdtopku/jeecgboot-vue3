import{cd as E,fT as j,v as f,av as H,fo as R,j as $,bn as N,C as U,a8 as M,E as z,G as w,X as W,Y as X,J as q,H as J,_ as T,bo as k,fU as G,N as Q,O as Y,dn as Z,fV as K,ck as tt,fW as et,c0 as D,c1 as L,ap as nt,fX as ot,l as rt,m as V,K as _,fJ as x,q as at,r as S,s as b,t as it,Q as P,R as B,B as st,ax as ct}from"./index.639f1d60.js";import{useHeaderSetting as lt}from"./useHeaderSetting.c588aaf1.js";import ut from"./SessionTimeoutLogin.857d041c.js";import"./Login.vue_vue_type_style_index_0_lang.07efad04.js";import"./LoginForm.vue_vue_type_script_setup_true_lang.5e5f9c0e.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang.1afe0287.js";import"./ThirdModal.07f296fd.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./useFormItem.6352fd1e.js";import"./useThirdLogin.738e5d3b.js";import"./GithubFilled.f260a7f0.js";import"./WechatFilled.5e81c580.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang.0757fc21.js";import"./step1.fcbdb80c.js";import"./step2.ce515166.js";import"./index.e6685de9.js";import"./step3.26b06958.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang.f15b13b8.js";import"./MobileForm.vue_vue_type_script_setup_true_lang.5d919149.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang.7553bee6.js";import"./index.e0075e58.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";function pt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,j(s))}},o=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=E(n(c))}};return o.cancel=function(){return E.cancel(t)},o}var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const gt=ft;function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){mt(e,r,n[r])})}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(t,n){var o=I({},t,n.attrs);return f(H,I({},o,{icon:gt}),null)};C.displayName="VerticalAlignTopOutlined";C.inheritAttrs=!1;const vt=C;var dt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},Tt=$({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:dt(),setup:function(t,n){var o=n.slots,r=n.attrs,s=n.emit,c=N("back-top",t),a=c.prefixCls,m=c.direction,l=U(),v=M({visible:!1,scrollEvent:null}),A=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},F=function(u){var p=t.target,g=p===void 0?A:p,d=t.duration;K(0,{getContainer:g,duration:d}),s("click",u)},h=pt(function(i){var u=t.visibilityHeight,p=et(i.target,!0);v.visible=p>u}),y=function(){var u=t.target,p=u||A,g=p();v.scrollEvent=tt(g,"scroll",function(d){h(d)}),h({target:g})},O=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return z(function(){return t.target},function(){O(),w(function(){y()})}),W(function(){w(function(){y()})}),X(function(){w(function(){y()})}),q(function(){O()}),J(function(){O()}),function(){var i,u,p=f("div",{class:"".concat(a.value,"-content")},[f("div",{class:"".concat(a.value,"-icon")},[f(vt,null,null)])]),g=T(T({},r),{},{onClick:F,class:(i={},k(i,"".concat(a.value),!0),k(i,"".concat(r.class),r.class),k(i,"".concat(a.value,"-rtl"),m.value==="rtl"),i)}),d=G("fade");return f(Z,d,{default:function(){return[Q(f("div",T(T({},g),{},{ref:l}),[((u=o.default)===null||u===void 0?void 0:u.call(o))||p]),[[Y,v.visible]])]}})}}});const _t=R(Tt);const St=$({name:"LayoutFeatures",components:{BackTop:_t,LayoutLockPage:D(()=>L(()=>import("./index.4da1b061.js"),["assets/index.4da1b061.js","assets/index.639f1d60.js","assets/index.f8f727ca.css","assets/LockPage.1bb0d549.js","assets/lock.6b7bc2a8.js","assets/header.42ca8d70.js","assets/LockOutlined.b04165e9.js","assets/LockPage.f7242210.css"])),SettingDrawer:D(()=>L(()=>import("./index.36efe3f8.js").then(e=>e.i),["assets/index.36efe3f8.js","assets/index.b4620f2a.js","assets/index.639f1d60.js","assets/index.f8f727ca.css","assets/index.60383c19.css","assets/useHeaderSetting.c588aaf1.js","assets/useMultipleTabSetting.9e883e22.js"])),SessionTimeoutLogin:ut},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:o}=nt(),r=ot(),{prefixCls:s}=rt("setting-drawer-fearure"),{getShowHeader:c}=lt(),a=V(()=>r.getSessionTimeout),m=V(()=>{if(!_(t))return!1;const l=_(n);return l===x.AUTO?!_(c)||_(o):l===x.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m,prefixCls:s,getIsSessionTimeout:a}}});function bt(e,t,n,o,r,s){const c=S("LayoutLockPage"),a=S("BackTop"),m=S("SettingDrawer"),l=S("SessionTimeoutLogin");return b(),it(ct,null,[f(c),e.getUseOpenBackTop?(b(),P(a,{key:0,target:e.getTarget},null,8,["target"])):B("",!0),e.getIsFixedSettingDrawer?(b(),P(m,{key:1,class:st(e.prefixCls)},null,8,["class"])):B("",!0),e.getIsSessionTimeout?(b(),P(l,{key:2})):B("",!0)],64)}const Xt=at(St,[["render",bt]]);export{Xt as default};