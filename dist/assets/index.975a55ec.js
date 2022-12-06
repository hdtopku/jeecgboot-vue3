var j=Object.defineProperty,M=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,w=(e,o)=>{for(var t in o||(o={}))V.call(o,t)&&h(e,t,o[t]);if(k)for(var t of k(o))K.call(o,t)&&h(e,t,o[t]);return e},x=(e,o)=>M(e,N(o));var C=(e,o,t)=>new Promise((g,c)=>{var d=n=>{try{s(t.next(n))}catch(l){c(l)}},_=n=>{try{s(t.throw(n))}catch(l){c(l)}},s=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,_);s((t=t.apply(e,o)).next())});import L from"./BasicTable.a4fceed5.js";import{T as X}from"./componentMap.87abb767.js";import"./BasicTable.vue_vue_type_style_index_0_lang.ddcad0ba.js";import"./TableImg.vue_vue_type_style_index_0_lang.39d7d875.js";import"./index.4727c32e.js";import{g as H,c as Q,s as $,a as q,b as z,_ as G,d as J,e as O}from"./PositionModal.vue_vue_type_script_setup_true_lang.68630580.js";import{j as B,bI as W,r as m,s as F,t as Y,v as i,w as r,y as u,K as a,Q as Z,R as tt}from"./index.639f1d60.js";import{useListPage as ot}from"./useListPage.88620ffd.js";import"./BasicForm.2046d1b4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./uniqBy.e395f4ca.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JAddInput.da07cc21.js";import"./areaDataUtil.e23f696d.js";import"./api.79286c6b.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./index.28e29a88.js";import"./useForm.26a3a85b.js";import"./index.e06f25f1.js";import"./useContentHeight.63cba167.js";import"./useContentViewHeight.4d413b04.js";import"./usePageContext.0439b52e.js";import"./RedoOutlined.614ba4a2.js";import"./validator.1c5ebbd8.js";import"./user.api.7806ad45.js";import"./useTable.b543ecf1.js";const et=B({name:"system-position"}),Wt=B(x(w({},et),{setup(e){const[o,{openModal:t}]=W(),{prefixCls:g,onExportXls:c,onImportXls:d,tableContext:_}=ot({designScope:"position-template",tableProps:{title:"\u804C\u52A1\u5217\u8868",api:H,columns:Q,formConfig:{schemas:$}},exportConfig:{name:"\u804C\u52A1\u5217\u8868",url:q},importConfig:{url:z}}),[s,{reload:n},{rowSelection:l,selectedRowKeys:b}]=_;function I(p){return[{label:"\u7F16\u8F91",onClick:S.bind(null,p)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:E.bind(null,p)}}]}function A(){t(!0,{isUpdate:!1})}function S(p){t(!0,{record:p,isUpdate:!0})}function E(p){return C(this,null,function*(){yield J({id:p.id},n)})}function R(){return C(this,null,function*(){yield O({ids:b.value},n)})}return(p,nt)=>{const f=m("a-button"),T=m("j-upload-button"),y=m("Icon"),v=m("a-menu-item"),P=m("a-menu"),D=m("a-dropdown");return F(),Y("div",null,[i(a(L),{onRegister:a(s),rowSelection:a(l)},{tableTitle:r(()=>[i(f,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:A},{default:r(()=>[u("\u65B0\u589E")]),_:1}),i(f,{type:"primary",preIcon:"ant-design:export-outlined",onClick:a(c)},{default:r(()=>[u(" \u5BFC\u51FA")]),_:1},8,["onClick"]),i(T,{type:"primary",preIcon:"ant-design:import-outlined",onClick:a(d)},{default:r(()=>[u("\u5BFC\u5165")]),_:1},8,["onClick"]),a(b).length>0?(F(),Z(D,{key:0},{overlay:r(()=>[i(P,null,{default:r(()=>[i(v,{key:"1",onClick:R},{default:r(()=>[i(y,{icon:"ant-design:delete-outlined"}),u(" \u5220\u9664 ")]),_:1})]),_:1})]),default:r(()=>[i(f,null,{default:r(()=>[u("\u6279\u91CF\u64CD\u4F5C "),i(y,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):tt("",!0)]),action:r(({record:U})=>[i(a(X),{actions:I(U)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),i(G,{onRegister:a(o),onSuccess:a(n)},null,8,["onRegister","onSuccess"])])}}}));export{Wt as default};