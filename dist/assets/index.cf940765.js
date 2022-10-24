var H=Object.defineProperty,O=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))G.call(e,t)&&D(n,t,e[t]);if(x)for(var t of x(e))J.call(e,t)&&D(n,t,e[t]);return n},y=(n,e)=>O(n,q(e));var b=(n,e,t)=>new Promise((_,u)=>{var f=a=>{try{p(t.next(a))}catch(s){u(s)}},h=a=>{try{p(t.throw(a))}catch(s){u(s)}},p=a=>a.done?_(a.value):Promise.resolve(a.value).then(f,h);p((t=t.apply(n,e)).next())});import{B as Q}from"./BasicTable.0cbd4b1b.js";import{T as X}from"./helper.6c15aaa9.js";import"./TableImg.e94b6b60.js";import{useListPage as Y}from"./useListPage.9b802bc6.js";import{a as F}from"./index.a4221efd.js";import Z from"./MenuDrawer.02692dd6.js";import ee from"./DataRuleList.8fd9f3a4.js";import{l as te,h as oe,i as ne,j as ie,k as re}from"./menu.data.c5b0dc66.js";import{l as T,F as A,t as c,v,x as ae,y as i,z as r,L as l,V as le,W as ue,C as m}from"./index.a1b4e527.js";import"./BasicForm.77adc039.js";import"./uniqBy.cec7465a.js";import"./index.ea6d1b33.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./useForm.db279587.js";import"./JAddInput.20a0408b.js";import"./useFormItem.f45f8681.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./index.6fc95f6c.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";import"./RedoOutlined.9c68e676.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";import"./useTable.dfabdbf5.js";import"./useAdaptiveWidth.8f1f6468.js";import"./user.api.790518f7.js";import"./renderUtils.ec63b001.js";import"./validator.db5ea725.js";import"./DataRuleModal.6eb69e21.js";const se={class:"p-4"},ce=m(" \u65B0\u589E\u83DC\u5355"),me=m("\u5C55\u5F00\u5168\u90E8"),pe=m("\u6298\u53E0\u5168\u90E8"),de=m(" \u5220\u9664 "),_e=m("\u6279\u91CF\u64CD\u4F5C "),fe=T({name:"system-menu"}),dt=T(y(k({},fe),{setup(n){const e=A([]),t=A(!0),[_,{openDrawer:u}]=F(),[f,{openDrawer:h}]=F(),{prefixCls:p,tableContext:a}=Y({tableProps:{title:"\u83DC\u5355\u5217\u8868",api:te,columns:oe,size:"small",pagination:!1,isTreeTable:!0,striped:!0,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},formConfig:{schemas:ne,autoAdvancedCol:4,baseColProps:{xs:24,sm:12,md:6,lg:6,xl:6,xxl:6},actionColOptions:{xs:24,sm:12,md:6,lg:6,xl:6,xxl:6}},actionColumn:{width:120}}}),[s,{reload:C,expandAll:E,collapseAll:S}]=a,B={type:"checkbox",columnWidth:30,selectedRowKeys:e,onChange:R};function R(o){e.value=o}function I(){t.value=!0,u(!0,{isUpdate:!1})}function V(o){t.value=!0,u(!0,{record:o,isUpdate:!0})}function N(o){u(!0,{record:{parentId:o.id,menuType:1},isUpdate:!1})}function P(o){h(!0,{id:o.id})}function U(o){return b(this,null,function*(){yield re({id:o.id},C)})}function z(){return b(this,null,function*(){yield ie({ids:e.value},C)})}function K(){C()}function L(o){return[{label:"\u7F16\u8F91",onClick:V.bind(null,o)}]}function M(o){return[{label:"\u6DFB\u52A0\u4E0B\u7EA7",onClick:N.bind(null,o)},{label:"\u6570\u636E\u89C4\u5219",onClick:P.bind(null,o)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:U.bind(null,o)}}]}return(o,he)=>{const d=c("a-button"),g=c("Icon"),W=c("a-menu-item"),$=c("a-menu"),j=c("a-dropdown");return v(),ae("div",se,[i(l(Q),{onRegister:l(s),rowSelection:B},{tableTitle:r(()=>[i(d,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:I},{default:r(()=>[ce]),_:1}),i(d,{type:"primary",preIcon:"ic:round-expand",onClick:l(E)},{default:r(()=>[me]),_:1},8,["onClick"]),i(d,{type:"primary",preIcon:"ic:round-compress",onClick:l(S)},{default:r(()=>[pe]),_:1},8,["onClick"]),e.value.length>0?(v(),le(j,{key:0},{overlay:r(()=>[i($,null,{default:r(()=>[i(W,{key:"1",onClick:z},{default:r(()=>[i(g,{icon:"ant-design:delete-outlined"}),de]),_:1})]),_:1})]),default:r(()=>[i(d,null,{default:r(()=>[_e,i(g,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):ue("",!0)]),action:r(({record:w})=>[i(l(X),{actions:L(w),dropDownActions:M(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),i(Z,{onRegister:l(_),onSuccess:K,showFooter:t.value},null,8,["onRegister","showFooter"]),i(ee,{onRegister:l(f)},null,8,["onRegister"])])}}}));export{dt as default};