var Ce=Object.defineProperty,he=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ee=(n,t,o)=>t in n?Ce(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,ne=(n,t)=>{for(var o in t||(t={}))we.call(t,o)&&ee(n,o,t[o]);if(Z)for(var o of Z(t))be.call(t,o)&&ee(n,o,t[o]);return n},te=(n,t)=>he(n,Ee(t));var E=(n,t,o)=>new Promise((f,_)=>{var l=r=>{try{p(o.next(r))}catch(C){_(C)}},g=r=>{try{p(o.throw(r))}catch(C){_(C)}},p=r=>r.done?f(r.value):Promise.resolve(r.value).then(l,g);p((o=o.apply(n,t)).next())});import{B as Ae}from"./BasicTable.5ee1302a.js";import{T as ke}from"./helper.1b3fdfba.js";import"./TableImg.7ccb5f8d.js";import Te from"./UserDrawer.d5cc9cc3.js";import De from"./UserRecycleBinModal.d8106a20.js";import xe from"./PasswordModal.631a0e20.js";import Se from"./UserAgentModal.e7ef61e3.js";import{a1 as ce,ej as oe,l as J,t as F,v as y,V as w,z as a,y as u,C as i,D as H,W as M,q as ve,F as Re,o as ue,a5 as N,ek as $e,h as O,x as G,B as se,el as ae,L as s,aw as ie,u as pe,bH as W}from"./index.b3d2a891.js";import{a as Ie}from"./index.804bf00b.js";import{useListPage as Me}from"./useListPage.c9ea079e.js";import"./index.2d23bddf.js";import{c as Le,s as je}from"./user.data.1a36a2a2.js";import{l as ze,k as Ue,m as Pe,n as He,o as re,q as Oe,r as Je}from"./user.api.365c9555.js";import"./BasicForm.2d2aa4ab.js";import"./uniqBy.4cec2220.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import"./useFormItem.c06072f5.js";import"./api.1d3c1927.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./index.2ff6eac0.js";import"./useContentHeight.0b543e32.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./RedoOutlined.b10d0ad6.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./index.96560ef2.js";import"./useAdaptiveWidth.584cb82a.js";import"./validator.87cfc387.js";import"./renderUtils.a1668db6.js";import"./useTable.99eebf43.js";const de={getEnabledType:"/sys/thirdApp/getEnabledType",wechatEnterprise:{user:"/sys/thirdApp/sync/wechatEnterprise/user",depart:"/sys/thirdApp/sync/wechatEnterprise/depart"},dingtalk:{user:"/sys/thirdApp/sync/dingtalk/user",depart:"/sys/thirdApp/sync/dingtalk/depart"}};let X=null;const Ke=()=>E(void 0,null,function*(){if(X!=null)return oe(X);{let{success:n,result:t}=yield ce.get({url:de.getEnabledType},{isTransformResponse:!1});if(n)return X=oe(t),t;console.warn("getEnabledType\u67E5\u8BE2\u5931\u8D25\uFF1A")}return{}}),Ve=i("\u540C\u6B65\u5230\u672C\u5730"),le=J({__name:"JThirdAppDropdown",props:{type:String,name:String,syncToApp:Boolean,syncToLocal:Boolean},emits:["to-app","to-local"],setup(n,{emit:t}){const o=n;function f(_){t(_.key,{type:o.type})}return(_,l)=>{const g=F("a-button"),p=F("a-menu-item"),r=F("a-menu"),C=F("a-dropdown");return n.syncToApp&&n.syncToLocal?(y(),w(C,{key:0},{overlay:a(()=>[u(r,{onClick:f},{default:a(()=>[n.syncToApp?(y(),w(p,{key:"to-app"},{default:a(()=>[i("\u540C\u6B65\u5230"+H(n.name),1)]),_:1})):M("",!0),n.syncToLocal?(y(),w(p,{key:"to-local"},{default:a(()=>[Ve]),_:1})):M("",!0)]),_:1})]),default:a(()=>[u(g,{type:"primary",preIcon:"ant-design:sync-outlined"},{default:a(()=>[i("\u540C\u6B65"+H(n.name),1)]),_:1})]),_:1})):n.syncToApp?(y(),w(g,{key:1,type:"primary",preIcon:"ant-design:sync-outlined",onClick:l[0]||(l[0]=D=>f({key:"to-app"}))},{default:a(()=>[i("\u540C\u6B65"+H(n.name),1)]),_:1})):(y(),w(g,{key:2,type:"primary",preIcon:"ant-design:sync-outlined",onClick:l[1]||(l[1]=D=>f({key:"to-local"}))},{default:a(()=>[i("\u540C\u6B65"+H(n.name)+"\u5230\u672C\u5730",1)]),_:1}))}}});const qe=i("\u672A\u8BBE\u7F6E\u4EFB\u4F55\u540C\u6B65\u65B9\u5411"),Ne=J({__name:"JThirdAppButton",props:{bizType:{type:String,required:!0},syncToApp:Boolean,syncToLocal:Boolean,selectedRowKeys:Array},emits:["sync-ok","sync-error","sync-finally"],setup(n,{emit:t}){const o=n,{createMessage:f,createWarningModal:_}=pe(),l=Re({}),g=ue(()=>({syncToApp:o.syncToApp,syncToLocal:o.syncToLocal})),p=ue(()=>({"to-app":r,"to-local":C}));function r(d){K(d.type,"/toApp")}function C(d){K(d.type,"/toLocal")}function D(){return E(this,null,function*(){l.value=yield Ke()})}function K(d,h){let x=de[d];if(!(x&&x[o.bizType])){console.warn("\u914D\u7F6E\u51FA\u9519");return}let m=x[o.bizType]+h,k=o.selectedRowKeys,j="\u786E\u5B9A\u8981\u5F00\u59CB\u540C\u6B65\u5168\u90E8\u6570\u636E\u5417\uFF1F\u53EF\u80FD\u82B1\u8D39\u8F83\u957F\u65F6\u95F4\uFF01";return Array.isArray(k)&&k.length>0?j=`\u786E\u5B9A\u8981\u5F00\u59CB\u540C\u6B65\u8FD9 ${k.length} \u9879\u5417\uFF1F`:k=[],new Promise((S,T)=>{const z=N.confirm({icon:u($e),title:"\u540C\u6B65",content:j,onOk:()=>{z.update({keyboard:!1,okText:"\u540C\u6B65\u4E2D\u2026",cancelButtonProps:{disabled:!0}});let V={ids:k.join(",")};return ce.get({url:m,params:V},{isTransformResponse:!1}).then(B=>{let b={};B.result&&(b={width:600,title:B.message,content:()=>{let v,U=["\u6210\u529F\u4FE1\u606F\u5982\u4E0B\uFF1A",L(O,B.result.successInfo.map((R,$)=>`${$+1}. ${R}`).join(`
`))];return B.success?v=[...U,O("br"),"\u65E0\u5931\u8D25\u4FE1\u606F\uFF01"]:v=["\u5931\u8D25\u4FE1\u606F\u5982\u4E0B\uFF1A",L(O,B.result.failInfo.map((R,$)=>`${$+1}. ${R}`).join(`
`)),O("br"),...U],v}}),B.success?(b!=null?N.success(b):f.warning(B.message),t("sync-ok")):(b!=null?N.warning(b):f.warning(B.message),t("sync-error"))}).catch(()=>z.destroy()).finally(()=>{S(),t("sync-finally",{type:d,direction:h,isToApp:h==="/toApp",isToLocal:h==="/toLocal"})})},onCancel(){S()}})})}function L(d,h){return d("div",{id:"box",style:{minHeight:"100px",border:"1px solid #d9d9d9",fontSize:"14px",maxHeight:"250px",whiteSpace:"pre",overflow:"auto",padding:"10px"}},h)}return D(),(d,h)=>n.syncToApp||n.syncToLocal?(y(),G(ie,{key:0},[l.value.wechatEnterprise?(y(),w(le,se({key:0,type:"wechatEnterprise",name:"\u4F01\u5FAE"},s(g),ae(s(p))),null,16)):M("",!0),l.value.dingtalk?(y(),w(le,se({key:1,type:"dingtalk",name:"\u9489\u9489"},s(g),ae(s(p))),null,16)):M("",!0)],64)):(y(),G(ie,{key:1},[qe],64))}});var We=ve(Ne,[["__scopeId","data-v-7ecd6fe9"]]);const Xe=i(" \u65B0\u589E"),Ge=i(" \u5BFC\u51FA"),Qe=i("\u5BFC\u5165"),Ye=i(" \u540C\u6B65\u6D41\u7A0B"),Ze=i(" \u56DE\u6536\u7AD9"),en=i(" \u5220\u9664 "),nn=i(" \u51BB\u7ED3 "),tn=i(" \u89E3\u51BB "),on=i("\u6279\u91CF\u64CD\u4F5C "),un=J({name:"system-user"}),ot=J(te(ne({},un),{setup(n){const{createMessage:t,createConfirm:o}=pe(),[f,{openDrawer:_}]=Ie(),[l,{openModal:g}]=W(),[p,{openModal:r}]=W(),[C,{openModal:D}]=W(),{prefixCls:K,tableContext:L,onExportXls:d,onImportXls:h}=Me({designScope:"user-list",tableProps:{title:"\u7528\u6237\u5217\u8868",api:ze,columns:Le,size:"small",formConfig:{schemas:je},actionColumn:{width:120},beforeFetch:e=>Object.assign({column:"createTime",order:"desc"},e)},exportConfig:{name:"\u7528\u6237\u5217\u8868",url:Ue},importConfig:{url:Pe}}),[x,{reload:m,updateTableDataRecord:k},{rowSelection:j,selectedRows:S,selectedRowKeys:T}]=L;function z(){_(!0,{isUpdate:!1,showFooter:!0})}function V(e){return E(this,null,function*(){_(!0,{record:e,isUpdate:!0,showFooter:!0})})}function B(e){return E(this,null,function*(){_(!0,{record:e,isUpdate:!0,showFooter:!1})})}function b(e){return E(this,null,function*(){if(e.username=="admin"){t.warning("\u7BA1\u7406\u5458\u8D26\u53F7\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C\uFF01");return}yield Je({id:e.id},m)})}function v(){return E(this,null,function*(){let e=s(S).filter(c=>c.username=="admin");if(s(e).length>0){t.warning("\u7BA1\u7406\u5458\u8D26\u53F7\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C\uFF01");return}yield He({ids:T.value},()=>{T.value=[],m()})})}function U(){m()}function R(e){r(!0,{username:e})}function $(e){D(!0,{userName:e})}function Q(e,c){return E(this,null,function*(){if(e.username=="admin"){t.warning("\u7BA1\u7406\u5458\u8D26\u53F7\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C\uFF01");return}yield re({ids:e.id,status:c},m)})}function Y(e){let c=S.value.filter(A=>A.username=="admin");if(s(c).length>0){t.warning("\u7BA1\u7406\u5458\u8D26\u53F7\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C\uFF01");return}o({iconType:"warning",title:"\u786E\u8BA4\u64CD\u4F5C",content:"\u662F\u5426"+(e==1?"\u89E3\u51BB":"\u51BB\u7ED3")+"\u9009\u4E2D\u8D26\u53F7?",onOk:()=>E(this,null,function*(){yield re({ids:s(T).join(","),status:e},m)})})}function me(){Oe()}function ye({isToLocal:e}){e&&m()}function fe(e){return[{label:"\u7F16\u8F91",onClick:V.bind(null,e)}]}function _e(e){return[{label:"\u8BE6\u60C5",onClick:B.bind(null,e)},{label:"\u5BC6\u7801",onClick:R.bind(null,e.username)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:b.bind(null,e)}},{label:"\u51BB\u7ED3",ifShow:e.status==1,popConfirm:{title:"\u786E\u5B9A\u51BB\u7ED3\u5417?",confirm:Q.bind(null,e,2)}},{label:"\u89E3\u51BB",ifShow:e.status==2,popConfirm:{title:"\u786E\u5B9A\u89E3\u51BB\u5417?",confirm:Q.bind(null,e,1)}},{label:"\u4EE3\u7406\u4EBA",onClick:$.bind(null,e.username)}]}return(e,c)=>{const A=F("a-button"),ge=F("j-upload-button"),P=F("Icon"),q=F("a-menu-item"),Be=F("a-menu"),Fe=F("a-dropdown");return y(),G("div",null,[u(s(Ae),{onRegister:s(x),rowSelection:s(j)},{tableTitle:a(()=>[u(A,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:z},{default:a(()=>[Xe]),_:1}),u(A,{type:"primary",preIcon:"ant-design:export-outlined",onClick:s(d)},{default:a(()=>[Ge]),_:1},8,["onClick"]),u(ge,{type:"primary",preIcon:"ant-design:import-outlined",onClick:s(h)},{default:a(()=>[Qe]),_:1},8,["onClick"]),u(A,{type:"primary",onClick:me,preIcon:"ant-design:sync-outlined"},{default:a(()=>[Ye]),_:1}),u(A,{type:"primary",onClick:c[0]||(c[0]=I=>s(g)(!0,{})),preIcon:"ant-design:hdd-outlined"},{default:a(()=>[Ze]),_:1}),u(We,{"biz-type":"user","selected-row-keys":s(T),syncToApp:"",syncToLocal:"",onSyncFinally:ye},null,8,["selected-row-keys"]),s(T).length>0?(y(),w(Fe,{key:0},{overlay:a(()=>[u(Be,null,{default:a(()=>[u(q,{key:"1",onClick:v},{default:a(()=>[u(P,{icon:"ant-design:delete-outlined"}),en]),_:1}),u(q,{key:"2",onClick:c[1]||(c[1]=I=>Y(2))},{default:a(()=>[u(P,{icon:"ant-design:lock-outlined"}),nn]),_:1}),u(q,{key:"3",onClick:c[2]||(c[2]=I=>Y(1))},{default:a(()=>[u(P,{icon:"ant-design:unlock-outlined"}),tn]),_:1})]),_:1})]),default:a(()=>[u(A,null,{default:a(()=>[on,u(P,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):M("",!0)]),action:a(({record:I})=>[u(s(ke),{actions:fe(I),dropDownActions:_e(I)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),u(Te,{onRegister:s(f),onSuccess:U},null,8,["onRegister"]),u(xe,{onRegister:s(p),onSuccess:s(m)},null,8,["onRegister","onSuccess"]),u(Se,{onRegister:s(C),onSuccess:s(m)},null,8,["onRegister","onSuccess"]),u(De,{onRegister:s(l),onSuccess:s(m)},null,8,["onRegister","onSuccess"])])}}}));export{ot as default};
