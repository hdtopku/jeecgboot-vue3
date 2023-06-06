import{j as V,C as I,c9 as L,q as R,r as s,s as o,Q as u,w as t,aW as m,z as d,t as y,v as r,ax as f,B as n,bc as $,y as A,dt as N,du as W}from"./index.0be4b5b8.js";import{e as z,q as K,l as Q,r as G,f as X,n as Z,J as c,C as _}from"./JAddInput.d2fd0723.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import{J as x}from"./componentMap.6d6ce384.js";import"./areaDataUtil.04b478e5.js";import"./useFormItem.77c38aa9.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./api.dbe6bd39.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./uniqBy.a356d751.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./index.145a7e75.js";var U=(e=>(e.Date="date",e.Datetime="datetime",e.Time="time",e))(U||{});const E=V({name:"JPopupOnlReport",components:{JDictSelectTag:z,JTreeSelect:K,JCategorySelect:Q,JSelectUserByDept:G,JSelectDept:X,JPopup:Z,JAreaLinkage:c,JInput:x},props:{formElRef:{type:Object,default:()=>{}},item:{type:Object,default:()=>{},required:!0},dictOptions:{type:Object,default:()=>{},required:!0},queryParam:{type:Object,default:()=>{},required:!0}},setup(e){const l=I("single");console.log("dictOptions===>",e.dictOptions);function D(i){return i.dictTable&&i.dictTable.length>0?i.dictTable+","+i.dictText+","+i.dictCode:i.dictCode}function T(i){let{dictTable:q,dictCode:F,dictText:P}=i,b=q.toLowerCase().split("where"),v="";b.length>1&&(v=" where"+b[1]);let C="select "+F+" as 'value', "+P+" as 'text' from "+b[0]+v;return console.log("sql",C),C}function k(i){return i.dbField?i.dbField:i.field}const h="120px";return{labelTextMaxWidth:h,labelCol:{style:{"max-width":h}},single_mode:l,getDictOptionKey:k,getDictCode:D,getSqlByDictCode:T,DateTypeEnum:U,CompTypeEnum:_}}}),B=()=>{L(e=>({fc44dd1c:e.labelTextMaxWidth}))},J=E.setup;E.setup=J?(e,l)=>(B(),J(e,l)):B;const ee=E;const g=e=>(N("data-v-dc161c16"),e=e(),W(),e),le=["title"],ae=g(()=>m("span",{class:"group-query-strig"},"~",-1)),ie=["title"],oe=g(()=>m("span",{class:"group-query-strig",style:{width:"auto",padding:"0 4px"}},"~",-1)),te=["title"],ue=g(()=>m("span",{class:"group-query-strig"},"~",-1)),me=["title"],re=["title"],se=["title"],de=["title"],ne=["title"],pe=["title"],be=["title"],ye=["title"],fe=["title"],ve=g(()=>m("span",{class:"group-query-strig"},"~",-1));function Ce(e,l,D,T,k,h){const p=s("a-date-picker"),i=s("a-form-item"),q=s("JDictSelectTag"),F=s("a-select-option"),P=s("a-select"),S=s("JTreeSelect"),b=s("JCategorySelect"),v=s("JOnlineSearchSelect"),C=s("JSelectUserByDept"),Y=s("JSelectDept"),j=s("JPopup"),M=s("JAreaLinkage"),O=s("j-input"),w=s("a-input");return e.item.view===e.DateTypeEnum.Date?(o(),u(i,{key:0,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,le)]),default:t(()=>[e.single_mode===e.item.mode?(o(),u(p,{key:0,showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[0]||(l[0]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])):(o(),y(f,{key:1},[r(p,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u5F00\u59CB\u65E5\u671F",value:e.queryParam[e.item.field+"_begin"],"onUpdate:value":l[1]||(l[1]=a=>e.queryParam[e.item.field+"_begin"]=a),style:{width:"calc(50% - 15px)"}},null,8,["value"]),ae,r(p,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u7ED3\u675F\u65E5\u671F",value:e.queryParam[e.item.field+"_end"],"onUpdate:value":l[2]||(l[2]=a=>e.queryParam[e.item.field+"_end"]=a),style:{width:"calc(50% - 15px)"}},null,8,["value"])],64))]),_:1},8,["labelCol"])):e.item.view===e.DateTypeEnum.Datetime?(o(),u(i,{key:1,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,ie)]),default:t(()=>[e.single_mode===e.item.mode?(o(),u(p,{key:0,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,"show-time":!0,valueFormat:"YYYY-MM-DD HH:mm:ss",value:e.queryParam[e.item.field],"onUpdate:value":l[3]||(l[3]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])):(o(),y(f,{key:1},[r(p,{placeholder:"\u9009\u62E9\u5F00\u59CB\u65F6\u95F4","show-time":!0,valueFormat:"YYYY-MM-DD HH:mm:ss",value:e.queryParam[e.item.field+"_begin"],"onUpdate:value":l[4]||(l[4]=a=>e.queryParam[e.item.field+"_begin"]=a),style:{width:"calc(50% - 9px)","min-width":"60px"}},null,8,["value"]),oe,r(p,{placeholder:"\u9009\u62E9\u7ED3\u675F\u65F6\u95F4","show-time":!0,valueFormat:"YYYY-MM-DD HH:mm:ss",value:e.queryParam[e.item.field+"_end"],"onUpdate:value":l[5]||(l[5]=a=>e.queryParam[e.item.field+"_end"]=a),style:{width:"calc(50% - 9px)","min-width":"60px"}},null,8,["value"])],64))]),_:1},8,["labelCol"])):e.item.view===e.DateTypeEnum.Time?(o(),u(i,{key:2,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,te)]),default:t(()=>[e.single_mode===e.item.mode?(o(),u(p,{key:0,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,mode:"time",valueFormat:"HH:mm:ss",value:e.queryParam[e.item.field],"onUpdate:value":l[6]||(l[6]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])):(o(),y(f,{key:1},[r(p,{placeholder:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4",mode:"time",valueFormat:"HH:mm:ss",value:e.queryParam[e.item.field+"_begin"],"onUpdate:value":l[7]||(l[7]=a=>e.queryParam[e.item.field+"_begin"]=a),style:{width:"calc(50% - 15px)"}},null,8,["value"]),ue,r(p,{placeholder:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",mode:"time",valueFormat:"HH:mm:ss",value:e.queryParam[e.item.field+"_end"],"onUpdate:value":l[8]||(l[8]=a=>e.queryParam[e.item.field+"_end"]=a),style:{width:"calc(50% - 15px)"}},null,8,["value"])],64))]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.List||e.item.view===e.CompTypeEnum.Radio||e.item.view===e.CompTypeEnum.Switch?(o(),u(i,{key:3,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,me)]),default:t(()=>[e.item.config==="1"?(o(),u(q,{key:0,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,modelValue:e.queryParam[e.item.field],"onUpdate:modelValue":l[9]||(l[9]=a=>e.queryParam[e.item.field]=a),dictCode:e.getDictCode(e.item)},null,8,["placeholder","modelValue","dictCode"])):(o(),u(P,{key:1,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[10]||(l[10]=a=>e.queryParam[e.item.field]=a)},{default:t(()=>[(o(!0),y(f,null,$(e.dictOptions[e.getDictOptionKey(e.item)],(a,H)=>(o(),u(F,{key:H,value:a.value},{default:t(()=>[A(d(a.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["placeholder","value"]))]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.SelTree?(o(),u(i,{key:4,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,re)]),default:t(()=>[r(S,{placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[11]||(l[11]=a=>e.queryParam[e.item.field]=a),dict:e.item.dict,pidField:e.item.pidField,pidValue:e.item.pidValue,hasChildField:e.item.hasChildField,"load-triggle-change":""},null,8,["placeholder","value","dict","pidField","pidValue","hasChildField"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.CatTree?(o(),u(i,{key:5,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,se)]),default:t(()=>[r(b,{pcode:e.item.pcode,value:e.queryParam[e.item.field],"onUpdate:value":l[12]||(l[12]=a=>e.queryParam[e.item.field]=a),placeholder:"\u8BF7\u9009\u62E9"+e.item.label},null,8,["pcode","value","placeholder"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.SelSearch?(o(),u(i,{key:6,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,de)]),default:t(()=>[r(v,{value:e.queryParam[e.item.field],"onUpdate:value":l[13]||(l[13]=a=>e.queryParam[e.item.field]=a),placeholder:"\u8BF7\u9009\u62E9"+e.item.label,sql:e.item.sql},null,8,["value","placeholder","sql"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.SelUser?(o(),u(i,{key:7,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,ne)]),default:t(()=>[r(C,{value:e.queryParam[e.item.field],"onUpdate:value":l[14]||(l[14]=a=>e.queryParam[e.item.field]=a),placeholder:"\u8BF7\u9009\u62E9"+e.item.label},null,8,["value","placeholder"])]),_:1},8,["labelCol"])):e.item.view==e.CompTypeEnum.SelDepart?(o(),u(i,{key:8,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,pe)]),default:t(()=>[r(Y,{value:e.queryParam[e.item.field],"onUpdate:value":l[15]||(l[15]=a=>e.queryParam[e.item.field]=a),placeholder:"\u8BF7\u9009\u62E9"+e.item.label},null,8,["value","placeholder"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.Popup?(o(),u(i,{key:9,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,be)]),default:t(()=>[r(j,{placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[16]||(l[16]=a=>e.queryParam[e.item.field]=a),formElRef:e.formElRef,code:e.item.dictTable,"field-config":e.item.dictCode,multi:!0},null,8,["placeholder","value","formElRef","code","field-config"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.Pca?(o(),u(i,{key:10,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,ye)]),default:t(()=>[r(M,{placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[17]||(l[17]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])]),_:1},8,["labelCol"])):e.item.view===e.CompTypeEnum.Checkbox||e.item.view===e.CompTypeEnum.ListMulti?(o(),u(i,{key:11,labelCol:e.labelCol,label:e.item.label,class:n("jeecg-online-search")},null,8,["labelCol","label"])):(o(),u(i,{key:12,labelCol:e.labelCol,class:n("jeecg-online-search")},{label:t(()=>[m("span",{title:e.item.label,class:"label-text"},d(e.item.label),9,fe)]),default:t(()=>[e.single_mode===e.item.mode&&e.item.view=="string"?(o(),u(O,{key:0,placeholder:"\u8BF7\u8F93\u5165"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[18]||(l[18]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])):e.single_mode===e.item.mode?(o(),u(w,{key:1,placeholder:"\u8BF7\u8F93\u5165"+e.item.label,value:e.queryParam[e.item.field],"onUpdate:value":l[19]||(l[19]=a=>e.queryParam[e.item.field]=a)},null,8,["placeholder","value"])):(o(),y(f,{key:2},[r(w,{placeholder:"\u8BF7\u8F93\u5165\u5F00\u59CB"+e.item.label,value:e.queryParam[e.item.field+"_begin"],"onUpdate:value":l[20]||(l[20]=a=>e.queryParam[e.item.field+"_begin"]=a),style:{width:"calc(50% - 15px)"}},null,8,["placeholder","value"]),ve,r(w,{placeholder:"\u8BF7\u8F93\u5165\u7ED3\u675F"+e.item.label,value:e.queryParam[e.item.field+"_end"],"onUpdate:value":l[21]||(l[21]=a=>e.queryParam[e.item.field+"_end"]=a),style:{width:"calc(50% - 15px)"}},null,8,["placeholder","value"])],64))]),_:1},8,["labelCol"]))}const ze=R(ee,[["render",Ce],["__scopeId","data-v-dc161c16"]]);export{ze as default};