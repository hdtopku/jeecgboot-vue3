import{a as A}from"./index.2ff6eac0.js";import{q as h,l as I,dt as y,F as n,d4 as E,t as s,v as p,V as B,z as u,y as r,aV as c,x as i,W as l,D as F}from"./index.b3d2a891.js";import{C as D,a as k}from"./index.61468540.js";import{u as w}from"./upload.029e5c1f.js";import{h as V}from"./header.d801b988.js";import"./useContentHeight.0b543e32.js";import"./onMountedOrActivated.12413c39.js";import"./useWindowSizeFn.ab02708a.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./base64Conver.030fa32c.js";const W=I({components:{PageWrapper:A,CropperImage:D,CollapseContainer:y,CropperAvatar:k},setup(){var t;const e=n(""),d=n(""),m=n(""),C=n(""),v=E(),g=n(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:a,imgInfo:f}){e.value=f,d.value=a}function o({imgBase64:a,imgInfo:f}){m.value=f,C.value=a}return{img:V,info:e,circleInfo:m,cropperImg:d,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),$={class:"container p-4"},N={class:"cropper-container mr-10"},P=["src"],S={key:0},U={class:"container p-4"},q={class:"cropper-container mr-10"},z=["src"],b={key:0};function j(e,d,m,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),a=s("PageWrapper");return p(),B(a,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[c("div",$,[c("div",N,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(p(),i("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,P)):l("",!0)]),e.cropperImg?(p(),i("p",S,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[c("div",U,[c("div",q,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(p(),i("img",{key:0,src:e.circleImg,class:"croppered"},null,8,z)):l("",!0)]),e.circleImg?(p(),i("p",b,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var x=h(W,[["render",j],["__scopeId","data-v-123cc878"]]);export{x as default};
