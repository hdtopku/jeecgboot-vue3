import{l as te,fa as le,cA as ie,fb as ne,aL as $,f0 as ae,F as re,o as oe,H as se,t as x,v as c,x as p,y as b,z as H,av as B,ba as P,V as M,aU as u,E as U,D as N,j as T,b as de,ce as V,a1 as ue,f8 as ce,a as fe,u as pe}from"./index.6c1aeca2.js";import{e as me,q as _e,g as he}from"./api.52ea4d1e.js";import{g as ge}from"./Area.e554a649.js";import{c as ve}from"./functional.32464814.js";import{L as ye}from"./useAutoForm.a7f9e3b3.js";import"./JUpload.7c7f9634.js";import"./JUploadModal.8ebff862.js";import"./helper.15e1830a.js";import"./index.c1c509d9.js";import"./BasicForm.e500713f.js";import"./JAddInput.5c78e955.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./BasicTable.1db2499e.js";import"./TableImg.e6a1ca63.js";import"./useMethods.eccfa16d.js";import"./LinkTableListPiece.d8662340.js";import"./FormSchemaFactory.e7c3ae25.js";import"./user.api.295372fd.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useForm.f4b29e26.js";import"./useListPage.7d5f3d18.js";import"./useTable.d616a74c.js";import"./uniqBy.b316cd09.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./useFormItem.63b4eda3.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./depart.api.c664bb73.js";import"./index.866fff1a.js";import"./useContentHeight.a77fa571.js";import"./useContentViewHeight.bf6f2f30.js";import"./usePageContext.5da89706.js";import"./RedoOutlined.f33cdacc.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./index.af09c9a6.js";import"./JModalTip.a4a4dacd.js";var De=Object.defineProperty,J=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,q=(a,r,s)=>r in a?De(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,we=(a,r)=>{for(var s in r||(r={}))Fe.call(r,s)&&q(a,s,r[s]);if(J)for(var s of J(r))Ce.call(r,s)&&q(a,s,r[s]);return a},m=(a,r,s)=>new Promise((g,D)=>{var w=f=>{try{_(s.next(f))}catch(C){D(C)}},F=f=>{try{_(s.throw(f))}catch(C){D(C)}},_=f=>f.done?g(f.value):Promise.resolve(f.value).then(w,F);_((s=s.apply(a,r)).next())});function xe(a){console.log(a);const r={},s=[],g=re({}),{createMessage:D}=pe(),w=oe(()=>a.containerClass?`jeecg-detail-form ${a.containerClass}`:"jeecg-detail-form");se(()=>a.data,e=>m(this,null,function*(){if(e){let n=a.schemas,i={};if(n&&n.length>0)for(let l of n){let t=l.field;try{i[t]=yield F(l)}catch(o){console.error("\u5B57\u6BB5\u3010"+t+"\u3011\u6587\u672C\u83B7\u53D6\u5931\u8D25",o)}}g.value=i}}),{deep:!0,immediate:!0});function F(e){return m(this,null,function*(){let n=a.data;if(n){let i=n[e.field];if(!i&&i!=="0"&&i!==0)return"";let l=i,t=e.view;if(t=="list"||t=="radio"||t=="checkbox"||t=="list_multi")l=yield _(e,n);else if(t=="sel_search")l=yield C(e,n);else if(t=="cat_tree")l=yield j(e,n);else if(t=="link_table")l=yield Z(e,n);else if(t=="sel_depart")l=yield E(e,n);else if(t=="sel_user")l=yield d(e,n);else if(t=="pca")l=ge(i);else if(t=="link_down")l=yield v(e,n);else if(t=="sel_tree")l=yield O(e,n);else if(t=="switch")l=yield R(e,n);else if(t=="image"||t=="file")l=z(e,n);else if(s.indexOf(e.field)>=0){let o=r[e.field];o&&o.length>0&&(l=T(o,i))}return l}return""})}function _(e,n){return m(this,null,function*(){let i=f(e),l=n[e.field];if(!i)return l;let t=de(i);if(t&&t.length>0)return T(t,l);{let o=[];if(r[i]?o=r[i]:o=(yield V(i))||[],o&&o.length>0)return r[i]=o,T(o,l)}return""})}function f(e){let n="",{dictCode:i,dictTable:l,dictText:t}=e;return l?n=encodeURI(`${l},${t},${i}`):n=i,n}function C(e,n){return m(this,null,function*(){let i=f(e),l=n[e.field];if(!l)return"";let t=[];return r[i+l]?t=r[i+l]:t=(yield ue.get({url:`/sys/dict/loadDictItem/${i}`,params:{key:l}}))||[],t&&t.length>0?(r[i+l]=t,t.join(",")):""})}function j(e,n){return m(this,null,function*(){let i=n[e.field];if(!i)return"";let l=(yield me({ids:i}))||[];return l&&l.length>0?l.join(","):""})}function E(e,n){return m(this,null,function*(){let i=n[e.field];if(!i)return"";let t=k(e).store||"id",o=(yield _e({ids:i,primaryKey:t}))||[];if(o&&o.length>0){let h=[];for(let y of o)h.push(y.title);return h.join(",")}return""})}function d(e,n){return m(this,null,function*(){let i=n[e.field];if(!i)return"";let l=k(e),o={[l.store||"username"]:i},y=((yield he(o))||{}).records||[];if(y&&y.length>0){let I=[];console.log("getUserDataText",y);let L=l.text||"realname";for(let S of y)I.push(S[L]);return I.join(",")}return""})}function k(e){let n={},{fieldExtendJson:i}=e;if(i&&typeof i=="string")try{let l=JSON.parse(i);n=we({},l)}catch(l){console.error(l)}return n}function v(e,n){return m(this,null,function*(){let{dictTable:i,field:l}=e,t=[];if(r[l])t=r[l];else if(i){let o=JSON.parse(i);if(o){let{table:h,txt:y,key:I,linkField:L}=o,S=`${h},${y},${I}`;if(t=[...(yield V(S))||[]],t&&t.length>0&&(r[l]=t,L)){let ee=L.split(",");for(let A of ee)r[A]=t,s.push(A)}}}if(t&&t.length>0){let o=n[l];return T(t,o)}return""})}function O(e,n){return m(this,null,function*(){let{dict:i,field:l}=e,t=[];if(r[l]?t=r[l]:i&&(t=yield V(i)),t&&t.length>0){let o=n[l];return T(t,o)}return""})}function R(e,n){return m(this,null,function*(){let{fieldExtendJson:i,field:l}=e,t=["Y","N"];i&&(t=JSON.parse(i));let o=[{value:t[0],text:"\u662F"},{value:t[1],text:"\u5426"},{value:t[0]+"",text:"\u662F"},{value:t[1]+"",text:"\u5426"}],h=n[l];return ce(o,h)})}function W(e){return e.span?e.span:a.span}function z(e,n){let i=n[e.field];if(!i)return[];let l=i.split(","),t=[];for(let o of l){let h=fe(o)||"";h&&t.push(h)}return t}function K(e){e&&window.open(e)}function Y(e){let n=g.value[e];if(!n||n.length==0){D.warning("\u65E0\u56FE\u7247!");return}ve({imageList:n})}function G(e){return e?e.substring(e.lastIndexOf("/")+1):""}const Q=["file","image","markdown","umeditor"];function X(e){return Q.indexOf(e.view)>=0?a.span==12?"span12":a.span==8?"span8":a.span==6?"span6":"span24":""}function Z(e,n){return m(this,null,function*(){let i=n[e.field];return k(e).showType=="select"?i?n[e.field+"_dictText"]:"":i?n[e.field]:""})}return{formContainerClass:w,detailFormData:g,getItemSpan:W,handleDownloadFile:K,handleViewImage:Y,getFilename:G,getLabelWidthClass:X}}const ke=te({name:"DetailForm",components:{DownloadOutlined:le,EyeOutlined:ie,PaperClipOutlined:ne,LinkTableCard:ye},props:{span:$.number.def(24),schemas:$.array.def([]),data:$.object.def({}),containerClass:$.string.def("")},setup(a){const{formContainerClass:r,detailFormData:s,getItemSpan:g,handleDownloadFile:D,handleViewImage:w,getFilename:F,getLabelWidthClass:_}=xe(a);return{formContainerClass:r,detailFormData:s,getItemSpan:g,handleDownloadFile:D,handleViewImage:w,getFilename:F,getLabelWidthClass:_}}}),be={class:"detail-item"},Te=["title"],Oe=["innerHTML"],Ie={key:1,class:"item-content",style:{display:"block","padding-top":"10px"}},Le={key:0},$e={key:2,class:"item-content"},je={class:"ant-upload-list ant-upload-list-picture-card"},Ee={class:"ant-upload-list-picture-card-container",style:{"margin-top":"8px"}},Se={class:"ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card","data-has-actions":"true"},Be={class:"ant-upload-list-item-info"},Pe=["src"],Ne={class:"ant-upload-list-item-actions"},Ve={key:3,class:"item-content"},Ae={class:"ant-upload-list ant-upload-list-text"},He={class:""},Me={class:"ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-text"},Ue={class:"ant-upload-list-item-info"},Je={class:"ant-upload-span"},qe={class:"ant-upload-text-icon"},Re=["href"],We={class:"ant-upload-list-item-card-actions"},ze={key:4,class:"item-content"};function Ke(a,r,s,g,D,w){const F=x("link-table-card"),_=x("download-outlined"),f=x("eye-outlined"),C=x("paper-clip-outlined"),j=x("a-col"),E=x("a-row");return c(),p("div",{class:U(a.formContainerClass)},[b(E,null,{default:H(()=>[(c(!0),p(B,null,P(a.schemas,(d,k)=>(c(),M(j,{key:k,span:a.getItemSpan(d)},{default:H(()=>[u("div",be,[u("div",{class:U(["item-title",a.getLabelWidthClass(d)]),title:d.label},N(d.label)+"\uFF1A ",11,Te),d.isHtml?(c(),p("div",{key:0,class:"item-content",innerHTML:a.detailFormData[d.field]},null,8,Oe)):d.isCard?(c(),p("div",Ie,[a.detailFormData[d.field]?(c(),M(F,{key:1,disabled:"",detail:"",value:a.detailFormData[d.field],valueField:d.dictCode,textField:d.dictText,tableName:d.dictTable,multi:d.multi},null,8,["value","valueField","textField","tableName","multi"])):(c(),p("span",Le))])):d.isImage?(c(),p("div",$e,[u("div",je,[(c(!0),p(B,null,P(a.detailFormData[d.field],v=>(c(),p("div",Ee,[u("span",null,[u("div",Se,[u("div",Be,[u("img",{src:v,alt:"\u56FE\u7247\u4E0D\u5B58\u5728",class:"ant-upload-list-item-image"},null,8,Pe)]),u("span",Ne,[b(_,{onClick:O=>a.handleDownloadFile(v)},null,8,["onClick"]),b(f,{onClick:O=>a.handleViewImage(d.field)},null,8,["onClick"])])])])]))),256))])])):d.isFile?(c(),p("div",Ve,[u("div",Ae,[(c(!0),p(B,null,P(a.detailFormData[d.field],v=>(c(),p("div",He,[u("span",null,[u("div",Me,[u("div",Ue,[u("span",Je,[u("div",qe,[b(C)]),u("a",{href:v,target:"_blank",rel:"noopener noreferrer",class:"ant-upload-list-item-name"},N(a.getFilename(v)),9,Re),u("span",We,[b(_,{onClick:O=>a.handleDownloadFile(v)},null,8,["onClick"])])])])])])]))),256))])])):(c(),p("div",ze,N(a.detailFormData[d.field]),1))])]),_:2},1032,["span"]))),128))]),_:1})],2)}var Xt=ae(ke,[["render",Ke],["__scopeId","data-v-47915cc7"]]);export{Xt as default};