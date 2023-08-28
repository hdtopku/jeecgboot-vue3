import{q as o,U as d,aV as w,ar as x,bi as h,f as r,v as f,ad as S,A as y,aX as T,aW as C,at as i}from"./vue-c7e3516e.js";import{_ as k,ad as b}from"./jeecg-online-vendor-bf2efbcb.js";import{aj as a}from"./index-fde9c72f.js";import{cn as R,a0 as D,t as z,cv as I}from"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";const v={name:"ErpTemplate",data(){return{toolbarConfig:{slot:["prefix","suffix"],btn:["add","remove","clearSelection"]},expandConfig:{accordion:!0},subTabs:{show:!1,expand:!0,autoExpand:!0},table1:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0,showTotal:(e,n)=>{let l=o("span",`${n[0]}-${n[1]} \u5171 ${e} \u6761`);return this.subTabs.show?[o("span",{},[o(R,{type:"link",onClick:this.handleToggleTabs},()=>[this.subTabs.expand?o(D):o(z),o("span",{},this.subTabs.expand?"\u6536\u8D77":"\u5C55\u5F00")]),o(I,{checked:this.subTabs.autoExpand,"onUpdate:checked":t=>this.subTabs.autoExpand=t},()=>"\u81EA\u52A8\u5C55\u5F00")]),l]:l}},selectedRows:[],dataSource:[],columns:[{key:"num",title:"\u5E8F\u53F7",width:"80px"},{key:"ship_name",title:"\u8239\u540D",width:"180px",type:a.input},{key:"call",title:"\u547C\u53EB",width:"990px",type:a.input},{key:"len",title:"\u957F",width:"80px",type:a.inputNumber},{key:"ton",title:"\u5428",width:"120px",type:a.inputNumber},{key:"payer",title:"\u4ED8\u6B3E\u65B9",width:"120px",type:a.input},{key:"count",title:"\u6570",width:"40px"},{key:"company",title:"\u516C\u53F8",minWidth:"180px",type:a.input},{key:"trend",title:"\u52A8\u5411",width:"120px",type:a.input}]},table2:{currentRowId:null,loading:!1,pagination:{current:1,pageSize:10,pageSizeOptions:["5","10","20","30"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"\u8C03\u5EA6\u5E8F\u53F7",width:"120px"},{key:"tug",title:"\u62D6\u8F6E",width:"180px",type:a.input},{key:"work_start_time",title:"\u4F5C\u4E1A\u5F00\u59CB\u65F6\u95F4",width:"180px",type:a.input},{key:"work_stop_time",title:"\u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4",width:"180px",type:a.input},{key:"type",title:"\u8239\u8236\u5206\u7C7B",width:"120px",type:a.input},{key:"port_area",title:"\u6240\u5C5E\u6E2F\u533A",width:"120px",type:a.input}]},currentSubRow:null,url:{getData:"/mock/vxe/getData"}}},computed:{tableHeight(){let{show:e,expand:n}=this.subTabs;return e&&n?350:482}},created(){this.loadTable1Data()},methods:{loadTable1Data(){let e={pageNo:this.table1.pagination.current,pageSize:this.table1.pagination.pageSize};this.table1.loading=!0,b.get({url:this.url.getData,params:e}).then(n=>{this.table1.pagination.total=n.total,this.table1.dataSource=n.records,this.table1.selectedRows=[]}).finally(()=>{this.table1.loading=!1})},loadSubData(e){return e?(this.table2.currentRowId===e.id||(this.table2.currentRowId=e.id,this.loadTable2Data()),!0):!1},loadTable2Data(){let e=this.table2,n={parentId:e.currentRowId,pageNo:this.table2.pagination.current,pageSize:this.table2.pagination.pageSize};e.loading=!0,b.get({url:this.url.getData,params:n}).then(l=>{e.selectedRows=[],e.dataSource=l.records,e.pagination.total=l.total}).finally(()=>{e.loading=!1})},handleTable1SelectRowChange(e){this.table1.selectedRows=e.selectedRows,this.subTabs.show=!0,this.subTabs.autoExpand&&(this.subTabs.expand=!0),this.loadSubData(e.selectedRows[0])},handleTable2SelectRowChange(e){this.table2.selectedRows=e.selectedRows},handleTable1PageChange(e){this.table1.pagination.current=e.current,this.table1.pagination.pageSize=e.pageSize,this.loadTable1Data()},handleTable2PageChange(e){this.table2.pagination.current=e.current,this.table2.pagination.pageSize=e.pageSize,this.loadTable2Data()},handleToggleTabs(){this.subTabs.expand=!this.subTabs.expand}}},s=e=>(T("data-v-caadbbcf"),e=e(),C(),e),P=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1)),E=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1)),N=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1)),V=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1)),B=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1)),H=s(()=>i("h1",null,"\u8FD9\u91CC\u662F\u5B50\u88682",-1));function O(e,n,l,g,t,p){const u=d("JVxeTable"),c=d("a-tab-pane"),_=d("a-tabs"),m=d("a-card");return w(),x(m,{bordered:!1},{default:h(()=>[r(u,{toolbar:"",toolbarConfig:t.toolbarConfig,rowNumber:"",rowSelection:"",rowSelectionType:"radio",clickSelectRow:"",highlightCurrentRow:"",height:p.tableHeight,loading:t.table1.loading,columns:t.table1.columns,dataSource:t.table1.dataSource,pagination:t.table1.pagination,expandConfig:t.expandConfig,style:{"margin-bottom":"8px"},onPageChange:p.handleTable1PageChange,onSelectRowChange:p.handleTable1SelectRowChange},null,8,["toolbarConfig","height","loading","columns","dataSource","pagination","expandConfig","onPageChange","onSelectRowChange"]),f(r(_,{class:S({"sub-tabs":!0,"un-expand":!t.subTabs.expand})},{default:h(()=>[r(c,{tab:"\u5B50\u88681",key:"1"},{default:h(()=>[r(u,{toolbar:"","row-number":"","row-selection":"",height:"auto",maxHeight:350,loading:t.table2.loading,columns:t.table2.columns,dataSource:t.table2.dataSource,pagination:t.table2.pagination,onPageChange:p.handleTable2PageChange,onSelectRowChange:p.handleTable2SelectRowChange},null,8,["loading","columns","dataSource","pagination","onPageChange","onSelectRowChange"])]),_:1}),r(c,{tab:"\u5B50\u88682",key:"2"},{default:h(()=>[P,E,N,V,B,H]),_:1})]),_:1},8,["class"]),[[y,t.subTabs.show]])]),_:1})}const L=k(v,[["render",O],["__scopeId","data-v-caadbbcf"]]);export{L as default};