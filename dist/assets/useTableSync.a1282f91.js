import{V as I}from"./cgform.data.6545414c.js";import{p as N}from"./pick.dbff1c58.js";import{bi as R,F as T,o as D,Q as h}from"./index.a86a095a.js";var w=(u,v,l)=>new Promise((r,b)=>{var o=t=>{try{n(l.next(t))}catch(c){b(c)}},m=t=>{try{n(l.throw(t))}catch(c){b(c)}},n=t=>t.done?r(t.value):Promise.resolve(t.value).then(o,m);n((l=l.apply(u,v)).next())});function X(u){const v=R("tables"),l=R("fullScreenRef"),r=T(),b=T(!1),o=T([]),m=D(()=>({normal:l!=null&&l.value?430:260,noToolbar:l!=null&&l.value?480:320})),n=D(()=>["id"].concat(u.value.map(a=>a.key))),t=D(()=>({scrollY:{gt:15},scrollX:{gt:20}}));function c(a){return w(this,null,function*(){let e=r.value;if(yield e.fullValidateTable())throw{code:I,activeKey:a};let y=e.getTableData().map(f=>N(f,n.value)),p=e.getDeleteData().map(f=>f.id);return{tableData:y,deleteIds:p}})}function g(a,e=!1){return w(this,null,function*(){e?(o.value=[],yield h(),yield r.value.addOrInsert(a,0,null,{setActive:!1}),yield h(),r.value.recalcDisableRows()):o.value=a})}function k(a){let e=r.value,x=a.value.tableRef,y=a.value.getRemoveIds(),p=x.getXTable().internalData.tableFullData,f=e.getXTable().internalData.tableFullData;return p.forEach(s=>{let F=!1;if(f.forEach(d=>{if(s.id===d.id){let i=d.dbFieldName,E=d.dbFieldTxt;(s.dbFieldName!==i||s.dbFieldTxt!==E)&&e.setValues([{rowKey:d.id,values:{dbFieldName:s.dbFieldName,dbFieldTxt:s.dbFieldTxt}}]),F=!0}else y.forEach(i=>{i===d.id&&(e.removeRowsById(i),F=!0)})}),!F){let d=Object.assign({},s);u.value.forEach(i=>{i.key!=="dbFieldName"&&i.key!=="dbFieldTxt"&&(d[i.key]=i.defaultValue)}),e.addRows(d)}}),h()}return{tables:v,tableRef:r,loading:b,dataSource:o,columnKeys:n,tableHeight:m,tableProps:t,syncTable:k,validateData:c,setDataSource:g}}export{X as u};