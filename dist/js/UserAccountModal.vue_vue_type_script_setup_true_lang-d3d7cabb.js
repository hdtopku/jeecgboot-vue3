var v=Object.defineProperty;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(s,t,e)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,P=(s,t)=>{for(var e in t||(t={}))w.call(t,e)&&y(s,e,t[e]);if(h)for(var e of h(t))M.call(t,e)&&y(s,e,t[e]);return s};var f=(s,t,e)=>new Promise((c,l)=>{var p=n=>{try{a(e.next(n))}catch(r){l(r)}},d=n=>{try{a(e.throw(n))}catch(r){l(r)}},a=n=>n.done?c(n.value):Promise.resolve(n.value).then(p,d);a((e=e.apply(s,t)).next())});import{B}from"./index-9d0047d3.js";import{B as I}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as T}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as C}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import"./antd-vue-vendor-a78909e6.js";import{t as D,u as F}from"./jeecg-online-vendor-885afdd4.js";import{a as R}from"./UserSetting.api-50be9b89.js";import{d as x,k as g,a5 as A,a9 as L,a7 as Y,f as O,u as i,ag as U}from"./vue-bcbaddf9.js";const oe=[{key:"1",name:"个人信息",component:"BaseSetting",icon:"ant-design:user-outlined"},{key:"2",name:"我的租户",component:"TenantSetting",icon:"ant-design:team-outlined"},{key:"3",name:"账号安全",component:"AccountSetting",icon:"ant-design:lock-outlined"},{key:"4",name:"第三方APP",component:"WeChatDingSetting",icon:"ant-design:contacts-outlined"}],G=[{field:"realname",component:"Input",label:"姓名",colProps:{span:24},required:!0},{field:"birthday",component:"DatePicker",label:"生日",colProps:{span:24},componentProps:{showTime:!1,valueFormat:"YYYY-MM-DD",getPopupContainer:()=>document.body}},{field:"sex",component:"RadioGroup",label:"性别",colProps:{span:24},componentProps:{options:[{label:"男",value:1},{label:"女",value:2}]}},{field:"relTenantIds",component:"JDictSelectTag",label:"租户",colProps:{span:24},componentProps:{mode:"multiple",dictCode:"sys_tenant,name,id",disabled:!0}},{field:"post",component:"JDictSelectTag",label:"职位",colProps:{span:24},componentProps:{mode:"multiple",dictCode:"sys_position,name,code",disabled:!0}},{label:"",field:"id",component:"Input",show:!1}],te=x({__name:"UserAccountModal",emits:["register","success"],setup(s,{emit:t}){const e=D(),{createMessage:c}=F(),[l,{resetFields:p,setFieldsValue:d,validate:a,updateSchema:n}]=T({schemas:G,showActionButtonGroup:!1}),r=g({});g(!1);const b=g(""),[S,{setModalProps:u,closeModal:_}]=C(o=>f(this,null,function*(){yield p(),u({confirmLoading:!1}),b.value="编辑个人资料",o.record.post&&(o.record.post=o.record.post.split(",")),o.record.relTenantIds&&(o.record.relTenantIds=o.record.relTenantIds.split(",")),r.value=o.record,o.record.birthday==="未填写"&&(o.record.birthday=void 0),yield d(P({},o.record))}));function k(){return f(this,null,function*(){try{let o=yield a();u({confirmLoading:!0}),yield R(o).then(m=>{m.success?c.success(m.message):c.warn(m.message)}),Object.assign(r.value,o),e.setUserInfo(i(r)),t("success"),_()}finally{u({confirmLoading:!1})}})}return(o,m)=>(A(),L(i(B),U(o.$attrs,{onRegister:i(S),width:"500px",title:b.value,onOk:k,destroyOnClose:""}),{default:Y(()=>[O(i(I),{onRegister:i(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{te as _,oe as s};