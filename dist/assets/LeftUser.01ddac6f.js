import{j as d,f6 as h,Z as w,r as _,s as b,Q as g,w as C,aW as D}from"./index.9d4ffdff.js";import v from"./BasicTable.4f050cd0.js";import"./componentMap.bd60345c.js";import"./BasicTable.vue_vue_type_style_index_0_lang.68d83792.js";import"./TableImg.vue_vue_type_style_index_0_lang.b32b7dd8.js";import{useListPage as S}from"./useListPage.30b1ebd9.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./uniqBy.144d64e1.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./useFormItem.6cd3d92a.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./useForm.92846014.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.18a0b687.js";import"./useTable.06d516c7.js";var T=(r,a,o)=>new Promise((p,i)=>{var m=e=>{try{n(o.next(e))}catch(t){i(t)}},s=e=>{try{n(o.throw(e))}catch(t){i(t)}},n=e=>e.done?p(e.value):Promise.resolve(e.value).then(m,s);n((o=o.apply(r,a)).next())});const y=d({name:"LeftUser",components:{BasicTable:v},emits:["select"],setup(r,{emit:a}){const{tableContext:o,createMessage:p}=S({tableProps:{api:n,rowKey:"id",size:"small",bordered:!0,columns:[{title:"\u8D26\u53F7",dataIndex:"username",width:200},{title:"\u59D3\u540D",dataIndex:"realname",width:200}],rowSelection:{type:"radio",onChange(t){t.length>0&&a("select",t[0])}},formConfig:{schemas:[{label:"\u8D26\u53F7",field:"username",component:"JInput",componentProps:{placeholder:"\u8F93\u5165\u8D26\u53F7\u6A21\u7CCA\u67E5\u8BE2"}},{label:"\u59D3\u540D",field:"realname",component:"JInput",componentProps:{placeholder:"\u8F93\u5165\u59D3\u540D\u6A21\u7CCA\u67E5\u8BE2"}}]},canResize:!1,clickToRowSelect:!0,showActionColumn:!1,showTableSetting:!1}}),[i,{clearSelectedRowKeys:m},{rowSelection:s}]=o;function n(t){return T(this,null,function*(){let{code:l,success:u,result:c,message:f}=yield w.get({url:"/sys/user/list",params:t},{isTransformResponse:!1});return u?c:(l===510&&p.warning(f),{})})}function e(){m()}return{rowSelection:s,registerTable:i,clearSelected:e}}}),B=D("span",null,null,-1);function P(r,a,o,p,i,m){const s=_("BasicTable");return b(),g(s,{onRegister:r.registerTable,rowSelection:r.rowSelection},{tableTop:C(()=>[B]),_:1},8,["onRegister","rowSelection"])}var we=h(y,[["render",P]]);export{we as default};