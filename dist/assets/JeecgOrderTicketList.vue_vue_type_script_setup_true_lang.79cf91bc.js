var l=(h,c,i)=>new Promise((p,r)=>{var m=t=>{try{u(i.next(t))}catch(o){r(o)}},w=t=>{try{u(i.throw(t))}catch(o){r(o)}},u=t=>t.done?p(t.value):Promise.resolve(t.value).then(m,w);u((i=i.apply(h,c)).next())});import j from"./BasicTable.4f050cd0.js";import{T as z}from"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{j as D,bj as N,m as V,bI as O,E as P,K as a,i as k,r as d,s as y,t as U,v as n,w as s,y as g,Q as $,R as H,u as J}from"./index.9d4ffdff.js";import{_ as Q}from"./JeecgOrderTicketModal.vue_vue_type_script_setup_true_lang.a62b5a32.js";import{useListPage as q}from"./useListPage.30b1ebd9.js";import"./index.fa33ec21.js";import{t as G,f as W,g as X,h as Y}from"./erplist.api.7420ab78.js";const ue=D({__name:"JeecgOrderTicketList",setup(h){const c=N("orderId",V(()=>"")),i=J(),[p,{openModal:r}]=O(),m={},{prefixCls:w,tableContext:u}=q({tableProps:{api:E,tableSetting:{cacheKey:"ticket"},columns:G,canResize:!1,useSearchForm:!1,actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[t,{reload:o,setSelectedRowKeys:F},{rowSelection:T,selectedRowKeys:_}]=u;P(c,()=>{m.orderId=a(c),o(),F([])});function E(e){return l(this,null,function*(){let{orderId:f}=e;return f==null||k(f)?[]:yield W(e)})}function I(){if(k(a(c))){i.createMessage.warning("\u8BF7\u9009\u62E9\u4E00\u4E2A\u8BA2\u5355\u4FE1\u606F");return}r(!0,{isUpdate:!1,showFooter:!0})}function S(e){return l(this,null,function*(){r(!0,{record:e,isUpdate:!0,showFooter:!0})})}function B(e){return l(this,null,function*(){yield Y({id:e.id},o)})}function R(){return l(this,null,function*(){yield X({ids:_.value},()=>{_.value=[],o()})})}function v(){o()}function x(e){return[{label:"\u7F16\u8F91",onClick:S.bind(null,e)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:B.bind(null,e)}}]}return(e,f)=>{const b=d("a-button"),C=d("Icon"),A=d("a-menu-item"),M=d("a-menu"),K=d("a-dropdown");return y(),U("div",null,[n(a(j),{onRegister:a(t),rowSelection:a(T),searchInfo:m},{tableTitle:s(()=>[n(b,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:s(()=>[g(" \u65B0\u589E")]),_:1}),a(_).length>0?(y(),$(K,{key:0},{overlay:s(()=>[n(M,null,{default:s(()=>[n(A,{key:"1",onClick:R},{default:s(()=>[n(C,{icon:"ant-design:delete-outlined"}),g(" \u5220\u9664 ")]),_:1})]),_:1})]),default:s(()=>[n(b,null,{default:s(()=>[g("\u6279\u91CF\u64CD\u4F5C "),n(C,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):H("",!0)]),action:s(({record:L})=>[n(a(z),{actions:x(L)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),n(Q,{onRegister:a(p),onSuccess:v},null,8,["onRegister"])])}}});export{ue as _};