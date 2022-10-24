import{eY as K,es as W,F as c,a7 as A,t as f,v as d,x as g,y,W as k,V as C,z as B,aw as Q,bb as Y,Y as X,X as q,r as G,f6 as Z,a1 as $,u as ee}from"./index.a1b4e527.js";import te from"./DetailForm.2d690f69.js";import oe from"./OnlineSubFormDetail.5036cbf7.js";import{P as re,d as ne}from"./useAutoForm.06735978.js";import"./api.d480aed7.js";import"./Area.81445613.js";import"./functional.011cfa3e.js";import"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import"./JAddInput.20a0408b.js";import"./JUpload.5aa10044.js";import"./JUploadModal.491f0d32.js";import"./OnlineSelectCascade.3c916811.js";import"./index.ea6d1b33.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./BasicTable.0cbd4b1b.js";import"./TableImg.e94b6b60.js";import"./LinkTableListPiece.5d051d0d.js";import"./FormSchemaFactory.a20289b2.js";import"./user.api.790518f7.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useForm.db279587.js";import"./useListPage.9b802bc6.js";import"./useTable.dfabdbf5.js";import"./uniqBy.cec7465a.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useFormItem.f45f8681.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./index.b1e57df7.js";import"./JModalTip.9bce3371.js";var ie=Object.defineProperty,D=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,V=(a,i,r)=>i in a?ie(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,me=(a,i)=>{for(var r in i||(i={}))ae.call(i,r)&&V(a,r,i[r]);if(D)for(var r of D(i))le.call(i,r)&&V(a,r,i[r]);return a},F=(a,i,r)=>new Promise((o,h)=>{var v=l=>{try{s(r.next(l))}catch(p){h(p)}},_=l=>{try{s(r.throw(l))}catch(p){h(p)}},s=l=>l.done?o(l.value):Promise.resolve(l.value).then(v,_);s((r=r.apply(a,i)).next())});const se={name:"OnlineFormDetail",components:{DetailForm:te,Loading:W,PrinterOutlined:re,OnlineSubFormDetail:oe},props:{id:{type:String,default:""},formTemplate:{type:Number,default:1},disabled:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},pidField:{type:String,default:""},submitTip:{type:Boolean,default:!0},showSub:{type:Boolean,default:!0}},emits:["success","rendered"],setup(a,{emit:i}){console.log("onlineForm-setup\u300B\u300B");const{createMessage:r}=ee(),o=c(""),h=c(!0),v=c(!1),_=c(1),s=c({}),l=c(300),p=c(340),b=A({reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:""}),{detailFormSchemas:S,hasSubTable:P,subTabInfo:m,refMap:w,subDataSource:T,createFormSchemas:J,formSpan:N}=ne(a);function E(e){let t={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:1,modalMinWidth:""};e&&(t=JSON.parse(e)),Object.keys(t).map(n=>{b[n]=t[n]})}function I(e){return F(this,null,function*(){_.value=e.head.tableType,o.value=e.head.tableName,h.value=e.head.tableType==1,E(e.head.extConfigJson),J(e.schema.properties),i("rendered",b)})}function M(e,t){return F(this,null,function*(){console.log("\u8FDB\u5165\u8BE6\u60C5\u8868\u5355\u300B\u300Bform",t),yield j(t)})}function R(e){let t=`/online/cgform/api/detail/${a.id}/${e}`;return new Promise((n,u)=>{$.get({url:t},{isTransformResponse:!1}).then(x=>{x.success?n(x.result):(u(),r.warning(x.message))}).catch(()=>{u()})})}function j(e){return F(this,null,function*(){let t=yield R(e.id);s.value=me({},t),H(t)})}function H(e){e||(e={});let t=Object.keys(T.value);if(t&&t.length>0){let n={};for(let u of t)n[u]=e[u]||[];T.value=n}}function L(e){return"online_"+e+":"}function z(){let e=b.reportPrintUrl,t=s.value;if(t){let n=t.id,u=G();Z(e,n,u)}}function U(e){let t=s.value;return console.log("getValueIgnoreCase(temp, key)",t,e,O(t,e)),O(t,e)}function O(e,t){if(e){let n=e[t];return!n&&n!==0&&(n=e[t.toLowerCase()],!n&&n!==0&&(n=e[t.toUpperCase()])),n}return""}return{detailFormSchemas:S,formData:s,formSpan:N,tableName:o,loading:v,hasSubTable:P,subTabInfo:m,subFormHeight:l,subTableHeight:p,refMap:w,subDataSource:T,getSubTableAuthPre:L,show:M,createRootProperties:I,onOpenReportPrint:z,onlineExtConfigJson:b,getSubTableForeignKeyValue:U}}},pe=["id"],ue={key:0,style:{"text-align":"right",position:"absolute",top:"15px",right:"20px","z-index":"999"}},ce={key:1};function fe(a,i,r,o,h,v){const _=f("PrinterOutlined"),s=f("detail-form"),l=f("online-sub-form-detail"),p=f("JVxeTable"),b=f("a-tab-pane"),S=f("a-tabs"),P=f("Loading");return d(),g("div",{id:o.tableName+"_form"},[!!o.formData.id&&!!o.onlineExtConfigJson.reportPrintShow?(d(),g("div",ue,[y(_,{title:"\u6253\u5370",onClick:o.onOpenReportPrint,style:{"font-size":"16px"}},null,8,["onClick"])])):k("",!0),y(s,{schemas:o.detailFormSchemas,data:o.formData,span:o.formSpan},null,8,["schemas","data","span"]),o.hasSubTable&&r.showSub?(d(),C(S,{key:1},{default:B(()=>[(d(!0),g(Q,null,Y(o.subTabInfo,(m,w)=>(d(),C(b,{tab:m.describe,key:w+"",forceRender:!0},{default:B(()=>[m.relationType==1?(d(),g("div",{key:0,style:X({"overflow-y":"auto","overflow-x":"hidden","max-height":o.subFormHeight+"px"})},[y(l,{table:m.key,"form-template":r.formTemplate,"main-id":o.getSubTableForeignKeyValue(m.foreignKey),properties:m.properties},null,8,["table","form-template","main-id","properties"])],4)):(d(),g("div",ce,[y(p,{ref_for:!0,ref:o.refMap[m.key],toolbar:"","keep-source":"","row-number":"","row-selection":"",height:o.subTableHeight,disabled:!0,columns:m.columns,dataSource:o.subDataSource[m.key],authPre:o.getSubTableAuthPre(m.key)},null,8,["height","columns","dataSource","authPre"])]))]),_:2},1032,["tab"]))),128))]),_:1})):k("",!0),y(P,{loading:o.loading,absolute:!1},null,8,["loading"]),q(a.$slots,"bottom")],8,pe)}var _t=K(se,[["render",fe]]);export{_t as default};