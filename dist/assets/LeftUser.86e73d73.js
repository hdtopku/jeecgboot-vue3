import{l as d,f0 as h,a1 as w,t as _,v as b,V as g,z as C,aU as v}from"./index.6c1aeca2.js";import{B as D}from"./BasicTable.1db2499e.js";import"./helper.15e1830a.js";import"./TableImg.e6a1ca63.js";import{useListPage as B}from"./useListPage.7d5f3d18.js";import"./BasicForm.e500713f.js";import"./uniqBy.b316cd09.js";import"./index.c1c509d9.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import"./useFormItem.63b4eda3.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";import"./RedoOutlined.f33cdacc.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";import"./useTable.d616a74c.js";var S=(r,n,o)=>new Promise((p,i)=>{var m=e=>{try{a(o.next(e))}catch(t){i(t)}},s=e=>{try{a(o.throw(e))}catch(t){i(t)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(m,s);a((o=o.apply(r,n)).next())});const T=d({name:"LeftUser",components:{BasicTable:D},emits:["select"],setup(r,{emit:n}){const{tableContext:o,createMessage:p}=B({tableProps:{api:a,rowKey:"id",size:"small",bordered:!0,columns:[{title:"\u8D26\u53F7",dataIndex:"username",width:200},{title:"\u59D3\u540D",dataIndex:"realname",width:200}],rowSelection:{type:"radio",onChange(t){t.length>0&&n("select",t[0])}},formConfig:{schemas:[{label:"\u8D26\u53F7",field:"username",component:"JInput",componentProps:{placeholder:"\u8F93\u5165\u8D26\u53F7\u6A21\u7CCA\u67E5\u8BE2"}},{label:"\u59D3\u540D",field:"realname",component:"JInput",componentProps:{placeholder:"\u8F93\u5165\u59D3\u540D\u6A21\u7CCA\u67E5\u8BE2"}}]},canResize:!1,clickToRowSelect:!0,showActionColumn:!1,showTableSetting:!1}}),[i,{clearSelectedRowKeys:m},{rowSelection:s}]=o;function a(t){return S(this,null,function*(){let{code:l,success:u,result:c,message:f}=yield w.get({url:"/sys/user/list",params:t},{isTransformResponse:!1});return u?c:(l===510&&p.warning(f),{})})}function e(){m()}return{rowSelection:s,registerTable:i,clearSelected:e}}}),y=v("span",null,null,-1);function P(r,n,o,p,i,m){const s=_("BasicTable");return b(),g(s,{onRegister:r.registerTable,rowSelection:r.rowSelection},{tableTop:C(()=>[y]),_:1},8,["onRegister","rowSelection"])}var we=h(T,[["render",P]]);export{we as default};