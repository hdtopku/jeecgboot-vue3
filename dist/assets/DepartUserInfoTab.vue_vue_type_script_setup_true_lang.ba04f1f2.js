var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var k=(o,n,t)=>n in o?Y(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,x=(o,n)=>{for(var t in n||(n={}))te.call(n,t)&&k(o,t,n[t]);if(U)for(var t of U(n))ne.call(n,t)&&k(o,t,n[t]);return o},E=(o,n)=>Z(o,ee(n));var D=(o,n,t)=>new Promise((m,f)=>{var _=i=>{try{l(t.next(i))}catch(c){f(c)}},b=i=>{try{l(t.throw(i))}catch(c){f(c)}},l=i=>i.done?m(i.value):Promise.resolve(i.value).then(_,b);l((t=t.apply(o,n)).next())});import oe from"./BasicTable.a4fceed5.js";import{T as ae}from"./componentMap.87abb767.js";import"./BasicTable.vue_vue_type_style_index_0_lang.ddcad0ba.js";import"./TableImg.vue_vue_type_style_index_0_lang.39d7d875.js";import"./index.4727c32e.js";import{a as F}from"./index.b4620f2a.js";import{useListPage as re}from"./useListPage.88620ffd.js";import{_ as se}from"./UserDrawer.vue_vue_type_script_setup_true_lang.035ed2ef.js";import{U as ue}from"./JAddInput.da07cc21.js";import{_ as le}from"./DepartRoleUserAuthDrawer.vue_vue_type_script_setup_true_lang.8ecc942a.js";import{m as ie,n as ce,u as pe}from"./depart.user.api.3f1db8a1.js";import{c as de,e as me}from"./depart.user.data.5d751a99.js";import{j as fe,bj as _e,m as De,E as be,bI as we,r as d,s as A,t as ge,v as a,w as s,y as B,K as u,Q as Ce,R as ye,ax as he,aW as R}from"./index.639f1d60.js";const Ue=R("span",null,"\u53D6\u6D88\u5173\u8054",-1),ke=R("span",null,"\u6279\u91CF\u64CD\u4F5C ",-1),Ve=fe({__name:"DepartUserInfoTab",props:{data:{require:!0,type:Object}},setup(o){const n=o;_e("prefixCls");const t=De(()=>{var e;return(e=n.data)==null?void 0:e.id}),m={xs:24,sm:24,md:24,lg:12,xl:12,xxl:8},{tableContext:f,createMessage:_}=re({tableProps:{api:ie,columns:de,canResize:!1,formConfig:{schemas:me,baseColProps:m,labelAlign:"left",labelCol:{xs:24,sm:24,md:24,lg:9,xl:7,xxl:5},wrapperCol:{},actionColOptions:E(x({},m),{style:{textAlign:"left"}})},beforeFetch(e){e.depId=t.value}}}),[b,{reload:l,setProps:i,setLoading:c,updateTableDataRecord:v},{rowSelection:S,selectedRowKeys:w}]=f;be(()=>n.data,()=>l());const[I,{openDrawer:g,setDrawerProps:xe}]=F(),[T,P]=F(),[j,M]=we();function N(){w.value=[]}function O(e){P.openDrawer(!0,{userId:e.id,departId:t})}function V(){var e,r;t.value?g(!0,{isUpdate:!1,departDisabled:!0,nextDepartOptions:{value:(e=n.data)==null?void 0:e.key,label:(r=n.data)==null?void 0:r.title},record:{activitiSync:1,userIdentity:1,selecteddeparts:t.value}}):_.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u90E8\u95E8")}function K(e){g(!0,{record:e,isUpdate:!0,departDisabled:!0,showFooter:!1})}function L(e){g(!0,{isUpdate:!0,record:e,departDisabled:!0})}function $(){M.openModal()}function C(e,r){return D(this,null,function*(){if(!t.value)_.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u90E8\u95E8");else{c(!0);let p=u(e).join(",");try{return yield pe({depId:t.value,userIds:p},r),l()}finally{c(!1)}}return Promise.reject()})}function q(){return D(this,null,function*(){try{yield C(w,!0),N()}catch(e){}})}function z(e,r){return D(this,null,function*(){if(r.length>0)try{c(!0),yield ce(t.value,r),l()}finally{c(!1)}})}function G({isUpdate:e,values:r}){e?v(r.id,r):l()}function Q(e){return[{label:"\u7F16\u8F91",onClick:L.bind(null,e)}]}function W(e){return[{label:"\u90E8\u95E8\u89D2\u8272",onClick:O.bind(null,e)},{label:"\u7528\u6237\u8BE6\u60C5",onClick:K.bind(null,e)},{label:"\u53D6\u6D88\u5173\u8054",color:"error",popConfirm:{title:"\u786E\u8BA4\u53D6\u6D88\u5173\u8054\u5417\uFF1F",confirm:C.bind(null,[e.id],!1)}}]}return(e,r)=>{const p=d("a-button"),y=d("icon"),H=d("a-menu-item"),J=d("a-menu"),X=d("a-dropdown");return A(),ge(he,null,[a(u(oe),{onRegister:u(b),rowSelection:u(S)},{tableTitle:s(()=>[a(p,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:$},{default:s(()=>[B("\u6DFB\u52A0\u5DF2\u6709\u7528\u6237")]),_:1}),a(p,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:V},{default:s(()=>[B("\u65B0\u5EFA\u7528\u6237")]),_:1}),u(w).length>0?(A(),Ce(X,{key:0},{overlay:s(()=>[a(J,null,{default:s(()=>[a(H,{key:"1",onClick:q},{default:s(()=>[a(y,{icon:"bx:bx-unlink"}),Ue]),_:1})]),_:1})]),default:s(()=>[a(p,null,{default:s(()=>[ke,a(y,{icon:"akar-icons:chevron-down"})]),_:1})]),_:1})):ye("",!0)]),action:s(({record:h})=>[a(u(ae),{actions:Q(h),dropDownActions:W(h)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),a(se,{onRegister:u(I),onSuccess:G},null,8,["onRegister"]),a(le,{onRegister:u(T)},null,8,["onRegister"]),a(ue,{rowKey:"id",onRegister:u(j),onGetSelectResult:z},null,8,["onRegister"])],64)}}});export{Ve as _};