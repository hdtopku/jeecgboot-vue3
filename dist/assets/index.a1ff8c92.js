var Ae=Object.defineProperty;var m=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var w=(e,t,_)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:_}):e[t]=_,H=(e,t)=>{for(var _ in t||(t={}))ce.call(t,_)&&w(e,_,t[_]);if(m)for(var _ of m(t))Re.call(t,_)&&w(e,_,t[_]);return e};import{B as Ne,a as Ie}from"./index.804bf00b.js";import{c9 as l,ca as u,fJ as U,fT as x,fU as h,fV as O,ap as D,fn as c,fW as X,s as $,fF as C,G as V,fX as Y,fY as v,ao as Q,fZ as De,f_ as pe,f$ as Ce,g0 as Le,l as Z,fM as de,an as fe,o as Ue,y as n,L as i,b6 as a,e2 as he,B as ye,aw as y,g1 as Be,g2 as be,g3 as Ge,q as We,I as Pe,t as k,v as Fe,x as me}from"./index.b3d2a891.js";import{useHeaderSetting as we}from"./useHeaderSetting.f5463319.js";import{useMultipleTabSetting as He}from"./useMultipleTabSetting.862720b8.js";const xe=l(()=>u(()=>import("./TypePicker.a5c4d381.js"),["assets/TypePicker.a5c4d381.js","assets/TypePicker.5838635f.css","assets/index.b3d2a891.js","assets/index.bc1be517.css"])),B=l(()=>u(()=>import("./ThemeColorPicker.0c02717c.js"),["assets/ThemeColorPicker.0c02717c.js","assets/ThemeColorPicker.777c5d34.css","assets/index.b3d2a891.js","assets/index.bc1be517.css","assets/index.804bf00b.js","assets/index.a8aed5d1.css","assets/useHeaderSetting.f5463319.js","assets/useMultipleTabSetting.862720b8.js"])),Xe=l(()=>u(()=>import("./SettingFooter.a8e6f427.js"),["assets/SettingFooter.a8e6f427.js","assets/SettingFooter.537f7bec.css","assets/index.b3d2a891.js","assets/index.bc1be517.css","assets/RedoOutlined.b10d0ad6.js"])),E=l(()=>u(()=>import("./SwitchItem.81fa7718.js"),["assets/SwitchItem.81fa7718.js","assets/SwitchItem.bd89c96d.css","assets/index.b3d2a891.js","assets/index.bc1be517.css","assets/index.804bf00b.js","assets/index.a8aed5d1.css","assets/useHeaderSetting.f5463319.js","assets/useMultipleTabSetting.862720b8.js"])),p=l(()=>u(()=>import("./SelectItem.5ab3a6ba.js"),["assets/SelectItem.5ab3a6ba.js","assets/SelectItem.b01822ce.css","assets/index.b3d2a891.js","assets/index.bc1be517.css","assets/index.804bf00b.js","assets/index.a8aed5d1.css","assets/useHeaderSetting.f5463319.js","assets/useMultipleTabSetting.862720b8.js"])),K=l(()=>u(()=>import("./InputNumberItem.8aae91ec.js"),["assets/InputNumberItem.8aae91ec.js","assets/InputNumberItem.0519f200.css","assets/index.b3d2a891.js","assets/index.bc1be517.css","assets/index.804bf00b.js","assets/index.a8aed5d1.css","assets/useHeaderSetting.f5463319.js","assets/useMultipleTabSetting.862720b8.js"])),{t:r}=$();var o=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.TABS_THEME=25]="TABS_THEME",e[e.LOCK_TIME=26]="LOCK_TIME",e[e.FULL_CONTENT=27]="FULL_CONTENT",e[e.CONTENT_MODE=28]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=29]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=30]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=31]="GRAY_MODE",e[e.COLOR_WEAK=32]="COLOR_WEAK",e[e.SHOW_LOGO=33]="SHOW_LOGO",e[e.SHOW_FOOTER=34]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=35]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=36]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=37]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=38]="OPEN_ROUTE_TRANSITION",e))(o||{});const ke=[{value:U.SMOOTH,label:r("layout.setting.tabsThemeSmooth")},{value:U.CARD,label:r("layout.setting.tabsThemeCard")},{value:U.SIMPLE,label:r("layout.setting.tabsThemeSimple")}],Ke=[{value:x.FULL,label:r("layout.setting.contentModeFull")},{value:x.FIXED,label:r("layout.setting.contentModeFixed")}],$e=[{value:h.CENTER,label:r("layout.setting.topMenuAlignRight")},{value:h.START,label:r("layout.setting.topMenuAlignLeft")},{value:h.END,label:r("layout.setting.topMenuAlignCenter")}],Ve=e=>[{value:C.NONE,label:r("layout.setting.menuTriggerNone")},{value:C.FOOTER,label:r("layout.setting.menuTriggerBottom")},...e?[]:[{value:C.HEADER,label:r("layout.setting.menuTriggerTop")}]];[O.ZOOM_FADE,O.FADE,O.ZOOM_OUT,O.FADE_SIDE,O.FADE_BOTTOM,O.FADE_SCALE].map(e=>({label:e,value:e}));const Ye=[{title:r("layout.setting.menuTypeSidebar"),mode:D.INLINE,type:c.SIDEBAR},{title:r("layout.setting.menuTypeMix"),mode:D.INLINE,type:c.MIX},{title:r("layout.setting.menuTypeTopMenu"),mode:D.HORIZONTAL,type:c.TOP_MENU},{title:r("layout.setting.menuTypeMixSidebar"),mode:D.INLINE,type:c.MIX_SIDEBAR}];X.HOVER,r("layout.setting.triggerHover"),X.CLICK,r("layout.setting.triggerClick");function ve(e,t){const _=V(),g=Qe(e,t);_.setProjectConfig(g),e===o.CHANGE_THEME&&(Y(),v())}function Qe(e,t){const _=V(),{getThemeColor:g,getDarkMode:R}=Q();switch(e){case o.CHANGE_LAYOUT:const{mode:L,type:N,split:M}=t;return{menuSetting:H({mode:L,type:N,collapsed:!1,show:!0,hidden:!1},M===void 0?{split:M}:{})};case o.CHANGE_THEME_COLOR:return g.value===t?{}:(Le(t),{themeColor:t});case o.CHANGE_THEME:return R.value===t?{}:(Ce(t),{});case o.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case o.MENU_ACCORDION:return{menuSetting:{accordion:t}};case o.MENU_TRIGGER:return{menuSetting:{trigger:t}};case o.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case o.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case o.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case o.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case o.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case o.MENU_THEME:return v(t),{menuSetting:{bgColor:t}};case o.MENU_SPLIT:return{menuSetting:{split:t}};case o.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case o.MENU_FIXED:return{menuSetting:{fixed:t}};case o.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case o.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case o.OPEN_PAGE_LOADING:return _.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case o.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case o.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case o.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case o.LOCK_TIME:return{lockTime:t};case o.FULL_CONTENT:return{fullContent:t};case o.CONTENT_MODE:return{contentMode:t};case o.SHOW_BREADCRUMB:return{showBreadCrumb:t};case o.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case o.GRAY_MODE:return pe(t),{grayMode:t};case o.SHOW_FOOTER:return{showFooter:t};case o.COLOR_WEAK:return De(t),{colorWeak:t};case o.SHOW_LOGO:return{showLogo:t};case o.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case o.TABS_SHOW:return{multiTabsSetting:{show:t}};case o.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case o.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case o.TABS_THEME:return{multiTabsSetting:{theme:t}};case o.HEADER_THEME:return Y(t),{headerSetting:{bgColor:t}};case o.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case o.HEADER_FIXED:return{headerSetting:{fixed:t}};case o.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}const{t:s}=$();var Ze=Z({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:_,getShowFooter:g,getShowBreadCrumb:R,getShowBreadCrumbIcon:L,getShowLogo:N,getFullContent:M,getColorWeak:d,getGrayMode:j,getLockTime:z,getShowDarkModeToggle:b,getThemeColor:q}=Q();de();const{getIsHorizontal:G,getShowMenu:J,getMenuType:W,getTrigger:ee,getCollapsedShowTitle:te,getMenuFixed:Je,getCollapsed:oe,getCanDrag:ie,getTopMenuAlign:ne,getAccordion:et,getMenuWidth:se,getMenuBgColor:_e,getIsTopMenu:re,getSplit:I,getIsMixSidebar:f,getCloseMixSidebarOnChange:tt,getMixSideTrigger:ot,getMixSideFixed:it}=fe(),{getShowHeader:P,getFixed:nt,getHeaderBgColor:Ee,getShowSearch:st}=we(),{getShowMultipleTab:ae,getShowQuick:_t,getShowRedo:rt,getShowFold:Et,getTabsTheme:ge}=He(),A=Ue(()=>i(J)&&!i(G));function Se(){return n(y,null,[n(xe,{menuTypeList:Ye,handler:S=>{ve(o.CHANGE_LAYOUT,{mode:S.mode,type:S.type,split:i(G)?!1:void 0})},def:i(W)},null)])}function Te(){return n(B,{colorList:Be,def:i(Ee),event:o.HEADER_THEME},null)}function Oe(){return n(B,{colorList:be,def:i(_e),event:o.MENU_THEME},null)}function le(){return n(B,{colorList:Ge,def:i(q),event:o.CHANGE_THEME_COLOR},null)}function ue(){let S=i(ee);const F=Ve(i(I));return F.some(T=>T.value===S)||(S=C.FOOTER),n(y,null,[n(E,{title:s("layout.setting.splitMenu"),event:o.MENU_SPLIT,def:i(I),disabled:!i(A)||i(W)!==c.MIX},null),n(p,{title:s("layout.setting.tabsTheme"),event:o.TABS_THEME,def:i(ge),options:ke},null),n(p,{title:s("layout.setting.topMenuLayout"),event:o.MENU_TOP_ALIGN,def:i(ne),options:$e,disabled:!i(P)||i(I)||!i(re)&&!i(I)||i(f)},null),n(p,{title:s("layout.setting.menuCollapseButton"),event:o.MENU_TRIGGER,def:S,options:F,disabled:!i(A)||i(f)},null),n(p,{title:s("layout.setting.contentMode"),event:o.CONTENT_MODE,def:i(_),options:Ke},null),n(K,{title:s("layout.setting.autoScreenLock"),min:0,event:o.LOCK_TIME,defaultValue:i(z),formatter:T=>parseInt(T)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${T}${s("layout.setting.minute")}`},null),n(K,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:o.MENU_WIDTH,disabled:!i(A),defaultValue:i(se),formatter:T=>`${parseInt(T)}px`},null)])}function Me(){return n(y,null,[n(E,{title:s("layout.setting.menuDrag"),event:o.MENU_HAS_DRAG,def:i(ie),disabled:!i(A)},null),n(E,{title:s("layout.setting.collapseMenuDisplayName"),event:o.MENU_COLLAPSED_SHOW_TITLE,def:i(te),disabled:!i(A)||!i(oe)||i(f)},null),n(E,{title:s("layout.setting.tabs"),event:o.TABS_SHOW,def:i(ae)},null),n(E,{title:s("layout.setting.breadcrumb"),event:o.SHOW_BREADCRUMB,def:i(R),disabled:!i(P)},null),n(E,{title:s("layout.setting.footer"),event:o.SHOW_FOOTER,def:i(g)},null),n(E,{title:s("layout.setting.grayMode"),event:o.GRAY_MODE,def:i(j)},null),n(E,{title:s("layout.setting.colorWeak"),event:o.COLOR_WEAK,def:i(d)},null)])}return()=>n(Ne,ye(t,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[i(b)&&n(a,null,{default:()=>s("layout.setting.darkMode")}),i(b)&&n(he,{class:"mx-auto"},null),n(a,null,{default:()=>s("layout.setting.navMode")}),Se(),n(a,null,{default:()=>s("layout.setting.sysTheme")}),le(),n(a,null,{default:()=>s("layout.setting.headerTheme")}),Te(),n(a,null,{default:()=>s("layout.setting.sidebarTheme")}),Oe(),n(a,null,{default:()=>s("layout.setting.interfaceFunction")}),ue(),Me(),n(a,null,null),n(Xe,null,null)]})}});const je=Z({name:"SettingButton",components:{SettingDrawer:Ze,Icon:Pe},setup(){const[e,{openDrawer:t}]=Ie();return{register:e,openDrawer:t}}});function ze(e,t,_,g,R,L){const N=k("Icon"),M=k("SettingDrawer");return Fe(),me("div",{onClick:t[0]||(t[0]=d=>e.openDrawer(!0))},[n(N,{icon:"ion:settings-outline"}),n(M,{onRegister:e.register},null,8,["onRegister"])])}var qe=We(je,[["render",ze]]),ut=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{ve as b,ut as i};
