var _=(b,m,s)=>new Promise((o,d)=>{var f=n=>{try{c(s.next(n))}catch(l){d(l)}},u=n=>{try{c(s.throw(n))}catch(l){d(l)}},c=n=>n.done?o(n.value):Promise.resolve(n.value).then(f,u);c((s=s.apply(b,m)).next())});import{B as V}from"./index-abefda79.js";import j from"./BasicTable-438c62dc.js";import{Q as N}from"./componentMap-8ca03aee.js";import{u as O}from"./useTable-28fc0fe6.js";import{r as D}from"./user.data-5cd7e8b1.js";import{j as H,p as W,k as z}from"./user.api-32d45f59.js";import{u as A}from"./jeecg-online-vendor-658239c9.js";import{B as E}from"./index-0d179770.js";import{d as F,k as J,V as r,a5 as g,a9 as y,a7 as t,f as a,u as i,E as h,W as k,ag as L,J as R}from"./vue-bcbaddf9.js";const te=F({__name:"UserRecycleBinModal",emits:["success","register"],setup(b,{emit:m}){const{createConfirm:s}=A(),o=J([]),[d]=E(()=>{o.value=[]}),[f,{reload:u}]=O({api:H,columns:D,rowKey:"id",striped:!0,useSearchForm:!1,showTableSetting:!1,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,pagination:!0,tableSetting:{fullScreen:!0},canResize:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",fixed:void 0}}),c={type:"checkbox",columnWidth:50,selectedRowKeys:o,onChange:n};function n(e){o.value=e}function l(e){return _(this,null,function*(){yield W({userIds:e.id},u),m("success")})}function B(){l({id:R(i(o)).join(",")})}function w(e){return _(this,null,function*(){yield z({userIds:e.id},u)})}function v(){s({iconType:"warning",title:"删除",content:"确定要永久删除吗？删除后将不可恢复！",onOk:()=>w({id:R(i(o)).join(",")}),onCancel(){}})}function x(e){return[{label:"取回",icon:"ant-design:redo-outlined",popConfirm:{title:"是否确认还原",confirm:l.bind(null,e)}},{label:"彻底删除",icon:"ant-design:scissor-outlined",popConfirm:{title:"是否确认删除",confirm:w.bind(null,e)}}]}return(e,P)=>{const p=r("Icon"),C=r("a-menu-item"),T=r("a-menu"),I=r("a-button"),S=r("a-dropdown");return g(),y(i(V),L(e.$attrs,{onRegister:i(d),title:"用户回收站",showOkBtn:!1,width:"1000px",destroyOnClose:""}),{default:t(()=>[a(i(j),{onRegister:i(f),rowSelection:c},{tableTitle:t(()=>[o.value.length>0?(g(),y(S,{key:0},{overlay:t(()=>[a(T,null,{default:t(()=>[a(C,{key:"1",onClick:v},{default:t(()=>[a(p,{icon:"ant-design:delete-outlined"}),h(" 批量删除 ")]),_:1}),a(C,{key:"1",onClick:B},{default:t(()=>[a(p,{icon:"ant-design:redo-outlined"}),h(" 批量还原 ")]),_:1})]),_:1})]),default:t(()=>[a(I,null,{default:t(()=>[h("批量操作 "),a(p,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):k("",!0)]),bodyCell:t(({column:M,record:K})=>[M.key==="action"?(g(),y(i(N),{key:0,actions:x(K)},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"])]),_:1},16,["onRegister"])}}});export{te as _};