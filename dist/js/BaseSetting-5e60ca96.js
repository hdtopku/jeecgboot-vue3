var _=(o,e,s)=>new Promise((c,i)=>{var l=t=>{try{r(s.next(t))}catch(a){i(a)}},m=t=>{try{r(s.throw(t))}catch(a){i(a)}},r=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,m);r((s=s.apply(o,e)).next())});import{t as C,b as f,u as h,D as B}from"./jeecg-online-vendor-ecddc31b.js";import{a0 as I,g as F}from"./index-b03d7914.js";import{B as b}from"./BasicForm-1c4cfe6b.js";import"./componentMap-bab84cb7.js";import{u as A}from"./useForm-799a6766.js";import"./JAddInput-903fbbea.js";import"./JSelectUser-14c3fad5.js";import"./JSelectDept-56a87299.js";import"./JPopup-d3d151eb.js";import"./cron-parser-vendor-d9194a40.js";import"./index-cd2db611.js";import{C as S,u as w}from"./upload-f96f5b3d.js";import{h as y}from"./header-55b09394.js";import{b as U}from"./data-7048a061.js";import{ab as E,ah as V,ag as k}from"./antd-vue-vendor-a78909e6.js";import{d as R,o as $,e as x,V as p,a5 as M,a9 as N,a7 as u,f as n,aa as g,E as H,ap as T,aq as j}from"./vue-bcbaddf9.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm.vue_vue_type_style_index_0_lang-2cb51a2e.js";import"./BasicModal-951c06ee.js";import"./useWindowSizeFn-13ef0f26.js";import"./useFormItem-4b66c33c.js";import"./JUpload.vue_vue_type_style_index_0_lang-9cbd44e9.js";import"./download-85c9438d.js";import"./base64Conver-fa2fe1af.js";import"./index-a284b6b4.js";import"./index-1938c9ba.js";import"./useCountdown-056f8acb.js";import"./index-5ded5f19.js";import"./areaDataUtil-661e31ab.js";import"./props-39e7c6b5.js";import"./JSelectBiz-f0398a38.js";import"./index-7371f95b.js";import"./codemirror-vendor-7570b8a9.js";import"./index-92741691.js";import"./bem-a44c7591.js";import"./props-c7c3390f.js";import"./useContextMenu-5e57fefa.js";import"./depart.api-79bf685d.js";import"./validator-9b1f714d.js";import"./user.api-a4776d25.js";const q=R({components:{BasicForm:b,CollapseContainer:I,Button:E,ARow:V,ACol:k,CropperAvatar:S},setup(){const{createMessage:o}=h(),e=C(),[s,{setFieldsValue:c,validate:i}]=A({labelWidth:120,schemas:U,showActionButtonGroup:!1});$(()=>_(this,null,function*(){const t=e.getUserInfo;c(t)}));const l=x(()=>{const{avatar:t}=e.getUserInfo;return F(t)||y});function m(t,a){const d=e.getUserInfo;d.avatar=a,e.setUserInfo(d),a&&f.post({url:"/sys/user/appEdit",params:{avatar:a}})}function r(){return _(this,null,function*(){try{let t=yield i();t.avatar=e.getUserInfo.avatar,f.post({url:"/sys/user/appEdit",params:t});const a=e.getUserInfo;Object.assign(a,t),e.setUserInfo(a),o.success("更新成功")}catch(t){}})}return{avatar:l,register:s,uploadImg:w,updateAvatar:m,handleSubmit:r}}});const D=o=>(T("data-v-1e4d7ab9"),o=o(),j(),o),G={class:"change-avatar"},O=D(()=>g("div",{class:"mb-2"}," 头像 ",-1));function P(o,e,s,c,i,l){const m=p("BasicForm"),r=p("a-col"),t=p("CropperAvatar"),a=p("a-row"),d=p("Button"),v=p("CollapseContainer");return M(),N(v,{title:"基本设置",canExpan:!1},{default:u(()=>[n(a,{gutter:24},{default:u(()=>[n(r,{span:14},{default:u(()=>[n(m,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(r,{span:10},{default:u(()=>[g("div",G,[O,n(t,{uploadApi:o.uploadImg,value:o.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(d,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[H(" 更新基本信息 ")]),_:1},8,["onClick"])]),_:1})}const Mt=B(q,[["render",P],["__scopeId","data-v-1e4d7ab9"]]);export{Mt as default};