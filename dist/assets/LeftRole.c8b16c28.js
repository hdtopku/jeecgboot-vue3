import{l as d,f0 as _,a1 as h,t as w,v as g,V as b,z as v,aU as S}from"./index.6c1aeca2.js";import{B as T}from"./BasicTable.1db2499e.js";import"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{useListPage as y}from"./useListPage.7d5f3d18.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";import"./useTable.d616a74c.js";var B=(r,n,o)=>new Promise((l,i)=>{var p=e=>{try{a(o.next(e))}catch(t){i(t)}},s=e=>{try{a(o.throw(e))}catch(t){i(t)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(p,s);a((o=o.apply(r,n)).next())});const C=d({name:"LeftRole",components:{BasicTable:T},emits:["select"],setup(r,{emit:n}){const{tableContext:o,createMessage:l}=y({tableProps:{api:a,rowKey:"id",size:"small",bordered:!0,columns:[{title:"\u89D2\u8272\u7F16\u7801",align:"center",dataIndex:"roleCode"},{title:"\u89D2\u8272\u540D\u79F0",align:"center",dataIndex:"roleName"}],rowSelection:{type:"radio",onChange(t){t.length>0&&n("select",t[0])}},canResize:!1,clickToRowSelect:!0,useSearchForm:!1,showActionColumn:!1,showTableSetting:!1}}),[i,{clearSelectedRowKeys:p},{rowSelection:s}]=o;function a(t){return B(this,null,function*(){let{code:m,success:c,result:u,message:f}=yield h.get({url:"/sys/role/list",params:t},{isTransformResponse:!1});return c?u:(m===510&&l.warning(f),{})})}function e(){p()}return{rowSelection:s,registerTable:i,clearSelected:e}}}),R=S("span",null,null,-1);function x(r,n,o,l,i,p){const s=w("BasicTable");return g(),b(s,{onRegister:r.registerTable,rowSelection:r.rowSelection},{tableTop:v(()=>[R]),_:1},8,["onRegister","rowSelection"])}var he=_(C,[["render",x]]);export{he as default};