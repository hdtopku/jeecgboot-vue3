import{al as d,A as f,aw as k,ax as S,D as B}from"./jeecg-online-vendor-59c8fbe3.js";import{l as L,m as y}from"./index-7711d1b4.js";import{useHeaderSetting as D}from"./useHeaderSetting-271c1bdc.js";import w from"./SessionTimeoutLogin-bec953ff.js";import{bc as P}from"./antd-vue-vendor-a78909e6.js";import{d as C,e as T,u as o,V as r,a5 as n,a6 as x,f as E,a9 as m,W as p,am as F,F as I}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-173f2e92.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./Login.vue_vue_type_style_index_0_lang-596eb2b3.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-4677e92a.js";import"./checkcode-5ec5fe8f.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-5f2c9d18.js";import"./ThirdModal-d6ef30bc.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./useFormItem-d5fd9260.js";import"./useThirdLogin-b9d83f30.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-7725cf0a.js";import"./step1-5a0de3c2.js";import"./step2-c7e4d0a8.js";import"./index-4812645e.js";import"./step3-bbe0168d.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-7270e51b.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-90b151f6.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-c54c82ad.js";import"./index-32018ce5.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";const v=C({name:"LayoutFeatures",components:{BackTop:P,LayoutLockPage:d(()=>f(()=>import("./index-4c0e88cc.js"),["js/index-4c0e88cc.js","js/vue-bcbaddf9.js","js/LockPage-ead5008d.js","js/jeecg-online-vendor-59c8fbe3.js","js/antd-vue-vendor-a78909e6.js","js/tinymce-vendor-676f8393.js","js/vxe-table-vendor-173f2e92.js","js/lodash-es-vendor-9b741fb8.js","assets/jeecg-online-vendor-cee2ba5d.css","js/index-7711d1b4.js","js/echarts-vendor-6c8e2159.js","assets/index-ed657c38.css","js/lock-2860e85e.js","js/header-55b09394.js","assets/LockPage-f7242210.css"])),SettingDrawer:d(()=>f(()=>import("./index-9400f7ac.js").then(t=>t.i),["js/index-9400f7ac.js","js/index-45dd8c08.js","js/jeecg-online-vendor-59c8fbe3.js","js/vue-bcbaddf9.js","js/antd-vue-vendor-a78909e6.js","js/tinymce-vendor-676f8393.js","js/vxe-table-vendor-173f2e92.js","js/lodash-es-vendor-9b741fb8.js","assets/jeecg-online-vendor-cee2ba5d.css","js/index-7711d1b4.js","js/echarts-vendor-6c8e2159.js","assets/index-ed657c38.css","assets/index-60383c19.css","js/useHeaderSetting-271c1bdc.js","js/useMultipleTabSetting-4def365c.js"])),SessionTimeoutLogin:w},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=L(),_=k(),{prefixCls:l}=y("setting-drawer-fearure"),{getShowHeader:i}=D(),s=T(()=>_.getSessionTimeout),a=T(()=>{if(!o(u))return!1;const e=o(c);return e===S.AUTO?!o(i)||o(g):e===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:l,getIsSessionTimeout:s}}});function O(t,u,c,g,_,l){const i=r("LayoutLockPage"),s=r("BackTop"),a=r("SettingDrawer"),e=r("SessionTimeoutLogin");return n(),x(I,null,[E(i),t.getUseOpenBackTop?(n(),m(s,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(n(),m(a,{key:1,class:F(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(n(),m(e,{key:2})):p("",!0)],64)}const pt=B(v,[["render",O]]);export{pt as default};