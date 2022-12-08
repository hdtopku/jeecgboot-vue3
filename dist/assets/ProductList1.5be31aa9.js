var O=Object.defineProperty,P=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,F=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&y(e,t,o[t]);if(k)for(var t of k(o))H.call(o,t)&&y(e,t,o[t]);return e},x=(e,o)=>P(e,X(o));var C=(e,o,t)=>new Promise((b,c)=>{var d=i=>{try{p(t.next(i))}catch(m){c(m)}},_=i=>{try{p(t.throw(i))}catch(m){c(m)}},p=i=>i.done?b(i.value):Promise.resolve(i.value).then(d,_);p((t=t.apply(e,o)).next())});import L from"./BasicTable.1043d787.js";import{T as Q}from"./componentMap.c8679e96.js";import"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import"./index.117f635e.js";import{useListPage as W}from"./useListPage.b0d7f469.js";import{c as $,s as q,_ as G}from"./ProductModal.vue_vue_type_script_setup_true_lang.58f3a5d1.js";import{l as J,a as Y,b as Z,c as tt,d as ot}from"./Product.api.9e2eadf9.js";import{j as A,bI as et,r as u,s as B,t as nt,v as r,w as a,y as s,K as l,Q as it,R as rt}from"./index.25572ab7.js";import"./useFormItem.06b13257.js";import"./functional.ad7cd28c.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./JAddInput.09222b6f.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./index.23d6b964.js";import"./BasicForm.0e850cba.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./useForm.8e9d7e3a.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./useTable.c365558e.js";const at=A({name:"pjlh-product"}),Zt=A(x(F({},at),{setup(e){const[o,{openModal:t}]=et(),{prefixCls:b,tableContext:c,onExportXls:d,onImportXls:_}=W({tableProps:{title:"\u5546\u54C1\u5217\u8868",api:J,columns:$,canResize:!1,formConfig:{labelWidth:120,schemas:q,autoSubmitOnEnter:!0,showAdvancedButton:!0},actionColumn:{width:120}},exportConfig:{name:"\u5546\u54C1\u5217\u8868",url:Y},importConfig:{url:Z}}),[p,{reload:i},{rowSelection:m,selectedRowKeys:h}]=c;function D(){t(!0,{isUpdate:!1,showFooter:!0})}function v(n){t(!0,{record:n,isUpdate:!0,showFooter:!0})}function E(n){t(!0,{record:n,isUpdate:!0,showFooter:!1})}function I(n){return C(this,null,function*(){yield ot({id:n.id},i)})}function R(){return C(this,null,function*(){yield tt({ids:h.value},i)})}function S({isUpdate:n,values:j}){i()}function T(n){return[{label:"\u7F16\u8F91",onClick:v.bind(null,n)}]}function U(n){return[{label:"\u8BE6\u60C5",onClick:E.bind(null,n)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:I.bind(null,n)}}]}return(n,j)=>{const f=u("a-button"),M=u("j-upload-button"),g=u("Icon"),N=u("a-menu-item"),V=u("a-menu"),K=u("a-dropdown");return B(),nt("div",null,[r(l(L),{onRegister:l(p),rowSelection:l(m)},{tableTitle:a(()=>[r(f,{type:"primary",onClick:D,preIcon:"ant-design:plus-outlined"},{default:a(()=>[s(" \u65B0\u589E")]),_:1}),r(f,{type:"primary",preIcon:"ant-design:export-outlined",onClick:l(d)},{default:a(()=>[s(" \u5BFC\u51FA")]),_:1},8,["onClick"]),r(M,{type:"primary",preIcon:"ant-design:import-outlined",onClick:l(_)},{default:a(()=>[s("\u5BFC\u5165")]),_:1},8,["onClick"]),l(h).length>0?(B(),it(K,{key:0},{overlay:a(()=>[r(V,null,{default:a(()=>[r(N,{key:"1",onClick:R},{default:a(()=>[r(g,{icon:"ant-design:delete-outlined"}),s(" \u5220\u9664 ")]),_:1})]),_:1})]),default:a(()=>[r(f,null,{default:a(()=>[s("\u6279\u91CF\u64CD\u4F5C "),r(g,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):rt("",!0)]),action:a(({record:w})=>[r(l(Q),{actions:T(w),dropDownActions:U(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),r(G,{onRegister:l(o),onSuccess:S},null,8,["onRegister"])])}}}));export{Zt as default};