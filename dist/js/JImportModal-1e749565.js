import{B as R}from"./index-cd2db611.js";import{s as N,aa as q,b as z,u as O,D as x}from"./jeecg-online-vendor-ecddc31b.js";import{B as K}from"./index-b03d7914.js";import{d as W,k as c,u as n,s as j,e as G,V as m,a5 as E,a6 as F,f as u,a7 as r,E as b,ab as H,aa as S,W as J,ag as P}from"./vue-bcbaddf9.js";const X=W({name:"JImportModal",components:{BasicModal:R},props:{url:{type:String,default:"",required:!1},biz:{type:String,default:"",required:!1},online:{type:Boolean,default:!1,required:!1}},emits:["ok","register"],setup(e,{emit:k,refs:w}){const{createMessage:g,createWarningModal:y}=O(),[_,{closeModal:h}]=K(a=>{v(a)}),l=N(),C=q(),i=c(!1),o=c([]),D=c(""),p=c(""),f=c(0),M=Object.assign({},n(e),n(C));j(()=>{e.url&&(D.value=`${l.uploadUrl}${e.url}`)});const $=G(()=>!(n(o).length>0));function B(){h()&&v()}function L(a){f.value=a?1:0}function V(a){const d=n(o).indexOf(a),t=n(o).slice();t.splice(d,1),o.value=t}function I(a){return o.value=[...n(o),a],!1}function T(){let{biz:a,online:d}=e;const t=new FormData;a&&t.append("isSingleTableImport",a),n(p)&&n(p).length>0&&t.append("foreignKeys",n(p)),d&&t.append("validateStatus",n(f)),n(o).forEach(s=>{t.append("files[]",s)}),i.value=!0;let A={"Content-Type":"multipart/form-data;boundary = "+new Date().getTime()};z.post({url:e.url,params:t,headers:A},{isTransformResponse:!1}).then(s=>{i.value=!1,s.success?(s.code==201?U(s.message,s.result):g.success(s.message),B(),v(),k("ok")):g.warning(s.message)})}function U(a,d){let t=l.uploadUrl+d;y({title:"导入成功,但是有错误数据!",centered:!1,content:`<div>
                        <span>${a}</span><br/>
                        <span>具体详情请<a href = ${t} target="_blank"> 点击下载 </a> </span>
                      </div>`})}function v(a){o.value=[],i.value=!1,p.value=a,f.value=0}return{register:_,getBindValue:M,uploadDisabled:$,fileList:o,uploading:i,validateStatus:f,handleClose:B,handleChangeValidateStatus:L,handleRemove:V,beforeUpload:I,handleImport:T}}}),Q={key:0,style:{margin:"0 5px 1px"}},Y=S("span",{style:{display:"inline-block",height:"32px","line-height":"32px","vertical-align":"middle"}},"是否开启校验:",-1),Z={style:{"margin-left":"6px"}};function ee(e,k,w,g,y,_){const h=m("a-switch"),l=m("a-button"),C=m("a-upload"),i=m("BasicModal");return E(),F("div",null,[u(i,P(e.$attrs,{onRegister:e.register,title:"导入EXCEL",width:600,onCancel:e.handleClose,confirmLoading:e.uploading,destroyOnClose:""}),{footer:r(()=>[u(l,{onClick:e.handleClose},{default:r(()=>[b("关闭")]),_:1},8,["onClick"]),u(l,{type:"primary",onClick:e.handleImport,disabled:e.uploadDisabled,loading:e.uploading},{default:r(()=>[b(H(e.uploading?"上传中...":"开始上传"),1)]),_:1},8,["onClick","disabled","loading"])]),default:r(()=>[e.online?(E(),F("div",Q,[Y,S("span",Z,[u(h,{checked:e.validateStatus==1,onChange:e.handleChangeValidateStatus,"checked-children":"是","un-checked-children":"否",size:"small"},null,8,["checked","onChange"])])])):J("",!0),u(C,{name:"file",accept:".xls,.xlsx",multiple:!0,fileList:e.fileList,remove:e.handleRemove,beforeUpload:e.beforeUpload},{default:r(()=>[u(l,{preIcon:"ant-design:upload-outlined"},{default:r(()=>[b("选择导入文件")]),_:1})]),_:1},8,["fileList","remove","beforeUpload"])]),_:1},16,["onRegister","onCancel","confirmLoading"])])}const se=x(X,[["render",ee]]);export{se as x};