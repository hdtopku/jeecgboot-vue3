import{B as e}from"./index.e1e06dd6.js";import{B as o}from"./BasicForm.d9f6c231.js";import{T as t}from"./helper.1c9dc9a5.js";import{u as n}from"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import{l as a,F as i,bH as r,bI as s,a8 as l,o as c,f0 as d,t as m,v as u,V as p,z as f,y as b,C as j,x as g,W as y,bl as h,bm as v,Q as w}from"./index.435ab247.js";import{B as C}from"./BasicTable.0748ea8a.js";import"./TableImg.e204e8e3.js";import{useListPage as x}from"./useListPage.26849a0d.js";import{u as M}from"./useOnlineTest.be6b6d71.js";import{u as T,a as B}from"./enhance.data.df65de01.js";import{a as A,d as F,b as R}from"./enhance.api.098e203b.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./uniqBy.91f18935.js";import"./useFormItem.816007c4.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./api.bc301b0f.js";import"./index.cdc49bf1.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./useTable.6359f662.js";import"./cgform.data.7645b542.js";var k=Object.defineProperty,D=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o,t)=>new Promise(((n,a)=>{var i=e=>{try{s(t.next(e))}catch(o){a(o)}},r=e=>{try{s(t.throw(e))}catch(o){a(o)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,r);s((t=t.apply(e,o)).next())}));const J=a({name:"EnhanceJavaModal",components:{BasicModal:e,BasicTable:C,BasicForm:o,TableAction:t},emits:["register"],setup(){const e=i(""),o=i([]),{columns:t}=B(o),{doRequest:a,doDeleteRecord:d,tableContext:m}=x({tableProps:{api:t=>_(this,null,(function*(){let{dataSource:n,btnList:a}=yield A(e.value,t);return o.value=a,n})),columns:t,canResize:!1,useSearchForm:!1,beforeFetch:e=>Object.assign(e,{column:"orderNum",order:"asc"})}}),[u,{reload:p},{rowSelection:f,selectedRowKeys:b}]=m,[j,{closeModal:g}]=r((o=>_(this,null,(function*(){e.value=o.row.id,p()})))),{aiTestMode:y,genEnhanceJavaData:h}=M(),[v,C]=s(),k=i(!1),J=l({onRegister:v,title:c((()=>(null==k?void 0:k.value)?"修改":"新增")),width:800,confirmLoading:!1,bodyStyle:{height:"350px"},onOk:function(){return _(this,null,(function*(){try{J.confirmLoading=!0;let o=yield V();o=Object.assign({},I,o),yield R(e.value,o,k.value),p(),C.closeModal()}finally{J.confirmLoading=!1}}))},onCancel:C.closeModal});let I={};const{formSchemas:L}=T(o),[E,{resetFields:H,setFieldsValue:U,validate:V}]=n({schemas:L,showActionButtonGroup:!1});function z(e){return _(this,null,(function*(){var o;k.value=e.isUpdate,I=((e,o)=>{for(var t in o||(o={}))O.call(o,t)&&P(e,t,o[t]);if(D)for(var t of D(o))S.call(o,t)&&P(e,t,o[t]);return e})({},null!=(o=e.record)?o:{}),C.openModal(),yield w(),yield H(),U(I)}))}return{rowSelection:f,selectedRowKeys:b,aiTestMode:y,onCancel:function(){g()},onAdd:function(){z({isUpdate:!1})},onGenEnhanceJavaData:function(){h(e.value)},onBatchDelete:function(){return _(this,null,(function*(){a((()=>F(b.value)))}))},getTableAction:function(e){return[{label:"编辑",onClick:()=>function(e){z({isUpdate:!0,record:e})}(e)}]},getDropDownAction:function(e){return[{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>d((()=>F([e.id])))}}]},formModalProps:J,registerModal:j,registerTable:u,registerForm:E}},computed:{tableScroll:()=>({y:window.innerHeight-320})}}),I={key:0,style:{float:"left"}};var L=d(J,[["render",function(e,o,t,n,a,i){const r=m("a-button"),s=m("a-icon"),l=m("a-menu-item"),c=m("a-menu"),d=m("a-dropdown"),w=m("TableAction"),C=m("BasicTable"),x=m("BasicForm"),M=m("a-spin"),T=m("BasicModal");return u(),p(T,{onRegister:e.registerModal,title:"JAVA增强",width:1200,defaultFullscreen:"",onCancel:e.onCancel},{footer:f((()=>[b(r,{onClick:e.onCancel},{default:f((()=>[j("关闭")])),_:1},8,["onClick"]),e.aiTestMode?(u(),g("div",I,[b(r,{onClick:e.onGenEnhanceJavaData},{default:f((()=>[j("生成测试数据")])),_:1},8,["onClick"])])):y("",!0)])),default:f((()=>[b(C,{onRegister:e.registerTable,rowSelection:e.rowSelection},{tableTitle:f((()=>[b(r,{onClick:e.onAdd,type:"primary",preIcon:"ant-design:plus"},{default:f((()=>[j("新增")])),_:1},8,["onClick"]),e.selectedRowKeys.length>0?(u(),p(d,{key:0},{overlay:f((()=>[b(c,null,{default:f((()=>[b(l,{key:"1",onClick:e.onBatchDelete},{default:f((()=>[b(s,{type:"delete"}),j(" 删除 ")])),_:1},8,["onClick"])])),_:1})])),default:f((()=>[b(r,{style:{"margin-left":"8px"}},{default:f((()=>[j(" 批量操作 "),b(s,{type:"down"})])),_:1})])),_:1})):y("",!0)])),action:f((({record:o})=>[b(w,{actions:e.getTableAction(o),dropDownActions:e.getDropDownAction(o)},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister","rowSelection"]),b(T,h(v(e.formModalProps)),{default:f((()=>[b(M,{spinning:e.formModalProps.confirmLoading},{default:f((()=>[b(x,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},8,["spinning"])])),_:1},16)])),_:1},8,["onRegister","onCancel"])}]]);export{L as default};