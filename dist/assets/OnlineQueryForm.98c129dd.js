import{B as se}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as ie}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{e$ as le,F as D,a7 as ue,H as P,ab as U,t as k,v as H,x as L,y as g,z as x,aV as B,C as M,D as ce,W as A,a1 as me,u as pe,dp as de,dq as fe}from"./index.23784a6b.js";import{c as q,F as N}from"./FormSchemaFactory.1a5f49cc.js";import{g as he,e as ge,f as _e,h as ye,i as W}from"./useAutoForm.51dde271.js";import"./JUpload.847bb7e8.js";import"./JUploadModal.ea15ed8d.js";import"./OnlineSelectCascade.1cb55207.js";import"./index.1660bc1f.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./BasicTable.8204b993.js";import"./TableImg.4cad0ca5.js";import"./Area.3ed21ae4.js";import"./functional.a720d0df.js";import"./LinkTableListPiece.22bbb419.js";import"./uniqBy.d45e63ad.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./index.531e5b47.js";import"./api.4ab57216.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./user.api.c6ef119a.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useListPage.c30c0592.js";import"./useTable.a6edb8cf.js";import"./index.1525978f.js";import"./useContentHeight.83e16fa4.js";import"./useContentViewHeight.6b076a37.js";import"./usePageContext.0eee1b9e.js";import"./RedoOutlined.9bc9f3f7.js";import"./JModalTip.42942367.js";var ve=Object.defineProperty,K=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,z=(i,a,s)=>a in i?ve(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,R=(i,a)=>{for(var s in a||(a={}))Fe.call(a,s)&&z(i,s,a[s]);if(K)for(var s of K(a))we.call(a,s)&&z(i,s,a[s]);return i},C=(i,a,s)=>new Promise((u,y)=>{var V=d=>{try{F(s.next(d))}catch(w){y(w)}},v=d=>{try{F(s.throw(d))}catch(w){y(w)}},F=d=>d.done?u(d.value):Promise.resolve(d.value).then(V,v);F((s=s.apply(i,a)).next())});const be={name:"OnlineQueryForm",components:{BasicForm:se},props:{id:{type:String,default:""}},emits:["search","loaded"],setup(i,{emit:a}){const s="/online/cgform/api/getQueryInfoVue3/",u=D(null),y=D([]),V=D({xs:24,sm:24,md:12,lg:8,xl:8}),v=D(!1),F=D(!1),d=D({}),w=D([]),{createMessage:j}=pe(),m=ue({config:{},cache:{},param:{},status:!1});P(()=>m.status,e=>C(this,null,function*(){console.log("-------------defaultValues\u53D1\u751F\u6539\u53D8,\u9700\u8981\u91CD\u7F6E\u8868\u5355---------------");const{config:t,cache:n,param:_}=U(m);let b=Object.assign({},t,n,_);yield G(b)}),{immediate:!0,deep:!0});function l(e,t){return C(this,null,function*(){m.cache=R({},e),m.param=R({},t),m.status=!m.status})}P(()=>i.id,e=>{e?p():y.value=[]},{immediate:!0});function c(e){return C(this,null,function*(){let t=[],n={},_=Object.keys(e);for(let o of _){const r=e[o];let h=r.view;if(q[h]&&(r.view=q[h]),yield ge(o,r,n),r.mode=="group"&&(h=="date"||h=="datetime"||h=="number")){let S=N.createSlotFormSchema(o,r);t.push(S)}else if(r.view===_e){let S=ye(r,o);for(let O of S){let E=N.createFormSchema(O.key,O),I=W(t,O.key);I==-1?t.push(E):t[I]=E}}else if(W(t,o)==-1){let O=N.createFormSchema(o,r);t.push(O)}}t.sort(function(o,r){return o.order-r.order});let b=[];t.length>2&&(v.value=!0);let f=[];for(let o=0;o<t.length;o++){let r=t[o];r.setFormRef(u),r.noChange(),r.asSearchForm(),o>1&&(f.push(r.field),r.isHidden()),b.push(r.getFormItemSchema())}w.value=f,y.value=b,m.config=R({},n),m.status=!m.status})}function p(){return C(this,null,function*(){let e=yield Z(),t=X(e);a("loaded",e);let{formProperties:n,hasField:_}=J(t,e);if(_==!1){y.value=[];return}yield c(n)})}function G(e){return C(this,null,function*(){yield he(u),console.log("rawValues",e),yield T(e),Object.keys(e).length>0&&Y()})}function J(e,t){const{searchFieldList:n,joinQuery:_,table:b}=t;let f=!1,o={};return e&&Object.keys(e).map(r=>{n.indexOf(r)>=0&&(_==!0?r.indexOf("@")<0?(o[b+"@"+r]=e[r],f=!0):(o[r]=e[r],f=!0):r.indexOf("@")<0&&(o[r]=e[r],f=!0))}),{formProperties:o,hasField:f}}function X(e){const{properties:t,searchFieldList:n,joinQuery:_,table:b}=e;let f={},o=1;return Object.keys(t).map(r=>{let h=t[r];if(h.view=="table"){let S=h.properties,O=o*100;Object.keys(S).map(E=>{let I=S[E];I.order=O+Number(I.order);let ne=r+"@"+E;f[ne]=I}),o++}else h.order=Number(h.order),f[r]=h}),f}function Z(){let e=`${s}${i.id}`;return new Promise(t=>{me.get({url:e},{isTransformResponse:!1}).then(n=>{n.success?t(n.result):(t(!1),j.warning(n.message))}).catch(()=>{j.warning("\u83B7\u53D6\u67E5\u8BE2\u6761\u4EF6\u5931\u8D25!"),t(!1)})})}const[$,{resetFields:ee,setFieldsValue:T,updateSchema:te,getFieldsValue:re}]=ie({schemas:y,showActionButtonGroup:!1,baseColProps:V,autoSubmitOnEnter:!0,submitFunc(){Y()}});function Y(){let e=re(),t=Object.assign({},U(m.param),ae(e));a("search",t,!0)}function oe(){return C(this,null,function*(){yield ee();const{config:e,param:t}=U(m);let n=Object.assign({},e,t);Object.keys(n).length>0&&(yield T(n)),a("search",n,!1)})}function ae(e){return Object.keys(e).map(t=>{e[t]&&e[t]instanceof Array&&(e[t]=e[t].join(","))}),e}return P(()=>F.value,e=>{let t=w.value;if(t&&t.length>0){let n=[];for(let _ of t)n.push({field:_,show:e});te(n)}},{immediate:!1}),{onlineQueryFormRef:u,registerForm:$,initDefaultValues:l,toggleButtonShow:v,toggleSearchStatus:F,doSearch:Y,resetSearch:oe,queryParams:d,formSchemas:y}}},Q=i=>(de("data-v-01d37a80"),i=i(),fe(),i),Se={key:0,class:"jeecg-basic-table-form-container p-0"},Oe=Q(()=>B("span",{class:"group-query-string"},"~",-1)),De=Q(()=>B("span",{class:"group-query-string"},"~",-1)),xe=Q(()=>B("span",{class:"group-query-string"},"~",-1)),Ie={style:{float:"left",overflow:"hidden","margin-left":"10px"},class:"table-page-search-submitButtons"};function ke(i,a,s,u,y,V){const v=k("a-date-picker"),F=k("a-input-number"),d=k("a-button"),w=k("a-icon"),j=k("a-col"),m=k("BasicForm");return u.formSchemas&&u.formSchemas.length>0?(H(),L("div",Se,[g(m,{ref:"onlineQueryFormRef",onRegister:u.registerForm},{groupDate:x(({model:l,field:c})=>[g(v,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u5F00\u59CB\u65E5\u671F",value:l[c+"_begin"],"onUpdate:value":p=>l[c+"_begin"]=p,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"]),Oe,g(v,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u7ED3\u675F\u65E5\u671F",value:l[c+"_end"],"onUpdate:value":p=>l[c+"_end"]=p,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"])]),groupDatetime:x(({model:l,field:c})=>[g(v,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u5F00\u59CB\u65F6\u95F4",value:l[c+"_begin"],"onUpdate:value":p=>l[c+"_begin"]=p,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),De,g(v,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u7ED3\u675F\u65F6\u95F4",value:l[c+"_end"],"onUpdate:value":p=>l[c+"_end"]=p,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),groupNumber:x(({model:l,field:c})=>[g(F,{placeholder:"\u5F00\u59CB\u503C",value:l[c+"_begin"],"onUpdate:value":p=>l[c+"_begin"]=p,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),xe,g(F,{placeholder:"\u7ED3\u675F\u503C",value:l[c+"_end"],"onUpdate:value":p=>l[c+"_end"]=p,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),formFooter:x(()=>[g(j,{md:6,sm:8},{default:x(()=>[B("span",Ie,[g(d,{preIcon:"ant-design:search",type:"primary",onClick:u.doSearch},{default:x(()=>[M("\u67E5\u8BE2")]),_:1},8,["onClick"]),g(d,{preIcon:"ant-design:reload",type:"primary",onClick:u.resetSearch,style:{"margin-left":"8px"}},{default:x(()=>[M("\u91CD\u7F6E")]),_:1},8,["onClick"]),u.toggleButtonShow?(H(),L("a",{key:0,onClick:a[0]||(a[0]=l=>u.toggleSearchStatus=!u.toggleSearchStatus),style:{"margin-left":"8px"}},[M(ce(u.toggleSearchStatus?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),g(w,{type:u.toggleSearchStatus?"up":"down"},null,8,["type"])])):A("",!0)])]),_:1})]),_:1},8,["onRegister"])])):A("",!0)}var Et=le(be,[["render",ke],["__scopeId","data-v-01d37a80"]]);export{Et as default};