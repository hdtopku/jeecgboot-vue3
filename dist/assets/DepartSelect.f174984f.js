var E=(v,k,c)=>new Promise((f,b)=>{var x=l=>{try{B(c.next(l))}catch(s){b(s)}},T=l=>{try{B(c.throw(l))}catch(s){b(s)}},B=l=>l.done?f(l.value):Promise.resolve(l.value).then(x,T);B((c=c.apply(v,k)).next())});import{B as ue}from"./index.117f635e.js";import{g as le,h as se}from"./depart.api.888c6bd3.js";import{c as oe}from"./tenant.api.1cb67665.js";import{j as ne,d9 as re,C as r,E as ie,r as p,s as m,Q as h,w as a,v as i,y as C,B as H,t as P,bc as $,z as j,ax as K,R as Q,x as W,K as e,dr as ce,ds as fe,aW as G,u as de,q as pe}from"./index.25572ab7.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";const J=v=>(ce("data-v-625df8e3"),v=v(),fe(),v),ve=J(()=>G("span",null,"\u60A8\u96B6\u5C5E\u4E8E\u591A\u79DF\u6237\uFF0C\u8BF7\u9009\u62E9\u5F53\u524D\u6240\u5C5E\u79DF\u6237",-1)),_e=J(()=>G("span",null,"\u60A8\u96B6\u5C5E\u4E8E\u591A\u90E8\u95E8\uFF0C\u8BF7\u9009\u62E9\u5F53\u524D\u6240\u5728\u90E8\u95E8",-1)),me=ne({__name:"DepartSelect",props:{title:{type:String,default:"\u90E8\u95E8\u9009\u62E9"},closable:{type:Boolean,default:!1},username:{type:String,default:""}},setup(v,{expose:k}){const c=v,f=re(),{createMessage:b,notification:x}=de(),T={labelCol:{span:4},wrapperCol:{span:18}},B={maskClosable:!1,closable:!1,canFullscreen:!1,width:"500px",minHeight:20,maxHeight:20},l=r(""),s=r(!1),D=r(""),_=r(),N=r([]),S=r(""),d=r(!1),y=r(""),g=r(""),A=r([]),w=r(""),I=r(!1);function O(){return E(this,null,function*(){yield U(),yield X(),e(s)&&e(d)?l.value="\u5207\u6362\u79DF\u6237\u548C\u90E8\u95E8":e(s)?l.value=e(D)&&e(D).length>0?`\u79DF\u6237\u5207\u6362\uFF08\u5F53\u524D\u79DF\u6237 :${e(D)}\uFF09`:c.title:e(d)&&(l.value=e(y)&&e(y).length>0?`\u90E8\u95E8\u5207\u6362\uFF08\u5F53\u524D\u90E8\u95E8 :${e(y)}\uFF09`:c.title),(e(s)||e(d))&&(I.value=!0)})}function U(){return E(this,null,function*(){const t=yield le();if(!t.list||t.list.length==0)return;let u=t.list.filter(n=>n.orgCode==t.orgCode);A.value=t.list,g.value=u&&u.length>0?t.orgCode:"",y.value=u&&u.length>0?u[0].departName:"",d.value=!0})}function X(){return E(this,null,function*(){const t=yield oe();if(!t.list||t.list.length==0)return;let u=f.getTenant,n=t.list.filter(F=>F.id==u);D.value=n&&n.length>0?n[0].name:"",N.value=t.list,_.value=u,s.value=!0})}function Y(){return E(this,null,function*(){if(e(s)&&!e(_))return S.value="error",!1;if(e(d)&&!e(g))return w.value="error",!1;Z().then(()=>{e(s)&&f.setTenant(e(_)),b.success("\u5207\u6362\u6210\u529F")}).catch(t=>{console.log("\u767B\u5F55\u9009\u62E9\u51FA\u73B0\u95EE\u9898",t)}).finally(()=>{e(s)&&f.setTenant(e(_)),L()})})}function Z(){return new Promise((t,u)=>E(this,null,function*(){if(!e(d))t();else{const n=yield se({username:f.getUserInfo.username,orgCode:e(g)});if(n.userInfo){const F=n.userInfo;f.setUserInfo(F),t()}else ee(n),f.logout(),u()}}))}function ee(t){x.error({message:"\u767B\u5F55\u5931\u8D25",description:((t.response||{}).data||{}).message||t.message||"\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:4})}function L(){te()}function te(){l.value="",s.value=!1,D.value="",_.value="",N.value=[],S.value="",d.value=!1,y.value="",g.value="",A.value=[],w.value="",I.value=!1}return ie(()=>c.username,t=>{t&&U()}),k({show:O}),(t,u)=>{const n=p("a-avatar"),F=p("a-tooltip"),M=p("Icon"),z=p("a-select-option"),V=p("a-select"),R=p("a-form-item"),ae=p("a-form"),q=p("a-button");return m(),h(e(ue),W(B,{title:l.value,visible:I.value,"onUpdate:visible":u[2]||(u[2]=o=>I.value=o),wrapClassName:"loginSelectModal"}),{footer:a(()=>[i(q,{onClick:L},{default:a(()=>[C("\u5173\u95ED")]),_:1}),i(q,{onClick:Y,type:"primary"},{default:a(()=>[C("\u786E\u8BA4")]),_:1})]),default:a(()=>[i(ae,W({ref:"formRef"},T,{colon:!1,class:"loginSelectForm"}),{default:a(()=>[s.value?(m(),h(R,{key:0,"validate-status":S.value},{label:a(()=>[i(F,{placement:"topLeft"},{title:a(()=>[ve]),default:a(()=>[i(n,{style:{"background-color":"#87d068"},size:30},{default:a(()=>[C(" \u79DF\u6237 ")]),_:1})]),_:1})]),default:a(()=>[i(V,{value:_.value,"onUpdate:value":u[0]||(u[0]=o=>_.value=o),placeholder:"\u8BF7\u9009\u62E9\u767B\u5F55\u90E8\u95E8",class:H({"valid-error":S.value=="error"})},{suffixIcon:a(()=>[i(M,{icon:"ant-design:gold-outline"})]),default:a(()=>[(m(!0),P(K,null,$(N.value,o=>(m(),h(z,{key:o.id,value:o.id},{default:a(()=>[C(j(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","class"])]),_:1},8,["validate-status"])):Q("",!0),d.value?(m(),h(R,{key:1,"validate-status":w.value},{label:a(()=>[i(F,{placement:"topLeft"},{title:a(()=>[_e]),default:a(()=>[i(n,{style:{"background-color":"rgb(104, 208, 203)"},size:30},{default:a(()=>[C(" \u90E8\u95E8 ")]),_:1})]),_:1})]),default:a(()=>[i(V,{value:g.value,"onUpdate:value":u[1]||(u[1]=o=>g.value=o),placeholder:"\u8BF7\u9009\u62E9\u767B\u5F55\u90E8\u95E8",class:H({"valid-error":w.value=="error"})},{suffixIcon:a(()=>[i(M,{icon:"ant-design:gold-outline"})]),default:a(()=>[(m(!0),P(K,null,$(A.value,o=>(m(),h(z,{key:o.orgCode,value:o.orgCode},{default:a(()=>[C(j(o.departName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","class"])]),_:1},8,["validate-status"])):Q("",!0)]),_:1},16)]),_:1},16,["title","visible"])}}});const he=pe(me,[["__scopeId","data-v-625df8e3"]]);export{he as default};