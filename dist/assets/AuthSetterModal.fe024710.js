import w from"./LeftRole.02aaa3ec.js";import D from"./LeftDepart.023e486f.js";import O from"./LeftUser.52aa3b46.js";import k from"./AuthFieldTree.e363abd1.js";import L from"./AuthButtonTree.ecdc90ea.js";import E from"./AuthDataTree.c7ebe81a.js";import{B as K}from"./index.df1721d5.js";import{j as U,C as p,m as j,bH as F,eH as N,M as T,r as f,s as M,Q as $,w as n,v as o,t as V,ax as H,R as Q}from"./index.0be4b5b8.js";import"./BasicTable.vue_vue_type_style_index_0_lang.deb3e4c6.js";import"./componentMap.6d6ce384.js";import"./useTable.9835c939.js";import"./api.dbe6bd39.js";import"./BasicTable.8e358715.js";import"./BasicForm.be7f03c1.js";import"./BasicForm.vue_vue_type_style_index_0_lang.bc61085a.js";import"./uniqBy.a356d751.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./useFormItem.77c38aa9.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";import"./download.e1519503.js";import"./base64Conver.030fa32c.js";import"./index.2fb8bc9c.js";import"./index.2fd0f218.js";import"./useCountdown.28a04794.js";import"./JAddInput.d2fd0723.js";import"./areaDataUtil.04b478e5.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./index.145a7e75.js";import"./useForm.b4df01c5.js";import"./injectionKey.1ad13e6c.js";import"./RedoOutlined.f0aa8ff3.js";import"./useListPage.3cb53a3e.js";import"./auth.api.37d9c80e.js";import"./auth.data.990417da.js";var q=Object.defineProperty,z=Object.defineProperties,G=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))J.call(t,r)&&I(e,r,t[r]);if(B)for(var r of B(t))W.call(t,r)&&I(e,r,t[r]);return e},Y=(e,t)=>z(e,G(t)),P=(e,t,r)=>new Promise((s,l)=>{var a=i=>{try{u(r.next(i))}catch(m){l(m)}},d=i=>{try{u(r.throw(i))}catch(m){l(m)}},u=i=>i.done?s(i.value):Promise.resolve(i.value).then(a,d);u((r=r.apply(e,t)).next())});const Z=U({name:"AuthSetterModal",components:{BasicModal:K,LeftRole:w,LeftDepart:D,LeftUser:O,AuthFieldTree:k,AuthButtonTree:L,AuthDataTree:E},props:{tableType:{type:Number,default:1}},setup(e){const t=p(""),r=p(!1),s=p("field"),l=p("role"),a={fieldRef:p(),buttonRef:p(),dataRef:p(),roleRef:p(),userRef:p(),departRef:p()},d=p(""),u=j(()=>e.tableType==1||e.tableType==2),[i,{closeModal:m}]=F(c=>{s.value="field",t.value!=c.cgformId&&(t.value=c.cgformId,h())});function v(c=s.value){var C;return(C=a[c+"Ref"])==null?void 0:C.value}function h(){return P(this,null,function*(){yield T(),g(),v().clear()})}function S(c){d.value=c,_(s.value),R()}function b(c){d.value=c,_(s.value),R()}function A(c){d.value=c,_(s.value),R()}function R(){l.value=="role"?(a.departRef.value.clearSelected(),a.userRef.value.clearSelected()):l.value=="depart"?(a.roleRef.value.clearSelected(),a.userRef.value.clearSelected()):l.value=="user"&&(a.departRef.value.clearSelected(),a.roleRef.value.clearSelected())}function g(){l.value=="role"?a.roleRef.value.clearSelected():l.value=="depart"?a.departRef.value.clearSelected():l.value=="user"&&a.userRef.value.clearSelected(),v().clearChecked()}function _(c){return P(this,null,function*(){yield T(),d.value&&v(c).loadChecked(d.value,l.value)})}function y(){g()}return Y(X({},a),{cgformId:t,loading:r,activeKey:s,hasDataAuth:u,authMode:l,onAuthModeChange:y,onAuthTypeChange:_,closeModal:m,onSelectRole:S,onSelectDepart:b,onSelectUser:A,registerModal:i})}});function x(e,t,r,s,l,a){const d=f("LeftRole"),u=f("a-tab-pane"),i=f("LeftDepart"),m=f("LeftUser"),v=f("a-tabs"),h=f("a-col"),S=f("AuthFieldTree"),b=f("AuthButtonTree"),A=f("AuthDataTree"),R=f("a-row"),g=f("a-spin"),_=f("BasicModal");return M(),$(_,{title:"Online\u6743\u9650\u6388\u6743",width:900,maskClosable:!1,defaultFullscreen:"",okButtonProps:{style:{display:"none"}},cancelText:"\u5173\u95ED",onCancel:e.closeModal,onRegister:e.registerModal},{default:n(()=>[o(g,{spinning:e.loading},{default:n(()=>[o(R,null,{default:n(()=>[o(h,{span:12},{default:n(()=>[o(v,{activeKey:e.authMode,"onUpdate:activeKey":t[0]||(t[0]=y=>e.authMode=y),onChange:e.onAuthModeChange},{default:n(()=>[o(u,{tab:"\u89D2\u8272\u6388\u6743",key:"role",forceRender:""},{default:n(()=>[o(d,{ref:"roleRef",onSelect:e.onSelectRole},null,8,["onSelect"])]),_:1}),o(u,{tab:"\u90E8\u95E8\u6388\u6743",key:"depart",forceRender:""},{default:n(()=>[o(i,{ref:"departRef",onSelect:e.onSelectDepart},null,8,["onSelect"])]),_:1}),o(u,{tab:"\u4EBA\u5458\u6388\u6743",key:"user",forceRender:""},{default:n(()=>[o(m,{ref:"userRef",onSelect:e.onSelectUser},null,8,["onSelect"])]),_:1})]),_:1},8,["activeKey","onChange"])]),_:1}),o(h,{span:1}),o(h,{span:11},{default:n(()=>[o(v,{activeKey:e.activeKey,"onUpdate:activeKey":t[1]||(t[1]=y=>e.activeKey=y),onChange:e.onAuthTypeChange},{default:n(()=>[o(u,{tab:"\u5B57\u6BB5\u6743\u9650",key:"field",forceRender:""},{default:n(()=>[o(S,{ref:"fieldRef",cgformId:e.cgformId},null,8,["cgformId"])]),_:1}),e.hasDataAuth?(M(),V(H,{key:0},[o(u,{tab:"\u6309\u94AE\u6743\u9650",key:"button",forceRender:""},{default:n(()=>[o(b,{ref:"buttonRef",cgformId:e.cgformId},null,8,["cgformId"])]),_:1}),o(u,{tab:"\u6570\u636E\u6743\u9650",key:"data",forceRender:""},{default:n(()=>[o(A,{ref:"dataRef",cgformId:e.cgformId},null,8,["cgformId"])]),_:1})],64)):Q("",!0)]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})]),_:1},8,["spinning"])]),_:1},8,["onCancel","onRegister"])}var He=N(Z,[["render",x]]);export{He as default};