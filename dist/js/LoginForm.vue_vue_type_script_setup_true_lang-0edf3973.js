var K=(D,n,d)=>new Promise((i,w)=>{var S=c=>{try{p(d.next(c))}catch(y){w(y)}},o=c=>{try{p(d.throw(c))}catch(y){w(y)}},p=c=>c.done?i(c.value):Promise.resolve(c.value).then(S,o);p((d=d.apply(D,n)).next())});import{d as W,k as C,r as U,e as J,o as Q,aV as I,as as R,v as q,A as N,f as s,bi as a,u as e,E as f,ag as g,at as k,ad as H,bz as X,F as Y,J as Z}from"./vue-c7e3516e.js";import{c as ee}from"./checkcode-7ae99ee3.js";import{bC as se,c as te,bD as ae,bE as oe,bF as le,k as ne,bG as ie,l as re}from"./jeecg-online-vendor-bf2efbcb.js";import{l as ue,au as de,av as ce,ay as v,ax as me}from"./index-fde9c72f.js";import{_ as fe}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-788f6989.js";import ge from"./ThirdModal-ec9242fa.js";import{cS as V,ce as B,cv as pe,cn as x,cI as Ce,cU as ye,cT as ke}from"./antd-vue-vendor-1561c1ba.js";const ve=["src"],Ie=W({__name:"LoginForm",setup(D){const n=ye,d=ke,i=V.Item,w=B.Password,S=se({scriptUrl:"//at.alicdn.com/t/font_2316098_umqusozousr.js"}),{t:o}=ne(),{notification:p,createErrorModal:c}=re(),{prefixCls:y}=ue("login"),G=te(),{setLoginState:F,getLoginState:O}=de(),{getFormRules:P}=ce(),T=C(),$=C(),h=C(!1),L=C(!1),r=U({account:"",password:"",inputCode:""}),m=U({randCodeImage:"",requestCodeSuccess:!1,checkKey:null}),{validForm:j}=me(T),M=J(()=>e(O)===v.LOGIN),b=C(),z=C();function A(){return K(this,null,function*(){const u=yield j();if(!!u)try{h.value=!0;const{userInfo:t}=yield G.login(Z({password:u.password,username:u.account,captcha:u.inputCode,checkKey:m.checkKey,mode:"none"}));t&&p.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${t.realname}`,duration:3})}catch(t){p.error({message:o("sys.api.errorTip"),description:t.message||o("sys.api.networkExceptionMsg"),duration:3}),h.value=!1,t.message==="\u9A8C\u8BC1\u7801\u9519\u8BEF"?(r.inputCode="",b.value.focus(),_()):(t.message==="\u8BE5\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u8BF7\u6CE8\u518C"||t.message==="\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF")&&z.value.focus()}})}function _(){r.inputCode="",m.checkKey=1629428467008,ie(m.checkKey).then(u=>{m.randCodeImage=u,m.requestCodeSuccess=!0,b.value.focus()})}function E(u){$.value.onThirdLogin(u)}return Q(()=>{_()}),(u,t)=>(I(),R(Y,null,[q(s(fe,{class:"enter-x"},null,512),[[N,M.value]]),q(s(e(V),{class:"p-4 enter-x",model:r,rules:e(P),ref_key:"formRef",ref:T,onKeypress:X(A,["enter"])},{default:a(()=>[s(e(i),{name:"account",class:"enter-x"},{default:a(()=>[s(e(B),{ref_key:"usernameRef",ref:z,allowClear:"",size:"large",value:r.account,"onUpdate:value":t[0]||(t[0]=l=>r.account=l),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(i),{name:"password",class:"enter-x"},{default:a(()=>[s(e(w),{allowClear:"",size:"large",visibilityToggle:"",value:r.password,"onUpdate:value":t[1]||(t[1]=l=>r.password=l),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(d),{class:"enter-x",gutter:4},{default:a(()=>[s(e(n),{span:16},{default:a(()=>[s(e(i),{name:"inputCode",class:"enter-x"},{default:a(()=>[s(e(B),{allowClear:"",ref_key:"inputCodeRef",ref:b,autocomplete:"off",size:"large",value:r.inputCode,"onUpdate:value":t[2]||(t[2]=l=>r.inputCode=l),placeholder:e(o)("sys.login.inputCode")},null,8,["value","placeholder"])]),_:1})]),_:1}),s(e(n),{span:8},{default:a(()=>[s(e(i),{style:{"text-align":"right","margin-left":"20px"},class:"enter-x"},{default:a(()=>[m.requestCodeSuccess?(I(),R("img",{key:0,style:{"margin-top":"2px","max-width":"initial"},src:m.randCodeImage,onClick:_},null,8,ve)):(I(),R("img",{key:1,style:{"margin-top":"2px","max-width":"initial"},src:ee,onClick:_}))]),_:1})]),_:1})]),_:1}),s(e(d),{class:"enter-x"},{default:a(()=>[s(e(n),{span:12},{default:a(()=>[s(e(i),null,{default:a(()=>[s(e(pe),{checked:L.value,"onUpdate:checked":t[3]||(t[3]=l=>L.value=l),size:"small"},{default:a(()=>[f(g(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(n),{span:12},{default:a(()=>[s(e(i),{style:{"text-align":"right"}},{default:a(()=>[s(e(x),{type:"link",size:"small",onClick:t[4]||(t[4]=l=>e(F)(e(v).RESET_PASSWORD))},{default:a(()=>[f(g(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(x),{type:"primary",size:"large",block:"",onClick:A,loading:h.value},{default:a(()=>[f(g(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),s(e(d),{class:"enter-x"},{default:a(()=>[s(e(n),{md:8,xs:24},{default:a(()=>[s(e(x),{block:"",onClick:t[5]||(t[5]=l=>e(F)(e(v).MOBILE))},{default:a(()=>[f(g(e(o)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),s(e(n),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:a(()=>[s(e(x),{block:"",onClick:t[6]||(t[6]=l=>e(F)(e(v).QR_CODE))},{default:a(()=>[f(g(e(o)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),s(e(n),{md:7,xs:24},{default:a(()=>[s(e(x),{block:"",onClick:t[7]||(t[7]=l=>e(F)(e(v).REGISTER))},{default:a(()=>[f(g(e(o)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1}),s(e(Ce),{class:"enter-x"},{default:a(()=>[f(g(e(o)("sys.login.otherSignIn")),1)]),_:1}),k("div",{class:H(["flex justify-evenly enter-x",`${e(y)}-sign-in-way`])},[k("a",{onClick:t[8]||(t[8]=l=>E("github")),title:"github"},[s(e(ae))]),k("a",{onClick:t[9]||(t[9]=l=>E("wechat_enterprise")),title:"\u4F01\u4E1A\u5FAE\u4FE1"},[s(e(S),{class:"item-icon",type:"icon-qiyeweixin3"})]),k("a",{onClick:t[10]||(t[10]=l=>E("dingtalk")),title:"\u9489\u9489"},[s(e(oe))]),k("a",{onClick:t[11]||(t[11]=l=>E("wechat_open")),title:"\u5FAE\u4FE1"},[s(e(le))])],2)]),_:1},8,["model","rules","onKeypress"]),[[N,M.value]]),s(ge,{ref_key:"thirdModalRef",ref:$},null,512)],64))}});export{Ie as _};