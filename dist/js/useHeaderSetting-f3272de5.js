import{h as O,M as l}from"./jeecg-online-vendor-ecddc31b.js";import{j as k,k as P,l as j}from"./index-b03d7914.js";import{e as t,u as e}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";function G(){const{getFullContent:S}=k(),o=O(),a=t(()=>!e(S)&&e(s)&&e(r)&&!e(u)&&!e(g)),p=t(()=>!e(H)&&!e(a)),m=t(()=>{const n=!e(S)&&e(r);return n&&!e(s)||n&&e(u)||n&&e(g)}),{getMenuMode:c,getSplit:i,getShowHeaderTrigger:f,getIsSidebarType:d,getIsMixSidebar:g,getIsTopMenu:u}=P(),{getShowBreadCrumb:h,getShowLogo:M}=j(),s=t(()=>!e(d)&&e(r)),F=t(()=>o.getHeaderSetting.showDoc),C=t(()=>o.getHeaderSetting.theme),r=t(()=>o.getHeaderSetting.show),H=t(()=>o.getHeaderSetting.fixed),T=t(()=>o.getHeaderSetting.bgColor),x=t(()=>o.getHeaderSetting.showSearch),I=t(()=>o.getHeaderSetting.useLockPage),L=t(()=>o.getHeaderSetting.showFullScreen),R=t(()=>o.getHeaderSetting.showNotice),w=t(()=>e(c)!==l.HORIZONTAL&&e(h)&&!e(i)),b=t(()=>e(c)!==l.HORIZONTAL&&!e(h)&&!e(i)),A=t(()=>e(M)&&!e(d)&&!e(g)),B=t(()=>e(w)||e(f));function N(n){o.setProjectConfig({headerSetting:n})}return{setHeaderSetting:N,getShowDoc:F,getShowSearch:x,getHeaderTheme:C,getUseLockPage:I,getShowFullScreen:L,getShowNotice:R,getShowBread:w,getShowContent:B,getShowHeaderLogo:A,getShowHeader:r,getFixed:H,getShowMixHeaderRef:s,getShowFullHeaderRef:a,getShowInsetHeaderRef:m,getUnFixedAndFull:p,getHeaderBgColor:T,getShowBreadTitle:b}}export{G as useHeaderSetting};