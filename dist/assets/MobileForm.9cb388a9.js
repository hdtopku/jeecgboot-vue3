var _=(b,i,s)=>new Promise((f,m)=>{var g=a=>{try{u(s.next(a))}catch(n){m(n)}},c=a=>{try{u(s.throw(a))}catch(n){m(n)}},u=a=>a.done?f(a.value):Promise.resolve(a.value).then(g,c);u((s=s.apply(b,i)).next())});import{l as L,bZ as x,s as E,dV as R,dW as B,d4 as z,F as S,a7 as D,o as M,L as e,d$ as V,v as T,x as $,y as t,z as r,aA as A,cF as k,C as v,D as C,aw as N,W as O,ab as U,d5 as W,dY as Z,u as G,dZ as P}from"./index.a1b4e527.js";import{C as Y}from"./index.0200dbc3.js";import j from"./LoginFormTitle.f7cce35b.js";import"./useCountdown.0ec6a702.js";import"./useFormItem.f45f8681.js";const ee=L({__name:"MobileForm",setup(b){const i=x.Item,{t:s}=E(),{handleBackLogin:f,getLoginState:m}=R(),{getFormRules:g}=B(),{notification:c,createErrorModal:u}=G(),a=z(),n=S(),p=S(!1),l=D({mobile:"",sms:""}),{validForm:F}=P(n),h=M(()=>e(m)===V.MOBILE);function w(){return _(this,null,function*(){const d=yield F();if(!!d)try{p.value=!0;const o=yield a.phoneLogin(U({mobile:d.mobile,captcha:d.sms,mode:"none"}));o&&c.success({message:s("sys.login.loginSuccessTitle"),description:`${s("sys.login.loginSuccessDesc")}: ${o.realname}`,duration:3})}catch(o){c.error({message:s("sys.api.errorTip"),description:o.message||s("sys.api.networkExceptionMsg"),duration:3})}finally{p.value=!1}})}function I(){return W({mobile:l.mobile,smsmode:Z.FORGET_PASSWORD})}return(d,o)=>e(h)?(T(),$(N,{key:0},[t(j,{class:"enter-x"}),t(e(x),{class:"p-4 enter-x",model:l,rules:e(g),ref_key:"formRef",ref:n},{default:r(()=>[t(e(i),{name:"mobile",class:"enter-x"},{default:r(()=>[t(e(A),{size:"large",value:l.mobile,"onUpdate:value":o[0]||(o[0]=y=>l.mobile=y),placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),t(e(i),{name:"sms",class:"enter-x"},{default:r(()=>[t(e(Y),{size:"large",class:"fix-auto-fill",value:l.sms,"onUpdate:value":o[1]||(o[1]=y=>l.sms=y),placeholder:e(s)("sys.login.smsCode"),sendCodeApi:I},null,8,["value","placeholder"])]),_:1}),t(e(i),{class:"enter-x"},{default:r(()=>[t(e(k),{type:"primary",size:"large",block:"",onClick:w,loading:p.value},{default:r(()=>[v(C(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),t(e(k),{size:"large",block:"",class:"mt-4",onClick:e(f)},{default:r(()=>[v(C(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):O("",!0)}});export{ee as default};