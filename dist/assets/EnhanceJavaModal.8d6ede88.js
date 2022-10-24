import{B as Q}from"./index.ea6d1b33.js";import{B as W}from"./BasicForm.77adc039.js";import{T as Y}from"./helper.6c15aaa9.js";import{u as X}from"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import{l as Z,F as E,bG as x,bH as ee,a7 as oe,o as te,eY as ne,Q as ae,t as l,v as D,V as k,z as a,y as r,C as f,x as re,W as A,bk as ie,bl as le}from"./index.a1b4e527.js";import{B as se}from"./BasicTable.0cbd4b1b.js";import"./TableImg.e94b6b60.js";import{useListPage as ce}from"./useListPage.9b802bc6.js";import{u as ue}from"./useOnlineTest.293d15d8.js";import{u as me,a as pe}from"./enhance.data.8e322928.js";import{a as de,d as P,b as fe}from"./enhance.api.39cedb08.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./uniqBy.cec7465a.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./api.d480aed7.js";import"./index.b1e57df7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./useTable.dfabdbf5.js";import"./cgform.data.4baef242.js";var _e=Object.defineProperty,R=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,S=(e,o,t)=>o in e?_e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,ge=(e,o)=>{for(var t in o||(o={}))ve.call(o,t)&&S(e,t,o[t]);if(R)for(var t of R(o))he.call(o,t)&&S(e,t,o[t]);return e},_=(e,o,t)=>new Promise((v,d)=>{var h=i=>{try{s(t.next(i))}catch(u){d(u)}},c=i=>{try{s(t.throw(i))}catch(u){d(u)}},s=i=>i.done?v(i.value):Promise.resolve(i.value).then(h,c);s((t=t.apply(e,o)).next())});const ye=Z({name:"EnhanceJavaModal",components:{BasicModal:Q,BasicTable:se,BasicForm:W,TableAction:Y},emits:["register"],setup(){const e=E(""),o=E([]),{columns:t}=pe(o),{doRequest:v,doDeleteRecord:d,tableContext:h}=ce({tableProps:{api:n=>_(this,null,function*(){let{dataSource:g,btnList:q}=yield de(e.value,n);return o.value=q,g}),columns:t,canResize:!1,useSearchForm:!1,beforeFetch(n){return Object.assign(n,{column:"orderNum",order:"asc"})}}}),[c,{reload:s},{rowSelection:i,selectedRowKeys:u}]=h,[y,{closeModal:b}]=x(n=>_(this,null,function*(){e.value=n.row.id,s()})),{aiTestMode:w,genEnhanceJavaData:C}=ue(),[B,p]=ee(),m=E(!1),F=oe({onRegister:B,title:te(()=>m!=null&&m.value?"\u4FEE\u6539":"\u65B0\u589E"),width:800,confirmLoading:!1,bodyStyle:{height:"350px"},onOk:z,onCancel:p.closeModal});let M={};const{formSchemas:O}=me(o),[J,{resetFields:L,setFieldsValue:V,validate:N}]=X({schemas:O,showActionButtonGroup:!1});function $(){b()}function T(n){return _(this,null,function*(){var g;m.value=n.isUpdate,M=ge({},(g=n.record)!=null?g:{}),p.openModal(),yield ae(),yield L(),V(M)})}function j(){T({isUpdate:!1})}function G(n){T({isUpdate:!0,record:n})}function I(){C(e.value)}function U(){return _(this,null,function*(){v(()=>P(u.value))})}function z(){return _(this,null,function*(){try{F.confirmLoading=!0;let n=yield N();n=Object.assign({},M,n),yield fe(e.value,n,m.value),s(),p.closeModal()}finally{F.confirmLoading=!1}})}function H(n){return[{label:"\u7F16\u8F91",onClick:()=>G(n)}]}function K(n){return[{label:"\u5220\u9664",popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",placement:"left",confirm:()=>d(()=>P([n.id]))}}]}return{rowSelection:i,selectedRowKeys:u,aiTestMode:w,onCancel:$,onAdd:j,onGenEnhanceJavaData:I,onBatchDelete:U,getTableAction:H,getDropDownAction:K,formModalProps:F,registerModal:y,registerTable:c,registerForm:J}},computed:{tableScroll(){return{y:window.innerHeight-320}}}}),be={key:0,style:{float:"left"}};function we(e,o,t,v,d,h){const c=l("a-button"),s=l("a-icon"),i=l("a-menu-item"),u=l("a-menu"),y=l("a-dropdown"),b=l("TableAction"),w=l("BasicTable"),C=l("BasicForm"),B=l("a-spin"),p=l("BasicModal");return D(),k(p,{onRegister:e.registerModal,title:"JAVA\u589E\u5F3A",width:1200,defaultFullscreen:"",onCancel:e.onCancel},{footer:a(()=>[r(c,{onClick:e.onCancel},{default:a(()=>[f("\u5173\u95ED")]),_:1},8,["onClick"]),e.aiTestMode?(D(),re("div",be,[r(c,{onClick:e.onGenEnhanceJavaData},{default:a(()=>[f("\u751F\u6210\u6D4B\u8BD5\u6570\u636E")]),_:1},8,["onClick"])])):A("",!0)]),default:a(()=>[r(w,{onRegister:e.registerTable,rowSelection:e.rowSelection},{tableTitle:a(()=>[r(c,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:a(()=>[f("\u65B0\u589E")]),_:1},8,["onClick"]),e.selectedRowKeys.length>0?(D(),k(y,{key:0},{overlay:a(()=>[r(u,null,{default:a(()=>[r(i,{key:"1",onClick:e.onBatchDelete},{default:a(()=>[r(s,{type:"delete"}),f(" \u5220\u9664 ")]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[r(c,{style:{"margin-left":"8px"}},{default:a(()=>[f(" \u6279\u91CF\u64CD\u4F5C "),r(s,{type:"down"})]),_:1})]),_:1})):A("",!0)]),action:a(({record:m})=>[r(b,{actions:e.getTableAction(m),dropDownActions:e.getDropDownAction(m)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),r(p,ie(le(e.formModalProps)),{default:a(()=>[r(B,{spinning:e.formModalProps.confirmLoading},{default:a(()=>[r(C,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["spinning"])]),_:1},16)]),_:1},8,["onRegister","onCancel"])}var po=ne(ye,[["render",we]]);export{po as default};