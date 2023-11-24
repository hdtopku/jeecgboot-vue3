var m=(d,R,s)=>new Promise((l,n)=>{var h=r=>{try{f(s.next(r))}catch(c){n(c)}},y=r=>{try{f(s.throw(r))}catch(c){n(c)}},f=r=>r.done?l(r.value):Promise.resolve(r.value).then(h,y);f((s=s.apply(d,R)).next())});import{d as z,l as I,V as p,a7 as w,ac as g,aa as t,f as o,E as _,W as k,u as a}from"./vue-50733b77.js";import{u as A}from"./index-f191817e.js";import{u as H,a as Q,B as q}from"./index-52f25951.js";import"./index-f7d688aa.js";import G from"./UserDrawer-65d9b10a.js";import J from"./UseSelectModal-bb8cd95c.js";import{u as X,c as Y,e as Z,f as ee}from"./role.api-84267348.js";import{u as te,b as oe}from"./role.data-443e2b1c.js";import{g as re}from"./user.api-c252cb60.js";import{F as ie}from"./index-b34ff7bc.js";import{Q as ne}from"./componentMap-5c02cfaf.js";import ae from"./BasicTable-ca5b2c76.js";import{_ as se}from"./jeecg-online-vendor-d3e1865b.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./index-fa22fec6.js";import"./lodash-es-vendor-058e2396.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-7e7a94e9.js";import"./useForm-14ceb529.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./useFormItem-915d7f1b.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./JEllipsis-66e02300.js";import"./user.data-b2f5a286.js";import"./validator-0e75b328.js";import"./renderUtils-74a3a0ef.js";import"./useAdaptiveWidth-25e65b0e.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./cron-parser-vendor-19ac00ef.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./injectionKey-69710956.js";const le=z({__name:"RoleUserTable",props:{disableUserEdit:{type:Boolean,default:!1}},emits:["register","hideUserList"],setup(d,{emit:R}){const s=d,l=I([]),n=I(""),[h,{setDrawerProps:y,closeDrawer:f}]=H(e=>m(this,null,function*(){n.value=e.id,D({searchInfo:{roleId:e.id}}),u()})),[r,{openDrawer:c}]=Q(),[S,{openModal:U}]=ie(),[v,{reload:u,updateTableDataRecord:x,setProps:D}]=A({title:"用户列表",api:X,columns:te,formConfig:{labelWidth:60,schemas:oe,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},canResize:!1,rowKey:"id",actionColumn:{width:180,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),T={type:"checkbox",columnWidth:50,selectedRowKeys:l,onChange:B};function B(e,i){l.value=e}function E(){c(!0,{isUpdate:!1,selectedroles:[n.value],isRole:!0})}function K(e){return m(this,null,function*(){try{const i=yield re({userid:e.id});i&&i.length>0&&(e.selectedroles=i)}catch(i){}c(!0,{record:e,isUpdate:!0,isRole:!0})})}function V(e){return m(this,null,function*(){yield Y({userId:e.id,roleId:n.value},u)})}function F(){return m(this,null,function*(){yield Z({userIds:l.value.join(","),roleId:n.value},u)})}function L({isUpdate:e,values:i}){e?x(i.id,i):u()}function M(){U(!0)}function N(e){return m(this,null,function*(){yield ee({roleId:n.value,userIdList:e},u)})}function O(e){return[{label:"编辑",onClick:K.bind(null,e),ifShow:()=>!s.disableUserEdit},{label:"取消关联",popConfirm:{title:"是否确认取消关联",confirm:V.bind(null,e)}}]}return(e,i)=>{const b=p("a-button"),C=p("Icon"),W=p("a-menu-item"),P=p("a-menu"),$=p("a-dropdown");return w(),g(a(q),{onRegister:a(h),title:"角色用户",width:"800",destroyOnClose:""},{default:t(()=>[o(a(ae),{onRegister:a(v),rowSelection:T},{tableTitle:t(()=>[d.disableUserEdit?k("",!0):(w(),g(b,{key:0,type:"primary",onClick:E},{default:t(()=>[_(" 新增用户")]),_:1})),o(b,{type:"primary",onClick:M},{default:t(()=>[_(" 已有用户")]),_:1}),l.value.length>0?(w(),g($,{key:1},{overlay:t(()=>[o(P,null,{default:t(()=>[o(W,{key:"1",onClick:F},{default:t(()=>[o(C,{icon:"bx:bx-unlink"}),_(" 取消关联 ")]),_:1})]),_:1})]),default:t(()=>[o(b,null,{default:t(()=>[_("批量操作 "),o(C,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):k("",!0)]),action:t(({record:j})=>[o(a(ne),{actions:O(j)},null,8,["actions"])]),_:1},8,["onRegister"]),o(G,{onRegister:a(r),onSuccess:L},null,8,["onRegister"]),o(J,{onRegister:a(S),onSelect:N},null,8,["onRegister"])]),_:1},8,["onRegister"])}}});const mt=se(le,[["__scopeId","data-v-20dcdc2a"]]);export{mt as default};