import{cp as C,fQ as H,y as f,au as j,fl as U,l as F,bo as N,F as z,a7 as M,H as W,Q as w,$ as q,a0 as Q,K as G,J,_ as E,bp as O,fR as X,R as Y,S as Z,bt as D,dk as K,fS as tt,cv as et,fT as nt,q as rt,cc as L,cd as x,ao as ot,fU as at,n as it,o as V,t as T,v as _,x as st,V as k,W as P,E as ct,aw as lt,L as S,fG as I}from"./index.3bed7968.js";import{useHeaderSetting as ut}from"./useHeaderSetting.021dedfe.js";import pt from"./SessionTimeoutLogin.82c4afdc.js";import"./Login.3d85260a.js";import"./LoginForm.26895cac.js";import"./LoginFormTitle.383a3785.js";import"./ThirdModal.3fa07ac9.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./useFormItem.1483bf1f.js";import"./useThirdLogin.2f526566.js";import"./GithubFilled.b9ad004a.js";import"./WechatFilled.08369ee4.js";import"./ForgetPasswordForm.cd3c5209.js";import"./step1.3ec71968.js";import"./step2.4c15e211.js";import"./index.a3670730.js";import"./step3.62adc45d.js";import"./RegisterForm.55f34f98.js";import"./MobileForm.a6da80e1.js";import"./QrCodeForm.147426e7.js";import"./index.f7d4b77f.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";function ft(e){var t,n=function(s){return function(){t=null,e.apply(void 0,H(s))}},r=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=C(n(c))}};return r.cancel=function(){return C.cancel(t)},r}var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=vt;function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){mt(e,o,n[o])})}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(t,n){var r=$({},t,n.attrs);return f(j,$({},r,{icon:gt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var dt=A,Tt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},_t=F({name:"ABackTop",inheritAttrs:!1,props:Tt(),setup:function(t,n){var r=n.slots,o=n.attrs,s=n.emit,c=N("back-top",t),a=c.prefixCls,g=c.direction,l=z(),m=M({visible:!1,scrollEvent:null}),B=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},R=function(u){var p=t.target,v=p===void 0?B:p,d=t.duration;tt(0,{getContainer:v,duration:d}),s("click",u)},b=ft(function(i){var u=t.visibilityHeight,p=nt(i.target,!0);m.visible=p>u}),h=function(){var u=t.target,p=u||B,v=p();m.scrollEvent=et(v,"scroll",function(d){b(d)}),b({target:v})},y=function(){m.scrollEvent&&m.scrollEvent.remove(),b.cancel()};return W(function(){return t.target},function(){y(),w(function(){h()})}),q(function(){w(function(){h()})}),Q(function(){w(function(){h()})}),G(function(){y()}),J(function(){y()}),function(){var i,u,p=f("div",{class:"".concat(a.value,"-content")},[f("div",{class:"".concat(a.value,"-icon")},[f(dt,null,null)])]),v=E(E({},o),{onClick:R,class:(i={},O(i,"".concat(a.value),!0),O(i,"".concat(o.class),o.class),O(i,"".concat(a.value,"-rtl"),g.value==="rtl"),i)}),d=X("fade");return f(K,d,{default:function(){return[Y(f("div",D(D({},v),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||p]),[[Z,m.visible]])]}})}}}),St=U(_t);const bt=F({name:"LayoutFeatures",components:{BackTop:St,LayoutLockPage:L(()=>x(()=>import("./index.f52de516.js"),["assets/index.f52de516.js","assets/index.3bed7968.js","assets/index.a427303c.css","assets/LockPage.e7a6109b.js","assets/LockPage.085bcc33.css","assets/lock.821223a7.js","assets/header.d801b988.js","assets/LockOutlined.a77f9248.js"])),SettingDrawer:L(()=>x(()=>import("./index.f67224e5.js").then(function(e){return e.i}),["assets/index.f67224e5.js","assets/index.c00316d7.js","assets/index.a8aed5d1.css","assets/index.3bed7968.js","assets/index.a427303c.css","assets/useHeaderSetting.021dedfe.js","assets/useMultipleTabSetting.43e2675f.js"])),SessionTimeoutLogin:pt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=ot(),o=at(),{prefixCls:s}=it("setting-drawer-fearure"),{getShowHeader:c}=ut(),a=V(()=>o.getSessionTimeout),g=V(()=>{if(!S(t))return!1;const l=S(n);return l===I.AUTO?!S(c)||S(r):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:a}}});function ht(e,t,n,r,o,s){const c=T("LayoutLockPage"),a=T("BackTop"),g=T("SettingDrawer"),l=T("SessionTimeoutLogin");return _(),st(lt,null,[f(c),e.getUseOpenBackTop?(_(),k(a,{key:0,target:e.getTarget},null,8,["target"])):P("",!0),e.getIsFixedSettingDrawer?(_(),k(g,{key:1,class:ct(e.prefixCls)},null,8,["class"])):P("",!0),e.getIsSessionTimeout?(_(),k(l,{key:2})):P("",!0)],64)}var Qt=rt(bt,[["render",ht]]);export{Qt as default};