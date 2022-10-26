var H=Object.defineProperty;var T=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var J=(r,a,u)=>a in r?H(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,M=(r,a)=>{for(var u in a||(a={}))I.call(a,u)&&J(r,u,a[u]);if(T)for(var u of T(a))W.call(a,u)&&J(r,u,a[u]);return r};var b=(r,a,u)=>new Promise((F,C)=>{var B=m=>{try{y(u.next(m))}catch(p){C(p)}},w=m=>{try{y(u.throw(m))}catch(p){C(p)}},y=m=>m.done?F(m.value):Promise.resolve(m.value).then(B,w);y((u=u.apply(r,a)).next())});import{B as j}from"./index.c1c509d9.js";import{B as z}from"./BasicForm.e500713f.js";import"./helper.15e1830a.js";import{u as Q}from"./useForm.f4b29e26.js";import"./JAddInput.5c78e955.js";import{l as X,o as Y,L as n,F as c,bF as Z,dC as g,t as _,v as ee,V as ue,z as v,y as d,B as te,aP as ae}from"./index.6c1aeca2.js";import{f as oe,u as re,s as se}from"./check.rule.data.fb90cf69.js";import"./BasicModal.2246c02b.js";import"./useWindowSizeFn.a6a246d2.js";import"./uniqBy.b316cd09.js";import"./useFormItem.63b4eda3.js";import"./functional.32464814.js";import"./download.54491438.js";import"./base64Conver.030fa32c.js";import"./index.1785e33e.js";import"./index.9d763a26.js";import"./useCountdown.c7fbe84b.js";import"./JUpload.7c7f9634.js";import"./api.52ea4d1e.js";import"./index.af09c9a6.js";import"./props.0c0dfcc6.js";import"./index.5b79f8bf.js";import"./bem.8f063110.js";import"./props.ee552767.js";import"./useContextMenu.2ad8381d.js";import"./index.3803400c.js";import"./onMountedOrActivated.0e85db74.js";import"./index.2847d809.js";import"./htmlmixed.6fb02709.js";import"./vue.ab8c7c18.js";/* empty css             */import"./usePopBiz.651349c4.js";import"./useMethods.eccfa16d.js";import"./depart.api.c664bb73.js";import"./renderUtils.b120a814.js";import"./user.api.295372fd.js";const Ie=X({__name:"CheckRuleModal",emits:["register","success"],setup(r,{emit:a}){const u=Y(()=>n(F)?"\u7F16\u8F91":"\u65B0\u589E"),F=c(!0),[C,{resetFields:B,setFieldsValue:w,validate:y,getFieldsValue:m}]=Q({schemas:oe,showActionButtonGroup:!1}),p=c("1");let D=c([]),k=c([]);const[O,{setModalProps:A,closeModal:L}]=Z(e=>b(this,null,function*(){if(yield B(),A({confirmLoading:!1}),F.value=!!(e!=null&&e.isUpdate),p.value="1",D.value=[],k.value=[],n(F)){yield w(M({},e.record));let o=e.record.ruleJson;if(o){let s=JSON.parse(o),t=[],i=[],l="1";s.forEach(f=>{f.digits==="*"?t.push(Object.assign(f,{priority:l})):(l="0",i.push(f))}),D.value=i,k.value=t}}})),R=c(),S=c();function V(e,o){return new Promise((s,t)=>{e.value.validateTable().then(i=>{if(i)p.value=o,t();else{const l=e.value.getTableData();s(l)}})})}function N(){return b(this,null,function*(){let e,o=[],s=[];y().then(t=>(e=t,V(R,"1"))).then(t=>(t&&t.length>0&&(s=t),V(S,"2"))).then(t=>{t&&t.length>0&&(o=t);let i=[],l=[];for(let h=0;h<o.length;h++){let E=o[h];E.digits="*",E.priority==="1"?i.push(E):l.push(E)}let K=i.concat(s).concat(l).map(h=>ae(h,"digits","pattern","message")),U=JSON.stringify(K),G=Object.assign({},e,{ruleJson:U});q(G)}).catch(()=>{A({confirmLoading:!1}),console.error("\u9A8C\u8BC1\u672A\u901A\u8FC7!")})})}function q(e){return b(this,null,function*(){try{console.log("\u8868\u5355\u63D0\u4EA4\u6570\u636E",e),A({confirmLoading:!0}),F.value?yield re(e):yield se(e),L(),a("success")}finally{A({confirmLoading:!1})}})}const x=({cellValue:e},o)=>{try{new RegExp(e),o(!0)}catch(s){o(!1,"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6B63\u5219\u8868\u8FBE\u5F0F")}},P=c([{title:"\u4F4D\u6570",key:"digits",type:g.inputNumber,minWidth:180,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"},{pattern:/^[1-9]\d*$/,message:"\u8BF7\u8F93\u5165\u96F6\u4EE5\u4E0A\u7684\u6B63\u6574\u6570"}]},{title:"\u89C4\u5219\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09",key:"pattern",minWidth:320,type:g.input,validateRules:[{required:!0,message:"\u89C4\u5219\u4E0D\u80FD\u4E3A\u7A7A"},{handler:x}]},{title:"\u63D0\u793A\u6587\u672C",key:"message",minWidth:180,type:g.input,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]}]),$=c([{title:"\u4F18\u5148\u7EA7",key:"priority",type:g.select,defaultValue:"1",options:[{title:"\u4F18\u5148\u8FD0\u884C",value:"1"},{title:"\u6700\u540E\u8FD0\u884C",value:"0"}],validateRules:[]},{title:"\u89C4\u5219\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09",key:"pattern",width:"40%",type:g.input,validateRules:[{required:!0,message:"\u89C4\u5219\u4E0D\u80FD\u4E3A\u7A7A"},{handler:x}]},{title:"\u63D0\u793A\u6587\u672C",key:"message",width:"20%",type:g.input,validateRules:[{required:!0,message:"${title}\u4E0D\u80FD\u4E3A\u7A7A"}]}]);return(e,o)=>{const s=_("a-alert"),t=_("JVxeTable"),i=_("a-tab-pane"),l=_("a-tabs");return ee(),ue(n(j),te(e.$attrs,{onRegister:n(O),onOk:N,title:n(u),width:1200,destroyOnClose:""}),{default:v(()=>[d(n(z),{onRegister:n(C)},null,8,["onRegister"]),d(l,{activeKey:p.value,"onUpdate:activeKey":o[0]||(o[0]=f=>p.value=f),animated:""},{default:v(()=>[d(i,{tab:"\u5C40\u90E8\u89C4\u5219",key:"1",forceRender:!0},{default:v(()=>[d(t,{ref_key:"vTable1",ref:R,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",maxHeight:580,dataSource:n(D),columns:P.value},{toolbarAfter:v(()=>[d(s,{type:"info",showIcon:"",message:"\u5C40\u90E8\u89C4\u5219\u6309\u7167\u4F60\u8F93\u5165\u7684\u4F4D\u6570\u6709\u5E8F\u7684\u6821\u9A8C",style:{"margin-bottom":"8px"}})]),_:1},8,["dataSource","columns"])]),_:1}),d(i,{tab:"\u5168\u5C40\u89C4\u5219",key:"2",forceRender:!0},{default:v(()=>[d(t,{ref_key:"vTable2",ref:S,toolbar:"",rowNumber:"",dragSort:"",rowSelection:"",maxHeight:580,dataSource:n(k),addSetActive:!1,columns:$.value},{toolbarAfter:v(()=>[d(s,{type:"info",showIcon:"",message:"\u5168\u5C40\u89C4\u5219\u53EF\u6821\u9A8C\u7528\u6237\u8F93\u5165\u7684\u6240\u6709\u5B57\u7B26\uFF1B\u5168\u5C40\u89C4\u5219\u7684\u4F18\u5148\u7EA7\u6BD4\u5C40\u90E8\u89C4\u5219\u7684\u8981\u9AD8\u3002",style:{"margin-bottom":"8px"}})]),_:1},8,["dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])]),_:1},16,["onRegister","title"])}}});export{Ie as default};