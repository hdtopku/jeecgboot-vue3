var g=(e,o,r)=>new Promise((f,t)=>{var i=s=>{try{a(r.next(s))}catch(m){t(m)}},u=s=>{try{a(r.throw(s))}catch(m){t(m)}},a=s=>s.done?f(s.value):Promise.resolve(s.value).then(i,u);a((r=r.apply(e,o)).next())});import{k as h,bA as k,l as F,_ as P}from"./jeecg-online-vendor-bf2efbcb.js";import{av as y,ax as S}from"./index-fde9c72f.js";import{S as _}from"./index-ee020524.js";import{d as B,k as C,r as D,J as E,U as d,aV as j,ar as M,bi as p,f as n,E as v}from"./vue-c7e3516e.js";import{cn as R,cS as I,ce as b}from"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";const z=B({name:"step2",components:{Button:R,Form:I,FormItem:I.Item,InputPassword:b.Password,Input:b,StrengthMeter:_},props:{accountInfo:{type:Object,default:()=>({})}},emits:["prevStep","nextStep"],setup(e,{emit:o}){const{t:r}=h(),{createErrorModal:f}=F(),{accountInfo:t}=e,i=C(),u=D({username:t.obj.username||"",password:"",confirmPassword:""}),{getFormRules:a}=y(u),{validForm:s}=S(i);function m(){o("prevStep",t.obj)}function w(){return g(this,null,function*(){const c=yield s();if(!c)return;const l=yield k(E({username:c.username,password:c.password,smscode:t.obj.smscode,phone:t.obj.phone}));l.success?o("nextStep",t.obj):f({title:r("sys.api.errorTip"),content:l.message||r("sys.api.networkExceptionMsg")})})}return{t:r,formRef:i,formData:u,getFormRules:a,handleNext:w,handlePrev:m}}});function N(e,o,r,f,t,i){const u=d("Input"),a=d("FormItem"),s=d("StrengthMeter"),m=d("InputPassword"),w=d("Button"),c=d("Form");return j(),M(c,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:p(()=>[n(a,{name:"username",class:"enter-x"},{default:p(()=>[n(u,{size:"large",value:e.formData.username,"onUpdate:value":o[0]||(o[0]=l=>e.formData.username=l),placeholder:e.t("sys.login.userName"),disabled:""},null,8,["value","placeholder"])]),_:1}),n(a,{name:"password",class:"enter-x"},{default:p(()=>[n(s,{size:"large",value:e.formData.password,"onUpdate:value":o[1]||(o[1]=l=>e.formData.password=l),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])]),_:1}),n(a,{name:"confirmPassword",class:"enter-x"},{default:p(()=>[n(m,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":o[2]||(o[2]=l=>e.formData.confirmPassword=l),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),n(a,{class:"enter-x"},{default:p(()=>[n(w,{type:"primary",size:"large",block:"",onClick:e.handlePrev},{default:p(()=>[v(" \u4E0A\u4E00\u6B65 ")]),_:1},8,["onClick"]),n(w,{size:"large",block:"",class:"mt-4",onClick:e.handleNext},{default:p(()=>[v(" \u4E0B\u4E00\u6B65 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])}const L=P(z,[["render",N]]);export{L as default};