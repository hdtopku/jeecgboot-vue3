import{B as k}from"./BasicTable.5ee1302a.js";import"./helper.1b3fdfba.js";import"./TableImg.7ccb5f8d.js";import{u as g}from"./useTable.99eebf43.js";import{a as w,b as v,c as S}from"./auth.api.144b96ae.js";import{a as x}from"./auth.data.04c841fb.js";import{l as F,F as y,H as E,eY as I,t as f,v as T,x as B,y as m,z as r,C as b}from"./index.b3d2a891.js";import"./BasicForm.2d2aa4ab.js";import"./uniqBy.4cec2220.js";import"./index.2d23bddf.js";import"./BasicModal.7efd78fc.js";import"./useWindowSizeFn.ab02708a.js";import"./useForm.96d1836c.js";import"./JAddInput.43004d14.js";import"./useFormItem.c06072f5.js";import"./api.1d3c1927.js";import"./props.eccfb3be.js";import"./index.7afb8201.js";import"./bem.8fd44f61.js";import"./props.9df65a00.js";import"./useContextMenu.2f0b587d.js";import"./index.bc22d773.js";import"./onMountedOrActivated.12413c39.js";import"./index.bcdb3c55.js";import"./htmlmixed.6d768be1.js";import"./vue.1e0c6574.js";/* empty css             */import"./depart.api.7ce3d710.js";import"./index.2ff6eac0.js";import"./useContentHeight.0b543e32.js";import"./useContentViewHeight.b97dff8b.js";import"./usePageContext.2dbf8e50.js";import"./RedoOutlined.b10d0ad6.js";import"./functional.4d8eb9e7.js";import"./download.2189cbe2.js";import"./base64Conver.030fa32c.js";import"./index.ea39cbd7.js";import"./index.792f7f1c.js";import"./useCountdown.a4eb9495.js";import"./JUpload.7bcd35c5.js";import"./index.96560ef2.js";var C=(s,p,i)=>new Promise((h,u)=>{var c=o=>{try{n(i.next(o))}catch(t){u(t)}},d=o=>{try{n(i.throw(o))}catch(t){u(t)}},n=o=>o.done?h(o.value):Promise.resolve(o.value).then(c,d);n((i=i.apply(s,p)).next())});const U=F({name:"AuthFieldConfig",components:{BasicTable:k},props:{headId:{type:String,default:"",required:!0}},emits:["update:authFields"],setup(s,{emit:p}){const i=y(""),[h,{reload:u}]=g({api:c,rowKey:"code",bordered:!0,columns:x,showIndexColumn:!1});E(()=>s.headId,o=>{i.value=o.split("?")[0],u().catch(()=>null)},{immediate:!0});function c(o){return C(this,null,function*(){const t=["id"];let e=yield w(i.value,o),a=[],_=[];return e.forEach(l=>{t.indexOf(l.code)<0&&((l.isShowForm==1||l.isShowList==1)&&_.push(l),l.dbIsPersist==1&&a.push({text:l.title,value:l.code}))}),p("update:authFields",a),_})}function d(o,t){return C(this,null,function*(){yield v({cgformId:i.value,code:t.code,status:o?1:0}),t.formEditable||t.formShow||t.listShow||(t.formEditable=!0,t.formShow=!0,t.listShow=!0),t.status=Math.abs(t.status-1)})}function n(o,t,e){return C(this,null,function*(){let a=o.target.checked;yield S({cgformId:i.value,code:t.code,switchFlag:e,listShow:a,formShow:a,formEditable:a}),e==1?t.listShow=a:e==2?t.formShow=a:e==3&&(t.formEditable=a)})}return{registerTable:h,onUpdateStatus:d,onCheckboxChange:n}}}),$={class:"auth-field-config"};function D(s,p,i,h,u,c){const d=f("a-switch"),n=f("a-checkbox"),o=f("BasicTable");return T(),B("div",$,[m(o,{onRegister:s.registerTable},{switch:r(({text:t,record:e})=>[m(d,{size:"small",checked:e.status===1,onChange:a=>s.onUpdateStatus(a,e)},null,8,["checked","onChange"])]),list:r(({text:t,record:e})=>[m(n,{checked:e.listShow,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,1)},{default:r(()=>[b(" \u53EF\u89C1 ")]),_:2},1032,["checked","disabled","onChange"])]),form:r(({text:t,record:e})=>[m(n,{checked:e.formShow,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,2)},{default:r(()=>[b(" \u53EF\u89C1 ")]),_:2},1032,["checked","disabled","onChange"]),m(n,{checked:e.formEditable,disabled:e.status===0,onChange:a=>s.onCheckboxChange(a,e,3)},{default:r(()=>[b(" \u53EF\u7F16\u8F91 ")]),_:2},1032,["checked","disabled","onChange"])]),_:1},8,["onRegister"])])}var wt=I(U,[["render",D],["__scopeId","data-v-b6df4cb4"]]);export{wt as default};
