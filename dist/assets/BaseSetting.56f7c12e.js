var _=(t,a,r)=>new Promise((m,i)=>{var l=o=>{try{s(r.next(o))}catch(e){i(e)}},u=o=>{try{s(r.throw(o))}catch(e){i(e)}},s=o=>o.done?m(o.value):Promise.resolve(o.value).then(l,u);s((r=r.apply(t,a)).next())});import{l as C,q as h,dt as B,cF as F,c7 as I,bX as A,d4 as b,$ as y,o as S,t as n,v as w,V as U,z as c,y as p,aV as v,a as E,a1 as f,C as V,u as $,dl as k,dm as R}from"./index.b3d2a891.js";import{B as x}from"./BasicForm.2d2aa4ab.js";import"./helper.1b3fdfba.js";import{u as M}from"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import{a as N}from"./index.61468540.js";import{h as H}from"./header.d801b988.js";import{b as T}from"./data.dbbc6e64.js";import{a as j}from"./upload.029e5c1f.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useFormItem.c06072f5.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./api.1d3c1927.js";import"./index.96560ef2.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./validator.87cfc387.js";import"./user.api.365c9555.js";const q=C({components:{BasicForm:x,CollapseContainer:B,Button:F,ARow:I,ACol:A,CropperAvatar:N},setup(){const{createMessage:t}=$(),a=b(),[r,{setFieldsValue:m,validate:i}]=M({labelWidth:120,schemas:T,showActionButtonGroup:!1});y(()=>_(this,null,function*(){const o=a.getUserInfo;m(o)}));const l=S(()=>{const{avatar:o}=a.getUserInfo;return E(o)||H});function u(o,e){console.log("data====\u300B",e);const d=a.getUserInfo;d.avatar=e,a.setUserInfo(d),e&&f.post({url:"/sys/user/appEdit",params:{avatar:e}})}function s(){return _(this,null,function*(){try{let o=yield i();o.avatar=a.getUserInfo.avatar,console.log("values",o),f.post({url:"/sys/user/appEdit",params:o});const e=a.getUserInfo;Object.assign(e,o),a.setUserInfo(e),t.success("\u66F4\u65B0\u6210\u529F")}catch(o){console.log("e",o)}})}return{avatar:l,register:r,uploadImg:j,updateAvatar:u,handleSubmit:s}}}),z=t=>(k("data-v-55ae2304"),t=t(),R(),t),G={class:"change-avatar"},O=z(()=>v("div",{class:"mb-2"}," \u5934\u50CF ",-1)),P=V(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");function W(t,a,r,m,i,l){const u=n("BasicForm"),s=n("a-col"),o=n("CropperAvatar"),e=n("a-row"),d=n("Button"),g=n("CollapseContainer");return w(),U(g,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:c(()=>[p(e,{gutter:24},{default:c(()=>[p(s,{span:14},{default:c(()=>[p(u,{onRegister:t.register},null,8,["onRegister"])]),_:1}),p(s,{span:10},{default:c(()=>[v("div",G,[O,p(o,{uploadApi:t.uploadImg,value:t.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:t.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(d,{type:"primary",onClick:t.handleSubmit},{default:c(()=>[P]),_:1},8,["onClick"])]),_:1})}var $o=h(q,[["render",W],["__scopeId","data-v-55ae2304"]]);export{$o as default};
