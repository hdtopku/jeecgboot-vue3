import{j as M,C as l,bH as y,Z as b,f6 as D,u as k,r as p,s as R,Q as S,w as u,v as d,y as g,aW as v}from"./index.9d4ffdff.js";import A from"./BasicTable.4f050cd0.js";import"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{B as I}from"./index.fa33ec21.js";import{useListTable as N}from"./useListPage.30b1ebd9.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";import"./useTable.06d516c7.js";const $=M({name:"TransDb2Online",components:{BasicModal:I,BasicTable:A},emits:["success","register"],setup(o,{emit:C}){const{createMessage:f}=k(),n=l("\u6682\u65E0\u6570\u636E"),s=l(!1),r=l(!1),a=l([]),t=l([]),[m,{closeModal:c}]=y(()=>{r.value=!1,n.value="\u6682\u65E0\u6570\u636E",i.value=[],h()}),[E,{setPagination:w},{rowSelection:T,selectedRowKeys:i}]=N({bordered:!0,columns:[{title:"\u8868\u540D",align:"left",dataIndex:"id"}],dataSource:t,maxHeight:300,locale:{emptyText:n},pagination:{showQuickJumper:!1,showSizeChanger:!1},clickToRowSelect:!0,showIndexColumn:!0,showActionColumn:!1,formConfig:{schemas:[{label:"\u8868\u540D",field:"tableName",component:"Input",componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onChange:e=>B(e.target.value)},disabledLabelWidth:!0,itemProps:{labelCol:{sm:24,md:4},wrapperCol:{sm:24,md:20}}}],baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}});function h(){return s.value=!0,b.get({url:"/online/cgform/head/queryTables/"},{errorMessageMode:"none"}).then(e=>(t.value=e,a.value=[...e],e),e=>{e.message=="noadminauth"?(n.value="\u975Eadmin\u7528\u6237\u65E0\u6743\u9650\u64CD\u4F5C\uFF01",f.warn(n.value)):console.error(e),t.value=[],a.value=[]}).finally(()=>{s.value=!1})}function B(e){a.value.length!==0&&(e?(t.value=a.value.filter(L=>L.id.toLowerCase().includes(e.toLowerCase())),n.value=t.value.length===0?"\u65E0\u7B5B\u9009\u7ED3\u679C":"\u6682\u65E0\u6570\u636E"):t.value=[...a.value],w({current:1}))}function F(){c()}function _(){if(!i.value||i.value.length==0){f.warning("\u8BF7\u9009\u62E9\u4E00\u5F20\u8868");return}else{r.value=!0;let e=i.value.join(",");b.post({url:"/online/cgform/head/transTables/"+e}).then(()=>{c(),C("success")}).finally(()=>r.value=!1)}}return{emptyText:n,confirmLoading:s,btnLoading:r,metaSource:a,handleTrans:_,handleCancel:F,queryTables:h,registerModal:m,registerTable:E,rowSelection:T,selectedRowKeys:i}}}),P=v("div",null,[g(" \u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868 "),v("a",{href:"http://doc.jeecg.com/2043924",target:"_blank"}," \u53C2\u8003\u6587\u6863")],-1);function j(o,C,f,n,s,r){const a=p("BasicTable"),t=p("a-spin"),m=p("a-button"),c=p("BasicModal");return R(),S(c,{onRegister:o.registerModal,width:500,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",confirmLoading:o.confirmLoading,onCancel:o.handleCancel},{footer:u(()=>[d(m,{onClick:o.handleCancel},{default:u(()=>[g("\u5173\u95ED")]),_:1},8,["onClick"]),d(m,{onClick:o.handleTrans,type:"primary",preIcon:"ant-design:swap",loading:o.confirmLoading||o.btnLoading},{default:u(()=>[g(" \u751F\u6210\u8868\u5355 ")]),_:1},8,["onClick","loading"])]),default:u(()=>[d(t,{spinning:o.confirmLoading},{default:u(()=>[d(a,{onRegister:o.registerTable,rowSelection:o.rowSelection,onTableRedo:o.queryTables},{tableTitle:u(()=>[P]),_:1},8,["onRegister","rowSelection","onTableRedo"])]),_:1},8,["spinning"])]),_:1},8,["onRegister","confirmLoading","onCancel"])}var Me=D($,[["render",j]]);export{Me as default};