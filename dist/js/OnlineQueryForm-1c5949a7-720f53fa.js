import"./index-a2e0ccba.js";import{l as O,r as se,w as M,J as R,a5 as ne,a6 as ue,ad as I,V as k,a7 as L,a8 as q,f as c,aa as b,E,ae as pe,W}from"./vue-ebecda47.js";import{C as me,ap as ce,bB as de}from"./jeecg-online-vendor-cfb58502.js";import{u as fe,j as A,k as he,F as N,m as ge,n as ye,o as J,g as ve}from"./useExtendComponent-48d37d9b-8d9aa8a0.js";import"./componentMap-c36c4b8d.js";import"./index-85cfc899.js";import"./antd-vue-vendor-b75e8c06.js";import"./index-e91e8b28.js";import"./lodash-es-vendor-cd7703c8.js";import"./index-38e4d5c0.js";import"./user.api-729c8827.js";import"./customExpression-62f5afd1.js";import"./index-993283cc.js";import"./useListPage-52971497.js";import"./JUpload-ffe34816.js";import"./LinkTableListPiece-34266919-8927295e.js";import"./OnlineSelectCascade-c7baf52b-8f32847b.js";import"./JModalTip-abe1515a-cd675860.js";import{B as be,u as we}from"./useForm-21b78d9f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./tinymce-vendor-7c917b36.js";import"./useFormItem-ba20c4de.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./JEllipsis-410bb5e8.js";import"./BasicTable-46b6c894.js";import"./injectionKey-69710956.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./cron-parser-vendor-afad4b1e.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";var Fe=Object.defineProperty,$=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,z=(s,a,i)=>a in s?Fe(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,Q=(s,a)=>{for(var i in a||(a={}))Se.call(a,i)&&z(s,i,a[i]);if($)for(var i of $(a))xe.call(a,i)&&z(s,i,a[i]);return s},Y=(s,a,i)=>new Promise((u,w)=>{var C=h=>{try{y(i.next(h))}catch(S){w(S)}},F=h=>{try{y(i.throw(h))}catch(S){w(S)}},y=h=>h.done?u(h.value):Promise.resolve(h.value).then(C,F);y((i=i.apply(s,a)).next())});const _e={name:"OnlineQueryForm",components:{BasicForm:be},props:{id:{type:String,default:""}},emits:["search","loaded"],setup(s,{emit:a}){const i="/online/cgform/api/getQueryInfoVue3/",u=O(null),w=O([]),C=O({xs:24,sm:24,md:12,lg:6,xl:6}),F=O(!1),y=O(!1),h=O({}),S=O([]),{createMessage:U}=me(),{linkTableCard2Select:B}=fe(),d=se({config:{},cache:{},param:{},status:!1});M(()=>d.status,t=>Y(this,null,function*(){const{config:e,cache:l,param:v}=R(d);let _=Object.assign({},e,l,v);yield G(_)}),{immediate:!0,deep:!0});function n(t,e){return Y(this,null,function*(){d.cache=Q({},t),d.param=Q({},e),d.status=!d.status})}M(()=>s.id,t=>{t?f():w.value=[]},{immediate:!0});function p(t){return Y(this,null,function*(){let e=[],l={},v=Object.keys(t);for(let r of v){const o=t[r];r==="sys_org_code"&&(o.fieldExtendJson||(o.fieldExtendJson='{"store":"orgCode"}'));let m=o.view;if(A[m]&&(o.view=A[m]),yield he(r,o,l),o.mode=="group"&&(m=="date"||m=="datetime"||m=="number")){let x=N.createSlotFormSchema(r,o);e.push(x)}else if(o.view===ge){let x=ye(o,r);for(let D of x){let V=N.createFormSchema(D.key,D),j=J(e,D.key);j==-1?e.push(V):e[j]=V}}else if(J(e,r)==-1){let x=N.createFormSchema(r,o);e.push(x)}}e.sort(function(r,o){return r.order-o.order});let _=[];e.length>2&&(F.value=!0);let g=[];for(let r=0;r<e.length;r++){let o=e[r];o.setFormRef(u),o.noChange(),o.asSearchForm(),r>1&&(g.push(o.field),o.isHidden());let m=o.getFormItemSchema();o.slot=="groupDatetime"&&(m.colProps={xs:24,sm:24,md:12,lg:8,xl:8}),B(m),_.push(m)}S.value=g,w.value=_,d.config=Q({},l),d.status=!d.status})}function f(){return Y(this,null,function*(){let t=yield Z(),e=X(t);a("loaded",t);let{formProperties:l,hasField:v}=K(e,t);if(v==!1){w.value=[];return}yield p(l)})}function G(t){return Y(this,null,function*(){yield ve(u),yield H(t),Object.keys(t).length>0&&P()})}function K(t,e){const{searchFieldList:l,joinQuery:v,table:_}=e;let g=!1,r={};return t&&Object.keys(t).map(o=>{l.indexOf(o)>=0&&(v==!0?o.indexOf("@")<0?(r[_+"@"+o]=t[o],g=!0):(r[o]=t[o],g=!0):o.indexOf("@")<0&&(r[o]=t[o],g=!0))}),{formProperties:r,hasField:g}}function X(t){const{properties:e,searchFieldList:l,joinQuery:v,table:_}=t;let g={},r=1;return Object.keys(e).map(o=>{let m=e[o];if(m.view=="table"){let x=m.properties,D=r*100;Object.keys(x).map(V=>{let j=x[V];j.order=D+Number(j.order);let ie=o+"@"+V;g[ie]=j}),r++}else m.order=Number(m.order),g[o]=m}),g}function Z(){let t=`${i}${s.id}`;return new Promise(e=>{ce.get({url:t},{isTransformResponse:!1}).then(l=>{l.success?e(l.result):(e(!1),U.warning(l.message))}).catch(()=>{U.warning("获取查询条件失败!"),e(!1)})})}const[ee,{resetFields:te,setFieldsValue:H,updateSchema:oe,getFieldsValue:re}]=we({schemas:w,showActionButtonGroup:!1,baseColProps:C,autoSubmitOnEnter:!0,submitFunc(){P()}});function P(){let t=re(),e=Object.assign({},R(d.param),le(t));a("search",e,!0)}function ae(){return Y(this,null,function*(){yield te();const{config:t,param:e}=R(d);let l=Object.assign({},t,e);Object.keys(l).length>0&&(yield H(l)),a("search",l,!1)})}function le(t){return Object.keys(t).map(e=>{t[e]&&t[e]instanceof Array&&(t[e]=t[e].join(","))}),t}return M(()=>y.value,t=>{let e=S.value;if(e&&e.length>0){let l=[];for(let v of e)l.push({field:v,show:t});oe(l)}},{immediate:!1}),{onlineQueryFormRef:u,registerForm:ee,initDefaultValues:n,toggleButtonShow:F,toggleSearchStatus:y,doSearch:P,resetSearch:ae,queryParams:h,formSchemas:w}}},T=s=>(ne("data-v-90f5c109"),s=s(),ue(),s),Oe={key:0,class:"jeecg-basic-table-form-container p-0"},ke=T(()=>I("span",{class:"group-query-string"},"~",-1)),je=T(()=>I("span",{class:"group-query-string"},"~",-1)),Ye=T(()=>I("span",{class:"group-query-string"},"~",-1)),De={style:{float:"left",overflow:"hidden","margin-left":"10px"},class:"table-page-search-submitButtons"};function Ve(s,a,i,u,w,C){const F=k("a-date-picker"),y=k("a-form-item-rest"),h=k("a-input-number"),S=k("a-button"),U=k("a-icon"),B=k("a-col"),d=k("BasicForm");return u.formSchemas&&u.formSchemas.length>0?(L(),q("div",Oe,[c(d,{ref:"onlineQueryFormRef",onRegister:u.registerForm},{groupDate:b(({model:n,field:p})=>[c(F,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"开始日期",value:n[p+"_begin"],"onUpdate:value":f=>n[p+"_begin"]=f,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"]),ke,c(y,null,{default:b(()=>[c(F,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"结束日期",value:n[p+"_end"],"onUpdate:value":f=>n[p+"_end"]=f,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"])]),_:2},1024)]),groupDatetime:b(({model:n,field:p})=>[c(F,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"开始时间",value:n[p+"_begin"],"onUpdate:value":f=>n[p+"_begin"]=f,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),je,c(y,null,{default:b(()=>[c(F,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"结束时间",value:n[p+"_end"],"onUpdate:value":f=>n[p+"_end"]=f,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),_:2},1024)]),groupNumber:b(({model:n,field:p})=>[c(h,{placeholder:"开始值",value:n[p+"_begin"],"onUpdate:value":f=>n[p+"_begin"]=f,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),Ye,c(y,null,{default:b(()=>[c(h,{placeholder:"结束值",value:n[p+"_end"],"onUpdate:value":f=>n[p+"_end"]=f,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),_:2},1024)]),formFooter:b(()=>[c(B,{md:6,sm:8},{default:b(()=>[I("span",De,[c(S,{preIcon:"ant-design:search",type:"primary",onClick:u.doSearch},{default:b(()=>[E("查询")]),_:1},8,["onClick"]),c(S,{preIcon:"ant-design:reload",type:"primary",onClick:u.resetSearch,style:{"margin-left":"8px"}},{default:b(()=>[E("重置")]),_:1},8,["onClick"]),u.toggleButtonShow?(L(),q("a",{key:0,onClick:a[0]||(a[0]=n=>u.toggleSearchStatus=!u.toggleSearchStatus),style:{"margin-left":"8px"}},[E(pe(u.toggleSearchStatus?"收起":"展开")+" ",1),c(U,{type:u.toggleSearchStatus?"up":"down"},null,8,["type"])])):W("",!0)])]),_:1})]),_:1},8,["onRegister"])])):W("",!0)}const Dt=de(_e,[["render",Ve],["__scopeId","data-v-90f5c109"]]);export{Dt as default};