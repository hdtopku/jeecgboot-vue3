import{l as d,eY as _,a1 as h,t as w,v as g,V as b,z as v,aV as S}from"./index.b3d2a891.js";import{B as T}from"./BasicTable.5ee1302a.js";import"./helper.1b3fdfba.js";import"./TableImg.7ccb5f8d.js";import{useListPage as y}from"./useListPage.c9ea079e.js";import"./BasicForm.2d2aa4ab.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import"./useFormItem.c06072f5.js";import"./api.1d3c1927.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./index.2ff6eac0.js";import"./useContentHeight.0b543e32.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./RedoOutlined.b10d0ad6.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./index.96560ef2.js";import"./useTable.99eebf43.js";var B=(r,n,o)=>new Promise((l,i)=>{var p=e=>{try{a(o.next(e))}catch(t){i(t)}},s=e=>{try{a(o.throw(e))}catch(t){i(t)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(p,s);a((o=o.apply(r,n)).next())});const C=d({name:"LeftRole",components:{BasicTable:T},emits:["select"],setup(r,{emit:n}){const{tableContext:o,createMessage:l}=y({tableProps:{api:a,rowKey:"id",size:"small",bordered:!0,columns:[{title:"\u89D2\u8272\u7F16\u7801",align:"center",dataIndex:"roleCode"},{title:"\u89D2\u8272\u540D\u79F0",align:"center",dataIndex:"roleName"}],rowSelection:{type:"radio",onChange(t){t.length>0&&n("select",t[0])}},canResize:!1,clickToRowSelect:!0,useSearchForm:!1,showActionColumn:!1,showTableSetting:!1}}),[i,{clearSelectedRowKeys:p},{rowSelection:s}]=o;function a(t){return B(this,null,function*(){let{code:m,success:c,result:u,message:f}=yield h.get({url:"/sys/role/list",params:t},{isTransformResponse:!1});return c?u:(m===510&&l.warning(f),{})})}function e(){p()}return{rowSelection:s,registerTable:i,clearSelected:e}}}),R=S("span",null,null,-1);function x(r,n,o,l,i,p){const s=w("BasicTable");return g(),b(s,{onRegister:r.registerTable,rowSelection:r.rowSelection},{tableTop:v(()=>[R]),_:1},8,["onRegister","rowSelection"])}var de=_(C,[["render",x]]);export{de as default};
