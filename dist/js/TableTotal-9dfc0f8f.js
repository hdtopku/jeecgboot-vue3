import{d as n,V as l,a7 as d,ac as u,aa as o,f as m,u as i}from"./vue-ebecda47.js";import{P as s}from"./index-a9e34e75.js";import{u as c}from"./index-993283cc.js";import{ap as T}from"./index-85cfc899.js";import v from"./BasicTable-46b6c894.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./useContentHeight-d1e0ec25.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./useContentViewHeight-45430ff2.js";import"./usePageContext-17112021.js";import"./injectionKey-69710956.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./index-a2e0ccba.js";import"./useForm-21b78d9f.js";const ue=n({__name:"TableTotal",setup(f){const[p]=c({rowKey:"id",bordered:!0,canResize:!1,columns:[{title:"姓名",dataIndex:"name"},{title:"贡献点",dataIndex:"point"},{title:"等级",dataIndex:"level"},{title:"更新时间",dataIndex:"updateTime"}],dataSource:[{id:0,name:"张三",point:23,level:3,updateTime:"2019-8-14"},{id:1,name:"小鹿",point:33,level:9,updateTime:"2019-8-10"},{id:2,name:"小王",point:6,level:1,updateTime:"2019-8-13"},{id:3,name:"李四",point:53,level:8,updateTime:"2019-8-12"},{id:4,name:"小红",point:44,level:5,updateTime:"2019-8-11"},{id:5,name:"王五",point:97,level:10,updateTime:"2019-8-10"},{id:6,name:"小明",point:33,level:2,updateTime:"2019-8-10"},{id:7,name:"小张",point:33,level:4,updateTime:"2019-8-10"},{id:8,name:"小六",point:33,level:2,updateTime:"2019-8-10"},{id:9,name:"小五",point:33,level:7,updateTime:"2019-8-10"},{id:10,name:"小赵",point:33,level:2,updateTime:"2019-8-10"},{id:11,name:"李华",point:33,level:8,updateTime:"2019-8-10"},{id:12,name:"小康",point:33,level:5,updateTime:"2019-8-10"}],showSummary:!0,summaryFunc:r});function r(e){const t=T(e,["point","level"]);return[t,{_row:"平均",_index:"平均",point:(t.point/e.length).toFixed(2),level:(t.level/e.length).toFixed(0)}]}return(e,t)=>{const a=l("a-card");return d(),u(i(s),null,{default:o(()=>[m(a,{bordered:!1},{default:o(()=>[m(i(v),{onRegister:i(p)},null,8,["onRegister"])]),_:1})]),_:1})}}});export{ue as default};