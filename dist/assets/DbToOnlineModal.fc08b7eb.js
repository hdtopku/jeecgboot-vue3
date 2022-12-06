import{j as M,C as l,bH as y,Z as b,f2 as D,u as k,r as c,s as R,Q as S,w as r,v as d,y as g,aW as v}from"./index.639f1d60.js";import A from"./BasicTable.a4fceed5.js";import"./componentMap.87abb767.js";import"./BasicTable.vue_vue_type_style_index_0_lang.ddcad0ba.js";import"./TableImg.vue_vue_type_style_index_0_lang.39d7d875.js";import{B as I}from"./index.4727c32e.js";import{useListTable as N}from"./useListPage.88620ffd.js";import"./BasicForm.2046d1b4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JAddInput.da07cc21.js";import"./areaDataUtil.e23f696d.js";import"./api.79286c6b.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./index.28e29a88.js";import"./useForm.26a3a85b.js";import"./index.e06f25f1.js";import"./useContentHeight.63cba167.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";import"./RedoOutlined.614ba4a2.js";import"./useTable.b543ecf1.js";const $=M({name:"TransDb2Online",components:{BasicModal:I,BasicTable:A},emits:["success","register"],setup(o,{emit:C}){const{createMessage:f}=k(),n=l("\u6682\u65E0\u6570\u636E"),s=l(!1),u=l(!1),a=l([]),t=l([]),[m,{closeModal:p}]=y(()=>{u.value=!1,n.value="\u6682\u65E0\u6570\u636E",i.value=[],h()}),[E,{setPagination:w},{rowSelection:T,selectedRowKeys:i}]=N({bordered:!0,columns:[{title:"\u8868\u540D",align:"left",dataIndex:"id"}],dataSource:t,maxHeight:300,locale:{emptyText:n},pagination:{showQuickJumper:!1,showSizeChanger:!1},clickToRowSelect:!0,showIndexColumn:!0,showActionColumn:!1,formConfig:{schemas:[{label:"\u8868\u540D",field:"tableName",component:"Input",componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onChange:e=>B(e.target.value)},disabledLabelWidth:!0,itemProps:{labelCol:{sm:24,md:4},wrapperCol:{sm:24,md:20}}}],baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}});function h(){return s.value=!0,b.get({url:"/online/cgform/head/queryTables/"},{errorMessageMode:"none"}).then(e=>(t.value=e,a.value=[...e],e),e=>{e.message=="noadminauth"?(n.value="\u975Eadmin\u7528\u6237\u65E0\u6743\u9650\u64CD\u4F5C\uFF01",f.warn(n.value)):console.error(e),t.value=[],a.value=[]}).finally(()=>{s.value=!1})}function B(e){a.value.length!==0&&(e?(t.value=a.value.filter(L=>L.id.toLowerCase().includes(e.toLowerCase())),n.value=t.value.length===0?"\u65E0\u7B5B\u9009\u7ED3\u679C":"\u6682\u65E0\u6570\u636E"):t.value=[...a.value],w({current:1}))}function F(){p()}function _(){if(!i.value||i.value.length==0){f.warning("\u8BF7\u9009\u62E9\u4E00\u5F20\u8868");return}else{u.value=!0;let e=i.value.join(",");b.post({url:"/online/cgform/head/transTables/"+e}).then(()=>{p(),C("success")}).finally(()=>u.value=!1)}}return{emptyText:n,confirmLoading:s,btnLoading:u,metaSource:a,handleTrans:_,handleCancel:F,queryTables:h,registerModal:m,registerTable:E,rowSelection:T,selectedRowKeys:i}}}),P=v("div",null,[g(" \u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868 "),v("a",{href:"http://doc.jeecg.com/2043924",target:"_blank"}," \u53C2\u8003\u6587\u6863")],-1);function j(o,C,f,n,s,u){const a=c("BasicTable"),t=c("a-spin"),m=c("a-button"),p=c("BasicModal");return R(),S(p,{onRegister:o.registerModal,width:500,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",confirmLoading:o.confirmLoading,onCancel:o.handleCancel},{footer:r(()=>[d(m,{onClick:o.handleCancel},{default:r(()=>[g("\u5173\u95ED")]),_:1},8,["onClick"]),d(m,{onClick:o.handleTrans,type:"primary",preIcon:"ant-design:swap",loading:o.confirmLoading||o.btnLoading},{default:r(()=>[g(" \u751F\u6210\u8868\u5355 ")]),_:1},8,["onClick","loading"])]),default:r(()=>[d(t,{spinning:o.confirmLoading},{default:r(()=>[d(a,{onRegister:o.registerTable,rowSelection:o.rowSelection,onTableRedo:o.queryTables},{tableTitle:r(()=>[P]),_:1},8,["onRegister","rowSelection","onTableRedo"])]),_:1},8,["spinning"])]),_:1},8,["onRegister","confirmLoading","onCancel"])}var ye=D($,[["render",j]]);export{ye as default};