import{B as Io}from"./BasicTable.0cbd4b1b.js";import{T as Mo}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{eY as vo,H as Do,t as s,v as t,x as b,y as d,V as u,z as i,C as h,W as m,aw as L,bb as Ro,D as E,R as Fo,S as Oo,aV as F,E as Lo,bk as Po,bl as Ao,dB as Qo,B as _o,el as Ho,fd as Jo,ac as qo,u as Vo}from"./index.a1b4e527.js";import $o from"./OnlineAutoModal.6ea0a8e4.js";import No from"./OnlineCustomModal.ebb0c053.js";import zo from"./OnlineDetailModal.eca567bb.js";import{J as jo}from"./JImportModal.390ef539.js";import{u as Ko,a as Uo}from"./useListButton.4ac02946.js";import{a as Wo,c as Yo,j as Go,g as Xo}from"./useAutoForm.06735978.js";import Zo from"./OnlineQueryForm.f7e1757a.js";import xo from"./OnlineSuperQuery.7a695b12.js";import"./index.ea6d1b33.js";import"./BasicForm.77adc039.js";import"./JAddInput.20a0408b.js";import"./JUpload.5aa10044.js";import"./JUploadModal.491f0d32.js";import"./pick.dbff1c58.js";import"./omit.d6518a29.js";import"./OnlineSelectCascade.3c916811.js";import"./Area.81445613.js";import"./functional.011cfa3e.js";import"./LinkTableListPiece.5d051d0d.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./_baseClone.a8082016.js";import"./CommentPanel.fcf4482e.js";import"./DetailForm.2d690f69.js";import"./api.d480aed7.js";import"./OnlineSuperQueryValComponent.vue_vue_type_script_lang.ee08018a.js";import"./useForm.db279587.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./onMountedOrActivated.e88e16f1.js";import"./useWindowSizeFn.cf93ddee.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./BasicModal.6dc4adbe.js";import"./RedoOutlined.9c68e676.js";import"./useFormItem.f45f8681.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./index.b1e57df7.js";import"./OnlineForm.bf54a1ba.js";import"./FormSchemaFactory.a20289b2.js";import"./uniqBy.cec7465a.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./user.api.790518f7.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useListPage.9b802bc6.js";import"./useTable.dfabdbf5.js";import"./JModalTip.9bce3371.js";import"./_baseSlice.23bb44df.js";import"./OnlineFormDetail.d4d46e2a.js";import"./OnlineSubFormDetail.5036cbf7.js";var P=(o,p,l)=>new Promise((c,g)=>{var S=a=>{try{r(l.next(a))}catch(f){g(f)}},B=a=>{try{r(l.throw(a))}catch(f){g(f)}},r=a=>a.done?c(a.value):Promise.resolve(a.value).then(S,B);r((l=l.apply(o,p)).next())});const oe=Symbol(),ee="openpopmodal";function ne(o){const p=Jo();function l(c){o(c),console.log("\u4E8B\u4EF6\u89E6\u53D1\u5B8C\u6210,",c)}p.on(ee,l),te({onlineEmitter:p}),console.log("\u4E8B\u4EF6\u7ED1\u5B8C\u6210,")}function te(o){return qo(o,oe,{readonly:!1,native:!0})}const ie={name:"DefaultOnlineList",components:{BasicTable:Io,TableAction:Mo,OnlineAutoModal:$o,JImportModal:jo,OnlineQueryForm:Zo,OnlineSuperQuery:xo,OnlineCustomModal:No,OnlineDetailModal:zo,OnlinePopModal:Wo},setup(){const{createMessage:o}=Vo(),{ID:p,onlineTableContext:l,onlineQueryFormOuter:c,loading:g,reload:S,dataSource:B,pagination:r,handleSpecialConfig:a,getColumnList:f,handleChangeInTable:T,loadData:I,superQueryButtonRef:y,superQueryStatus:M,handleSuperQuery:v,onlineExtConfigJson:k,handleFormConfig:D,registerCustomModal:e,tableReloading:C}=Ko();if(!p.value){o.warning("\u5730\u5740\u9519\u8BEF, \u914D\u7F6EID\u4E0D\u5B58\u5728!");return}let{initCgEnhanceJs:R}=Yo(l);const{buttonSwitch:A,cgLinkButtonList:Q,cgTopButtonList:_,importUrl:H,registerModal:J,handleAdd:q,handleEdit:V,handleBatchDelete:$,registerImportModal:N,onImportExcel:z,onExportExcel:j,cgButtonJsHandler:K,cgButtonActionHandler:U,cgButtonLinkHandler:W,handleSubmitFlow:Y,getDropDownActions:G,getActions:X,initButtonList:Z,initButtonSwitch:x,registerDetailModal:oo,registerBpmModal:eo}=Uo(l,k),{columns:no,actionColumn:to,selectedKeys:io,rowSelection:lo,enableScrollBar:ro,tableScroll:ao,downloadRowFile:so,getImgView:uo,getPcaText:po,getFormatDate:mo,handleColumnResult:co,hrefComponent:go,viewOnlineCellImage:fo,hrefMainTableId:ho,registerOnlineHrefModal:yo,registerPopModal:Co,openPopModal:bo,onlinePopModalRef:So,popTableId:O}=Go(l,k);Do(p,()=>{console.log("watched id is change..."),Bo()},{immediate:!0});function Bo(){return P(this,null,function*(){g.value=!0;let n=yield f();ko(n),yield I(),g.value=!1,l.execButtonEnhance("setup")})}function ko(n){let w=R(n.enhanceJs);l.EnhanceJS=w,Z(n.cgButtonList),x(n.hideColumns),co(n),a(n)}function wo(n){l.queryParam=n,S()}function Eo(n){return P(this,null,function*(){yield Xo(y),y.value.init(n)})}function To(n){console.log("openOnlinePopModal",n),O.value=n.id;let w={title:n.describe};n.record&&n.record.id&&(w.record=n.record,w.isUpdate=!0),bo(!0,w)}return ne(To),{ID:p,onlineQueryFormOuter:c,queryWithCondition:wo,onQueryFormLoaded:Eo,reload:S,superQueryButtonRef:y,superQueryStatus:M,handleSuperQuery:v,loading:g,columns:no,dataSource:B,pagination:r,actionColumn:to,rowSelection:lo,selectedKeys:io,tableScroll:ao,enableScrollBar:ro,handleChangeInTable:T,buttonSwitch:A,handleAdd:q,handleEdit:V,onImportExcel:z,onExportExcel:j,cgTopButtonList:_,cgLinkButtonList:Q,cgButtonJsHandler:K,cgButtonActionHandler:U,cgButtonLinkHandler:W,handleBatchDelete:$,downloadRowFile:so,getImgView:uo,getPcaText:po,getFormatDate:mo,getActions:X,getDropDownActions:G,registerModal:J,registerCustomModal:e,registerImportModal:N,registerDetailModal:oo,importUrl:H,handleFormConfig:D,onlinePopModalRef:So,tableReloading:C,handleSubmitFlow:Y,hrefComponent:go,viewOnlineCellImage:fo,hrefMainTableId:ho,onlineExtConfigJson:k,registerOnlineHrefModal:yo,registerPopModal:Co,popTableId:O,registerBpmModal:eo}}},le={class:"p-2"},re={key:0,style:{"font-size":"12px","font-style":"italic"}},ae={key:0,style:{"font-size":"12px","font-style":"italic"}},se=["src","onClick"],ue=["innerHTML"],pe=["title"];function de(o,p,l,c,g,S){const B=s("online-query-form"),r=s("a-button"),a=s("online-super-query"),f=s("TableAction"),T=s("BasicTable"),I=s("OnlineAutoModal"),y=s("online-detail-modal"),M=s("JImportModal"),v=s("a-modal"),k=s("online-custom-modal"),D=s("online-pop-modal");return t(),b("div",le,[d(B,{ref:"onlineQueryFormOuter",id:o.ID,onSearch:o.queryWithCondition,onLoaded:o.onQueryFormLoaded},null,8,["id","onSearch","onLoaded"]),o.tableReloading?m("",!0):(t(),u(T,{key:0,ref:"onlineTable",rowKey:"jeecg_row_key",canResize:!0,bordered:!0,showIndexColumn:!1,loading:o.loading,columns:o.columns,dataSource:o.dataSource,pagination:o.pagination,rowSelection:o.rowSelection,actionColumn:o.actionColumn,showTableSetting:!0,clickToRowSelect:!1,scroll:o.tableScroll,onTableRedo:o.reload,class:Lo({"j-table-force-nowrap":o.enableScrollBar}),onChange:o.handleChangeInTable},{tableTitle:i(()=>[o.buttonSwitch.add?(t(),u(r,{key:0,preIcon:"ant-design:plus-outlined",type:"primary",onClick:o.handleAdd},{default:i(()=>[h("\u65B0\u589E")]),_:1},8,["onClick"])):m("",!0),o.buttonSwitch.import?(t(),u(r,{key:1,preIcon:"ant-design:import-outlined",type:"primary",onClick:o.onImportExcel},{default:i(()=>[h("\u5BFC\u5165")]),_:1},8,["onClick"])):m("",!0),o.buttonSwitch.export?(t(),u(r,{key:2,preIcon:"ant-design:export-outlined",type:"primary",onClick:o.onExportExcel},{default:i(()=>[h(" \u5BFC\u51FA")]),_:1},8,["onClick"])):m("",!0),o.cgTopButtonList&&o.cgTopButtonList.length>0?(t(!0),b(L,{key:3},Ro(o.cgTopButtonList,(e,C)=>(t(),b(L,null,[e.optType=="js"?(t(),u(r,{key:"cgbtn"+C,onClick:R=>o.cgButtonJsHandler(e.buttonCode),type:"primary",preIcon:e.buttonIcon?"ant-design:"+e.buttonIcon:""},{default:i(()=>[h(E(e.buttonName),1)]),_:2},1032,["onClick","preIcon"])):e.optType=="action"?(t(),u(r,{key:"cgbtn"+C,onClick:R=>o.cgButtonActionHandler(e.buttonCode),type:"primary",preIcon:e.buttonIcon?"ant-design:"+e.buttonIcon:""},{default:i(()=>[h(E(e.buttonName),1)]),_:2},1032,["onClick","preIcon"])):m("",!0)],64))),256)):m("",!0),o.buttonSwitch.batch_delete?Fo((t(),u(r,{key:4,preIcon:"ant-design:delete-outlined",onClick:o.handleBatchDelete},{default:i(()=>[h(" \u6279\u91CF\u5220\u9664")]),_:1},8,["onClick"])),[[Oo,o.selectedKeys.length>0]]):m("",!0),o.buttonSwitch.super_query?(t(),u(a,{key:5,ref:"superQueryButtonRef",status:o.superQueryStatus,onSearch:o.handleSuperQuery},null,8,["status","onSearch"])):m("",!0)]),fileSlot:i(({text:e})=>[e?(t(),u(r,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download",size:"small",onClick:C=>o.downloadRowFile(e)},{default:i(()=>[h(" \u4E0B\u8F7D ")]),_:2},1032,["onClick"])):(t(),b("span",re,"\u65E0\u6587\u4EF6"))]),imgSlot:i(({text:e})=>[e?(t(),b("img",{key:1,src:o.getImgView(e),alt:"\u56FE\u7247\u4E0D\u5B58\u5728",class:"online-cell-image",onClick:C=>o.viewOnlineCellImage(e)},null,8,se)):(t(),b("span",ae,"\u65E0\u56FE\u7247"))]),htmlSlot:i(({text:e})=>[F("div",{innerHTML:e},null,8,ue)]),pcaSlot:i(({text:e})=>[F("div",{title:o.getPcaText(e)},E(o.getPcaText(e)),9,pe)]),dateSlot:i(({text:e})=>[F("span",null,E(o.getFormatDate(e)),1)]),action:i(({record:e})=>[d(f,{actions:o.getActions(e),dropDownActions:o.getDropDownActions(e)},null,8,["actions","dropDownActions"])]),_:1},8,["loading","columns","dataSource","pagination","rowSelection","actionColumn","scroll","onTableRedo","class","onChange"])),d(I,{id:o.ID,onRegister:o.registerModal,onSuccess:o.reload,onFormConfig:o.handleFormConfig},null,8,["id","onRegister","onSuccess","onFormConfig"]),d(y,{id:o.ID,onRegister:o.registerDetailModal},null,8,["id","onRegister"]),d(M,{onRegister:o.registerImportModal,url:o.importUrl(),onOk:o.reload,online:""},null,8,["onRegister","url","onOk"]),d(v,_o(o.hrefComponent.model,Ho(o.hrefComponent.on)),{default:i(()=>[(t(),u(Qo(o.hrefComponent.is),Po(Ao(o.hrefComponent.params)),null,16))]),_:1},16),d(k,{onRegister:o.registerCustomModal,onSuccess:o.reload},null,8,["onRegister","onSuccess"]),d(y,{id:o.hrefMainTableId,onRegister:o.registerOnlineHrefModal,defaultFullscreen:!1},null,8,["id","onRegister"]),d(D,{ref:"onlinePopModalRef",id:o.popTableId,onRegister:o.registerPopModal,onSuccess:o.reload,request:"",topTip:""},null,8,["id","onRegister","onSuccess"])])}var Fn=vo(ie,[["render",de]]);export{Fn as default};