var ie=Object.defineProperty;var O=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var M=(m,l,t)=>l in m?ie(m,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[l]=t,P=(m,l)=>{for(var t in l||(l={}))ue.call(l,t)&&M(m,t,l[t]);if(O)for(var t of O(l))se.call(l,t)&&M(m,t,l[t]);return m};var H=(m,l,t)=>new Promise((r,p)=>{var C=n=>{try{g(t.next(n))}catch(d){p(d)}},x=n=>{try{g(t.throw(n))}catch(d){p(d)}},g=n=>n.done?r(n.value):Promise.resolve(n.value).then(C,x);g((t=t.apply(m,l)).next())});import{j as ce,C as i,n as re,f as w,a7 as de,X as me,r as f,s as y,Q as S,w as a,aW as u,v as o,y as v,R as pe,z as V,t as b,H as D,dF as fe,a2 as _e,Z as I,a as ve,c5 as B,u as ge,at as he}from"./index.0be4b5b8.js";import{g as ye}from"./Area.f5fd3d92.js";import{_ as xe}from"./OneNativeModal.vue_vue_type_script_setup_true_lang.f4bd1153.js";import{i as Ce}from"./api.dbe6bd39.js";import{downloadFile as we}from"./renderUtils.e4a72d30.js";import"./areaDataUtil.04b478e5.js";import"./OneNativeForm.5729b0bf.js";import"./JAddInput.d2fd0723.js";import"./useFormItem.77c38aa9.js";import"./index.df1721d5.js";import"./BasicModal.05e341b8.js";import"./useWindowSizeFn.6297694a.js";import"./props.85c73a56.js";import"./index.8e58299a.js";import"./bem.95d55b55.js";import"./props.92e8297a.js";import"./useContextMenu.38a95ea9.js";import"./index.495f5812.js";import"./onMountedOrActivated.5ca73ec3.js";import"./depart.api.a4de2579.js";import"./MinusCircleOutlined.339270b0.js";import"./JUpload.vue_vue_type_style_index_0_lang.685c6da6.js";const ke={class:"table-operator"},Ee={class:"ant-alert ant-alert-info",style:{"margin-bottom":"16px"}},Fe=u("i",{class:"anticon anticon-info-circle ant-alert-icon"},null,-1),Se={style:{"font-weight":"600"}},be={slot:"htmlSlot","slot-scope":"text"},De=["innerHTML"],Ie={key:0,style:{"font-size":"12px","font-style":"italic"}},Be=["src","preview"],Te={key:0,style:{"font-size":"12px","font-style":"italic"}},Re=["onClick"],je={class:"ant-dropdown-link"},Ae=["onClick"],ze=u("a",null,"\u5220\u9664",-1),lt=ce({__name:"OneNativeList",setup(m){i(!1);const l=i({}),t=i(!1),r=i([]),p=i();re();const C=i([{title:"\u6587\u672C",align:"center",dataIndex:"name"},{title:"\u5B57\u5178\u4E0B\u62C9",align:"center",dataIndex:"xiala",customRender:({text:e})=>e?w(r.value.xiala,e):""},{title:"\u5B57\u5178\u5355\u9009",align:"center",dataIndex:"danxuan",customRender:({text:e})=>e?w(r.value.danxuan,e):""},{title:"\u5B57\u5178\u591A\u9009",align:"center",dataIndex:"duoxuan",customRender:({text:e})=>e?w(r.value.duoxuan,e):""},{title:"\u5F00\u5173",align:"center",dataIndex:"kaiguan",customRender:({text:e})=>e?w(r.value.kaiguan,e):""},{title:"\u65E5\u671F",align:"center",dataIndex:"riqi",customRender:function({text:e}){return e?e.length>10?e.substr(0,10):e:""}},{title:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2",align:"center",dataIndex:"nyrsfm"},{title:"\u65F6\u95F4",align:"center",dataIndex:"shijian"},{title:"\u6587\u4EF6",align:"center",dataIndex:"wenjian",slots:{customRender:"fileSlot"}},{title:"\u56FE\u7247",align:"center",dataIndex:"tupian",slots:{customRender:"imgSlot"}},{title:"\u64CD\u4F5C",dataIndex:"action",align:"center",fixed:"right",width:147,slots:{customRender:"action"}}]),x=de({list:"/test/jeecgDemo/oneNative/list",delete:"/test/jeecgDemo/oneNative/delete",exportXls:"/test/jeecgDemo/oneNative/exportXls",importExcel:"test/jeecgDemo/oneNative/importExcel"}),g=i([]);i(!1);const n=i({current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:(e,s)=>s[0]+"-"+s[1]+" \u5171"+e+"\u6761",showQuickJumper:!0,showSizeChanger:!0,total:0}),d=i([]),k=i([]),T=i({column:"createTime",order:"desc"}),R=i({}),{createMessage:Q}=ge();function X(e,s){d.value=e,k.value=s}function $({pagination:e,filters:s,sorter:c}){n.value=e,T.value=c,R.value=P({},s)}function K(){p.value.disableSubmit=!1,p.value.add()}function L(){d.value=[],k.value=[]}function U(){_e.confirm({title:"\u786E\u8BA4\u5220\u9664",content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{I.delete({url:x.delete,data:{ids:d.value}},{joinParamsToUrl:!0}).then(()=>{E()})}})}function q(){let e=Object.assign(l.value,T.value,R.value);return e.field=J(),e.pageNo=n.value.current,e.pageSize=n.value.pageSize,he(e)}function J(){let e="id,";return C.value.forEach(function(s){e+=","+s.dataIndex}),e}function j(e){e===1&&(n.value.current=1),t.value=!0;let s=q();I.get({url:x.list,params:s},{isTransformResponse:!1}).then(c=>{c.success?(g.value=c.result.records,c.result&&c.result.total?n.value.total=c.result.total:n.value.total=0):Q.warning(c.message)}).finally(()=>{t.value=!1})}function W(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),ve(e)}function Z(e){p.value.disableSubmit=!1,p.value.edit(e)}function G(e){p.value.disableSubmit=!0,p.value.edit(e)}function Y(e){I.delete({url:x.delete,data:{ids:e}},{joinParamsToUrl:!0}).then(s=>{E()})}function ee(){return H(this,null,function*(){r.value.flzds=yield Ce({code:"B01"}),r.value.xiala=yield B("sex"),r.value.danxuan=yield B("sex"),r.value.duoxuan=yield B("urgent_level")})}function E(){d.value=[],k.value=[],j(1)}return me(()=>{r.value.kaiguan=[{text:"\u662F",value:"1"},{text:"\u5426",value:"2"}],j(),ee()}),(e,s)=>{const c=f("a-button"),A=f("Icon"),F=f("a-menu-item"),z=f("a-menu"),N=f("a-dropdown"),te=f("a-divider"),ae=f("a-icon"),ne=f("a-table"),oe=f("a-card");return y(),S(oe,{bordered:!1},{default:a(()=>[u("div",ke,[o(c,{onClick:K,type:"primary",preIcon:"ant-design:plus"},{default:a(()=>[v("\u65B0\u589E")]),_:1}),d.value.length>0?(y(),S(N,{key:0},{overlay:a(()=>[o(z,null,{default:a(()=>[o(F,{key:"1",onClick:U},{default:a(()=>[o(A,{icon:"ant-design:delete-outlined"}),v(" \u5220\u9664 ")]),_:1})]),_:1})]),default:a(()=>[o(c,null,{default:a(()=>[v("\u6279\u91CF\u64CD\u4F5C "),o(A,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):pe("",!0)]),u("div",null,[u("div",Ee,[Fe,v(" \u5DF2\u9009\u62E9 "),u("a",Se,V(d.value.length),1),v("\u9879 "),u("a",{style:{"margin-left":"24px"},onClick:L},"\u6E05\u7A7A")]),o(ne,{ref:"table",size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",class:"j-table-force-nowrap",columns:C.value,dataSource:g.value,pagination:n.value,loading:t.value,rowSelection:{selectedRowKeys:d.value,onChange:X},onChange:$},{imgSlot:a(({text:_,record:h})=>[_?(y(),b("img",{key:1,src:W(_),preview:h.id,alt:"",class:"anty-img-wrap"},null,8,Be)):(y(),b("span",Ie,"\u65E0\u56FE\u7247"))]),pcaSlot:a(({text:_})=>[u("div",null,V(D(ye)(_)),1)]),fileSlot:a(({text:_})=>[_?(y(),S(c,{key:1,ghost:!0,type:"primary",preIcon:"ant-design:download",size:"small",onClick:h=>D(we)(_)},{default:a(()=>[v(" \u4E0B\u8F7D ")]),_:2},1032,["onClick"])):(y(),b("span",Te,"\u65E0\u6587\u4EF6"))]),action:a(({text:_,record:h})=>[u("a",{onClick:le=>Z(h)},"\u7F16\u8F91",8,Re),o(te,{type:"vertical"}),o(N,null,{overlay:a(()=>[o(z,{class:"antd-more"},{default:a(()=>[o(F,null,{default:a(()=>[u("a",{onClick:le=>G(h)},"\u8BE6\u60C5",8,Ae)]),_:2},1024),o(F,null,{default:a(()=>[o(D(fe),{title:"\u786E\u5B9A\u5220\u9664\u5417?",onConfirm:()=>Y(h.id)},{default:a(()=>[ze]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[u("a",je,[v("\u66F4\u591A "),o(ae,{type:"down"})])]),_:2},1024)]),default:a(()=>[u("template",be,[u("div",{innerHTML:e.text},null,8,De)])]),_:1},8,["columns","dataSource","pagination","loading","rowSelection"])]),o(xe,{ref_key:"oneProtogenesisModal",ref:p,onOk:E},null,512)]),_:1})}}});export{lt as default};