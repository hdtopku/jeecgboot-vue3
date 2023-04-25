var k=(x,i,u)=>new Promise((o,m)=>{var g=r=>{try{f(u.next(r))}catch(c){m(c)}},p=r=>{try{f(u.throw(r))}catch(c){m(c)}},f=r=>r.done?o(r.value):Promise.resolve(r.value).then(g,p);f((u=u.apply(x,i)).next())});import{_ as E}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang.d0dc7ead.js";import{j as F,a7 as C,aB as y,ew as P,C as b,a8 as B,ex as M,m as T,K as e,s as U,t as L,v as a,w as n,aF as N,y as w,z as v,cH as R,ax as V,R as A,o as D,eI as G,ac as j,dc as H,ez as K,u as $,eA as q,eC as J}from"./index.b3c2d15d.js";import{S as O}from"./index.95188f97.js";import{C as Q}from"./index.cc84c2d8.js";const se=F({__name:"RegisterForm",setup(x){const i=C.Item,u=y.Password,{t:o}=D(),{handleBackLogin:m,getLoginState:g}=P(),{notification:p,createErrorModal:f}=$(),r=b(),c=b(!1),l=B({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:h}=M(l),{validForm:I}=q(r),S=T(()=>e(g)===J.REGISTER);function _(){return k(this,null,function*(){const d=yield I();if(!!d)try{c.value=!0;const s=yield G(j({username:d.account,password:d.password,phone:d.mobile,smscode:d.sms}));s&&s.data.success?(p.success({description:s.data.message||o("sys.api.registerMsg"),duration:3}),m()):p.warning({message:o("sys.api.errorTip"),description:s.data.message||o("sys.api.networkExceptionMsg"),duration:3})}catch(s){p.error({message:o("sys.api.errorTip"),description:s.message||o("sys.api.networkExceptionMsg"),duration:3})}finally{c.value=!1}})}function z(){return H({mobile:l.mobile,smsmode:K.REGISTER})}return(d,s)=>e(S)?(U(),L(V,{key:0},[a(E,{class:"enter-x"}),a(e(C),{class:"p-4 enter-x",model:l,rules:e(h),ref_key:"formRef",ref:r},{default:n(()=>[a(e(i),{name:"account",class:"enter-x"},{default:n(()=>[a(e(y),{class:"fix-auto-fill",size:"large",value:l.account,"onUpdate:value":s[0]||(s[0]=t=>l.account=t),placeholder:e(o)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"mobile",class:"enter-x"},{default:n(()=>[a(e(y),{size:"large",value:l.mobile,"onUpdate:value":s[1]||(s[1]=t=>l.mobile=t),placeholder:e(o)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"sms",class:"enter-x"},{default:n(()=>[a(e(Q),{size:"large",class:"fix-auto-fill",value:l.sms,"onUpdate:value":s[2]||(s[2]=t=>l.sms=t),placeholder:e(o)("sys.login.smsCode"),sendCodeApi:z},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"password",class:"enter-x"},{default:n(()=>[a(e(O),{size:"large",value:l.password,"onUpdate:value":s[3]||(s[3]=t=>l.password=t),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"confirmPassword",class:"enter-x"},{default:n(()=>[a(e(u),{size:"large",visibilityToggle:"",value:l.confirmPassword,"onUpdate:value":s[4]||(s[4]=t=>l.confirmPassword=t),placeholder:e(o)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),a(e(i),{class:"enter-x",name:"policy"},{default:n(()=>[a(e(N),{checked:l.policy,"onUpdate:checked":s[5]||(s[5]=t=>l.policy=t),size:"small"},{default:n(()=>[w(v(e(o)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),a(e(R),{type:"primary",class:"enter-x",size:"large",block:"",onClick:_,loading:c.value},{default:n(()=>[w(v(e(o)("sys.login.registerButton")),1)]),_:1},8,["loading"]),a(e(R),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(m)},{default:n(()=>[w(v(e(o)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):A("",!0)}});export{se as _};