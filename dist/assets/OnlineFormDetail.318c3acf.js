import{f5 as K,dL as Q,C as c,a8 as A,r as f,s as d,t as g,v as y,R as C,Q as k,w as B,ax as W,bc as Z,V as q,S as G,n as X,fh as Y,Z as $,u as ee}from"./index.b3c2d15d.js";import te from"./DetailForm.a160a9a3.js";import oe from"./OnlineSubFormDetail.61999be7.js";import{P as re,d as ne}from"./useAutoForm.1796b593.js";import"./api.363f3378.js";import"./Area.bb557106.js";import"./functional.cce3c468.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./componentMap.a24260de.js";import"./JAddInput.eb06f3b7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.4dfbc27f.js";import"./OnlineSelectCascade.3f7896c6.js";import"./index.c08fb6c5.js";import"./pick.b45371be.js";import"./_flatRest.4980c73e.js";import"./isArray.1617b935.js";import"./toString.79810c3b.js";import"./_arrayPush.ca89106e.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import"./LinkTableListPiece.e6c4d36f.js";import"./BasicForm.1d30e5fc.js";import"./FormSchemaFactory.8eec64cb.js";import"./user.api.08ebfe0a.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.05dc2408.js";import"./useForm.853cc25f.js";import"./BasicTable.6f8187cc.js";import"./useFormItem.1acc993a.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./areaDataUtil.26505ac2.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./uniqBy.7d054233.js";import"./index.82bab5e4.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./RedoOutlined.66bed16b.js";import"./useListPage.2b7a424e.js";import"./useTable.f4111a7b.js";import"./JModalTip.79d79a4f.js";var ie=Object.defineProperty,D=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,V=(a,i,r)=>i in a?ie(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,me=(a,i)=>{for(var r in i||(i={}))ae.call(i,r)&&V(a,r,i[r]);if(D)for(var r of D(i))le.call(i,r)&&V(a,r,i[r]);return a},F=(a,i,r)=>new Promise((o,b)=>{var v=l=>{try{s(r.next(l))}catch(p){b(p)}},_=l=>{try{s(r.throw(l))}catch(p){b(p)}},s=l=>l.done?o(l.value):Promise.resolve(l.value).then(v,_);s((r=r.apply(a,i)).next())});const se={name:"OnlineFormDetail",components:{DetailForm:te,Loading:Q,PrinterOutlined:re,OnlineSubFormDetail:oe},props:{id:{type:String,default:""},formTemplate:{type:Number,default:1},disabled:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},pidField:{type:String,default:""},submitTip:{type:Boolean,default:!0},showSub:{type:Boolean,default:!0}},emits:["success","rendered"],setup(a,{emit:i}){console.log("onlineForm-setup\u300B\u300B");const{createMessage:r}=ee(),o=c(""),b=c(!0),v=c(!1),_=c(1),s=c({}),l=c(300),p=c(340),h=A({reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:""}),{detailFormSchemas:S,hasSubTable:P,subTabInfo:m,refMap:w,subDataSource:T,createFormSchemas:J,formSpan:N}=ne(a);function E(e){let t={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:1,modalMinWidth:""};e&&(t=JSON.parse(e)),Object.keys(t).map(n=>{h[n]=t[n]})}function R(e){return F(this,null,function*(){_.value=e.head.tableType,o.value=e.head.tableName,b.value=e.head.tableType==1,E(e.head.extConfigJson),J(e.schema.properties),i("rendered",h)})}function I(e,t){return F(this,null,function*(){console.log("\u8FDB\u5165\u8868\u5355\u8BE6\u60C5\u300B\u300Bform",t),yield M(t)})}function L(e){let t=`/online/cgform/api/detail/${a.id}/${e}`;return new Promise((n,u)=>{$.get({url:t},{isTransformResponse:!1}).then(x=>{x.success?n(x.result):(u(),r.warning(x.message))}).catch(()=>{u()})})}function M(e){return F(this,null,function*(){let t=yield L(e.id);s.value=me({},t),j(t)})}function j(e){e||(e={});let t=Object.keys(T.value);if(t&&t.length>0){let n={};for(let u of t)n[u]=e[u]||[];T.value=n}}function H(e){return"online_"+e+":"}function U(){let e=h.reportPrintUrl,t=s.value;if(t){let n=t.id,u=X();Y(e,n,u)}}function z(e){let t=s.value;return console.log("getValueIgnoreCase(temp, key)",t,e,O(t,e)),O(t,e)}function O(e,t){if(e){let n=e[t];return!n&&n!==0&&(n=e[t.toLowerCase()],!n&&n!==0&&(n=e[t.toUpperCase()])),n}return""}return{detailFormSchemas:S,formData:s,formSpan:N,tableName:o,loading:v,hasSubTable:P,subTabInfo:m,subFormHeight:l,subTableHeight:p,refMap:w,subDataSource:T,getSubTableAuthPre:H,show:I,createRootProperties:R,onOpenReportPrint:U,onlineExtConfigJson:h,getSubTableForeignKeyValue:z}}},pe=["id"],ue={key:0,style:{"text-align":"right",position:"absolute",top:"15px",right:"20px","z-index":"999"}},ce={key:1};function fe(a,i,r,o,b,v){const _=f("PrinterOutlined"),s=f("detail-form"),l=f("online-sub-form-detail"),p=f("JVxeTable"),h=f("a-tab-pane"),S=f("a-tabs"),P=f("Loading");return d(),g("div",{id:o.tableName+"_form"},[!!o.formData.id&&!!o.onlineExtConfigJson.reportPrintShow?(d(),g("div",ue,[y(_,{title:"\u6253\u5370",onClick:o.onOpenReportPrint,style:{"font-size":"16px"}},null,8,["onClick"])])):C("",!0),y(s,{schemas:o.detailFormSchemas,data:o.formData,span:o.formSpan},null,8,["schemas","data","span"]),o.hasSubTable&&r.showSub?(d(),k(S,{key:1},{default:B(()=>[(d(!0),g(W,null,Z(o.subTabInfo,(m,w)=>(d(),k(h,{tab:m.describe,key:w+"",forceRender:!0},{default:B(()=>[m.relationType==1?(d(),g("div",{key:0,style:q({"overflow-y":"auto","overflow-x":"hidden","max-height":o.subFormHeight+"px"})},[y(l,{table:m.key,"form-template":r.formTemplate,"main-id":o.getSubTableForeignKeyValue(m.foreignKey),properties:m.properties},null,8,["table","form-template","main-id","properties"])],4)):(d(),g("div",ce,[y(p,{ref_for:!0,ref:o.refMap[m.key],toolbar:"","keep-source":"","row-number":"","row-selection":"",height:o.subTableHeight,disabled:!0,columns:m.columns,dataSource:o.subDataSource[m.key],authPre:o.getSubTableAuthPre(m.key)},null,8,["height","columns","dataSource","authPre"])]))]),_:2},1032,["tab"]))),128))]),_:1})):C("",!0),y(P,{loading:o.loading,absolute:!1},null,8,["loading"]),G(a.$slots,"bottom")],8,pe)}var St=K(se,[["render",fe]]);export{St as default};