var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,a,i)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,n=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&r(t,a,e[a]);if(i)for(var a of i(e))o.call(e,a)&&r(t,a,e[a]);return t},l=(t,e,a)=>new Promise(((i,s)=>{var o=t=>{try{n(a.next(t))}catch(e){s(e)}},r=t=>{try{n(a.throw(t))}catch(e){s(e)}},n=t=>t.done?i(t.value):Promise.resolve(t.value).then(o,r);n((a=a.apply(t,e)).next())}));import{y as c,av as p,a1 as d,l as m,A as u,dv as y,eq as g,T as v,n as f,F as b,o as j,H as h,q as w,N as k,L as C,t as M,v as P,V as O,z as S,x,bc as T,Y as D,aW as z,C as B,D as N,W as G,ax as I,E as R,aI as A,eR as F,bU as _,d7 as q,m as L,a8 as U,bI as H,$ as E,r as K,g9 as V,B as $,a6 as W}from"./index.435ab247.js";import{T as X}from"./index.cdc49bf1.js";import J from"./DetailModal.9aa94a14.js";import Y from"./DynamicNotice.197a4b28.js";import"./index.e1e06dd6.js";import{connectWebSocket as Z,onWebSocket as Q}from"./useWebSocket.4f38000a.js";import{r as tt}from"./mynews.api.759c13b5.js";import et from"./SysMessageModal.b9cd3d33.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import"./useFormItem.816007c4.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JAddInput.8c125e2c.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./JUpload.e164672b.js";import"./uniqBy.91f18935.js";import"./SysMessageList.12301663.js";import"./useSysMessage.82193fa3.js";var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};function it(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),i.forEach((function(e){st(t,e,a[e])}))}return t}function st(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var ot=function(t,e){var a=it({},t,e.attrs);return c(p,it({},a,{icon:at}),null)};ot.displayName="BellOutlined",ot.inheritAttrs=!1;var rt=ot,nt=(t=>(t.L="L",t.M="M",t.H="H",t))(nt||{});const lt=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}],count:0},{key:"2",name:"系统消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}],count:0}],ct=(t,e)=>d.put({url:"/sys/sysAnnouncementSend/editByAnntIdAndUserId",params:n({anntId:t},e)});const pt=m({components:{[u.name]:u,[y.name]:y,[y.Item.name]:y.Item,AListItemMeta:y.Item.Meta,ATypographyParagraph:g.Paragraph,[v.name]:v,Time:X},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:1},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:a}=f("header-notify-list"),i=b(t.currentPage||1),s=j((()=>{const{pageSize:e,list:a}=t;if(!1===e)return[];let s=k(e)?e:5;return a.slice(s*(C(i)-1),s*C(i))}));h((()=>t.currentPage),(t=>{i.value=t}));const o=j((()=>!!t.onTitleClick));return{prefixCls:a,getPagination:j((()=>{const{list:a,pageSize:s}=t;return!!(s>0&&a&&a.length>s)&&{total:a.length,pageSize:s,current:C(i),onChange(t){i.value=t,e("update:currentPage",t)}}})),getData:s,handleTitleClick:function(e){t.onTitleClick&&t.onTitleClick(e)},isTitleClickable:o,PriorityTypes:nt}}}),dt={class:"title"},mt={key:0,class:"extra"},ut={key:2},yt={key:0,class:"description"},gt={class:"datetime"};var vt=w(pt,[["render",function(t,e,a,i,s,o){const r=M("a-typography-paragraph"),n=M("a-tag"),l=M("a-avatar"),p=M("Icon"),d=M("Time"),m=M("a-list-item-meta"),u=M("a-list-item"),y=M("a-list");return P(),O(y,{class:R(t.prefixCls),pagination:t.getPagination},{default:S((()=>[(P(!0),x(I,null,T(t.getData,(e=>(P(),O(u,{key:e.id,class:"list-item",onClick:a=>t.handleTitleClick(e),style:D({cursor:t.isTitleClickable?"pointer":""})},{default:S((()=>[c(m,null,{title:S((()=>[z("div",dt,[c(r,{style:{width:"100%","margin-bottom":"0 !important"},delete:!!e.titleDelete,ellipsis:!!(t.$props.titleRows&&t.$props.titleRows>0)&&{rows:t.$props.titleRows,tooltip:!!e.title},content:e.title},null,8,["delete","ellipsis","content"]),e.extra?(P(),x("div",mt,[c(n,{class:"tag",color:e.color},{default:S((()=>[B(N(e.extra),1)])),_:2},1032,["color"])])):G("",!0)])])),avatar:S((()=>[e.avatar?(P(),O(l,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):e.priority?(P(),x(I,{key:1},[e.priority===t.PriorityTypes.L?(P(),O(l,{key:0,class:"avatar priority-L",title:"一般消息"},{icon:S((()=>[c(p,{icon:"entypo:info"})])),_:1})):G("",!0),e.priority===t.PriorityTypes.M?(P(),O(l,{key:1,class:"avatar priority-M",title:"重要消息"},{icon:S((()=>[c(p,{icon:"bi:exclamation-lg"})])),_:1})):G("",!0),e.priority===t.PriorityTypes.H?(P(),O(l,{key:2,class:"avatar priority-H",title:"紧急消息"},{icon:S((()=>[c(p,{icon:"ant-design:warning-filled"})])),_:1})):G("",!0)],64)):(P(),x("span",ut,N(e.avatar),1))])),description:S((()=>[z("div",null,[e.description?(P(),x("div",yt,[c(r,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:!!(t.$props.descRows&&t.$props.descRows>0)&&{rows:t.$props.descRows,tooltip:!!e.description},content:e.description},null,8,["ellipsis","content"])])):G("",!0),z("div",gt,[c(d,{value:e.datetime,title:e.datetime},null,8,["value","title"])])])])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1},8,["class","pagination"])}],["__scopeId","data-v-ca0f4242"]]);var ft=w(m({components:{Popover:A,BellOutlined:rt,Tabs:F,TabPane:F.TabPane,Badge:_,NoticeList:vt,DetailModal:J,DynamicNotice:Y,SysMessageModal:et},setup(){const{prefixCls:t}=f("header-notify"),i=W(),s=q(),o=L(),r=U({path:"",formData:{}}),[c,p]=H(),m=b(lt),u=j((()=>{let t=0;for(let e=0;e<m.value.length;e++)t+=m.value[e].count;return t})),[y,{openModal:g}]=H();const v=b(!1);E((()=>{!function(){var t;let e=K(),a=V(e),i=C(s.getUserInfo).id+"_"+a,r=(null==(t=o.domainUrl)?void 0:t.replace("https://","wss://").replace("http://","ws://"))+"/websocket/"+i;Z(r),Q(M)}()}));const h=b(0);function w(t){return i=n({},t),s={title:t.titile,description:t.msgAbstract,datetime:t.sendTime},e(i,a(s));var i,s}function k(){return l(this,null,(function*(){try{let{anntMsgList:e,sysMsgList:a,anntMsgTotal:i,sysMsgTotal:s}=yield(t={pageSize:5},d.get({url:"/sys/annountCement/listByUser",params:t}));m.value[0].list=e.map(w),m.value[1].list=a.map(w),m.value[0].count=i,m.value[1].count=s;let o=i+s;h.value=o}catch(e){}var t}))}function M(t){"topic"!==t.cmd&&"user"!==t.cmd||setTimeout((()=>{k()}),1e3)}return k(),{prefixCls:t,listData:m,count:u,clickBadge:function(){for(let t=0;t<m.value.length;t++)m.value[t].count=0;g(!0,{})},registerMessageModal:y,reloadCount:function(t){return l(this,null,(function*(){try{yield ct(t),yield k()}catch(e){}}))},onNoticeClick:function(t){var e;try{ct(t.id),k()}catch(a){}"component"===t.openType?(r.path=t.openPage,r.formData={id:t.busId},null==(e=i.refs.dynamicNoticeRef)||e.detail(t.openPage)):p.openModal(!0,{record:t,isUpdate:!0}),v.value=!1},onEmptyNotify:function(){v.value=!1,tt({},k)},numberStyle:{},popoverVisible:v,registerDetail:c,dynamicNoticeProps:r}}}),[["render",function(t,e,a,i,s,o){const r=M("BellOutlined"),n=M("Badge"),l=M("DynamicNotice"),p=M("DetailModal"),d=M("sys-message-modal");return P(),x("div",{class:R(t.prefixCls)},[c(n,{count:t.count,overflowCount:9,offset:[-4,10],numberStyle:t.numberStyle,onClick:t.clickBadge},{default:S((()=>[c(r)])),_:1},8,["count","numberStyle","onClick"]),c(l,$({ref:"dynamicNoticeRef"},t.dynamicNoticeProps),null,16),c(p,{onRegister:t.registerDetail},null,8,["onRegister"]),c(d,{onRegister:t.registerMessageModal,onRefresh:t.reloadCount},null,8,["onRegister","onRefresh"])],2)}]]);export{ft as default};