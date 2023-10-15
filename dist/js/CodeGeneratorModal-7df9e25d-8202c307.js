import{Q as ee,b as R}from"./jeecg-online-vendor-885afdd4.js";import{B as te}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as oe}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{J as N,B as ae,z as k,_ as x}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{B as ie}from"./index-9d0047d3.js";import{T as re}from"./useSchemas-fc8d97ce-f2ab2237.js";import le from"./CodeFileListModal-4831ce3d-43238802.js";import se from"./FileSelectModal-64aaf623-2405f09d.js";import"./antd-vue-vendor-a78909e6.js";import{d as ne,k as g,e as B,r as C,V as c,a5 as _,a6 as me,f,a7 as w,a9 as ce,ag as pe,W as ue,F as de,q as ge}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./echarts-vendor-6c8e2159.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";import"./validator-7e062b4f.js";import"./user.api-023a32e5.js";import"./CodeFileViewModal-5990dac4-239736bd.js";var F=(t,m,r)=>new Promise((p,b)=>{var h=a=>{try{l(r.next(a))}catch(o){b(o)}},s=a=>{try{l(r.throw(a))}catch(o){b(o)}},l=a=>a.done?p(a.value):Promise.resolve(a.value).then(h,s);l((r=r.apply(t,m)).next())});const fe=ne({name:"CodeGenerator",components:{BasicForm:te,BasicModal:ie,FileSelectModal:se,CodeFileListModal:le},emits:["register"],setup(t){const m="JEECG_ONL_PROJECT_PATH",r=g(!0),p=g(),b=B(()=>r.value?800:1200),h=g("代码生成"),s=g(!1),l=g(""),a=C({projectPath:"",packageStyle:"service",jspMode:"",jformType:"1",tableName_tmp:"",ftlDescription:"",entityName:"",codeTypes:"controller,service,dao,mapper,entity,vue"}),o=C({}),v=g([]),u=C({dataSource:[],columns:[{title:"子表名",key:"tableName",type:N.input,disabled:!0,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"子表实体",key:"entityName",type:N.input,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"功能说明",key:"ftlDescription",type:N.input,validateRules:[{required:!0,message:"请输入${title}"}]}]}),M=B(()=>u.dataSource.length>0),{formSchemas:I}=re(t,{onProjectPathChange:X,onProjectPathSearch:z,jspModeOptions:v},r),[O,{resetFields:V,setFieldsValue:j,validate:D}]=oe({schemas:I,showActionButtonGroup:!1,labelAlign:"right"}),[G,{closeModal:L}]=ae(e=>F(this,null,function*(){yield V(),l.value=e.code,s.value=!1,u.dataSource=[],v.value=[],Y(),Object.assign(o,a),J()}));function J(){return F(this,null,function*(){let{main:e,sub:i,jspModeList:d,projectPath:n}=yield R.get({url:"/online/cgform/head/tableInfo",params:{code:l.value}}),y=[];for(let T of d){const{code:P,note:Z}=T;P=="many"||y.push({label:Z,value:P})}v.value=y,e.isTree=="Y"?o.jspMode="tree":o.jspMode=y[0].value,r.value=e.tableType==1,h.value="代码生成【"+e.tableName+"】",o.projectPath||(o.projectPath=n,window.localStorage.setItem(m,n)),o.jformType=e.tableType+"",o.tableName_tmp=e.tableName,o.ftlDescription=e.tableTxt;let S=x(e.tableName);o.entityName=S.substring(0,1).toUpperCase()+S.substring(1),yield ge(),j(o),i&&i.length>0&&(u.dataSource=i.map(T=>({tableName:T.tableName,entityName:Q(T.tableName),ftlDescription:T.tableTxt})))})}const[$,{openModal:q}]=k();function E(){return F(this,null,function*(){try{const e=yield D();let i=Object.assign({},e,{code:l.value,tableName:e.tableName_tmp});if(M.value){if(yield p.value.validateTable())return;i.subList=p.value.getTableData()}s.value=!0;let d=yield K(i);q(!0,{codeList:d.codeList,pathKey:d.pathKey,tableName:e.tableName_tmp}),L()}catch(e){}finally{s.value=!1}})}function K(e){return new Promise((i,d)=>{R.post({url:"/online/cgform/api/codeGenerate",params:e},{isTransformResponse:!1}).then(n=>{if(n.success){let y=n.result,S=n.message;i({codeList:y,pathKey:S})}else this.$message.error(n.message),d(n.message)})})}function A(){L()}const[H,W]=k();function z(){W.openModal(!0,{})}function U(e){window.localStorage.setItem(m,e),j({projectPath:e})}function Q(e){let i=x(e);return i.substring(0,1).toUpperCase()+i.substring(1)}function Y(){let e=window.localStorage.getItem(m);e&&(a.projectPath=e)}function X(e){e.target.value&&window.localStorage.setItem(m,e.target.value)}return{title:h,modalWidth:b,confirmLoading:s,subTable:u,showSubTable:M,onSubmit:E,onCancel:A,onFileSelect:U,registerFileSelectModal:H,subTableRef:p,registerForm:O,registerModal:G,registerCodeFileListModal:$}}});function be(t,m,r,p,b,h){const s=c("BasicForm"),l=c("JVxeTable"),a=c("a-card"),o=c("a-spin"),v=c("BasicModal"),u=c("FileSelectModal"),M=c("code-file-list-modal");return _(),me(de,null,[f(v,{onRegister:t.registerModal,title:t.title,width:t.modalWidth,confirmLoading:t.confirmLoading,okText:"开始生成",cancelText:"取消",onOk:t.onSubmit,onCancel:t.onCancel},{default:w(()=>[f(o,{spinning:t.confirmLoading},{default:w(()=>[f(s,{onRegister:t.registerForm},null,8,["onRegister"]),t.showSubTable?(_(),ce(a,{key:0,title:"子表信息",size:"small"},{default:w(()=>[f(l,pe({ref:"subTableRef",rowNumber:"",maxHeight:580},t.subTable),null,16)]),_:1})):ue("",!0)]),_:1},8,["spinning"])]),_:1},8,["onRegister","title","width","confirmLoading","onOk","onCancel"]),f(u,{onRegister:t.registerFileSelectModal,onSelect:t.onFileSelect},null,8,["onRegister","onSelect"]),f(M,{onRegister:t.registerCodeFileListModal},null,8,["onRegister"])],64)}const st=ee(fe,[["render",be]]);export{st as default};