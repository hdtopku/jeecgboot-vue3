import{k as R,w as ae,V as d,a5 as S,a6 as ie,aa as g,a9 as I,a7 as o,f as a,E as f,W as ye,am as ne,t as re,A as se,F as ue,a8 as ge,ab as ke,j as Ce,r as de,a3 as be,J as ce,ap as Se,aq as we}from"./vue-bcbaddf9.js";import{B as _e}from"./index-9d0047d3.js";import{z as Oe,B as Fe,Q as le}from"./index-4b015b65.js";import{Q as Me,R as Te,u as fe}from"./jeecg-online-vendor-885afdd4.js";import{u as xe,F as Ie}from"./useExtendComponent-48d37d9b-a1e8211d.js";import{G as Re}from"./SuperQueryValComponent.vue_vue_type_script_lang-e3ad7ee8-6c1fb4af.js";import"./componentMap-b7e1d2b2.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import{a2 as De,ak as je,al as Pe,am as Ve,an as Qe,ac as qe,ao as Ee,M as Ne}from"./antd-vue-vendor-a78909e6.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import"./cron-parser-vendor-658b8fec.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang-5217d4dd.js";import"./BasicTable.vue_vue_type_style_index_0_lang-d58c7acd.js";import"./useTable-7249c6ae.js";import"./LinkTableListPiece-34266919-dfff3108.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm-cb329d14.js";import"./useForm-fd714c19.js";import"./user.api-023a32e5.js";import"./customExpression-62f5afd1.js";import"./BasicTable-96d859ce.js";import"./useFormItem-4c9e708e.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";import"./index-ae3db9b9.js";import"./injectionKey-69710956.js";import"./useListPage-761bc624.js";import"./OnlineSelectCascade-c7baf52b-18ff6e90.js";import"./JModalTip-abe1515a-b57dc82d.js";var Ae=Object.defineProperty,Be=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,me=(p,r,v)=>r in p?Ae(p,r,{enumerable:!0,configurable:!0,writable:!0,value:v}):p[r]=v,ve=(p,r)=>{for(var v in r||(r={}))Ue.call(r,v)&&me(p,v,r[v]);if(pe)for(var v of pe(r))Je.call(r,v)&&me(p,v,r[v]);return p},he=(p,r)=>Be(p,Le(r));const Ge={password:"text",file:"text",image:"text",textarea:"text",umeditor:"text",markdown:"text",checkbox:"list_multi",radio:"list"},He="JSuperQuerySaved_";function We(){const{linkTableCard2Select:p}=xe(),{createMessage:r}=fe(),v=R(),e=de({values:[]}),D=R("and"),[te,{setModalProps:A}]=Fe(()=>{A({confirmLoading:!1})}),B=Object.assign({},{link_down:"text"},Ge);function k(){}function $(){}function z(t,l,n){n.val=l}const j=R({}),P=R([]);function m(t){let{allFields:l,treeData:n}=w(t);j.value=l,P.value=n}function L(t){let l={field:void 0,rule:"eq",val:"",key:le(16)};t===!1?(e.values=[],e.values.push(l)):t===!0?e.values.length==0&&e.values.push(l):e.values.splice(++t,0,l)}function O(t){let l=ce(e.values),n=-1;for(let i=0;i<l.length;i++)if(t.key==l[i].key){n=i;break}n!=-1&&e.values.splice(n,1)}const U={field:"val",label:"测试",component:"Input"};function J(t,l){let n=j.value[t.field];if(!n)return U;B[n.view]&&(n.view=B[n.view]);let i=Ie.createFormSchema(t.field,n);i.noChange(),i.asSearchForm(),i.updateField(t.field+l);const h=b=>{t.val=b[t.field]};i.setFunctionForFieldValue(h);let c=i.getFormItemSchema();return["empty","not_empty"].includes(t.rule)&&(c.componentProps=he(ve({},c.componentProps),{disabled:!0})),p(c),c}const G=R(""),V=Te(),C=de({visible:!1,title:"",content:"",saveCode:""}),K=R(!1),Q=be();ae(()=>Q.fullPath,t=>{H()});const y=R([]);ae(()=>y.value,t=>{let l=[];t&&t.length>0&&t.map(n=>{let i=le(16);l.push({title:n.title,slots:{icon:"custom"},value:i})}),G.value=l},{immediate:!0,deep:!0});function H(){let t=He+Q.fullPath;C.saveCode=t;let l=V.get(t);l&&l instanceof Array&&(y.value=l)}H();function X(){let t=F();if(!t){r.warning("空条件不能保存");return}let l=JSON.stringify(t);Y(l)}function Y(t){C.visible=!0,C.title="",C.content=t}function N(){let{title:t,content:l,saveCode:n}=C,i=W(t);i>=0?Ne.confirm({title:"提示",content:`${t} 已存在，是否覆盖？`,okText:"确认",cancelText:"取消",onOk:()=>{y.value.splice(i,1,{content:l,title:t,type:D.value}),V.set(n,y.value),C.visible=!1,r.success("保存成功")}}):(y.value.push({content:l,title:t,type:D.value}),V.set(n,y.value),C.visible=!1,r.success("保存成功"))}function W(t){let l=y.value,n=-1;for(let i=0;i<l.length;i++)if(l[i].title==t){n=i;break}return n}function F(t=!1){var l;let n=e.values;if(!n||n.length==0)return!1;let i=[],h=j.value;for(let c of n){let b=["empty","not_empty"].includes(c.rule);if(c.field&&(b||c.val||c.val===0)&&c.rule){let q=h[c.field],E=(l=q==null?void 0:q.formatValue)!=null?l:_=>_,T=ce(c.val);T instanceof Array?T=T.map(_=>E(_)).join(","):T=E(T);let x={field:Z(c),rule:c.rule,val:T};if(t===!0){let _=h[c.field];_&&(x.type=_.view,x.dbType=_.type)}i.push(x)}}return i.length==0?!1:i}function Z(t){let l=t.field;return l.indexOf("@")>0&&(l=l.replace("@",",")),l}function ee(t,{node:l}){let n=l.dataRef.title,i=y.value.filter(h=>h.title==n);if(i&&i.length>0){let{content:h,type:c}=i[0],b=JSON.parse(h),q=[];for(let E of b)q.push(Object.assign({},{key:le(16)},E));e.values=q,D.value=c}}function s(t){let l=W(t);l>=0&&(y.value.splice(l,1),V.set(C.saveCode,y.value))}function w(t){let l={},n=1,i=[];return t.properties&&(t=t.properties),Object.keys(t).map(h=>{let c=t[h];if(c.view=="table"){let b=c.properties||c.fields,q=n*100,E={title:c.title,value:h,disabled:!0,children:[],order:q};Object.keys(b).map(T=>{let x=b[T];x.order=q+x.order;let _=h+"@"+T;l[_]=x,E.children.push({title:x.title,value:_,isLeaf:!0,order:x.order})}),u(E),i.push(E),n++}else{let b=h;l[b]=c,i.push({title:c.title,value:b,isLeaf:!0,order:c.order})}}),u(i),{allFields:l,treeData:i}}function u(t){(t.children||t).sort(function(l,n){return l.order-n.order})}function M(t){const{params:l,matchType:n}=t;if(l){let i=[];for(let h of l)i.push(Object.assign({},{key:le(16)},h));e.values=i,n.value=n}}return{formRef:v,init:m,dynamicRowValues:e,matchType:D,registerModal:te,handleSubmit:k,handleCancel:$,handleSave:X,doSaveQueryInfo:N,saveInfo:C,saveTreeData:G,handleRemoveSaveInfo:s,handleTreeSelect:ee,fieldTreeData:P,addOne:L,removeOne:O,setFormModel:z,getSchema:J,loading:K,getQueryInfo:F,initDefaultValues:M}}const $e={name:"OnlineSuperQuery",props:{config:{type:Object,default:[]},status:{type:Boolean,default:!1},online:{type:Boolean,default:!1}},components:{BasicModal:_e,MinusCircleOutlined:De,PlusOutlined:je,OnlineSuperQueryValComponent:Re,FileTextOutlined:Pe,CloseCircleOutlined:Ve,AppstoreTwoTone:Qe,Divider:qe},emits:["search"],setup(p,{emit:r}){const[v,e]=Oe(),{createMessage:D}=fe(),te=R(!0);function A(){e.closeModal()}function B(){if(p.online===!0){let u=N(!0);u&&u.length>0?(r("search",u,m.value),A()):D.warning("空条件无法查询！")}else{let u=N(!0);if(u&&u.length>0){let M=k(u);r("search",M)}else D.warning("空条件无法查询！")}}function k(u){let M=[];for(let t of u){let l=t.field,n=t.val;n instanceof Array&&(n=n.join(",")),M.push(he(ve({},t),{field:l,val:n}))}return M.length>0?F.value=!0:F.value=!1,{superQueryMatchType:m.value,superQueryParams:encodeURI(JSON.stringify(M))}}function $(){P.values=[],Q(!1);let u=k([]);r("search",u)}const{formRef:z,init:j,dynamicRowValues:P,matchType:m,registerModal:L,handleSave:O,doSaveQueryInfo:U,saveInfo:J,saveTreeData:G,handleTreeSelect:V,handleRemoveSaveInfo:C,fieldTreeData:K,addOne:Q,removeOne:y,setFormModel:H,getSchema:X,loading:Y,getQueryInfo:N,initDefaultValues:W}=We(),F=R(!1);ae(()=>p.status,u=>{F.value=u},{immediate:!0});function Z(){e.openModal(),Q(!0)}function ee(){return document.getElementsByClassName("jee-super-query-form")[0]}function s(u){}function w(u){u.val=""}return ae(()=>p.config,u=>{u&&j(u)},{immediate:!0}),{formRef:z,registerFormModal:v,init:j,handleChangeField:w,dynamicRowValues:P,matchType:m,historyCollapsed:te,registerModal:L,handleSubmit:B,handleCancel:A,handleSave:O,handleReset:$,doSaveQueryInfo:U,saveInfo:J,saveTreeData:G,handleTreeSelect:V,handleRemoveSaveInfo:C,fieldTreeData:K,addOne:Q,removeOne:y,setFormModel:H,getSchema:X,loading:Y,onFinish:s,getPopupContainer:ee,superQueryFlag:F,handleOpen:Z,initDefaultValues:W,simpleImage:Ee.PRESENTED_IMAGE_SIMPLE}}},oe=p=>(Se("data-v-b1c9d7e2"),p=p(),we(),p),ze={class:"j-super-query-button"},Ke=oe(()=>g("span",null,"已有高级查询条件生效",-1)),Xe=oe(()=>g("span",null,"高级查询",-1)),Ye={style:{float:"left"}},Ze={slot:"description"},et=oe(()=>g("span",null,"没有任何查询条件",-1)),tt=oe(()=>g("div",null,"保存的查询",-1)),lt=["title"],at={class:"icon-cancle"},ot={style:{height:"80px","line-height":"75px",width:"100%","text-align":"center"}};function nt(p,r,v,e,D,te){const A=d("divider"),B=d("AppstoreTwoTone"),k=d("a-button"),$=d("a-button-group"),z=d("a-tooltip"),j=d("a-divider"),P=d("a-empty"),m=d("a-select-option"),L=d("a-select"),O=d("a-form-item"),U=d("a-col"),J=d("a-row"),G=d("a-tree-select"),V=d("online-super-query-val-component"),C=d("PlusOutlined"),K=d("MinusCircleOutlined"),Q=d("a-space"),y=d("a-form"),H=d("close-circle-outlined"),X=d("file-text-outlined"),Y=d("a-tree"),N=d("Icon"),W=d("a-card"),F=d("BasicModal"),Z=d("a-input"),ee=d("a-modal");return S(),ie(ue,null,[g("div",ze,[e.superQueryFlag?(S(),I(z,{key:0,mouseLeaveDelay:.2},{title:o(()=>[Ke,a(A,{type:"vertical",style:{"background-color":"#fff"}}),g("a",{onClick:r[0]||(r[0]=(...s)=>e.handleReset&&e.handleReset(...s))},"清空")]),default:o(()=>[a($,null,{default:o(()=>[a(k,{type:"primary",onClick:e.handleOpen},{default:o(()=>[a(B,{spin:!0}),Xe]),_:1},8,["onClick"])]),_:1})]),_:1})):(S(),I(k,{key:1,type:"primary",preIcon:"ant-design:filter-outlined",onClick:e.handleOpen},{default:o(()=>[f(" 高级查询 ")]),_:1},8,["onClick"]))]),(S(),I(Ce,{to:"body"},[a(F,{title:"高级查询构造器",canFullscreen:!1,width:750,onRegister:e.registerFormModal,onOk:e.handleSubmit},{footer:o(()=>[g("div",Ye,[a(k,{loading:e.loading,onClick:e.handleReset},{default:o(()=>[f("重置")]),_:1},8,["loading","onClick"]),a(k,{loading:e.loading,onClick:e.handleSave},{default:o(()=>[f("保存查询")]),_:1},8,["loading","onClick"])]),a(k,{key:"submit",type:"primary",onClick:e.handleSubmit},{default:o(()=>[f("确定")]),_:1},8,["onClick"]),a(k,{key:"back",onClick:e.handleCancel},{default:o(()=>[f("关闭")]),_:1},8,["onClick"])]),default:o(()=>[e.dynamicRowValues.values.length==0?(S(),I(P,{key:0},{default:o(()=>[g("div",Ze,[et,a(j,{type:"vertical"}),g("a",{onClick:r[1]||(r[1]=s=>e.addOne(-1))},"点击新增")])]),_:1})):ye("",!0),a(J,{class:ne("j-super-query-modal-content")},{default:o(()=>[a(U,{sm:24,md:24},{default:o(()=>[re(a(J,null,{default:o(()=>[a(U,{md:12,xs:24},{default:o(()=>[a(O,{label:"匹配模式",labelCol:{md:6,xs:24},wrapperCol:{md:18,xs:24},style:{width:"100%"}},{default:o(()=>[a(L,{value:e.matchType,"onUpdate:value":r[2]||(r[2]=s=>e.matchType=s),getPopupContainer:s=>s.parentNode,style:{width:"100%"}},{default:o(()=>[a(m,{value:"and"},{default:o(()=>[f("AND（所有条件匹配）")]),_:1}),a(m,{value:"or"},{default:o(()=>[f("OR（任意一个匹配）")]),_:1})]),_:1},8,["value","getPopupContainer"])]),_:1})]),_:1})]),_:1},512),[[se,e.dynamicRowValues.values.length>0]]),re(a(y,{ref:"formRef",class:ne("jee-super-query-form"),model:e.dynamicRowValues,onFinish:e.onFinish},{default:o(()=>[(S(!0),ie(ue,null,ge(e.dynamicRowValues.values,(s,w)=>(S(),I(Q,{key:s.key,style:{display:"flex","margin-bottom":"8px"},align:"baseline"},{default:o(()=>[a(O,{name:["values",w,"field"],style:{width:"150px"}},{default:o(()=>[a(G,{style:{width:"100%"},placeholder:"请选择字段",value:s.field,"onUpdate:value":u=>s.field=u,"show-search":"","tree-node-filter-prop":"title","allow-clear":"","tree-default-expand-all":"","dropdown-style":{maxHeight:"180px",overflow:"auto"},onChange:u=>e.handleChangeField(s),"tree-data":e.fieldTreeData},null,8,["value","onUpdate:value","onChange","tree-data"])]),_:2},1032,["name"]),a(O,{name:["values",w,"rule"],style:{width:"100px"}},{default:o(()=>[a(L,{style:{width:"100%"},placeholder:"请选择匹配规则",value:s.rule,"onUpdate:value":u=>s.rule=u},{default:o(()=>[a(m,{value:"eq"},{default:o(()=>[f("等于")]),_:1}),a(m,{value:"like"},{default:o(()=>[f("模糊")]),_:1}),a(m,{value:"right_like"},{default:o(()=>[f("以..开始")]),_:1}),a(m,{value:"left_like"},{default:o(()=>[f("以..结尾")]),_:1}),a(m,{value:"in"},{default:o(()=>[f("在...中")]),_:1}),a(m,{value:"ne"},{default:o(()=>[f("不等于")]),_:1}),a(m,{value:"gt"},{default:o(()=>[f("大于")]),_:1}),a(m,{value:"ge"},{default:o(()=>[f("大于等于")]),_:1}),a(m,{value:"lt"},{default:o(()=>[f("小于")]),_:1}),a(m,{value:"le"},{default:o(()=>[f("小于等于")]),_:1})]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"]),a(O,{name:["values",w,"val"],style:{width:"300px"}},{default:o(()=>[a(V,{style:{width:"100%"},schema:e.getSchema(s,w),formModel:s,setFormModel:(u,M)=>{e.setFormModel(u,M,s)},onSubmit:e.handleSubmit},null,8,["schema","formModel","setFormModel","onSubmit"])]),_:2},1032,["name"]),a(O,null,{default:o(()=>[a(k,{onClick:u=>e.addOne(w),style:{"margin-right":"6px"}},{default:o(()=>[a(C)]),_:2},1032,["onClick"]),a(k,{onClick:u=>e.removeOne(s)},{default:o(()=>[a(K)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model","onFinish"]),[[se,e.dynamicRowValues.values.length>0]])]),_:1})]),_:1}),a(W,{class:ne(["j-super-query-history-card",{collapsed:e.historyCollapsed}]),bordered:!1},{title:o(()=>[tt]),default:o(()=>[e.saveTreeData.length===0?(S(),I(P,{key:0,class:"j-super-query-history-empty",image:e.simpleImage,description:"没有保存的查询"},null,8,["image"])):(S(),I(Y,{key:1,class:"j-super-query-history-tree",treeData:e.saveTreeData,selectedKeys:[],"show-icon":!0,onSelect:e.handleTreeSelect},{title:o(({title:s})=>[g("div",null,[g("span",{title:s},ke(s.length>10?s.substring(0,10)+"...":s),9,lt),g("span",at,[a(H,{onClick:w=>e.handleRemoveSaveInfo(s)},null,8,["onClick"])])])]),custom:o(()=>[a(X)]),_:1},8,["treeData","onSelect"])),g("div",{class:"collapse-box",onClick:r[3]||(r[3]=s=>e.historyCollapsed=!e.historyCollapsed)},[e.historyCollapsed?(S(),I(N,{key:0,icon:"ant-design:caret-left"})):(S(),I(N,{key:1,icon:"ant-design:caret-right"}))])]),_:1},8,["class"])]),_:1},8,["onRegister","onOk"])])),a(ee,{title:"请输入保存的名称",visible:e.saveInfo.visible,onCancel:r[5]||(r[5]=s=>e.saveInfo.visible=!1),onOk:e.doSaveQueryInfo},{default:o(()=>[g("div",ot,[a(Z,{value:e.saveInfo.title,"onUpdate:value":r[4]||(r[4]=s=>e.saveInfo.title=s),style:{width:"90%"},placeholder:"请输入保存的名称"},null,8,["value"])])]),_:1},8,["visible","onOk"])],64)}const al=Me($e,[["render",nt],["__scopeId","data-v-b1c9d7e2"]]);export{al as default};