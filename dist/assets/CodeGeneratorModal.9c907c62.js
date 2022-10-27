import{l as ee,F as f,o as w,a7 as T,dz as C,bG as te,bH as L,e$ as oe,a1 as R,fb as E,Q as ae,t as c,v as k,x as le,y as g,z as S,V as ie,B as re,W as ne,aw as se}from"./index.23784a6b.js";import{B as ue}from"./BasicForm.68eb68a1.js";import"./helper.2e61c179.js";import{u as ce}from"./useForm.1b67cd29.js";import"./JAddInput.f96768b3.js";import{B as me}from"./index.1660bc1f.js";import{b as pe}from"./useSchemas.afda172a.js";import de from"./CodeFileListModal.2c49aa21.js";import fe from"./FileSelectModal.fae8fdce.js";import"./CodeFileViewModal.a25a16fe.js";import"./uniqBy.d45e63ad.js";import"./BasicModal.604d8318.js";import"./useWindowSizeFn.c7f5a452.js";import"./useFormItem.aa979107.js";import"./functional.a720d0df.js";import"./download.eb9b6987.js";import"./base64Conver.030fa32c.js";import"./index.52e05db7.js";import"./index.b476f533.js";import"./useCountdown.1de097ab.js";import"./JUpload.847bb7e8.js";import"./api.4ab57216.js";import"./index.531e5b47.js";import"./props.b2b77096.js";import"./index.abc2a51f.js";import"./bem.8c0ec145.js";import"./props.a518648b.js";import"./useContextMenu.149fe6bb.js";import"./index.d2f7ee38.js";import"./onMountedOrActivated.20f21d4b.js";import"./index.b48c2101.js";import"./htmlmixed.97cf791a.js";import"./vue.23f9d0fa.js";/* empty css             */import"./depart.api.4e6de065.js";import"./validator.c64ec858.js";import"./user.api.c6ef119a.js";var N=(t,u,i)=>new Promise((m,b)=>{var h=a=>{try{r(i.next(a))}catch(o){b(o)}},n=a=>{try{r(i.throw(a))}catch(o){b(o)}},r=a=>a.done?m(a.value):Promise.resolve(a.value).then(h,n);r((i=i.apply(t,u)).next())});const ge=ee({name:"CodeGenerator",components:{BasicForm:ue,BasicModal:me,FileSelectModal:fe,CodeFileListModal:de},emits:["register"],setup(t){const u="JEECG_ONL_PROJECT_PATH",i=f(!0),m=f(),b=w(()=>i.value?800:1200),h=f("\u4EE3\u7801\u751F\u6210"),n=f(!1),r=f(""),a=T({projectPath:"",packageStyle:"service",jspMode:"",jformType:"1",tableName_tmp:"",ftlDescription:"",entityName:"",codeTypes:"controller,service,dao,mapper,entity,vue"}),o=T({}),F=f([]),p=T({dataSource:[],columns:[{title:"\u5B50\u8868\u540D",key:"tableName",type:C.input,disabled:!0,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u5B50\u8868\u5B9E\u4F53",key:"entityName",type:C.input,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]},{title:"\u529F\u80FD\u8BF4\u660E",key:"ftlDescription",type:C.input,validateRules:[{required:!0,message:"\u8BF7\u8F93\u5165${title}"}]}]}),M=w(()=>p.dataSource.length>0),{formSchemas:D}=pe(t,{onProjectPathChange:X,onProjectPathSearch:U,jspModeOptions:F},i),[G,{resetFields:O,setFieldsValue:B,validate:V}]=ce({schemas:D,showActionButtonGroup:!1,labelAlign:"right"}),[$,{closeModal:P}]=te(e=>N(this,null,function*(){yield O(),r.value=e.code,n.value=!1,p.dataSource=[],F.value=[],Y(),Object.assign(o,a),J()}));function J(){return N(this,null,function*(){let{main:e,sub:l,jspModeList:d,projectPath:s}=yield R.get({url:"/online/cgform/head/tableInfo",params:{code:r.value}}),v=[];for(let y of d){const{code:j,note:Z}=y;j=="many"||v.push({label:Z,value:j})}F.value=v,e.isTree=="Y"?o.jspMode="tree":o.jspMode=v[0].value,i.value=e.tableType==1,h.value="\u4EE3\u7801\u751F\u6210\u3010"+e.tableName+"\u3011",o.projectPath||(o.projectPath=s,window.localStorage.setItem(u,s)),o.jformType=e.tableType+"",o.tableName_tmp=e.tableName,o.ftlDescription=e.tableTxt;let _=E(e.tableName);o.entityName=_.substring(0,1).toUpperCase()+_.substring(1),yield ae(),B(o),l&&l.length>0&&(p.dataSource=l.map(y=>({tableName:y.tableName,entityName:Q(y.tableName),ftlDescription:y.tableTxt})))})}const[I,{openModal:H}]=L();function A(){return N(this,null,function*(){try{const e=yield V();let l=Object.assign({},e,{code:r.value,tableName:e.tableName_tmp});if(M.value){if(yield m.value.validateTable())return;l.subList=m.value.getTableData()}n.value=!0;let d=yield q(l);H(!0,{codeList:d.codeList,pathKey:d.pathKey,tableName:e.tableName_tmp}),P()}catch(e){console.error(e)}finally{n.value=!1}})}function q(e){return new Promise((l,d)=>{R.post({url:"/online/cgform/api/codeGenerate",params:e},{isTransformResponse:!1}).then(s=>{if(s.success){let v=s.result,_=s.message;l({codeList:v,pathKey:_})}else d(s.message)})})}function z(){P()}const[K,W]=L();function U(){W.openModal(!0,{})}function x(e){window.localStorage.setItem(u,e),B({projectPath:e})}function Q(e){let l=E(e);return l.substring(0,1).toUpperCase()+l.substring(1)}function Y(){let e=window.localStorage.getItem(u);e&&(a.projectPath=e)}function X(e){e.target.value&&window.localStorage.setItem(u,e.target.value)}return{title:h,modalWidth:b,confirmLoading:n,subTable:p,showSubTable:M,onSubmit:A,onCancel:z,onFileSelect:x,registerFileSelectModal:K,subTableRef:m,registerForm:G,registerModal:$,registerCodeFileListModal:I}}});function be(t,u,i,m,b,h){const n=c("BasicForm"),r=c("JVxeTable"),a=c("a-card"),o=c("a-spin"),F=c("BasicModal"),p=c("FileSelectModal"),M=c("code-file-list-modal");return k(),le(se,null,[g(F,{onRegister:t.registerModal,title:t.title,width:t.modalWidth,confirmLoading:t.confirmLoading,okText:"\u5F00\u59CB\u751F\u6210",cancelText:"\u53D6\u6D88",onOk:t.onSubmit,onCancel:t.onCancel},{default:S(()=>[g(o,{spinning:t.confirmLoading},{default:S(()=>[g(n,{onRegister:t.registerForm},null,8,["onRegister"]),t.showSubTable?(k(),ie(a,{key:0,title:"\u5B50\u8868\u4FE1\u606F",size:"small"},{default:S(()=>[g(r,re({ref:"subTableRef",rowNumber:"",maxHeight:580},t.subTable),null,16)]),_:1})):ne("",!0)]),_:1},8,["spinning"])]),_:1},8,["onRegister","title","width","confirmLoading","onOk","onCancel"]),g(p,{onRegister:t.registerFileSelectModal,onSelect:t.onFileSelect},null,8,["onRegister","onSelect"]),g(M,{onRegister:t.registerCodeFileListModal},null,8,["onRegister"])],64)}var et=oe(ge,[["render",be]]);export{et as default};