var h=(y,f,r)=>new Promise((o,n)=>{var p=t=>{try{c(r.next(t))}catch(l){n(l)}},i=t=>{try{c(r.throw(t))}catch(l){n(l)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,i);c((r=r.apply(y,f)).next())});import{l as b,_ as C}from"./jeecg-online-vendor-bf2efbcb.js";import{_ as S}from"./index-d4783a30.js";import{l as F,s as N}from"./depart.user.api-fc1a836a.js";import{d as P,c as V,k as u,U as E,aV as d,as as g,f as M,bi as I,u as s,F as L,ar as x,V as R,n as k}from"./vue-c7e3516e.js";import"./antd-vue-vendor-1561c1ba.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./index-fde9c72f.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";const j={class:"bg-white m-4 mr-0 overflow-hidden"},q=P({__name:"DepartTree",emits:["select"],setup(y,{emit:f}){V("prefixCls");const{createMessage:r}=b();let o=u(!1),n=u([]),p=u([]),i=u([]),c=u(!0),t=u("2"),l=u(!1);function v(){o.value=!0,n.value=[],F().then(e=>{e.success?Array.isArray(e.result)&&(n.value=e.result,t.value=e.message,D()):r.warning(e.message)}).finally(()=>o.value=!1)}v();function D(){let e=[];n.value.forEach((a,_)=>{a.children&&a.children.length>0&&e.push(a.key),_===0&&m(a.id,a)}),e.length>0&&(w(),p.value=e)}function w(){return h(this,null,function*(){yield k(),l.value=!0,yield k(),l.value=!1})}function m(e,a){i.value=[e],a&&f("select",a)}function T(e){e?(o.value=!0,N({keyWord:e,myDeptSearch:"1"}).then(a=>{Array.isArray(a)?n.value=a:(r.warning("\u672A\u67E5\u8BE2\u5230\u90E8\u95E8\u4FE1\u606F"),n.value=[])}).finally(()=>o.value=!1)):v()}function A(e,a){e.length>0&&i.value[0]!==e[0]?m(e[0],a.selectedNodes[0]):m(i.value[0])}function B(e){p.value=e,c.value=!1}return(e,a)=>{const _=E("a-empty"),K=E("a-spin");return d(),g("div",j,[M(K,{spinning:s(o)},{default:I(()=>[s(t)==="2"?(d(),g(L,{key:0},[s(l)?R("",!0):(d(),x(s(S),{key:0,title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",showLine:"",checkStrictly:!0,clickRowToExpand:!1,treeData:s(n),selectedKeys:s(i),expandedKeys:s(p),autoExpandParent:s(c),onSelect:A,onExpand:B,onSearch:T},null,8,["treeData","selectedKeys","expandedKeys","autoExpandParent"]))],64)):(d(),x(_,{key:1,description:"\u666E\u901A\u5458\u5DE5\u65E0\u6B64\u6743\u9650"}))]),_:1},8,["spinning"])])}}});const se=C(q,[["__scopeId","data-v-892b3d18"]]);export{se as default};