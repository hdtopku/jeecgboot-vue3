var v=Object.defineProperty,$=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(i,e,t)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,C=(i,e)=>{for(var t in e||(e={}))O.call(e,t)&&w(i,t,e[t]);if(F)for(var t of F(e))M.call(e,t)&&w(i,t,e[t]);return i},E=(i,e)=>$(i,B(e));var T=(i,e,t)=>new Promise((m,c)=>{var d=s=>{try{a(t.next(s))}catch(u){c(u)}},g=s=>{try{a(t.throw(s))}catch(u){c(u)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(d,g);a((t=t.apply(i,e)).next())});import{B as N}from"./BasicTable.1db2499e.js";import{T as P}from"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{u as R}from"./useTable.d616a74c.js";import{a1 as U,l as A,m as D,r as W,o as y,t as x,v as L,x as V,y as r,z as l,L as p,C as I,u as j}from"./index.6c1aeca2.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";const H=[{title:"\u6587\u4EF6\u540D\u79F0",dataIndex:"fileName",width:120},{title:"\u6587\u4EF6\u5730\u5740",dataIndex:"url",width:100}],z=[{label:"\u6587\u4EF6\u540D\u79F0",field:"fileName",component:"Input",colProps:{span:6}},{label:"\u6587\u4EF6\u5730\u5740",field:"url",component:"Input",colProps:{span:6}}],G="/sys/oss/file/upload",K="/sys/upload/uploadMinio",X=i=>U.get({url:"/sys/oss/file/list",params:i}),q=(i,e)=>U.delete({url:"/sys/oss/file/delete",params:i},{joinParamsToUrl:!0}).then(()=>{e()}),J=I("OSS\u6587\u4EF6\u4E0A\u4F20"),Q=I("MINIO\u6587\u4EF6\u4E0A\u4F20"),Y=A({name:"system-ossfile"}),Le=A(E(C({},Y),{setup(i){const{createMessage:e}=j(),t=D(),m={"X-Access-Token":W()},[c,{reload:d}]=R({api:X,rowKey:"id",columns:H,formConfig:{labelWidth:120,schemas:z,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},beforeFetch:o=>Object.assign({column:"createTime",order:"desc"},o),actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),g=y(()=>`${t.uploadUrl}${G}`),a=y(()=>`${t.uploadUrl}${K}`);function s(o){if(o&&o.url){console.log("glob.onlineUrl",t.viewUrl);let n=encodeURIComponent(o.url);(n.endsWith(".pdf")||n.endsWith(".doc")||n.endsWith(".docx"))&&(n=n+"&officePreviewType=pdf");let f=`${t.viewUrl}?url=`+n;window.open(f,"_blank")}}function u(o){return T(this,null,function*(){yield q({id:o.id},d)})}function h(o){var n=o.type;if(n==="image"){if(n.indexOf("image")<0)return e.warning("\u8BF7\u4E0A\u4F20\u56FE\u7247"),!1}else if(n==="file"&&n.indexOf("image")>=0)return e.warning("\u8BF7\u4E0A\u4F20\u6587\u4EF6"),!1;return!0}function b(o){o.file.status==="done"?o.file.response.success?(d(),e.success(`${o.file.name} \u4E0A\u4F20\u6210\u529F!`)):e.error(`${o.file.response.message}`):o.file.status==="error"&&e.error(`${o.file.response.message}`)}function S(o){return[{label:"\u9884\u89C8",onClick:s.bind(null,o)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:u.bind(null,o)}}]}return(o,n)=>{const f=x("a-button"),_=x("a-upload");return L(),V("div",null,[r(p(N),{onRegister:p(c)},{tableTitle:l(()=>[r(_,{name:"file",showUploadList:!1,action:p(g),headers:m,beforeUpload:h,onChange:b},{default:l(()=>[r(f,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:l(()=>[J]),_:1})]),_:1},8,["action"]),r(_,{name:"file",showUploadList:!1,action:p(a),headers:m,beforeUpload:h,onChange:b},{default:l(()=>[r(f,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:l(()=>[Q]),_:1})]),_:1},8,["action"])]),action:l(({record:k})=>[r(p(P),{actions:S(k)},null,8,["actions"])]),_:1},8,["onRegister"])])}}}));export{Le as default};