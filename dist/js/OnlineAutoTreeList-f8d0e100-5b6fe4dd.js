import"./index-993283cc.js";import{C as _e,ap as He,bB as Ke}from"./jeecg-online-vendor-cfb58502.js";import Pe from"./OnlineAutoModal-2a146238-df9fdf66.js";import Je from"./OnlineDetailModal-f967f080-3c4ec61b.js";import Ve from"./OnlineCustomModal-456a85a6-240b5498.js";import{l as P,w as Ne,V as c,a7 as i,a8 as S,f,W as g,ac as u,ak as qe,aa as a,E as y,F as J,ab as ze,ae as v,v as je,B as Ue,ad as A,af as We,ag as $e,ah as Ge,ai as Xe,aj as Ye}from"./vue-ebecda47.js";import{x as Ze}from"./JImportModal-ee153470.js";import{l as eo,o as oo}from"./useListButton-cef1371a-018f6610.js";import{d as to,p as no,g as lo}from"./useExtendComponent-48d37d9b-8d9aa8a0.js";import io from"./OnlineQueryForm-1c5949a7-720f53fa.js";import ao from"./SuperQuery-3821f984-4580c2f9.js";import{s as ro}from"./constant-fe20103a-44089532.js";import"./index-e91e8b28.js";import"./OnlineForm-630a22c2-603cbe9d.js";import"./index-a2e0ccba.js";import"./lodash-es-vendor-cd7703c8.js";import"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./CommentPanel-8a0d5632.js";import"./OnlineFormDetail-1b216792-7a3fba26.js";import"./DetailForm-e4538e7a-bdccad5c.js";import"./JUpload-ffe34816.js";import"./OnlineSubFormDetail-0aa4966c-430ecca2.js";import{Q as so}from"./componentMap-c36c4b8d.js";import"./index-38e4d5c0.js";import"./user.api-729c8827.js";import"./customExpression-62f5afd1.js";import"./useListPage-52971497.js";import"./LinkTableListPiece-34266919-8927295e.js";import"./OnlineSelectCascade-c7baf52b-8f32847b.js";import"./JModalTip-abe1515a-cd675860.js";import"./SuperQueryValComponent.vue_vue_type_script_lang-e3ad7ee8-e8615e46.js";import co from"./BasicTable-46b6c894.js";import"./index-be9b0972.js";import"./tinymce-vendor-7c917b36.js";import"./vxe-table-vendor-4aae63bf.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./useForm-21b78d9f.js";import"./useFormItem-ba20c4de.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./injectionKey-69710956.js";var O=(e,x,p)=>new Promise((l,T)=>{var C=s=>{try{r(p.next(s))}catch(h){T(h)}},m=s=>{try{r(p.throw(s))}catch(h){T(h)}},r=s=>s.done?l(s.value):Promise.resolve(s.value).then(C,m);r((p=p.apply(e,x)).next())});const uo={name:"DefaultOnlineList",components:{BasicTable:co,TableAction:so,OnlineAutoModal:Pe,JImportModal:Ze,OnlineQueryForm:io,OnlineSuperQuery:ao,OnlineCustomModal:Ve,OnlineDetailModal:Je},setup(){const{createMessage:e}=_e(),x=P(),{ID:p,onlineTableContext:l,onlineQueryFormOuter:T,loading:C,reload:m,dataSource:r,pagination:s,handleSpecialConfig:h,getColumnList:F,handleChangeInTable:B,loadData:D,superQueryButtonRef:k,superQueryStatus:E,handleSuperQuery:L,registerCustomModal:o,getTreeDataByResult:w,expandedRowKeys:d,handleExpandedRowsChange:V,tableReloading:N,onlineExtConfigJson:Q,handleFormConfig:q}=eo();if(!p.value){e.warning("地址错误, 配置ID不存在!");return}l.isTree(!0);let{initCgEnhanceJs:z}=to(l);const{buttonSwitch:j,cgLinkButtonList:U,cgTopButtonList:W,importUrl:$,registerModal:G,handleAdd:_,handleEdit:X,handleBatchDelete:Y,registerImportModal:Z,onImportExcel:ee,onExportExcel:oe,cgButtonJsHandler:te,cgButtonActionHandler:ne,cgButtonLinkHandler:le,handleSubmitFlow:ie,getDropDownActions:ae,getActions:re,initButtonList:se,initButtonSwitch:de,registerDetailModal:ce}=oo(l,Q),{columns:ue,actionColumn:pe,selectedKeys:me,rowSelection:ge,enableScrollBar:he,tableScroll:fe,downloadRowFile:ye,getImgView:Ce,getPcaText:we,getFormatDate:be,handleColumnResult:Se,hrefComponent:xe,viewOnlineCellImage:Te}=no(l,Q);Ne(p,()=>{ke()},{immediate:!0});function ke(){return O(this,null,function*(){C.value=!0;let t=yield F(ro);Re(t),yield D(),C.value=!1,l.execButtonEnhance("setup")})}function Re(t){let n=z(t.enhanceJs);l.EnhanceJS=n,se(t.cgButtonList),de(t.hideColumns),Se(t),h(t),l.hasChildrenField=t.hasChildrenField,l.pidField=t.pidField}function Ie(t,n){l.queryParam=t,n===!0?m():H()}function ve(t){return O(this,null,function*(){yield lo(k),k.value.init(t)})}function Fe(t,n){let b=d.value;if(t){if(Be(n.id),n.children.length>0&&n.children[0].isLoading===!0){let R=l.hasChildrenField;const{sortField:Ae,sortType:Oe}=l;let M=Object.assign({},{column:Ae,order:Oe});M[l.pidField]=n.id,M[R]=n[R];let Qe=`${l.onlineUrl.getTreeData}${l.ID}`;He.get({url:Qe,params:M},{isTransformResponse:!1}).then(I=>{I.success?Number(I.result.total)>0?n.children=w(I.result.records):(n.children="",n.hasChildrenField="0"):e.warning(I.message)}).catch(()=>{e.warning("加载子节点失败!")})}}else{let R=b.indexOf(n.id);R>=0&&(d.value=b.splice(R,1))}}function Be(t){let n=d.value;n&&n.indexOf(t)<0&&n.push(t),d.value=n}function H(){return O(this,null,function*(){l.isTree()===!0&&(d.value=[],x.value.collapseAll()),m()})}function De(t){if(K.value===!0){let n=t[l.pidField];if(n){let b=d.value;b.indexOf(n)<0&&b.push(n),d.value=b}}m()}const Ee=t=>({label:"添加下级",onClick:Le.bind(null,t)}),K=P(!1);function Le(t){K.value=!0;let n={[l.pidField]:t.id};_(n)}function Me(t){let n=ae(t);return n.unshift(Ee(t)),n}return{ID:p,onlineQueryFormOuter:T,queryWithCondition:Ie,onQueryFormLoaded:ve,reload:m,superQueryButtonRef:k,superQueryStatus:E,handleSuperQuery:L,loading:C,columns:ue,actionColumn:pe,dataSource:r,pagination:s,rowSelection:ge,selectedKeys:me,tableScroll:fe,enableScrollBar:he,handleChangeInTable:B,buttonSwitch:j,handleAdd:_,handleEdit:X,onImportExcel:ee,onExportExcel:oe,cgTopButtonList:W,cgLinkButtonList:U,cgButtonJsHandler:te,cgButtonActionHandler:ne,cgButtonLinkHandler:le,handleBatchDelete:Y,downloadRowFile:ye,getImgView:Ce,getPcaText:we,getFormatDate:be,getActions:re,getTreeDropDownActions:Me,registerModal:G,registerCustomModal:o,registerImportModal:Z,importUrl:$,handleFormConfig:q,tableReloading:N,handleSubmitFlow:ie,hrefComponent:xe,viewOnlineCellImage:Te,onlineTreeTableRef:x,handlerFormSuccess:De,searchReset:H,handleExpand:Fe,expandedRowKeys:d,handleExpandedRowsChange:V,registerDetailModal:ce}}},po={class:"p-2"},mo={key:0,style:{"font-size":"12px","font-style":"italic"}},go={key:0,style:{"font-size":"12px","font-style":"italic"}},ho=["src","onClick"],fo=["innerHTML"],yo=["title"];function Co(e,x,p,l,T,C){const m=c("online-query-form"),r=c("a-button"),s=c("online-super-query"),h=c("TableAction"),F=c("BasicTable"),B=c("OnlineAutoModal"),D=c("JImportModal"),k=c("a-modal"),E=c("online-custom-modal"),L=c("online-detail-modal");return i(),S("div",po,[f(m,{ref:"onlineQueryFormOuter",id:e.ID,onSearch:e.queryWithCondition,onLoaded:e.onQueryFormLoaded},null,8,["id","onSearch","onLoaded"]),e.tableReloading?g("",!0):(i(),u(F,{key:0,ref:"onlineTreeTableRef",isTreeTable:!0,expandedRowKeys:e.expandedRowKeys,onExpandedRowsChange:e.handleExpandedRowsChange,onExpand:e.handleExpand,rowKey:"jeecg_row_key",canResize:!0,bordered:!0,showIndexColumn:!1,loading:e.loading,columns:e.columns,dataSource:e.dataSource,pagination:e.pagination,rowSelection:e.rowSelection,actionColumn:e.actionColumn,showTableSetting:!0,clickToRowSelect:!1,scroll:e.tableScroll,onTableRedo:e.reload,class:qe({"j-table-force-nowrap":e.enableScrollBar}),onChange:e.handleChangeInTable},{tableTitle:a(()=>[e.buttonSwitch.add?(i(),u(r,{key:0,preIcon:"ant-design:plus-outlined",type:"primary",onClick:e.handleAdd},{default:a(()=>[y("新增")]),_:1},8,["onClick"])):g("",!0),e.buttonSwitch.import?(i(),u(r,{key:1,preIcon:"ant-design:import-outlined",type:"primary",onClick:e.onImportExcel},{default:a(()=>[y("导入")]),_:1},8,["onClick"])):g("",!0),e.buttonSwitch.export?(i(),u(r,{key:2,preIcon:"ant-design:export-outlined",type:"primary",onClick:e.onExportExcel},{default:a(()=>[y(" 导出")]),_:1},8,["onClick"])):g("",!0),e.cgTopButtonList&&e.cgTopButtonList.length>0?(i(!0),S(J,{key:3},ze(e.cgTopButtonList,(o,w)=>(i(),S(J,null,[o.optType=="js"?(i(),u(r,{key:"cgbtn"+w,onClick:d=>e.cgButtonJsHandler(o.buttonCode),type:"primary",preIcon:o.buttonIcon?"ant-design:"+o.buttonIcon:""},{default:a(()=>[y(v(o.buttonName),1)]),_:2},1032,["onClick","preIcon"])):o.optType=="action"?(i(),u(r,{key:"cgbtn"+w,onClick:d=>e.cgButtonActionHandler(o.buttonCode),type:"primary",preIcon:o.buttonIcon?"ant-design:"+o.buttonIcon:""},{default:a(()=>[y(v(o.buttonName),1)]),_:2},1032,["onClick","preIcon"])):g("",!0)],64))),256)):g("",!0),e.buttonSwitch.batch_delete?je((i(),u(r,{key:4,preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:a(()=>[y(" 批量删除")]),_:1},8,["onClick"])),[[Ue,e.selectedKeys.length>0]]):g("",!0),e.buttonSwitch.super_query?(i(),u(s,{key:5,ref:"superQueryButtonRef",online:"",status:e.superQueryStatus,onSearch:e.handleSuperQuery},null,8,["status","onSearch"])):g("",!0)]),fileSlot:a(({text:o})=>[o?(i(),u(r,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download",size:"small",onClick:w=>e.downloadRowFile(o)},{default:a(()=>[y(" 下载 ")]),_:2},1032,["onClick"])):(i(),S("span",mo,"无文件"))]),imgSlot:a(({text:o})=>[o?(i(),S("img",{key:1,src:e.getImgView(o),alt:"图片不存在",class:"online-cell-image",onClick:w=>e.viewOnlineCellImage(o)},null,8,ho)):(i(),S("span",go,"无图片"))]),htmlSlot:a(({text:o})=>[A("div",{innerHTML:o},null,8,fo)]),pcaSlot:a(({text:o})=>[A("div",{title:e.getPcaText(o)},v(e.getPcaText(o)),9,yo)]),dateSlot:a(({text:o})=>[A("span",null,v(e.getFormatDate(o)),1)]),action:a(({record:o})=>[f(h,{actions:e.getActions(o),dropDownActions:e.getTreeDropDownActions(o)},null,8,["actions","dropDownActions"])]),_:1},8,["expandedRowKeys","onExpandedRowsChange","onExpand","loading","columns","dataSource","pagination","rowSelection","actionColumn","scroll","onTableRedo","class","onChange"])),f(B,{id:e.ID,onRegister:e.registerModal,onSuccess:e.handlerFormSuccess,onFormConfig:e.handleFormConfig},null,8,["id","onRegister","onSuccess","onFormConfig"]),f(D,{onRegister:e.registerImportModal,url:e.importUrl(),onOk:e.reload,online:""},null,8,["onRegister","url","onOk"]),f(k,We(e.hrefComponent.model,$e(e.hrefComponent.on)),{default:a(()=>[(i(),u(Ge(e.hrefComponent.is),Xe(Ye(e.hrefComponent.params)),null,16))]),_:1},16),f(E,{onRegister:e.registerCustomModal,onSuccess:e.reload},null,8,["onRegister","onSuccess"]),f(L,{id:e.ID,onRegister:e.registerDetailModal},null,8,["id","onRegister"])])}const Et=Ke(uo,[["render",Co]]);export{Et as default};