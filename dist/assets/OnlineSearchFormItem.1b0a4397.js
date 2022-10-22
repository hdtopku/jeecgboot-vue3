import{l as W,F as O,H as C,eY as H,cf as G,t as o,v as i,V as n,z as w,aV as J,D as N,x as p,aw as m,y as h,bb as Q,C as R,B as $,E as X,dl as Z,dm as _}from"./index.b3d2a891.js";import"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{e as x,q as ee,l as le,b as te,r as ae,f as ie,n as ne,J as ue,g as oe,m as re}from"./JAddInput.43004d14.js";import de from"./JOnlineSearchSelect.5559ac1a.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";var se=Object.defineProperty,A=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,K=(e,l,u)=>l in e?se(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,ve=(e,l)=>{for(var u in l||(l={}))pe.call(l,u)&&K(e,u,l[u]);if(A)for(var u of A(l))me.call(l,u)&&K(e,u,l[u]);return e};const P=W({name:"OnlineSearchFormItem",components:{JOnlineSearchSelect:de,JDictSelectTag:x,JTreeSelect:ee,JCategorySelect:le,JSelectUser:te,JSelectUserByDept:ae,JSelectDept:ie,JPopup:ne,JAreaLinkage:ue,JAreaSelect:oe,JSelectMultiple:re},props:{value:{type:String,default:""},item:{type:Object,default:()=>{},required:!0},dictOptions:{type:Object,default:()=>{},required:!1},onlineForm:{type:Object,default:()=>{},required:!1}},emits:["update:value","change"],setup(e,{emit:l}){const u="120px",q={style:{"max-width":u}},j="single";let y=O(""),s=O(""),f=O("");C(()=>e.value,()=>{F()?y.value=e.value?e.value:void 0:y.value=e.value,e.value||(s.value="",f.value="")},{deep:!0,immediate:!0}),C(y,a=>{console.log("innerValue-change",a),l("update:value",a)},{immediate:!0}),C(s,a=>{l("change",e.item.field+"_begin",a),l("update:value","1")}),C(f,a=>{l("change",e.item.field+"_end",a),l("update:value","1")});function D(a){return console.log("ddictOptions",e.dictOptions),a.dbField?a.dbField:a.field}function F(){let a=e.item;return a?a.view=="list"||a.view=="radio"||a.view=="switch":!1}function k(){let a=e.item;return a.dictTable&&a.dictTable.length>0?a.dictTable+","+a.dictText+","+a.dictCode:a.dictCode}function E(){let a=e.item,{dictTable:t,dictCode:v,dictText:d}=a,g=t.toLowerCase().split("where"),r="";g.length>1&&(r=" where"+g[1]);let I="select "+v+" as 'value', "+d+" as 'text' from "+g[0]+r;return console.log("sql",I),I}function T(a){let{dictText:t,dictCode:v}=a;if(!t||t.length==0)return[];let d=t.split(","),c=v.split(","),g=[];for(let r=0;r<d.length;r++)g.push({target:d[r],source:c[r]});return g}function B(a){let{dictText:t}=e.item,d=t.split(",")[0];l("change",d,a[d])}function Y(a){l("update:value",a)}function b(a,t,v){let d={labelKey:t,rowKey:v},c=a.fieldExtendJson;if(c&&typeof c=="string"){let g=JSON.parse(c),r=ve({},g);r.text&&(d.labelKey=r.text),r.store&&(d.rowKey=r.store)}return d}let S=b(e.item,"realname","username");console.log("userSelectProp",S);let U=b(e.item,"departName","id");function V(a){a&&a.length>0?l("update:value",a.join(",")):l("update:value","")}return{getPopupFieldConfig:T,userSelectProp:S,depSelectProp:U,handleSelectChange:V,setFieldsValue:B,innerValue:y,beginValue:s,endValue:f,isEasySelect:F,getDictOptionKey:D,getDictCode:k,labelTextMaxWidth:u,labelCol:q,single_mode:j,getSqlByDictCode:E,handleCategoryTreeChange:Y}}}),L=()=>{G(e=>({"0c8831e5":e.labelTextMaxWidth}))},z=P.setup;P.setup=z?(e,l)=>(L(),z(e,l)):L;const ge=P,M=e=>(Z("data-v-31eb536e"),e=e(),_(),e),fe=["title"],ce=M(()=>J("span",{class:"group-query-strig"},"~",-1)),he=M(()=>J("span",{class:"group-query-strig"},"~",-1)),ye=M(()=>J("span",{class:"group-query-strig"},"~",-1));function Ve(e,l,u,q,j,y){const s=o("a-date-picker"),f=o("JDictSelectTag"),D=o("a-select-option"),F=o("a-select"),k=o("JTreeSelect"),E=o("JCategorySelect"),T=o("JOnlineSearchSelect"),B=o("JSelectUser"),Y=o("JSelectDept"),b=o("JPopup"),S=o("JAreaSelect"),U=o("JSelectMultiple"),V=o("a-input"),a=o("a-form-item");return i(),n(a,{labelCol:e.labelCol,class:X("jeecg-online-search")},{label:w(()=>[J("span",{title:e.item.label,class:"label-text"},N(e.item.label),9,fe)]),default:w(()=>[e.item.view=="date"?(i(),p(m,{key:0},[e.single_mode===e.item.mode?(i(),n(s,{key:0,style:{width:"100%"},showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[0]||(l[0]=t=>e.innerValue=t)},null,8,["placeholder","value"])):(i(),p(m,{key:1},[h(s,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u5F00\u59CB\u65E5\u671F",value:e.beginValue,"onUpdate:value":l[1]||(l[1]=t=>e.beginValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"]),ce,h(s,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u7ED3\u675F\u65E5\u671F",value:e.endValue,"onUpdate:value":l[2]||(l[2]=t=>e.endValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"])],64))],64)):e.item.view=="datetime"?(i(),p(m,{key:1},[e.single_mode===e.item.mode?(i(),n(s,{key:0,style:{width:"100%"},showTime:!0,valueFormat:"YYYY-MM-DD hh:mm:ss",placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[3]||(l[3]=t=>e.innerValue=t)},null,8,["placeholder","value"])):(i(),p(m,{key:1},[h(s,{showTime:!0,valueFormat:"YYYY-MM-DD hh:mm:ss",placeholder:"\u5F00\u59CB\u65F6\u95F4",value:e.beginValue,"onUpdate:value":l[4]||(l[4]=t=>e.beginValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"]),he,h(s,{showTime:!0,valueFormat:"YYYY-MM-DD hh:mm:ss",placeholder:"\u7ED3\u675F\u65F6\u95F4",value:e.endValue,"onUpdate:value":l[5]||(l[5]=t=>e.endValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"])],64))],64)):e.isEasySelect()?(i(),p(m,{key:2},[e.item.config==="1"?(i(),n(f,{key:0,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[6]||(l[6]=t=>e.innerValue=t),dictCode:e.getDictCode()},null,8,["placeholder","value","dictCode"])):(i(),n(F,{key:1,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[7]||(l[7]=t=>e.innerValue=t)},{default:w(()=>[(i(!0),p(m,null,Q(e.dictOptions[e.getDictOptionKey(e.item)],(t,v)=>(i(),n(D,{key:v,value:t.value},{default:w(()=>[R(N(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["placeholder","value"]))],64)):e.item.view==="sel_tree"?(i(),n(k,{key:3,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[8]||(l[8]=t=>e.innerValue=t),dict:e.item.dict,pidField:e.item.pidField,pidValue:e.item.pidValue,hasChildField:e.item.hasChildField,"load-triggle-change":""},null,8,["placeholder","value","dict","pidField","pidValue","hasChildField"])):e.item.view==="cat_tree"?(i(),n(E,{key:4,onChange:e.handleCategoryTreeChange,loadTriggleChange:!0,pcode:e.item.pcode,value:e.innerValue,"onUpdate:value":l[9]||(l[9]=t=>e.innerValue=t),placeholder:"\u8BF7\u9009\u62E9"+e.item.label},null,8,["onChange","pcode","value","placeholder"])):e.item.view==="sel_search"?(i(),p(m,{key:5},[e.item.config==="1"?(i(),n(f,{key:0,value:e.innerValue,"onUpdate:value":l[10]||(l[10]=t=>e.innerValue=t),placeholder:"\u8BF7\u9009\u62E9"+e.item.label,dict:e.getDictCode()},null,8,["value","placeholder","dict"])):(i(),n(T,{key:1,value:e.innerValue,"onUpdate:value":l[11]||(l[11]=t=>e.innerValue=t),placeholder:"\u8BF7\u9009\u62E9"+e.item.label,sql:e.getSqlByDictCode()},null,8,["value","placeholder","sql"]))],64)):e.item.view=="sel_user"?(i(),n(B,$({key:6},e.userSelectProp,{value:e.innerValue,"onUpdate:value":l[12]||(l[12]=t=>e.innerValue=t),placeholder:"\u8BF7\u9009\u62E9"+e.item.label}),null,16,["value","placeholder"])):e.item.view=="sel_depart"?(i(),n(Y,$({key:7,showButton:!1},e.depSelectProp,{value:e.innerValue,"onUpdate:value":l[13]||(l[13]=t=>e.innerValue=t),placeholder:"\u8BF7\u9009\u62E9"+e.item.label}),null,16,["value","placeholder"])):e.item.view=="popup"?(i(),n(b,{key:8,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[14]||(l[14]=t=>e.innerValue=t),code:e.item.dictTable,setFieldsValue:e.setFieldsValue,"field-config":e.getPopupFieldConfig(e.item),multi:!0},null,8,["placeholder","value","code","setFieldsValue","field-config"])):e.item.view=="pca"?(i(),n(S,{key:9,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[15]||(l[15]=t=>e.innerValue=t)},null,8,["placeholder","value"])):e.item.view=="checkbox"||e.item.view=="list_multi"?(i(),n(U,{key:10,dictCode:e.getDictCode(),placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[16]||(l[16]=t=>e.innerValue=t)},null,8,["dictCode","placeholder","value"])):(i(),p(m,{key:11},[e.single_mode===e.item.mode?(i(),n(V,{key:0,placeholder:"\u8BF7\u9009\u62E9"+e.item.label,value:e.innerValue,"onUpdate:value":l[17]||(l[17]=t=>e.innerValue=t)},null,8,["placeholder","value"])):(i(),p(m,{key:1},[h(V,{placeholder:"\u5F00\u59CB\u503C",value:e.beginValue,"onUpdate:value":l[18]||(l[18]=t=>e.beginValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"]),ye,h(V,{placeholder:"\u7ED3\u675F\u503C",value:e.endValue,"onUpdate:value":l[19]||(l[19]=t=>e.endValue=t),style:{width:"calc(50% - 15px)"}},null,8,["value"])],64))],64))]),_:1},8,["labelCol"])}var Ze=H(ge,[["render",Ve],["__scopeId","data-v-31eb536e"]]);export{Ze as default};
