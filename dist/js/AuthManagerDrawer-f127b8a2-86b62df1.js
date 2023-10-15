import{B as C,u as D}from"./index-638e9844.js";import F from"./AuthFieldConfig-b1217a0c-cdf0f448.js";import I from"./AuthButtonConfig-2f71787c-e85b28f9.js";import v from"./AuthDataConfig-32cf23d2-922b637e.js";import{Q as w}from"./jeecg-online-vendor-885afdd4.js";import"./BasicTable.vue_vue_type_style_index_0_lang-d58c7acd.js";import"./componentMap-b7e1d2b2.js";import"./useTable-7249c6ae.js";import"./index-9d0047d3.js";import"./index-4b015b65.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./antd-vue-vendor-a78909e6.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import"./cron-parser-vendor-658b8fec.js";import{d as b,k as m,e as A,V as r,a5 as h,a9 as B,a7 as i,f as o,a6 as k,F as K,W as R}from"./vue-bcbaddf9.js";import"./BasicTable-96d859ce.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";import"./BasicForm-cb329d14.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";import"./index-ae3db9b9.js";import"./useForm-fd714c19.js";import"./injectionKey-69710956.js";import"./auth.api-d3a6c4b3-6890b7e5.js";import"./auth.data-8be5c9e3-e3b37a89.js";const T=b({name:"AuthManagerDrawer",components:{BasicDrawer:C,AuthFieldConfig:F,AuthButtonConfig:I,AuthDataConfig:v},props:{tableType:{type:Number,default:1}},emits:["register"],setup(t){const e=m(""),p=m(""),f=m([]),d=m("field"),c=A(()=>t.tableType==1||t.tableType==2),[n,{closeDrawer:a}]=D(l=>{e.value=l.cgformId,p.value=e.value+"?"+new Date().getTime(),d.value="field"});function s(){a()}return{activeKey:d,cgformId:e,headId:p,authFields:f,hasDataAuth:c,onClose:s,registerDrawer:n}}});function _(t,e,p,f,d,c){const n=r("AuthFieldConfig"),a=r("a-tab-pane"),s=r("AuthButtonConfig"),l=r("AuthDataConfig"),g=r("a-tabs"),y=r("BasicDrawer");return h(),B(y,{onRegister:t.registerDrawer,title:"权限管理",width:800,onClose:t.onClose},{default:i(()=>[o(g,{activeKey:t.activeKey,"onUpdate:activeKey":e[1]||(e[1]=u=>t.activeKey=u)},{default:i(()=>[o(a,{tab:"字段权限",key:"field",forceRender:""},{default:i(()=>[o(n,{headId:t.headId,authFields:t.authFields,"onUpdate:authFields":e[0]||(e[0]=u=>t.authFields=u)},null,8,["headId","authFields"])]),_:1}),t.hasDataAuth?(h(),k(K,{key:0},[o(a,{tab:"按钮权限",key:"button",forceRender:""},{default:i(()=>[o(s,{headId:t.headId},null,8,["headId"])]),_:1}),o(a,{tab:"数据权限",key:"data",forceRender:""},{default:i(()=>[o(l,{cgformId:t.cgformId,authFields:t.authFields},null,8,["cgformId","authFields"])]),_:1})],64)):R("",!0)]),_:1},8,["activeKey"])]),_:1},8,["onRegister","onClose"])}const Bt=w(T,[["render",_]]);export{Bt as default};