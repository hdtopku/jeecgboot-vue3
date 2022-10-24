var I=(e,i,s)=>new Promise((d,r)=>{var p=o=>{try{c(s.next(o))}catch(u){r(u)}},t=o=>{try{c(s.throw(o))}catch(u){r(u)}},c=o=>o.done?d(o.value):Promise.resolve(o.value).then(p,t);c((s=s.apply(e,i)).next())});import{q as O,l as T,bc as N,bd as A,c9 as f,ca as _,aM as q,n as H,d4 as z,dR as W,o as S,bH as G,F as M,t as l,v,x as K,y as n,z as y,V as L,W as U,aV as h,E as g,D as Y,aw as j,s as J,a as Q,a3 as X,eg as Z,ei as ee,eh as P,u as te}from"./index.a1b4e527.js";import{S as oe}from"./siteSetting.967dfbc9.js";import{useHeaderSetting as ne}from"./useHeaderSetting.d69d18a7.js";import"./index.ea6d1b33.js";import{h as R}from"./header.d801b988.js";import{r as ae,q as se}from"./dict.api.a175d28b.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";const{createMessage:b}=te(),re=T({name:"UserDropdown",components:{Dropdown:N,Menu:A,MenuItem:f(()=>_(()=>import("./DropMenuItem.5fe83d32.js"),["assets/DropMenuItem.5fe83d32.js","assets/index.a1b4e527.js","assets/index.bc1be517.css"])),MenuDivider:A.Divider,LockAction:f(()=>_(()=>import("./LockModal.cddf1bb3.js"),["assets/LockModal.cddf1bb3.js","assets/LockModal.db0fe75f.css","assets/idea.b218466e.css","assets/index.a1b4e527.js","assets/index.bc1be517.css","assets/index.ea6d1b33.js","assets/index.9b6aba0b.css","assets/BasicModal.6dc4adbe.js","assets/BasicModal.1311e866.css","assets/useWindowSizeFn.cf93ddee.js","assets/BasicForm.77adc039.js","assets/BasicForm.5806b2e9.css","assets/helper.6c15aaa9.js","assets/helper.58dde131.css","assets/useFormItem.f45f8681.js","assets/functional.011cfa3e.js","assets/functional.a68b3505.css","assets/download.6d07b2c0.js","assets/base64Conver.030fa32c.js","assets/index.865ad11c.js","assets/index.8dedeae0.css","assets/index.0200dbc3.js","assets/index.950cae9e.css","assets/useCountdown.0ec6a702.js","assets/JAddInput.20a0408b.js","assets/JAddInput.8632f74c.css","assets/api.d480aed7.js","assets/props.3048bd74.js","assets/index.8c0f1045.js","assets/index.037a125c.css","assets/bem.ff3a25b6.js","assets/props.40d423fa.js","assets/useContextMenu.259c847c.js","assets/useContextMenu.e7cbf068.css","assets/index.bb17d202.js","assets/index.2254685a.css","assets/onMountedOrActivated.e88e16f1.js","assets/index.96e08025.js","assets/index.c827a9c8.css","assets/htmlmixed.37684b60.js","assets/vue.a9bc7c21.js","assets/vue.a361089e.css","assets/depart.api.546ee79f.js","assets/JUpload.5aa10044.js","assets/JUpload.bb1c69a5.css","assets/index.b1e57df7.js","assets/uniqBy.cec7465a.js","assets/useForm.db279587.js","assets/lock.32c296a6.js","assets/header.d801b988.js"])),DepartSelect:f(()=>_(()=>import("./DepartSelect.8bcc338b.js"),["assets/DepartSelect.8bcc338b.js","assets/DepartSelect.4a79b006.css","assets/index.ea6d1b33.js","assets/index.9b6aba0b.css","assets/index.a1b4e527.js","assets/index.bc1be517.css","assets/BasicModal.6dc4adbe.js","assets/BasicModal.1311e866.css","assets/useWindowSizeFn.cf93ddee.js","assets/depart.api.546ee79f.js","assets/tenant.api.c36cc10b.js"])),UpdatePassword:f(()=>_(()=>import("./UpdatePassword.d90569ce.js"),["assets/UpdatePassword.d90569ce.js","assets/idea.b218466e.css","assets/validator.db5ea725.js","assets/index.a1b4e527.js","assets/index.bc1be517.css","assets/user.api.790518f7.js","assets/index.ea6d1b33.js","assets/index.9b6aba0b.css","assets/BasicModal.6dc4adbe.js","assets/BasicModal.1311e866.css","assets/useWindowSizeFn.cf93ddee.js","assets/BasicForm.77adc039.js","assets/BasicForm.5806b2e9.css","assets/helper.6c15aaa9.js","assets/helper.58dde131.css","assets/useFormItem.f45f8681.js","assets/functional.011cfa3e.js","assets/functional.a68b3505.css","assets/download.6d07b2c0.js","assets/base64Conver.030fa32c.js","assets/index.865ad11c.js","assets/index.8dedeae0.css","assets/index.0200dbc3.js","assets/index.950cae9e.css","assets/useCountdown.0ec6a702.js","assets/JAddInput.20a0408b.js","assets/JAddInput.8632f74c.css","assets/api.d480aed7.js","assets/props.3048bd74.js","assets/index.8c0f1045.js","assets/index.037a125c.css","assets/bem.ff3a25b6.js","assets/props.40d423fa.js","assets/useContextMenu.259c847c.js","assets/useContextMenu.e7cbf068.css","assets/index.bb17d202.js","assets/index.2254685a.css","assets/onMountedOrActivated.e88e16f1.js","assets/index.96e08025.js","assets/index.c827a9c8.css","assets/htmlmixed.37684b60.js","assets/vue.a9bc7c21.js","assets/vue.a361089e.css","assets/depart.api.546ee79f.js","assets/JUpload.5aa10044.js","assets/JUpload.bb1c69a5.css","assets/index.b1e57df7.js","assets/uniqBy.cec7465a.js","assets/useForm.db279587.js"]))},props:{theme:q.oneOf(["dark","light"])},setup(){const{prefixCls:e}=H("header-user-dropdown"),{t:i}=J(),{getShowDoc:s,getUseLockPage:d}=ne(),r=z(),p=W(),t=S(()=>{const{realname:a="",avatar:D,desc:V}=r.getUserInfo||{};return{realname:a,avatar:D||R,desc:V}}),c=S(()=>{let{avatar:a}=t.value;return a==R?a:Q(a)}),[o,{openModal:u}]=G(),m=M();function w(){u(!0)}function k(){r.confirmLoginOut()}function E(){X(oe)}function x(){return I(this,null,function*(){if((yield ae()).success){const D=yield se();Z(P),ee(P,D.result),b.success("\u5237\u65B0\u7F13\u5B58\u5B8C\u6210\uFF01")}else b.error("\u5237\u65B0\u7F13\u5B58\u5931\u8D25\uFF01")})}function B(){m.value.show()}const C=M();function $(){C.value.show(r.getUserInfo.username)}function F(a){switch(a.key){case"logout":k();break;case"doc":E();break;case"lock":w();break;case"cache":x();break;case"depart":B();break;case"password":$();break;case"account":p("/page-demo/account/setting");break}}return{prefixCls:e,t:i,getUserInfo:t,getAvatarUrl:c,handleMenuClick:F,getShowDoc:s,register:o,getUseLockPage:d,loginSelectRef:m,updatePasswordRef:C}}}),ce=["src"];function ue(e,i,s,d,r,p){const t=l("MenuItem"),c=l("MenuDivider"),o=l("Menu"),u=l("Dropdown"),m=l("LockAction"),w=l("DepartSelect"),k=l("UpdatePassword");return v(),K(j,null,[n(u,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:y(()=>[n(o,{onClick:e.handleMenuClick},{default:y(()=>[e.getShowDoc?(v(),L(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):U("",!0),e.getShowDoc?(v(),L(c,{key:1})):U("",!0),n(t,{key:"account",text:e.t("layout.header.dropdownItemSwitchAccount"),icon:"ant-design:setting-outlined"},null,8,["text"]),n(t,{key:"password",text:e.t("layout.header.dropdownItemSwitchPassword"),icon:"ant-design:edit-outlined"},null,8,["text"]),n(t,{key:"depart",text:e.t("layout.header.dropdownItemSwitchDepart"),icon:"ant-design:cluster-outlined"},null,8,["text"]),n(t,{key:"cache",text:e.t("layout.header.dropdownItemRefreshCache"),icon:"ion:sync-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:y(()=>[h("span",{class:g([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[h("img",{class:g(`${e.prefixCls}__header`),src:e.getAvatarUrl},null,10,ce),h("span",{class:g(`${e.prefixCls}__info hidden md:block`)},[h("span",{class:g([`${e.prefixCls}__name  `,"truncate"])},Y(e.getUserInfo.realname),3)],2)],2)]),_:1},8,["overlayClassName"]),n(m,{onRegister:e.register},null,8,["onRegister"]),n(w,{ref:"loginSelectRef"},null,512),n(k,{ref:"updatePasswordRef"},null,512)],64)}var we=O(re,[["render",ue]]);export{we as default};
