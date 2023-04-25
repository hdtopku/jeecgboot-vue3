var d=(e,i,r)=>new Promise((m,l)=>{var c=t=>{try{o(r.next(t))}catch(s){l(s)}},u=t=>{try{o(r.throw(t))}catch(s){l(s)}},o=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);o((r=r.apply(e,i)).next())});import{B as P}from"./BasicForm.1d30e5fc.js";import"./componentMap.a24260de.js";import{u as b}from"./useForm.853cc25f.js";import"./JAddInput.eb06f3b7.js";import{j as A,dv as _,C as F,q as g,r as p,s as C,Q as v,w as a,v as n,y as D}from"./index.b3c2d15d.js";import h from"./PersonTable.ae9c7fdd.js";import{a as q}from"./index.82bab5e4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.4c92c098.js";import"./uniqBy.7d054233.js";import"./index.c08fb6c5.js";import"./BasicModal.52351894.js";import"./useWindowSizeFn.144e77df.js";import"./useFormItem.1acc993a.js";import"./functional.cce3c468.js";import"./download.16daa9fa.js";import"./base64Conver.030fa32c.js";import"./index.95188f97.js";import"./index.cc84c2d8.js";import"./useCountdown.16084cef.js";import"./JUpload.vue_vue_type_style_index_0_lang.9df0fcc7.js";import"./api.363f3378.js";import"./index.717ec1b1.js";import"./index.03fb2e5d.js";import"./areaDataUtil.26505ac2.js";import"./props.a330435c.js";import"./index.33ba4a29.js";import"./bem.d150d109.js";import"./props.c98c16cc.js";import"./useContextMenu.009c9f83.js";import"./index.fbf1ecdc.js";import"./onMountedOrActivated.5e737d19.js";import"./index.b7730792.js";import"./htmlmixed.5c08416b.js";import"./vue.0f98f912.js";/* empty css             */import"./depart.api.9aefc0f7.js";import"./BasicTable.6f8187cc.js";import"./BasicTable.vue_vue_type_style_index_0_lang.66703838.js";import"./RedoOutlined.66bed16b.js";import"./useContentHeight.0306340e.js";import"./useContentViewHeight.3716c092.js";import"./usePageContext.ddd10066.js";import"./TableImg.vue_vue_type_style_index_0_lang.36794269.js";import"./useTable.f4111a7b.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],T=A({name:"FormHightPage",components:{BasicForm:P,PersonTable:h,PageWrapper:q,[_.name]:_},setup(){const e=F(null),[i,{validate:r}]=b({baseColProps:{span:6},labelWidth:200,layout:"vertical",schemas:k,showActionButtonGroup:!1}),[m,{validate:l}]=b({baseColProps:{span:6},labelWidth:200,layout:"vertical",schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{e.value&&console.log("table data:",e.value.getDataSource());const[u,o]=yield Promise.all([r(),l()]);console.log("form data:",u,o)}catch(u){}})}return{register:i,registerTask:m,submitAll:c,tableRef:e}}});function S(e,i,r,m,l,c){const u=p("BasicForm"),o=p("a-card"),t=p("PersonTable"),s=p("a-button"),E=p("PageWrapper");return C(),v(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:a(()=>[n(s,{type:"primary",onClick:e.submitAll},{default:a(()=>[D(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:a(()=>[n(o,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:a(()=>[n(u,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:a(()=>[n(u,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),n(o,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:a(()=>[n(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}const Ce=g(T,[["render",S],["__scopeId","data-v-976e482a"]]);export{Ce as default};