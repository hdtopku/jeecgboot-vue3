var p=(g,a,s)=>new Promise((d,u)=>{var l=e=>{try{m(s.next(e))}catch(o){u(o)}},C=e=>{try{m(s.throw(e))}catch(o){u(o)}},m=e=>e.done?d(e.value):Promise.resolve(e.value).then(l,C);m((s=s.apply(g,a)).next())});import{B as A}from"./BasicTable.5ee1302a.js";import{T as M}from"./helper.1b3fdfba.js";import"./TableImg.7ccb5f8d.js";import{l as z,bi as L,bH as V,H as D,L as n,t as c,v as w,x as H,y as t,z as i,V as N,W as O,C as f,c as P,u as U}from"./index.b3d2a891.js";import $ from"./JeecgOrderCustomerModal.e33425a6.js";import{useListPage as j}from"./useListPage.c9ea079e.js";import"./index.2d23bddf.js";import{c as J,a as K,d as W,b as q}from"./erplist.api.7ec7f2f7.js";import"./BasicForm.2d2aa4ab.js";import"./uniqBy.4cec2220.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import"./useFormItem.c06072f5.js";import"./api.1d3c1927.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./index.2ff6eac0.js";import"./useContentHeight.0b543e32.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./RedoOutlined.b10d0ad6.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./index.96560ef2.js";import"./useTable.99eebf43.js";import"./renderUtils.a1668db6.js";const G=f(" \u65B0\u589E"),Q=f(" \u5220\u9664 "),X=f("\u6279\u91CF\u64CD\u4F5C "),$e=z({__name:"JeecgOrderCustomerList",setup(g){const a=L("orderId")||"",s=U(),[d,{openModal:u}]=V(),l={},{prefixCls:C,tableContext:m}=j({tableProps:{api:J,columns:K,canResize:!1,useSearchForm:!1,actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[e,{reload:o},{rowSelection:y,selectedRowKeys:_}]=m;D(a,()=>{l.orderId=n(a),o()});function B(){if(console.log("orderId=====\u300B",a),P(n(a))){s.createMessage.warning("\u8BF7\u9009\u62E9\u4E00\u4E2A\u8BA2\u5355\u4FE1\u606F");return}u(!0,{isUpdate:!1,showFooter:!0})}function F(r){return p(this,null,function*(){u(!0,{record:r,isUpdate:!0,showFooter:!0})})}function E(r){return p(this,null,function*(){yield q({id:r.id},o)})}function k(){return p(this,null,function*(){yield W({ids:_.value},()=>{_.value=[],o()})})}function I(){o()}function S(r){return[{label:"\u7F16\u8F91",onClick:F.bind(null,r)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:E.bind(null,r)}}]}return(r,Y)=>{const h=c("a-button"),b=c("Icon"),v=c("a-menu-item"),x=c("a-menu"),T=c("a-dropdown");return w(),H("div",null,[t(n(A),{onRegister:n(e),rowSelection:n(y),searchInfo:l},{tableTitle:i(()=>[t(h,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:B},{default:i(()=>[G]),_:1}),n(_).length>0?(w(),N(T,{key:0},{overlay:i(()=>[t(x,null,{default:i(()=>[t(v,{key:"1",onClick:k},{default:i(()=>[t(b,{icon:"ant-design:delete-outlined"}),Q]),_:1})]),_:1})]),default:i(()=>[t(h,null,{default:i(()=>[X,t(b,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):O("",!0)]),action:i(({record:R})=>[t(n(M),{actions:S(R)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),t($,{onRegister:n(d),onSuccess:I},null,8,["onRegister"])])}}});export{$e as default};
