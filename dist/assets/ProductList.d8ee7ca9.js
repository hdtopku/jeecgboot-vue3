import w from"./ProductDataList.61b84ac9.js";import{_ as B}from"./ProductModal.482e85ab.js";import"./index.c1c509d9.js";import{l as g,bG as x,F as p,H as D,$ as F,t as e,v as L,x as h,y as t,z as a,aU as _,L as z,av as K,C as M}from"./index.6c1aeca2.js";import"./CommonList.cc40f0ab.js";import"./Product.api.799eef49.js";import"./BasicForm.e500713f.js";import"./helper.15e1830a.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JAddInput.5c78e955.js";import"./api.52ea4d1e.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./JUpload.7c7f9634.js";import"./index.af09c9a6.js";import"./uniqBy.b316cd09.js";import"./useForm.f4b29e26.js";const N={class:"pl-2"},P={class:"mb-3"},R=M("\u67E5\u8BE2"),Ct=g({__name:"ProductList",setup(U){const[d,{openModal:f}]=x(),m=p("0"),r=p(),y=s=>{f(!0,{record:s,isUpdate:!0,showFooter:!0})},l=p(),i=()=>{let s={pageNo:1,pageSize:30};r.value!=null&&r.value.trim()!==""&&(s.keyword=r.value),l.value.initQuery(s)};return D(r,i),F(()=>{i()}),(s,n)=>{const o=e("a-tab-pane"),v=e("a-tabs"),c=e("a-col"),b=e("a-button"),k=e("a-input"),C=e("a-row"),E=e("a-card");return L(),h(K,null,[t(E,{size:"small"},{default:a(()=>[t(C,{gutter:48},{default:a(()=>[t(c,{span:4},{default:a(()=>[t(v,{style:{position:"fixed"},tabPosition:"left",animated:!1,activeKey:m.value,"onUpdate:activeKey":n[0]||(n[0]=u=>m.value=u),size:"small",type:"card"},{default:a(()=>[t(o,{key:"0",tab:"\u70ED\u9500"}),t(o,{key:"1",tab:"\u4E3B\u98DF"}),t(o,{key:"2",tab:"\u8C03\u5473"}),t(o,{key:"3",tab:"\u8089\u86CB"}),t(o,{key:"4",tab:"\u7CAE\u6CB9"}),t(o,{key:"5",tab:"\u767E\u8D27"}),t(o,{key:"6",tab:"\u5E72\u8D27"}),t(o,{key:"7",tab:"\u6563\u88C5"}),t(o,{key:"8",tab:"\u7EB8\u5F20"})]),_:1},8,["activeKey"])]),_:1}),t(c,{span:20},{default:a(()=>[_("div",N,[_("div",P,[t(k,{value:r.value,"onUpdate:value":n[1]||(n[1]=u=>r.value=u),placeholder:"\u8F93\u5165\u5546\u54C1\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",allowClear:""},{suffix:a(()=>[t(b,{onClick:i,type:"primary"},{default:a(()=>[R]),_:1})]),_:1},8,["value"])]),t(w,{showLeft:!1,onHandleEdit:y,ref_key:"ProductDataListRef",ref:l,onQueryList:i},null,512)])]),_:1})]),_:1})]),_:1}),t(B,{onRegister:z(d),onSuccess:i},null,8,["onRegister"])],64)}}});export{Ct as default};