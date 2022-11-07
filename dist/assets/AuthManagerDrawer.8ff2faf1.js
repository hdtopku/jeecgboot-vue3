import{B as y,u as A}from"./index.8ce2f7e8.js";import D from"./AuthFieldConfig.4e9d7f80.js";import B from"./AuthButtonConfig.04fc69c0.js";import F from"./AuthDataConfig.041f5ce7.js";import{l as v,F as n,o as w,e$ as I,t as r,v as h,V as _,z as i,y as o,x as b,aw as k,W as K}from"./index.a86a095a.js";import"./BasicTable.f15f6361.js";import"./helper.df0282ae.js";import"./TableImg.1a54e7ea.js";import"./_baseClone.a8082016.js";import"./_arrayPush.8821345e.js";import"./isArray.40a4ed15.js";import"./index.6aad32b5.js";import"./BasicForm.638a5420.js";import"./JAddInput.b3ef411a.js";import"./useTable.1fe79c1d.js";import"./auth.api.6e22479c.js";import"./auth.data.1c0a22ac.js";import"./useForm.e5081d00.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./onMountedOrActivated.ab6edd17.js";import"./useWindowSizeFn.b7d480b1.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./BasicModal.e80a23a3.js";import"./RedoOutlined.cb450b29.js";import"./useFormItem.26c7ddf2.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./api.8ffe844e.js";import"./index.2f02ed00.js";import"./uniqBy.37746f07.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";const R=v({name:"AuthManagerDrawer",components:{BasicDrawer:y,AuthFieldConfig:D,AuthButtonConfig:B,AuthDataConfig:F},props:{tableType:{type:Number,default:1}},emits:["register"],setup(t){const e=n(""),m=n(""),f=n([]),p=n("field"),c=w(()=>t.tableType==1||t.tableType==2),[u,{closeDrawer:a}]=A(d=>{e.value=d.cgformId,m.value=e.value+"?"+new Date().getTime(),p.value="field"});function s(){a()}return{activeKey:p,cgformId:e,headId:m,authFields:f,hasDataAuth:c,onClose:s,registerDrawer:u}}});function $(t,e,m,f,p,c){const u=r("AuthFieldConfig"),a=r("a-tab-pane"),s=r("AuthButtonConfig"),d=r("AuthDataConfig"),g=r("a-tabs"),C=r("BasicDrawer");return h(),_(C,{onRegister:t.registerDrawer,title:"\u6743\u9650\u7BA1\u7406",width:800,onClose:t.onClose},{default:i(()=>[o(g,{activeKey:t.activeKey,"onUpdate:activeKey":e[1]||(e[1]=l=>t.activeKey=l)},{default:i(()=>[o(a,{tab:"\u5B57\u6BB5\u6743\u9650",key:"field",forceRender:""},{default:i(()=>[o(u,{headId:t.headId,authFields:t.authFields,"onUpdate:authFields":e[0]||(e[0]=l=>t.authFields=l)},null,8,["headId","authFields"])]),_:1}),t.hasDataAuth?(h(),b(k,{key:0},[o(a,{tab:"\u6309\u94AE\u6743\u9650",key:"button",forceRender:""},{default:i(()=>[o(s,{headId:t.headId},null,8,["headId"])]),_:1}),o(a,{tab:"\u6570\u636E\u6743\u9650",key:"data",forceRender:""},{default:i(()=>[o(d,{cgformId:t.cgformId,authFields:t.authFields},null,8,["cgformId","authFields"])]),_:1})],64)):K("",!0)]),_:1},8,["activeKey"])]),_:1},8,["onRegister","onClose"])}var _t=I(R,[["render",$]]);export{_t as default};