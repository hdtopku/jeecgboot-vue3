import{l as b,F as f,dw as o,eY as F,t as g,v as h,V as y,B}from"./index.b3d2a891.js";import{u as v}from"./useTableSync.da28ddfa.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./cgform.data.daae6320.js";const D=b({name:"IndexTable",components:{},props:{actionButton:{type:Boolean,default:!0,required:!1}},setup(){const e=f([{title:"\u7D22\u5F15\u540D\u79F0",key:"indexName",width:330,type:o.input,defaultValue:"",placeholder:"\u8BF7\u8F93\u5165${title}",validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]},{title:"\u7D22\u5F15\u680F\u4F4D",key:"indexField",width:330,type:o.selectMultiple,options:[],defaultValue:"",placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}]},{title:"\u7D22\u5F15\u7C7B\u578B",key:"indexType",width:330,type:o.select,options:[{title:"normal",value:"normal"},{title:"unique",value:"unique"}],defaultValue:"normal",placeholder:"\u8BF7\u9009\u62E9${title}",validateRules:[{required:!0,message:"\u8BF7\u9009\u62E9${title}"}]}]),l=v(e),{tableRef:u,loading:r,dataSource:i,tableHeight:n,tableProps:t,setDataSource:d,validateData:p}=l;function m(c){let s=[];c.value.tableRef.getTableData().forEach(a=>{a.dbFieldName&&s.push({title:a.dbFieldName,value:a.dbFieldName})}),e.value[1].options=s}return{tableRef:u,loading:r,dataSource:i,columns:e,tableHeight:n,tableProps:t,syncTable:m,setDataSource:d,validateData:p}}});function $(e,l,u,r,i,n){const t=g("JVxeTable");return h(),y(t,B({ref:"tableRef",rowNumber:"",rowSelection:"",dragSort:"",keyboardEdit:"",sortKey:"orderNum",maxHeight:e.tableHeight.normal,loading:e.loading,columns:e.columns,dataSource:e.dataSource,toolbar:e.actionButton},e.tableProps),null,16,["maxHeight","loading","columns","dataSource","toolbar"])}var R=F(D,[["render",$]]);export{R as default};
