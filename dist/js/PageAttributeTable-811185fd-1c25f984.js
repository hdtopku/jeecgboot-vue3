import{d as A,l as W,V as h,a7 as N,a8 as z,F as G,f as v,af as U,aa as R,ac as X,E as Y,W as Z}from"./vue-ebecda47.js";import{ak as u,F as S}from"./index-85cfc899.js";import{L as ee}from"./useTableSync-dc333087-3f08a785.js";import te from"./LinkTableConfigModal-77d7c0b9-df47ed5c.js";import le from"./LinkTableFieldConfigModal-c5689ab0-c963fff7.js";import ie from"./FieldExtendJsonModal-48f7d67f-6b789050.js";import"./index-e91e8b28.js";import{bB as ae}from"./jeecg-online-vendor-cfb58502.js";import"./cgform.data-cbdd88c3-2ccae74f.js";import"./lodash-es-vendor-cd7703c8.js";import"./index-a2e0ccba.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";import"./useForm-21b78d9f.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";var oe=Object.defineProperty,de=Object.defineProperties,re=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,J=(t,n,r)=>n in t?oe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,ue=(t,n)=>{for(var r in n||(n={}))ne.call(n,r)&&J(t,r,n[r]);if(D)for(var r of D(n))se.call(n,r)&&J(t,r,n[r]);return t},ce=(t,n)=>de(t,re(n));const E=[{title:"文本框",value:"text"},{title:"密码",value:"password"},{title:"下拉框",value:"list"},{title:"单选框",value:"radio"},{title:"多选框",value:"checkbox"},{title:"开关",value:"switch"},{title:"日期(年月日)",value:"date"},{title:"日期(年月日时分秒)",value:"datetime"},{title:"时间(HH:mm:ss)",value:"time"},{title:"文件",value:"file"},{title:"图片",value:"image"},{title:"多行文本",value:"textarea"},{title:"富文本",value:"umeditor"},{title:"MarkDown",value:"markdown"},{title:"用户选择",value:"sel_user"},{title:"部门选择",value:"sel_depart"},{title:"关联记录",value:"link_table"},{title:"他表字段",value:"link_table_field"},{title:"省市区组件",value:"pca"},{title:"Popup弹框",value:"popup"},{title:"下拉多选框",value:"list_multi"},{title:"下拉搜索框",value:"sel_search"},{title:"分类字典树",value:"cat_tree"},{title:"自定义树控件",value:"sel_tree"},{title:"联动组件",value:"link_down"}],me=[{title:"文本框",value:"text"},{title:"单选框",value:"radio"},{title:"开关",value:"switch"},{title:"日期(yyyy-MM-dd)",value:"date"},{title:"日期（yyyy-MM-dd HH:mm:ss）",value:"datetime"},{title:"时间（HH:mm:ss）",value:"time"},{title:"文件",value:"file"},{title:"图片",value:"image"},{title:"下拉框",value:"list"},{title:"下拉多选框",value:"list_multi"},{title:"下拉搜索框",value:"sel_search"},{title:"popup弹出框",value:"popup"},{title:"部门选择",value:"sel_depart"},{title:"用户选择",value:"sel_user"},{title:"省市区组件",value:"pca"},{title:"多行文本",value:"textarea"}],pe=A({name:"PageAttributeTable",components:{LinkTableConfigModal:te,LinkTableFieldConfigModal:le,FieldExtendJsonModal:ie},setup(){const t=W([{title:"字段名称",key:"dbFieldName",width:100},{title:"字段备注",key:"dbFieldTxt",width:150},{title:"表单显示",key:"isShowForm",width:80,type:u.checkbox,align:"center",customValue:["1","0"],defaultChecked:!0},{title:"列表显示",key:"isShowList",width:80,type:u.checkbox,align:"center",customValue:["1","0"],defaultChecked:!0},{title:"是否排序",key:"sortFlag",width:80,type:u.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"是否只读",key:"isReadOnly",width:80,type:u.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"控件类型",key:"fieldShowType",width:170,type:u.select,options:E,defaultValue:"text",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"},{handler:V}]},{title:"控件长度",key:"fieldLength",width:120,titleHelp:{message:"此长度只对子表列字段宽度有效！"},type:u.inputNumber,defaultValue:200,placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"是否查询",key:"isQuery",width:80,type:u.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1},{title:"查询类型",key:"queryMode",width:110,type:u.select,options:[{title:"普通查询",value:"single"},{title:"范围查询",value:"group"}],defaultValue:"single",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"控件默认值",key:"fieldDefaultValue",width:120,type:u.input,defaultValue:""},{title:"定义转换器",key:"converter",width:150,type:u.input,defaultValue:""},{title:"扩展参数",key:"fieldExtendJson",width:120,type:u.input,defaultValue:""},{title:"更多配置",minWidth:100,key:"fieldConfig",type:u.slot,slotName:"fieldConfig"}]),n=ee(t),{tableRef:r,tables:b}=n;function V({cellValue:e,row:l},i){let{dbTable:s}=b,a=s.value.tableRef.getTableData({rowIds:[l.id]})[0].dbType;e==="time"&&a!=="string"?i(!1,"当控件类型为时间时,数据库属性里的字段类型必须是String！"):e==="date"&&a!=="Date"&&a!=="Datetime"?i(!1,"当控件类型为日期时，数据库属性里的字段类型必须是Date或Datetime！"):e==="datetime"&&a!=="Datetime"?i(!1,"当控件类型为datetime时，数据库属性里的字段类型必须是Datetime！"):i(!0)}function C(e){let l="date";e.dbType==="Datetime"&&(l="datetime"),r.value.setValues([{rowKey:e.id,values:{fieldShowType:l}}])}function w(e){for(let l of t.value)if(l.key=="fieldShowType"){l.options=e?me:E;break}}function T(e){r.value.setValues([{rowKey:e,values:{isQuery:"1"}}])}const[k,{openModal:F}]=S(),[x,{openModal:g}]=S(),[_,{openModal:O}]=S();function K(e){return e.row.dbFieldName!="id"}function P(e){e.row.fieldShowType.indexOf("link_table")>=0?M(e):I(e)}function M(e){let{row:l}=e,{checkTable:i}=b;if(i){let s=i.value.tableRef.getTableData({rowIds:[l.id]})[0];if(e.row.fieldShowType=="link_table"){let a=j(l,s);F(!0,{record:a,fieldName:l.dbFieldName})}else if(e.row.fieldShowType=="link_table_field"){let a=H(l,s);g(!0,a)}}}function H(e,l){let i=r.value.getTableData().filter(o=>o.fieldShowType=="link_table"),s={};if(i&&i.length>0){let o=b.checkTable.value.tableRef.getTableData();for(let p of i){let y=o.filter(f=>f.dbFieldName==p.dbFieldName);if(y&&y.length>0){let f=y[0];s[f.dbFieldName]={title:p.dbFieldTxt,table:f.dictTable,fields:f.dictText}}}}const{dictTable:a,dictText:m}=l,{id:c,dbFieldTxt:d}=e;return{record:{rowKey:c,dbFieldTxt:d,dictText:m,dictTable:a},tableAndFieldsMap:s}}function j(e,l){const{id:i,dbFieldTxt:s,fieldExtendJson:a}=e,{dictTable:m,dictText:c}=l;let d={rowKey:i,dbFieldTxt:s,dictTable:m};if(c){let o=c.split(",");d.titleField=o[0],o.length>1&&(d.otherFields=c.substring(c.indexOf(",")+1))}else d.titleField="",d.otherFields="";if(a)try{let o=JSON.parse(a);o.multiSelect?d.multiSelect=o.multiSelect:d.multiSelect=!1,o.showType?d.showType=o.showType:d.showType="card",o.imageField?d.imageField=o.imageField:d.imageField=""}catch(o){}return d}function $(e){const{multiSelect:l,showType:i,imageField:s,fieldName:a}=e;let m={showType:i,multiSelect:l,imageField:s},c=[{rowKey:e.rowKey,values:{fieldExtendJson:JSON.stringify(m),dbFieldTxt:e.dbFieldTxt}}];r.value.setValues(c);let{checkTable:d,dbTable:o}=b;if(o){let p=[{rowKey:e.rowKey,values:{dbFieldTxt:e.dbFieldTxt}}];o.value.tableRef.setValues(p)}if(d){let p=e.titleField;e.otherFields&&(p+=","+e.otherFields);const{dictTable:y,dictField:f}=e;let q={dictTable:y,dictField:f,dictText:p,dbFieldName:a},Q=[{rowKey:e.rowKey,values:q}];d.value.tableRef.setValues(Q)}}function B(e){const{dbFieldTxt:l,dictTable:i,dictText:s,rowKey:a}=e;let m=[{rowKey:a,values:{dbFieldTxt:l}}];r.value.setValues(m);let{checkTable:c,dbTable:d}=b;if(d){let o=[{rowKey:a,values:{dbFieldTxt:l,dbIsPersist:"0"}}];d.value.tableRef.setValues(o)}if(c){let o=[{rowKey:a,values:{dictTable:i,dictText:s}}];c.value.tableRef.setValues(o)}}function I(e){let l=e.row.fieldExtendJson||"",i=e.rowId,s=e.row.fieldShowType||"",a=e.row.sortFlag||"0";O(!0,{jsonStr:l,fieldShowType:s,sortFlag:a,id:i})}function L(e,l){let i;e&&Object.keys(e).length>0?i=[{rowKey:l,values:{fieldExtendJson:JSON.stringify(e)}}]:i=[{rowKey:l,values:{fieldExtendJson:""}}],r.value.setValues(i)}return ce(ue({},n),{columns:t,enableQuery:T,syncFieldShowType:C,changePageType:w,showConfigButton:K,showFieldConfig:M,registerExtJsonModal:_,handleExtJson:L,openConfig:P,registerModal:k,handleConfigData:$,registerFieldModal:x,handleFieldConfigData:B})}});function fe(t,n,r,b,V,C){const w=h("a-button"),T=h("JVxeTable"),k=h("link-table-config-modal"),F=h("link-table-field-config-modal"),x=h("FieldExtendJsonModal");return N(),z(G,null,[v(T,U({ref:"tableRef","row-class-name":"online-config-page",rowNumber:"",keyboardEdit:"",maxHeight:t.tableHeight.noToolbar,loading:t.loading,columns:t.columns,dataSource:t.dataSource,disabledRows:{dbFieldName:["id","has_child"]}},t.tableProps),{fieldConfig:R(g=>[t.showConfigButton(g)?(N(),X(w,{key:0,type:"primary",size:"small",ghost:"",onClick:_=>t.openConfig(g)},{default:R(()=>[Y("高级配置")]),_:2},1032,["onClick"])):Z("",!0)]),_:1},16,["maxHeight","loading","columns","dataSource"]),v(k,{onRegister:t.registerModal,onSuccess:t.handleConfigData},null,8,["onRegister","onSuccess"]),v(F,{onRegister:t.registerFieldModal,onSuccess:t.handleFieldConfigData},null,8,["onRegister","onSuccess"]),v(x,{onRegister:t.registerExtJsonModal,onSuccess:t.handleExtJson},null,8,["onRegister","onSuccess"])],64)}const rt=ae(pe,[["render",fe],["__scopeId","data-v-08ae6456"]]);export{rt as default};