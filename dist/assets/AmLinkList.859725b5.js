var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;import n from"./Search.d5e44be2.js";import d from"./AmLinkDataList.36eaf22a.js";import p from"./AmLinkModal.ea7524c9.js";import"./index.e1e06dd6.js";import{l as m,bI as c,F as l,$ as j,t as b,v as u,V as f,z as y,y as v,L as x,C as A}from"./index.435ab247.js";import"./urlUtil.a560444b.js";import"./api.bc301b0f.js";import"./AmLink.api.ef2d8e26.js";import"./CommonList.766009f5.js";import"./Am.api.dbcbfa16.js";import"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import"./useFormItem.816007c4.js";import"./functional.be5901d6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JAddInput.8c125e2c.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";import"./uniqBy.91f18935.js";import"./useForm.45d68074.js";const L=A("复制1条"),g=m({name:"AmLinkList"}),h=m((w=((e,t)=>{for(var o in t||(t={}))r.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))i.call(t,o)&&s(e,o,t[o]);return e})({},g),t(w,o({setup(e){const[t,{openModal:o}]=c(),a=l(!1),r={tabs:[{tabKey:"-1",tabName:"回收站"},{tabKey:"1",tabName:"待使用"},{tabKey:"0",tabName:"使用中"},{tabKey:"100",tabName:"所有"}],activeKey:"0"};function i(){o(!0,{isUpdate:!1,showFooter:!0})}function s(e){o(!0,{record:e,isUpdate:!0,showFooter:!0})}const m=l(),A=()=>{m.value.changeAdvanced()},g=()=>{a.value=!0,m.value.copyCode().finally((()=>{a.value=!1}))},h=l(),w=(e={},t=!1)=>{t&&(h.value=e),m.value.startQuery(h.value)};return j((()=>{w()})),(e,o)=>{const c=b("a-button"),l=b("a-card");return u(),f(l,{size:"small"},{default:y((()=>[v(n,{onChangeAdvanced:A,onQueryList:o[0]||(o[0]=e=>w(e,!0)),ref:"SearchRef",placeholder:"模糊搜索",tabPane:r},{suffixAdvanced:y((()=>[v(c,{type:"warning",onClick:g,loading:a.value},{default:y((()=>[L])),_:1},8,["loading"])])),_:1},512),v(d,{onHandleAdd:i,ref_key:"AmLinkDataListRef",ref:m,onHandleEdit:s,onQueryList:w},null,512),v(p,{onRegister:x(t),onSuccess:w},null,8,["onRegister"])])),_:1})}}}))));var w;export{h as default};