var B=(D,i,f)=>new Promise((e,m)=>{var y=o=>{try{s(f.next(o))}catch(p){m(p)}},h=o=>{try{s(f.throw(o))}catch(p){m(p)}},s=o=>o.done?e(o.value):Promise.resolve(o.value).then(y,h);s((f=f.apply(D,i)).next())});import{B as X}from"./index-8cf3aabb.js";import"./BasicForm.vue_vue_type_style_index_0_lang-aeaafe88.js";import{_ as Y,bO as Z,bP as $,bQ as ee}from"./jeecg-online-vendor-bf2efbcb.js";import"./componentMap-a6d21ad6.js";import{m as ae,U as te}from"./antd-vue-vendor-1561c1ba.js";import{b as se,U as oe}from"./JAddInput-2cbbbde9.js";import{A as le,E as z}from"./index-fde9c72f.js";import ne from"./SysMessageList-df53e9bc.js";import re from"./DetailModal-9ff720a1.js";import{k as u,r as O,e as F,U as c,aV as g,as as v,f as n,bi as d,at as t,ad as K,af as ie,ag as T,ar as V,F as N,a_ as ce,V as de,u as fe}from"./vue-c7e3516e.js";import"./BasicModal-ff8f2086.js";import"./useWindowSizeFn-e5cad7ae.js";import"./tinymce-vendor-40778af9.js";import"./lodash-es-vendor-42c8d3d4.js";import"./codemirror-vendor-96aab763.js";import"./echarts-vendor-b30c7238.js";import"./html2canvas-vendor-654dcb8a.js";import"./vxe-table-vendor-8bace23a.js";import"./useFormItem-4a12ff45.js";import"./JUpload.vue_vue_type_style_index_0_lang-3f4c90f3.js";import"./download-c8889ed9.js";import"./base64Conver-4e359726.js";import"./index-ee020524.js";import"./index-53e807bd.js";import"./useCountdown-473e4dcc.js";import"./index-ed4be6fa.js";import"./areaDataUtil-b2642a1f.js";import"./useSelectBiz-c744cf20.js";import"./props-8e8dbf4f.js";import"./index-d4783a30.js";import"./bem-deccd0b6.js";import"./props-c3781b9d.js";import"./useContextMenu-c0be0b5c.js";import"./useTreeBiz-faf9875a.js";import"./index-63ed9c18.js";import"./depart.api-25dc3d39.js";import"./useSysMessage-bb4caff0.js";const me={name:"SysMessageModal",components:{BasicModal:X,FilterOutlined:Z,CloseOutlined:ae,BellFilled:$,ExclamationOutlined:ee,JSelectUser:se,SysMessageList:ne,UserSelectModal:oe,PlusOutlined:te,DetailModal:re},emits:["register","refresh"],setup(D,{emit:i}){const f=u(),e=u(),m=u("all");function y(a,l){m.value=l,o()}function h(a){m.value=a}const s=O({fromUser:"",realname:"",rangeDateKey:"",rangeDate:[]});function o(){let a={fromUser:s.fromUser,rangeDateKey:s.rangeDateKey,rangeDate:s.rangeDate};m.value=="all"?f.value.reload(a):e.value.reload(a)}const[p,{closeModal:b}]=le(()=>B(this,null,function*(){o()})),k=u(!1);function C(a,l){k.value=!0}const _=O([{key:"jt",text:"\u4ECA\u5929",active:!1},{key:"zt",text:"\u6628\u5929",active:!1},{key:"qt",text:"\u524D\u5929",active:!1},{key:"bz",text:"\u672C\u5468",active:!1},{key:"sz",text:"\u4E0A\u5468",active:!1},{key:"by",text:"\u672C\u6708",active:!1},{key:"sy",text:"\u4E0A\u6708",active:!1},{key:"zdy",text:"\u81EA\u5B9A\u4E49",active:!1}]);function M(a){for(let l of _)l.key!=a.key&&(l.active=!1);a.active=!a.active,a.active==!1?s.rangeDateKey="":s.rangeDateKey=a.key,a.key=="zdy"?a.active==!1&&(s.rangeDate=[],o()):o()}const x=F(()=>{let a=_.filter(l=>l.active==!0);return!!(a&&a.length>0&&a[0].text=="\u81EA\u5B9A\u4E49")}),S=u([]);function R(a,l){s.rangeDate=[...l],o()}function r(a){i("refresh",a)}const P=F(()=>{const{fromUser:a,rangeDateKey:l,realname:H}=s;if(!a&&!l)return"";let U=[];if(a&&U.push(H),l){let w=_.filter(W=>W.key==l);w&&w.length>0&&U.push(w[0].text)}return U.join("\u3001")}),[A,{openModal:E}]=z();function j(a,l){a&&a.length>0&&(s.fromUser=l,s.realname=a[0].label)}function G(){E(!0,{})}function L(){s.fromUser="",s.realname=""}function q(){s.fromUser="",s.realname="",s.rangeDateKey="",s.rangeDate=[];for(let a of _)a.active=!1}const[I,{openModal:J}]=z();function Q(a){J(!0,{record:fe(a),isUpdate:!0})}return{conditionStr:P,regModal:A,getSelectedUser:j,openSelectPerson:G,clearSearchParamsUser:L,clearAll:q,registerModal:p,activeKey:m,handleChangePanel:h,handleChangeTab:y,showSearch:k,searchParams:s,handleChangeSearchPerson:C,dateTags:_,handleClickDateTag:M,showRangeDate:x,searchRangeDate:S,handleChangeSearchDate:R,closeModal:b,hrefThenClose:r,allMessageRef:f,starMessageRef:e,registerDetail:I,showDetailModal:Q}}},_e={class:"sys-msg-modal-title"},ge=t("div",{class:"title"},null,-1),he={class:"ant-tabs-nav-wrap"},pe={class:"ant-tabs-nav-scroll"},ve={class:"ant-tabs-nav ant-tabs-nav-animated"},ue={class:"icon-right"},ye={class:"icons"},be=t("span",{class:"search-label"},"\u56DE\u590D\u3001\u63D0\u5230\u6211\u7684\u4EBA?\uFF1A",-1),ke={style:{display:"inline-block"}},Ce={key:0,class:"selected-user"},De={class:"clear-user-icon"},Me={class:"search-date"},xe=t("div",{class:"date-label"},"\u65F6\u95F4\uFF1A",-1),Se={class:"date-tags"},Re={class:"tags-container"},Ue=["onClick"],we={key:0,class:"cust-range-date"},Ke={key:0,class:"anticon filtera"},Te={style:{"font-size":"12px","margin-left":"3px"}},Pe={style:{display:"flex",margin:"0 5px"}},Be={class:"sys-message-card"},ze=t("div",null,null,-1);function Oe(D,i,f,e,m,y){const h=c("close-outlined"),s=c("plus-outlined"),o=c("a-button"),p=c("a-range-picker"),b=c("filter-outlined"),k=c("a-popover"),C=c("sys-message-list"),_=c("a-tab-pane"),M=c("a-tabs"),x=c("BasicModal"),S=c("user-select-modal"),R=c("DetailModal");return g(),v(N,null,[n(x,{canFullscreen:!1,draggable:!1,closable:!1,onRegister:e.registerModal,wrapClassName:"sys-msg-modal",width:800,footer:null,destroyOnClose:""},{title:d(()=>[t("div",_e,[ge,t("div",he,[t("div",pe,[t("div",ve,[t("div",null,[t("div",{onClick:i[0]||(i[0]=r=>e.handleChangeTab(r,"all")),role:"tab","aria-disabled":"false","aria-selected":"false",class:K(["ant-tabs-tab",{"ant-tabs-tab-active":e.activeKey=="all"}])}," \u5168\u90E8\u6D88\u606F ",2),t("div",{onClick:i[1]||(i[1]=r=>e.handleChangeTab(r,"star")),role:"tab","aria-disabled":"false","aria-selected":"true",class:K(["ant-tabs-tab",{"ant-tabs-tab-active":e.activeKey=="star"}])}," \u6807\u661F\u6D88\u606F ",2)]),t("div",{class:"ant-tabs-ink-bar ant-tabs-ink-bar-animated",style:ie({transform:e.activeKey=="all"?"translate3d(0px, 0px, 0px)":"translate3d(120px, 0px, 0px)",display:"block",width:"88px"})},null,4)])])]),t("div",ue,[t("div",ye,[n(k,{placement:"bottomRight",overlayStyle:{width:"400px"},trigger:"click",visible:e.showSearch,"onUpdate:visible":i[3]||(i[3]=r=>e.showSearch=r)},{content:d(()=>[t("div",null,[be,t("span",ke,[e.searchParams.fromUser?(g(),v("div",Ce,[t("span",null,T(e.searchParams.realname),1),t("span",De,[n(h,{style:{"font-size":"12px"},onClick:e.clearSearchParamsUser},null,8,["onClick"])])])):(g(),V(o,{key:1,type:"dashed",shape:"circle",onClick:e.openSelectPerson},{default:d(()=>[n(s)]),_:1},8,["onClick"]))])]),t("div",Me,[xe,t("div",Se,[t("div",Re,[(g(!0),v(N,null,ce(e.dateTags,r=>(g(),v("div",{class:K(r.active==!0?"tag active":"tag"),onClick:P=>e.handleClickDateTag(r)},T(r.text),11,Ue))),256))]),e.showRangeDate?(g(),v("div",we,[n(p,{value:e.searchRangeDate,"onUpdate:value":i[2]||(i[2]=r=>e.searchRangeDate=r),onChange:e.handleChangeSearchDate},null,8,["value","onChange"])])):de("",!0)])])]),default:d(()=>[e.conditionStr?(g(),v("span",Ke,[n(b),t("span",Te,T(e.conditionStr),1),t("span",Pe,[n(h,{style:{"font-size":"12px"},onClick:e.clearAll},null,8,["onClick"])])])):(g(),V(b,{key:1}))]),_:1},8,["visible"]),n(h,{onClick:e.closeModal},null,8,["onClick"])])])])]),default:d(()=>[t("div",Be,[n(M,{activeKey:e.activeKey,center:"",onTabClick:e.handleChangePanel},{renderTabBar:d(()=>[ze]),default:d(()=>[n(_,{tab:"\u5168\u90E8\u6D88\u606F",key:"all",forceRender:""},{default:d(()=>[n(C,{ref:"allMessageRef",onClose:e.hrefThenClose,onDetail:e.showDetailModal},null,8,["onClose","onDetail"])]),_:1}),n(_,{tab:"\u6807\u661F\u6D88\u606F",key:"star",forceRender:""},{default:d(()=>[n(C,{ref:"starMessageRef",star:"",onClose:e.hrefThenClose,onDetail:e.showDetailModal},null,8,["onClose","onDetail"])]),_:1})]),_:1},8,["activeKey","onTabClick"])])]),_:1},8,["onRegister"]),n(S,{isRadioSelection:"",showButton:!1,labelKey:"realname",rowKey:"username",onRegister:e.regModal,onGetSelectResult:e.getSelectedUser},null,8,["onRegister","onGetSelectResult"]),n(R,{onRegister:e.registerDetail},null,8,["onRegister"])],64)}const ba=Y(me,[["render",Oe]]);export{ba as default};