import{l as s,m as e,n as t,s as o,e3 as l,o as a,dY as i,v as r,x as m,L as n,V as d,e4 as x,W as p,e5 as f,aW as c,y as u,e6 as g,D as h,E as b}from"./index.435ab247.js";import j from"./LoginForm.917046e3.js";import w from"./ForgetPasswordForm.b5dd94aa.js";import v from"./RegisterForm.49fe0b96.js";import y from"./MobileForm.60e274a5.js";import F from"./QrCodeForm.94cba520.js";import"./LoginFormTitle.1ffee45b.js";import"./ThirdModal.d8637fb8.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./useFormItem.816007c4.js";import"./useThirdLogin.b8507d93.js";import"./GithubFilled.7512aaec.js";import"./WechatFilled.6dcef507.js";import"./step1.5738739f.js";import"./step2.d1b51a8a.js";import"./index.a5502478.js";import"./step3.ee7fb14d.js";import"./index.9f9b4aa0.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";const T={class:"-enter-x xl:hidden"},k={class:"container relative h-full py-2 mx-auto sm:px-10"},L={class:"flex h-full"},C={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},I={class:"my-auto"},W=["alt"],B={class:"mt-10 font-medium text-white -enter-x"},D={class:"inline-block mt-4 text-3xl"},M={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},P={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},S=s({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(s){const S=e(),{prefixCls:_}=t("login"),{t:E}=o(),G=l().getShowPicker,Q=a((()=>{var s;return null!=(s=null==S?void 0:S.title)?s:""})),{handleBackLogin:R}=i();return R(),(e,t)=>(r(),m("div",{class:b([n(_),"relative w-full h-full px-4"])},[!s.sessionTimeout&&n(G)?(r(),d(n(x),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):p("",!0),s.sessionTimeout?p("",!0):(r(),d(n(f),{key:1,class:"absolute top-3 right-7 enter-x"})),c("span",T,[u(n(g),{alwaysShowTitle:!0})]),c("div",k,[c("div",L,[c("div",C,[u(n(g),{class:"-enter-x"}),c("div",I,[c("img",{alt:n(Q),src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,W),c("div",B,[c("span",D,h(n(E)("sys.login.signInTitle")),1)]),c("div",M,h(n(E)("sys.login.signInDesc")),1)])]),c("div",P,[c("div",{class:b([`${n(_)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[u(j),u(w),u(v),u(y),u(F)],2)])])])],2))}});export{S as default};