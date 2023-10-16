import{B as Q}from"./index-465fff25.js";import{B as H}from"./BasicForm-2f1a8584.js";import{Q as W}from"./componentMap-da21b34e.js";import{u as X}from"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./JSelectUser-5289e428.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import{B as Y,z as Z}from"./index-7711d1b4.js";import"./cron-parser-vendor-15f47fa7.js";import ee from"./BasicTable-f6cf85af.js";import"./useTable-20c32c9e.js";import{useListPage as oe}from"./useListPage-b93a4fee.js";import{D as te}from"./useOnlineTest-0df0ae86-26931e5c.js";import{i as re,d as ne}from"./enhance.data-efc7e155-bd6af496.js";import{w as ae,R as P,j as ie}from"./enhance.api-138e6826-80663ba0.js";import{Q as le}from"./jeecg-online-vendor-59c8fbe3.js";import{d as ce,k as T,r as se,e as me,V as l,a5 as A,a9 as _,a7 as n,f as a,E as f,a6 as pe,W as F,ae as ue,af as de,q as fe}from"./vue-bcbaddf9.js";import"./BasicModal-62e49180.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./useWindowSizeFn-b083d2b7.js";import"./vxe-table-vendor-173f2e92.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm.vue_vue_type_style_index_0_lang-6d2f938d.js";import"./useFormItem-d5fd9260.js";import"./JUpload.vue_vue_type_style_index_0_lang-cb7e645f.js";import"./download-21271a42.js";import"./base64Conver-fa2fe1af.js";import"./index-4812645e.js";import"./index-dd03453c.js";import"./useCountdown-29b28791.js";import"./index-9df7768e.js";import"./areaDataUtil-661e31ab.js";import"./props-70bbfc6e.js";import"./JSelectBiz-49d97425.js";import"./index-ff5e2816.js";import"./codemirror-vendor-611c4582.js";import"./index-ac817054.js";import"./bem-356ebc17.js";import"./props-c7c3390f.js";import"./useContextMenu-5c399fb2.js";import"./depart.api-57663661.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9b2c5de1.js";import"./injectionKey-69710956.js";import"./cgform.data-cbdd88c3-2d10f2bd.js";var ge=Object.defineProperty,S=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,O=(e,o,t)=>o in e?ge(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,he=(e,o)=>{for(var t in o||(o={}))ve.call(o,t)&&O(e,t,o[t]);if(S)for(var t of S(o))ye.call(o,t)&&O(e,t,o[t]);return e},g=(e,o,t)=>new Promise((v,d)=>{var y=i=>{try{c(t.next(i))}catch(m){d(m)}},s=i=>{try{c(t.throw(i))}catch(m){d(m)}},c=i=>i.done?v(i.value):Promise.resolve(i.value).then(y,s);c((t=t.apply(e,o)).next())});const be=ce({name:"EnhanceJavaModal",components:{BasicModal:Q,BasicTable:ee,BasicForm:H,TableAction:W},emits:["register"],setup(){const e=T(""),o=T([]),{columns:t}=ne(o),{doRequest:v,doDeleteRecord:d,tableContext:y}=oe({tableProps:{api:r=>g(this,null,function*(){let{dataSource:h,btnList:q}=yield ae(e.value,r);return o.value=q,h}),columns:t,canResize:!1,useSearchForm:!1,beforeFetch(r){return Object.assign(r,{column:"orderNum",order:"asc"})}}}),[s,{reload:c},{rowSelection:i,selectedRowKeys:m}]=y,[b,{closeModal:w}]=Y(r=>g(this,null,function*(){e.value=r.row.id,c()})),{aiTestMode:C,genEnhanceJavaData:M}=te(),[k,u]=Z(),p=T(!1),B=se({onRegister:k,title:me(()=>p!=null&&p.value?"修改":"新增"),width:800,confirmLoading:!1,bodyStyle:{height:"350px"},onOk:G,onCancel:u.closeModal});let R={};const{formSchemas:j}=re(o),[x,{resetFields:E,setFieldsValue:V,validate:L}]=X({schemas:j,showActionButtonGroup:!1});function J(){w()}function D(r){return g(this,null,function*(){var h;p.value=r.isUpdate,R=he({},(h=r.record)!=null?h:{}),u.openModal(),yield fe(),yield E(),V(R)})}function K(){D({isUpdate:!1})}function N(r){D({isUpdate:!0,record:r})}function $(){M(e.value)}function z(){return g(this,null,function*(){v(()=>P(m.value))})}function G(){return g(this,null,function*(){try{B.confirmLoading=!0;let r=yield L();r=Object.assign({},R,r),yield ie(e.value,r,p.value),c(),u.closeModal()}finally{B.confirmLoading=!1}})}function I(r){return[{label:"编辑",onClick:()=>N(r)}]}function U(r){return[{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>d(()=>P([r.id]))}}]}return{rowSelection:i,selectedRowKeys:m,aiTestMode:C,onCancel:J,onAdd:K,onGenEnhanceJavaData:$,onBatchDelete:z,getTableAction:I,getDropDownAction:U,formModalProps:B,registerModal:b,registerTable:s,registerForm:x}},computed:{tableScroll(){return{y:window.innerHeight-320}}}}),we={key:0,style:{float:"left"}};function Ce(e,o,t,v,d,y){const s=l("a-button"),c=l("a-icon"),i=l("a-menu-item"),m=l("a-menu"),b=l("a-dropdown"),w=l("TableAction"),C=l("BasicTable"),M=l("BasicForm"),k=l("a-spin"),u=l("BasicModal");return A(),_(u,{onRegister:e.registerModal,title:"JAVA增强",width:1200,defaultFullscreen:"",onCancel:e.onCancel},{footer:n(()=>[a(s,{onClick:e.onCancel},{default:n(()=>[f("关闭")]),_:1},8,["onClick"]),e.aiTestMode?(A(),pe("div",we,[a(s,{onClick:e.onGenEnhanceJavaData},{default:n(()=>[f("生成测试数据")]),_:1},8,["onClick"])])):F("",!0)]),default:n(()=>[a(C,{onRegister:e.registerTable,rowSelection:e.rowSelection},{tableTitle:n(()=>[a(s,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:n(()=>[f("新增")]),_:1},8,["onClick"]),e.selectedRowKeys.length>0?(A(),_(b,{key:0},{overlay:n(()=>[a(m,null,{default:n(()=>[a(i,{key:"1",onClick:e.onBatchDelete},{default:n(()=>[a(c,{type:"delete"}),f(" 删除 ")]),_:1},8,["onClick"])]),_:1})]),default:n(()=>[a(s,{style:{"margin-left":"8px"}},{default:n(()=>[f(" 批量操作 "),a(c,{type:"down"})]),_:1})]),_:1})):F("",!0)]),action:n(({record:p})=>[a(w,{actions:e.getTableAction(p),dropDownActions:e.getDropDownAction(p)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),a(u,ue(de(e.formModalProps)),{default:n(()=>[a(k,{spinning:e.formModalProps.confirmLoading},{default:n(()=>[a(M,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)]),_:1},8,["onRegister","onCancel"])}const vo=le(be,[["render",Ce]]);export{vo as default};