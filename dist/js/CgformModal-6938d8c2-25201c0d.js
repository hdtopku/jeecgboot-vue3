import{t as Ue,B as Ve,z as $e,C as Ke,R as He}from"./index-0d179770.js";import{B as ze}from"./index-abefda79.js";import{B as Ge}from"./BasicForm-21b7ac92.js";import"./componentMap-8ca03aee.js";import{u as We}from"./useForm-69b31c99.js";import"./JAddInput-b8d2ab38.js";import"./JSelectUser-d2cfe039.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import"./cron-parser-vendor-7c1c3251.js";import{b as v,Q as Ze,T as E,u as Ye}from"./jeecg-online-vendor-658239c9.js";import{I as Xe}from"./useSchemas-fc8d97ce-ef882838.js";import et from"./DBAttributeTable-cd1c41e5-323aa25d.js";import tt from"./PageAttributeTable-811185fd-3b9c553c.js";import at from"./CheckDictTable-414313f2-68e0918e.js";import lt from"./ForeignKeyTable-cb1abd1d-b01a8710.js";import ot from"./IndexTable-4e94cd1f-687cdae8.js";import nt from"./QueryTable-4ba771ef-57e94d6a.js";import it from"./ExtendConfigModal-60f2cf86-fed4e0cf.js";import{y as rt,m as st,c as dt,r as S}from"./cgform.data-cbdd88c3-42e5a5ca.js";import{D as ut}from"./useOnlineTest-0df0ae86-26931e5c.js";import{g as ct}from"./useExtendComponent-48d37d9b-12d786a6.js";import{d as bt,k as g,e as ee,p as te,r as ft,V as b,a5 as _,a9 as z,a7 as u,f as r,E as F,a6 as ae,F as mt,a8 as pt,ab as gt,W as le,aa as oe,ag as Tt,q as G,J as yt}from"./vue-bcbaddf9.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./vxe-table-vendor-9edfd3ae.js";import"./BasicModal-d4150903.js";import"./useWindowSizeFn-fbe431de.js";import"./BasicForm.vue_vue_type_style_index_0_lang-3e2c32c1.js";import"./useFormItem-9082d1c8.js";import"./JUpload.vue_vue_type_style_index_0_lang-e11e0a89.js";import"./download-f4ef666f.js";import"./base64Conver-fa2fe1af.js";import"./index-e3a70fab.js";import"./index-42cd22d1.js";import"./useCountdown-d0291e3c.js";import"./index-ebd3f065.js";import"./areaDataUtil-661e31ab.js";import"./props-8e60cede.js";import"./JSelectBiz-8b34874f.js";import"./index-8e0aeea9.js";import"./codemirror-vendor-7570b8a9.js";import"./index-6219dca4.js";import"./bem-6b2974b6.js";import"./props-c7c3390f.js";import"./useContextMenu-fdbf9c9a.js";import"./depart.api-380afd6d.js";import"./validator-5fee0124.js";import"./user.api-32d45f59.js";import"./useTableSync-dc333087-088c005e.js";import"./LinkTableConfigModal-77d7c0b9-761b9eaa.js";import"./LinkTableFieldConfigModal-c5689ab0-d91ac7f9.js";import"./FieldExtendJsonModal-48f7d67f-18142041.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang-366be6b6.js";import"./customExpression-62f5afd1.js";import"./BasicTable-438c62dc.js";import"./BasicTable.vue_vue_type_style_index_0_lang-9ce97bb7.js";import"./injectionKey-69710956.js";import"./useTable-28fc0fe6.js";import"./useListPage-66893768.js";import"./LinkTableListPiece-34266919-4055fe27.js";import"./OnlineSelectCascade-c7baf52b-00f9ce78.js";import"./JModalTip-abe1515a-19b37ab6.js";var vt=Object.defineProperty,ht=Object.defineProperties,Ct=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,ie=(t,o,c)=>o in t?vt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[o]=c,Q=(t,o)=>{for(var c in o||(o={}))kt.call(o,c)&&ie(t,c,o[c]);if(ne)for(var c of ne(o))xt.call(o,c)&&ie(t,c,o[c]);return t},Rt=(t,o)=>ht(t,Ct(o)),x=(t,o,c)=>new Promise((O,C)=>{var f=m=>{try{k(c.next(m))}catch(p){C(p)}},R=m=>{try{k(c.throw(m))}catch(p){C(p)}},k=m=>m.done?O(m.value):Promise.resolve(m.value).then(f,R);k((c=c.apply(t,o)).next())});const qa=t=>v.get({url:"/online/cgform/head/list",params:t}),Ja=t=>re(t,0),Ua=t=>v.delete({url:"/online/cgform/head/removeRecord",params:{id:t}},{joinParamsToUrl:!0}),Va=t=>re(t,1),$a=t=>v.delete({url:"/online/cgform/head/delete",params:{id:t}},{joinParamsToUrl:!0});function re(t,o){return v.delete({url:"/online/cgform/head/deleteBatch",params:{ids:t.join(","),flag:o}},{joinParamsToUrl:!0})}const Ka=(t,o)=>v.post({url:`/online/cgform/api/doDbSynch/${t}/${o}`,timeout:12e3,timeoutErrorMessage:"同步数据库超时，已自动刷新"}),Ha=t=>v.post({url:`/online/cgform/head/copyOnline?code=${t}`}),za=(t,o,c)=>v.get({url:`/online/cgform/head/copyOnlineTable/${t}`,params:Q({tableName:o},c)}),L={doQueryField:(t,o)=>v.get({url:"/online/cgform/field/listByHeadId",params:Q({headId:t},o)}),doQueryIndexes:(t,o)=>v.get({url:"/online/cgform/index/listByHeadId",params:Q({headId:t},o)}),doSaveOrUpdate:(t,o)=>o?v.put({url:"/online/cgform/api/editAll",params:t}):v.post({url:"/online/cgform/api/addAll",params:t}),editHead:t=>v.put({url:"/online/cgform/head/edit",params:t})},Dt=bt({name:"CgformModal",components:{BasicModal:ze,BasicForm:Ge,DBAttributeTable:et,PageAttributeTable:tt,CheckDictTable:at,ForeignKeyTable:lt,IndexTable:ot,QueryTable:nt,ExtendConfigModal:it,Icon:Ue},emits:["success","register"],props:{actionButton:{type:Boolean,default:!0,required:!1}},setup(t,{emit:o}){const{createMessage:c}=Ye(),O=g(),C=g(!1);let f={};const R=ee(()=>C.value?"编辑":"新增"),k=g(!0),m=g(!1),p=g("dbTable"),I=g(!0),d={dbTable:g(),pageTable:g(),checkTable:g(),fkTable:g(),idxTable:g(),queryTable:g()},q=ee(()=>{var e,a;return(a=(e=O.value)==null?void 0:e.fullScreenRef)!=null?a:!1});te("tables",d),te("fullScreenRef",q);const{formSchemas:J}=Xe(t,{onTableTypeChange:he,onIsTreeChange:Ce,ifShowOfSubTableStr:()=>W}),[U,w]=We({schemas:J,showActionButtonGroup:!1,labelAlign:"right"}),{resetFields:V,setFieldsValue:j,validate:P}=w,[$,{closeModal:K}]=Ve(e=>{var a;C.value=(a=e==null?void 0:e.isUpdate)!=null?a:!1,C.value?Z(e==null?void 0:e.record):me()}),N=g("");let T=ft({});const h=He(()=>ke(),150);let M=[],W=!1,A=!1,D=[];const{aiTestMode:se,aiTestTable:de,aiTableList:ue,initVirtualData:ce,tableJsonGetHelper:be,refreshCacheTableName:fe}=ut();function me(){Z({})}function Z(e){return x(this,null,function*(){var a;if(k.value=!1,p.value="dbTable",yield V(),f=Object.assign({},e),ye(f),be(f),Te(f),j(f),N.value=f.tableName,E(1,()=>I.value=!1),C.value)(a=d.dbTable.value)==null||a.setDataSource([]),yield pe(f.id),yield ge(f.id),ct(d.pageTable).then(()=>{d.pageTable.value.changePageType(f.tableType==3)});else{let{initialData:l,tempIds:n}=rt();yield Y(l,!0),M=n}})}function pe(e){return x(this,null,function*(){m.value=!0;try{let a=yield L.doQueryField(e);m.value=!1,yield Y(a)}finally{m.value=!1}})}function ge(e){return x(this,null,function*(){let a=yield L.doQueryIndexes(e);d.idxTable.value.setDataSource(a)})}function Te(e){let a={};if(e.extConfigJson)try{a=JSON.parse(e.extConfigJson)}catch(l){}T=Object.assign({},st,a,{isDesForm:e.isDesForm||"N",desFormCode:e.desFormCode||""})}function ye(e){A=e.isTree=="Y",W=e.tableType===2}function Y(e,a){return x(this,null,function*(){const{dbTable:l,pageTable:n,checkTable:s,fkTable:i,queryTable:y}=d;l.value||(yield G(),yield E(1)),l.value.setDataSource(e,a),setTimeout(()=>{n.value.setDataSource(e,a),s.value.setDataSource(e,a),i.value.setDataSource(e,a),y.value.setDataSource(e,a)},10)})}function ve(e){if(["pageTable","checkTable","fkTable","idxTable","queryTable"].indexOf(e)!==-1){const a=d.dbTable,l=d[e];a.value.tableRef.resetScrollTop(),l.value.syncTable(a)}}function he(e){e===1&&j({themeTemplate:"normal"}),d.pageTable.value.changePageType(e==3)}function Ce(e){e==="Y"?Be():Se()}function H(){h()}function ke(){return x(this,null,function*(){let{dbTable:e,pageTable:a,checkTable:l,fkTable:n,queryTable:s}=d;yield a.value.syncTable(e),yield l.value.syncTable(e),yield n.value.syncTable(e),yield s.value.syncTable(e)})}function xe(){H()}function Re(){H()}function De(e){let{oldIndex:a,newIndex:l}=e;Oe(a,l)}function Fe(e){return x(this,null,function*(){let{insertIndex:a,row:l}=e,{pageTable:n,checkTable:s,fkTable:i,queryTable:y}=d;n.value.tableRef.insertRows(l,a),s.value.tableRef.insertRows(l,a),i.value.tableRef.insertRows(l,a),y.value.tableRef.insertRows(l,a)})}function Oe(e,a){let{pageTable:l,checkTable:n,fkTable:s,queryTable:i}=d;l.value.tableRef.rowResort(e,a),n.value.tableRef.rowResort(e,a),s.value.tableRef.rowResort(e,a),i.value.tableRef.rowResort(e,a)}function Ie(e){d.pageTable.value.syncFieldShowType(e.row)}function we(e){d.pageTable.value.enableQuery(e)}function Be(){if(!A){let{dbTable:e,pageTable:a,checkTable:l}=d,n=dt();n=n.filter(s=>!e.value.tableRef.getTableData().map(i=>i.dbFieldName).includes(s.dbFieldName)),D=[],n.forEach(s=>{let i=Ke()+"__tempId";D.push(i),s.id=i}),e.value.tableRef.addRows(n,{setActive:!1}),a.value.tableRef.addRows(n,{setActive:!1}),l.value.tableRef.addRows(n,{setActive:!1}),G(()=>H()),A=!0}G(()=>{w.setFieldsValue({treeIdField:"has_child",treeParentIdField:"pid"})})}function Se(){if(D&&D.length>0){let{dbTable:e}=d;e.value.tableDeleteLines(D),D=[],A=!1}}function _e(){let e={};return new Promise((a,l)=>{P().then(n=>a({values:n}),()=>l(S))}).then(a=>(Object.assign(e,a),je())).then(a=>{Object.assign(e,a);let l=Pe(e);return Ne(l)}).catch(a=>((a===S||(a==null?void 0:a.code)===S)&&c.warning("校验未通过"),Promise.reject(null)))}function je(){return new Promise((e,a)=>x(this,null,function*(){let l=Object.keys(d),n={};for(let s=0;s<l.length;s++){let i=l[s],y=d[i];try{n[i]=yield y.value.validateData(i)}catch(B){B.code===S&&(p.value=B.activeKey),a(B);return}}e(n)}))}function Pe(e){let a={head:{},fields:[],indexs:[],deleteFieldIds:[],deleteIndexIds:[]};return a.head=Object.assign(f,e.values),a.head.isDesForm=T.isDesForm,a.head.desFormCode=T.desFormCode,delete T.isDesForm,delete T.desFormCode,a.head.extConfigJson=JSON.stringify(T),e.dbTable.tableData.forEach((l,n)=>{let s=l.id,i=Object.assign({},l),y=e.pageTable.tableData[n];i=Object.assign(y,i);let B=e.checkTable.tableData[n];i=Object.assign(B,i);let qe=e.fkTable.tableData[n];i=Object.assign(qe,i);let Je=e.queryTable.tableData[n];i=Object.assign(Je,i),s==null||s===""?delete i.id:i.id=s,[].concat(M,D).includes(i.id)&&delete i.id,a.fields.push(i)}),a.deleteFieldIds=e.dbTable.deleteIds,a.indexs=e.idxTable.tableData,a.deleteIndexIds=e.idxTable.deleteIds,a}function Ne(e){return new Promise((a,l)=>{let n=e.fields,s=!0;if(n&&n.length>0){let i=0;for(let y=0;y<n.length;y++)if((n[y].mainField||n[y].mainTable)&&(i+=1),i>1){s=!1;break}}s?a(e):l({code:-1,msg:"外键只允许配置一个!",error:S})})}function Me(){k.value=!0,_e().then(e=>x(this,null,function*(){var a;if(e.fields&&e.fields.length>0)for(let l of e.fields)l.dbFieldName=l.dbFieldName.toLowerCase().trim();(a=e.head)!=null&&a.tableName&&(e.head.tableName=e.head.tableName.toLowerCase().trim()),yield L.doSaveOrUpdate(e,C.value),fe(N.value,e.head.tableName),o("success"),E(1,()=>X())}),e=>{}).finally(()=>{k.value=!1})}const[Ae,Ee]=$e();function Le(e){return x(this,null,function*(){if(T=e,C.value==!0){let a=yt(T);const l={id:f.id,extConfigJson:JSON.stringify(a)};yield L.editHead(l),o("success")}})}function Qe(){Ee.openModal(!0,{extConfigJson:T})}function X(){I.value=!0,E(1,()=>K())}return Rt(Q({},d),{modalRef:O,title:R,confirmLoading:k,tableLoading:m,activeKey:p,onCancel:X,extConfigJson:T,formAction:w,hideTabs:I,onSubmit:Me,onTabsChange:ve,onTableAdded:xe,onTableRemoved:Re,onTableDragged:De,onTableInserted:Fe,onTableSyncDbType:Ie,onTableQuery:we,onOpenExtConfig:Qe,onExtConfigOk:Le,registerForm:U,registerModal:$,registerExtendConfigModal:Ae,aiTestMode:se,aiTestTable:de,aiTableList:ue,initVirtualData:ce})}}),Ft={style:{flex:"1","text-align":"right"}},Ot={key:0,style:{display:"inline-block","text-align":"left",position:"absolute",left:"0"}};function It(t,o,c,O,C,f){const R=b("a-button"),k=b("BasicForm"),m=b("DBAttributeTable"),p=b("a-tab-pane"),I=b("PageAttributeTable"),d=b("CheckDictTable"),q=b("ForeignKeyTable"),J=b("IndexTable"),U=b("Icon"),w=b("a-tooltip"),V=b("QueryTable"),j=b("a-tabs"),P=b("a-spin"),$=b("a-select-option"),K=b("a-select"),N=b("ExtendConfigModal"),T=b("BasicModal");return _(),z(T,Tt({ref:"modalRef",title:t.title,width:1200,maskClosable:!1,defaultFullscreen:!0,confirmLoading:t.confirmLoading},t.$attrs,{onCancel:t.onCancel,onRegister:t.registerModal}),{footer:u(()=>[r(R,{onClick:t.onCancel},{default:u(()=>[F("关闭")]),_:1},8,["onClick"]),r(R,{type:"primary",loading:t.confirmLoading,preIcon:"ant-design:save",onClick:t.onSubmit},{default:u(()=>[F("保存")]),_:1},8,["loading","onClick"]),t.aiTestMode?(_(),ae("div",Ot,[r(K,{value:t.aiTestTable,"onUpdate:value":o[1]||(o[1]=h=>t.aiTestTable=h),placeholder:"请选择测试的表类型",getPopupContainer:h=>h.parentElement,style:{width:"250px",margin:"0 10px 0 20px"}},{default:u(()=>[(_(!0),ae(mt,null,pt(t.aiTableList,(h,M)=>(_(),z($,{key:M,value:h.name},{default:u(()=>[F(gt(h.title+"（"+h.name+"）"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","getPopupContainer"]),r(R,{type:"primary",ghost:"",onClick:t.initVirtualData},{default:u(()=>[F("生成数据>>")]),_:1},8,["onClick"])])):le("",!0)]),default:u(()=>[r(P,{wrapperClassName:"p-2",spinning:t.confirmLoading},{default:u(()=>[r(k,{onRegister:t.registerForm},{extConfigButton:u(()=>[oe("div",Ft,[r(R,{preIcon:"ant-design:setting",onClick:t.onOpenExtConfig},{default:u(()=>[F("扩展配置")]),_:1},8,["onClick"])])]),_:1},8,["onRegister"]),r(P,{spinning:t.tableLoading||t.hideTabs},{default:u(()=>[t.hideTabs?le("",!0):(_(),z(j,{key:0,activeKey:t.activeKey,"onUpdate:activeKey":o[0]||(o[0]=h=>t.activeKey=h),animated:"",onChange:t.onTabsChange},{default:u(()=>[r(p,{tab:"数据库属性",key:"dbTable",forceRender:""},{default:u(()=>[r(m,{ref:"dbTable",actionButton:t.actionButton,onAdded:t.onTableAdded,onRemoved:t.onTableRemoved,onDragged:t.onTableDragged,onInserted:t.onTableInserted,onSyncDbType:t.onTableSyncDbType},null,8,["actionButton","onAdded","onRemoved","onDragged","onInserted","onSyncDbType"])]),_:1}),r(p,{tab:"页面属性",key:"pageTable",forceRender:""},{default:u(()=>[r(I,{ref:"pageTable"},null,512)]),_:1}),r(p,{tab:"校验字段",key:"checkTable",forceRender:""},{default:u(()=>[r(d,{ref:"checkTable"},null,512)]),_:1}),r(p,{tab:"外键",key:"fkTable",forceRender:""},{default:u(()=>[r(q,{ref:"fkTable",actionButton:t.actionButton},null,8,["actionButton"])]),_:1}),r(p,{tab:"索引",key:"idxTable",forceRender:""},{default:u(()=>[r(J,{ref:"idxTable",actionButton:t.actionButton},null,8,["actionButton"])]),_:1}),r(p,{key:"queryTable",forceRender:""},{tab:u(()=>[oe("span",null,[F(" 个性查询配置 "),r(w,null,{title:u(()=>[F("允许自定义，查询表单字段控件类型！")]),default:u(()=>[r(U,{icon:"bx:help-circle"})]),_:1})])]),default:u(()=>[r(V,{ref:"queryTable",onQuery:t.onTableQuery},null,8,["onQuery"])]),_:1})]),_:1},8,["activeKey","onChange"]))]),_:1},8,["spinning"])]),_:1},8,["spinning"]),r(N,{onRegister:t.registerExtendConfigModal,parentForm:t.formAction,onOk:t.onExtConfigOk},null,8,["onRegister","parentForm","onOk"])]),_:1},16,["title","confirmLoading","onCancel","onRegister"])}const wt=Ze(Dt,[["render",It]]),Ga=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"}));export{wt as C,$a as a,Ua as b,Ja as c,Ha as d,Va as e,Ka as f,za as g,Ga as h,qa as l};