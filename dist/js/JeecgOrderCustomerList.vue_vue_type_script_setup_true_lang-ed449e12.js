var u=(w,i,r)=>new Promise((p,c)=>{var m=t=>{try{l(r.next(t))}catch(n){c(n)}},h=t=>{try{l(r.throw(t))}catch(n){c(n)}},l=t=>t.done?p(t.value):Promise.resolve(t.value).then(m,h);l((r=r.apply(w,i)).next())});import F from"./BasicTable-f6cf85af.js";import{Q as N}from"./componentMap-da21b34e.js";import"./useTable-20c32c9e.js";import{i as y,u as D}from"./jeecg-online-vendor-59c8fbe3.js";import{_ as O}from"./JeecgOrderCustomerModal.vue_vue_type_script_setup_true_lang-c8c43cdf.js";import{useListPage as P}from"./useListPage-b93a4fee.js";import"./index-465fff25.js";import{c as U,a as $,d as j,b as A}from"./erplist.api-52cd7c71.js";import{z as H}from"./index-7711d1b4.js";import{d as J,c as Q,e as W,w as q,u as a,V as d,a5 as S,a6 as G,f as o,a7 as s,E as g,a9 as X,W as Y}from"./vue-bcbaddf9.js";const ue=J({__name:"JeecgOrderCustomerList",setup(w){const i=Q("orderId",W(()=>"")),r=D(),[p,{openModal:c}]=H(),m={},{prefixCls:h,tableContext:l}=P({tableProps:{api:R,tableSetting:{cacheKey:"customer"},columns:U,canResize:!1,useSearchForm:!1,actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[t,{reload:n,setSelectedRowKeys:I},{rowSelection:k,selectedRowKeys:f}]=l;q(i,()=>{m.orderId=a(i),n(),I([])});function R(e){return u(this,null,function*(){let{orderId:_}=e;return _==null||y(_)?[]:yield $(e)})}function v(){if(y(a(i))){r.createMessage.warning("请选择一个订单信息");return}c(!0,{isUpdate:!1,showFooter:!0})}function x(e){return u(this,null,function*(){c(!0,{record:e,isUpdate:!0,showFooter:!0})})}function M(e){return u(this,null,function*(){yield A({id:e.id},n)})}function z(){return u(this,null,function*(){yield j({ids:f.value},()=>{f.value=[],n()})})}function B(){n()}function E(e){return[{label:"编辑",onClick:x.bind(null,e)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:M.bind(null,e)}}]}return(e,_)=>{const C=d("a-button"),b=d("Icon"),K=d("a-menu-item"),L=d("a-menu"),T=d("a-dropdown");return S(),G("div",null,[o(a(F),{onRegister:a(t),rowSelection:a(k),searchInfo:m},{tableTitle:s(()=>[o(C,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:v},{default:s(()=>[g(" 新增")]),_:1}),a(f).length>0?(S(),X(T,{key:0},{overlay:s(()=>[o(L,null,{default:s(()=>[o(K,{key:"1",onClick:z},{default:s(()=>[o(b,{icon:"ant-design:delete-outlined"}),g(" 删除 ")]),_:1})]),_:1})]),default:s(()=>[o(C,null,{default:s(()=>[g("批量操作 "),o(b,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Y("",!0)]),action:s(({record:V})=>[o(a(N),{actions:E(V)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(O,{onRegister:a(p),onSuccess:B},null,8,["onRegister"])])}}});export{ue as _};