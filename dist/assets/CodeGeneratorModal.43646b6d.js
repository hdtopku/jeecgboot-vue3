import{j as ee,C as f,m as w,a8 as C,eb as T,bH as te,bI as L,f6 as oe,Z as R,fk as E,G as ae,r as m,s as k,t as le,v as g,w as S,Q as ie,x as re,R as ne,ax as se}from"./index.9d4ffdff.js";import{B as ue}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as me}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{B as ce}from"./index.fa33ec21.js";import{b as pe}from"./useSchemas.ae09e9b3.js";import de from"./CodeFileListModal.fa123830.js";import fe from"./FileSelectModal.f2d1b52b.js";import"./CodeFileViewModal.305dc170.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./api.d12fe1c3.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./areaDataUtil.d553b295.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./validator.5f3e0429.js";import"./user.api.649c11d7.js";var N=(t,u,i)=>new Promise((c,b)=>{var h=a=>{try{r(i.next(a))}catch(o){b(o)}},n=a=>{try{r(i.throw(a))}catch(o){b(o)}},r=a=>a.done?c(a.value):Promise.resolve(a.value).then(h,n);r((i=i.apply(t,u)).next())});const ge=ee({name:"CodeGenerator",components:{BasicForm:ue,BasicModal:ce,FileSelectModal:fe,CodeFileListModal:de},emits:["register"],setup(t){const u="JEECG_ONL_PROJECT_PATH",i=f(!0),c=f(),b=w(()=>i.value?800:1200),h=f("\u4EE3\u7801\u751F\u6210"),n=f(!1),r=f(""),a=C({projectPath:"",packageStyle:"service",jspMode:"",jformType:"1",tableName_tmp:"",ftlDescription:"",entityName:"",codeTypes:"controller,service,dao,mapper,entity,vue"}),o=C({}),v=f([]),p=C({dataSource:[],columns:[{title:"\u5B50\u8868\u540D",key:"tableName",type:T.input,disabled:!0,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u5B50\u8868\u5B9E\u4F53",key:"entityName",type:T.input,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u529F\u80FD\u8BF4\u660E",key:"ftlDescription",type:T.input,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]}]}),M=w(()=>p.dataSource.length>0),{formSchemas:D}=pe(t,{onProjectPathChange:Z,onProjectPathSearch:W,jspModeOptions:v},i),[G,{resetFields:O,setFieldsValue:B,validate:I}]=me({schemas:D,showActionButtonGroup:!1,labelAlign:"right"}),[J,{closeModal:j}]=te(e=>N(this,null,function*(){yield O(),r.value=e.code,n.value=!1,p.dataSource=[],v.value=[],Y(),Object.assign(o,a),V()}));function V(){return N(this,null,function*(){let{main:e,sub:l,jspModeList:d,projectPath:s}=yield R.get({url:"/online/cgform/head/tableInfo",params:{code:r.value}}),F=[];for(let y of d){const{code:P,note:X}=y;P=="many"||F.push({label:X,value:P})}v.value=F,e.isTree=="Y"?o.jspMode="tree":o.jspMode=F[0].value,i.value=e.tableType==1,h.value="\u4EE3\u7801\u751F\u6210\u3010"+e.tableName+"\u3011",o.projectPath||(o.projectPath=s,window.localStorage.setItem(u,s)),o.jformType=e.tableType+"",o.tableName_tmp=e.tableName,o.ftlDescription=e.tableTxt;let _=E(e.tableName);o.entityName=_.substring(0,1).toUpperCase()+_.substring(1),yield ae(),B(o),l&&l.length>0&&(p.dataSource=l.map(y=>({tableName:y.tableName,entityName:Q(y.tableName),ftlDescription:y.tableTxt})))})}const[$,{openModal:H}]=L();function A(){return N(this,null,function*(){try{const e=yield I();let l=Object.assign({},e,{code:r.value,tableName:e.tableName_tmp});if(M.value){if(yield c.value.validateTable())return;l.subList=c.value.getTableData()}n.value=!0;let d=yield q(l);H(!0,{codeList:d.codeList,pathKey:d.pathKey,tableName:e.tableName_tmp}),j()}catch(e){console.error(e)}finally{n.value=!1}})}function q(e){return new Promise((l,d)=>{R.post({url:"/online/cgform/api/codeGenerate",params:e},{isTransformResponse:!1}).then(s=>{if(s.success){let F=s.result,_=s.message;l({codeList:F,pathKey:_})}else d(s.message)})})}function K(){j()}const[x,U]=L();function W(){U.openModal(!0,{})}function z(e){window.localStorage.setItem(u,e),B({projectPath:e})}function Q(e){let l=E(e);return l.substring(0,1).toUpperCase()+l.substring(1)}function Y(){let e=window.localStorage.getItem(u);e&&(a.projectPath=e)}function Z(e){e.target.value&&window.localStorage.setItem(u,e.target.value)}return{title:h,modalWidth:b,confirmLoading:n,subTable:p,showSubTable:M,onSubmit:A,onCancel:K,onFileSelect:z,registerFileSelectModal:x,subTableRef:c,registerForm:G,registerModal:J,registerCodeFileListModal:$}}});function be(t,u,i,c,b,h){const n=m("BasicForm"),r=m("JVxeTable"),a=m("a-card"),o=m("a-spin"),v=m("BasicModal"),p=m("FileSelectModal"),M=m("code-file-list-modal");return k(),le(se,null,[g(v,{onRegister:t.registerModal,title:t.title,width:t.modalWidth,confirmLoading:t.confirmLoading,okText:"\u5F00\u59CB\u751F\u6210",cancelText:"\u53D6\u6D88",onOk:t.onSubmit,onCancel:t.onCancel},{default:S(()=>[g(o,{spinning:t.confirmLoading},{default:S(()=>[g(n,{onRegister:t.registerForm},null,8,["onRegister"]),t.showSubTable?(k(),ie(a,{key:0,title:"\u5B50\u8868\u4FE1\u606F",size:"small"},{default:S(()=>[g(r,re({ref:"subTableRef",rowNumber:"",maxHeight:580},t.subTable),null,16)]),_:1})):ne("",!0)]),_:1},8,["spinning"])]),_:1},8,["onRegister","title","width","confirmLoading","onOk","onCancel"]),g(p,{onRegister:t.registerFileSelectModal,onSelect:t.onFileSelect},null,8,["onRegister","onSelect"]),g(M,{onRegister:t.registerCodeFileListModal},null,8,["onRegister"])],64)}var lt=oe(ge,[["render",be]]);export{lt as default};