var p=(o,n,a)=>new Promise((c,r)=>{var m=l=>{try{d(a.next(l))}catch(e){r(e)}},t=l=>{try{d(a.throw(l))}catch(e){r(e)}},d=l=>l.done?c(l.value):Promise.resolve(l.value).then(m,t);d((a=a.apply(o,n)).next())});import{p as u,l as S}from"./index-fde9c72f.js";import{as as h,b2 as R,at as T}from"./jeecg-online-vendor-bf2efbcb.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import{d as y,e as D,k as f,b as P,u as g,w as C,J as i}from"./vue-c7e3516e.js";import{d7 as b,cL as v}from"./antd-vue-vendor-1561c1ba.js";y({name:"TableImage",components:{Image:b,PreviewGroup:b.PreviewGroup,Badge:v},props:{imgList:u.arrayOf(u.string),size:u.number.def(40),simpleShow:u.bool,showBadge:u.bool.def(!0),margin:u.number.def(4),srcPrefix:u.string.def("")},setup(o){const n=D(()=>{const{size:c}=o,r=`${c}px`;return{height:r,width:r}}),{prefixCls:a}=S("basic-table-img");return{prefixCls:a,getWrapStyle:n}}});function I(o){const n=f(null),a=f(!1),c=f(null);let r;function m(e,s){P(()=>{n.value=null,a.value=null}),!(g(a)&&h()&&e===g(n))&&(n.value=e,c.value=s,o&&e.setProps(R(o)),a.value=!0,r==null||r(),r=C(()=>o,()=>{o&&e.setProps(R(o))},{immediate:!0,deep:!0}))}function t(){const e=g(n);return e||T("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}function d(){return n}return[m,{reload:e=>p(this,null,function*(){return yield t().reload(e)}),setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setLoading:e=>{t().setLoading(e)},getDataSource:()=>t().getDataSource(),getRawDataSource:()=>t().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const s=t().getColumns({ignoreIndex:e})||[];return i(s)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>i(t().getSelectRowKeys()),getSelectRows:()=>i(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>i(t().getSize()),updateTableData:(e,s,w)=>t().updateTableData(e,s,w),deleteTableDataRecord:e=>t().deleteTableDataRecord(e),insertTableDataRecord:(e,s)=>t().insertTableDataRecord(e,s),updateTableDataRecord:(e,s)=>t().updateTableDataRecord(e,s),findTableDataRecord:e=>t().findTableDataRecord(e),getRowSelection:()=>i(t().getRowSelection()),getCacheColumns:()=>i(t().getCacheColumns()),getForm:()=>g(c),setShowPagination:e=>p(this,null,function*(){t().setShowPagination(e)}),getShowPagination:()=>i(t().getShowPagination()),expandAll:()=>{t().expandAll()},collapseAll:()=>{t().collapseAll()},getTableRef:()=>d()}]}export{I as u};