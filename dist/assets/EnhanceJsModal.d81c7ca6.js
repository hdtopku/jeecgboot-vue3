import{B as P}from"./index.4727c32e.js";import"./BasicForm.vue_vue_type_style_index_0_lang.f1ef0efb.js";import"./componentMap.87abb767.js";import{j as A,C as m,a8 as S,bH as G,bI as I,f2 as Q,r as v,s as J,Q as b,w as i,v as d,y as k,R as T,u as q}from"./index.639f1d60.js";import{k as z}from"./JAddInput.da07cc21.js";import{u as L}from"./useOnlineTest.2380a5c6.js";import{E as W,u as X}from"./EnhanceJsHistory.dca5a3b8.js";import{s as Y,g as Z}from"./enhance.api.bf18a99f.js";import"./BasicModal.80fb1693.js";import"./useWindowSizeFn.7ec6649f.js";import"./uniqBy.e395f4ca.js";import"./useFormItem.6352fd1e.js";import"./functional.2c577561.js";import"./download.62b4e214.js";import"./base64Conver.030fa32c.js";import"./index.e6685de9.js";import"./index.f7358694.js";import"./useCountdown.a0ce354f.js";import"./JUpload.vue_vue_type_style_index_0_lang.0c8aaebd.js";import"./api.79286c6b.js";import"./index.28e29a88.js";import"./areaDataUtil.e23f696d.js";import"./props.081370ae.js";import"./index.2770fb38.js";import"./bem.13560d1b.js";import"./props.03cd05fb.js";import"./useContextMenu.813a15f4.js";import"./index.b2e55c2a.js";import"./onMountedOrActivated.491ea707.js";import"./index.d4fd68df.js";import"./htmlmixed.1ea07ff1.js";import"./vue.fc1f376b.js";/* empty css             */import"./depart.api.3c095fb5.js";var M=(e,l,c)=>new Promise((y,p)=>{var o=t=>{try{u(c.next(t))}catch(a){p(a)}},r=t=>{try{u(c.throw(t))}catch(a){p(a)}},u=t=>t.done?y(t.value):Promise.resolve(t.value).then(o,r);u((c=c.apply(e,l)).next())});const x=A({name:"EnhanceJs",components:{BasicModal:P,JCodeEditor:z,EnhanceJsHistory:W},emits:["register"],setup(){const{createMessage:e}=q(),l=X(),c=m(),y=m(),p=S({form:{},list:{}}),o=m("list"),r=m(""),u=m(!1),t=m(!1),a=m(""),f=S({form:"",list:""}),h={form:!1,list:!1},E=m(!1),[g,{closeModal:w}]=G(n=>M(this,null,function*(){F(n.row)})),[D,V]=I(),{aiTestMode:N,genEnhanceJsData:_}=L();function F(n){r.value=n.id,t.value=!1,a.value=n.tableName;let s=l.getEnhanceJs(r.value);(s==null?void 0:s.length)>0?(o.value=s[s.length-1].type,u.value=!0):u.value=!1,h.form=!1,h.list=!1,o.value?B(o.value):B("form"),E.value=!0,setTimeout(()=>E.value=!1,150)}function j(){return M(this,null,function*(){yield Promise.all([H("form"),H("list")]),w(),e.success("\u4FDD\u5B58\u6210\u529F")})}function H(n){return M(this,null,function*(){let s=p[n],C={cgJs:f[n],cgJsType:n};if(!h[n]||s.cgJs===C.cgJs)return;let R=!!s.id;R&&(C=Object.assign({},s,C)),yield Y(r.value,C,R),l.addEnhanceJs({code:r.value,str:C.cgJs,type:C.cgJsType,date:new Date().getTime()})})}function $(){w()}function B(n){return M(this,null,function*(){o.value=n;try{if(!h[n]){let s=yield Z(r.value,n);Object.assign(p[n],{id:null},s),f[n]=p[n].cgJs,h[n]=!0}}catch(s){console.error(s)}setTimeout(()=>{n=="list"?y.value.refresh():c.value.refresh()},150)})}function U(){V.openModal(!0,{code:r.value,type:o.value})}function K(n){f[o.value]!=n&&(t.value=!0,f[o.value]=n)}function O(){o.value==="form"?_(a.value,o.value,c.value):_(a.value,o.value,y.value)}return{formEditorRef:c,listEditorRef:y,reloading:E,enhanceValues:f,enhanceType:o,showHistory:u,aiTestMode:N,tableName:a,genEnhanceJsData:_,onGenTestData:O,onChangeType:B,onCodeChange:K,onShowHistory:U,onSubmit:j,onCancel:$,registerModal:g,registerEnhanceJsHistory:D}}});function ee(e,l,c,y,p,o){const r=v("JCodeEditor"),u=v("a-tab-pane"),t=v("a-tabs"),a=v("a-button"),f=v("a-space"),h=v("EnhanceJsHistory"),E=v("BasicModal");return J(),b(E,{onRegister:e.registerModal,title:"JS\u589E\u5F3A",width:800,bodyStyle:{height:"360px"}},{footer:i(()=>[d(f,null,{default:i(()=>[d(a,{onClick:e.onCancel},{default:i(()=>[k("\u5173\u95ED")]),_:1},8,["onClick"]),d(a,{type:"primary",onClick:e.onSubmit},{default:i(()=>[k("\u786E\u5B9A")]),_:1},8,["onClick"])]),_:1}),d(f,{style:{float:"left"}},{default:i(()=>[e.showHistory?(J(),b(a,{key:0,onClick:e.onShowHistory},{default:i(()=>[k("\u67E5\u770B\u5386\u53F2\u7248\u672C")]),_:1},8,["onClick"])):T("",!0),e.aiTestMode?(J(),b(a,{key:1,onClick:e.onGenTestData},{default:i(()=>[k("\u751F\u6210\u6D4B\u8BD5\u6570\u636E")]),_:1},8,["onClick"])):T("",!0)]),_:1})]),default:i(()=>[d(t,{activeKey:e.enhanceType,"onUpdate:activeKey":l[2]||(l[2]=g=>e.enhanceType=g),onChange:e.onChangeType},{default:i(()=>[d(u,{tab:"form",key:"form",forceRender:""},{default:i(()=>[e.reloading?T("",!0):(J(),b(r,{key:0,ref:"formEditorRef",value:e.enhanceValues.form,"onUpdate:value":l[0]||(l[0]=g=>e.enhanceValues.form=g),language:"javascript",fullScreen:!0,lineNumbers:!1,height:"240px","language-change":!1,onChange:e.onCodeChange},null,8,["value","onChange"]))]),_:1}),d(u,{tab:"list",key:"list",forceRender:""},{default:i(()=>[e.reloading?T("",!0):(J(),b(r,{key:0,ref:"listEditorRef",value:e.enhanceValues.list,"onUpdate:value":l[1]||(l[1]=g=>e.enhanceValues.list=g),language:"javascript",fullScreen:!0,lineNumbers:!1,height:"240px","language-change":!1,onChange:e.onCodeChange},null,8,["value","onChange"]))]),_:1})]),_:1},8,["activeKey","onChange"]),d(h,{onRegister:e.registerEnhanceJsHistory},null,8,["onRegister"])]),_:1},8,["onRegister"])}var Fe=Q(x,[["render",ee]]);export{Fe as default};