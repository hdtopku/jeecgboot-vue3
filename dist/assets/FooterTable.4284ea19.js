import{B as s}from"./BasicTable.f15f6361.js";import"./helper.df0282ae.js";import"./TableImg.1a54e7ea.js";import{u as n}from"./useTable.1fe79c1d.js";import{getBasicColumns as a}from"./tableData.01351cef.js";import{d as u}from"./table.36e37ea9.js";import{q as c,l,t as _,v as d,x as f,y as B}from"./index.a86a095a.js";import"./BasicForm.638a5420.js";import"./uniqBy.37746f07.js";import"./index.6aad32b5.js";import"./BasicModal.e80a23a3.js";import"./useWindowSizeFn.b7d480b1.js";import"./useForm.e5081d00.js";import"./JAddInput.b3ef411a.js";import"./useFormItem.26c7ddf2.js";import"./api.8ffe844e.js";import"./props.b5573a62.js";import"./index.4e26ab6e.js";import"./bem.58472782.js";import"./props.3a3564ad.js";import"./useContextMenu.3dd9697f.js";import"./index.d3916c9f.js";import"./onMountedOrActivated.ab6edd17.js";import"./index.489fa5a0.js";import"./htmlmixed.ecc9afe5.js";import"./vue.15147809.js";/* empty css             */import"./depart.api.b742e74c.js";import"./index.1fef09c9.js";import"./useContentHeight.30d7d1c7.js";import"./useContentViewHeight.8d9baa85.js";import"./usePageContext.4ef5b679.js";import"./RedoOutlined.cb450b29.js";import"./functional.748b14f4.js";import"./download.5ff89a13.js";import"./base64Conver.030fa32c.js";import"./index.8380ff3b.js";import"./index.ab0e3029.js";import"./useCountdown.4d86de16.js";import"./JUpload.bd403882.js";import"./index.2f02ed00.js";const b=l({components:{BasicTable:s},setup(){function o(i){const t=i.reduce((r,m)=>(r+=m.no,r),0);return[{_row:"\u5408\u8BA1",_index:"\u5E73\u5747\u503C",no:t},{_row:"\u5408\u8BA1",_index:"\u5E73\u5747\u503C",no:t}]}const[e]=n({title:"\u8868\u5C3E\u884C\u5408\u8BA1\u793A\u4F8B",api:u,rowSelection:{type:"checkbox"},columns:a(),showSummary:!0,summaryFunc:o,scroll:{x:1e3},canResize:!1});return{registerTable:e}}}),x={class:"p-4"};function C(o,e,i,t,r,m){const p=_("BasicTable");return d(),f("div",x,[B(p,{onRegister:o.registerTable},null,8,["onRegister"])])}var so=c(b,[["render",C]]);export{so as default};