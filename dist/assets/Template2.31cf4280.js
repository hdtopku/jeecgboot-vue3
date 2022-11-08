import{q as e,dz as t,a1 as a,t as l,v as i,V as n,z as o,y as s}from"./index.435ab247.js";var h=e({name:"Template2",data:()=>({table1:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0},lastRow:null,selectedRows:[],dataSource:[],columns:[{key:"num",title:"序号",width:"80px"},{key:"ship_name",title:"船名",width:"180px",type:t.input},{key:"call",title:"呼叫",width:"80px",type:t.input},{key:"len",title:"长",width:"80px",type:t.input},{key:"ton",title:"吨",width:"120px",type:t.input},{key:"payer",title:"付款方",width:"120px",type:t.input},{key:"count",title:"数",width:"40px"},{key:"company",title:"公司",minWidth:"180px",type:t.input},{key:"trend",title:"动向",width:"120px",type:t.input}]},table2:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["100","200"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"调度序号",width:"120px"},{key:"tug",title:"拖轮",width:"180px",type:t.input},{key:"work_start_time",title:"作业开始时间",width:"180px",type:t.input},{key:"work_stop_time",title:"作业结束时间",width:"180px",type:t.input},{key:"type",title:"船舶分类",width:"120px",type:t.input},{key:"port_area",title:"所属港区",width:"120px",type:t.input}]},url:{getData:"/mock/vxe/getData"}}),watch:{"table1.lastRow"(){this.loadTable2Data()}},created(){this.loadTable1Data()},methods:{loadTable1Data(){let e={pageNo:this.table1.pagination.current,pageSize:this.table1.pagination.pageSize};this.table1.loading=!0,a.get({url:this.url.getData,params:e}).then((e=>{this.table1.pagination.total=e.total,this.table1.dataSource=e.records,this.table1.selectedRows=[]})).finally((()=>{this.table1.loading=!1}))},loadTable2Data(){let e=this.table1.selectedRows;if(!e||0===e.length)return this.table2.pagination.total=0,this.table2.dataSource=[],void(this.table2.selectedRows=[]);null==this.table1.lastRow&&(this.table1.lastRow=e[e.length-1]);let t={parentId:this.table1.lastRow.id,pageNo:this.table2.pagination.current,pageSize:this.table2.pagination.pageSize};this.table2.loading=!0,a.get({url:this.url.getData,params:t}).then((e=>{this.table2.pagination.total=e.total,this.table2.dataSource=e.records,this.table2.selectedRows=[]})).finally((()=>{this.table2.loading=!1}))},handleTable1SelectRowChange(e){this.handleTableSelectRowChange(this.table1,e)},handleTable2SelectRowChange(e){this.table2.selectedRows=e.selectedRows},handleTable1PageChange(e){this.table1.pagination.current=e.current,this.table1.pagination.pageSize=e.pageSize,this.loadTable1Data()},handleTable2PageChange(e){this.table2.pagination.current=e.current,this.table2.pagination.pageSize=e.pageSize,this.loadTable2Data()},handleTableSelectRowChange(e,t){let{row:a,action:l,selectedRows:i,$table:n}=t,o=i[i.length-1];"selected"===l?e.lastRow=a:"selected-all"===l?0===i.length?e.lastRow=null:e.lastRow||(e.lastRow=o):"unselected"===l&&a===e.lastRow&&(e.lastRow=o),n.setCurrentRow(e.lastRow),e.selectedRows=i}}},[["render",function(e,t,a,h,g,d){const p=l("JVxeTable"),r=l("a-col"),c=l("a-row"),u=l("a-card");return i(),n(u,{bordered:!1},{default:o((()=>[s(c,{gutter:8},{default:o((()=>[s(r,{span:12},{default:o((()=>[s(p,{toolbar:"",rowNumber:"",rowSelection:"",clickSelectRow:"",highlightCurrentRow:"",radioConfig:{highlight:!1},checkboxConfig:{highlight:!1},height:790,loading:g.table1.loading,columns:g.table1.columns,dataSource:g.table1.dataSource,pagination:g.table1.pagination,onPageChange:d.handleTable1PageChange,onSelectRowChange:d.handleTable1SelectRowChange},null,8,["loading","columns","dataSource","pagination","onPageChange","onSelectRowChange"])])),_:1}),s(r,{span:12},{default:o((()=>[s(p,{rowNumber:"",height:375,columns:g.table1.columns,dataSource:g.table1.selectedRows,style:{margin:"52px 0 8px"}},null,8,["columns","dataSource"]),s(p,{toolbar:"",rowNumber:"",rowSelection:"",clickSelectRow:"",height:355,loading:g.table2.loading,columns:g.table2.columns,dataSource:g.table2.dataSource,pagination:g.table2.pagination,onPageChange:d.handleTable2PageChange,onSelectRowChange:d.handleTable2SelectRowChange},null,8,["loading","columns","dataSource","pagination","onPageChange","onSelectRowChange"])])),_:1})])),_:1})])),_:1})}]]);export{h as default};