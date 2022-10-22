import{l as J,F as I,dw as n,bH as D,eY as L,t as E,v as x,x as j,y as T,z as V,V as q,C as Q,W as z,B as W,aw as Y}from"./index.b3d2a891.js";import{u as G}from"./useTableSync.da28ddfa.js";import U from"./LinkTableConfigModal.a049b247.js";import X from"./LinkTableFieldConfigModal.e4518f1e.js";import"./index.2d23bddf.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import"./JAddInput.43004d14.js";import"./omit.d6518a29.js";import"./_baseClone.a8082016.js";import"./cgform.data.daae6320.js";import"./useForm.96d1836c.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./uniqBy.4cec2220.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./_baseSlice.23bb44df.js";var Z=Object.defineProperty,ee=Object.defineProperties,te=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,M=(t,o,s)=>o in t?Z(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,ie=(t,o)=>{for(var s in o||(o={}))ue.call(o,s)&&M(t,s,o[s]);if(S)for(var s of S(o))le.call(o,s)&&M(t,s,o[s]);return t},ae=(t,o)=>ee(t,te(o));const P=[{title:"\u6587\u672C\u6846",value:"text"},{title:"\u5BC6\u7801",value:"password"},{title:"\u4E0B\u62C9\u6846",value:"list"},{title:"\u5355\u9009\u6846",value:"radio"},{title:"\u591A\u9009\u6846",value:"checkbox"},{title:"\u5F00\u5173",value:"switch"},{title:"\u65E5\u671F(yyyy-MM-dd)",value:"date"},{title:"\u65E5\u671F\uFF08yyyy-MM-dd HH:mm:ss\uFF09",value:"datetime"},{title:"\u65F6\u95F4\uFF08HH:mm:ss\uFF09",value:"time"},{title:"\u6587\u4EF6",value:"file"},{title:"\u56FE\u7247",value:"image"},{title:"\u591A\u884C\u6587\u672C",value:"textarea"},{title:"\u4E0B\u62C9\u591A\u9009\u6846",value:"list_multi"},{title:"\u4E0B\u62C9\u641C\u7D22\u6846",value:"sel_search"},{title:"Popup\u5F39\u6846",value:"popup"},{title:"\u5173\u8054\u8BB0\u5F55",value:"link_table"},{title:"\u4ED6\u8868\u5B57\u6BB5",value:"link_table_field"},{title:"\u5206\u7C7B\u5B57\u5178\u6811",value:"cat_tree"},{title:"\u90E8\u95E8\u9009\u62E9",value:"sel_depart"},{title:"\u7528\u6237\u9009\u62E9",value:"sel_user"},{title:"\u5BCC\u6587\u672C",value:"umeditor"},{title:"MarkDown",value:"markdown"},{title:"\u7701\u5E02\u533A\u7EC4\u4EF6",value:"pca"},{title:"\u8054\u52A8\u7EC4\u4EF6",value:"link_down"},{title:"\u81EA\u5B9A\u4E49\u6811\u63A7\u4EF6",value:"sel_tree"}],oe=[{title:"\u6587\u672C\u6846",value:"text"},{title:"\u5355\u9009\u6846",value:"radio"},{title:"\u5F00\u5173",value:"switch"},{title:"\u65E5\u671F(yyyy-MM-dd)",value:"date"},{title:"\u65E5\u671F\uFF08yyyy-MM-dd HH:mm:ss\uFF09",value:"datetime"},{title:"\u65F6\u95F4\uFF08HH:mm:ss\uFF09",value:"time"},{title:"\u6587\u4EF6",value:"file"},{title:"\u56FE\u7247",value:"image"},{title:"\u4E0B\u62C9\u6846",value:"list"},{title:"\u4E0B\u62C9\u591A\u9009\u6846",value:"list_multi"},{title:"\u4E0B\u62C9\u641C\u7D22\u6846",value:"sel_search"},{title:"popup\u5F39\u51FA\u6846",value:"popup"},{title:"\u90E8\u95E8\u9009\u62E9",value:"sel_depart"},{title:"\u7528\u6237\u9009\u62E9",value:"sel_user"},{title:"\u591A\u884C\u6587\u672C",value:"textarea"}],se=J({name:"PageAttributeTable",components:{LinkTableConfigModal:U,LinkTableFieldConfigModal:X},setup(){const t=I([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",width:100},{title:"\u5B57\u6BB5\u5907\u6CE8",key:"dbFieldTxt",width:100},{title:"\u8868\u5355\u663E\u793A",key:"isShowForm",width:80,type:n.checkbox,align:"center",customValue:["1","0"],defaultChecked:!0},{title:"\u5217\u8868\u663E\u793A",key:"isShowList",width:80,type:n.checkbox,align:"center",customValue:["1","0"],defaultChecked:!0},{title:"\u662F\u5426\u6392\u5E8F",key:"sortFlag",width:80,type:n.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"\u662F\u5426\u53EA\u8BFB",key:"isReadOnly",width:80,type:n.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"\u63A7\u4EF6\u7C7B\u578B",key:"fieldShowType",width:170,type:n.select,options:P,defaultValue:"text",placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"},{handler:_}]},{title:"\u63A7\u4EF6\u957F\u5EA6",key:"fieldLength",width:120,type:n.inputNumber,defaultValue:120,placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]},{title:"\u662F\u5426\u67E5\u8BE2",key:"isQuery",width:80,type:n.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"\u67E5\u8BE2\u7C7B\u578B",key:"queryMode",width:110,type:n.select,options:[{title:"\u666E\u901A\u67E5\u8BE2",value:"single"},{title:"\u8303\u56F4\u67E5\u8BE2",value:"group"}],defaultValue:"single",placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}]},{title:"\u63A7\u4EF6\u9ED8\u8BA4\u503C",key:"fieldDefaultValue",width:120,type:n.input,defaultValue:""},{title:"\u6269\u5C55\u53C2\u6570",key:"fieldExtendJson",width:120,type:n.input,defaultValue:""},{title:"\u5B9A\u4E49\u8F6C\u6362\u5668",key:"converter",width:150,type:n.input,defaultValue:""},{title:"\u4E2A\u6027\u914D\u7F6E",minWidth:100,key:"fieldConfig",type:n.slot,slotName:"fieldConfig"}]),o=G(t),{tableRef:s,tables:c}=o;function _({cellValue:e,row:u},r){let{dbTable:d}=c,l=d.value.tableRef.getTableData({rowIds:[u.id]})[0].dbType;e==="time"&&l!=="string"?r(!1,"\u5F53\u63A7\u4EF6\u7C7B\u578B\u4E3A\u65F6\u95F4\u65F6,\u6570\u636E\u5E93\u5C5E\u6027\u91CC\u7684\u5B57\u6BB5\u7C7B\u578B\u5FC5\u987B\u662FString\uFF01"):e==="date"&&l!=="Date"&&l!=="Datetime"?r(!1,"\u5F53\u63A7\u4EF6\u7C7B\u578B\u4E3A\u65E5\u671F\u65F6\uFF0C\u6570\u636E\u5E93\u5C5E\u6027\u91CC\u7684\u5B57\u6BB5\u7C7B\u578B\u5FC5\u987B\u662FDate\u6216Datetime\uFF01"):e==="datetime"&&l!=="Datetime"?r(!1,"\u5F53\u63A7\u4EF6\u7C7B\u578B\u4E3Adatetime\u65F6\uFF0C\u6570\u636E\u5E93\u5C5E\u6027\u91CC\u7684\u5B57\u6BB5\u7C7B\u578B\u5FC5\u987B\u662FDatetime\uFF01"):r(!0)}function k(e){let u="date";e.dbType==="Datetime"&&(u="datetime"),s.value.setValues([{rowKey:e.id,values:{fieldShowType:u}}])}function g(e){for(let u of t.value)if(u.key=="fieldShowType"){u.options=e?oe:P;break}}function C(e){s.value.setValues([{rowKey:e,values:{isQuery:"1"}}])}const[w,{openModal:B}]=D(),[v,{openModal:A}]=D();function O(e){return e.row.fieldShowType.indexOf("link_table")>=0}function N(e){let{row:u}=e,{checkTable:r}=c;if(r){let d=r.value.tableRef.getTableData({rowIds:[u.id]})[0];if(e.row.fieldShowType=="link_table"){let l=H(u,d);B(!0,{record:l,fieldName:u.dbFieldName})}else if(e.row.fieldShowType=="link_table_field"){let l=R(u,d);A(!0,l)}}}function R(e,u){let d=s.value.getTableData().filter(b=>b.fieldShowType=="link_table"),l={};if(d&&d.length>0){let b=c.checkTable.value.tableRef.getTableData();for(let h of d){let y=b.filter(f=>f.dbFieldName==h.dbFieldName);if(y&&y.length>0){let f=y[0];l[f.dbFieldName]={title:h.dbFieldTxt,table:f.dictTable,fields:f.dictText}}}}const{dictTable:m,dictText:p}=u,{id:i,dbFieldTxt:a}=e;return{record:{rowKey:i,dbFieldTxt:a,dictText:p,dictTable:m},tableAndFieldsMap:l}}function H(e,u){const{id:r,dbFieldTxt:d,fieldExtendJson:l}=e,{dictTable:m,dictText:p}=u;let i={rowKey:r,dbFieldTxt:d,dictTable:m};if(p){let a=p.split(",");i.titleField=a[0],a.length>1&&(i.otherFields=p.substring(p.indexOf(",")+1))}else i.titleField="",i.otherFields="";if(l)try{let a=JSON.parse(l);a.multiSelect?i.multiSelect=a.multiSelect:i.multiSelect=!1,a.showType?i.showType=a.showType:i.showType="card",a.imageField?i.imageField=a.imageField:i.imageField=""}catch(a){console.error("\u89E3\u6790\u6269\u5C55\u53C2\u6570\u51FA\u9519",l)}return i}function K(e){const{multiSelect:u,showType:r,imageField:d,fieldName:l}=e;let m={showType:r,multiSelect:u,imageField:d},p=[{rowKey:e.rowKey,values:{fieldExtendJson:JSON.stringify(m),dbFieldTxt:e.dbFieldTxt}}];s.value.setValues(p);let{checkTable:i,dbTable:a}=c;if(a){let F=[{rowKey:e.rowKey,values:{dbFieldTxt:e.dbFieldTxt}}];a.value.tableRef.setValues(F)}if(i){let F=e.titleField;e.otherFields&&(F+=","+e.otherFields);const{dictTable:b,dictField:h}=e;let y={dictTable:b,dictField:h,dictText:F,dbFieldName:l},f=[{rowKey:e.rowKey,values:y}];i.value.tableRef.setValues(f)}}function $(e){const{dbFieldTxt:u,dictTable:r,dictText:d,rowKey:l}=e;let m=[{rowKey:l,values:{dbFieldTxt:u}}];s.value.setValues(m);let{checkTable:p,dbTable:i}=c;if(i){let a=[{rowKey:l,values:{dbFieldTxt:u,dbIsPersist:"0"}}];i.value.tableRef.setValues(a)}if(p){let a=[{rowKey:l,values:{dictTable:r,dictText:d}}];p.value.tableRef.setValues(a)}}return ae(ie({},o),{columns:t,enableQuery:C,syncFieldShowType:k,changePageType:g,showConfigButton:O,showFieldConfig:N,registerModal:w,handleConfigData:K,registerFieldModal:v,handleFieldConfigData:$})}});function re(t,o,s,c,_,k){const g=E("a-button"),C=E("JVxeTable"),w=E("link-table-config-modal"),B=E("link-table-field-config-modal");return x(),j(Y,null,[T(C,W({ref:"tableRef","row-class-name":"online-config-page",rowNumber:"",keyboardEdit:"",maxHeight:t.tableHeight.noToolbar,loading:t.loading,columns:t.columns,dataSource:t.dataSource,disabledRows:{dbFieldName:["id","has_child"]}},t.tableProps),{fieldConfig:V(v=>[t.showConfigButton(v)?(x(),q(g,{key:0,type:"primary",size:"small",ghost:"",onClick:A=>t.showFieldConfig(v)},{default:V(()=>[Q("\u6253\u5F00\u914D\u7F6E")]),_:2},1032,["onClick"])):z("",!0)]),_:1},16,["maxHeight","loading","columns","dataSource"]),T(w,{onRegister:t.registerModal,onSuccess:t.handleConfigData},null,8,["onRegister","onSuccess"]),T(B,{onRegister:t.registerFieldModal,onSuccess:t.handleFieldConfigData},null,8,["onRegister","onSuccess"])],64)}var Xe=L(se,[["render",re],["__scopeId","data-v-eb3d4aa4"]]);export{Xe as default};
