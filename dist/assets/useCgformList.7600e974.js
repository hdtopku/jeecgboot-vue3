import{dL as e,aO as n,bI as o,F as a,h as t,f2 as l,bx as i,aB as r}from"./index.435ab247.js";import"./index.e1e06dd6.js";import{a as c}from"./index.65c1cb1a.js";import{useListPage as s}from"./useListPage.26849a0d.js";import{l as p,d as u,a as d,b as f,c as m,e as g}from"./CgformModal.e921af4f.js";import{useCopyModal as h}from"./useCopyModal.9432fd3f.js";var b=(e,n,o)=>new Promise(((a,t)=>{var l=e=>{try{r(o.next(e))}catch(n){t(n)}},i=e=>{try{r(o.throw(e))}catch(n){t(n)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,i);r((o=o.apply(e,n)).next())})),v=(e=>(e[e.normal=0]="normal",e[e.copy=1]="copy",e))(v||{});function y(y){const w=y.pageType===v.normal,T=e(),C=s({designScope:y.designScope,tableProps:{api:p,columns:y.columns,formConfig:{schemas:y.formSchemas},beforeFetch:e=>{let o=w?0:1,a=w?void 0:T.currentRoute.value.params.code;return n(e.tableType_MultiString)&&(e.tableType_MultiString=e.tableType_MultiString.join(",")),Object.assign(e,{copyType:o,physicId:a})}}}),{tableContext:M,createMessage:S,createConfirm:k}=C,[,{reload:x,setLoading:D},{selectedRowKeys:L,selectedRows:j}]=M,[P,$]=o(),[B,E]=o(),[I,O]=o(),[Y,A]=o(),[J,U]=o(),[_,R]=o(),[q,F]=o(),[G,N]=c(),[K,z]=o();function H(e,n,o=!1){return b(this,null,(function*(){try{D(!0);const a=yield e(n);return x(),o&&(L.value=[]),a}finally{D(!1)}return Promise.reject()}))}function Q(e,n=1,o=1){j.value.length<n?S.warning(`请先至少选中 ${n} 条记录`):j.value.length>o?S.warning(`最多只能选中 ${n} 条记录`):e(j.value)}const{createCopyModal:V}=h();return{router:T,pageContext:C,onAdd:function(){$.openModal(!0,{isUpdate:!1})},onDeleteBatch:function(){let e=L.value;e.length<=0?S.warning("请先选择一条记录！"):k({title:"删除",content:"<p>移除只会删除表单配置；<br>删除则会删除对应的数据库表以及子表且不能恢复。<br>请确认您的操作…</p>",iconType:"warning",closable:!0,okText:"移除",cancelText:"删除",cancelButtonProps:{danger:!0},onOk:()=>b(this,null,(function*(){return H(d,e,!0)})),onCancel:n=>(null==n?void 0:n.triggerCancel)?Promise.resolve():H(f,e,!0)})},onImportDbTable:function(){E.openModal(!0,{})},onGenerateCode:function(){if(0===j.value.length)S.warning("请先选中一条记录");else if(j.value.length>1)S.warning("代码生成只能选中一条记录");else{let e=j.value[0];e?"Y"!=e.isDbSynch?S.warning("请先同步数据库！"):3==e.tableType?S.warning("请选中该表对应的主表"):O.openModal(!0,{code:e.id}):S.warning("请选中当前页的数据！")}},onShowCustomButton:function(){Q((([e])=>A.openModal(!0,{row:e})))},onShowEnhanceJs:function(){Q((([e])=>U.openModal(!0,{row:e})))},onShowEnhanceSql:function(){Q((([e])=>R.openModal(!0,{row:e})))},onShowEnhanceJava:function(){Q((([e])=>F.openModal(!0,{row:e})))},getTableAction:function(e){return[{label:"编辑",onClick:()=>function(e){$.openModal(!0,{isUpdate:!0,record:e})}(e)}]},getDropDownAction:function(e){return[{label:"同步数据库",onClick:()=>function(e){const n=a("normal"),o=a(!1),r=k({iconType:"info",title:"同步数据库",content:()=>t("div",{style:"margin: 20px 0;"},t(l,{value:n.value,disabled:o.value,"onUpdate:value":e=>n.value=e},(()=>[t(i,{value:"normal"},(()=>"普通同步（保留表数据）")),t(i,{value:"force"},(()=>"强制同步（删除表，重新生成）"))]))),maskClosable:!0,okText:"开始同步",onOk(){return b(this,null,(function*(){o.value=!0,r.update({maskClosable:!1,keyboard:!1,okText:"同步中…",okButtonProps:{loading:o.value},cancelButtonProps:{disabled:o.value}});try{yield m(e.id,n.value)}catch(a){S.warn(a.message||a)}finally{x()}}))}})}(e),ifShow:()=>w&&"Y"!=e.isDbSynch},{label:"功能测试",class:["low-app-hide"],onClick:()=>function(e){"Y"==e.isTree?T.push({path:"/online/cgformTreeList/"+e.id}):T.push({path:"/online/cgformList/"+e.id})}(e),ifShow:()=>!w||"Y"==e.isDbSynch&&3!==e.tableType},{label:"配置地址",class:["low-app-hide"],onClick:()=>function(e){let n;n="erp"===e.themeTemplate?`/online/cgformErpList/${e.id}`:"innerTable"===e.themeTemplate?`/online/cgformInnerTableList/${e.id}`:"tab"===e.themeTemplate?`/online/cgformTabList/${e.id}`:"Y"==e.isTree?`/online/cgformTreeList/${e.id}`:`/online/cgformList/${e.id}`,V({title:`菜单链接【${e.tableTxt}】`,content:n,copyText:n})}(e),ifShow:()=>!w||"Y"==e.isDbSynch&&3!==e.tableType},{label:"权限控制",onClick:()=>N.openDrawer(!0,{cgformId:e.id})},{label:"角色授权",onClick:()=>z.openModal(!0,{cgformId:e.id})},{label:"视图管理",class:["low-app-hide"],onClick:()=>T.push(`/online/copyform/${e.id}`),ifShow:()=>w&&1==e.hascopy},{label:"生成视图",class:["low-app-hide"],popConfirm:{title:"确定生成视图吗？",placement:"left",confirm:()=>{D(!0),u(e.id).then((()=>{S.success("已成功生成视图")})).finally((()=>{D(!1),x()}))}},ifShow:()=>w},{label:"复制表",onClick:()=>function(e){const n=a(e.tableName+"_copy");k({title:"复制表",content:()=>t("div",{style:"margin: 20px 0;"},["请输入新表名：",t(r,{value:n.value,"onUpdate:value":e=>n.value=e})]),iconType:"info",closable:!0,okText:"复制",onOk(){n.value?n.value===e.tableName?S.warning("新表名和旧表名不能一致"):g(e.id,n.value).then(x):S.warning("请输入新表名")}})}(e),ifShow:()=>w},{label:"移除",popConfirm:{title:"确定移除吗？",placement:"left",confirm:()=>H(d,[e.id])}},{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>H(f,[e.id])},ifShow:()=>w}]},registerCustomButtonModal:Y,registerEnhanceJsModal:J,registerEnhanceSqlModal:_,registerEnhanceJavaModal:q,registerAuthManagerDrawer:G,registerAuthSetterModal:K,registerCgformModal:P,registerDbToOnlineModal:B,registerCodeGeneratorModal:I}}export{v as C,y as u};