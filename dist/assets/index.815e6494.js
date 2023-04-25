import{j as _,bG as w,dE as R,dg as $,bI as d,C as f,G as T,q as V,r,s as y,Q as k,w as a,v as o,y as n,dM as I}from"./index.b3c2d15d.js";import"./index.c08fb6c5.js";import D from"./Modal1.72026fe5.js";import v from"./Modal2.279788d7.js";import b from"./Modal3.4a225737.js";import B from"./Modal4.7fccb299.js";import{a as P}from"./index.82bab5e4.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./BasicForm.1d30e5fc.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./componentMap.a24260de.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JAddInput.eb06f3b7.js";import"./areaDataUtil.26505ac2.js";import"./api.363f3378.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./uniqBy.7d054233.js";import"./useForm.853cc25f.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";const W=_({components:{Alert:w,Modal1:D,Modal2:v,Modal3:b,Modal4:B,PageWrapper:P,ASpace:R},setup(){const u=$(null),[e,{openModal:F}]=d(),[M,{openModal:g}]=d(),[C,{openModal:i}]=d(),[t,{openModal:l}]=d(),p=f(!1),m=f(null);function c(){l(!0,{data:"content",info:"Info"})}function A(){F(!0)}function E(s){switch(s){case 1:u.value=D;break;case 2:u.value=v;break;case 3:u.value=b;break;default:u.value=B;break}T(()=>{m.value={data:Math.random(),info:"Info222"},p.value=!0})}return{register1:e,openModal1:F,register2:M,openModal2:g,register3:C,openModal3:i,register4:t,openModal4:l,modalVisible:p,userData:m,openTargetModal:E,send:c,currentModal:u,openModalLoading:A}}});function G(u,e,F,M,g,C){const i=r("Alert"),t=r("a-button"),l=r("a-space"),p=r("Modal1"),m=r("Modal2"),c=r("Modal3"),A=r("Modal4"),E=r("PageWrapper");return y(),k(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[o(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),o(t,{type:"primary",class:"my-4",onClick:u.openModalLoading},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ")]),_:1},8,["onClick"]),o(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),o(t,{type:"primary",class:"my-4",onClick:u.openModal2},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A97")]),_:1},8,["onClick"]),o(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),o(t,{type:"primary",class:"my-4",onClick:u.openModal3},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A97")]),_:1},8,["onClick"]),o(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),o(t,{type:"primary",class:"my-4",onClick:u.send},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E")]),_:1},8,["onClick"]),o(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),o(l,null,{default:a(()=>[o(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=s=>u.openTargetModal(1))},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A971")]),_:1}),o(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=s=>u.openTargetModal(2))},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A972")]),_:1}),o(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=s=>u.openTargetModal(3))},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A973")]),_:1}),o(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=s=>u.openTargetModal(4))},{default:a(()=>[n(" \u6253\u5F00\u5F39\u7A974")]),_:1})]),_:1}),(y(),k(I(u.currentModal),{visible:u.modalVisible,"onUpdate:visible":e[4]||(e[4]=s=>u.modalVisible=s),userData:u.userData},null,40,["visible","userData"])),o(p,{onRegister:u.register1,minHeight:100},null,8,["onRegister"]),o(m,{onRegister:u.register2},null,8,["onRegister"]),o(c,{onRegister:u.register3},null,8,["onRegister"]),o(A,{onRegister:u.register4},null,8,["onRegister"])]),_:1})}const bu=V(W,[["render",G]]);export{bu as default};