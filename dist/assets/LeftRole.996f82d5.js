import{j as d,f2 as w,Z as _,r as h,s as g,Q as b,w as S,aW as v}from"./index.25572ab7.js";import T from"./BasicTable.1043d787.js";import"./componentMap.c8679e96.js";import"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import{useListPage as y}from"./useListPage.b0d7f469.js";import"./BasicForm.0e850cba.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./index.117f635e.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./functional.ad7cd28c.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./JAddInput.09222b6f.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./index.23d6b964.js";import"./useForm.8e9d7e3a.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./useTable.c365558e.js";var C=(r,n,o)=>new Promise((p,i)=>{var l=e=>{try{a(o.next(e))}catch(t){i(t)}},s=e=>{try{a(o.throw(e))}catch(t){i(t)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(l,s);a((o=o.apply(r,n)).next())});const R=d({name:"LeftRole",components:{BasicTable:T},emits:["select"],setup(r,{emit:n}){const{tableContext:o,createMessage:p}=y({tableProps:{api:a,rowKey:"id",size:"small",bordered:!0,columns:[{title:"\u89D2\u8272\u7F16\u7801",align:"center",dataIndex:"roleCode"},{title:"\u89D2\u8272\u540D\u79F0",align:"center",dataIndex:"roleName"}],rowSelection:{type:"radio",onChange(t){t.length>0&&n("select",t[0])}},canResize:!1,clickToRowSelect:!0,useSearchForm:!1,showActionColumn:!1,showTableSetting:!1}}),[i,{clearSelectedRowKeys:l},{rowSelection:s}]=o;function a(t){return C(this,null,function*(){let{code:m,success:c,result:u,message:f}=yield _.get({url:"/sys/role/list",params:t},{isTransformResponse:!1});return c?u:(m===510&&p.warning(f),{})})}function e(){l()}return{rowSelection:s,registerTable:i,clearSelected:e}}}),B=v("span",null,null,-1);function x(r,n,o,p,i,l){const s=h("BasicTable");return g(),b(s,{onRegister:r.registerTable,rowSelection:r.rowSelection},{tableTop:S(()=>[B]),_:1},8,["onRegister","rowSelection"])}var he=w(R,[["render",x]]);export{he as default};