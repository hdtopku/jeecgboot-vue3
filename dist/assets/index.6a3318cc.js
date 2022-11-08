var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(o,t,n)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,a=(e,o,t)=>new Promise(((n,r)=>{var i=e=>{try{a(t.next(e))}catch(o){r(o)}},s=e=>{try{a(t.throw(e))}catch(o){r(o)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,s);a((t=t.apply(e,o)).next())}));import{B as l}from"./BasicTable.0748ea8a.js";import{T as c}from"./helper.1c9dc9a5.js";import"./TableImg.e204e8e3.js";import{useListPage as d}from"./useListPage.26849a0d.js";import{g as p,c as u,s as m,e as f,i as j,_ as b,b as y,d as g,h as C}from"./FillRuleModal.3a250bb0.js";import"./index.e1e06dd6.js";import{l as x,bI as w,t as v,v as h,x as I,y as O,z as k,L as P,V as S,W as _,E as M,C as R,aW as B}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./uniqBy.91f18935.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";import"./useTable.6359f662.js";import"./user.api.f3bf5333.js";const F=R("新增"),T=R(" 导出"),A=R("导入"),D=B("span",null,"删除",-1),E=B("span",null,"批量操作",-1),U=x({name:"system-fillrule"}),W=x((z=((e,o)=>{for(var t in o||(o={}))r.call(o,t)&&s(e,t,o[t]);if(n)for(var t of n(o))i.call(o,t)&&s(e,t,o[t]);return e})({},U),o(z,t({setup(e){const[o,{openModal:t}]=w(),{prefixCls:n,tableContext:r,createMessage:i,createSuccessModal:s,onExportXls:x,onImportXls:R}=d({designScope:"fill-rule",tableProps:{title:"填值规则管理页面",api:p,columns:u,showIndexColumn:!0,formConfig:{schemas:m}},exportConfig:{url:f,name:"填值规则列表"},importConfig:{url:j,success:()=>U()}}),[B,{reload:U},{rowSelection:W,selectedRowKeys:z}]=r;function H(){t(!0,{isUpdate:!1})}function J(e){t(!0,{record:e,isUpdate:!0})}function L(e){return a(this,null,(function*(){yield g({id:e.id},U)}))}function V(){return a(this,null,(function*(){yield y({ids:z.value},(()=>{z.value=[],U()}))}))}function X(e){let o={ruleCode:e.ruleCode};C(o).then((e=>{e.success?s({title:"填值规则功能测试",content:"生成结果："+e.result}):i.warn(e.message)}))}function q(e){return[{label:"编辑",onClick:J.bind(null,e)}]}function K(e){return[{label:"功能测试",onClick:X.bind(null,e)},{label:"删除",color:"error",popConfirm:{title:"确认要删除吗？",confirm:L.bind(null,e)}}]}return(e,t)=>{const r=v("a-button"),i=v("j-upload-button"),s=v("Icon"),a=v("a-menu-item"),d=v("a-menu"),p=v("a-dropdown");return h(),I("div",{class:M(P(n))},[O(P(l),{onRegister:P(B),rowSelection:P(W)},{tableTitle:k((()=>[O(r,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:H},{default:k((()=>[F])),_:1}),O(r,{type:"primary",preIcon:"ant-design:export-outlined",onClick:P(x)},{default:k((()=>[T])),_:1},8,["onClick"]),O(i,{type:"primary",preIcon:"ant-design:import-outlined",onClick:P(R)},{default:k((()=>[A])),_:1},8,["onClick"]),P(z).length>0?(h(),S(p,{key:0},{overlay:k((()=>[O(d,null,{default:k((()=>[O(a,{key:"1",onClick:V},{default:k((()=>[O(s,{icon:"ant-design:delete-outlined"}),D])),_:1})])),_:1})])),default:k((()=>[O(r,null,{default:k((()=>[E,O(s,{icon:"mdi:chevron-down"})])),_:1})])),_:1})):_("",!0)])),action:k((({record:e})=>[O(P(c),{actions:q(e),dropDownActions:K(e)},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister","rowSelection"]),O(b,{onRegister:P(o),onSuccess:P(U)},null,8,["onRegister","onSuccess"])],2)}}}))));var z;export{W as default};