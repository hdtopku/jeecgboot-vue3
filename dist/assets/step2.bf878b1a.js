var g=(e,s,t)=>new Promise((f,n)=>{var c=o=>{try{a(t.next(o))}catch(u){n(u)}},p=o=>{try{a(t.throw(o))}catch(u){n(u)}},a=o=>o.done?f(o.value):Promise.resolve(o.value).then(c,p);a((t=t.apply(e,s)).next())});import{j as b,cK as y,a6 as v,aB as I,o as F,C as P,a7 as k,e5 as B,e9 as C,ab as D,u as S,e8 as _,q as j,r as d,s as E,Q as M,w as m,v as r,y as h}from"./index.0be4b5b8.js";import{S as R}from"./index.2fb8bc9c.js";const z=b({name:"step2",components:{Button:y,Form:v,FormItem:v.Item,InputPassword:I.Password,Input:I,StrengthMeter:R},props:{accountInfo:{type:Object,default:()=>({})}},emits:["prevStep","nextStep"],setup(e,{emit:s}){const{t}=F(),{createErrorModal:f}=S(),{accountInfo:n}=e,c=P(),p=k({username:n.obj.username||"",password:"",confirmPassword:""}),{getFormRules:a}=B(p),{validForm:o}=_(c);function u(){s("prevStep",n.obj)}function w(){return g(this,null,function*(){const i=yield o();if(!i)return;const l=yield C(D({username:i.username,password:i.password,smscode:n.obj.smscode,phone:n.obj.phone}));l.success?s("nextStep",n.obj):f({title:t("sys.api.errorTip"),content:l.message||t("sys.api.networkExceptionMsg")})})}return{t,formRef:c,formData:p,getFormRules:a,handleNext:w,handlePrev:u}}});function N(e,s,t,f,n,c){const p=d("Input"),a=d("FormItem"),o=d("StrengthMeter"),u=d("InputPassword"),w=d("Button"),i=d("Form");return E(),M(i,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:m(()=>[r(a,{name:"username",class:"enter-x"},{default:m(()=>[r(p,{size:"large",value:e.formData.username,"onUpdate:value":s[0]||(s[0]=l=>e.formData.username=l),placeholder:e.t("sys.login.userName"),disabled:""},null,8,["value","placeholder"])]),_:1}),r(a,{name:"password",class:"enter-x"},{default:m(()=>[r(o,{size:"large",value:e.formData.password,"onUpdate:value":s[1]||(s[1]=l=>e.formData.password=l),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])]),_:1}),r(a,{name:"confirmPassword",class:"enter-x"},{default:m(()=>[r(u,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":s[2]||(s[2]=l=>e.formData.confirmPassword=l),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),r(a,{class:"enter-x"},{default:m(()=>[r(w,{type:"primary",size:"large",block:"",onClick:e.handlePrev},{default:m(()=>[h(" \u4E0A\u4E00\u6B65 ")]),_:1},8,["onClick"]),r(w,{size:"large",block:"",class:"mt-4",onClick:e.handleNext},{default:m(()=>[h(" \u4E0B\u4E00\u6B65 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])}const V=j(z,[["render",N]]);export{V as default};