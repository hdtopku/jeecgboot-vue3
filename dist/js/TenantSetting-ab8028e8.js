var ve=Object.defineProperty,fe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(u,r,i)=>r in u?ve(u,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[r]=i,Q=(u,r)=>{for(var i in r||(r={}))ge.call(r,i)&&K(u,i,r[i]);if(H)for(var i of H(r))he.call(r,i)&&K(u,i,r[i]);return u},X=(u,r)=>fe(u,me(r));var M=(u,r,i)=>new Promise((S,_)=>{var E=l=>{try{b(i.next(l))}catch(I){_(I)}},N=l=>{try{b(i.throw(l))}catch(I){_(I)}},b=l=>l.done?S(l.value):Promise.resolve(l.value).then(E,N);b((i=i.apply(u,r)).next())});import{d as ne,l as p,o as xe,V as x,a7 as d,a8 as f,ad as e,E as y,ae as m,W as ye,F,ab as Y,A as V,f as o,ac as A,v as we,B as ke,ak as Ce,u as g,aa as a,a5 as Te,a6 as be}from"./vue-50733b77.js";import{d as Ie,e as Ue,f as Se,c as ze,h as Ne}from"./UserSetting.api-6e884b8c.js";import{u as Oe,q as Pe,A as Z,_ as Ve}from"./jeecg-online-vendor-d3e1865b.js";import{m as $e,aA as ee}from"./index-b34ff7bc.js";import{M as te}from"./antd-vue-vendor-c5335947.js";import{U as Be}from"./index-1ac4dcff.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-f7d688aa.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";const c=u=>(Te("data-v-6c57a81b"),u=u(),be(),u),De={class:"my-tenant"},Me=c(()=>e("span",{style:{flex:"1"}},"我的租户",-1)),Ae={key:0,class:"approved-count"},Ee={key:0,class:"tenant-list"},Le=["onClick"],Re={class:"tenant-title"},je={class:"item-left"},Fe={class:"item-name"},qe=["onClick"],Je={class:"item-right"},We={key:0},Ge=c(()=>e("span",{class:"pointer examine"},"待审核",-1)),He=["onClick"],Ke={key:1},Qe=["onClick"],Xe=["onClick"],Ye={key:2,style:{width:"75px"}},Ze={style:{"margin-left":"24px"}},et={class:"item-content"},tt={class:"content-box"},nt=c(()=>e("div",{class:"content-name"}," 组织名片 ",-1)),st={class:"content-desc"},ot={class:"flex-flow"},at=c(()=>e("div",{class:"content-des-text"},"姓名",-1)),it={style:{"font-size":"13px",color:"#000000"}},lt={class:"flex-flow"},ct=c(()=>e("div",{class:"content-des-text"},"部门",-1)),dt={style:{"font-size":"13px"}},ut={class:"flex-flow"},rt=c(()=>e("div",{class:"content-des-text"},"职业",-1)),_t={style:{"font-size":"13px"}},pt={class:"footer-box"},vt=["onClick"],ft=c(()=>e("span",null,"查看租户名片",-1)),mt={key:1,class:"font-color9e flex-flow margin-right40 font-size13"},gt=c(()=>e("span",null,"查看租户名片",-1)),ht=["onClick"],xt=c(()=>e("span",null,"退出租户",-1)),yt={key:3,class:"font-color9e flex-flow margin-right40 font-size13"},wt=c(()=>e("span",null,"退出租户",-1)),kt=c(()=>e("div",{style:{"font-size":"17px","font-weight":"700"}},"查看名片",-1)),Ct=c(()=>e("div",{style:{color:"#9e9e9e","margin-top":"10px","font-size":"13px"}}," 名片是您在该组织下的个人信息，只在本组织中展示。 ",-1)),Tt={style:{"margin-top":"24px","font-size":"13px",padding:"0 24px"}},bt=c(()=>e("div",{class:"font-color75"},"姓名",-1)),It={class:"margin-top6 margin-bottom-16"},Ut=c(()=>e("div",null,"部门",-1)),St={class:"margin-top6 margin-bottom-16"},zt=c(()=>e("div",null,"职位",-1)),Nt={class:"margin-top6 margin-bottom-16"},Ot=c(()=>e("div",null,"工作地点",-1)),Pt={class:"margin-top6 margin-bottom-16"},Vt=c(()=>e("div",null,"工号",-1)),$t={class:"margin-top6 margin-bottom-16"},Bt={class:"cancellation"},Dt={style:{padding:"20px"}},Mt=c(()=>e("div",{class:"change-owen"}," 只有变更拥有着之后,才能退出 ",-1)),At=["onClick"],Et=["onClick"],Lt=c(()=>e("div",{style:{height:"20px"}},null,-1)),Rt=ne({name:"tenant-setting"}),jt=ne(X(Q({},Rt),{setup(u){const{prefixCls:r}=$e("j-user-tenant-setting-container"),i=p([]),S=Oe(),{createMessage:_}=Pe(),E=p([]),N=p(!1),b=p([]),l=p({realname:S.getUserInfo.realname,workNo:S.getUserInfo.workNo,orgCodeTxt:S.getUserInfo.orgCodeTxt,postText:S.getUserInfo.postText});function I(){return M(this,null,function*(){Ie({userTenantStatus:"1,3,5"}).then(n=>{if(n.success)if(n.result&&n.result.length>0){let t=n.result,v=[],P=[];for(let h=0;h<t.length;h++)t[h].userTenantStatus==="5"&&P.push(t[h]),v.push(t[h]);i.value=v,R.value=P,B.value=P.length}else q();else q()})})}function q(){i.value=[],R.value=[],B.value=0}function se(n){const t=document.createElement("input");t.setAttribute("value",n),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),_.success("复制成功")}function oe(n){te.confirm({title:"取消申请",content:"是否取消申请",okText:"确认",cancelText:"取消",onOk:()=>{Ue({tenantId:n}).then(t=>{t.success?(_.success("取消申请成功"),I()):_.warning(t.message)}).catch(t=>{_.warning(t.message)})}})}function ae(n){n.show?n.show=!1:n.show=!0}function Ft(n){let t=E.value.filter(v=>{v.value==n});return t&&t.length>0?t[0].label:"未填写"}function J(n,t){b.value=t,n==="editTenant"?N.value=!0:n==="exitTenant"&&(w.value={loginPassword:"",tenantName:""},O.value=!0,U.value=!0,C.value=t)}const U=p(!1),w=p({}),C=p({}),O=p(!0),$=p(""),L=p(!1);function ie(){let n=g(C).name,t=g(w).tenantName;n===t?O.value=!1:O.value=!0}function le(){return M(this,null,function*(){if(!g(w).loginPassword){_.warning("请输入登录密码");return}yield Se({id:g(C).tenantUserId,loginPassword:g(w).loginPassword}).then(n=>{if(n.success)_.success(n.message),U.value=!1,ee(g(C).tenantUserId);else if(n.message==="assignedOwen")L.value=!0,U.value=!1;else if(n.message==="cancelTenant"){U.value=!1;let t=Z.currentRoute.value.fullPath;te.confirm({title:"您是该组织的拥有者",content:"该组织下没有其他成员，需要您前往注销",okText:"前往注销",okType:"danger",cancelText:"取消",onOk:()=>{t!=="/system/usersetting"&&Z.push("/myapps/settings/organization/organMessage/"+g(C).tenantUserId)}})}else _.warning(n.message)}).catch(n=>{_.warning(n.message)})})}function ce(){U.value=!1,O.value=!0}function de(){if(!g($)){_.warning("请选择变更拥有者");return}ze({userId:g($),tenantId:g(C).tenantUserId}).then(n=>{n.success?(_.success(n.message),ee(g(C).tenantUserId)):_.warning(n.message)})}const B=p(0),R=p([]),j=p(!1);function ue(){j.value=!0}function D(n,t){return M(this,null,function*(){yield Ne({tenantId:Number.parseInt(n),status:t}),I()})}return xe(()=>{I()}),(n,t)=>{const v=x("Icon"),P=x("a-empty"),h=x("a-modal"),k=x("a-col"),re=x("a-input"),z=x("a-row"),W=x("a-form-item"),_e=x("a-input-password"),pe=x("a-form"),G=x("a-button");return d(),f(F,null,[e("div",{class:Ce(["tenant-padding",[`${g(r)}`]])},[e("div",De,[Me,e("span",{class:"invited",onClick:ue},[y("我的受邀信息"),B.value>0?(d(),f("span",Ae,m(B.value),1)):ye("",!0)])]),i.value.length>0?(d(),f("div",Ee,[(d(!0),f(F,null,Y(i.value,s=>(d(),f("div",{class:"tenant-list-item",onClick:T=>ae(s)},[e("div",Re,[e("div",je,[e("div",Fe,m(s.name),1),e("div",{class:"item-house",onClick:V(T=>se(s.houseNumber),["stop"])},[e("span",null,[y(" 组织门牌号："+m(s.houseNumber)+" ",1),o(v,{icon:"ant-design:copy-outlined",style:{"font-size":"13px","margin-left":"2px"}})])],8,qe)]),e("div",Je,[s.userTenantStatus==="3"?(d(),f("span",We,[Ge,e("span",{class:"pointer cancel-apply",onClick:V(T=>oe(s.tenantUserId),["stop"])},"取消申请",8,He)])):s.userTenantStatus==="5"?(d(),f("span",Ke,[e("span",{class:"pointer examine",onClick:T=>D(s.tenantUserId,"1")},"加入",8,Qe),e("span",{class:"pointer cancel-apply",onClick:V(T=>D(s.tenantUserId,"4"),["stop"])},"拒绝",8,Xe)])):(d(),f("div",Ye)),e("span",Ze,[s.show?(d(),A(v,{key:0,icon:"ant-design:down-outlined",style:{"font-size":"13px",color:"#707070"}})):(d(),A(v,{key:1,icon:"ant-design:right-outlined",style:{"font-size":"13px",color:"#707070"}}))])])]),we(e("div",et,[e("div",tt,[nt,e("div",st,[e("div",ot,[at,e("div",it,m(l.value.realname),1)]),e("div",lt,[ct,e("div",dt,m(l.value.orgCodeTxt?l.value.orgCodeTxt:"未填写"),1)]),e("div",ut,[rt,e("div",_t,m(l.value.postText?l.value.postText:"未填写"),1)])])]),e("div",pt,[s.userTenantStatus!=="3"?(d(),f("span",{key:0,onClick:V(T=>J("editTenant",s),["stop"]),class:"font-color333 flex-flow margin-right40 font-size13 pointer"},[o(v,{icon:"ant-design:edit-outlined",class:"footer-icon"}),ft],8,vt)):(d(),f("span",mt,[o(v,{icon:"ant-design:edit-outlined",class:"footer-icon"}),gt])),s.userTenantStatus!=="3"?(d(),f("span",{key:2,onClick:V(T=>J("exitTenant",s),["stop"]),class:"font-color333 flex-flow margin-right40 font-size13 pointer"},[o(v,{icon:"ant-design:export-outlined",class:"footer-icon"}),xt],8,ht)):(d(),f("span",yt,[o(v,{icon:"ant-design:export-outlined",class:"footer-icon"}),wt]))])],512),[[ke,s.show]])],8,Le))),256))])):(d(),A(P,{key:1,description:"暂无数据",style:{position:"relative",top:"50px"}}))],2),o(h,{visible:N.value,"onUpdate:visible":t[0]||(t[0]=s=>N.value=s),width:"400px",wrapClassName:"edit-tenant-setting"},{title:a(()=>[kt,Ct]),default:a(()=>[e("div",Tt,[bt,e("div",It,m(l.value.realname),1),Ut,e("div",St,m(l.value.orgCodeTxt?l.value.orgCodeTxt:"未填写"),1),zt,e("div",Nt,m(l.value.postText?l.value.postText:"未填写"),1),Ot,e("div",Pt,m(b.value.workPlace?b.value.workPlace:"未填写"),1),Vt,e("div",$t,m(l.value.workNo?l.value.workNo:"未填写"),1)])]),_:1},8,["visible"]),o(h,{visible:U.value,"onUpdate:visible":t[3]||(t[3]=s=>U.value=s),width:"800","destroy-on-close":""},{title:a(()=>[e("div",Bt,[o(v,{icon:"ant-design:warning-outlined",style:{"font-size":"20px",color:"red"}}),y(" 退出租户 "+m(C.value.name),1)])]),footer:a(()=>[o(G,{type:"primary",onClick:le,disabled:O.value},{default:a(()=>[y("确定")]),_:1},8,["disabled"]),o(G,{onClick:ce},{default:a(()=>[y("取消")]),_:1})]),default:a(()=>[o(pe,{model:w.value,ref:"cancelTenantRef"},{default:a(()=>[o(W,{name:"tenantName"},{default:a(()=>[o(z,{span:24,style:{padding:"20px 20px 0","font-size":"13px"}},{default:a(()=>[o(k,{span:24},{default:a(()=>[y(" 请输入租户名称 ")]),_:1}),o(k,{span:24,style:{"margin-top":"10px"}},{default:a(()=>[o(re,{value:w.value.tenantName,"onUpdate:value":t[1]||(t[1]=s=>w.value.tenantName=s),onChange:ie},null,8,["value"])]),_:1})]),_:1})]),_:1}),o(W,{name:"loginPassword"},{default:a(()=>[o(z,{span:24,style:{padding:"0 20px","font-size":"13px"}},{default:a(()=>[o(k,{span:24},{default:a(()=>[y(" 请输入您的登录密码 ")]),_:1}),o(k,{span:24,style:{"margin-top":"10px"}},{default:a(()=>[o(_e,{value:w.value.loginPassword,"onUpdate:value":t[2]||(t[2]=s=>w.value.loginPassword=s)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),o(h,{title:"变更拥有者",visible:L.value,"onUpdate:visible":t[5]||(t[5]=s=>L.value=s),width:"800","destroy-on-close":"",cancelButtonProps:{display:"none"},onOk:de},{default:a(()=>[e("div",Dt,[o(z,{span:24},{default:a(()=>[Mt]),_:1}),o(z,{span:24,style:{"margin-top":"10px"}},{default:a(()=>[o(Be,{value:$.value,"onUpdate:value":t[4]||(t[4]=s=>$.value=s),izExcludeMy:""},null,8,["value"])]),_:1})])]),_:1},8,["visible"]),o(h,{title:"我的受邀信息",visible:j.value,"onUpdate:visible":t[6]||(t[6]=s=>j.value=s),footer:null},{default:a(()=>[o(z,{span:24,class:"invited-row"},{default:a(()=>[o(k,{span:16},{default:a(()=>[y(" 组织 ")]),_:1}),o(k,{span:8},{default:a(()=>[y(" 操作 ")]),_:1})]),_:1}),(d(!0),f(F,null,Y(R.value,s=>(d(),A(z,{span:24,class:"invited-row-list"},{default:a(()=>[o(k,{span:16},{default:a(()=>[y(m(s.name),1)]),_:2},1024),o(k,{span:8},{default:a(()=>[e("span",{class:"common",onClick:T=>D(s.tenantUserId,"1")},"加入",8,At),e("span",{class:"common refuse",onClick:T=>D(s.tenantUserId,"4")},"拒绝",8,Et)]),_:2},1024)]),_:2},1024))),256)),Lt]),_:1},8,["visible"])],64)}}}));const an=Ve(jt,[["__scopeId","data-v-6c57a81b"]]);export{an as default};