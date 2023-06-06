var q=Object.defineProperty;var k=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,r,t)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&v(e,t,r[t]);if(k)for(var t of k(r))U.call(r,t)&&v(e,t,r[t]);return e};var y=(e,r,t)=>new Promise((f,d)=>{var F=a=>{try{n(t.next(a))}catch(s){d(s)}},c=a=>{try{n(t.throw(a))}catch(s){d(s)}},n=a=>a.done?f(a.value):Promise.resolve(a.value).then(F,c);n((t=t.apply(e,r)).next())});import{B as $}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as L}from"./useForm.b4df01c5.js";import{q as N,j as H,aN as B,m as P,C as b,a7 as E,r as u,s as w,t as G,v as p,w as h,Q,R as W,Z as T}from"./index.0be4b5b8.js";import"./JAddInput.d2fd0723.js";import{a as Z,j as z}from"./data.b0f04951.js";import X from"./JeecgOrderCustomerForm.acefdbe2.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";const Y=H({name:"JeecgOrderMainForm",components:{BasicForm:$,JeecgOrderCustomerForm:X},props:{formData:B.object.def({}),formBpm:B.bool.def(!0)},setup(e){const[r,{setFieldsValue:t,setProps:f,getFieldsValue:d,updateSchema:F}]=L({labelWidth:150,schemas:Z(e.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),c=P(()=>e.formData.disabled!==!1),n=b(),a=b(),s=b(!1);let l={};const _="/test/jeecgOrderMain/queryById";function S(){return y(this,null,function*(){console.log("props.formData",e.formData);let m={id:e.formData.dataId};const o=yield T.get({url:_,params:m});console.log("data",o),l=j({},o),yield t(l),yield f({disabled:c.value}),yield n.value.initFormData(e.formData.dataId),yield K(e.formData.dataId),s.value=!0})}function R(){return y(this,null,function*(){let m=d(),o=Object.assign({},l,m);console.log("\u8868\u5355\u6570\u636E",o),yield saveOrUpdate(o,!0)})}S();const J=b("jeecgOrderCustomerForm");function I(){}const O=E({loading:!1,dataSource:[],columns:M(z,"order:")});function K(m){return y(this,null,function*(){const o="/test/jeecgOrderMain/queryOrderTicketListByMainId";let C={id:m};O.dataSource=[];const g=yield T.get({url:o,params:C});g&&g.length>0&&(O.dataSource=[...g])})}function M(m,o){let C=e.formData.permissionList;return m.filter(D=>{let i=C.find(V=>V.action===o+D.key);return i?(i instanceof Array&&(i=i[0]),i.type=="2"&&!i.isAuth?(D.disabled=!0,!0):!(i.type=="1"&&!i.isAuth)):!0})}return{registerForm:r,formDisabled:c,submitForm:R,jeecgOrderCustomerFormRef:n,activeKey:J,handleChangeTabs:I,table2:O,jeecgOrderTicketRef:a,ok:s}}}),x={class:"jeecg-flow-demo"};function ee(e,r,t,f,d,F){const c=u("BasicForm"),n=u("JeecgOrderCustomerForm"),a=u("a-tab-pane"),s=u("JVxeTable"),l=u("a-tabs");return w(),G("div",x,[p(c,{onRegister:e.registerForm},null,8,["onRegister"]),p(l,{activeKey:e.activeKey,"onUpdate:activeKey":r[0]||(r[0]=_=>e.activeKey=_),onChange:e.handleChangeTabs},{default:h(()=>[p(a,{tab:"\u5BA2\u6237\u4FE1\u606F",key:"jeecgOrderCustomerForm",forceRender:!0},{default:h(()=>[p(n,{ref:"jeecgOrderCustomerFormRef",formData:e.formData},null,8,["formData"])]),_:1}),p(a,{tab:"\u673A\u7968\u4FE1\u606F",key:"jeecgOrderTicket",forceRender:!0},{default:h(()=>[e.ok?(w(),Q(s,{key:0,ref:"jeecgOrderTicketRef",stripe:"",rowSelection:"",keepSource:"",maxHeight:300,loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource},null,8,["loading","columns","dataSource"])):W("",!0)]),_:1})]),_:1},8,["activeKey","onChange"])])}const Ie=N(Y,[["render",ee]]);export{Ie as default};