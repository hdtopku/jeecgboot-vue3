var g=(e,o,t)=>new Promise((f,r)=>{var c=s=>{try{a(t.next(s))}catch(m){r(m)}},u=s=>{try{a(t.throw(s))}catch(m){r(m)}},a=s=>s.done?f(s.value):Promise.resolve(s.value).then(c,u);a((t=t.apply(e,o)).next())});import{d as h,l as F,r as P,J as y,V as d,a7 as k,ac as _,aa as p,f as n,E as v}from"./vue-50733b77.js";import{bz as B,c2 as b,bo as I}from"./antd-vue-vendor-c5335947.js";import"./index-b34ff7bc.js";import{bm as C,o as D,q as S,bn as E,bq as j,_ as z}from"./jeecg-online-vendor-d3e1865b.js";import{S as M}from"./index-54db12ae.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";const R=h({name:"step2",components:{Button:B,Form:b,FormItem:b.Item,InputPassword:I.Password,Input:I,StrengthMeter:M},props:{accountInfo:{type:Object,default:()=>({})}},emits:["prevStep","nextStep"],setup(e,{emit:o}){const{t}=D(),{createErrorModal:f}=S(),{accountInfo:r}=e,c=F(),u=P({username:r.obj.username||"",password:"",confirmPassword:""}),{getFormRules:a}=C(u),{validForm:s}=E(c);function m(){o("prevStep",r.obj)}function w(){return g(this,null,function*(){const i=yield s();if(!i)return;const l=yield j(y({username:i.username,password:i.password,smscode:r.obj.smscode,phone:r.obj.phone}));l.success?o("nextStep",r.obj):f({title:t("sys.api.errorTip"),content:l.message||t("sys.api.networkExceptionMsg")})})}return{t,formRef:c,formData:u,getFormRules:a,handleNext:w,handlePrev:m}}});function N(e,o,t,f,r,c){const u=d("Input"),a=d("FormItem"),s=d("StrengthMeter"),m=d("InputPassword"),w=d("Button"),i=d("Form");return k(),_(i,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:p(()=>[n(a,{name:"username",class:"enter-x"},{default:p(()=>[n(u,{size:"large",value:e.formData.username,"onUpdate:value":o[0]||(o[0]=l=>e.formData.username=l),placeholder:e.t("sys.login.userName"),disabled:""},null,8,["value","placeholder"])]),_:1}),n(a,{name:"password",class:"enter-x"},{default:p(()=>[n(s,{size:"large",value:e.formData.password,"onUpdate:value":o[1]||(o[1]=l=>e.formData.password=l),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])]),_:1}),n(a,{name:"confirmPassword",class:"enter-x"},{default:p(()=>[n(m,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":o[2]||(o[2]=l=>e.formData.confirmPassword=l),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),n(a,{class:"enter-x"},{default:p(()=>[n(w,{type:"primary",size:"large",block:"",onClick:e.handlePrev},{default:p(()=>[v(" 上一步 ")]),_:1},8,["onClick"]),n(w,{size:"large",block:"",class:"mt-4",onClick:e.handleNext},{default:p(()=>[v(" 下一步 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])}const K=z(R,[["render",N]]);export{K as default};