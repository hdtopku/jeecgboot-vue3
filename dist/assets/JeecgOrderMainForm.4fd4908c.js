var q=Object.defineProperty;var D=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(e,r,t)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&k(e,t,r[t]);if(D)for(var t of D(r))U.call(r,t)&&k(e,t,r[t]);return e};var y=(e,r,t)=>new Promise((f,l)=>{var F=a=>{try{n(t.next(a))}catch(i){l(i)}},c=a=>{try{n(t.throw(a))}catch(i){l(i)}},n=a=>a.done?f(a.value):Promise.resolve(a.value).then(F,c);n((t=t.apply(e,r)).next())});import{B as $}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as L}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{q as H,l as N,aM as B,o as P,F as b,a7 as W,t as u,v as T,x as z,y as p,z as v,V as E,W as G,a1 as w}from"./index.23784a6b.js";import{a as x,j as Q}from"./data.0fd8ad8a.js";import X from"./JeecgOrderCustomerForm.5fde8257.js";import"./uniqBy.d45e63ad.js";import"./index.1660bc1f.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";const Y=N({name:"JeecgOrderMainForm",components:{BasicForm:$,JeecgOrderCustomerForm:X},props:{formData:B.object.def({}),formBpm:B.bool.def(!0)},setup(e){const[r,{setFieldsValue:t,setProps:f,getFieldsValue:l,updateSchema:F}]=L({labelWidth:150,schemas:x(e.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),c=P(()=>e.formData.disabled!==!1),n=b(),a=b(),i=b(!1);let d={};const _="/test/jeecgOrderMain/queryById";function S(){return y(this,null,function*(){console.log("props.formData",e.formData);let m={id:e.formData.dataId};const o=yield w.get({url:_,params:m});console.log("data",o),d=j({},o),yield t(d),yield f({disabled:c.value}),yield n.value.initFormData(e.formData.dataId),yield M(e.formData.dataId),i.value=!0})}function J(){return y(this,null,function*(){let m=l(),o=Object.assign({},d,m);console.log("\u8868\u5355\u6570\u636E",o),yield saveOrUpdate(o,!0)})}S();const R=b("jeecgOrderCustomerForm");function I(){}const O=W({loading:!1,dataSource:[],columns:V(Q,"order:")});function M(m){return y(this,null,function*(){const o="/test/jeecgOrderMain/queryOrderTicketListByMainId";let h={id:m};O.dataSource=[];const g=yield w.get({url:o,params:h});g&&g.length>0&&(O.dataSource=[...g])})}function V(m,o){let h=e.formData.permissionList;return m.filter(C=>{let s=h.find(K=>K.action===o+C.key);return s?(s instanceof Array&&(s=s[0]),s.type=="2"&&!s.isAuth?(C.disabled=!0,!0):!(s.type=="1"&&!s.isAuth)):!0})}return{registerForm:r,formDisabled:c,submitForm:J,jeecgOrderCustomerFormRef:n,activeKey:R,handleChangeTabs:I,table2:O,jeecgOrderTicketRef:a,ok:i}}}),Z={class:"jeecg-flow-demo"};function ee(e,r,t,f,l,F){const c=u("BasicForm"),n=u("JeecgOrderCustomerForm"),a=u("a-tab-pane"),i=u("JVxeTable"),d=u("a-tabs");return T(),z("div",Z,[p(c,{onRegister:e.registerForm},null,8,["onRegister"]),p(d,{activeKey:e.activeKey,"onUpdate:activeKey":r[0]||(r[0]=_=>e.activeKey=_),onChange:e.handleChangeTabs},{default:v(()=>[p(a,{tab:"\u5BA2\u6237\u4FE1\u606F",key:"jeecgOrderCustomerForm",forceRender:!0},{default:v(()=>[p(n,{ref:"jeecgOrderCustomerFormRef",formData:e.formData},null,8,["formData"])]),_:1}),p(a,{tab:"\u673A\u7968\u4FE1\u606F",key:"jeecgOrderTicket",forceRender:!0},{default:v(()=>[e.ok?(T(),E(i,{key:0,ref:"jeecgOrderTicketRef",stripe:"",rowSelection:"",keepSource:"",maxHeight:300,loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource},null,8,["loading","columns","dataSource"])):G("",!0)]),_:1})]),_:1},8,["activeKey","onChange"])])}var Ve=H(Y,[["render",ee]]);export{Ve as default};