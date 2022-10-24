var f=(o,p,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,p)).next())});import{q as y,l as w,n as $,d4 as F,o as _,bG as L,t as u,v as M,V as S,z as g,aV as l,E as m,D as k,y as h,C as I,B as b,s as R}from"./index.a1b4e527.js";import{B as N}from"./index.ea6d1b33.js";import{B as V}from"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import{u as D}from"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import{u as P}from"./lock.32c296a6.js";import{h as U}from"./header.d801b988.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./uniqBy.cec7465a.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./api.d480aed7.js";import"./index.b1e57df7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";const q=w({name:"LockModal",components:{BasicModal:N,BasicForm:V},setup(){const{t:o}=R(),{prefixCls:p}=$("header-lock-modal"),r=F(),c=P(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realname}),[d,{closeModal:a}]=L(),[s,{validateFields:e,resetFields:i}]=D({labelWidth:100,showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||U});return{t:o,prefixCls:p,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:B}}}),z=["src"];function G(o,p,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return M(),S(e,b({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[l("div",{class:m(`${o.prefixCls}__entry`)},[l("div",{class:m(`${o.prefixCls}__header`)},[l("img",{src:o.avatar,class:m(`${o.prefixCls}__header-img`)},null,10,z),l("p",{class:m(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),l("div",{class:m(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Co=y(q,[["render",G]]);export{Co as default};