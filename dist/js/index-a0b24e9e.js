var K=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?K(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))q.call(e,t)&&x(o,t,e[t]);if(I)for(var t of I(e))A.call(e,t)&&x(o,t,e[t]);return o},C=(o,e)=>P(o,T(e));var R=(o,e,t)=>new Promise((p,m)=>{var _=r=>{try{a(t.next(r))}catch(l){m(l)}},d=r=>{try{a(t.throw(r))}catch(l){m(l)}},a=r=>r.done?p(r.value):Promise.resolve(r.value).then(_,d);a((t=t.apply(o,e)).next())});import{d as D,l as L,V as k,a7 as u,a8 as M,f as c,aa as n,E as f,ac as y,W as S,u as s}from"./vue-ebecda47.js";import"./index-993283cc.js";import{_ as F,g as Q,d as W}from"./RouteModal-287ff85d.js";import{C as $}from"./jeecg-online-vendor-cfb58502.js";import{a as j}from"./index-5c1c038a.js";import{useListPage as z}from"./useListPage-52971497.js";import{Q as G}from"./componentMap-c36c4b8d.js";import H from"./BasicTable-46b6c894.js";import"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";import"./index-be9b0972.js";import"./index-a2e0ccba.js";import"./useForm-21b78d9f.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./useFormItem-ba20c4de.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./JEllipsis-410bb5e8.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./cron-parser-vendor-afad4b1e.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./injectionKey-69710956.js";const J=[{title:"路由ID",dataIndex:"routerId",width:200,align:"left"},{title:"路由名称",dataIndex:"name",width:200},{title:"路由URI",dataIndex:"uri",width:200},{title:"状态",dataIndex:"status",slots:{customRender:"status"},width:200}];const O={class:"p-4"},X=D({name:"monitor-route"}),Jt=D(C(w({},X),{setup(o){const{createMessage:e}=$(),[t,{openDrawer:p}]=j(),m=L([]),{prefixCls:_,tableContext:d}=z({designScope:"router-template",tableProps:{title:"路由列表",api:Q,useSearchForm:!1,columns:J}}),[a,{reload:r},{rowSelection:l,selectedRowKeys:Y}]=d,N={dataIndex:"index",width:"15px"};function U(i){return[{label:"编辑",onClick:v.bind(null,i)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:B.bind(null,i)}}]}function Z(i){m.value=i}function V(){p(!0,{isUpdate:!1})}function v(i){p(!0,{record:i,isUpdate:!0})}function B(i){return R(this,null,function*(){yield W({id:i.id},r)})}return(i,tt)=>{const E=k("a-button"),g=k("a-tag");return u(),M("div",O,[c(s(H),{onRegister:s(a),indexColumnProps:N},{tableTitle:n(()=>[c(E,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:V,style:{"margin-right":"5px"}},{default:n(()=>[f("新增")]),_:1})]),status:n(({record:h,text:b})=>[b==0?(u(),y(g,{key:0,color:"pink"},{default:n(()=>[f("禁用")]),_:1})):S("",!0),b==1?(u(),y(g,{key:1,color:"#87d068"},{default:n(()=>[f("正常")]),_:1})):S("",!0)]),action:n(({record:h})=>[c(s(G),{actions:U(h)},null,8,["actions"])]),_:1},8,["onRegister"]),c(F,{onRegister:s(t),onSuccess:s(r)},null,8,["onRegister","onSuccess"])])}}}));export{Jt as default};