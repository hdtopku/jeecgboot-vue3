import e from"./JeecgComponents.0dd853d1.js";import o from"./JEditorDemo.e7c4845b.js";import t from"./JCodeEditDemo.e17a35bb.js";import r from"./ImgDragSort.531230f6.js";import a from"./ImgTurnPage.e68c6c9b.js";import i from"./JeecgPdfView.954e2556.js";import d from"./JUploadDemo.80b8f01d.js";import{q as m,l as s,F as p,o as c,t as n,v as j,x as b,y as f,z as u,V as g,dE as l}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./helper.1c9dc9a5.js";import"./useFormItem.816007c4.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JAddInput.8c125e2c.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";import"./uniqBy.91f18935.js";import"./select.ba0488c9.js";import"./validator.2d5508cf.js";import"./index.0e3c04d8.js";import"./useForm.45d68074.js";import"./JUploadModal.3912f1fd.js";const J=s({name:"comp-jeecg-basic",setup(){const m=p("JeecgComponents"),s=c((()=>({JeecgComponents:e,JEditorDemo:o,JCodeEditDemo:t,ImgDragSort:r,ImgTurnPage:a,JeecgPdfView:i,JUploadDemo:d}[m.value])));return{activeKey:m,currentComponent:s,tabChange:function(e){m.value=e},activeKey:m}}}),y={class:"p-4"};var v=m(J,[["render",function(e,o,t,r,a,i){const d=n("a-tab-pane"),m=n("a-tabs"),s=n("a-card");return j(),b("div",y,[f(s,{bordered:!1,style:{height:"100%"}},{default:u((()=>[f(m,{activeKey:e.activeKey,"onUpdate:activeKey":o[0]||(o[0]=o=>e.activeKey=o),onChange:e.tabChange},{default:u((()=>[f(d,{key:"JeecgComponents",tab:"下拉选择组件"}),f(d,{key:"JCodeEditDemo",tab:"代码编辑器","force-render":""}),f(d,{key:"JEditorDemo",tab:"富文本&MakeDown"}),f(d,{key:"ImgDragSort",tab:"图片拖拽"}),f(d,{key:"ImgTurnPage",tab:"图片翻页"}),f(d,{key:"JeecgPdfView",tab:"PDF预览"}),f(d,{key:"JUploadDemo",tab:"文件上传"})])),_:1},8,["activeKey","onChange"]),(j(),g(l(e.currentComponent)))])),_:1})])}]]);export{v as default};