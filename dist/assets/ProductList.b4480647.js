import w from"./ProductDataList.b4dd1ff4.js";import{_ as B}from"./ProductModal.93d33b10.js";import"./index.ea6d1b33.js";import{l as g,bH as x,F as p,H as D,$ as F,t as o,v as L,x as h,y as t,z as a,aV as _,L as z,aw as K,C as M}from"./index.a1b4e527.js";import"./CommonList.61eafcfb.js";import"./Product.api.a8344a1c.js";import"./BasicForm.77adc039.js";import"./helper.6c15aaa9.js";import"./useFormItem.f45f8681.js";import"./functional.011cfa3e.js";import"./BasicModal.6dc4adbe.js";import"./useWindowSizeFn.cf93ddee.js";import"./download.6d07b2c0.js";import"./base64Conver.030fa32c.js";import"./index.865ad11c.js";import"./index.0200dbc3.js";import"./useCountdown.0ec6a702.js";import"./JAddInput.20a0408b.js";import"./api.d480aed7.js";import"./props.3048bd74.js";import"./index.8c0f1045.js";import"./bem.ff3a25b6.js";import"./props.40d423fa.js";import"./useContextMenu.259c847c.js";import"./index.bb17d202.js";import"./onMountedOrActivated.e88e16f1.js";import"./index.96e08025.js";import"./htmlmixed.37684b60.js";import"./vue.a9bc7c21.js";/* empty css             */import"./depart.api.546ee79f.js";import"./JUpload.5aa10044.js";import"./index.b1e57df7.js";import"./uniqBy.cec7465a.js";import"./useForm.db279587.js";const N={class:"pl-2"},P={class:"mb-3"},R=M("\u67E5\u8BE2"),bt=g({__name:"ProductList",setup(V){const[d,{openModal:f}]=x(),m=p("0"),r=p(),y=s=>{f(!0,{record:s,isUpdate:!0,showFooter:!0})},l=p(),i=()=>{let s={pageNo:1,pageSize:30};r.value!=null&&r.value.trim()!==""&&(s.keyword=r.value),l.value.initQuery(s)};return D(r,i),F(()=>{i()}),(s,n)=>{const e=o("a-tab-pane"),v=o("a-tabs"),c=o("a-col"),b=o("a-button"),k=o("a-input"),C=o("a-row"),E=o("a-card");return L(),h(K,null,[t(E,{size:"small"},{default:a(()=>[t(C,{gutter:48},{default:a(()=>[t(c,{span:4},{default:a(()=>[t(v,{style:{position:"fixed"},tabPosition:"left",animated:!1,activeKey:m.value,"onUpdate:activeKey":n[0]||(n[0]=u=>m.value=u),size:"small",type:"card"},{default:a(()=>[t(e,{key:"0",tab:"\u70ED\u9500"}),t(e,{key:"1",tab:"\u4E3B\u98DF"}),t(e,{key:"2",tab:"\u8C03\u5473"}),t(e,{key:"3",tab:"\u8089\u86CB"}),t(e,{key:"4",tab:"\u7CAE\u6CB9"}),t(e,{key:"5",tab:"\u767E\u8D27"}),t(e,{key:"6",tab:"\u5E72\u8D27"}),t(e,{key:"7",tab:"\u6563\u88C5"}),t(e,{key:"8",tab:"\u7EB8\u5F20"})]),_:1},8,["activeKey"])]),_:1}),t(c,{span:20},{default:a(()=>[_("div",N,[_("div",P,[t(k,{value:r.value,"onUpdate:value":n[1]||(n[1]=u=>r.value=u),placeholder:"\u8F93\u5165\u5546\u54C1\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",allowClear:""},{suffix:a(()=>[t(b,{onClick:i,type:"primary"},{default:a(()=>[R]),_:1})]),_:1},8,["value"])]),t(w,{showLeft:!1,onHandleEdit:y,ref_key:"ProductDataListRef",ref:l,onQueryList:i},null,512)])]),_:1})]),_:1})]),_:1}),t(B,{onRegister:z(d),onSuccess:i},null,8,["onRegister"])],64)}}});export{bt as default};