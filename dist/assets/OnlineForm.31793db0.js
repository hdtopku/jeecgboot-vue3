import{f2 as dt,dJ as mt,C as p,a8 as pt,m as ht,bI as gt,r as y,s as B,t as M,v as F,R as me,Q as pe,w as j,ax as bt,bc as yt,V as Ft,S as vt,ac as A,f5 as _t,Z as X,n as St,fe as Ct,u as Pt,K as he,G as ge}from"./index.25572ab7.js";import{B as wt}from"./BasicForm.0e850cba.js";import"./componentMap.c8679e96.js";import{u as Ot}from"./useForm.8e9d7e3a.js";import"./JAddInput.09222b6f.js";import{V as I,S as Tt,b as Bt,O as be}from"./FormSchemaFactory.a3e23150.js";import{O as Et,P as kt,D as At,a as Dt,u as xt,b as Rt,c as Vt,l as U,g as Mt}from"./useAutoForm.b428d250.js";import"./index.117f635e.js";import{p as jt}from"./pick.5c5b7fa5.js";import{o as ye}from"./omit.80ddddf5.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.e8853ef1.js";import"./OnlineSelectCascade.6e6329b2.js";import{F as It}from"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import"./Area.595c917d.js";import"./functional.ad7cd28c.js";import"./LinkTableListPiece.463fb0b6.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./_baseClone.d9404320.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./index.23d6b964.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./user.api.b828e243.js";import"./_commonjsHelpers.dc2475b4.js";import"./customExpression.05dc2408.js";import"./BasicTable.1043d787.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./useListPage.b0d7f469.js";import"./useTable.c365558e.js";import"./JModalTip.94a0f791.js";import"./_baseSlice.db64aae6.js";var Nt=Object.defineProperty,Fe=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,ve=(u,s,r)=>s in u?Nt(u,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[s]=r,q=(u,s)=>{for(var r in s||(s={}))Jt.call(s,r)&&ve(u,r,s[r]);if(Fe)for(var r of Fe(s))Lt.call(s,r)&&ve(u,r,s[r]);return u},P=(u,s,r)=>new Promise((i,E)=>{var S=h=>{try{v(r.next(h))}catch(d){E(d)}},w=h=>{try{v(r.throw(h))}catch(d){E(d)}},v=h=>h.done?i(h.value):Promise.resolve(h.value).then(S,w);v((r=r.apply(u,s)).next())});const $={optPre:"/online/cgform/api/form/",urlButtonAction:"/online/cgform/api/doButton"},Ut={name:"OnlineForm",components:{BasicForm:wt,Loading:mt,OnlineSubForm:Et,PrinterOutlined:kt,DiffOutlined:At,FormOutlined:It,OnlinePopModal:Dt},props:{id:{type:String,default:""},formTemplate:{type:Number,default:1},disabled:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},pidField:{type:String,default:""},submitTip:{type:Boolean,default:!0}},emits:["success","rendered"],setup(u,{emit:s}){console.log("onlineForm-setup\u300B\u300B");const{createMessage:r}=Pt(),i=p(null),E=p(!0),S=p(!1),w=p(1),v=p(""),h=p(!1),d=p(!1),O=pt({reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:"",commentStatus:0}),{onlineFormContext:c,resetContext:K}=xt(),{formSchemas:D,defaultValueFields:k,changeDataIfArray2String:N,tableName:T,dbData:a,checkOnlyFieldValue:W,hasSubTable:g,subTabInfo:x,refMap:H,subDataSource:J,baseColProps:_e,createFormSchemas:Se,linkDownList:zt,fieldDisplayStatus:R}=Rt(u,i);let{EnhanceJS:f,initCgEnhanceJs:Ce}=Vt(c,!1);const[Pe,{setProps:we,validate:ee,resetFields:te,setFieldsValue:C,updateSchema:z,getFieldsValue:Q,scrollToField:Oe}]=Ot({schemas:D,showActionButtonGroup:!1,baseColProps:_e}),le=p(!1);function Te(){let e=u.disabled;le.value=e,we({disabled:e})}function Be(e,t,l){return P(this,null,function*(){console.log("\u65B0\u589E\u7F16\u8F91\u8FDB\u5165\u8868\u5355\u300B\u300Bform",t),yield Ee(),v.value="",yield te(),a.value="";let o=he(e);d.value=o,o?yield ne(t):ie(),ge(()=>{!o&&l&&C(l),ke(),G("js","loaded"),Te()})})}function Ee(){return P(this,null,function*(){if(u.isTree===!0){let e=u.pidField,t=D.value;t&&t.length>0?t.filter(o=>o.field===e).length>0&&(yield z({field:e,componentProps:{reload:new Date().getTime()}})):console.log("\u6CA1\u6709\u62FF\u5230\u8868\u5355\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u80FD\u662F\u7B2C\u4E00\u6B21\u6253\u5F00\u65B0\u589E\u9875\u9762")}})}function ke(){if(he(d)===!1){let e=A(k[T.value]);U(e,t=>{C(t)})}}function oe(e,t){let l=A(k[e.key]);U(l,o=>{const{row:n,target:m}=t;let _=[{rowKey:n.id,values:q({},o)}];m.setValues(_)})}function ne(e){return P(this,null,function*(){let t=yield De(e.id);a.value=Object.assign({},e,t);let l=Ae.value,o=jt(t,...l);u.disabled&&Object.keys(o).map(n=>{!o[n]&&o[n]!==0&&o[n]!=="0"&&delete o[n]}),yield C(o),ie(t)})}function ie(e){e||(e={});let t=Object.keys(J.value);if(t&&t.length>0){let l={};for(let o of t)l[o]=e[o]||[];J.value=l}}let Ae=ht(()=>{let e=D.value,t=[];for(let l of e)t.push(l.field);return t});function De(e){let t=`${$.optPre}${u.id}/${e}`;return new Promise((l,o)=>{X.get({url:t},{isTransformResponse:!1}).then(n=>{n.success?l(n.result):(o(),r.warning(n.message))}).catch(()=>{o()})})}function xe(e){return P(this,null,function*(){w.value=e.head.tableType,T.value=e.head.tableName,E.value=e.head.tableType==1,Re(e.head.extConfigJson),Se(e.schema.properties,e.schema.required,W),f=Ce(e.enhanceJs),s("rendered",O);let t=yield Mt(i);t.$formValueChange=(l,o,n)=>{Ye(l,o),n&&C(n)}})}function Re(e){let t={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:1,modalMinWidth:"",commentStatus:0};e&&(t=JSON.parse(e)),Object.keys(t).map(l=>{O[l]=t[l]})}function Ve(){E.value===!0?Je():Me()}function Me(){je().then(e=>{ae(e)})}function je(){let e={};return new Promise((t,l)=>{ee().then(o=>t(o),({errorFields:o})=>{o&&o.length>0&&Oe(o[0][0]),l(I)})}).then(t=>(Object.assign(e,N(t)),Ne())).then(t=>(Object.assign(e,t),Promise.resolve(e))).catch(t=>(t===I||(t==null?void 0:t.code)===I?(r.warning("\u6821\u9A8C\u672A\u901A\u8FC7"),t.key&&Ie(t.key)):console.error(t),Promise.reject(null)))}function Ie(e){let t=x.value;for(let l=0;l<t.length;l++)if(e==t[l].key){let o=l+"";if(L.value===o)break;if(L.value=o,t[l].relationType===0){let n=b(e);_t(300,()=>n==null?void 0:n.validateTable())}break}}function Ne(){return new Promise((e,t)=>P(this,null,function*(){let l={};try{let o=x.value;for(let n=0;n<o.length;n++){let m=o[n].key,_=b(m);if(o[n].relationType==1)try{let V=yield _.getAll();l[m]=[],l[m].push(V)}catch(V){throw{code:I,key:m}}else{if(yield _.fullValidateTable())throw{code:I,key:m};l[m]=_.getTableData()}}}catch(o){t(o)}e(l)}))}function Je(){return P(this,null,function*(){try{let e=yield ee();e=Object.assign({},a.value,e),e=N(e),S.value=!0,ae(e)}finally{S.value=!1}})}function ae(e){$e(de,e).then(()=>{Le(e)}).catch(t=>{r.warning(t)})}function Le(e){Object.keys(e).map(n=>{Array.isArray(e[n])&&e[n].length==0&&(e[n]="")}),console.log("\u63D0\u4EA4\u8868\u5355\u6570\u636E\u300B\u300B\u300Bform:",e);let t=v.value,l=`${$.optPre}${u.id}?tabletype=${w.value}`;t&&(l=`${t}?tabletype=${w.value}`),h.value===!0&&(e[Tt]=1);let o=d.value===!0?"put":"post";X.request({url:l,method:o,params:e},{isTransformResponse:!1}).then(n=>{n.success?(n.result&&(e[Bt]=n.result),s("success",e),u.submitTip===!0&&r.success(n.message)):r.warning(n.message)}).finally(()=>{S.value=!1})}function Ue(e,t,l){t&&l?l.vxeProps?l.setValues([{rowKey:t,values:e}]):l.setValues(e):C(e)}function qe(e,t){let l={};l[e]=t,C(l)}const L=p("0"),re=p(300),ue=p(340);function Ke(e){if(d.value===!0){let t=a.value;return We(t,e)}return""}function We(e,t){if(e){let l=e[t];return!l&&l!==0&&(l=e[t.toLowerCase()],!l&&l!==0&&(l=e[t.toUpperCase()])),l}return""}function He(e,t){if(f&&f[t+"_onlChange"]){let l=f[t+"_onlChange"](),o=Object.keys(e)[0];if(l[o]){let m=b(t).getFormEvent(),_=q({column:{key:o},value:e[o]},m);l[o].call(c,c,_)}}}function ze(e,t){if(f&&f[t+"_onlChange"]){let l=f[t+"_onlChange"](c);if(e.column==="all"){let o=Object.keys(l);if(o.length>0)for(let n of o)l[n].call(c,c,e)}else{let o=e.column.key||e.col.key;l[o]&&e.row&&e.row.id&&l[o].call(c,c,e)}}}function Qe(e,t){console.log("handleAdded",e,t),oe(e,t)}function Ge(e){return"online_"+e+":"}function Ye(e,t){return P(this,null,function*(){if(!f||!f.onlChange||!e)return!1;let l=f.onlChange();if(l[e]){let n={row:yield Q(),column:{key:e},value:t};l[e].call(c,c,n)}})}function G(e,t){if(e=="js")f&&f[t]&&f[t].call(c,c);else if(e=="action"){let l=a.value,o={formId:u.id,buttonCode:t,dataId:l.id,uiFormData:Object.assign({},l)};X.post({url:`${$.urlButtonAction}`,params:o},{isTransformResponse:!1}).then(n=>{n.success?r.success("\u5904\u7406\u5B8C\u6210!"):r.warning("\u5904\u7406\u5931\u8D25!")})}}function se(e){let t=b(e),l=[...t.getNewDataWithId(),...J.value[e]];if(!l||l.length==0)return!1;let o=[];for(let n of l)o.push(n.id);t.removeRowsById(o)}function fe(e,t){if(!t)return!1;let l=b(e);typeof t=="object"?l.addRows(t,!0):this.$message.error("\u6DFB\u52A0\u5B50\u8868\u6570\u636E,\u53C2\u6570\u4E0D\u8BC6\u522B!")}function Ze(e,t){se(e),fe(e,t)}function Xe(e,t){!t&&t.length<=0&&(t=[]),t.map(l=>{l.hasOwnProperty("label")||(l.label=l.text)}),z({field:e,componentProps:{options:t}})}function $e(e,t){return f&&f.beforeSubmit?f.beforeSubmit(e,t):Promise.resolve()}function et(e,t){let l=A(R);e&&e.length>0?Object.keys(l).map(o=>{!o.endsWith("_load")&&e.indexOf(o)<0&&(R[o]=!1)}):t&&t.length>0&&Object.keys(l).map(o=>{t.indexOf(o)>=0&&(R[o]=!1)})}function tt(e,t){return P(this,null,function*(){console.log("\u81EA\u5B9A\u4E49\u5F39\u7A97\u6253\u5F00online\u8868\u5355\u300B\u300Bform",e),v.value=t,yield te(),a.value="",d.value=!0,yield ne(e),yield ge(()=>{G("js","loaded")})})}function b(e){let t=H[e].value;if(t instanceof Array&&(t=t[0]),!t){r.warning("\u5B50\u8868ref\u627E\u4E0D\u5230:"+e);return}return t}function lt(){let e=O.reportPrintUrl,t=a.value.id,l=St();Ct(e,t,l)}const[ot,{openModal:ce}]=gt(),Y=p(""),Z=p(!0);function nt(e){console.log("openSubFormModalForAdd",e),Y.value=e.id,Z.value=!1,ce(!0,{isUpdate:!1})}function it(e){let l=b(e.key).getSelectedData();if(l.length!=1){r.warning("\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E");return}Y.value=e.id,Z.value=!1,ce(!0,{isUpdate:!0,record:l[0]})}function at(e){const t=e[be];let l=ye(e,[be]);if(l.id){let o=ye(q({},l),"id"),n=[{rowKey:l.id,values:o}];b(t).setValues(n)}else b(t).addRows(l,{isOnlineJS:!1,setActive:!1,emitChange:!0})}function rt(){let e=x.value;if(e&&e.length>0){for(let t of e)if(t.relationType!=1){let l=b(t.key);l&&l.clearSelection()}}}function ut(){let e=Q(),t=A(k[T.value]);U(t,l=>{C(l)},e)}function st(e,t){let l=x.value;if(l&&l.length>0){let o=l.filter(n=>n.key===e);if(o.length==0){console.error("\u6CA1\u627E\u5230\u4E0E\u4E4B\u5339\u914D\u7684\u5B50\u8868",e);return}if(o[0].relationType==1)b(e).executeFillRule();else{let n=A(k[e]),m=A(t.row);U(n,_=>{const{row:V,target:ft}=t;let ct=[{rowKey:V.id,values:q({},_)}];ft.setValues(ct)},m)}}}let de={tableName:T,loading:S,subActiveKey:L,onlineFormRef:i,getFieldsValue:Q,setFieldsValue:C,submitFlowFlag:h,subFormHeight:re,subTableHeight:ue,refMap:H,triggleChangeValues:Ue,triggleChangeValue:qe,sh:R,clearSubRows:se,addSubRows:fe,clearThenAddRows:Ze,changeOptions:Xe,isUpdate:d,getSubTableInstance:b,updateSchema:z,executeMainFillRule:ut,executeSubFillRule:st};return K(de),{tableName:T,onlineFormRef:i,registerForm:Pe,loading:S,subActiveKey:L,hasSubTable:g,subTabInfo:x,refMap:H,subFormHeight:re,getSubTableForeignKeyValue:Ke,isUpdate:d,handleSubFormChange:He,subTableHeight:ue,onlineFormDisabled:le,subDataSource:J,getSubTableAuthPre:Ge,handleAdded:Qe,handleSubTableDefaultValue:oe,handleValueChange:ze,openSubFormModalForAdd:nt,openSubFormModalForEdit:it,show:Be,createRootProperties:xe,handleSubmit:Ve,sh:R,handleCgButtonClick:G,handleCustomFormSh:et,handleCustomFormEdit:tt,dbData:a,onOpenReportPrint:lt,onlineExtConfigJson:O,registerPopModal:ot,popTableName:Y,getPopFormData:at,popModalRequest:Z,onCloseModal:rt}}},qt=["id"],Kt={key:0,style:{"text-align":"right",position:"absolute",top:"6px",right:"20px","z-index":"999"}},Wt={key:1};function Ht(u,s,r,i,E,S){const w=y("PrinterOutlined"),v=y("BasicForm"),h=y("online-sub-form"),d=y("diff-outlined"),O=y("a-button"),c=y("form-outlined"),K=y("JVxeTable"),D=y("a-tab-pane"),k=y("a-tabs"),N=y("Loading"),T=y("online-pop-modal");return B(),M("div",{id:i.tableName+"_form"},[!!i.dbData.id&&!!i.onlineExtConfigJson.reportPrintShow?(B(),M("div",Kt,[F(w,{title:"\u6253\u5370",onClick:i.onOpenReportPrint,style:{"font-size":"16px"}},null,8,["onClick"])])):me("",!0),F(v,{ref:"onlineFormRef",onRegister:i.registerForm},null,8,["onRegister"]),i.hasSubTable?(B(),pe(k,{key:1,activeKey:i.subActiveKey,"onUpdate:activeKey":s[0]||(s[0]=a=>i.subActiveKey=a)},{default:j(()=>[(B(!0),M(bt,null,yt(i.subTabInfo,(a,W)=>(B(),pe(D,{tab:a.describe,key:W+"",forceRender:!0},{default:j(()=>[a.relationType==1?(B(),M("div",{key:0,style:Ft({"overflow-y":"auto","overflow-x":"hidden","max-height":i.subFormHeight+"px"})},[F(h,{ref_for:!0,ref:i.refMap[a.key],table:a.key,disabled:i.onlineFormDisabled,"form-template":r.formTemplate,"main-id":i.getSubTableForeignKeyValue(a.foreignKey),properties:a.properties,"required-fields":a.requiredFields,"is-update":i.isUpdate,onFormChange:g=>i.handleSubFormChange(g,a.key)},null,8,["table","disabled","form-template","main-id","properties","required-fields","is-update","onFormChange"])],4)):(B(),M("div",Wt,[F(K,{ref_for:!0,ref:i.refMap[a.key],toolbar:"","keep-source":"","row-number":"","row-selection":"",height:i.subTableHeight,disabled:i.onlineFormDisabled,columns:a.columns,dataSource:i.subDataSource[a.key],onValueChange:g=>i.handleValueChange(g,a.key),authPre:i.getSubTableAuthPre(a.key),onAdded:g=>i.handleAdded(a,g),onExecuteFillRule:g=>i.handleSubTableDefaultValue(a,g)},{toolbarSuffix:j(()=>[F(O,{type:"primary",onClick:g=>i.openSubFormModalForAdd(a)},{default:j(()=>[F(d)]),_:2},1032,["onClick"]),F(O,{type:"primary",onClick:g=>i.openSubFormModalForEdit(a)},{default:j(()=>[F(c)]),_:2},1032,["onClick"])]),_:2},1032,["height","disabled","columns","dataSource","onValueChange","authPre","onAdded","onExecuteFillRule"])]))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])):me("",!0),F(N,{loading:i.loading,absolute:!1},null,8,["loading"]),vt(u.$slots,"bottom"),F(T,{request:i.popModalRequest,id:i.popTableName,onRegister:i.registerPopModal,onSuccess:i.getPopFormData,topTip:"",isVxeTableData:""},null,8,["request","id","onRegister","onSuccess"])],8,qt)}var to=dt(Ut,[["render",Ht]]);export{to as default};