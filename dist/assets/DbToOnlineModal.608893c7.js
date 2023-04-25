import{j as M,C as l,bH as y,Z as b,f5 as D,u as k,r as c,s as R,Q as S,w as r,v as d,y as g,aW as v}from"./index.b3c2d15d.js";import A from"./BasicTable.6f8187cc.js";import"./componentMap.a24260de.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import{B as I}from"./index.c08fb6c5.js";import{useListTable as N}from"./useListPage.2b7a424e.js";import"./BasicForm.1d30e5fc.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JAddInput.eb06f3b7.js";import"./areaDataUtil.26505ac2.js";import"./api.363f3378.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./useForm.853cc25f.js";import"./index.82bab5e4.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./RedoOutlined.66bed16b.js";import"./useTable.f4111a7b.js";const $=M({name:"TransDb2Online",components:{BasicModal:I,BasicTable:A},emits:["success","register"],setup(o,{emit:C}){const{createMessage:f}=k(),n=l("\u6682\u65E0\u6570\u636E"),s=l(!1),u=l(!1),a=l([]),t=l([]),[m,{closeModal:p}]=y(()=>{u.value=!1,n.value="\u6682\u65E0\u6570\u636E",i.value=[],h()}),[E,{setPagination:w},{rowSelection:T,selectedRowKeys:i}]=N({bordered:!0,columns:[{title:"\u8868\u540D",align:"left",dataIndex:"id"}],dataSource:t,maxHeight:300,locale:{emptyText:n},pagination:{showQuickJumper:!1,showSizeChanger:!1},clickToRowSelect:!0,showIndexColumn:!0,showActionColumn:!1,formConfig:{schemas:[{label:"\u8868\u540D",field:"tableName",component:"Input",componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onChange:e=>B(e.target.value)},disabledLabelWidth:!0,itemProps:{labelCol:{sm:24,md:4},wrapperCol:{sm:24,md:20}}}],baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}});function h(){return s.value=!0,b.get({url:"/online/cgform/head/queryTables/"},{errorMessageMode:"none"}).then(e=>(t.value=e,a.value=[...e],e),e=>{e.message=="noadminauth"?(n.value="\u975Eadmin\u7528\u6237\u65E0\u6743\u9650\u64CD\u4F5C\uFF01",f.warn(n.value)):console.error(e),t.value=[],a.value=[]}).finally(()=>{s.value=!1})}function B(e){a.value.length!==0&&(e?(t.value=a.value.filter(L=>L.id.toLowerCase().includes(e.toLowerCase())),n.value=t.value.length===0?"\u65E0\u7B5B\u9009\u7ED3\u679C":"\u6682\u65E0\u6570\u636E"):t.value=[...a.value],w({current:1}))}function F(){p()}function _(){if(!i.value||i.value.length==0){f.warning("\u8BF7\u9009\u62E9\u4E00\u5F20\u8868");return}else{u.value=!0;let e=i.value.join(",");b.post({url:"/online/cgform/head/transTables/"+e}).then(()=>{p(),C("success")}).finally(()=>u.value=!1)}}return{emptyText:n,confirmLoading:s,btnLoading:u,metaSource:a,handleTrans:_,handleCancel:F,queryTables:h,registerModal:m,registerTable:E,rowSelection:T,selectedRowKeys:i}}}),P=v("div",null,[g(" \u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868 "),v("a",{href:"http://doc.jeecg.com/2043924",target:"_blank"}," \u53C2\u8003\u6587\u6863")],-1);function j(o,C,f,n,s,u){const a=c("BasicTable"),t=c("a-spin"),m=c("a-button"),p=c("BasicModal");return R(),S(p,{onRegister:o.registerModal,width:500,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",confirmLoading:o.confirmLoading,onCancel:o.handleCancel},{footer:r(()=>[d(m,{onClick:o.handleCancel},{default:r(()=>[g("\u5173\u95ED")]),_:1},8,["onClick"]),d(m,{onClick:o.handleTrans,type:"primary",preIcon:"ant-design:swap",loading:o.confirmLoading||o.btnLoading},{default:r(()=>[g(" \u751F\u6210\u8868\u5355 ")]),_:1},8,["onClick","loading"])]),default:r(()=>[d(t,{spinning:o.confirmLoading},{default:r(()=>[d(a,{onRegister:o.registerTable,rowSelection:o.rowSelection,onTableRedo:o.queryTables},{tableTitle:r(()=>[P]),_:1},8,["onRegister","rowSelection","onTableRedo"])]),_:1},8,["spinning"])]),_:1},8,["onRegister","confirmLoading","onCancel"])}var De=D($,[["render",j]]);export{De as default};