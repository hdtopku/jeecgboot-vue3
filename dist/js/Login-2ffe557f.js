import{d as h,e as g,a7 as i,a8 as w,u as e,ac as m,W as c,ad as t,f as o,ae as p,ak as x}from"./vue-ebecda47.js";import{m as y,av as v,aw as k,ax as d}from"./index-85cfc899.js";import L from"./LoginForm-7444acaa.js";import b from"./ForgetPasswordForm-b431ffee.js";import B from"./RegisterForm-58737cba.js";import S from"./MobileForm-a73013c7.js";import T from"./QrCodeForm-189419b4.js";import{m as $,a2 as C,bl as D,B as A}from"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";import"./checkcode-5ec5fe8f.js";import"./LoginFormTitle-bc614cb9.js";import"./ThirdModal-d1ac73b5.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./useThirdLogin-4c6a375c.js";import"./step1-9cf77093.js";import"./step2-fc8b2099.js";import"./index-96e99de8.js";import"./step3-379e5201.js";import"./index-8a445732.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";const I="/assets/login-box-bg-9027741f.svg",N={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},P={class:"flex h-full"},z={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},E={class:"my-auto"},G=["alt"],M={class:"mt-10 font-medium text-white -enter-x"},W={class:"inline-block mt-4 text-3xl"},j={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},q={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},wt=h({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(l){const s=$(),{prefixCls:n}=y("login"),{t:r}=A(),_=C().getShowPicker,u=g(()=>{var a;return(a=s==null?void 0:s.title)!=null?a:""}),{handleBackLogin:f}=D();return f(),(a,H)=>(i(),w("div",{class:x([e(n),"relative w-full h-full px-4"])},[!l.sessionTimeout&&e(_)?(i(),m(e(v),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),l.sessionTimeout?c("",!0):(i(),m(e(k),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",N,[o(e(d),{alwaysShowTitle:!0})]),t("div",V,[t("div",P,[t("div",z,[o(e(d),{class:"-enter-x"}),t("div",E,[t("img",{alt:u.value,src:I,class:"w-1/2 -mt-16 -enter-x"},null,8,G),t("div",M,[t("span",W,p(e(r)("sys.login.signInTitle")),1)]),t("div",j,p(e(r)("sys.login.signInDesc")),1)])]),t("div",q,[t("div",{class:x([`${e(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[o(L),o(b),o(B),o(S),o(T)],2)])])])],2))}});export{wt as default};