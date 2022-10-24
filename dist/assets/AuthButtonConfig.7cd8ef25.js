import{B as T}from"./BasicTable.0cbd4b1b.js";import"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{u as x}from"./useTable.dfabdbf5.js";import{d as A,e as D,f as F}from"./auth.api.bfee5591.js";import{b as S,c as I}from"./auth.data.92a50462.js";import{l as N,F as b,H as O,eY as k,t as g,v as $,x as P,y as B,z as y,C as j}from"./index.a1b4e527.js";import{b as z}from"./_baseClone.a8082016.js";import"./_arrayPush.8821345e.js";import"./isArray.40a4ed15.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";var _=(e,s,a)=>new Promise((p,l)=>{var f=o=>{try{r(a.next(o))}catch(n){l(n)}},m=o=>{try{r(a.throw(o))}catch(n){l(n)}},r=o=>o.done?p(o.value):Promise.resolve(o.value).then(f,m);r((a=a.apply(e,s)).next())}),G=1,R=4;function U(e){return z(e,G|R)}const V=N({name:"AuthButtonConfig",components:{BasicTable:T},props:{headId:{type:String,default:"",required:!0}},setup(e){const s=b(""),a=b(2),p=b(3),l=b(5),[f,{reload:m}]=x({api:r,rowKey:"code",bordered:!0,columns:S,showIndexColumn:!1});O(()=>e.headId,t=>{s.value=t.split("?")[0],m().catch(()=>null)},{immediate:!0});function r(t){return _(this,null,function*(){let i=yield A(s.value,t),{authList:c,buttonList:u}=i,h=[];for(let d of U(I)){let C={status:0,page:p.value},w=c.find(E=>E.code==d.code);Object.assign(d,C,w),h.push(d)}return o(c,u,h)})}function o(t,i,c){for(let u of i){let h=t.find(C=>C.code==u.buttonCode),d={code:u.buttonCode,title:u.buttonName,status:0,page:u.buttonStyle=="form"?l.value:p.value};c.push(Object.assign(d,h))}return c}function n(t,i){return _(this,null,function*(){t?v(i):L(i)})}function v(t){return _(this,null,function*(){let i=yield D({id:t.id,code:t.code,page:t.page,cgformId:s.value,type:a.value,control:5,status:1});t.id=i.id,t.status=1})}function L(t){return _(this,null,function*(){yield F(t.id),t.status=0})}return{registerTable:f,onUpdateStatus:n}}}),Y={class:"auth-field-config"};function q(e,s,a,p,l,f){const m=g("a-switch"),r=g("BasicTable");return $(),P("div",Y,[B(r,{onRegister:e.registerTable},{switch:y(({text:o,record:n})=>[B(m,{size:"small",checked:n.status===1,onChange:v=>e.onUpdateStatus(v,n)},null,8,["checked","onChange"])]),control:y(()=>[j(" \u53EF\u89C1 ")]),_:1},8,["onRegister"])])}var $t=k(V,[["render",q]]);export{$t as default};