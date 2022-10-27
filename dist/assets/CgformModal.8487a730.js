import{B as Qe}from"./index.1660bc1f.js";import{B as Ke}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as qe}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{a1 as F,l as xe,F as g,o as Z,bA as ee,bG as Ue,a7 as He,bH as Ge,e$ as ze,f0 as M,Q as U,a_ as Ye,t as f,v as E,V as H,z as c,y as u,C as A,x as te,aw as We,bb as Xe,D as Ze,W as ae,aV as et,B as tt,ab as at,bM as lt,u as ot}from"./index.23784a6b.js";import{u as nt}from"./useSchemas.afda172a.js";import it from"./DBAttributeTable.c6754c9a.js";import rt from"./PageAttributeTable.c9cbb355.js";import st from"./CheckDictTable.04b1aa81.js";import ut from"./ForeignKeyTable.fc1b46db.js";import dt from"./IndexTable.6df3d911.js";import ct from"./QueryTable.44a2bf81.js";import ft from"./ExtendConfigModal.3e707fee.js";import{u as bt,E as pt,a as mt,V as S}from"./cgform.data.2e39831f.js";import{u as Tt}from"./useOnlineTest.bc74d525.js";import{g as gt}from"./useAutoForm.51dde271.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./uniqBy.d45e63ad.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./validator.c64ec858.js";import"./user.api.c6ef119a.js";import"./useTableSync.34c149aa.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./LinkTableConfigModal.c54964b9.js";import"./omit.d6518a29.js";import"./_baseClone.a8082016.js";import"./_baseSlice.23bb44df.js";import"./LinkTableFieldConfigModal.2b18de65.js";import"./FormSchemaFactory.1a5f49cc.js";import"./JUploadModal.ea15ed8d.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./OnlineSelectCascade.1cb55207.js";import"./BasicTable.8204b993.js";import"./index.1525978f.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";import"./RedoOutlined.9bc9f3f7.js";import"./TableImg.4cad0ca5.js";import"./useListPage.c30c0592.js";import"./useTable.a6edb8cf.js";import"./Area.3ed21ae4.js";import"./LinkTableListPiece.22bbb419.js";import"./JModalTip.42942367.js";var yt=Object.defineProperty,vt=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,oe=(t,o,d)=>o in t?yt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[o]=d,L=(t,o)=>{for(var d in o||(o={}))Ct.call(o,d)&&oe(t,d,o[d]);if(le)for(var d of le(o))Ft.call(o,d)&&oe(t,d,o[d]);return t},_t=(t,o)=>vt(t,ht(o)),_=(t,o,d)=>new Promise((R,h)=>{var b=p=>{try{C(d.next(p))}catch(m){h(m)}},D=p=>{try{C(d.throw(p))}catch(m){h(m)}},C=p=>p.done?R(p.value):Promise.resolve(p.value).then(b,D);C((d=d.apply(t,o)).next())});const Ga=t=>F.get({url:"/online/cgform/head/list",params:t}),za=t=>ne(t,0),Ya=t=>ne(t,1);function ne(t,o){return F.delete({url:"/online/cgform/head/deleteBatch",params:{ids:t.join(","),flag:o}},{joinParamsToUrl:!0})}const Wa=(t,o)=>F.post({url:`/online/cgform/api/doDbSynch/${t}/${o}`,timeout:12e3,timeoutErrorMessage:"\u540C\u6B65\u6570\u636E\u5E93\u8D85\u65F6\uFF0C\u5DF2\u81EA\u52A8\u5237\u65B0"}),Xa=t=>F.post({url:`/online/cgform/head/copyOnline?code=${t}`}),Za=(t,o,d)=>F.get({url:`/online/cgform/head/copyOnlineTable/${t}`,params:L({tableName:o},d)}),j={doQueryField:(t,o)=>F.get({url:"/online/cgform/field/listByHeadId",params:L({headId:t},o)}),doQueryIndexes:(t,o)=>F.get({url:"/online/cgform/index/listByHeadId",params:L({headId:t},o)}),doSaveOrUpdate:(t,o)=>o?F.put({url:"/online/cgform/api/editAll",params:t}):F.post({url:"/online/cgform/api/addAll",params:t}),editHead:t=>F.put({url:"/online/cgform/head/edit",params:t})},Dt=xe({name:"CgformModal",components:{BasicModal:Qe,BasicForm:Ke,DBAttributeTable:it,PageAttributeTable:rt,CheckDictTable:st,ForeignKeyTable:ut,IndexTable:dt,QueryTable:ct,ExtendConfigModal:ft},emits:["success","register"],props:{actionButton:{type:Boolean,default:!0,required:!1}},setup(t,{emit:o}){const{createMessage:d}=ot(),R=g(),h=g(!1);let b={};const D=Z(()=>h.value?"\u7F16\u8F91":"\u65B0\u589E"),C=g(!0),p=g(!1),m=g("dbTable"),O=g(!0),s={dbTable:g(),pageTable:g(),checkTable:g(),fkTable:g(),idxTable:g(),queryTable:g()},$=Z(()=>{var e,a;return(a=(e=R.value)==null?void 0:e.fullScreenRef)!=null?a:!1});ee("tables",s),ee("fullScreenRef",$);const{formSchemas:V}=nt(t,{onTableTypeChange:ve,onIsTreeChange:he,ifShowOfSubTableStr:()=>z}),[J,w]=qe({schemas:V,showActionButtonGroup:!1,labelAlign:"right"}),{resetFields:I,setFieldsValue:N,validate:Q}=w,[K,{closeModal:q}]=Ue(e=>{var a;h.value=(a=e==null?void 0:e.isUpdate)!=null?a:!1,h.value?Y(e==null?void 0:e.record):be()}),y=g("");let v=He({});const ie=lt(()=>Ce(),150);let G=[],z=!1,P=!1,k=[];const{aiTestMode:re,aiTestTable:se,aiTableList:ue,initVirtualData:de,tableJsonGetHelper:ce,refreshCacheTableName:fe}=Tt();function be(){Y({})}function Y(e){return _(this,null,function*(){var a;if(C.value=!1,m.value="dbTable",yield I(),b=Object.assign({},e),ge(b),ce(b),Te(b),N(b),y.value=b.tableName,M(1,()=>O.value=!1),h.value)(a=s.dbTable.value)==null||a.setDataSource([]),yield pe(b.id),yield me(b.id),gt(s.pageTable).then(()=>{s.pageTable.value.changePageType(b.tableType==3)});else{let{initialData:l,tempIds:n}=bt();yield W(l,!0),G=n}})}function pe(e){return _(this,null,function*(){p.value=!0;try{let a=yield j.doQueryField(e);p.value=!1,yield W(a)}finally{p.value=!1}})}function me(e){return _(this,null,function*(){let a=yield j.doQueryIndexes(e);s.idxTable.value.setDataSource(a)})}function Te(e){let a={};if(e.extConfigJson)try{a=JSON.parse(e.extConfigJson)}catch(l){console.error("online\u6269\u5C55JSON\u8F6C\u6362\u5931\u8D25\uFF1A",l)}v=Object.assign({},pt,a,{isDesForm:e.isDesForm||"N",desFormCode:e.desFormCode||""})}function ge(e){P=e.isTree=="Y",z=e.tableType===2}function W(e,a){return _(this,null,function*(){const{dbTable:l,pageTable:n,checkTable:r,fkTable:i,queryTable:T}=s;l.value||(yield U(),yield M(1)),l.value.setDataSource(e,a),setTimeout(()=>{n.value.setDataSource(e,a),r.value.setDataSource(e,a),i.value.setDataSource(e,a),T.value.setDataSource(e,a)},10)})}function ye(e){if(["pageTable","checkTable","fkTable","idxTable","queryTable"].indexOf(e)!==-1){const a=s.dbTable,l=s[e];a.value.tableRef.resetScrollTop(),l.value.syncTable(a)}}function ve(e){e===1&&N({themeTemplate:"normal"}),s.pageTable.value.changePageType(e==3)}function he(e){e==="Y"?we():Ee()}function x(){ie()}function Ce(){return _(this,null,function*(){let{dbTable:e,pageTable:a,checkTable:l,fkTable:n,queryTable:r}=s;yield a.value.syncTable(e),yield l.value.syncTable(e),yield n.value.syncTable(e),yield r.value.syncTable(e)})}function Fe(){x()}function _e(){x()}function De(e){let{oldIndex:a,newIndex:l}=e;Be(a,l)}function ke(e){return _(this,null,function*(){let{insertIndex:a,row:l}=e,{pageTable:n,checkTable:r,fkTable:i,queryTable:T}=s;n.value.tableRef.insertRows(l,a),r.value.tableRef.insertRows(l,a),i.value.tableRef.insertRows(l,a),T.value.tableRef.insertRows(l,a)})}function Be(e,a){let{pageTable:l,checkTable:n,fkTable:r,queryTable:i}=s;l.value.tableRef.rowResort(e,a),n.value.tableRef.rowResort(e,a),r.value.tableRef.rowResort(e,a),i.value.tableRef.rowResort(e,a)}function Re(e){s.pageTable.value.syncFieldShowType(e.row)}function Oe(e){s.pageTable.value.enableQuery(e)}function we(){if(!P){let{dbTable:e,pageTable:a,checkTable:l}=s,n=mt();n=n.filter(r=>!e.value.tableRef.getTableData().map(T=>T.dbFieldName).includes(r.dbFieldName)),k=[],n.forEach(r=>{let i=Ye()+"__tempId";k.push(i),r.id=i}),e.value.tableRef.addRows(n,{setActive:!1}),a.value.tableRef.addRows(n,{setActive:!1}),l.value.tableRef.addRows(n,{setActive:!1}),U(()=>x()),P=!0}U(()=>{w.setFieldsValue({treeIdField:"has_child",treeParentIdField:"pid"})})}function Ee(){if(k&&k.length>0){let{dbTable:e}=s;e.value.tableDeleteLines(k),k=[],P=!1}}function Ae(){let e={};return new Promise((a,l)=>{Q().then(n=>a({values:n}),()=>l(S))}).then(a=>(Object.assign(e,a),Se())).then(a=>{Object.assign(e,a);let l=Ie(e);return Ne(l)}).catch(a=>(a===S||(a==null?void 0:a.code)===S?d.warning("\u6821\u9A8C\u672A\u901A\u8FC7"):console.error(a),Promise.reject(null)))}function Se(){return new Promise((e,a)=>_(this,null,function*(){let l=Object.keys(s),n={};for(let r=0;r<l.length;r++){let i=l[r],T=s[i];try{n[i]=yield T.value.validateData(i)}catch(B){B.code===S?m.value=B.activeKey:console.error(B),a(B);return}}e(n)}))}function Ie(e){let a={head:{},fields:[],indexs:[],deleteFieldIds:[],deleteIndexIds:[]};return a.head=Object.assign(b,e.values),a.head.isDesForm=v.isDesForm,a.head.desFormCode=v.desFormCode,delete v.isDesForm,delete v.desFormCode,a.head.extConfigJson=JSON.stringify(v),e.dbTable.tableData.forEach((l,n)=>{let r=l.id,i=Object.assign({},l),T=e.pageTable.tableData[n];i=Object.assign(T,i);let B=e.checkTable.tableData[n];i=Object.assign(B,i);let Ve=e.fkTable.tableData[n];i=Object.assign(Ve,i);let Je=e.queryTable.tableData[n];i=Object.assign(Je,i),r==null||r===""?delete i.id:i.id=r,[].concat(G,k).includes(i.id)&&delete i.id,a.fields.push(i)}),a.deleteFieldIds=e.dbTable.deleteIds,a.indexs=e.idxTable.tableData,a.deleteIndexIds=e.idxTable.deleteIds,a}function Ne(e){return new Promise((a,l)=>{let n=e.fields,r=!0;if(n&&n.length>0){let i=0;for(let T=0;T<n.length;T++)if((n[T].mainField||n[T].mainTable)&&(i+=1),i>1){r=!1;break}}r?a(e):l({code:-1,msg:"\u5916\u952E\u53EA\u5141\u8BB8\u914D\u7F6E\u4E00\u4E2A!",error:S})})}function Pe(){C.value=!0,Ae().then(e=>_(this,null,function*(){var a;if(e.fields&&e.fields.length>0)for(let l of e.fields)l.dbFieldName=l.dbFieldName.toLowerCase().trim();(a=e.head)!=null&&a.tableName&&(e.head.tableName=e.head.tableName.toLowerCase().trim()),yield j.doSaveOrUpdate(e,h.value),fe(y.value,e.head.tableName),o("success"),M(1,()=>X())}),e=>{console.error(e)}).finally(()=>{C.value=!1})}const[Me,je]=Ge();function Le(e){return _(this,null,function*(){if(v=e,h.value==!0){let a=at(v);const l={id:b.id,extConfigJson:JSON.stringify(a)};yield j.editHead(l),o("success")}})}function $e(){je.openModal(!0,{extConfigJson:v})}function X(){O.value=!0,M(1,()=>q())}return _t(L({},s),{modalRef:R,title:D,confirmLoading:C,tableLoading:p,activeKey:m,onCancel:X,extConfigJson:v,formAction:w,hideTabs:O,onSubmit:Pe,onTabsChange:ye,onTableAdded:Fe,onTableRemoved:_e,onTableDragged:De,onTableInserted:ke,onTableSyncDbType:Re,onTableQuery:Oe,onOpenExtConfig:$e,onExtConfigOk:Le,registerForm:J,registerModal:K,registerExtendConfigModal:Me,aiTestMode:re,aiTestTable:se,aiTableList:ue,initVirtualData:de})}}),kt={style:{flex:"1","text-align":"right"}},Bt={key:0,style:{display:"inline-block","text-align":"left",position:"absolute",left:"0"}};function Rt(t,o,d,R,h,b){const D=f("a-button"),C=f("BasicForm"),p=f("DBAttributeTable"),m=f("a-tab-pane"),O=f("PageAttributeTable"),s=f("CheckDictTable"),$=f("ForeignKeyTable"),V=f("IndexTable"),J=f("QueryTable"),w=f("a-tabs"),I=f("a-spin"),N=f("a-select-option"),Q=f("a-select"),K=f("ExtendConfigModal"),q=f("BasicModal");return E(),H(q,tt({ref:"modalRef",title:t.title,width:1200,maskClosable:!1,defaultFullscreen:!0,confirmLoading:t.confirmLoading},t.$attrs,{onCancel:t.onCancel,onRegister:t.registerModal}),{footer:c(()=>[u(D,{onClick:t.onCancel},{default:c(()=>[A("\u5173\u95ED")]),_:1},8,["onClick"]),u(D,{type:"primary",loading:t.confirmLoading,preIcon:"ant-design:save",onClick:t.onSubmit},{default:c(()=>[A("\u4FDD\u5B58")]),_:1},8,["loading","onClick"]),t.aiTestMode?(E(),te("div",Bt,[u(Q,{value:t.aiTestTable,"onUpdate:value":o[1]||(o[1]=y=>t.aiTestTable=y),placeholder:"\u8BF7\u9009\u62E9\u6D4B\u8BD5\u7684\u8868\u7C7B\u578B",getPopupContainer:y=>y.parentElement,style:{width:"250px",margin:"0 10px 0 20px"}},{default:c(()=>[(E(!0),te(We,null,Xe(t.aiTableList,(y,v)=>(E(),H(N,{key:v,value:y.name},{default:c(()=>[A(Ze(y.title+"\uFF08"+y.name+"\uFF09"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","getPopupContainer"]),u(D,{type:"primary",ghost:"",onClick:t.initVirtualData},{default:c(()=>[A("\u751F\u6210\u6570\u636E>>")]),_:1},8,["onClick"])])):ae("",!0)]),default:c(()=>[u(I,{wrapperClassName:"p-2",spinning:t.confirmLoading},{default:c(()=>[u(C,{onRegister:t.registerForm},{extConfigButton:c(()=>[et("div",kt,[u(D,{preIcon:"ant-design:setting",onClick:t.onOpenExtConfig},{default:c(()=>[A("\u6269\u5C55\u914D\u7F6E")]),_:1},8,["onClick"])])]),_:1},8,["onRegister"]),u(I,{spinning:t.tableLoading||t.hideTabs},{default:c(()=>[t.hideTabs?ae("",!0):(E(),H(w,{key:0,activeKey:t.activeKey,"onUpdate:activeKey":o[0]||(o[0]=y=>t.activeKey=y),animated:"",onChange:t.onTabsChange},{default:c(()=>[u(m,{tab:"\u6570\u636E\u5E93\u5C5E\u6027",key:"dbTable",forceRender:""},{default:c(()=>[u(p,{ref:"dbTable",actionButton:t.actionButton,onAdded:t.onTableAdded,onRemoved:t.onTableRemoved,onDragged:t.onTableDragged,onInserted:t.onTableInserted,onSyncDbType:t.onTableSyncDbType},null,8,["actionButton","onAdded","onRemoved","onDragged","onInserted","onSyncDbType"])]),_:1}),u(m,{tab:"\u9875\u9762\u5C5E\u6027",key:"pageTable",forceRender:""},{default:c(()=>[u(O,{ref:"pageTable"},null,512)]),_:1}),u(m,{tab:"\u6821\u9A8C\u5B57\u6BB5",key:"checkTable",forceRender:""},{default:c(()=>[u(s,{ref:"checkTable"},null,512)]),_:1}),u(m,{tab:"\u5916\u952E",key:"fkTable",forceRender:""},{default:c(()=>[u($,{ref:"fkTable",actionButton:t.actionButton},null,8,["actionButton"])]),_:1}),u(m,{tab:"\u7D22\u5F15",key:"idxTable",forceRender:""},{default:c(()=>[u(V,{ref:"idxTable",actionButton:t.actionButton},null,8,["actionButton"])]),_:1}),u(m,{tab:"\u67E5\u8BE2\u914D\u7F6E",key:"queryTable",forceRender:""},{default:c(()=>[u(J,{ref:"queryTable",onQuery:t.onTableQuery},null,8,["onQuery"])]),_:1})]),_:1},8,["activeKey","onChange"]))]),_:1},8,["spinning"])]),_:1},8,["spinning"]),u(K,{onRegister:t.registerExtendConfigModal,parentForm:t.formAction,onOk:t.onExtConfigOk},null,8,["onRegister","parentForm","onOk"])]),_:1},16,["title","confirmLoading","onCancel","onRegister"])}var Ot=ze(Dt,[["render",Rt]]),el=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));export{Ot as C,za as a,Ya as b,Wa as c,Xa as d,Za as e,el as f,Ga as l};