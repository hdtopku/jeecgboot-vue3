import{cf as D,fz as j,v as f,av as H,f4 as R,j as $,bn as N,C as M,a7 as U,E as z,M as w,X as q,Y as W,G as X,F as G,_ as T,bo as B,fA as Q,N as Y,O as J,dp as Z,fB as K,cm as tt,fC as et,c2 as E,c3 as L,ap as nt,fD as ot,l as rt,m as x,H as _,fp as I,q as at,r as S,s as b,t as it,Q as C,R as P,B as st,ax as ct}from"./index.0be4b5b8.js";import{useHeaderSetting as lt}from"./useHeaderSetting.8fdf423f.js";import ut from"./SessionTimeoutLogin.0f2638b1.js";import"./Login.vue_vue_type_style_index_0_lang.00d8fba3.js";import"./LoginForm.vue_vue_type_script_setup_true_lang.114ee913.js";import"./checkcode.26910ff2.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang.cd3e18ca.js";import"./ThirdModal.4bf6b66d.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./useFormItem.77c38aa9.js";import"./useThirdLogin.c348d8dc.js";import"./IconFont.a939541b.js";import"./GithubFilled.1c874021.js";import"./WechatFilled.80331bc4.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang.68f6dc29.js";import"./step1.50a9ab96.js";import"./step2.bf878b1a.js";import"./index.2fb8bc9c.js";import"./step3.c825d70c.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang.5c4c9b1f.js";import"./MobileForm.vue_vue_type_script_setup_true_lang.ed1de434.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang.7d4c3bbb.js";import"./index.c7cdb5b8.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";function pt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,j(s))}},o=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=D(n(c))}};return o.cancel=function(){return D.cancel(t)},o}var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const mt=ft;function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){gt(e,r,n[r])})}return e}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(t,n){var o=V({},t,n.attrs);return f(H,V({},o,{icon:mt}),null)};k.displayName="VerticalAlignTopOutlined";k.inheritAttrs=!1;const vt=k;var dt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},Tt=$({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:dt(),setup:function(t,n){var o=n.slots,r=n.attrs,s=n.emit,c=N("back-top",t),a=c.prefixCls,g=c.direction,l=M(),v=U({visible:!1,scrollEvent:null}),A=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},F=function(u){var p=t.target,m=p===void 0?A:p,d=t.duration;K(0,{getContainer:m,duration:d}),s("click",u)},h=pt(function(i){var u=t.visibilityHeight,p=et(i.target,!0);v.visible=p>u}),y=function(){var u=t.target,p=u||A,m=p();v.scrollEvent=tt(m,"scroll",function(d){h(d)}),h({target:m})},O=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return z(function(){return t.target},function(){O(),w(function(){y()})}),q(function(){w(function(){y()})}),W(function(){w(function(){y()})}),X(function(){O()}),G(function(){O()}),function(){var i,u,p=f("div",{class:"".concat(a.value,"-content")},[f("div",{class:"".concat(a.value,"-icon")},[f(vt,null,null)])]),m=T(T({},r),{},{onClick:F,class:(i={},B(i,"".concat(a.value),!0),B(i,"".concat(r.class),r.class),B(i,"".concat(a.value,"-rtl"),g.value==="rtl"),i)}),d=Q("fade");return f(Z,d,{default:function(){return[Y(f("div",T(T({},m),{},{ref:l}),[((u=o.default)===null||u===void 0?void 0:u.call(o))||p]),[[J,v.visible]])]}})}}});const _t=R(Tt);const St=$({name:"LayoutFeatures",components:{BackTop:_t,LayoutLockPage:E(()=>L(()=>import("./index.5f182094.js"),["assets/index.5f182094.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/LockPage.87d52cf8.js","assets/lock.810f93b4.js","assets/header.42ca8d70.js","assets/LockOutlined.9ab4aec2.js","assets/LockPage.f7242210.css"])),SettingDrawer:E(()=>L(()=>import("./index.a64a1fa3.js").then(e=>e.i),["assets/index.a64a1fa3.js","assets/index.0a5ccf4a.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/index.60383c19.css","assets/useHeaderSetting.8fdf423f.js","assets/useMultipleTabSetting.d059e027.js"])),SessionTimeoutLogin:ut},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:o}=nt(),r=ot(),{prefixCls:s}=rt("setting-drawer-fearure"),{getShowHeader:c}=lt(),a=x(()=>r.getSessionTimeout),g=x(()=>{if(!_(t))return!1;const l=_(n);return l===I.AUTO?!_(c)||_(o):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:a}}});function bt(e,t,n,o,r,s){const c=S("LayoutLockPage"),a=S("BackTop"),g=S("SettingDrawer"),l=S("SessionTimeoutLogin");return b(),it(ct,null,[f(c),e.getUseOpenBackTop?(b(),C(a,{key:0,target:e.getTarget},null,8,["target"])):P("",!0),e.getIsFixedSettingDrawer?(b(),C(g,{key:1,class:st(e.prefixCls)},null,8,["class"])):P("",!0),e.getIsSessionTimeout?(b(),C(l,{key:2})):P("",!0)],64)}const Gt=at(St,[["render",bt]]);export{Gt as default};