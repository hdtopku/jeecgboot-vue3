import I from"./BasicTable-f6cf85af.js";import"./componentMap-da21b34e.js";import{u as S}from"./useTable-20c32c9e.js";import{i as V,c as N,h as $}from"./auth.api-d3a6c4b3-b01533f3.js";import{i as j,u as q}from"./auth.data-8be5c9e3-e3b37a89.js";import{Q as z}from"./jeecg-online-vendor-59c8fbe3.js";import{c as E}from"./antd-vue-vendor-a78909e6.js";import{d as K,k as g,w as L,V as C,a5 as O,a6 as P,f as w,a7 as x,E as R}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./index-7711d1b4.js";import"./lodash-es-vendor-9b741fb8.js";import"./tinymce-vendor-676f8393.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-173f2e92.js";import"./BasicForm-2f1a8584.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./index-465fff25.js";import"./BasicModal-62e49180.js";import"./useWindowSizeFn-b083d2b7.js";import"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-d5fd9260.js";import"./JSelectUser-5289e428.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import"./cron-parser-vendor-15f47fa7.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";var b=(a,s,i)=>new Promise((p,u)=>{var f=o=>{try{n(i.next(o))}catch(e){u(e)}},l=o=>{try{n(i.throw(o))}catch(e){u(e)}},n=o=>o.done?p(o.value):Promise.resolve(o.value).then(f,l);n((i=i.apply(a,s)).next())});const U=K({name:"AuthButtonConfig",components:{BasicTable:I},props:{headId:{type:String,default:"",required:!0}},setup(a){const s=g(""),i=g(2),p=g(3),u=g(5),[f,{reload:l}]=S({api:n,rowKey:"code",bordered:!0,columns:j,showIndexColumn:!1});L(()=>a.headId,t=>{s.value=t.split("?")[0],l().catch(()=>null)},{immediate:!0});function n(t){return b(this,null,function*(){let r=yield V(s.value,t),{authList:c,buttonList:m}=r,h=[];for(let d of E(q)){let y={status:0,page:p.value},B=c.find(k=>k.code==d.code);Object.assign(d,y,B),h.push(d)}return o(c,m,h)})}function o(t,r,c){for(let m of r){let h=t.find(y=>y.code==m.buttonCode),d={code:m.buttonCode,title:m.buttonName,status:0,page:m.buttonStyle=="form"?u.value:p.value};c.push(Object.assign(d,h))}return c}function e(t,r){return b(this,null,function*(){t?v(r):T(r)})}function v(t){return b(this,null,function*(){let r=yield N({id:t.id,code:t.code,page:t.page,cgformId:s.value,type:i.value,control:5,status:1});t.id=r.id,t.status=1})}function T(t){return b(this,null,function*(){yield $(t.id),t.status=0})}return{registerTable:f,onUpdateStatus:e}}}),A={class:"auth-field-config"};function D(a,s,i,p,u,f){const l=C("a-switch"),n=C("BasicTable");return O(),P("div",A,[w(n,{onRegister:a.registerTable},{switch:x(({text:o,record:e})=>[w(l,{size:"small",checked:e.status===1,onChange:v=>a.onUpdateStatus(v,e)},null,8,["checked","onChange"])]),control:x(()=>[R(" 可见 ")]),_:1},8,["onRegister"])])}const zt=z(U,[["render",D]]);export{zt as default};