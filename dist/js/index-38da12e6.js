var T=Object.defineProperty,U=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,C=(o,e)=>{for(var t in e||(e={}))A.call(e,t)&&b(o,t,e[t]);if(w)for(var t of w(e))K.call(e,t)&&b(o,t,e[t]);return o},k=(o,e)=>U(o,v(e));var I=(o,e,t)=>new Promise((_,p)=>{var d=r=>{try{l(t.next(r))}catch(n){p(n)}},m=r=>{try{l(t.throw(r))}catch(n){p(n)}},l=r=>r.done?_(r.value):Promise.resolve(r.value).then(d,m);l((t=t.apply(o,e)).next())});import L from"./BasicTable-438c62dc.js";import{Q as F}from"./componentMap-8ca03aee.js";import"./useTable-28fc0fe6.js";import{_ as Q,g as W,d as $}from"./RouteModal.vue_vue_type_script_setup_true_lang-6668f05f.js";import"./jeecg-online-vendor-658239c9.js";import{a as j}from"./index-be443812.js";import{useListPage as q}from"./useListPage-66893768.js";import{d as S,k as z,V as R,a5 as u,a6 as G,f as c,a7 as a,E as f,a9 as y,W as D,u as s}from"./vue-bcbaddf9.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9ce97bb7.js";import"./index-0d179770.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";import"./BasicForm-21b7ac92.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3e2c32c1.js";import"./index-abefda79.js";import"./BasicModal-d4150903.js";import"./useWindowSizeFn-fbe431de.js";import"./useForm-69b31c99.js";import"./JAddInput-b8d2ab38.js";import"./areaDataUtil-661e31ab.js";import"./useFormItem-9082d1c8.js";import"./JSelectUser-d2cfe039.js";import"./props-8e60cede.js";import"./JSelectBiz-8b34874f.js";import"./index-8e0aeea9.js";import"./codemirror-vendor-7570b8a9.js";import"./index-6219dca4.js";import"./bem-6b2974b6.js";import"./props-c7c3390f.js";import"./useContextMenu-fdbf9c9a.js";import"./depart.api-380afd6d.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import"./cron-parser-vendor-7c1c3251.js";import"./injectionKey-69710956.js";import"./JUpload.vue_vue_type_style_index_0_lang-e11e0a89.js";import"./download-f4ef666f.js";import"./base64Conver-fa2fe1af.js";import"./index-e3a70fab.js";import"./index-42cd22d1.js";import"./useCountdown-d0291e3c.js";import"./index-ebd3f065.js";const H=[{title:"路由ID",dataIndex:"routerId",width:200,align:"left"},{title:"路由名称",dataIndex:"name",width:200},{title:"路由URI",dataIndex:"uri",width:200},{title:"状态",dataIndex:"status",slots:{customRender:"status"},width:200}],J={class:"p-4"},M=S({name:"monitor-route"}),jt=S(k(C({},M),{setup(o){const[e,{openDrawer:t}]=j();z([]);const{prefixCls:_,tableContext:p}=q({designScope:"router-template",tableProps:{title:"路由列表",api:W,useSearchForm:!1,columns:H}}),[d,{reload:m},{rowSelection:l,selectedRowKeys:r}]=p,n={dataIndex:"index",width:"15px"};function V(i){return[{label:"编辑",onClick:E.bind(null,i)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:N.bind(null,i)}}]}function B(){t(!0,{isUpdate:!1})}function E(i){t(!0,{record:i,isUpdate:!0})}function N(i){return I(this,null,function*(){yield $({id:i.id},m)})}return(i,O)=>{const P=R("a-button"),g=R("a-tag");return u(),G("div",J,[c(s(L),{onRegister:s(d),indexColumnProps:n},{tableTitle:a(()=>[c(P,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:B,style:{"margin-right":"5px"}},{default:a(()=>[f("新增")]),_:1})]),status:a(({record:x,text:h})=>[h==0?(u(),y(g,{key:0,color:"pink"},{default:a(()=>[f("禁用")]),_:1})):D("",!0),h==1?(u(),y(g,{key:1,color:"#87d068"},{default:a(()=>[f("正常")]),_:1})):D("",!0)]),action:a(({record:x})=>[c(s(F),{actions:V(x)},null,8,["actions"])]),_:1},8,["onRegister"]),c(Q,{onRegister:s(e),onSuccess:s(m)},null,8,["onRegister","onSuccess"])])}}}));export{jt as default};