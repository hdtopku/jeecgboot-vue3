import{j as M,C as l,bH as y,Z as b,eH as D,u as k,r as p,s as R,Q as S,w as u,v as d,y as g,aW as v}from"./index.0be4b5b8.js";import A from"./BasicTable.8e358715.js";import"./componentMap.6d6ce384.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import"./useTable.9835c939.js";import{B as I}from"./index.df1721d5.js";import{useListTable as N}from"./useListPage.3cb53a3e.js";import"./BasicForm.be7f03c1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./api.dbe6bd39.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./JAddInput.d2fd0723.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./useForm.b4df01c5.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";const $=M({name:"TransDb2Online",components:{BasicModal:I,BasicTable:A},emits:["success","register"],setup(o,{emit:C}){const{createMessage:f}=k(),t=l("\u6682\u65E0\u6570\u636E"),s=l(!1),r=l(!1),a=l([]),n=l([]),[m,{closeModal:c}]=y(()=>{r.value=!1,t.value="\u6682\u65E0\u6570\u636E",i.value=[],h()}),[E,{setPagination:w},{rowSelection:T,selectedRowKeys:i}]=N({bordered:!0,columns:[{title:"\u8868\u540D",align:"left",dataIndex:"id"}],dataSource:n,maxHeight:300,locale:{emptyText:t},pagination:{showQuickJumper:!1,showSizeChanger:!1},clickToRowSelect:!0,showIndexColumn:!0,showActionColumn:!1,formConfig:{schemas:[{label:"\u8868\u540D",field:"tableName",component:"Input",componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onChange:e=>B(e.target.value)},disabledLabelWidth:!0,itemProps:{labelCol:{sm:24,md:4},wrapperCol:{sm:24,md:20}}}],baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}});function h(){return s.value=!0,b.get({url:"/online/cgform/head/queryTables/"},{errorMessageMode:"none"}).then(e=>(n.value=e,a.value=[...e],e),e=>{e.message=="noadminauth"?(t.value="\u975Eadmin\u7528\u6237\u65E0\u6743\u9650\u64CD\u4F5C\uFF01",f.warn(t.value)):console.error(e),n.value=[],a.value=[]}).finally(()=>{s.value=!1})}function B(e){a.value.length!==0&&(e?(n.value=a.value.filter(L=>L.id.toLowerCase().includes(e.toLowerCase())),t.value=n.value.length===0?"\u65E0\u7B5B\u9009\u7ED3\u679C":"\u6682\u65E0\u6570\u636E"):n.value=[...a.value],w({current:1}))}function F(){c()}function _(){if(!i.value||i.value.length==0){f.warning("\u8BF7\u9009\u62E9\u4E00\u5F20\u8868");return}else{r.value=!0;let e=i.value.join(",");b.post({url:"/online/cgform/head/transTables/"+e}).then(()=>{c(),C("success")}).finally(()=>r.value=!1)}}return{emptyText:t,confirmLoading:s,btnLoading:r,metaSource:a,handleTrans:_,handleCancel:F,queryTables:h,registerModal:m,registerTable:E,rowSelection:T,selectedRowKeys:i}}}),H=v("div",null,[g(" \u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868 "),v("a",{href:"http://doc.jeecg.com/2043924",target:"_blank"}," \u53C2\u8003\u6587\u6863")],-1);function P(o,C,f,t,s,r){const a=p("BasicTable"),n=p("a-spin"),m=p("a-button"),c=p("BasicModal");return R(),S(c,{onRegister:o.registerModal,width:500,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",confirmLoading:o.confirmLoading,onCancel:o.handleCancel},{footer:u(()=>[d(m,{onClick:o.handleCancel},{default:u(()=>[g("\u5173\u95ED")]),_:1},8,["onClick"]),d(m,{onClick:o.handleTrans,type:"primary",preIcon:"ant-design:swap",loading:o.confirmLoading||o.btnLoading},{default:u(()=>[g(" \u751F\u6210\u8868\u5355 ")]),_:1},8,["onClick","loading"])]),default:u(()=>[d(n,{spinning:o.confirmLoading},{default:u(()=>[d(a,{onRegister:o.registerTable,rowSelection:o.rowSelection,onTableRedo:o.queryTables},{tableTitle:u(()=>[H]),_:1},8,["onRegister","rowSelection","onTableRedo"])]),_:1},8,["spinning"])]),_:1},8,["onRegister","confirmLoading","onCancel"])}var Ee=D($,[["render",P]]);export{Ee as default};