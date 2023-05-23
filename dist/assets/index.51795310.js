import{j as y,bG as _,q as E,r as t,s as A,Q as R,w as p,v as r,y as s}from"./index.9d4ffdff.js";import{a as u}from"./index.ff40b9f5.js";import k from"./Drawer1.7ecd3dc8.js";import B from"./Drawer2.fe7976dc.js";import $ from"./Drawer3.ae034ec9.js";import v from"./Drawer4.5828de81.js";import P from"./Drawer5.a6485c2b.js";import{P as b}from"./index.dc6bea19.js";import"./BasicForm.10d2bac8.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4e84674c.js";import"./componentMap.bd60345c.js";import"./useFormItem.6cd3d92a.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./functional.db9e0476.js";import"./download.70e251a6.js";import"./base64Conver.030fa32c.js";import"./index.fcb9611e.js";import"./index.4dc520b5.js";import"./useCountdown.11eac9c0.js";import"./JAddInput.2d4443c3.js";import"./areaDataUtil.d553b295.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./index.28971d5a.js";import"./index.46008326.js";import"./uniqBy.144d64e1.js";import"./useForm.92846014.js";import"./useContentHeight.aa81b320.js";import"./useContentViewHeight.aac4ad23.js";import"./usePageContext.037686fe.js";import"./injectionKey.1ad13e6c.js";const W=y({components:{Alert:_,PageWrapper:b,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:a}]=u(),[g,{openDrawer:f}]=u(),[d,{openDrawer:n}]=u(),[i,{openDrawer:m}]=u(),[w,{openDrawer:D}]=u();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),a({loading:!0}),setTimeout(()=>{a({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:i,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,a,g,f,d){const n=t("Alert"),i=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return A(),R(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:p(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:p(()=>[s(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:p(()=>[s(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:p(()=>[s(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.send},{default:p(()=>[s(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:p(()=>[s(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}const kr=E(W,[["render",L]]);export{kr as default};