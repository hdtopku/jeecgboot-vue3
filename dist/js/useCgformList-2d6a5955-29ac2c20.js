import{a4 as me,k as T,n as h,u as he,G as ye,w as be}from"./vue-bcbaddf9.js";import"./index-cd2db611.js";import{a as ge}from"./index-e95eba3a.js";import{useListPage as we}from"./useListPage-0a663f0c.js";import{l as ve,d as Te,a as Ce,b as ke,c as Le,e as Se,f as Me,g as xe}from"./CgformModal-6938d8c2-d2faa5de.js";import{C as x}from"./clipboard-2edb0622.js";import{U as _e,u as Pe}from"./jeecg-online-vendor-ecddc31b.js";import{z as d,C as Ue}from"./index-b03d7914.js";import{ap as Oe,aq as _,a8 as $e}from"./antd-vue-vendor-a78909e6.js";var De=Object.defineProperty,Ne=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,U=(n,o,a)=>o in n?De(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,C=(n,o)=>{for(var a in o||(o={}))Ee.call(o,a)&&U(n,a,o[a]);if(P)for(var a of P(o))Ie.call(o,a)&&U(n,a,o[a]);return n},k=(n,o)=>Ne(n,Be(o)),y=(n,o,a)=>new Promise((f,m)=>{var l=i=>{try{c(a.next(i))}catch(s){m(s)}},u=i=>{try{c(a.throw(i))}catch(s){m(s)}},c=i=>i.done?f(i.value):Promise.resolve(i.value).then(l,u);c((a=a.apply(n,o)).next())}),$=(n=>(n[n.normal=0]="normal",n[n.copy=1]="copy",n))($||{});const L="copy-this-text",O="data-clipboard-text";function je(){return{createCopyModal:Ae}}const{createMessage:w,createConfirm:Re}=Pe();function Ae(n){var o,a,f,m,l;const u=he(n.copyText),c=`INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
                       VALUES ('${Ue()}', NULL, '${n.copyTitle}', '${u}', '1', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 0, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', null, NULL, NULL, 0)`;let i=Re(k(C({},n),{iconType:(o=n.iconType)!=null?o:"info",width:(a=n.width)!=null?a:500,title:(f=n.title)!=null?f:"复制",closable:!0,maskClosable:(m=n.maskClosable)!=null?m:!0,cancelText:"复制SQL",okText:(l=n.okText)!=null?l:"复制URL",cancelButtonProps:{class:"copy-this-sql","data-clipboard-text":c},okButtonProps:k(C({},n.okButtonProps),{class:L,[O]:u}),onOk(){return new Promise(s=>{const r=new x("."+L);r.on("success",()=>{r.destroy(),w.success("复制URL成功"),s()}),r.on("error",()=>{w.error("该浏览器不支持自动复制"),r.destroy(),s()})})},onCancel(){return new Promise(s=>{const r=new x(".copy-this-sql");r.on("success",()=>{r.destroy(),w.success("复制插入菜单SQL成功"),s()}),r.on("error",()=>{w.error("该浏览器不支持自动复制"),r.destroy(),s()})})}}));return ye(n.copyText)&&be(n.copyText,s=>{i.update({okButtonProps:k(C({},n.okButtonProps),{class:L,[O]:s})})}),i}function Ve(n){const o=n.pageType===$.normal,a=me(),f=we({designScope:n.designScope,tableProps:{api:ve,columns:n.columns,formConfig:{schemas:n.formSchemas},beforeFetch:e=>{let t=o?0:1,p=o?void 0:a.currentRoute.value.params.code;return _e(e.tableType_MultiString)&&(e.tableType_MultiString=e.tableType_MultiString.join(",")),Object.assign(e,{copyType:t,physicId:p})}}}),{tableContext:m,createMessage:l,createConfirm:u}=f,[,{reload:c,setLoading:i},{selectedRowKeys:s,selectedRows:r}]=m,[D,S]=d(),[N,B]=d(),[E,I]=d(),[j,R]=d(),[A,Y]=d(),[q,J]=d(),[G,Z]=d(),[Q,z]=ge(),[F,K]=d();function V(){S.openModal(!0,{isUpdate:!1})}function H(e){S.openModal(!0,{isUpdate:!0,record:e})}function W(e){return y(this,null,function*(){yield Ce(e),c()})}function X(e){return y(this,null,function*(){yield ke(e),c()})}function ee(){let e=s.value;if(e.length<=0){l.warning("请先选择一条记录！");return}u({title:"删除",content:"<p>移除只会删除表单配置；<br>删除则会删除对应的数据库表以及子表且不能恢复。<br>请确认您的操作…</p>",iconType:"warning",closable:!0,okText:"移除",cancelText:"删除",cancelButtonProps:{danger:!0},onOk:()=>y(this,null,function*(){return M(Le,e,!0)}),onCancel(t){return t!=null&&t.triggerCancel?Promise.resolve():M(Se,e,!0)}})}function M(e,t,p=!1){return y(this,null,function*(){try{i(!0);const v=yield e(t);return c(),p&&(s.value=[]),v}finally{i(!1)}return Promise.reject()})}function ne(){b(([e])=>R.openModal(!0,{row:e}))}function oe(){b(([e])=>Y.openModal(!0,{row:e}))}function te(){b(([e])=>J.openModal(!0,{row:e}))}function ae(){b(([e])=>Z.openModal(!0,{row:e}))}function le(){B.openModal(!0,{})}function b(e,t=1,p=1){r.value.length<t?l.warning(`请先至少选中 ${t} 条记录`):r.value.length>p?l.warning(`最多只能选中 ${t} 条记录`):e(r.value)}function re(){if(r.value.length===0)l.warning("请先选中一条记录");else if(r.value.length>1)l.warning("代码生成只能选中一条记录");else{let e=r.value[0];e?e.isDbSynch!="Y"?l.warning("请先同步数据库！"):e.tableType==3?l.warning("请选中该表对应的主表"):I.openModal(!0,{code:e.id}):l.warning("请选中当前页的数据！")}}function ie(e){if(e.isTree=="Y")a.push({path:"/online/cgformTreeList/"+e.id});else switch(e.themeTemplate){case"erp":a.push({path:"/online/cgformErpList/"+e.id});break;default:a.push({path:"/online/cgformList/"+e.id});break}}function se(e){const t=T("normal"),p=T(!1),v=u({iconType:"info",title:"同步数据库",content:()=>h("div",{style:"margin: 20px 0;"},h(Oe,{value:t.value,disabled:p.value,"onUpdate:value":g=>t.value=g},()=>[h(_,{value:"normal"},()=>"普通同步（保留表数据）"),h(_,{value:"force"},()=>"强制同步（删除表，重新生成）")])),maskClosable:!0,okText:"开始同步",onOk(){return y(this,null,function*(){p.value=!0,v.update({maskClosable:!1,keyboard:!1,okText:"同步中…",okButtonProps:{loading:p.value},cancelButtonProps:{disabled:p.value}});try{yield Me(e.id,t.value)}catch(g){l.warn(g.message||g)}finally{c()}})}})}const{createCopyModal:ce}=je();function pe(e){let t;e.themeTemplate==="erp"?t=`/online/cgformErpList/${e.id}`:e.themeTemplate==="innerTable"?t=`/online/cgformInnerTableList/${e.id}`:e.themeTemplate==="tab"?t=`/online/cgformTabList/${e.id}`:e.isTree=="Y"?t=`/online/cgformTreeList/${e.id}`:t=`/online/cgformList/${e.id}`,ce({title:`菜单链接【${e.tableTxt}】`,content:t,copyText:t,copyTitle:`${e.tableTxt}`})}function ue(e){const t=T(e.tableName+"_copy");u({title:"复制表",content:()=>h("div",{style:"margin: 20px 0;"},["请输入新表名：",h($e,{value:t.value,"onUpdate:value":p=>t.value=p})]),iconType:"info",closable:!0,okText:"复制",onOk(){t.value?t.value===e.tableName?l.warning("新表名和旧表名不能一致"):xe(e.id,t.value).then(c):l.warning("请输入新表名")}})}function de(e){return[{label:"编辑",onClick:()=>H(e)}]}function fe(e){return[{label:"同步数据库",onClick:()=>se(e),ifShow:()=>o&&e.isDbSynch!="Y"},{label:"功能测试",class:["low-app-hide"],onClick:()=>ie(e),ifShow:()=>o?e.isDbSynch=="Y"&&e.tableType!==3:!0},{label:"配置地址",class:["low-app-hide"],onClick:()=>pe(e),ifShow:()=>o?e.isDbSynch=="Y"&&e.tableType!==3:!0},{label:"权限控制",onClick:()=>z.openDrawer(!0,{cgformId:e.id})},{label:"角色授权",onClick:()=>K.openModal(!0,{cgformId:e.id})},{label:"视图管理",class:["low-app-hide"],onClick:()=>a.push(`/online/copyform/${e.id}`),ifShow:()=>o&&e.hascopy==1},{label:"生成视图",class:["low-app-hide"],popConfirm:{title:"确定生成视图吗？",placement:"left",confirm:()=>{i(!0),Te(e.id).then(()=>{l.success("已成功生成视图")}).finally(()=>{i(!1),c()})}},ifShow:()=>o},{label:"复制表",onClick:()=>ue(e),ifShow:()=>o},{label:"移除",popConfirm:{title:"确定移除吗？",placement:"left",confirm:()=>X(e.id)}},{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>W(e.id)},ifShow:()=>o}]}return{router:a,pageContext:f,onAdd:V,onDeleteBatch:ee,onImportDbTable:le,onGenerateCode:re,onShowCustomButton:ne,onShowEnhanceJs:oe,onShowEnhanceSql:te,onShowEnhanceJava:ae,getTableAction:de,getDropDownAction:fe,registerCustomButtonModal:j,registerEnhanceJsModal:A,registerEnhanceSqlModal:q,registerEnhanceJavaModal:G,registerAuthManagerDrawer:Q,registerAuthSetterModal:F,registerCgformModal:D,registerDbToOnlineModal:N,registerCodeGeneratorModal:E}}export{$ as R,Ve as Z};