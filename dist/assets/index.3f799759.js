var A=(_,k,u)=>new Promise((I,g)=>{var D=d=>{try{y(u.next(d))}catch(c){g(c)}},S=d=>{try{y(u.throw(d))}catch(c){g(c)}},y=d=>d.done?I(d.value):Promise.resolve(d.value).then(D,S);y((u=u.apply(_,k)).next())});import{j as me,e6 as fe,C as f,bI as Y,m as _e,at as ge,a8 as M,E as ve,K as l,r as i,s as E,t as U,bY as ye,v as e,w as t,ax as be,R as K,aW as B,y as r,z as q,Q as Ce,B as he,au as xe,ac as Fe,dr as we,ds as Ee,q as Be}from"./index.25572ab7.js";import ke from"./BasicTable.1043d787.js";import{T as Ie}from"./componentMap.c8679e96.js";import"./BasicTable.vue_vue_type_style_index_0_lang.a50de651.js";import"./TableImg.vue_vue_type_style_index_0_lang.69ac851b.js";import{u as De}from"./useTable.c365558e.js";import"./index.117f635e.js";import{g as Se,c as Re,s as Te,a as z,b as Ae,_ as Me,d as Ue,e as Ke}from"./DemoModal.vue_vue_type_script_setup_true_lang.55bf6d8b.js";import{J as je}from"./JImportModal.4c7ebf86.js";import{e as V}from"./JAddInput.09222b6f.js";import"./BasicForm.0e850cba.js";import"./BasicForm.vue_vue_type_style_index_0_lang.44d1f790.js";import"./uniqBy.0cca5e55.js";import"./BasicModal.e6321ffe.js";import"./useWindowSizeFn.10aeeb1d.js";import"./useFormItem.06b13257.js";import"./functional.ad7cd28c.js";import"./download.dda0caa2.js";import"./base64Conver.030fa32c.js";import"./index.dcfab9c8.js";import"./index.5d7391bf.js";import"./useCountdown.c03dcf2e.js";import"./areaDataUtil.91d1dc96.js";import"./api.c80928e5.js";import"./props.cdb91745.js";import"./index.e58cf1ee.js";import"./bem.573744b2.js";import"./props.541f64c2.js";import"./useContextMenu.eb88c161.js";import"./index.e2c7747f.js";import"./onMountedOrActivated.2e2f37d7.js";import"./index.f22486b2.js";import"./htmlmixed.19714dd2.js";import"./vue.cc975904.js";/* empty css             */import"./depart.api.888c6bd3.js";import"./JUpload.vue_vue_type_style_index_0_lang.bda2e6fe.js";import"./index.23d6b964.js";import"./useForm.8e9d7e3a.js";import"./index.2eb12fc8.js";import"./useContentHeight.86f0abdd.js";import"./useContentViewHeight.67585340.js";import"./usePageContext.860d845d.js";import"./RedoOutlined.26b94716.js";import"./renderUtils.51f78bd7.js";const O=_=>(we("data-v-996e5dcb"),_=_(),Ee(),_),$e=["onKeyup"],Je=O(()=>B("span",null,"~",-1)),Ne={style:{float:"left",overflow:"hidden"},class:"table-page-search-submitButtons"},Ye=O(()=>B("span",null,"~",-1)),qe=me({__name:"index",setup(_){const k=fe(),u=f([]),[I,{openModal:g}]=Y(),[D,{openModal:S}]=Y(),{handleExportXls:y,handleImportXls:d}=xe(),c=f(),R=f(),F=f(!1),[P,{reload:v,setProps:j}]=De({title:"\u5355\u8868\u793A\u4F8B",api:Se,columns:Re,formConfig:{schemas:Te,fieldMapToTime:[["birthday",["birthday_begin","birthday_end"],"YYYY-MM-DD"]],fieldMapToNumber:[["age",["age_begin","age_end"]]],autoAdvancedCol:2,actionColOptions:{style:{textAlign:"left"}}},defSort:{column:"sex,salaryMoney",order:"desc"},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},canResize:!1,rowKey:"id",actionColumn:{width:180,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),L={type:"checkbox",columnWidth:40,selectedRowKeys:u,onChange:G};function Q(){S(!0)}const W=_e(()=>{let n={};return u.value&&u.value.length>0&&(n.selections=u.value.join(",")),ge(n)});function X(n){return[{label:"\u7F16\u8F91",onClick:Z.bind(null,n)},{label:"\u8BE6\u60C5",onClick:ee.bind(null,n)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:te.bind(null,n)}}]}function G(n){console.log("checkedKeys------>",u),u.value=n}function H(){F.value=!1,g(!0,{isUpdate:!1})}function Z(n){F.value=!1,g(!0,{record:n,isUpdate:!0})}function ee(n){F.value=!0,g(!0,{record:n,isUpdate:!0})}function te(n){return A(this,null,function*(){yield Ue({id:n.id},v)})}function oe(){return A(this,null,function*(){yield Ke({ids:u.value},v)})}function $(n,o){n[o]=[l(c),l(R)]}function ae(){k("/comp/jeecg/basic")}f();const ne=M({xs:{span:24},sm:{span:7}}),le=M({xs:{span:24},sm:{span:16}}),b=f(!1),m=f(!1),s=M({name:"",age_begin:"",age_end:"",sex:"",id:""});ve(m,()=>{j({useSearchForm:!l(m)})});function J(){j({searchInfo:Fe(s)}),v()}function ue(){Object.assign(s,{name:"",age_begin:"",age_end:"",sex:"",id:""}),v()}return(n,o)=>{const C=i("a-input"),w=i("a-form-item"),h=i("a-col"),p=i("a-button"),T=i("Icon"),se=i("a-row"),ie=i("a-form"),re=i("a-upload"),de=i("a-menu-item"),pe=i("a-menu"),ce=i("a-dropdown");return E(),U("div",null,[m.value?(E(),U("div",{key:0,class:"jeecg-basic-table-form-container",onKeyup:ye(J,["enter"])},[e(ie,{ref:"formRef",model:s,"label-col":ne,"wrapper-col":le},{default:t(()=>[e(se,{gutter:24},{default:t(()=>[e(h,{lg:8},{default:t(()=>[e(w,{label:"\u7528\u6237\u540D"},{default:t(()=>[e(C,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",value:s.name,"onUpdate:value":o[0]||(o[0]=a=>s.name=a)},null,8,["value"])]),_:1})]),_:1}),e(h,{lg:8},{default:t(()=>[e(w,{label:"\u5E74\u9F84"},{default:t(()=>[e(C,{placeholder:"\u6700\u5C0F\u5E74\u9F84",type:"ge",value:s.age_begin,"onUpdate:value":o[1]||(o[1]=a=>s.age_begin=a),style:{width:"calc(50% - 15px)"}},null,8,["value"]),Je,e(C,{placeholder:"\u6700\u5927\u5E74\u9F84",type:"le",value:s.age_end,"onUpdate:value":o[2]||(o[2]=a=>s.age_end=a),style:{width:"calc(50% - 15px)"}},null,8,["value"])]),_:1})]),_:1}),b.value?(E(),U(be,{key:0},[e(h,{lg:8},{default:t(()=>[e(w,{label:"\u6027\u522B"},{default:t(()=>[e(V,{value:s.sex,"onUpdate:value":o[3]||(o[3]=a=>s.sex=a),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",dictCode:"sex"},null,8,["value"])]),_:1})]),_:1}),e(h,{lg:8},{default:t(()=>[e(w,{label:"\u9009\u62E9\u7528\u6237"},{default:t(()=>[e(V,{value:s.id,"onUpdate:value":o[4]||(o[4]=a=>s.id=a),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237",dictCode:"demo,name,id"},null,8,["value"])]),_:1})]),_:1})],64)):K("",!0),B("span",Ne,[e(h,{lg:6},{default:t(()=>[e(p,{type:"primary",preIcon:"ant-design:search-outlined",onClick:J},{default:t(()=>[r("\u67E5\u8BE2")]),_:1}),e(p,{type:"primary",preIcon:"ant-design:reload-outlined",onClick:ue,style:{"margin-left":"8px"}},{default:t(()=>[r("\u91CD\u7F6E")]),_:1}),B("a",{onClick:o[5]||(o[5]=a=>b.value=!b.value),style:{"margin-left":"8px"}},[r(q(b.value?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),e(T,{icon:b.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])]),_:1})])]),_:1})]),_:1},8,["model","label-col","wrapper-col"])],40,$e)):K("",!0),e(l(ke),{onRegister:l(P),rowSelection:L,class:he({"p-4":m.value})},{"form-age":t(({model:a,field:N})=>[e(C,{placeholder:"\u6700\u5C0F\u5E74\u9F84",type:"ge",value:c.value,"onUpdate:value":o[6]||(o[6]=x=>c.value=x),style:{width:"calc(50% - 15px)"},onChange:x=>$(a,N)},null,8,["value","onChange"]),Ye,e(C,{placeholder:"\u6700\u5927\u5E74\u9F84",type:"le",value:R.value,"onUpdate:value":o[7]||(o[7]=x=>R.value=x),style:{width:"calc(50% - 15px)"},onChange:x=>$(a,N)},null,8,["value","onChange"])]),tableTitle:t(()=>[e(p,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:H},{default:t(()=>[r("\u65B0\u589E")]),_:1}),e(re,{name:"file",showUploadList:!1,customRequest:a=>l(d)(a,l(z),l(v))},{default:t(()=>[e(p,{preIcon:"ant-design:import-outlined",type:"primary"},{default:t(()=>[r("\u5BFC\u5165")]),_:1})]),_:1},8,["customRequest"]),e(p,{preIcon:"ant-design:export-outlined",type:"primary",onClick:o[8]||(o[8]=a=>l(y)("\u5355\u8868\u793A\u4F8B",l(Ae),l(W)))},{default:t(()=>[r("\u5BFC\u51FA")]),_:1}),e(p,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:ae},{default:t(()=>[r("\u6253\u5F00Tab\u9875")]),_:1}),e(p,{preIcon:"ant-design:retweet-outlined",type:"primary",onClick:o[9]||(o[9]=a=>m.value=!m.value)},{default:t(()=>[r(q(m.value?"\u8868\u5355\u914D\u7F6E\u67E5\u8BE2":"\u81EA\u5B9A\u4E49\u67E5\u8BE2"),1)]),_:1}),e(p,{preIcon:"ant-design:import-outlined",type:"primary",onClick:Q},{default:t(()=>[r("\u5F39\u7A97\u5BFC\u5165")]),_:1}),u.value.length>0?(E(),Ce(ce,{key:0},{overlay:t(()=>[e(pe,null,{default:t(()=>[e(de,{key:"1",onClick:oe},{default:t(()=>[e(T,{icon:"ant-design:delete-outlined"}),r(" \u5220\u9664 ")]),_:1})]),_:1})]),default:t(()=>[e(p,null,{default:t(()=>[r("\u6279\u91CF\u64CD\u4F5C "),e(T,{style:{fontsize:"12px"},icon:"ant-design:down-outlined"})]),_:1})]),_:1})):K("",!0)]),action:t(({record:a})=>[e(l(Ie),{actions:X(a)},null,8,["actions"])]),_:1},8,["onRegister","class"]),e(Me,{onRegister:l(I),onSuccess:l(v),isDisabled:F.value},null,8,["onRegister","onSuccess","isDisabled"]),e(je,{onRegister:l(D),url:l(z),online:""},null,8,["onRegister","url"])])}}});const Ut=Be(qe,[["__scopeId","data-v-996e5dcb"]]);export{Ut as default};