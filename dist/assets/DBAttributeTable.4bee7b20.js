import{l as e,F as t,dz as a,f0 as l,t as d,v as E,V as i,B as o,a6 as n}from"./index.435ab247.js";import{u as I}from"./useTableSync.028a2e5c.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./cgform.data.7645b542.js";var T=Object.defineProperty,r=Object.defineProperties,u=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&A(e,a,t[a]);if(R)for(var a of R(t))s.call(t,a)&&A(e,a,t[a]);return e},L=(e,t)=>r(e,u(t));const S=["ADD","ALL","ALTER","ANALYZE","AND","AS","ASC","ASENSITIVE","BEFORE","BETWEEN","BIGINT","BINARY","BLOB","BOTH","BY","CALL","CASCADE","CASE","CHANGE","CHAR","CHARACTER","CHECK","COLLATE","COLUMN","CONDITION","CONNECTION","CONSTRAINT","CONTINUE","CONVERT","CREATE","CROSS","CURRENT_DATE","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER","CURSOR","DATABASE","DATABASES","DAY_HOUR","DAY_MICROSECOND","DAY_MINUTE","DAY_SECOND","DEC","DECIMAL","DECLARE","DEFAULT","DELAYED","DELETE","DESC","DESCRIBE","DETERMINISTIC","DISTINCT","DISTINCTROW","DIV","DOUBLE","DROP","DUAL","EACH","ELSE","ELSEIF","ENCLOSED","ESCAPED","EXISTS","EXIT","EXPLAIN","FALSE","FETCH","FLOAT","FLOAT4","FLOAT8","FOR","FORCE","FOREIGN","FROM","FULLTEXT","GOTO","GRANT","GROUP","HAVING","HIGH_PRIORITY","HOUR_MICROSECOND","HOUR_MINUTE","HOUR_SECOND","IF","IGNORE","IN","INDEX","INFILE","INNER","INOUT","INSENSITIVE","INSERT","INT","INT1","INT2","INT3","INT4","INT8","INTEGER","INTERVAL","INTO","IS","ITERATE","JOIN","KEY","KEYS","KILL","LABEL","LEADING","LEAVE","LEFT","LIKE","LIMIT","LINEAR","LINES","LOAD","LOCALTIME","LOCALTIMESTAMP","LOCK","LONG","LONGBLOB","LONGTEXT","LOOP","LOW_PRIORITY","MATCH","MEDIUMBLOB","MEDIUMINT","MEDIUMTEXT","MIDDLEINT","MINUTE_MICROSECOND","MINUTE_SECOND","MOD","MODIFIES","NATURAL","NOT","NO_WRITE_TO_BINLOG","NULL","NUMERIC","ON","OPTIMIZE","OPTION","OPTIONALLY","OR","ORDER","OUT","OUTER","OUTFILE","PRECISION","PRIMARY","PROCEDURE","PURGE","RAID0","RANGE","READ","READS","REAL","REFERENCES","REGEXP","RELEASE","RENAME","REPEAT","REPLACE","REQUIRE","RESTRICT","RETURN","REVOKE","RIGHT","RLIKE","SCHEMA","SCHEMAS","SECOND_MICROSECOND","SELECT","SENSITIVE","SEPARATOR","SET","SHOW","SMALLINT","SPATIAL","SPECIFIC","SQL","SQLEXCEPTION","SQLSTATE","SQLWARNING","SQL_BIG_RESULT","SQL_CALC_FOUND_ROWS","SQL_SMALL_RESULT","SSL","STARTING","STRAIGHT_JOIN","TABLE","TERMINATED","THEN","TINYBLOB","TINYINT","TINYTEXT","TO","TRAILING","TRIGGER","TRUE","UNDO","UNION","UNIQUE","UNLOCK","UNSIGNED","UPDATE","USAGE","USE","USING","UTC_DATE","UTC_TIME","UTC_TIMESTAMP","VALUES","VARBINARY","VARCHAR","VARCHARACTER","VARYING","WHEN","WHERE","WHILE","WITH","WRITE","X509","XOR","YEAR_MONTH","ZEROFILL"];var c=l(e({name:"DBAttributeTable",props:{actionButton:{type:Boolean,default:!0}},emits:["added","removed","inserted","dragged","syncDbType"],setup(e,{emit:l}){const d=n(),E=t(!1),i=t([{title:"字段名称",key:"dbFieldName",width:140,type:a.input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"},{pattern:/^[a-zA-Z]{1}(?!_)[a-zA-Z0-9_\\$]+$/,message:"命名规则：只能由字母、数字、下划线、$符号组成；必须以字母开头；不能以单个字母加下滑线开头"},{unique:!0,message:"${title}不能重复"},{handler({cellValue:e},t){S.includes(e.toUpperCase())?t(!1,e+"是关键字，不能作为字段名称使用！"):t(!0)}},{handler:D}],disabled:!e.actionButton},{title:"字段备注",key:"dbFieldTxt",width:140,type:a.input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"字段长度",key:"dbLength",width:120,type:a.inputNumber,defaultValue:32,placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}],disabled:!e.actionButton},{title:"小数点",key:"dbPointLength",width:100,type:a.inputNumber,defaultValue:0,placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}],disabled:!e.actionButton},{title:"默认值",key:"dbDefaultVal",width:140,type:a.input,defaultValue:"",disabled:!e.actionButton},{title:"字段类型",key:"dbType",width:140,type:a.select,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Date",value:"Date"},{title:"Datetime",value:"Datetime"},{title:"BigDecimal",value:"BigDecimal"},{title:"Text",value:"Text"},{title:"Blob",value:"Blob"}],defaultValue:"string",placeholder:"请选择${title}",disabled:!e.actionButton,validateRules:[{required:!0,message:"请选择${title}"}]},{title:"主键",key:"dbIsKey",width:80,type:a.checkbox,align:"center",customValue:["1","0"],defaultChecked:!1,disabled:!e.actionButton},{title:"允许空值",key:"dbIsNull",width:80,type:a.checkbox,customValue:["1","0"],defaultChecked:!0,disabled:!e.actionButton},{title:"同步数据库",key:"dbIsPersist",minWidth:80,type:a.checkbox,customValue:["1","0"],defaultChecked:!0,disabled:!e.actionButton},{title:"orderNum",key:"orderNum",type:a.hidden}]);let o=[];const T=I(i),{tableRef:r,loading:u,dataSource:R,tableHeight:N,tableProps:s,setDataSource:A,validateData:c}=T;function D({cellValue:e,row:t},a){const{tables:l}=T;if(l){let d=l.dbTable.value.tableRef.dataSource.filter((e=>e.id===t.id));(!d||d.length<=0)&&a(!0);let E=d[0].dbFieldName;E==e&&a(!0);let i=l.idxTable.value.tableRef.getTableData();for(let e of i){e.indexField.split(",").indexOf(E)>=0&&a(!1,"当前字段存在索引配置，请先删除索引再修改字段")}}a(!0)}return{tableRef:r,loading:u,columns:i,dataSource:R,setDataSource:A,addBatchBegin:function(){E.value=!0,u.value=!0},addBatchEnd:function(){E.value=!1,u.value=!1,l("added",d)},tableAddLine:function(e){r.value.pushRows(e),E.value||l("added",d)},tableHeight:N,tableProps:s,tableDeleteLines:function(e){return r.value.removeRowsById(e)},handleAdded:function(){l("added",d)},handleRemoved:function(e){o=o.concat(e.deleteRows.map((e=>e.id))),l("removed",L(O({},e),{removeIds:o,target:d}))},handleDragged:function(e){l("dragged",{oldIndex:e.oldIndex,newIndex:e.newIndex,target:d})},handleInserted:function(e){l("inserted",L(O({},e),{target:d}))},handleValueChange:function(e){let{type:t,row:E,col:i,value:o,target:n}=e;t===a.select&&"dbType"===i.key&&("Date"!==o&&"Datetime"!==o||l("syncDbType",{row:E,value:o,target:d}),"Blob"===o||"Text"===o||"Date"===o?n.setValues([{rowKey:E.id,values:{dbLength:"0"}}]):"int"===o||"double"===o||"BigDecimal"===o?n.setValues([{rowKey:E.id,values:{dbLength:"10"}}]):"0"===E.dbLength&&n.setValues([{rowKey:E.id,values:{dbLength:"32"}}]))},validateData:c,getRemoveIds:function(){return o},validateExistIndex:D}}}),[["render",function(e,t,a,l,n,I){const T=d("JVxeTable");return E(),i(T,o({ref:"tableRef",rowNumber:"",rowSelection:"",dragSort:"",keyboardEdit:"",sortKey:"orderNum",addButtonSettings:"",loading:e.loading,columns:e.columns,dataSource:e.dataSource,toolbar:e.actionButton,maxHeight:e.tableHeight.normal,disabledRows:{dbFieldName:["id","has_child"]}},e.tableProps,{onAdded:e.handleAdded,onRemoved:e.handleRemoved,onDragged:e.handleDragged,onInserted:e.handleInserted,onValueChange:e.handleValueChange}),null,16,["loading","columns","dataSource","toolbar","maxHeight","onAdded","onRemoved","onDragged","onInserted","onValueChange"])}]]);export{c as default};