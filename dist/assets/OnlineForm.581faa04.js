import{e$ as ut,ev as st,F as p,a7 as ft,o as ct,bH as dt,t as v,v as T,x as D,y as F,W as de,V as me,z as V,aw as mt,bb as pt,Y as ht,X as gt,ab as z,f0 as bt,a1 as Q,r as yt,f9 as vt,u as Ft,L as pe,Q as he}from"./index.3bed7968.js";import{B as _t}from"./BasicForm.edf8c211.js";import"./helper.4a0046bd.js";import{u as St}from"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import{V as x,S as Ct,b as Pt,O as ge}from"./FormSchemaFactory.d8e45fc2.js";import{O as Ot,P as wt,D as Tt,a as At,u as Bt,b as kt,c as Et,l as be,g as Dt}from"./useAutoForm.3103d233.js";import"./index.2b083806.js";import{p as Vt}from"./pick.dbff1c58.js";import{o as ye}from"./omit.d6518a29.js";import"./JUpload.6297877e.js";import"./JUploadModal.1e324a16.js";import"./OnlineSelectCascade.36831570.js";import{F as xt}from"./BasicTable.ee63ae89.js";import"./TableImg.198933b8.js";import"./Area.1c78da76.js";import"./functional.0ad73ef9.js";import"./LinkTableListPiece.98eacc59.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./_baseClone.a8082016.js";import"./uniqBy.be18330d.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useFormItem.1483bf1f.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./index.e7272bc8.js";import"./api.9041b4ca.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./user.api.c3bf9153.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useListPage.2683ea67.js";import"./useTable.a9a1d4e1.js";import"./index.e57fdc92.js";import"./useContentHeight.2c22b941.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";import"./RedoOutlined.b3a6cb97.js";import"./JModalTip.709da911.js";import"./_baseSlice.23bb44df.js";var Rt=Object.defineProperty,ve=Object.getOwnPropertySymbols,Mt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Fe=(u,s,i)=>s in u?Rt(u,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[s]=i,Y=(u,s)=>{for(var i in s||(s={}))Mt.call(s,i)&&Fe(u,i,s[i]);if(ve)for(var i of ve(s))jt.call(s,i)&&Fe(u,i,s[i]);return u},C=(u,s,i)=>new Promise((a,A)=>{var S=h=>{try{_(i.next(h))}catch(m){A(m)}},P=h=>{try{_(i.throw(h))}catch(m){A(m)}},_=h=>h.done?a(h.value):Promise.resolve(h.value).then(S,P);_((i=i.apply(u,s)).next())});const G={optPre:"/online/cgform/api/form/",urlButtonAction:"/online/cgform/api/doButton"},It={name:"OnlineForm",components:{BasicForm:_t,Loading:st,OnlineSubForm:Ot,PrinterOutlined:wt,DiffOutlined:Tt,FormOutlined:xt,OnlinePopModal:At},props:{id:{type:String,default:""},formTemplate:{type:Number,default:1},disabled:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},pidField:{type:String,default:""},submitTip:{type:Boolean,default:!0}},emits:["success","rendered"],setup(u,{emit:s}){console.log("onlineForm-setup\u300B\u300B");const{createMessage:i}=Ft(),a=p(null),A=p(!0),S=p(!1),P=p(1),_=p(""),h=p(!1),m=p(!1),O=ft({reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:"",commentStatus:0}),{onlineFormContext:d,resetContext:J}=Bt(),{formSchemas:B,defaultValueFields:R,changeDataIfArray2String:M,tableName:k,dbData:r,checkOnlyFieldValue:L,hasSubTable:b,subTabInfo:j,refMap:y,subDataSource:I,baseColProps:_e,createFormSchemas:Se,linkDownList:qt,fieldDisplayStatus:E}=kt(u,a);let{EnhanceJS:f,initCgEnhanceJs:Ce}=Et(d,!1);console.log("--formSchemas----------",B);const[Pe,{setProps:Oe,validate:X,resetFields:Z,setFieldsValue:w,updateSchema:U,getFieldsValue:$,scrollToField:we}]=St({schemas:B,showActionButtonGroup:!1,baseColProps:_e}),ee=p(!1);function Te(){let e=u.disabled;ee.value=e,Oe({disabled:e})}function Ae(e,t,l){return C(this,null,function*(){console.log("\u65B0\u589E\u7F16\u8F91\u8FDB\u5165\u8868\u5355\u300B\u300Bform",t),yield Be(),_.value="",yield Z(),r.value="";let o=pe(e);m.value=o,o?yield le(t):oe(),he(()=>{!o&&l&&w(l),ke(),q("js","loaded"),Te()})})}function Be(){return C(this,null,function*(){if(u.isTree===!0){let e=u.pidField,t=B.value;t&&t.length>0?t.filter(o=>o.field===e).length>0&&(yield U({field:e,componentProps:{reload:new Date().getTime()}})):console.log("\u6CA1\u6709\u62FF\u5230\u8868\u5355\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u80FD\u662F\u7B2C\u4E00\u6B21\u6253\u5F00\u65B0\u589E\u9875\u9762")}})}function ke(){if(pe(m)===!1){let e=z(R[k.value]);be(e,t=>{w(t)})}}function te(e,t){let l=z(R[e.key]);be(l,o=>{const{row:n,target:g}=t;let c=[{rowKey:n.id,values:Y({},o)}];g.setValues(c)})}function le(e){return C(this,null,function*(){let t=yield De(e.id);r.value=Object.assign({},e,t);let l=Ee.value,o=Vt(t,...l);u.disabled&&Object.keys(o).map(n=>{!o[n]&&o[n]!==0&&o[n]!=="0"&&delete o[n]}),yield w(o),oe(t)})}function oe(e){e||(e={});let t=Object.keys(I.value);if(t&&t.length>0){let l={};for(let o of t)l[o]=e[o]||[];I.value=l}}let Ee=ct(()=>{let e=B.value,t=[];for(let l of e)t.push(l.field);return t});function De(e){let t=`${G.optPre}${u.id}/${e}`;return new Promise((l,o)=>{Q.get({url:t},{isTransformResponse:!1}).then(n=>{n.success?l(n.result):(o(),i.warning(n.message))}).catch(()=>{o()})})}function Ve(e){return C(this,null,function*(){P.value=e.head.tableType,k.value=e.head.tableName,A.value=e.head.tableType==1,xe(e.head.extConfigJson),Se(e.schema.properties,e.schema.required,L),f=Ce(e.enhanceJs),s("rendered",O);let t=yield Dt(a);t.$formValueChange=(l,o,n)=>{Ge(l,o),n&&w(n)}})}function xe(e){let t={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:1,modalMinWidth:"",commentStatus:0};e&&(t=JSON.parse(e)),Object.keys(t).map(l=>{O[l]=t[l]})}function Re(){A.value===!0?Je():Me()}function Me(){je().then(e=>{ne(e)})}function je(){let e={};return new Promise((t,l)=>{X().then(o=>t(o),({errorFields:o})=>{o&&o.length>0&&we(o[0][0]),l(x)})}).then(t=>(Object.assign(e,M(t)),Ne())).then(t=>(Object.assign(e,t),Promise.resolve(e))).catch(t=>(t===x||(t==null?void 0:t.code)===x?(i.warning("\u6821\u9A8C\u672A\u901A\u8FC7"),t.key&&Ie(t.key)):console.error(t),Promise.reject(null)))}function Ie(e){let t=j.value;for(let l=0;l<t.length;l++)if(e==t[l].key){let o=l+"";if(N.value===o)break;if(N.value=o,t[l].relationType===0){let n=y[e].value;n=Array.isArray(n)?n[0]:n,bt(300,()=>n==null?void 0:n.validateTable())}break}}function Ne(){return new Promise((e,t)=>C(this,null,function*(){let l={};try{let o=j.value;for(let n=0;n<o.length;n++){let g=o[n].key,c=y[g].value;if(c instanceof Array&&(c=c[0]),o[n].relationType==1)try{let H=yield c.getAll();l[g]=[],l[g].push(H)}catch(H){throw{code:x,key:g}}else{if(yield c.fullValidateTable())throw{code:x,key:g};l[g]=c.getTableData()}}}catch(o){t(o)}e(l)}))}function Je(){return C(this,null,function*(){try{let e=yield X();e=Object.assign({},r.value,e),e=M(e),S.value=!0,ne(e)}finally{S.value=!1}})}function ne(e){$e(ce,e).then(()=>{Le(e)}).catch(t=>{i.warning(t)})}function Le(e){Object.keys(e).map(n=>{Array.isArray(e[n])&&e[n].length==0&&(e[n]="")}),console.log("\u63D0\u4EA4\u8868\u5355\u6570\u636E\u300B\u300B\u300Bform:",e);let t=_.value,l=`${G.optPre}${u.id}?tabletype=${P.value}`;t&&(l=`${t}?tabletype=${P.value}`),h.value===!0&&(e[Ct]=1);let o=m.value===!0?"put":"post";Q.request({url:l,method:o,params:e},{isTransformResponse:!1}).then(n=>{n.success?(n.result&&(e[Pt]=n.result),s("success",e),u.submitTip===!0&&i.success(n.message)):i.warning(n.message)}).finally(()=>{S.value=!1})}function Ue(e,t,l){t&&l?l.vxeProps?l.setValues([{rowKey:t,values:e}]):l.setValues(e):w(e)}function qe(e,t){let l={};l[e]=t,w(l)}const N=p("0"),ae=p(300),ie=p(340);function Ke(e){if(m.value===!0){let t=r.value;return We(t,e)}return""}function We(e,t){if(e){let l=e[t];return!l&&l!==0&&(l=e[t.toLowerCase()],!l&&l!==0&&(l=e[t.toUpperCase()])),l}return""}function He(e,t){if(f&&f[t+"_onlChange"]){let l=f[t+"_onlChange"](),o=Object.keys(e)[0];if(l[o]){let n=y[t].value;n instanceof Array&&(n=n[0]);let g=n.getFormEvent(),c=Y({column:{key:o},value:e[o]},g);l[o].call(d,d,c)}}}function ze(e,t){if(f&&f[t+"_onlChange"]){let l=f[t+"_onlChange"](d);if(e.column==="all"){let o=Object.keys(l);if(o.length>0)for(let n of o)l[n].call(d,d,e)}else{let o=e.column.key||e.col.key;l[o]&&e.row&&e.row.id&&l[o].call(d,d,e)}}}function Qe(e,t){console.log("handleAdded",e,t),te(e,t)}function Ye(e){return"online_"+e+":"}function Ge(e,t){return C(this,null,function*(){if(!f||!f.onlChange||!e)return!1;let l=f.onlChange();if(l[e]){let n={row:yield $(),column:{key:e},value:t};l[e].call(d,d,n)}})}function q(e,t){if(e=="js")f&&f[t]&&f[t].call(d,d);else if(e=="action"){let l=r.value,o={formId:u.id,buttonCode:t,dataId:l.id,uiFormData:Object.assign({},l)};Q.post({url:`${G.urlButtonAction}`,params:o},{isTransformResponse:!1}).then(n=>{n.success?i.success("\u5904\u7406\u5B8C\u6210!"):i.warning("\u5904\u7406\u5931\u8D25!")})}}function re(e){let t=y[e].value,l=[...t.getNewDataWithId(),...I.value[e]];if(!l||l.length==0)return!1;let o=[];for(let n of l)o.push(n.id);t.removeRowsById(o)}function ue(e,t){if(!t)return!1;let l=y[e].value;typeof t=="object"?l.addRows(t,!0):this.$message.error("\u6DFB\u52A0\u5B50\u8868\u6570\u636E,\u53C2\u6570\u4E0D\u8BC6\u522B!")}function Xe(e,t){re(e),ue(e,t)}function Ze(e,t){!t&&t.length<=0&&(t=[]),t.map(l=>{l.hasOwnProperty("label")||(l.label=l.text)}),U({field:e,componentProps:{options:t}})}function $e(e,t){return f&&f.beforeSubmit?f.beforeSubmit(e,t):Promise.resolve()}function et(e,t){let l=z(E);e&&e.length>0?Object.keys(l).map(o=>{!o.endsWith("_load")&&e.indexOf(o)<0&&(E[o]=!1)}):t&&t.length>0&&Object.keys(l).map(o=>{t.indexOf(o)>=0&&(E[o]=!1)})}function tt(e,t){return C(this,null,function*(){console.log("\u81EA\u5B9A\u4E49\u5F39\u7A97\u6253\u5F00online\u8868\u5355\u300B\u300Bform",e),_.value=t,yield Z(),r.value="",m.value=!0,yield le(e),yield he(()=>{q("js","loaded")})})}function se(e){let t=y[e].value;return t instanceof Array&&(t=t[0]),t}function lt(){let e=O.reportPrintUrl,t=r.value.id,l=yt();vt(e,t,l)}const[ot,{openModal:fe}]=dt(),K=p(""),W=p(!0);function nt(e){console.log("openSubFormModalForAdd",e),K.value=e.id,W.value=!1,fe(!0,{})}function at(e){let t=y[e.key];if(!t||!t.value){i.warning("\u5B50\u8868ref\u627E\u4E0D\u5230:"+e.key);return}t=t.value,Array.isArray(t)&&(t=t[0]);let l=t.getSelectedData();if(l.length!=1){i.warning("\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E");return}K.value=e.id,W.value=!1,fe(!0,{isUpdate:!0,record:l[0]})}function it(e){const t=e[ge];let l=ye(e,[ge]);if(l.id){const o=y[t];if(!o||!o.value){i.warning("\u5B50\u8868ref\u627E\u4E0D\u5230:"+t);return}let n=ye(Y({},l),"id"),g=[{rowKey:l.id,values:n}],c=o.value;c instanceof Array&&(c=c[0]),c.setValues(g)}else{let o=y[t].value;o instanceof Array&&(o=o[0]),o.addRows(l,{isOnlineJS:!1,setActive:!1,emitChange:!0})}}function rt(){let e=j.value;if(e&&e.length>0){for(let t of e)if(t.relationType!=1){let l=se(t.key);l&&l.clearSelection()}}}let ce={tableName:k,loading:S,subActiveKey:N,onlineFormRef:a,getFieldsValue:$,setFieldsValue:w,submitFlowFlag:h,subFormHeight:ae,subTableHeight:ie,refMap:y,triggleChangeValues:Ue,triggleChangeValue:qe,sh:E,clearSubRows:re,addSubRows:ue,clearThenAddRows:Xe,changeOptions:Ze,isUpdate:m,getSubTableInstance:se,updateSchema:U};return J(ce),{tableName:k,onlineFormRef:a,registerForm:Pe,loading:S,subActiveKey:N,hasSubTable:b,subTabInfo:j,refMap:y,subFormHeight:ae,getSubTableForeignKeyValue:Ke,isUpdate:m,handleSubFormChange:He,subTableHeight:ie,onlineFormDisabled:ee,subDataSource:I,getSubTableAuthPre:Ye,handleAdded:Qe,handleSubTableDefaultValue:te,handleValueChange:ze,openSubFormModalForAdd:nt,openSubFormModalForEdit:at,show:Ae,createRootProperties:Ve,handleSubmit:Re,sh:E,handleCgButtonClick:q,handleCustomFormSh:et,handleCustomFormEdit:tt,dbData:r,onOpenReportPrint:lt,onlineExtConfigJson:O,registerPopModal:ot,popTableName:K,getPopFormData:it,popModalRequest:W,onCloseModal:rt}}},Nt=["id"],Jt={key:0,style:{"text-align":"right",position:"absolute",top:"6px",right:"20px","z-index":"999"}},Lt={key:1};function Ut(u,s,i,a,A,S){const P=v("PrinterOutlined"),_=v("BasicForm"),h=v("online-sub-form"),m=v("diff-outlined"),O=v("a-button"),d=v("form-outlined"),J=v("JVxeTable"),B=v("a-tab-pane"),R=v("a-tabs"),M=v("Loading"),k=v("online-pop-modal");return T(),D("div",{id:a.tableName+"_form"},[!!a.dbData.id&&!!a.onlineExtConfigJson.reportPrintShow?(T(),D("div",Jt,[F(P,{title:"\u6253\u5370",onClick:a.onOpenReportPrint,style:{"font-size":"16px"}},null,8,["onClick"])])):de("",!0),F(_,{ref:"onlineFormRef",onRegister:a.registerForm},null,8,["onRegister"]),a.hasSubTable?(T(),me(R,{key:1,activeKey:a.subActiveKey,"onUpdate:activeKey":s[0]||(s[0]=r=>a.subActiveKey=r)},{default:V(()=>[(T(!0),D(mt,null,pt(a.subTabInfo,(r,L)=>(T(),me(B,{tab:r.describe,key:L+"",forceRender:!0},{default:V(()=>[r.relationType==1?(T(),D("div",{key:0,style:ht({"overflow-y":"auto","overflow-x":"hidden","max-height":a.subFormHeight+"px"})},[F(h,{ref_for:!0,ref:a.refMap[r.key],table:r.key,disabled:a.onlineFormDisabled,"form-template":i.formTemplate,"main-id":a.getSubTableForeignKeyValue(r.foreignKey),properties:r.properties,"required-fields":r.requiredFields,"is-update":a.isUpdate,onFormChange:b=>a.handleSubFormChange(b,r.key)},null,8,["table","disabled","form-template","main-id","properties","required-fields","is-update","onFormChange"])],4)):(T(),D("div",Lt,[F(J,{ref_for:!0,ref:a.refMap[r.key],toolbar:"","keep-source":"","row-number":"","row-selection":"",height:a.subTableHeight,disabled:a.onlineFormDisabled,columns:r.columns,dataSource:a.subDataSource[r.key],onValueChange:b=>a.handleValueChange(b,r.key),authPre:a.getSubTableAuthPre(r.key),onAdded:b=>a.handleAdded(r,b),onExecuteFillRule:b=>a.handleSubTableDefaultValue(r,b)},{toolbarSuffix:V(()=>[F(O,{type:"primary",onClick:b=>a.openSubFormModalForAdd(r)},{default:V(()=>[F(m)]),_:2},1032,["onClick"]),F(O,{type:"primary",onClick:b=>a.openSubFormModalForEdit(r)},{default:V(()=>[F(d)]),_:2},1032,["onClick"])]),_:2},1032,["height","disabled","columns","dataSource","onValueChange","authPre","onAdded","onExecuteFillRule"])]))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])):de("",!0),F(M,{loading:a.loading,absolute:!1},null,8,["loading"]),gt(u.$slots,"bottom"),F(k,{request:a.popModalRequest,id:a.popTableName,onRegister:a.registerPopModal,onSuccess:a.getPopFormData,topTip:"",isVxeTableData:""},null,8,["request","id","onRegister","onSuccess"])],8,Nt)}var Ql=ut(It,[["render",Ut]]);export{Ql as default};