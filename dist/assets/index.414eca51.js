var j=Object.defineProperty,z=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var B=(e,s,t)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,F=(e,s)=>{for(var t in s||(s={}))H.call(s,t)&&B(e,t,s[t]);if(h)for(var t of h(s))K.call(s,t)&&B(e,t,s[t]);return e},b=(e,s)=>z(e,I(s));var f=(e,s,t)=>new Promise((m,a)=>{var _=n=>{try{l(t.next(n))}catch(c){a(c)}},g=n=>{try{l(t.throw(n))}catch(c){a(c)}},l=n=>n.done?m(n.value):Promise.resolve(n.value).then(_,g);l((t=t.apply(e,s)).next())});import{B as O}from"./BasicTable.ee63ae89.js";import{T as U}from"./helper.4a0046bd.js";import"./TableImg.198933b8.js";import{a as W}from"./index.c00316d7.js";import{useListPage as $}from"./useListPage.2683ea67.js";import{c as q,s as G,_ as J}from"./ManageDrawer.ad8d193d.js";import{a1 as v,u as Q,l as M,o as Y,t as d,v as x,x as Z,y as r,z as u,L as i,V as ee,W as te,E as se,aV as E}from"./index.3bed7968.js";import"./BasicForm.edf8c211.js";import"./uniqBy.be18330d.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import"./useFormItem.1483bf1f.js";import"./api.9041b4ca.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./index.e57fdc92.js";import"./useContentHeight.2c22b941.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";import"./RedoOutlined.b3a6cb97.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./index.e7272bc8.js";import"./useTable.a9a1d4e1.js";const{createConfirm:oe}=Q();var y=(e=>(e.list="/sys/message/sysMessage/list",e.delete="/sys/message/sysMessage/delete",e.deleteBatch="/sys/message/sysMessage/deleteBatch",e.exportXls="sys/message/sysMessage/exportXls",e.importXls="sys/message/sysMessage/importExcel",e.save="/sys/message/sysMessage/add",e.edit="/sys/message/sysMessage/edit",e))(y||{});const ne=e=>v.get({url:"/sys/message/sysMessage/list",params:e}),ae=(e,s=!1)=>new Promise((t,m)=>{const a=()=>{t(v.delete({url:"/sys/message/sysMessage/deleteBatch",params:e},{joinParamsToUrl:!0}))};s?oe({iconType:"warning",title:"\u5220\u9664",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:()=>a(),onCancel:()=>m()}):a()});const re=E("span",null,"\u5220\u9664",-1),ie=E("span",null,"\u6279\u91CF\u64CD\u4F5C",-1),le=M({name:"message-manage"}),Ye=M(b(F({},le),{setup(e){const{prefixCls:s,tableContext:t}=$({designScope:"message-manage",tableProps:{title:"\u6D88\u606F\u4E2D\u5FC3\u6A21\u677F\u5217\u8868\u6570\u636E",api:ne,columns:q,formConfig:{schemas:G}},exportConfig:{url:y.exportXls,name:"\u6D88\u606F\u4E2D\u5FC3\u6A21\u677F\u5217\u8868"},importConfig:{url:y.importXls,success:()=>a()}}),[m,{reload:a,setLoading:_},{rowSelection:g,selectedRowKeys:l}]=t,n=Y(()=>l.value.length>0),[c,{openDrawer:k}]=W();function T(o){k(!0,{record:o})}function R(o){o&&C([o.id],!1)}function S(){return f(this,null,function*(){try{yield C(l),l.value=[]}finally{}})}function C(o,w=!0){return f(this,null,function*(){const p=i(o);if(p.length>0)try{_(!0),yield ae({ids:p.join(",")},w),yield a()}finally{_(!1)}})}function V(o){return[{label:"\u8BE6\u60C5",onClick:T.bind(null,o)}]}function X(o){return[{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F",confirm:R.bind(null,o)}}]}return(o,w)=>{const p=d("Icon"),L=d("a-menu-item"),P=d("a-menu"),A=d("a-button"),N=d("a-dropdown");return x(),Z("div",{class:se(i(s))},[r(i(O),{onRegister:i(m),rowSelection:i(g)},{tableTitle:u(()=>[i(n)?(x(),ee(N,{key:0},{overlay:u(()=>[r(P,null,{default:u(()=>[r(L,{key:"1",onClick:S},{default:u(()=>[r(p,{icon:"ant-design:delete-outlined"}),re]),_:1})]),_:1})]),default:u(()=>[r(A,null,{default:u(()=>[ie,r(p,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):te("",!0)]),action:u(({record:D})=>[r(i(U),{actions:V(D),dropDownActions:X(D)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),r(J,{onRegister:i(c)},null,8,["onRegister"])],2)}}}));export{Ye as default};