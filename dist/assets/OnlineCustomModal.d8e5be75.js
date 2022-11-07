import{B as K}from"./index.6aad32b5.js";import{g as O}from"./useAutoForm.9a27b081.js";import{l as Q,F as i,bG as J,H as W,a7 as X,e$ as Y,Q as M,a1 as Z,f6 as x,f7 as oo,f8 as eo,t as v,v as B,V as S,z as c,y as k,C as P,dE as to,B as no}from"./index.a86a095a.js";import ro from"./OnlineForm.2653d578.js";import"./JUpload.bd403882.js";import"./JUploadModal.cd922936.js";import"./helper.df0282ae.js";import"./OnlineSelectCascade.0be50d84.js";import"./BasicForm.638a5420.js";import"./JAddInput.b3ef411a.js";import"./pick.dbff1c58.js";import"./_flatRest.ff1861ce.js";import"./isArray.40a4ed15.js";import"./toString.cf909882.js";import"./_arrayPush.8821345e.js";import"./BasicTable.f15f6361.js";import"./TableImg.1a54e7ea.js";import"./Area.dd974528.js";import"./functional.748b14f4.js";import"./LinkTableListPiece.bd04460f.js";import"./omit.d6518a29.js";import"./_baseClone.a8082016.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./FormSchemaFactory.fdca3cac.js";import"./user.api.acc2a86d.js";import"./_commonjsHelpers.7ef9cff5.js";import"./customExpression.58041e91.js";import"./useForm.e5081d00.js";import"./useListPage.46dec680.js";import"./useTable.1fe79c1d.js";import"./uniqBy.37746f07.js";import"./useFormItem.26c7ddf2.js";import"./api.8ffe844e.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./RedoOutlined.cb450b29.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./index.2f02ed00.js";import"./JModalTip.bfbecb4e.js";import"./_baseSlice.23bb44df.js";var d=(o,f,r)=>new Promise((m,u)=>{var p=t=>{try{s(r.next(t))}catch(l){u(l)}},a=t=>{try{s(r.throw(t))}catch(l){u(l)}},s=t=>t.done?m(t.value):Promise.resolve(t.value).then(p,a);s((r=r.apply(o,f)).next())});const io={code:"",title:"\u81EA\u5B9A\u4E49\u5F39\u6846",width:600,row:{},hide:[],show:[],requestUrl:"",tableType:"",foreignKeys:"",formComponent:""},mo=Q({name:"OnlineCustomModal",components:{OnlineForm:ro,BasicModal:K},setup(o,{emit:f}){const r=i(),m=i(""),u=i("\u81EA\u5B9A\u4E49\u5F39\u6846"),p=i(600);let a=[],s=[],t="",l={};const T={loadFormItems:"/online/cgform/api/getFormItem/",optPre:"/online/cgform/api/form/"},_={position:"relative"},D=i(!1),w=i(!1);function I(){w.value=!0}const h=i(!0),[$,{setModalProps:A,closeModal:b}]=J(e=>d(this,null,function*(){A({confirmLoading:!1}),N(e),yield M(()=>d(this,null,function*(){e.formComponent?z(e.formComponent):yield G()}))}));function N(e){let n=Object.assign({},io,e);m.value=n.code,u.value=n.title,p.value=n.width,a=n.hide||[],s=n.show||[],t=L(n.requestUrl),l=n.row}function L(e){return e||T.optPre+m.value}const y=i(!1);function V(){y.value=!0,h.value===!0?r.value.handleSubmit():E.value.handleSubmit(),setTimeout(()=>{y.value=!0},3500)}function H(){b()}function U(e){f("success",e),b()}function G(){return d(this,null,function*(){h.value=!0,yield O(w),r.value.handleCustomFormSh(s,a),r.value.handleCustomFormEdit(l,t)})}const R=i(1);W(m,j,{immediate:!0});function j(){return d(this,null,function*(){if(w.value=!1,!m.value)return;console.log("\u91CD\u65B0\u6E32\u67D3\u8868\u5355\u300B\u300B\u300B\u300Bmodal");let e=yield q(),n=e.head.formTemplate;R.value=n?Number(n):1,M(()=>d(this,null,function*(){(yield O(r)).createRootProperties(e)}))})}function q(){let e=`/online/cgform/api/getFormItem/${m.value}`;return new Promise((n,g)=>{Z.get({url:e},{isTransformResponse:!1}).then(C=>{console.log("\u8868\u5355\u7ED3\u679C\u300B\u300Bmodal:",C),C.success?n(C.result):g(C.message)}).catch(()=>{g()})})}const E=i(),F=X({url:"",is:"",row:{}});function z(e){h.value=!1,F.url=t,F.row=l,F.is=x(oo(()=>eo(e)))}return{registerModal:$,title:u,width:p,modalStyle:_,handleSubmit:V,handleCancel:H,id:m,onlineFormCompRef:r,formTemplate:R,renderSuccess:I,customFormRef:E,customFormComponent:F,open,isOnlineForm:h,confirmLoading:D,submitLoading:y,handleSuccess:U}}});function lo(o,f,r,m,u,p){const a=v("a-button"),s=v("online-form"),t=v("a-spin"),l=v("BasicModal");return B(),S(l,no({title:o.title,width:o.width},o.$attrs,{style:o.modalStyle,onRegister:o.registerModal,wrapClassName:"jeecg-online-modal",onOk:o.handleSubmit}),{footer:c(()=>[k(a,{key:"submit",type:"primary",onClick:o.handleSubmit},{default:c(()=>[P("\u786E\u5B9A")]),_:1},8,["onClick"]),k(a,{key:"back",onClick:o.handleCancel},{default:c(()=>[P("\u5173\u95ED")]),_:1},8,["onClick"])]),default:c(()=>[k(t,{spinning:o.confirmLoading},{default:c(()=>[o.isOnlineForm?(B(),S(s,{key:0,ref:"onlineFormCompRef",id:o.id,"form-template":o.formTemplate,onRendered:o.renderSuccess,onSuccess:o.handleSuccess},null,8,["id","form-template","onRendered","onSuccess"])):(B(),S(to(o.customFormComponent.is),{key:1,ref:"customFormRef",url:o.customFormComponent.url,row:o.customFormComponent.row,onClose:o.handleSuccess},null,40,["url","row","onClose"]))]),_:1},8,["spinning"])]),_:1},16,["title","width","style","onRegister","onOk"])}var fe=Y(mo,[["render",lo]]);export{fe as default};