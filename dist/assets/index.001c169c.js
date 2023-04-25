var I=(e,i,a)=>new Promise((d,r)=>{var p=o=>{try{c(a.next(o))}catch(u){r(u)}},t=o=>{try{c(a.throw(o))}catch(u){r(u)}},c=o=>o.done?d(o.value):Promise.resolve(o.value).then(p,t);c((a=a.apply(e,i)).next())});import{j as O,bd as V,be as S,c0 as f,c1 as _,aN as N,l as q,cM as z,e8 as H,m as A,bI as W,C as M,o as j,a as G,a0 as K,eR as Q,eT as Y,eS as L,u as J,q as X,r as l,s as C,t as Z,v as n,w as y,Q as R,R as U,aW as h,B as g,z as ee,ax as te}from"./index.b3c2d15d.js";import{S as oe}from"./siteSetting.276b5abd.js";import{useHeaderSetting as ne}from"./useHeaderSetting.74e46005.js";import"./index.c08fb6c5.js";import{h as P}from"./header.42ca8d70.js";import{r as se,q as ae}from"./dict.api.b29d78bd.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";const{createMessage:b}=J(),re=O({name:"UserDropdown",components:{Dropdown:V,Menu:S,MenuItem:f(()=>_(()=>import("./DropMenuItem.222b1c6f.js"),["assets/DropMenuItem.222b1c6f.js","assets/index.b3c2d15d.js","assets/index.952795ec.css"])),MenuDivider:S.Divider,LockAction:f(()=>_(()=>import("./LockModal.5ed003ae.js"),["assets/LockModal.5ed003ae.js","assets/index.b3c2d15d.js","assets/index.952795ec.css","assets/index.c08fb6c5.js","assets/BasicModal.52351894.js","assets/useWindowSizeFn.144e77df.js","assets/BasicModal.1e1b2ed9.css","assets/index.361bf2db.css","assets/BasicForm.1d30e5fc.js","assets/BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js","assets/componentMap.a24260de.js","assets/useFormItem.1acc993a.js","assets/functional.cce3c468.js","assets/functional.646074a9.css","assets/download.16daa9fa.js","assets/base64Conver.030fa32c.js","assets/index.95188f97.js","assets/index.399aa0e3.css","assets/index.cc84c2d8.js","assets/useCountdown.16084cef.js","assets/index.15cc10f8.css","assets/JAddInput.eb06f3b7.js","assets/areaDataUtil.26505ac2.js","assets/api.363f3378.js","assets/props.a330435c.js","assets/index.33ba4a29.js","assets/bem.d150d109.js","assets/props.c98c16cc.js","assets/useContextMenu.009c9f83.js","assets/useContextMenu.6fcaad79.css","assets/index.a95e0833.css","assets/index.fbf1ecdc.js","assets/onMountedOrActivated.5e737d19.js","assets/index.e8c59073.css","assets/index.b7730792.js","assets/index.b60dd2d8.css","assets/htmlmixed.5c08416b.js","assets/vue.0f98f912.js","assets/vue.8a3c1e84.css","assets/depart.api.9aefc0f7.js","assets/JAddInput.b6facc5a.css","assets/idea.2e5fc283.css","assets/JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js","assets/JUpload.557f03ea.css","assets/index.717ec1b1.js","assets/index.03fb2e5d.js","assets/index.600d2c21.css","assets/componentMap.524c5264.css","assets/uniqBy.7d054233.js","assets/BasicForm.384f4697.css","assets/useForm.853cc25f.js","assets/lock.59b4571d.js","assets/header.42ca8d70.js","assets/LockModal.aba0abca.css"])),DepartSelect:f(()=>_(()=>import("./DepartSelect.73985598.js"),["assets/DepartSelect.73985598.js","assets/index.c08fb6c5.js","assets/index.b3c2d15d.js","assets/index.952795ec.css","assets/BasicModal.52351894.js","assets/useWindowSizeFn.144e77df.js","assets/BasicModal.1e1b2ed9.css","assets/index.361bf2db.css","assets/depart.api.9aefc0f7.js","assets/tenant.api.32670921.js","assets/DepartSelect.335dfc8f.css"])),UpdatePassword:f(()=>_(()=>import("./UpdatePassword.ad7cf90b.js"),["assets/UpdatePassword.ad7cf90b.js","assets/validator.020069d8.js","assets/index.b3c2d15d.js","assets/index.952795ec.css","assets/user.api.08ebfe0a.js","assets/index.c08fb6c5.js","assets/BasicModal.52351894.js","assets/useWindowSizeFn.144e77df.js","assets/BasicModal.1e1b2ed9.css","assets/index.361bf2db.css","assets/BasicForm.1d30e5fc.js","assets/BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js","assets/componentMap.a24260de.js","assets/useFormItem.1acc993a.js","assets/functional.cce3c468.js","assets/functional.646074a9.css","assets/download.16daa9fa.js","assets/base64Conver.030fa32c.js","assets/index.95188f97.js","assets/index.399aa0e3.css","assets/index.cc84c2d8.js","assets/useCountdown.16084cef.js","assets/index.15cc10f8.css","assets/JAddInput.eb06f3b7.js","assets/areaDataUtil.26505ac2.js","assets/api.363f3378.js","assets/props.a330435c.js","assets/index.33ba4a29.js","assets/bem.d150d109.js","assets/props.c98c16cc.js","assets/useContextMenu.009c9f83.js","assets/useContextMenu.6fcaad79.css","assets/index.a95e0833.css","assets/index.fbf1ecdc.js","assets/onMountedOrActivated.5e737d19.js","assets/index.e8c59073.css","assets/index.b7730792.js","assets/index.b60dd2d8.css","assets/htmlmixed.5c08416b.js","assets/vue.0f98f912.js","assets/vue.8a3c1e84.css","assets/depart.api.9aefc0f7.js","assets/JAddInput.b6facc5a.css","assets/idea.2e5fc283.css","assets/JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js","assets/JUpload.557f03ea.css","assets/index.717ec1b1.js","assets/index.03fb2e5d.js","assets/index.600d2c21.css","assets/componentMap.524c5264.css","assets/uniqBy.7d054233.js","assets/BasicForm.384f4697.css","assets/useForm.853cc25f.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const{prefixCls:e}=q("header-user-dropdown"),{t:i}=j(),{getShowDoc:a,getUseLockPage:d}=ne(),r=z(),p=H(),t=A(()=>{const{realname:s="",avatar:D,desc:F}=r.getUserInfo||{};return{realname:s,avatar:D||P,desc:F}}),c=A(()=>{let{avatar:s}=t.value;return s==P?s:G(s)}),[o,{openModal:u}]=W(),m=M();function w(){u(!0)}function k(){r.confirmLoginOut()}function B(){K(oe)}function E(){return I(this,null,function*(){if((yield se()).success){const D=yield ae();Q(L),Y(L,D.result),b.success("\u5237\u65B0\u7F13\u5B58\u5B8C\u6210\uFF01")}else b.error("\u5237\u65B0\u7F13\u5B58\u5931\u8D25\uFF01")})}function x(){m.value.show()}const v=M();function $(){v.value.show(r.getUserInfo.username)}function T(s){switch(s.key){case"logout":k();break;case"doc":B();break;case"lock":w();break;case"cache":E();break;case"depart":x();break;case"password":$();break;case"account":p("/system/usersetting");break}}return{prefixCls:e,t:i,getUserInfo:t,getAvatarUrl:c,handleMenuClick:T,getShowDoc:a,register:o,getUseLockPage:d,loginSelectRef:m,updatePasswordRef:v}}});const ce=["src"];function ue(e,i,a,d,r,p){const t=l("MenuItem"),c=l("MenuDivider"),o=l("Menu"),u=l("Dropdown"),m=l("LockAction"),w=l("DepartSelect"),k=l("UpdatePassword");return C(),Z(te,null,[n(u,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:y(()=>[n(o,{onClick:e.handleMenuClick},{default:y(()=>[e.getShowDoc?(C(),R(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):U("",!0),e.getShowDoc?(C(),R(c,{key:1})):U("",!0),n(t,{key:"account",text:e.t("layout.header.dropdownItemSwitchAccount"),icon:"ant-design:setting-outlined"},null,8,["text"]),n(t,{key:"password",text:e.t("layout.header.dropdownItemSwitchPassword"),icon:"ant-design:edit-outlined"},null,8,["text"]),n(t,{key:"depart",text:e.t("layout.header.dropdownItemSwitchDepart"),icon:"ant-design:cluster-outlined"},null,8,["text"]),n(t,{key:"cache",text:e.t("layout.header.dropdownItemRefreshCache"),icon:"ion:sync-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:y(()=>[h("span",{class:g([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[h("img",{class:g(`${e.prefixCls}__header`),src:e.getAvatarUrl},null,10,ce),h("span",{class:g(`${e.prefixCls}__info hidden md:block`)},[h("span",{class:g([`${e.prefixCls}__name  `,"truncate"])},ee(e.getUserInfo.realname),3)],2)],2)]),_:1},8,["overlayClassName"]),n(m,{onRegister:e.register},null,8,["onRegister"]),n(w,{ref:"loginSelectRef"},null,512),n(k,{ref:"updatePasswordRef"},null,512)],64)}const we=X(re,[["render",ue]]);export{we as default};