var g=(n,s,r)=>new Promise((u,o)=>{var d=e=>{try{c(r.next(e))}catch(a){o(a)}},t=e=>{try{c(r.throw(e))}catch(a){o(a)}},c=e=>e.done?u(e.value):Promise.resolve(e.value).then(d,t);c((r=r.apply(n,s)).next())});import{F as R,af as b,L as i,bU as f,bV as w,H as m,ab as l,bW as D}from"./index.a86a095a.js";function T(n){const s=R(null),r=R(!1),u=R(null);let o;function d(e,a){b(()=>{s.value=null,r.value=null}),!(i(r)&&f()&&e===i(s))&&(s.value=e,u.value=a,n&&e.setProps(w(n)),r.value=!0,o==null||o(),o=m(()=>n,()=>{n&&e.setProps(w(n))},{immediate:!0,deep:!0}))}function t(){const e=i(s);return e||D("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[d,{reload:e=>g(this,null,function*(){return yield t().reload(e)}),setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setLoading:e=>{t().setLoading(e)},getDataSource:()=>t().getDataSource(),getRawDataSource:()=>t().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const a=t().getColumns({ignoreIndex:e})||[];return l(a)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>l(t().getSelectRowKeys()),getSelectRows:()=>l(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>l(t().getSize()),updateTableData:(e,a,S)=>t().updateTableData(e,a,S),deleteTableDataRecord:e=>t().deleteTableDataRecord(e),insertTableDataRecord:(e,a)=>t().insertTableDataRecord(e,a),updateTableDataRecord:(e,a)=>t().updateTableDataRecord(e,a),findTableDataRecord:e=>t().findTableDataRecord(e),getRowSelection:()=>l(t().getRowSelection()),getCacheColumns:()=>l(t().getCacheColumns()),getForm:()=>i(u),setShowPagination:e=>g(this,null,function*(){t().setShowPagination(e)}),getShowPagination:()=>l(t().getShowPagination()),expandAll:()=>{t().expandAll()},collapseAll:()=>{t().collapseAll()}}]}export{T as u};