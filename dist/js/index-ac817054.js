var me=Object.defineProperty,Ne=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var se=(e,f,s)=>f in e?me(e,f,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[f]=s,I=(e,f)=>{for(var s in f||(f={}))Ie.call(f,s)&&se(e,s,f[s]);if(ce)for(var s of ce(f))Ue.call(f,s)&&se(e,s,f[s]);return e},re=(e,f)=>Ne(e,Me(f));var ie=(e,f,s)=>new Promise((x,F)=>{var L=C=>{try{k(s.next(C))}catch(B){F(B)}},l=C=>{try{k(s.throw(C))}catch(B){F(B)}},k=C=>C.done?x(C.value):Promise.resolve(C.value).then(L,l);k((s=s.apply(e,f)).next())});import{d as Se,k as Ke,as as Pe,e as M,w as P,a5 as N,a6 as H,u as r,R as Oe,W as U,a9 as G,a7 as V,E as oe,ab as de,am as ue,f as A,F as Q,a8 as He,B as Ve,ae as Ye,af as je,at as Re,n as Xe,r as he,J as $,s as Y,o as $e,t as fe,A as ye,ag as ze,i as Je}from"./vue-bcbaddf9.js";import{q as qe,aA as ke,U as Ge,S as W,aB as We,at as Qe,aC as Ze,i as et,aD as pe}from"./jeecg-online-vendor-59c8fbe3.js";import{d as tt,aw as nt,t as Z,ax as at,ab as lt,a1 as ct}from"./index-7711d1b4.js";import{createBEM as xe}from"./bem-356ebc17.js";import{buildProps as st}from"./props-c7c3390f.js";import{be as rt,aY as it,ai as ot,bf as dt,bg as ut,c as ee,S as ht,b as ft,bh as yt,ao as ge,aJ as kt}from"./antd-vue-vendor-a78909e6.js";import{useContextMenu as pt}from"./useContextMenu-5c399fb2.js";import{d as gt}from"./lodash-es-vendor-9b741fb8.js";var E=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(E||{});const St=["update:expandedKeys","update:selectedKeys","update:value","change","check","search","update:searchValue"],Kt=st({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1}}),xt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch justify-end"},At=Se({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search","clickSearch"],setup(e,{emit:f}){const s=e,x=Ke(""),[F]=xe("tree-header"),L=Pe(),{t:l}=qe(),k=M(()=>["mr-1","w-full",{"ml-5":L.headerTitle||s.title}]),C=M(()=>{const{checkable:t}=s,a=[{label:l("component.tree.expandAll"),value:E.EXPAND_ALL},{label:l("component.tree.unExpandAll"),value:E.UN_EXPAND_ALL,divider:t}];return t?[{label:l("component.tree.selectAll"),value:E.SELECT_ALL},{label:l("component.tree.unSelectAll"),value:E.UN_SELECT_ALL,divider:t},...a,{label:l("component.tree.checkStrictly"),value:E.CHECK_STRICTLY},{label:l("component.tree.checkUnStrictly"),value:E.CHECK_UN_STRICTLY}]:a});function B(t){var c,i,d,o;const{key:a}=t;switch(a){case E.SELECT_ALL:(c=s.checkAll)==null||c.call(s,!0);break;case E.UN_SELECT_ALL:(i=s.checkAll)==null||i.call(s,!1);break;case E.EXPAND_ALL:(d=s.expandAll)==null||d.call(s,!0);break;case E.UN_EXPAND_ALL:(o=s.expandAll)==null||o.call(s,!1);break;case E.CHECK_STRICTLY:f("strictly-change",!1);break;case E.CHECK_UN_STRICTLY:f("strictly-change",!0);break}}function _(t){f("search",t)}const h=tt(_,200);return P(()=>x.value,t=>{h(t)}),P(()=>s.searchText,t=>{t!==x.value&&(x.value=t)}),(t,a)=>(N(),H("div",{class:ue([r(F)(),"flex px-2 py-1.5 items-center"])},[r(L).headerTitle?Oe(t.$slots,"headerTitle",{key:0}):U("",!0),!r(L).headerTitle&&t.title?(N(),G(r(nt),{key:1,helpMessage:t.helpMessage},{default:V(()=>[oe(de(t.title),1)]),_:1},8,["helpMessage"])):U("",!0),t.search||t.toolbar?(N(),H("div",xt,[t.search?(N(),H("div",{key:0,class:ue(k.value)},[A(r(rt),{placeholder:r(l)("common.searchText"),size:"small",allowClear:"",value:x.value,"onUpdate:value":a[0]||(a[0]=c=>x.value=c),onSearch:a[1]||(a[1]=c=>t.$emit("clickSearch",c))},null,8,["placeholder","value"])],2)):U("",!0),t.toolbar?(N(),G(r(ot),{key:1,onClick:a[2]||(a[2]=Ve(()=>{},["prevent"]))},{overlay:V(()=>[A(r(it),{onClick:B},{default:V(()=>[(N(!0),H(Q,null,He(C.value,c=>(N(),H(Q,{key:c.value},[A(r(dt),Ye(je({key:c.value})),{default:V(()=>[oe(de(c.label),1)]),_:2},1040),c.divider?(N(),G(r(ut),{key:0})):U("",!0)],64))),128))]),_:1})]),default:V(()=>[A(r(Z),{icon:"ion:ellipsis-vertical"})]),_:1})):U("",!0)])):U("",!0)],2))}}),Ct=({icon:e})=>e?Re(e)?Xe(Z,{icon:e,class:"mr-1"}):Z:null;function Lt(e,f){function s(h){const t=[],a=h||r(e),{key:c,children:i}=r(f);if(!i||!c)return t;for(let d=0;d<a.length;d++){const o=a[d];t.push(o[c]);const y=o[i];y&&y.length&&t.push(...s(y))}return t}function x(h){const t=[],a=h||r(e),{key:c,children:i}=r(f);if(!i||!c)return t;for(let d=0;d<a.length;d++){const o=a[d];o.disabled!==!0&&o.selectable!==!1&&t.push(o[c]);const y=o[i];y&&y.length&&t.push(...x(y))}return t}function F(h,t){const a=[],c=t||r(e),{key:i,children:d}=r(f);if(!d||!i)return a;for(let o=0;o<c.length;o++){const y=c[o],v=y[d];h===y[i]?(a.push(y[i]),v&&v.length&&a.push(...s(v))):v&&v.length&&a.push(...F(h,v))}return a}function L(h,t,a){if(!h)return;const c=a||r(e),{key:i,children:d}=r(f);if(!(!d||!i))for(let o=0;o<c.length;o++){const y=c[o],v=y[d];if(y[i]===h){c[o]=I(I({},c[o]),t);break}else v&&v.length&&L(h,t,y[d])}}function l(h=1,t,a=1){if(!h)return[];const c=[],i=t||r(e)||[];for(let d=0;d<i.length;d++){const o=i[d],{key:y,children:v}=r(f),z=y?o[y]:"",O=v?o[v]:[];c.push(z),O&&O.length&&a<h&&(a+=1,c.push(...l(h,O,a)))}return c}function k({parentKey:h=null,node:t,push:a="push"}){const c=ee(r(e));if(!h){c[a](t),e.value=c;return}const{key:i,children:d}=r(f);!d||!i||(ke(c,o=>{if(o[i]===h)return o[d]=o[d]||[],o[d][a](t),!0}),e.value=c)}function C({parentKey:h=null,list:t,push:a="push"}){const c=ee(r(e));if(!(!t||t.length<1))if(h){const{key:i,children:d}=r(f);if(!d||!i)return;ke(c,o=>{if(o[i]===h){o[d]=o[d]||[];for(let y=0;y<t.length;y++)o[d][a](t[y]);return e.value=c,!0}})}else for(let i=0;i<t.length;i++)c[a](t[i])}function B(h,t){if(!h)return;const a=t||r(e),{key:c,children:i}=r(f);if(!(!i||!c))for(let d=0;d<a.length;d++){const o=a[d],y=o[i];if(o[c]===h){a.splice(d,1);break}else y&&y.length&&B(h,o[i])}}function _(h,t,a){return!h&&h!==0?null:((t||r(e)).forEach(i=>{if(a!=null&&a.key||(a==null?void 0:a.key)===0)return a;if(i.key===h){a=i;return}i.children&&i.children.length&&(a=_(h,i.children,a))}),a||null)}return{deleteNodeByKey:B,insertNodeByKey:k,insertNodesByKey:C,filterByLevel:l,updateNodeByKey:L,getAllKeys:s,getChildrenKeys:F,getEnabledKeys:x,getSelectedNode:_}}function vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Je(e)}const Nt=Se({name:"BasicTree",inheritAttrs:!1,props:Kt,emits:St,setup(e,{attrs:f,slots:s,emit:x,expose:F}){const[L]=xe("tree"),l=he({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),k=he({startSearch:!1,searchText:"",searchData:[]}),C=Ke([]),[B]=pt(),_=M(()=>{const{fieldNames:n}=e;return I({children:"children",title:"title",key:"key"},n)}),h=M(()=>{let n=re(I(I({blockNode:!0},f),e),{expandedKeys:l.expandedKeys,selectedKeys:l.selectedKeys,checkedKeys:l.checkedKeys,checkStrictly:l.checkStrictly,fieldNames:r(_),"onUpdate:expandedKeys":u=>{l.expandedKeys=u,x("update:expandedKeys",u)},"onUpdate:selectedKeys":u=>{l.selectedKeys=u,x("update:selectedKeys",u)},onCheck:(u,S)=>{let p=$(l.checkedKeys);if(Ge(p)&&k.startSearch){const K=S.node.eventKey;p=gt(p,z(K)),S.checked&&p.push(K),l.checkedKeys=p}else l.checkedKeys=u;const g=$(l.checkedKeys);x("update:value",g),x("check",g,S)},onRightClick:Le});return ht(n,"treeData","class")}),t=M(()=>k.startSearch?k.searchData:r(C)),a=M(()=>!t.value||t.value.length===0),{deleteNodeByKey:c,insertNodeByKey:i,insertNodesByKey:d,filterByLevel:o,updateNodeByKey:y,getAllKeys:v,getChildrenKeys:z,getEnabledKeys:O,getSelectedNode:Ae}=Lt(C,_);function Ce(n,u){return!u&&e.renderIcon&&W(e.renderIcon)?e.renderIcon(n):u}function Le(S){return ie(this,arguments,function*({event:n,node:u}){var w;const{rightMenuList:p=[],beforeRightClick:g}=e;let K={event:n,items:[]};if(g&&W(g)){let b=yield g(u,n);Array.isArray(b)?K.items=b:Object.assign(K,b)}else K.items=p;(w=K.items)!=null&&w.length&&(K.items=K.items.filter(b=>!b.hidden),B(K))})}function j(n){l.expandedKeys=n}function ve(){return l.expandedKeys}function te(n){l.selectedKeys=n}function Ee(){return l.selectedKeys}function ne(n){l.checkedKeys=n}function be(){return l.checkedKeys}function ae(n){l.checkedKeys=n?O():[]}function J(n){l.expandedKeys=n?v():[]}function Te(n){l.checkStrictly=n}P(()=>e.searchValue,n=>{n!==k.searchText&&(k.searchText=n)},{immediate:!0}),P(()=>e.treeData,n=>{n&&q(k.searchText)});function q(n){if(n!==k.searchText&&(k.searchText=n),x("update:searchValue",n),!n){k.startSearch=!1;return}const{filterFn:u,checkable:S,expandOnSearch:p,checkOnSearch:g,selectedOnSearch:K}=r(e);k.startSearch=!0;const{title:w,key:b}=r(_),D=[];if(k.searchData=Qe(r(C),T=>{var R,X;const m=u?u(n,T,r(_)):(X=(R=T[w])==null?void 0:R.includes(n))!=null?X:!1;return m&&D.push(T[b]),m},r(_)),p){const T=Ze(k.searchData).map(m=>m[b]);T&&T.length&&j(T)}g&&S&&D.length&&ne(D),K&&D.length&&te(D)}function _e(n,u){if(!(!e.clickRowToExpand||!u||u.length===0))if(!l.expandedKeys.includes(n))j([...l.expandedKeys,n]);else{const S=[...l.expandedKeys],p=S.findIndex(g=>g===n);p!==-1&&S.splice(p,1),j(S)}}Y(()=>{C.value=e.treeData}),$e(()=>{const n=parseInt(e.defaultExpandLevel);n>0?l.expandedKeys=o(n):e.defaultExpandAll&&J(!0)}),Y(()=>{l.expandedKeys=e.expandedKeys}),Y(()=>{l.selectedKeys=e.selectedKeys}),Y(()=>{l.checkedKeys=e.checkedKeys}),P(()=>e.value,()=>{l.checkedKeys=$(e.value||[])},{immediate:!0}),P(()=>l.checkedKeys,()=>{const n=$(l.checkedKeys);x("update:value",n),x("change",n)}),Y(()=>{l.checkStrictly=e.checkStrictly});const Be={setExpandedKeys:j,getExpandedKeys:ve,setSelectedKeys:te,getSelectedKeys:Ee,setCheckedKeys:ne,getCheckedKeys:be,insertNodeByKey:i,insertNodesByKey:d,deleteNodeByKey:c,updateNodeByKey:y,getSelectedNode:Ae,checkAll:ae,expandAll:J,filterByLevel:n=>{l.expandedKeys=o(n)},setSearchValue:n=>{q(n)},getSearchValue:()=>k.searchText};function De(n){const{actionList:u}=e;if(!(!u||u.length===0))return u.map((S,p)=>{var K;let g=!0;return W(S.show)?g=(K=S.show)==null?void 0:K.call(S,n):pe(S.show)&&(g=S.show),g?A("span",{key:p,class:L("action")},[S.render(n)]):null})}const Fe=M(()=>{const n=ee(t.value);return We(n,(u,S)=>{var le;const p=k.searchText,{highlight:g}=r(e),{title:K,key:w,children:b}=r(_),D=Ce(u,u.icon),T=kt(u,K),m=p?T.indexOf(p):-1,R=k.startSearch&&!et(p)&&g&&m!==-1,X=`color: ${pe(g)?"#f50":g}`,we=R?A("span",{class:(le=r(h))!=null&&le.blockNode?`${L("content")}`:""},[A("span",null,[T.substr(0,m)]),A("span",{style:X},[p]),A("span",null,[T.substr(m+p.length)])]):T;return u[K]=A("span",{class:`${L("title")} pl-2`,onClick:_e.bind(null,u[w],u[b])},[s!=null&&s.title?ct(s,"title",u):A(Q,null,[D&&A(Ct,{icon:D},null),we,A("span",{class:L("actions")},[De(u)])])]),u}),n});return F(Be),()=>{let n;const{title:u,helpMessage:S,toolbar:p,search:g,checkable:K}=e,w=u||p||g||s.headerTitle,b={height:"calc(100% - 38px)"};return A("div",{class:[L(),"h-full",f.class]},[w&&A(At,{checkable:K,checkAll:ae,expandAll:J,title:u,search:g,toolbar:p,helpMessage:S,onStrictlyChange:Te,onSearch:q,onClickSearch:D=>x("search",D),searchText:k.searchText},vt(n=at(s))?n:{default:()=>[n]}),A(ft,{spinning:r(e.loading),tip:"加载中..."},{default:()=>[fe(A(lt,{style:b},{default:()=>[A(yt,ze(r(h),{showIcon:!1,treeData:Fe.value}),null)]}),[[ye,!r(a)]]),fe(A(ge,{image:ge.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ye,r(a)]])]})])}}});export{Nt as _};