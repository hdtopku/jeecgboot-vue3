var A=(D,l,d)=>new Promise((i,w)=>{var S=c=>{try{p(d.next(c))}catch(y){w(y)}},o=c=>{try{p(d.throw(c))}catch(y){w(y)}},p=c=>c.done?i(c.value):Promise.resolve(c.value).then(S,o);p((d=d.apply(D,l)).next())});import{j,a7 as q,aB as R,l as H,cM as Q,ew as X,ex as Y,C,a8 as N,m as J,X as Z,s as B,t as b,N as U,O as G,K as e,v as s,w as a,aF as ee,y as f,z as g,cH as k,eC as x,b7 as se,aW as v,B as te,bY as ae,ax as oe,cv as ne,cG as le,o as ie,ac as re,eH as ue,u as de,eA as ce}from"./index.b3c2d15d.js";import{c as me}from"./checkcode.26910ff2.js";import{_ as fe}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang.d0dc7ead.js";import ge from"./ThirdModal.d146997d.js";import{c as pe,D as Ce}from"./IconFont.1753da5a.js";import{G as ye}from"./GithubFilled.a4098cb3.js";import{W as ke}from"./WechatFilled.3e3112d9.js";const xe=["src"],Re=j({__name:"LoginForm",setup(D){const l=ne,d=le,i=q.Item,w=R.Password,S=pe({scriptUrl:"//at.alicdn.com/t/font_2316098_umqusozousr.js"}),{t:o}=ie(),{notification:p,createErrorModal:c}=de(),{prefixCls:y}=H("login"),O=Q(),{setLoginState:F,getLoginState:P}=X(),{getFormRules:V}=Y(),$=C(),M=C(),E=C(!1),T=C(!1),r=N({account:"",password:"",inputCode:""}),m=N({randCodeImage:"",requestCodeSuccess:!1,checkKey:null}),{validForm:W}=ce($),L=J(()=>e(P)===x.LOGIN),I=C(),z=C();function K(){return A(this,null,function*(){const u=yield W();if(!!u)try{E.value=!0;const{userInfo:t}=yield O.login(re({password:u.password,username:u.account,captcha:u.inputCode,checkKey:m.checkKey,mode:"none"}));t&&p.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${t.realname}`,duration:3})}catch(t){p.error({message:o("sys.api.errorTip"),description:t.message||o("sys.api.networkExceptionMsg"),duration:3}),E.value=!1,t.message==="\u9A8C\u8BC1\u7801\u9519\u8BEF"?(r.inputCode="",I.value.focus(),_()):(t.message==="\u8BE5\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u8BF7\u6CE8\u518C"||t.message==="\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF")&&z.value.focus()}})}function _(){r.inputCode="",m.checkKey=1629428467008,ue(m.checkKey).then(u=>{m.randCodeImage=u,m.requestCodeSuccess=!0,I.value.focus()})}function h(u){M.value.onThirdLogin(u)}return Z(()=>{_()}),(u,t)=>(B(),b(oe,null,[U(s(fe,{class:"enter-x"},null,512),[[G,e(L)]]),U(s(e(q),{class:"p-4 enter-x",model:r,rules:e(V),ref_key:"formRef",ref:$,onKeypress:ae(K,["enter"])},{default:a(()=>[s(e(i),{name:"account",class:"enter-x"},{default:a(()=>[s(e(R),{ref_key:"usernameRef",ref:z,allowClear:"",size:"large",value:r.account,"onUpdate:value":t[0]||(t[0]=n=>r.account=n),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(i),{name:"password",class:"enter-x"},{default:a(()=>[s(e(w),{allowClear:"",size:"large",visibilityToggle:"",value:r.password,"onUpdate:value":t[1]||(t[1]=n=>r.password=n),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(d),{class:"enter-x",gutter:4},{default:a(()=>[s(e(l),{span:16},{default:a(()=>[s(e(i),{name:"inputCode",class:"enter-x"},{default:a(()=>[s(e(R),{allowClear:"",ref_key:"inputCodeRef",ref:I,autocomplete:"off",size:"large",value:r.inputCode,"onUpdate:value":t[2]||(t[2]=n=>r.inputCode=n),placeholder:e(o)("sys.login.inputCode")},null,8,["value","placeholder"])]),_:1})]),_:1}),s(e(l),{span:8},{default:a(()=>[s(e(i),{style:{"text-align":"right","margin-left":"20px"},class:"enter-x"},{default:a(()=>[m.requestCodeSuccess?(B(),b("img",{key:0,style:{"margin-top":"2px","max-width":"initial"},src:m.randCodeImage,onClick:_},null,8,xe)):(B(),b("img",{key:1,style:{"margin-top":"2px","max-width":"initial"},src:me,onClick:_}))]),_:1})]),_:1})]),_:1}),s(e(d),{class:"enter-x"},{default:a(()=>[s(e(l),{span:12},{default:a(()=>[s(e(i),null,{default:a(()=>[s(e(ee),{checked:T.value,"onUpdate:checked":t[3]||(t[3]=n=>T.value=n),size:"small"},{default:a(()=>[f(g(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(l),{span:12},{default:a(()=>[s(e(i),{style:{"text-align":"right"}},{default:a(()=>[s(e(k),{type:"link",size:"small",onClick:t[4]||(t[4]=n=>e(F)(e(x).RESET_PASSWORD))},{default:a(()=>[f(g(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(k),{type:"primary",size:"large",block:"",onClick:K,loading:E.value},{default:a(()=>[f(g(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),s(e(d),{class:"enter-x"},{default:a(()=>[s(e(l),{md:8,xs:24},{default:a(()=>[s(e(k),{block:"",onClick:t[5]||(t[5]=n=>e(F)(e(x).MOBILE))},{default:a(()=>[f(g(e(o)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),s(e(l),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:a(()=>[s(e(k),{block:"",onClick:t[6]||(t[6]=n=>e(F)(e(x).QR_CODE))},{default:a(()=>[f(g(e(o)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),s(e(l),{md:7,xs:24},{default:a(()=>[s(e(k),{block:"",onClick:t[7]||(t[7]=n=>e(F)(e(x).REGISTER))},{default:a(()=>[f(g(e(o)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1}),s(e(se),{class:"enter-x"},{default:a(()=>[f(g(e(o)("sys.login.otherSignIn")),1)]),_:1}),v("div",{class:te(["flex justify-evenly enter-x",`${e(y)}-sign-in-way`])},[v("a",{onClick:t[8]||(t[8]=n=>h("github")),title:"github"},[s(e(ye))]),v("a",{onClick:t[9]||(t[9]=n=>h("wechat_enterprise")),title:"\u4F01\u4E1A\u5FAE\u4FE1"},[s(e(S),{class:"item-icon",type:"icon-qiyeweixin3"})]),v("a",{onClick:t[10]||(t[10]=n=>h("dingtalk")),title:"\u9489\u9489"},[s(e(Ce))]),v("a",{onClick:t[11]||(t[11]=n=>h("wechat_open")),title:"\u5FAE\u4FE1"},[s(e(ke))])],2)]),_:1},8,["model","rules","onKeypress"]),[[G,e(L)]]),s(ge,{ref_key:"thirdModalRef",ref:M},null,512)],64))}});export{Re as _};