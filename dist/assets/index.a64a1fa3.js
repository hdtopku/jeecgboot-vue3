var ce=Object.defineProperty;var F=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var w=(e,t,_)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:_}):e[t]=_,H=(e,t)=>{for(var _ in t||(t={}))Ae.call(t,_)&&w(e,_,t[_]);if(F)for(var _ of F(t))Re.call(t,_)&&w(e,_,t[_]);return e};import{B as Ne,a as Ie}from"./index.0a5ccf4a.js";import{c2 as l,c3 as u,fu as U,fE as x,fF as h,fG as T,aq as D,f7 as A,fH as X,o as $,fq as C,D as V,fI as Y,fJ as Q,ap as j,fK as De,fL as pe,fM as Ce,fN as Le,j as v,fx as de,ao as fe,m as Ue,v as n,H as i,b7 as a,ed as he,x as ye,ax as y,fO as Be,fP as be,fQ as Ge,I as Pe,q as We,r as k,s as me,t as Fe}from"./index.0be4b5b8.js";import{useHeaderSetting as we}from"./useHeaderSetting.8fdf423f.js";import{useMultipleTabSetting as He}from"./useMultipleTabSetting.d059e027.js";const xe=l(()=>u(()=>import("./TypePicker.1c1770a6.js"),["assets/TypePicker.1c1770a6.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/TypePicker.78d6a814.css"])),B=l(()=>u(()=>import("./ThemeColorPicker.042b9a24.js"),["assets/ThemeColorPicker.042b9a24.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/index.0a5ccf4a.js","assets/index.60383c19.css","assets/useHeaderSetting.8fdf423f.js","assets/useMultipleTabSetting.d059e027.js","assets/ThemeColorPicker.56e7d77a.css"])),Xe=l(()=>u(()=>import("./SettingFooter.28e51483.js"),["assets/SettingFooter.28e51483.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/RedoOutlined.f0aa8ff3.js","assets/SettingFooter.f9097ff4.css"])),E=l(()=>u(()=>import("./SwitchItem.f54281dd.js"),["assets/SwitchItem.f54281dd.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/index.0a5ccf4a.js","assets/index.60383c19.css","assets/useHeaderSetting.8fdf423f.js","assets/useMultipleTabSetting.d059e027.js","assets/SwitchItem.1b10b690.css"])),p=l(()=>u(()=>import("./SelectItem.6823396e.js"),["assets/SelectItem.6823396e.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/index.0a5ccf4a.js","assets/index.60383c19.css","assets/useHeaderSetting.8fdf423f.js","assets/useMultipleTabSetting.d059e027.js","assets/SelectItem.70881d26.css"])),K=l(()=>u(()=>import("./InputNumberItem.c7e6879a.js"),["assets/InputNumberItem.c7e6879a.js","assets/index.0be4b5b8.js","assets/index.29060171.css","assets/index.0a5ccf4a.js","assets/index.60383c19.css","assets/useHeaderSetting.8fdf423f.js","assets/useMultipleTabSetting.d059e027.js","assets/InputNumberItem.7cf35ef6.css"])),{t:r}=$();var o=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.TABS_THEME=25]="TABS_THEME",e[e.LOCK_TIME=26]="LOCK_TIME",e[e.FULL_CONTENT=27]="FULL_CONTENT",e[e.CONTENT_MODE=28]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=29]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=30]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=31]="GRAY_MODE",e[e.COLOR_WEAK=32]="COLOR_WEAK",e[e.SHOW_LOGO=33]="SHOW_LOGO",e[e.SHOW_FOOTER=34]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=35]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=36]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=37]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=38]="OPEN_ROUTE_TRANSITION",e))(o||{});const ke=[{value:U.SMOOTH,label:r("layout.setting.tabsThemeSmooth")},{value:U.CARD,label:r("layout.setting.tabsThemeCard")},{value:U.SIMPLE,label:r("layout.setting.tabsThemeSimple")}],Ke=[{value:x.FULL,label:r("layout.setting.contentModeFull")},{value:x.FIXED,label:r("layout.setting.contentModeFixed")}],$e=[{value:h.CENTER,label:r("layout.setting.topMenuAlignRight")},{value:h.START,label:r("layout.setting.topMenuAlignLeft")},{value:h.END,label:r("layout.setting.topMenuAlignCenter")}],Ve=e=>[{value:C.NONE,label:r("layout.setting.menuTriggerNone")},{value:C.FOOTER,label:r("layout.setting.menuTriggerBottom")},...e?[]:[{value:C.HEADER,label:r("layout.setting.menuTriggerTop")}]];[T.ZOOM_FADE,T.FADE,T.ZOOM_OUT,T.FADE_SIDE,T.FADE_BOTTOM,T.FADE_SCALE].map(e=>({label:e,value:e}));const Ye=[{title:r("layout.setting.menuTypeSidebar"),mode:D.INLINE,type:A.SIDEBAR},{title:r("layout.setting.menuTypeMix"),mode:D.INLINE,type:A.MIX},{title:r("layout.setting.menuTypeTopMenu"),mode:D.HORIZONTAL,type:A.TOP_MENU},{title:r("layout.setting.menuTypeMixSidebar"),mode:D.INLINE,type:A.MIX_SIDEBAR}];X.HOVER,r("layout.setting.triggerHover"),X.CLICK,r("layout.setting.triggerClick");function Qe(e,t){const _=V(),g=je(e,t);_.setProjectConfig(g),e===o.CHANGE_THEME&&(Y(),Q())}function je(e,t){const _=V(),{getThemeColor:g,getDarkMode:R}=j();switch(e){case o.CHANGE_LAYOUT:const{mode:L,type:N,split:M}=t;return{menuSetting:H({mode:L,type:N,collapsed:!1,show:!0,hidden:!1},M===void 0?{split:M}:{})};case o.CHANGE_THEME_COLOR:return g.value===t?{}:(Le(t),{themeColor:t});case o.CHANGE_THEME:return R.value===t?{}:(Ce(t),{});case o.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case o.MENU_ACCORDION:return{menuSetting:{accordion:t}};case o.MENU_TRIGGER:return{menuSetting:{trigger:t}};case o.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case o.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case o.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case o.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case o.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case o.MENU_THEME:return Q(t),{menuSetting:{bgColor:t}};case o.MENU_SPLIT:return{menuSetting:{split:t}};case o.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case o.MENU_FIXED:return{menuSetting:{fixed:t}};case o.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case o.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case o.OPEN_PAGE_LOADING:return _.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case o.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case o.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case o.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case o.LOCK_TIME:return{lockTime:t};case o.FULL_CONTENT:return{fullContent:t};case o.CONTENT_MODE:return{contentMode:t};case o.SHOW_BREADCRUMB:return{showBreadCrumb:t};case o.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case o.GRAY_MODE:return pe(t),{grayMode:t};case o.SHOW_FOOTER:return{showFooter:t};case o.COLOR_WEAK:return De(t),{colorWeak:t};case o.SHOW_LOGO:return{showLogo:t};case o.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case o.TABS_SHOW:return{multiTabsSetting:{show:t}};case o.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case o.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case o.TABS_THEME:return{multiTabsSetting:{theme:t}};case o.HEADER_THEME:return Y(t),{headerSetting:{bgColor:t}};case o.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case o.HEADER_FIXED:return{headerSetting:{fixed:t}};case o.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}const{t:s}=$(),ve=v({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:_,getShowFooter:g,getShowBreadCrumb:R,getShowBreadCrumbIcon:L,getShowLogo:N,getFullContent:M,getColorWeak:d,getGrayMode:q,getLockTime:Z,getShowDarkModeToggle:b,getThemeColor:z}=j();de();const{getIsHorizontal:G,getShowMenu:J,getMenuType:P,getTrigger:ee,getCollapsedShowTitle:te,getMenuFixed:Je,getCollapsed:oe,getCanDrag:ie,getTopMenuAlign:ne,getAccordion:et,getMenuWidth:se,getMenuBgColor:_e,getIsTopMenu:re,getSplit:I,getIsMixSidebar:f,getCloseMixSidebarOnChange:tt,getMixSideTrigger:ot,getMixSideFixed:it}=fe(),{getShowHeader:W,getFixed:nt,getHeaderBgColor:Ee,getShowSearch:st}=we(),{getShowMultipleTab:ae,getShowQuick:_t,getShowRedo:rt,getShowFold:Et,getTabsTheme:ge}=He(),c=Ue(()=>i(J)&&!i(G));function Se(){return n(y,null,[n(xe,{menuTypeList:Ye,handler:S=>{Qe(o.CHANGE_LAYOUT,{mode:S.mode,type:S.type,split:i(G)?!1:void 0})},def:i(P)},null)])}function Oe(){return n(B,{colorList:Be,def:i(Ee),event:o.HEADER_THEME},null)}function Te(){return n(B,{colorList:be,def:i(_e),event:o.MENU_THEME},null)}function le(){return n(B,{colorList:Ge,def:i(z),event:o.CHANGE_THEME_COLOR},null)}function ue(){let S=i(ee);const m=Ve(i(I));return m.some(O=>O.value===S)||(S=C.FOOTER),n(y,null,[n(E,{title:s("layout.setting.splitMenu"),event:o.MENU_SPLIT,def:i(I),disabled:!i(c)||i(P)!==A.MIX},null),n(p,{title:s("layout.setting.tabsTheme"),event:o.TABS_THEME,def:i(ge),options:ke},null),n(p,{title:s("layout.setting.topMenuLayout"),event:o.MENU_TOP_ALIGN,def:i(ne),options:$e,disabled:!i(W)||i(I)||!i(re)&&!i(I)||i(f)},null),n(p,{title:s("layout.setting.menuCollapseButton"),event:o.MENU_TRIGGER,def:S,options:m,disabled:!i(c)||i(f)},null),n(p,{title:s("layout.setting.contentMode"),event:o.CONTENT_MODE,def:i(_),options:Ke},null),n(K,{title:s("layout.setting.autoScreenLock"),min:0,event:o.LOCK_TIME,defaultValue:i(Z),formatter:O=>parseInt(O)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${O}${s("layout.setting.minute")}`},null),n(K,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:o.MENU_WIDTH,disabled:!i(c),defaultValue:i(se),formatter:O=>`${parseInt(O)}px`},null)])}function Me(){return n(y,null,[n(E,{title:s("layout.setting.menuDrag"),event:o.MENU_HAS_DRAG,def:i(ie),disabled:!i(c)},null),n(E,{title:s("layout.setting.collapseMenuDisplayName"),event:o.MENU_COLLAPSED_SHOW_TITLE,def:i(te),disabled:!i(c)||!i(oe)||i(f)},null),n(E,{title:s("layout.setting.tabs"),event:o.TABS_SHOW,def:i(ae)},null),n(E,{title:s("layout.setting.breadcrumb"),event:o.SHOW_BREADCRUMB,def:i(R),disabled:!i(W)},null),n(E,{title:s("layout.setting.footer"),event:o.SHOW_FOOTER,def:i(g)},null),n(E,{title:s("layout.setting.grayMode"),event:o.GRAY_MODE,def:i(q)},null),n(E,{title:s("layout.setting.colorWeak"),event:o.COLOR_WEAK,def:i(d)},null)])}return()=>n(Ne,ye(t,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[i(b)&&n(a,null,{default:()=>s("layout.setting.darkMode")}),i(b)&&n(he,{class:"mx-auto"},null),n(a,null,{default:()=>s("layout.setting.navMode")}),Se(),n(a,null,{default:()=>s("layout.setting.sysTheme")}),le(),n(a,null,{default:()=>s("layout.setting.headerTheme")}),Oe(),n(a,null,{default:()=>s("layout.setting.sidebarTheme")}),Te(),n(a,null,{default:()=>s("layout.setting.interfaceFunction")}),ue(),Me(),n(a,null,null),n(Xe,null,null)]})}}),qe=v({name:"SettingButton",components:{SettingDrawer:ve,Icon:Pe},setup(){const[e,{openDrawer:t}]=Ie();return{register:e,openDrawer:t}}});function Ze(e,t,_,g,R,L){const N=k("Icon"),M=k("SettingDrawer");return me(),Fe("div",{onClick:t[0]||(t[0]=d=>e.openDrawer(!0))},[n(N,{icon:"ion:settings-outline"}),n(M,{onRegister:e.register},null,8,["onRegister"])])}const ze=We(qe,[["render",Ze]]),ut=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Qe as b,ut as i};