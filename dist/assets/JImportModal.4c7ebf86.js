import{B as A}from"./index.117f635e.js";import{j as q,bH as z,k as N,bv as J,C as c,K as n,aa as K,m as O,Z as j,u as H,q as W,r as m,s as _,t as E,v as i,w as d,y as b,z as x,aW as w,R as G,x as P}from"./index.25572ab7.js";const X=q({name:"JImportModal",components:{BasicModal:A},props:{url:{type:String,default:"",required:!1},biz:{type:String,default:"",required:!1},online:{type:Boolean,default:!1,required:!1}},emits:["ok","register"],setup(e,{emit:F,refs:M}){const{createMessage:g,createWarningModal:B}=H(),[y,{closeModal:h}]=z(a=>{v(a)}),l=N(),C=J(),u=c(!1),o=c([]),S=c(""),p=c(""),f=c(0),D=Object.assign({},n(e),n(C));K(()=>{e.url&&(S.value=`${l.uploadUrl}${e.url}`)});const $=O(()=>!(n(o).length>0));function k(){h()&&v()}function L(a){f.value=a?1:0}function I(a){const r=n(o).indexOf(a),t=n(o).slice();t.splice(r,1),o.value=t}function V(a){return o.value=[...n(o),a],!1}function R(){let{biz:a,online:r}=e;const t=new FormData;a&&t.append("isSingleTableImport",a),n(p)&&n(p).length>0&&t.append("foreignKeys",n(p)),r&&t.append("validateStatus",n(f)),n(o).forEach(s=>{t.append("files[]",s)}),u.value=!0;let U={"Content-Type":"multipart/form-data;boundary = "+new Date().getTime()};j.post({url:e.url,params:t,headers:U},{isTransformResponse:!1}).then(s=>{u.value=!1,s.success?(s.code==201?T(s.message,s.result):g.success(s.message),k(),v(),F("ok")):g.warning(s.message)})}function T(a,r){let t=l.uploadUrl+r;B({title:"\u5BFC\u5165\u6210\u529F,\u4F46\u662F\u6709\u9519\u8BEF\u6570\u636E!",centered:!1,content:`<div>
                        <span>${a}</span><br/>
                        <span>\u5177\u4F53\u8BE6\u60C5\u8BF7<a href = ${t} target="_blank"> \u70B9\u51FB\u4E0B\u8F7D </a> </span>
                      </div>`})}function v(a){o.value=[],u.value=!1,p.value=a,f.value=0}return{register:y,getBindValue:D,uploadDisabled:$,fileList:o,uploading:u,validateStatus:f,handleClose:k,handleChangeValidateStatus:L,handleRemove:I,beforeUpload:V,handleImport:R}}}),Z={key:0,style:{margin:"0 5px 1px"}},Q=w("span",{style:{display:"inline-block",height:"32px","line-height":"32px","vertical-align":"middle"}},"\u662F\u5426\u5F00\u542F\u6821\u9A8C:",-1),Y={style:{"margin-left":"6px"}};function ee(e,F,M,g,B,y){const h=m("a-switch"),l=m("a-button"),C=m("a-upload"),u=m("BasicModal");return _(),E("div",null,[i(u,P(e.$attrs,{onRegister:e.register,title:"\u5BFC\u5165EXCEL",width:600,onCancel:e.handleClose,confirmLoading:e.uploading,destroyOnClose:""}),{footer:d(()=>[i(l,{onClick:e.handleClose},{default:d(()=>[b("\u5173\u95ED")]),_:1},8,["onClick"]),i(l,{type:"primary",onClick:e.handleImport,disabled:e.uploadDisabled,loading:e.uploading},{default:d(()=>[b(x(e.uploading?"\u4E0A\u4F20\u4E2D...":"\u5F00\u59CB\u4E0A\u4F20"),1)]),_:1},8,["onClick","disabled","loading"])]),default:d(()=>[e.online?(_(),E("div",Z,[Q,w("span",Y,[i(h,{checked:e.validateStatus==1,onChange:e.handleChangeValidateStatus,"checked-children":"\u662F","un-checked-children":"\u5426",size:"small"},null,8,["checked","onChange"])])])):G("",!0),i(C,{name:"file",accept:".xls,.xlsx",multiple:!0,fileList:e.fileList,remove:e.handleRemove,beforeUpload:e.beforeUpload},{default:d(()=>[i(l,{preIcon:"ant-design:upload-outlined"},{default:d(()=>[b("\u9009\u62E9\u5BFC\u5165\u6587\u4EF6")]),_:1})]),_:1},8,["fileList","remove","beforeUpload"])]),_:1},16,["onRegister","onCancel","confirmLoading"])])}const te=W(X,[["render",ee]]);export{te as J};