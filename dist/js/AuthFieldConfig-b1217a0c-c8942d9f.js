import C from"./BasicTable-11e9afcb.js";import"./componentMap-bab84cb7.js";import{u as k}from"./useTable-992ea772.js";import{l as x,r as S,s as v}from"./auth.api-d3a6c4b3-f2c34e5d.js";import{n as y}from"./auth.data-8be5c9e3-e3b37a89.js";import{Q as E}from"./jeecg-online-vendor-ecddc31b.js";import{d as I,k as T,w as _,V as f,a5 as F,a6 as B,f as l,a7 as n,E as b}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-cd503db7.js";import"./index-b03d7914.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";import"./BasicForm-1c4cfe6b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import"./index-cd2db611.js";import"./BasicModal-951c06ee.js";import"./useWindowSizeFn-13ef0f26.js";import"./useForm-799a6766.js";import"./JAddInput-903fbbea.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-4b66c33c.js";import"./JSelectUser-14c3fad5.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import"./cron-parser-vendor-d9194a40.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./index-5ded5f19.js";var g=(a,p,i)=>new Promise((h,c)=>{var u=t=>{try{s(i.next(t))}catch(e){c(e)}},d=t=>{try{s(i.throw(t))}catch(e){c(e)}},s=t=>t.done?h(t.value):Promise.resolve(t.value).then(u,d);s((i=i.apply(a,p)).next())});const P=I({name:"AuthFieldConfig",components:{BasicTable:C},props:{headId:{type:String,default:"",required:!0}},emits:["update:authFields"],setup(a,{emit:p}){const i=T(""),[h,{reload:c}]=k({api:u,rowKey:"code",bordered:!0,columns:y,showIndexColumn:!1});_(()=>a.headId,t=>{i.value=t.split("?")[0],c().catch(()=>null)},{immediate:!0});function u(t){return g(this,null,function*(){const e=["id"];let o=yield x(i.value,t),r=[],w=[];return o.forEach(m=>{e.indexOf(m.code)<0&&((m.isShowForm==1||m.isShowList==1)&&w.push(m),m.dbIsPersist==1&&r.push({text:m.title,value:m.code}))}),p("update:authFields",r),w})}function d(t,e){return g(this,null,function*(){yield S({cgformId:i.value,code:e.code,status:t?1:0}),e.formEditable||e.formShow||e.listShow||(e.formEditable=!0,e.formShow=!0,e.listShow=!0),e.status=Math.abs(e.status-1)})}function s(t,e,o){return g(this,null,function*(){let r=t.target.checked;yield v({cgformId:i.value,code:e.code,switchFlag:o,listShow:r,formShow:r,formEditable:r}),o==1?e.listShow=r:o==2?e.formShow=r:o==3&&(e.formEditable=r)})}return{registerTable:h,onUpdateStatus:d,onCheckboxChange:s}}}),U={class:"auth-field-config"};function V(a,p,i,h,c,u){const d=f("a-switch"),s=f("a-checkbox"),t=f("BasicTable");return F(),B("div",U,[l(t,{onRegister:a.registerTable},{switch:n(({text:e,record:o})=>[l(d,{size:"small",checked:o.status===1,onChange:r=>a.onUpdateStatus(r,o)},null,8,["checked","onChange"])]),list:n(({text:e,record:o})=>[l(s,{checked:o.listShow,disabled:o.status===0,onChange:r=>a.onCheckboxChange(r,o,1)},{default:n(()=>[b(" 可见 ")]),_:2},1032,["checked","disabled","onChange"])]),form:n(({text:e,record:o})=>[l(s,{checked:o.formShow,disabled:o.status===0,onChange:r=>a.onCheckboxChange(r,o,2)},{default:n(()=>[b(" 可见 ")]),_:2},1032,["checked","disabled","onChange"]),l(s,{checked:o.formEditable,disabled:o.status===0,onChange:r=>a.onCheckboxChange(r,o,3)},{default:n(()=>[b(" 可编辑 ")]),_:2},1032,["checked","disabled","onChange"])]),_:1},8,["onRegister"])])}const ye=E(P,[["render",V],["__scopeId","data-v-d597c946"]]);export{ye as default};