import{d as i,e as r,u as l,a7 as a,a8 as m,ae as g}from"./vue-ebecda47.js";import{bl as c,br as e,B as p}from"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";const u={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},I=i({__name:"LoginFormTitle",setup(_){const{t}=p(),{getLoginState:o}=c(),n=r(()=>({[e.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[e.LOGIN]:t("sys.login.signInFormTitle"),[e.REGISTER]:t("sys.login.signUpFormTitle"),[e.MOBILE]:t("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:t("sys.login.qrSignInFormTitle")})[l(o)]);return(s,x)=>(a(),m("h2",u,g(n.value),1))}});export{I as default};