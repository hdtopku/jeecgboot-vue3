import{B as b}from"./BasicTable.ee63ae89.js";import"./helper.4a0046bd.js";import"./TableImg.198933b8.js";import{getBasicColumns as p,getBasicShortColumns as R}from"./tableData.01351cef.js";import{q as D,l as E,F as w,t as f,v as S,x as A,aV as d,y as u,z as n,C as i,u as T,L}from"./index.3bed7968.js";import{d as y}from"./table.353726c3.js";import"./BasicForm.edf8c211.js";import"./uniqBy.be18330d.js";import"./index.2b083806.js";import"./BasicModal.63407285.js";import"./useWindowSizeFn.3a0aad8e.js";import"./useForm.a01ff2a7.js";import"./JAddInput.dd50592d.js";import"./useFormItem.1483bf1f.js";import"./api.9041b4ca.js";import"./props.98e0ca30.js";import"./index.ed8afd6d.js";import"./bem.c8247e3c.js";import"./props.c4c9bbde.js";import"./useContextMenu.41f709dc.js";import"./index.8d6618cf.js";import"./onMountedOrActivated.b5477b8f.js";import"./index.52c0f810.js";import"./htmlmixed.62278273.js";import"./vue.0a98e62f.js";/* empty css             */import"./depart.api.cc5e0568.js";import"./index.e57fdc92.js";import"./useContentHeight.2c22b941.js";import"./useContentViewHeight.1aeec0b1.js";import"./usePageContext.0bdec497.js";import"./RedoOutlined.b3a6cb97.js";import"./functional.0ad73ef9.js";import"./download.e4a7eb34.js";import"./base64Conver.030fa32c.js";import"./index.a3670730.js";import"./index.1c9a2e2a.js";import"./useCountdown.789ced8c.js";import"./JUpload.6297877e.js";import"./index.e7272bc8.js";const K=E({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function e(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function l(){e().setLoading(!0),setTimeout(()=>{e().setLoading(!1)},1e3)}function c(){e().setColumns(R())}function r(){e().setColumns(p()),e().reload({page:1})}function t(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getColumns())}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getDataSource())}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getRawDataSource())}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getPaginationRef())}function _(){e().setPagination({current:2}),e().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getSelectRows())}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getSelectRowKeys())}function k(){e().setSelectedRowKeys(["0","1","2"])}function h(){e().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:t,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),v={class:"p-4"},P={class:"mb-4"},V=i(" \u8FD8\u539F "),$=i(" \u5F00\u542Floading "),M=i(" \u66F4\u6539Columns "),N=i(" \u83B7\u53D6Columns "),z=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),q=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),H={class:"mb-4"},j=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,e,l,c,r){const t=f("a-button"),a=f("BasicTable");return S(),A("div",v,[d("div",P,[u(t,{class:"mr-2",onClick:o.reloadTable},{default:n(()=>[V]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeLoading},{default:n(()=>[$]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeColumns},{default:n(()=>[M]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getColumn},{default:n(()=>[N]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableData},{default:n(()=>[z]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableRawData},{default:n(()=>[I]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:n(()=>[q]),_:1},8,["onClick"])]),d("div",H,[u(t,{class:"mr-2",onClick:o.getSelectRowList},{default:n(()=>[j]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:n(()=>[G]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:n(()=>[J]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.clearSelect},{default:n(()=>[O]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getPagination},{default:n(()=>[Q]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var $o=D(K,[["render",U]]);export{$o as default};