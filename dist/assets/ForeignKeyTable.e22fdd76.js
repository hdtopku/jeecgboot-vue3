import{j as s,C as l,e8 as o,f2 as p,r as u,s as d,Q as m,x as c}from"./index.25572ab7.js";import{u as f}from"./useTableSync.64702724.js";import"./pick.5c5b7fa5.js";import"./_flatRest.1893f573.js";import"./isArray.3186d40a.js";import"./toString.e0eec860.js";import"./_arrayPush.48fa8f83.js";import"./cgform.data.288bec9b.js";var _=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,n=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))B.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))g.call(r,t)&&n(e,t,r[t]);return e},w=(e,r)=>b(e,y(r));const h=s({name:"ForeignKeyTable",props:{actionButton:{type:Boolean,default:!0}},setup(){const e=l([{title:"\u5B57\u6BB5\u540D\u79F0",key:"dbFieldName",width:160},{title:"\u5B57\u6BB5\u5907\u6CE8",key:"dbFieldTxt",width:160},{title:"\u4E3B\u8868\u540D",key:"mainTable",width:280,type:o.input,defaultValue:""},{title:"\u4E3B\u8868\u5B57\u6BB5",key:"mainField",width:280,type:o.input,defaultValue:""}]),r=f(e);return w(P({},r),{columns:e})}});function v(e,r,t,O,T,F){const i=u("JVxeTable");return d(),m(i,c({ref:"tableRef",rowNumber:"",keyboardEdit:"",maxHeight:e.tableHeight.noToolbar,loading:e.loading,columns:e.columns,dataSource:e.dataSource,disabled:!e.actionButton,disabledRows:{dbFieldName:["id","has_child"]}},e.tableProps),null,16,["maxHeight","loading","columns","dataSource","disabled"])}var N=p(h,[["render",v]]);export{N as default};