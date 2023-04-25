var O=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable;var F=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e||(e={}))Z.call(e,t)&&F(r,t,e[t]);if(k)for(var t of k(e))oo.call(e,t)&&F(r,t,e[t]);return r},y=(r,e)=>W(r,Y(e));var b=(r,e,t)=>new Promise((_,c)=>{var d=a=>{try{u(t.next(a))}catch(m){c(m)}},g=a=>{try{u(t.throw(a))}catch(m){c(m)}},u=a=>a.done?_(a.value):Promise.resolve(a.value).then(d,g);u((t=t.apply(r,e)).next())});import eo from"./BasicTable.6f8187cc.js";import{T as to}from"./componentMap.a24260de.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import{a as f}from"./index.2f5d3d5b.js";import"./index.c08fb6c5.js";import{_ as no}from"./RoleDrawer.vue_vue_type_script_setup_true_lang.26e19047.js";import{_ as ro}from"./RoleDesc.vue_vue_type_script_setup_true_lang.76abbf0c.js";import io from"./RolePermissionDrawer.ec593be4.js";import{_ as lo}from"./RoleIndexModal.vue_vue_type_script_setup_true_lang.b3a08fb2.js";import{_ as ao}from"./RoleUserTable.vue_vue_type_script_setup_true_lang.60ba14a0.js";import{c as so,s as uo}from"./role.data.2cc5625d.js";import{p as mo,g as po,a as co,b as fo,d as _o}from"./role.api.c4137e8b.js";import{useListPage as go}from"./useListPage.2b7a424e.js";import{j as v,C as Co,bI as I,r as s,s as B,t as wo,v as n,w as l,y as p,K as i,Q as bo,R as Do,ax as ho}from"./index.b3c2d15d.js";import"./BasicForm.1d30e5fc.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JAddInput.eb06f3b7.js";import"./areaDataUtil.26505ac2.js";import"./api.363f3378.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./useForm.853cc25f.js";import"./index.82bab5e4.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./RedoOutlined.66bed16b.js";import"./index.ef772e66.js";import"./RoleDataRuleDrawer.vue_vue_type_script_setup_true_lang.cb340900.js";import"./useTable.f4111a7b.js";import"./UserDrawer.vue_vue_type_script_setup_true_lang.d6b00e08.js";import"./user.data.e1c1f519.js";import"./user.api.08ebfe0a.js";import"./validator.020069d8.js";import"./renderUtils.1494c29f.js";import"./useAdaptiveWidth.65f0c396.js";import"./UseSelectModal.vue_vue_type_script_setup_true_lang.cad141d2.js";const Ro=v({name:"system-role"}),Te=v(y(x({},Ro),{setup(r){const e=Co(!0),[t,{openDrawer:_}]=f(),[c,{openDrawer:d}]=f();I();const[g,{openModal:u}]=I(),[a,{openDrawer:m}]=f(),[E,{openDrawer:U}]=f(),{prefixCls:ko,tableContext:A,onImportXls:S,onExportXls:T}=go({designScope:"role-template",tableProps:{title:"\u7CFB\u7EDF\u89D2\u8272\u5217\u8868",api:mo,columns:so,formConfig:{schemas:uo},actionColumn:{width:120},rowSelection:null,defSort:{column:"id",order:"desc"}},exportConfig:{name:"\u89D2\u8272\u5217\u8868",url:po},importConfig:{url:co}}),[P,{reload:C},{rowSelection:Fo,selectedRowKeys:D}]=A;function M(){e.value=!0,d(!0,{isUpdate:!1})}function $(o){e.value=!0,d(!0,{record:o,isUpdate:!0})}function j(o){e.value=!1,U(!0,{record:o,isUpdate:!0})}function N(o){return b(this,null,function*(){yield _o({id:o.id},C)})}function V(){return b(this,null,function*(){yield fo({ids:D.value},C)})}function K(o){m(!0,{roleId:o.id})}function X(o){u(!0,{roleCode:o})}function H(o){_(!0,o)}function L(o){return[{label:"\u7528\u6237",onClick:H.bind(null,o)},{label:"\u6388\u6743",onClick:K.bind(null,o)}]}function Q(o){return[{label:"\u7F16\u8F91",onClick:$.bind(null,o)},{label:"\u8BE6\u60C5",onClick:j.bind(null,o)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:N.bind(null,o)}},{label:"\u9996\u9875\u914D\u7F6E",onClick:X.bind(null,o.roleCode)}]}return(o,xo)=>{const w=s("a-button"),q=s("j-upload-button"),h=s("Icon"),z=s("a-menu-item"),G=s("a-menu"),J=s("a-dropdown");return B(),wo(ho,null,[n(i(eo),{onRegister:i(P)},{tableTitle:l(()=>[n(w,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:M},{default:l(()=>[p(" \u65B0\u589E")]),_:1}),n(w,{type:"primary",preIcon:"ant-design:export-outlined",onClick:i(T)},{default:l(()=>[p(" \u5BFC\u51FA")]),_:1},8,["onClick"]),n(q,{type:"primary",preIcon:"ant-design:import-outlined",onClick:i(S)},{default:l(()=>[p("\u5BFC\u5165")]),_:1},8,["onClick"]),i(D).length>0?(B(),bo(J,{key:0},{overlay:l(()=>[n(G,null,{default:l(()=>[n(z,{key:"1",onClick:V},{default:l(()=>[n(h,{icon:"ant-design:delete-outlined"}),p(" \u5220\u9664 ")]),_:1})]),_:1})]),default:l(()=>[n(w,null,{default:l(()=>[p("\u6279\u91CF\u64CD\u4F5C "),n(h,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Do("",!0)]),action:l(({record:R})=>[n(i(to),{actions:L(R),dropDownActions:Q(R)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),n(ao,{onRegister:i(t)},null,8,["onRegister"]),n(no,{onRegister:i(c),onSuccess:i(C),showFooter:e.value},null,8,["onRegister","onSuccess","showFooter"]),n(ro,{onRegister:i(E)},null,8,["onRegister"]),n(io,{onRegister:i(a)},null,8,["onRegister"]),n(lo,{onRegister:i(g)},null,8,["onRegister"])],64)}}}));export{Te as default};