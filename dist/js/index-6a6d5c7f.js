import{d,l as f,e as _,V as p,a7 as i,a8 as C,f as o,aa as n,ac as g,ah as l}from"./vue-ebecda47.js";import y from"./JeecgComponents-a945839b.js";import b from"./JEditorDemo-c2080fee.js";import E from"./JCodeEditDemo-5c76f924.js";import D from"./ImgDragSort-8792e60f.js";import k from"./ImgTurnPage-2b49687b.js";import v from"./JeecgPdfView-ae999708.js";import F from"./JUploadDemo-15a04b8b.js";import{_ as J}from"./jeecg-online-vendor-cfb58502.js";import"./index-a2e0ccba.js";import"./useForm-21b78d9f.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./index-85cfc899.js";import"./lodash-es-vendor-cd7703c8.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./select-66528a8f.js";import"./index-38e4d5c0.js";const h=d({name:"comp-jeecg-basic",setup(){const t=f("JeecgComponents"),r=_(()=>({JeecgComponents:y,JEditorDemo:b,JCodeEditDemo:E,ImgDragSort:D,ImgTurnPage:k,JeecgPdfView:v,JUploadDemo:F})[t.value]);function a(m){t.value=m}return{activeKey:t,currentComponent:r,tabChange:a}}}),$={class:"p-4"};function B(t,r,a,m,K,P){const e=p("a-tab-pane"),c=p("a-tabs"),u=p("a-card");return i(),C("div",$,[o(u,{bordered:!1,style:{height:"100%"}},{default:n(()=>[o(c,{activeKey:t.activeKey,"onUpdate:activeKey":r[0]||(r[0]=s=>t.activeKey=s),onChange:t.tabChange},{default:n(()=>[o(e,{key:"JeecgComponents",tab:"下拉选择组件"}),o(e,{key:"JCodeEditDemo",tab:"代码编辑器","force-render":""}),o(e,{key:"JEditorDemo",tab:"富文本&MakeDown"}),o(e,{key:"ImgDragSort",tab:"图片拖拽"}),o(e,{key:"ImgTurnPage",tab:"图片翻页"}),o(e,{key:"JeecgPdfView",tab:"PDF预览"}),o(e,{key:"JUploadDemo",tab:"文件上传"})]),_:1},8,["activeKey","onChange"]),(i(),g(l(t.currentComponent)))]),_:1})])}const Bo=J(h,[["render",B]]);export{Bo as default};