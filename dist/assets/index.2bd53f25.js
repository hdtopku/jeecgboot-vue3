import{q as B,l as h,bF as R,ep as w,d9 as $,bH as d,F as f,t as n,v as y,V as _,z as a,y as u,dB as T,Q as V,C as r}from"./index.a1b4e527.js";import"./index.ea6d1b33.js";import k from"./Modal1.6e19d81b.js";import D from"./Modal2.d94ee209.js";import v from"./Modal3.e49bea69.js";import b from"./Modal4.89c8e989.js";import{a as P}from"./index.6fc95f6c.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JAddInput.20a0408b.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";import"./uniqBy.cec7465a.js";import"./useForm.db279587.js";import"./useContentHeight.d2359e54.js";import"./useContentViewHeight.79642745.js";import"./usePageContext.e993a792.js";const W=h({components:{Alert:R,Modal1:k,Modal2:D,Modal3:v,Modal4:b,PageWrapper:P,ASpace:w},setup(){const o=$(null),[e,{openModal:F}]=d(),[C,{openModal:M}]=d(),[g,{openModal:s}]=d(),[t,{openModal:l}]=d(),p=f(!1),m=f(null);function c(){l(!0,{data:"content",info:"Info"})}function A(){F(!0)}function E(i){switch(i){case 1:o.value=k;break;case 2:o.value=D;break;case 3:o.value=v;break;default:o.value=b;break}V(()=>{m.value={data:Math.random(),info:"Info222"},p.value=!0})}return{register1:e,openModal1:F,register2:C,openModal2:M,register3:g,openModal3:s,register4:t,openModal4:l,modalVisible:p,userData:m,openTargetModal:E,send:c,currentModal:o,openModalLoading:A}}}),H=r(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) "),I=r(" \u6253\u5F00\u5F39\u7A97"),L=r(" \u6253\u5F00\u5F39\u7A97"),N=r(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E"),S=r(" \u6253\u5F00\u5F39\u7A971"),q=r(" \u6253\u5F00\u5F39\u7A972"),z=r(" \u6253\u5F00\u5F39\u7A973"),Q=r(" \u6253\u5F00\u5F39\u7A974");function U(o,e,F,C,M,g){const s=n("Alert"),t=n("a-button"),l=n("a-space"),p=n("Modal1"),m=n("Modal2"),c=n("Modal3"),A=n("Modal4"),E=n("PageWrapper");return y(),_(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[u(s,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:a(()=>[H]),_:1},8,["onClick"]),u(s,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:a(()=>[I]),_:1},8,["onClick"]),u(s,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:a(()=>[L]),_:1},8,["onClick"]),u(s,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:a(()=>[N]),_:1},8,["onClick"]),u(s,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(l,null,{default:a(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=i=>o.openTargetModal(1))},{default:a(()=>[S]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=i=>o.openTargetModal(2))},{default:a(()=>[q]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=i=>o.openTargetModal(3))},{default:a(()=>[z]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=i=>o.openTargetModal(4))},{default:a(()=>[Q]),_:1})]),_:1}),(y(),_(T(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=i=>o.modalVisible=i),userData:o.userData},null,40,["visible","userData"])),u(p,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(c,{onRegister:o.register3},null,8,["onRegister"]),u(A,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var $o=B(W,[["render",U]]);export{$o as default};