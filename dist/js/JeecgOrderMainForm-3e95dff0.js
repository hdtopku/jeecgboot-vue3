var A=Object.defineProperty;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,r,t)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))q.call(r,t)&&v(e,t,r[t]);if(k)for(var t of k(r))U.call(r,t)&&v(e,t,r[t]);return e};var y=(e,r,t)=>new Promise((f,p)=>{var _=a=>{try{o(t.next(a))}catch(i){p(i)}},c=a=>{try{o(t.throw(a))}catch(i){p(i)}},o=a=>a.done?f(a.value):Promise.resolve(a.value).then(_,c);o((t=t.apply(e,r)).next())});import"./index-a2e0ccba.js";import{d as $,e as L,l as b,r as H,V as l,a7 as B,a8 as N,f as u,aa as C,ac as P,W}from"./vue-ebecda47.js";import{_ as E,ap as T}from"./jeecg-online-vendor-cfb58502.js";import{p as w}from"./index-85cfc899.js";import{a as G,j as z}from"./data-94d272cb.js";import Q from"./JeecgOrderCustomerForm-42810947.js";import{B as X,u as Y}from"./useForm-21b78d9f.js";import"./componentMap-c36c4b8d.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./useFormItem-ba20c4de.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";const Z=$({name:"JeecgOrderMainForm",components:{BasicForm:X,JeecgOrderCustomerForm:Q},props:{formData:w.object.def({}),formBpm:w.bool.def(!0)},setup(e){const[r,{setFieldsValue:t,setProps:f,getFieldsValue:p,updateSchema:_}]=Y({labelWidth:150,schemas:G(e.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),c=L(()=>e.formData.disabled!==!1),o=b(),a=b(),i=b(!1);let d={};const F="/test/jeecgOrderMain/queryById";function S(){return y(this,null,function*(){let n={id:e.formData.dataId};const s=yield T.get({url:F,params:n});d=j({},s),yield t(d),yield f({disabled:c.value}),yield o.value.initFormData(e.formData.dataId),yield V(e.formData.dataId),i.value=!0})}function J(){return y(this,null,function*(){let n=p(),s=Object.assign({},d,n);yield saveOrUpdate(s,!0)})}S();const R=b("jeecgOrderCustomerForm");function I(){}const O=H({loading:!1,dataSource:[],columns:K(z,"order:")});function V(n){return y(this,null,function*(){const s="/test/jeecgOrderMain/queryOrderTicketListByMainId";let h={id:n};O.dataSource=[];const g=yield T.get({url:s,params:h});g&&g.length>0&&(O.dataSource=[...g])})}function K(n,s){let h=e.formData.permissionList;return n.filter(D=>{let m=h.find(M=>M.action===s+D.key);return m?(m instanceof Array&&(m=m[0]),m.type=="2"&&!m.isAuth?(D.disabled=!0,!0):!(m.type=="1"&&!m.isAuth)):!0})}return{registerForm:r,formDisabled:c,submitForm:J,jeecgOrderCustomerFormRef:o,activeKey:R,handleChangeTabs:I,table2:O,jeecgOrderTicketRef:a,ok:i}}}),x={class:"jeecg-flow-demo"};function ee(e,r,t,f,p,_){const c=l("BasicForm"),o=l("JeecgOrderCustomerForm"),a=l("a-tab-pane"),i=l("JVxeTable"),d=l("a-tabs");return B(),N("div",x,[u(c,{onRegister:e.registerForm},null,8,["onRegister"]),u(d,{activeKey:e.activeKey,"onUpdate:activeKey":r[0]||(r[0]=F=>e.activeKey=F),onChange:e.handleChangeTabs},{default:C(()=>[u(a,{tab:"客户信息",key:"jeecgOrderCustomerForm",forceRender:!0},{default:C(()=>[u(o,{ref:"jeecgOrderCustomerFormRef",formData:e.formData},null,8,["formData"])]),_:1}),u(a,{tab:"机票信息",key:"jeecgOrderTicket",forceRender:!0},{default:C(()=>[e.ok?(B(),P(i,{key:0,ref:"jeecgOrderTicketRef",stripe:"",rowSelection:"",keepSource:"",maxHeight:300,loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource},null,8,["loading","columns","dataSource"])):W("",!0)]),_:1})]),_:1},8,["activeKey","onChange"])])}const We=E(Z,[["render",ee]]);export{We as default};