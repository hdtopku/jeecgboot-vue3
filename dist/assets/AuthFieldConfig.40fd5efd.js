import k from"./BasicTable.6f8187cc.js";import"./componentMap.a24260de.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import{u as w}from"./useTable.f4111a7b.js";import{a as g,b as v,c as S}from"./auth.api.b944d94f.js";import{a as x}from"./auth.data.f55c117d.js";import{j as E,C as F,E as y,f5 as I,r as f,s as T,t as B,v as p,w as r,y as b}from"./index.b3c2d15d.js";import"./BasicForm.1d30e5fc.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./index.c08fb6c5.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JAddInput.eb06f3b7.js";import"./areaDataUtil.26505ac2.js";import"./api.363f3378.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./useForm.853cc25f.js";import"./index.82bab5e4.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./RedoOutlined.66bed16b.js";var C=(s,d,i)=>new Promise((h,m)=>{var c=o=>{try{n(i.next(o))}catch(t){m(t)}},u=o=>{try{n(i.throw(o))}catch(t){m(t)}},n=o=>o.done?h(o.value):Promise.resolve(o.value).then(c,u);n((i=i.apply(s,d)).next())});const U=E({name:"AuthFieldConfig",components:{BasicTable:k},props:{headId:{type:String,default:"",required:!0}},emits:["update:authFields"],setup(s,{emit:d}){const i=F(""),[h,{reload:m}]=w({api:c,rowKey:"code",bordered:!0,columns:x,showIndexColumn:!1});y(()=>s.headId,o=>{i.value=o.split("?")[0],m().catch(()=>null)},{immediate:!0});function c(o){return C(this,null,function*(){const t=["id"];let e=yield g(i.value,o),a=[],_=[];return e.forEach(l=>{t.indexOf(l.code)<0&&((l.isShowForm==1||l.isShowList==1)&&_.push(l),l.dbIsPersist==1&&a.push({text:l.title,value:l.code}))}),d("update:authFields",a),_})}function u(o,t){return C(this,null,function*(){yield v({cgformId:i.value,code:t.code,status:o?1:0}),t.formEditable||t.formShow||t.listShow||(t.formEditable=!0,t.formShow=!0,t.listShow=!0),t.status=Math.abs(t.status-1)})}function n(o,t,e){return C(this,null,function*(){let a=o.target.checked;yield S({cgformId:i.value,code:t.code,switchFlag:e,listShow:a,formShow:a,formEditable:a}),e==1?t.listShow=a:e==2?t.formShow=a:e==3&&(t.formEditable=a)})}return{registerTable:h,onUpdateStatus:u,onCheckboxChange:n}}}),$={class:"auth-field-config"};function D(s,d,i,h,m,c){const u=f("a-switch"),n=f("a-checkbox"),o=f("BasicTable");return T(),B("div",$,[p(o,{onRegister:s.registerTable},{switch:r(({text:t,record:e})=>[p(u,{size:"small",checked:e.status===1,onChange:a=>s.onUpdateStatus(a,e)},null,8,["checked","onChange"])]),list:r(({text:t,record:e})=>[p(n,{checked:e.listShow,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,1)},{default:r(()=>[b(" \u53EF\u89C1 ")]),_:2},1032,["checked","disabled","onChange"])]),form:r(({text:t,record:e})=>[p(n,{checked:e.formShow,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,2)},{default:r(()=>[b(" \u53EF\u89C1 ")]),_:2},1032,["checked","disabled","onChange"]),p(n,{checked:e.formEditable,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,3)},{default:r(()=>[b(" \u53EF\u7F16\u8F91 ")]),_:2},1032,["checked","disabled","onChange"])]),_:1},8,["onRegister"])])}var Et=I(U,[["render",D],["__scopeId","data-v-63e05357"]]);export{Et as default};