import{d as i,k as D,U as v,aV as l,ar as d,bi as s,as as p,f as o,E as n,V as e,v as R,A as U,at as b,ag as y,ad as m,g as uu}from"./vue-c7e3516e.js";import{s as z,g as au}from"./AmLink.api-a2456d0c.js";import{_ as su}from"./CommonList.vue_vue_type_script_setup_true_lang-96bbb986.js";import{g as nu}from"./Am.api-4a05091a.js";import{bl as lu,bm as ou}from"./jeecg-online-vendor-bf2efbcb.js";import{ab as eu}from"./antd-vue-vendor-1561c1ba.js";const du={key:0},ru={key:0},cu={size:"small",class:"text-red-500"},tu={key:2,style:{"margin-left":"-10px"}},_u={key:0,class:"text-indigo-700"},yu={key:0,class:"text-red-600"},pu={key:1},fu={key:2},ku={key:3},hu={key:4},gu={class:"text-indigo-700"},Cu={key:0},Du=i({__name:"AmLinkDataList",emits:["handleEdit","handleAdd","queryList"],setup(vu,{expose:j,emit:C}){const E=lu(ou);let{username:G,realname:bu}=E==null?void 0:E.userInfo;const $=D(),Y=a=>{C("handleEdit",a)},J=a=>{C("handleAdd",a)},N=a=>A(a==null?void 0:a.link)+A(a==null?void 0:a.thirdLink)+A(a==null?void 0:a.shortLink),A=a=>{if((a==null?void 0:a.indexOf("itunes.apple.com"))>0){let r=a==null?void 0:a.indexOf("&ud_t=");if(r>0){let t=Number.parseInt(a==null?void 0:a.substring(r+6))*1e3;return eu(t).format("MM-DD HH:mm")}}return""},F=a=>{if((a==null?void 0:a.length)>0){let r=a.indexOf("clicked/");if(r>=0)return a.substring(r,r+13);if(r=a.indexOf("&ud_t="),r>=0)return a.substring(r+4)}return a},B=(a,r)=>{a.status=r,z(a,!0).then(()=>{C("queryList")})},P=a=>{z({id:a},!0).then(()=>{C("queryList")})},x=(a,r)=>{a.type=r,z(a,!0).then(()=>{C("queryList")})},{proxy:W}=uu(),w=(a={})=>nu({count:1,type:6,linkId:a==null?void 0:a.id,link:a==null?void 0:a.link,username:G},r=>{W.tool.copy(r,r+"\u5DF2\u590D\u5236")}),h=D("0"),X=(a={})=>{h.value=a==null?void 0:a.status,$.value.execQuery(au,a)},g=D(!1);return j({startQuery:X,changeAdvanced:()=>{g.value=!g.value},copyCode:w}),(a,r)=>{const t=v("a-button"),k=v("a-typography-text"),f=v("a-menu-item"),Z=v("a-menu"),_=v("a-tag");return l(),d(su,{ref_key:"CommonListRef",ref:$},{header:s(()=>[h.value==="1"?(l(),p("span",du,[o(t,{class:"mr-6",size:"small",type:"primary",preIcon:"ant-design:plus-outlined",onClick:J},{default:s(()=>[n("\u65B0\u589E")]),_:1}),o(k,{class:"mr-6",copyable:{text:"https://www.myunidays.hk/CN/zh-CN/partners/applemusic/micro-access/online"}},{default:s(()=>[n("online\u5730\u5740 ")]),_:1},8,["copyable"])])):e("",!0),R(o(k,{mark:""},{default:s(()=>[n("\u6309\u521B\u5EFA\u65F6\u95F4\u5012\u6392")]),_:1},512),[[U,h.value==="0"]]),R(o(k,{mark:""},{default:s(()=>[n("\u6309\u4FEE\u6539\u65F6\u95F4\u5012\u6392 ")]),_:1},512),[[U,h.value==="100"||h.value==="-1"||h.value==="1"]])]),operate:s(({item:u})=>[o(Z,null,{default:s(()=>[(u==null?void 0:u.status)!==0?(l(),d(f,{key:0,onClick:c=>P(u.id)},{default:s(()=>[o(t,{type:"warning",ghost:"",size:"small"},{default:s(()=>[n("\u7F6E\u9876")]),_:1})]),_:2},1032,["onClick"])):e("",!0),o(f,{onClick:c=>Y(u)},{default:s(()=>[o(t,{type:"link",size:"small"},{default:s(()=>[n("\u7F16\u8F91")]),_:1})]),_:2},1032,["onClick"]),(u==null?void 0:u.status)===0||(u==null?void 0:u.status)===1?(l(),d(f,{key:1,onClick:c=>B(u,-1)},{default:s(()=>[o(t,{type:"link",size:"small",danger:""},{default:s(()=>[n("\u5220\u9664")]),_:1})]),_:2},1032,["onClick"])):e("",!0),(u==null?void 0:u.status)===0||(u==null?void 0:u.status)===-1?(l(),d(f,{key:2,onClick:c=>B(u,1)},{default:s(()=>[o(t,{type:"link",size:"small"},{default:s(()=>[n("\u5907\u7528")]),_:1})]),_:2},1032,["onClick"])):e("",!0),(u==null?void 0:u.status)===-1||(u==null?void 0:u.status)===1?(l(),d(f,{key:3,onClick:c=>B(u,0)},{default:s(()=>[o(t,{type:"link",size:"small"},{default:s(()=>[n("\u4F7F\u7528")]),_:1})]),_:2},1032,["onClick"])):e("",!0),(u==null?void 0:u.type)!==1&&(u==null?void 0:u.type)!==6?(l(),d(f,{key:4},{default:s(()=>[o(t,{onClick:c=>x(u,6),type:"link",size:"small"},{default:s(()=>[n("\u8BBE\u4E3A\u81F3\u5C0A")]),_:2},1032,["onClick"])]),_:2},1024)):e("",!0),(u==null?void 0:u.type)!==1&&(u==null?void 0:u.type)!==6?(l(),d(f,{key:5},{default:s(()=>[o(t,{onClick:c=>x(u,1),type:"link",size:"small"},{default:s(()=>[n("\u8BBE\u4E3A\u666E\u901A")]),_:2},1032,["onClick"])]),_:2},1024)):e("",!0),(u==null?void 0:u.type)===6?(l(),d(f,{key:6,onClick:c=>x(u,0)},{default:s(()=>[o(t,{type:"link",size:"small"},{default:s(()=>[n("\u53D6\u6D88\u81F3\u5C0A")]),_:1})]),_:2},1032,["onClick"])):e("",!0),(u==null?void 0:u.type)===1?(l(),d(f,{key:7,onClick:c=>x(u,0)},{default:s(()=>[o(t,{type:"link",size:"small"},{default:s(()=>[n("\u53D6\u6D88\u666E\u901A")]),_:1})]),_:2},1032,["onClick"])):e("",!0)]),_:2},1024)]),shelter:s(({item:u})=>[(u==null?void 0:u.bindCount)>0?(l(),p("span",ru,[n(" |"),b("span",cu,y(u==null?void 0:u.bindCount)+"\u6B21",1)])):e("",!0)]),left:s(({item:u})=>{var c;return[(u==null?void 0:u.type)===6?(l(),d(_,{key:0,color:"red"},{default:s(()=>[n("\u81F3\u5C0A\u7248")]),_:1})):e("",!0),(u==null?void 0:u.type)===1?(l(),d(_,{key:1},{default:s(()=>[n("\u666E\u901A\u7248")]),_:1})):e("",!0),((c=u==null?void 0:u.link)==null?void 0:c.length)>0?(l(),p("div",tu,[o(t,{size:"small",type:"link",onClick:L=>w(u)},{default:s(()=>[n("\u590D\u5236\u77ED\u94FE")]),_:2},1032,["onClick"])])):e("",!0)]}),bottom:s(({item:u})=>{var c,L,O,T,I,V,q,S,H,K,M,Q;return[b("div",{class:m((u==null?void 0:u.type)===6?"bg-pink-100 p-2":(u==null?void 0:u.type)===1?"bg-blue-100 p-2":"")},[b("div",null,[o(_,null,{default:s(()=>[n("\u6FC0\u6D3B\u94FE")]),_:1}),((c=u==null?void 0:u.link)==null?void 0:c.length)>0?(l(),d(k,{key:0,delete:(u==null?void 0:u.status)===-1,copyable:{text:u.link}},{default:s(()=>[n(y(F(u.link)),1)]),_:2},1032,["delete","copyable"])):(l(),d(_,{key:1,color:"error"},{default:s(()=>[n("\u672A\u751F\u6210")]),_:1}))]),b("div",null,[n(" [\u521B\u5EFA]"+y((L=u==null?void 0:u.createTime)==null?void 0:L.substring(5,16))+" ",1),((O=N(u))==null?void 0:O.length)>0?(l(),p("span",_u,"[\u6FC0\u6D3B]"+y(N(u)),1)):e("",!0)]),((T=u==null?void 0:u.remark)==null?void 0:T.length)>0?(l(),p("div",yu,[o(_,{color:"red"},{default:s(()=>[n("\u5907\u6CE8")]),_:1}),n(" "+y(u.remark),1)])):e("",!0),((I=u==null?void 0:u.email)==null?void 0:I.length)>0&&(g.value||(u==null?void 0:u.status)===1||(u==null?void 0:u.type)===1)?(l(),p("div",pu,[o(_,null,{default:s(()=>[n("\u9884\u5B58")]),_:1}),((V=u==null?void 0:u.email)==null?void 0:V.length)>0?(l(),d(k,{key:0,copyable:{text:u.email}},{default:s(()=>[n(y(F(u.email)),1)]),_:2},1032,["copyable"])):(l(),d(_,{key:1,color:"error"},{default:s(()=>[n("\u672A\u586B\u5199")]),_:1}))])):e("",!0),g.value&&((q=u==null?void 0:u.longLink)==null?void 0:q.length)>0||(u==null?void 0:u.status)===1?(l(),p("div",fu,[o(_,null,{default:s(()=>[n("\u957F\u94FE\u63A5")]),_:1}),((S=u==null?void 0:u.longLink)==null?void 0:S.length)>0?(l(),d(k,{key:0,copyable:{text:u.longLink}},{default:s(()=>[n(y(F(u.longLink)),1)]),_:2},1032,["copyable"])):(l(),d(_,{key:1,color:"error"},{default:s(()=>[n("\u672A\u586B\u5199")]),_:1}))])):e("",!0),((H=u==null?void 0:u.thirdLink)==null?void 0:H.length)>0&&(g.value||(u==null?void 0:u.status)===1||(u==null?void 0:u.status)===6)?(l(),p("div",ku,[o(_,null,{default:s(()=>[n("\u9884\u5B58")]),_:1}),((K=u==null?void 0:u.thirdLink)==null?void 0:K.length)>0?(l(),d(k,{key:0,copyable:{text:u.thirdLink}},{default:s(()=>[n(y(F(u.thirdLink)),1)]),_:2},1032,["copyable"])):(l(),d(_,{key:1,color:"error"},{default:s(()=>[n("\u672A\u586B\u5199")]),_:1}))])):e("",!0),g.value?(l(),p("div",hu,[b("span",gu,[n(" [\u521B\u5EFA]"+y(u==null?void 0:u.createBy)+" ",1),((M=u==null?void 0:u.updateBy)==null?void 0:M.length)>0?(l(),p("div",Cu,"[\u66F4\u65B0]"+y(u==null?void 0:u.updateBy)+"\uFF1A"+y((Q=u==null?void 0:u.updateTime)==null?void 0:Q.substring(5,19)),1)):e("",!0)])])):e("",!0)],2)]}),_:1},512)}}});export{Du as _};