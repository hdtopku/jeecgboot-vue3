var k=(x,i,d)=>new Promise((o,m)=>{var g=r=>{try{f(d.next(r))}catch(c){m(c)}},p=r=>{try{f(d.throw(r))}catch(c){m(c)}},f=r=>r.done?o(r.value):Promise.resolve(r.value).then(g,p);f((d=d.apply(x,i)).next())});import F from"./LoginFormTitle.e971e6f9.js";import{l as _,bZ as b,aA as y,s as P,dY as M,F as C,a7 as T,dZ as U,o as B,L as e,e2 as L,v as N,x as V,y as a,z as n,aE as D,C as w,D as v,cI as h,aw as A,W as G,eb as Z,ab as $,d8 as W,d$ as Y,u as j,e0 as q}from"./index.23784a6b.js";import{S as H}from"./index.52e05db7.js";import{C as J}from"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./useFormItem.aa979107.js";const oe=_({__name:"RegisterForm",setup(x){const i=b.Item,d=y.Password,{t:o}=P(),{handleBackLogin:m,getLoginState:g}=M(),{notification:p,createErrorModal:f}=j(),r=C(),c=C(!1),l=T({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:E}=U(l),{validForm:I}=q(r),R=B(()=>e(g)===L.REGISTER);function S(){return k(this,null,function*(){const u=yield I();if(!!u)try{c.value=!0;const s=yield Z($({username:u.account,password:u.password,phone:u.mobile,smscode:u.sms}));s&&s.data.success?(p.success({description:s.data.message||o("sys.api.registerMsg"),duration:3}),m()):p.warning({message:o("sys.api.errorTip"),description:s.data.message||o("sys.api.networkExceptionMsg"),duration:3})}catch(s){p.error({message:o("sys.api.errorTip"),description:s.message||o("sys.api.networkExceptionMsg"),duration:3})}finally{c.value=!1}})}function z(){return W({mobile:l.mobile,smsmode:Y.REGISTER})}return(u,s)=>e(R)?(N(),V(A,{key:0},[a(F,{class:"enter-x"}),a(e(b),{class:"p-4 enter-x",model:l,rules:e(E),ref_key:"formRef",ref:r},{default:n(()=>[a(e(i),{name:"account",class:"enter-x"},{default:n(()=>[a(e(y),{class:"fix-auto-fill",size:"large",value:l.account,"onUpdate:value":s[0]||(s[0]=t=>l.account=t),placeholder:e(o)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"mobile",class:"enter-x"},{default:n(()=>[a(e(y),{size:"large",value:l.mobile,"onUpdate:value":s[1]||(s[1]=t=>l.mobile=t),placeholder:e(o)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"sms",class:"enter-x"},{default:n(()=>[a(e(J),{size:"large",class:"fix-auto-fill",value:l.sms,"onUpdate:value":s[2]||(s[2]=t=>l.sms=t),placeholder:e(o)("sys.login.smsCode"),sendCodeApi:z},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"password",class:"enter-x"},{default:n(()=>[a(e(H),{size:"large",value:l.password,"onUpdate:value":s[3]||(s[3]=t=>l.password=t),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"confirmPassword",class:"enter-x"},{default:n(()=>[a(e(d),{size:"large",visibilityToggle:"",value:l.confirmPassword,"onUpdate:value":s[4]||(s[4]=t=>l.confirmPassword=t),placeholder:e(o)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),a(e(i),{class:"enter-x",name:"policy"},{default:n(()=>[a(e(D),{checked:l.policy,"onUpdate:checked":s[5]||(s[5]=t=>l.policy=t),size:"small"},{default:n(()=>[w(v(e(o)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),a(e(h),{type:"primary",class:"enter-x",size:"large",block:"",onClick:S,loading:c.value},{default:n(()=>[w(v(e(o)("sys.login.registerButton")),1)]),_:1},8,["loading"]),a(e(h),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(m)},{default:n(()=>[w(v(e(o)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):G("",!0)}});export{oe as default};