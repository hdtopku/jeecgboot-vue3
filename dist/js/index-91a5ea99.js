var E=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))T.call(e,t)&&x(o,t,e[t]);if(I)for(var t of I(e))A.call(e,t)&&x(o,t,e[t]);return o},C=(o,e)=>K(o,P(e));var R=(o,e,t)=>new Promise((p,m)=>{var _=r=>{try{a(t.next(r))}catch(l){m(l)}},d=r=>{try{a(t.throw(r))}catch(l){m(l)}},a=r=>r.done?p(r.value):Promise.resolve(r.value).then(_,d);a((t=t.apply(o,e)).next())});import{d as D,l as L,V as k,a7 as u,a8 as M,f as c,aa as n,E as f,ac as y,W as S,u as s}from"./vue-50733b77.js";import"./index-f191817e.js";import{_ as F,g as Q,d as W}from"./RouteModal-3d35381d.js";import{q as $}from"./jeecg-online-vendor-d3e1865b.js";import{a as j}from"./index-52f25951.js";import{useListPage as z}from"./useListPage-4f9607d2.js";import{Q as G}from"./componentMap-5c02cfaf.js";import H from"./BasicTable-ca5b2c76.js";import"./index-b34ff7bc.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-838914b0.js";import"./index-fa22fec6.js";import"./index-7e7a94e9.js";import"./useForm-14ceb529.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./useFormItem-915d7f1b.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./JEllipsis-66e02300.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./cron-parser-vendor-19ac00ef.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./injectionKey-69710956.js";const J=[{title:"路由ID",dataIndex:"routerId",width:200,align:"left"},{title:"路由名称",dataIndex:"name",width:200},{title:"路由URI",dataIndex:"uri",width:200},{title:"状态",dataIndex:"status",slots:{customRender:"status"},width:200}];const O={class:"p-4"},X=D({name:"monitor-route"}),Jt=D(C(w({},X),{setup(o){const{createMessage:e}=$(),[t,{openDrawer:p}]=j(),m=L([]),{prefixCls:_,tableContext:d}=z({designScope:"router-template",tableProps:{title:"路由列表",api:Q,useSearchForm:!1,columns:J}}),[a,{reload:r},{rowSelection:l,selectedRowKeys:Y}]=d,N={dataIndex:"index",width:"15px"};function U(i){return[{label:"编辑",onClick:q.bind(null,i)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:v.bind(null,i)}}]}function Z(i){m.value=i}function V(){p(!0,{isUpdate:!1})}function q(i){p(!0,{record:i,isUpdate:!0})}function v(i){return R(this,null,function*(){yield W({id:i.id},r)})}return(i,tt)=>{const B=k("a-button"),g=k("a-tag");return u(),M("div",O,[c(s(H),{onRegister:s(a),indexColumnProps:N},{tableTitle:n(()=>[c(B,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:V,style:{"margin-right":"5px"}},{default:n(()=>[f("新增")]),_:1})]),status:n(({record:h,text:b})=>[b==0?(u(),y(g,{key:0,color:"pink"},{default:n(()=>[f("禁用")]),_:1})):S("",!0),b==1?(u(),y(g,{key:1,color:"#87d068"},{default:n(()=>[f("正常")]),_:1})):S("",!0)]),action:n(({record:h})=>[c(s(G),{actions:U(h)},null,8,["actions"])]),_:1},8,["onRegister"]),c(F,{onRegister:s(t),onSuccess:s(r)},null,8,["onRegister","onSuccess"])])}}}));export{Jt as default};