import{l as e,A as a,d7 as t,F as l,a8 as s,bH as n,o as r,L as o,q as i,a1 as d,t as u,v as c,V as v,z as f,y as m,bk as g,E as p,x as h,bc as y,C as b,D as C,ax as _,W as I,B as k,u as S,dp as x,dq as M,aW as L}from"./index.435ab247.js";import{B as w}from"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";const T=e({name:"loginSelect",components:{Avatar:a,BasicModal:w},emits:["success","register"],setup(e,{emit:a}){const i=t(),{notification:u}=S(),c=l(!1),v=l([]),f=l(""),m=l(!1),g=l([]),p=l(""),h=l(!1),y=l(""),b=l(),C=s({orgCode:void 0,tenantId:null}),[_,{closeModal:I}]=n(),k=r((()=>o(m)&&o(c)?"请选择租户和部门":o(m)&&!o(c)?"请选择部门":!o(m)&&o(c)?"请选择租户":void 0)),x=l({tenantId:[{required:o(c),type:"number",message:"请选择租户",trigger:"change"}],orgCode:[{required:o(m),message:"请选择部门",trigger:"change"}]});function M(){v.value=[],f.value="",g.value=[],p.value=""}return{registerModal:_,visible:h,tenantList:v,isMultiTenant:c,validate_status:f,isMultiDepart:m,departList:g,validate_status1:p,formState:C,rules:x,layout:{labelCol:{span:4},wrapperCol:{span:18}},formRef:b,currTitle:k,config:{maskClosable:!1,closable:!1,canFullscreen:!1,width:"500px",minHeight:20,maxHeight:20},handleTenantChange:function(e){f.value=""},handleDepartChange:function(e){p.value=""},show:function(e){return t=this,l=null,s=function*(){e&&(y.value=i.username,yield M(),yield function(e){let a=e.multi_depart;0==a?(u.warn({message:"提示",description:"您尚未归属部门,请确认账号信息",duration:3}),m.value=!1):2==a?(m.value=!0,g.value=e.departs):m.value=!1}(e),yield function(e){let a=e.tenantList;Array.isArray(a)&&(0===a.length?(c.value=!1,i.setTenant(C.tenantId)):1===a.length?(C.tenantId=a[0].id,c.value=!1,i.setTenant(C.tenantId)):(c.value=!0,v.value=a))}(e),o(m)||o(c)?h.value=!0:a("success",i.getUserInfo)),e.isLogin=!1,i.setLoginInfo(e)},new Promise(((e,a)=>{var n=e=>{try{o(s.next(e))}catch(t){a(t)}},r=e=>{try{o(s.throw(e))}catch(t){a(t)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(n,r);o((s=s.apply(t,l)).next())}));var t,l,s},handleSubmit:function(){return o(c)&&!C.tenantId?(f.value="error",!1):o(m)&&!C.orgCode?(p.value="error",!1):void b.value.validate().then((()=>{new Promise(((e,a)=>{if(o(m)){let t={orgCode:C.orgCode,username:o(y)};d.put({url:"/sys/selectDepart",params:t}).then((t=>{var l;t.userInfo?(i.setUserInfo(t.userInfo),e()):(l=t,u.error({message:"登录失败",description:((l.response||{}).data||{}).message||l.message||"请求出现错误，请稍后再试",duration:4}),i.logout(),a())}))}else e()})).then((()=>{i.setTenant(C.tenantId),a("success")})).catch((e=>{})).finally((()=>{I(),M()}))})).catch((e=>{}))}}}}),D=e=>(x("data-v-bfacad1e"),e=e(),M(),e),B=D((()=>L("span",null,"您隶属于多租户，请选择登录租户",-1))),U=b(" 租户 "),j=D((()=>L("span",{style:{color:"#ed6f6f"}},"请选择登录租户",-1))),q=D((()=>L("span",null,"您隶属于多部门，请选择登录部门",-1))),z=b(" 部门 "),A=D((()=>L("span",{style:{color:"#ed6f6f"}},"请选择登录部门",-1))),F=b("确认");var R=i(T,[["render",function(e,a,t,l,s,n){const r=u("a-avatar"),o=u("a-tooltip"),i=u("a-select-option"),d=u("a-select"),S=u("a-form-item"),x=u("a-form"),M=u("a-button"),L=u("BasicModal");return c(),v(L,k(e.config,{onRegister:e.registerModal,title:e.currTitle,wrapClassName:"loginSelectModal",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=a=>e.visible=a)}),{footer:f((()=>[m(M,{onClick:e.handleSubmit,type:"primary"},{default:f((()=>[F])),_:1},8,["onClick"])])),default:f((()=>[m(x,k({ref:"formRef",model:e.formState,rules:e.rules},e.layout,{colon:!1,class:"loginSelectForm"}),{default:f((()=>[e.isMultiTenant?(c(),v(S,{key:0,name:"tenantId","validate-status":e.validate_status},g({label:f((()=>[m(o,{placement:"topLeft"},{title:f((()=>[B])),default:f((()=>[m(r,{style:{"background-color":"#87d068"},size:30},{default:f((()=>[U])),_:1})])),_:1})])),default:f((()=>[m(d,{value:e.formState.tenantId,"onUpdate:value":a[0]||(a[0]=a=>e.formState.tenantId=a),onChange:e.handleTenantChange,placeholder:"请选择登录租户",class:p({"valid-error":"error"==e.validate_status})},{default:f((()=>[(c(!0),h(_,null,y(e.tenantList,(e=>(c(),v(i,{key:e.id,value:e.id},{default:f((()=>[b(C(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","onChange","class"])])),_:2},["error"==e.validate_status?{name:"extra",fn:f((()=>[j])),key:"0"}:void 0]),1032,["validate-status"])):I("",!0),e.isMultiDepart?(c(),v(S,{key:1,"validate-status":e.validate_status1,colon:!1},g({label:f((()=>[m(o,{placement:"topLeft"},{title:f((()=>[q])),default:f((()=>[m(r,{style:{"background-color":"rgb(104, 208, 203)"},size:30},{default:f((()=>[z])),_:1})])),_:1})])),default:f((()=>[m(d,{value:e.formState.orgCode,"onUpdate:value":a[1]||(a[1]=a=>e.formState.orgCode=a),onChange:e.handleDepartChange,placeholder:"请选择登录部门",class:p({"valid-error":"error"==e.validate_status1})},{default:f((()=>[(c(!0),h(_,null,y(e.departList,(e=>(c(),v(i,{key:e.orgCode,value:e.orgCode},{default:f((()=>[b(C(e.departName),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","onChange","class"])])),_:2},["error"==e.validate_status1?{name:"extra",fn:f((()=>[A])),key:"0"}:void 0]),1032,["validate-status"])):I("",!0)])),_:1},16,["model","rules"])])),_:1},16,["onRegister","title","visible"])}],["__scopeId","data-v-bfacad1e"]]);export{R as default};