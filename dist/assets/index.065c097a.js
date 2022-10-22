var v=Object.defineProperty,$=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(i,e,t)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,C=(i,e)=>{for(var t in e||(e={}))O.call(e,t)&&w(i,t,e[t]);if(F)for(var t of F(e))M.call(e,t)&&w(i,t,e[t]);return i},E=(i,e)=>$(i,B(e));var T=(i,e,t)=>new Promise((m,c)=>{var d=s=>{try{a(t.next(s))}catch(u){c(u)}},g=s=>{try{a(t.throw(s))}catch(u){c(u)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(d,g);a((t=t.apply(i,e)).next())});import{B as N}from"./BasicTable.5ee1302a.js";import{T as P}from"./helper.1b3fdfba.js";import"./TableImg.7ccb5f8d.js";import{u as R}from"./useTable.99eebf43.js";import{a1 as U,l as A,m as D,r as W,o as y,t as x,v as L,x as V,y as r,z as l,L as p,C as I,u as j}from"./index.b3d2a891.js";import"./BasicForm.2d2aa4ab.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import"./useFormItem.c06072f5.js";import"./api.1d3c1927.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./index.2ff6eac0.js";import"./useContentHeight.0b543e32.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./RedoOutlined.b10d0ad6.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./index.96560ef2.js";const H=[{title:"\u6587\u4EF6\u540D\u79F0",dataIndex:"fileName",width:120},{title:"\u6587\u4EF6\u5730\u5740",dataIndex:"url",width:100}],z=[{label:"\u6587\u4EF6\u540D\u79F0",field:"fileName",component:"Input",colProps:{span:6}},{label:"\u6587\u4EF6\u5730\u5740",field:"url",component:"Input",colProps:{span:6}}],G="/sys/oss/file/upload",K="/sys/upload/uploadMinio",X=i=>U.get({url:"/sys/oss/file/list",params:i}),q=(i,e)=>U.delete({url:"/sys/oss/file/delete",params:i},{joinParamsToUrl:!0}).then(()=>{e()}),J=I("OSS\u6587\u4EF6\u4E0A\u4F20"),Q=I("MINIO\u6587\u4EF6\u4E0A\u4F20"),Y=A({name:"system-ossfile"}),De=A(E(C({},Y),{setup(i){const{createMessage:e}=j(),t=D(),m={"X-Access-Token":W()},[c,{reload:d}]=R({api:X,rowKey:"id",columns:H,formConfig:{labelWidth:120,schemas:z,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},beforeFetch:o=>Object.assign({column:"createTime",order:"desc"},o),actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),g=y(()=>`${t.uploadUrl}${G}`),a=y(()=>`${t.uploadUrl}${K}`);function s(o){if(o&&o.url){console.log("glob.onlineUrl",t.viewUrl);let n=encodeURIComponent(o.url);(n.endsWith(".pdf")||n.endsWith(".doc")||n.endsWith(".docx"))&&(n=n+"&officePreviewType=pdf");let f=`${t.viewUrl}?url=`+n;window.open(f,"_blank")}}function u(o){return T(this,null,function*(){yield q({id:o.id},d)})}function h(o){var n=o.type;if(n==="image"){if(n.indexOf("image")<0)return e.warning("\u8BF7\u4E0A\u4F20\u56FE\u7247"),!1}else if(n==="file"&&n.indexOf("image")>=0)return e.warning("\u8BF7\u4E0A\u4F20\u6587\u4EF6"),!1;return!0}function b(o){o.file.status==="done"?o.file.response.success?(d(),e.success(`${o.file.name} \u4E0A\u4F20\u6210\u529F!`)):e.error(`${o.file.response.message}`):o.file.status==="error"&&e.error(`${o.file.response.message}`)}function S(o){return[{label:"\u9884\u89C8",onClick:s.bind(null,o)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:u.bind(null,o)}}]}return(o,n)=>{const f=x("a-button"),_=x("a-upload");return L(),V("div",null,[r(p(N),{onRegister:p(c)},{tableTitle:l(()=>[r(_,{name:"file",showUploadList:!1,action:p(g),headers:m,beforeUpload:h,onChange:b},{default:l(()=>[r(f,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:l(()=>[J]),_:1})]),_:1},8,["action"]),r(_,{name:"file",showUploadList:!1,action:p(a),headers:m,beforeUpload:h,onChange:b},{default:l(()=>[r(f,{type:"primary",preIcon:"ant-design:upload-outlined"},{default:l(()=>[Q]),_:1})]),_:1},8,["action"])]),action:l(({record:k})=>[r(p(P),{actions:S(k)},null,8,["actions"])]),_:1},8,["onRegister"])])}}}));export{De as default};
