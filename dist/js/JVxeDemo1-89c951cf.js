var T=(V,u,n)=>new Promise((f,_)=>{var C=s=>{try{b(n.next(s))}catch(h){_(h)}},k=s=>{try{b(n.throw(s))}catch(h){_(h)}},b=s=>s.done?f(s.value):Promise.resolve(s.value).then(C,k);b((n=n.apply(V,u)).next())});import{d as O,l as y,V as w,a7 as U,a8 as X,f as a,aa as l,E as r,ad as x,ae as Z,u as W,F as z}from"./vue-ebecda47.js";import{bv as K,e as Q}from"./antd-vue-vendor-b75e8c06.js";import{ak as i,s as ee,am as te}from"./index-85cfc899.js";import{C as le}from"./jeecg-online-vendor-cfb58502.js";import{r as d}from"./lodash-es-vendor-cd7703c8.js";import"./tinymce-vendor-7c917b36.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";const ae={style:{padding:"20px"}},oe=["onClick"],ne=x("a",null,"删除",-1),_e=O({__name:"JVxeDemo1",setup(V){const{createMessage:u}=le(),n=y(),f=y(!1),_=y(!1),C=y([{title:"ID",key:"id",type:i.hidden},{title:"不可编辑",key:"noEdit",type:i.normal,width:180,defaultValue:"noEdit-new"},{title:"单行文本",key:"input",type:i.input,width:180,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]*$/,message:"必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler({cellValue:e,row:o,column:t},c,m){e==="abc"?c(!1,"${title}不能是abc"):c(!0)},message:"${title}默认提示"}]},{title:"多行文本",key:"textarea",type:i.textarea,width:200},{title:"数字",key:"number",type:i.inputNumber,width:80,defaultValue:32,statistics:["sum","average"]},{title:"下拉框",key:"select",type:i.select,width:180,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowSearch:!0,placeholder:"请选择"},{title:"下拉框_字典",key:"select_dict",type:i.select,width:180,options:[],dictCode:"sex",placeholder:"请选择"},{title:"下拉框_多选",key:"select_multiple",type:i.selectMultiple,width:205,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"多选"},{title:"下拉框_搜索",key:"select_search",type:i.selectSearch,width:180,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}]},{title:"日期时间",key:"datetime",type:i.datetime,width:200,defaultValue:"2019-04-30 14:52:22",placeholder:"请选择"},{title:"时间",key:"time",type:i.time,width:200,defaultValue:"14:52:22",placeholder:"请选择"},{title:"复选框",key:"checkbox",type:i.checkbox,width:100,customValue:["Y","N"],defaultChecked:!1},{title:"操作",key:"action",type:i.slot,fixed:"right",minWidth:120,align:"center",slotName:"myAction"}]),k=y([]);function b(e,o,t=!1){t&&(f.value=!0);let c=()=>{let v=d(1e3,9999999999999);return Q(new Date(v)).format("YYYY-MM-DD HH:mm:ss")},m=(e-1)*o,g=["string","int","double","boolean"],D=Date.now(),p=[];for(let v=0;v<o;v++)p.push({id:ee(),noEdit:`noEdit-${m+v+1}`,input:`text-${m+v+1}`,textarea:`textarea-${m+v+1}`,number:d(0,233),select:g[d(0,3)],select_dict:d(1,2).toString(),select_multiple:(()=>{let L=d(1,4),$=[];for(let N=0;N<L;N++)te($,g[d(0,3)]);return $.join(",")})(),select_search:g[d(0,3)],datetime:c(),checkbox:["Y","N"][d(0,1)]});k.value=p;let R=Date.now()-D;t&&R<o&&setTimeout(()=>f.value=!1,o-R)}b(0,20,!0);function s(e){u.success("请在控制台查看输出")}function h(e){return T(this,null,function*(){var t;const o=yield(t=n.value)==null?void 0:t.removeRows(e.row,!0)})}function A(e){}function B(e){}function E(){n.value.validateTable().then(e=>{e?u.error("验证未通过，请在控制台查看详细"):u.success("验证通过")})}function I(){const e=n.value.getTableData();u.success("获取值成功，请看控制台输出")}function M(){b(1,1e3,!0)}function Y(){const o=n.value.getXTable().getTableData().fullData[0];n.value.removeRows(o)}function j(){n.value.getXTable().removeCheckboxRow()}function J(){u.info("请看控制台")}function F(){n.value.clearSelection()}function H(){f.value=!f.value}function P(){_.value=!_.value}function q(e){let o;return new Promise(t=>{Array.isArray(e)?o=e.filter(c=>c.id):o=e.id,setTimeout(()=>t(!0),1500)})}function G(e){return T(this,null,function*(){const o=u.loading("删除中…",0);try{(yield q(e.deleteRows))?(yield e.confirmRemove(),u.success("删除成功！")):u.warn("删除失败！")}finally{o()}})}return(e,o)=>{const t=w("a-button"),c=w("a-space"),m=w("a-tooltip"),g=w("a-divider"),D=w("JVxeTable");return U(),X(z,null,[a(c,null,{default:l(()=>[a(t,{onClick:H},{default:l(()=>[r("切换加载")]),_:1}),a(t,{onClick:P},{default:l(()=>[r("切换禁用")]),_:1})]),_:1}),a(D,{ref_key:"tableRef",ref:n,stripe:"",toolbar:"",rowNumber:"",rowSelection:"",rowExpand:"",resizable:"",asyncRemove:"",clickSelectRow:"",height:480,checkboxConfig:{range:!0},disabledRows:{input:["text--16","text--18"]},loading:f.value,disabled:_.value,columns:C.value,dataSource:k.value,onRemoved:G,onValueChange:A,onBlur:B},{toolbarSuffix:l(()=>[a(t,{onClick:E},{default:l(()=>[r("表单验证")]),_:1}),a(m,{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0},{default:l(()=>[a(t,{onClick:I},{default:l(()=>[r("获取数据")]),_:1})]),_:1}),a(m,{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0},{default:l(()=>[a(t,{onClick:M},{default:l(()=>[r("设置值")]),_:1})]),_:1}),a(t,{onClick:J},{default:l(()=>[r("获取选中数据")]),_:1}),a(t,{onClick:F},{default:l(()=>[r("清空选中")]),_:1}),a(t,{onClick:Y},{default:l(()=>[r("删除第一行数据")]),_:1}),a(t,{onClick:j},{default:l(()=>[r("删除选中数据")]),_:1})]),expandContent:l(p=>[x("div",ae,[x("span",null,"Hello! My name is: "+Z(p.row.input)+"!",1)])]),myAction:l(p=>[x("a",{onClick:S=>s(p)},"查看",8,oe),a(g,{type:"vertical"}),a(W(K),{title:"确定删除吗？",onConfirm:S=>h(p)},{default:l(()=>[ne]),_:2},1032,["onConfirm"])]),_:1},8,["loading","disabled","columns","dataSource"])],64)}}});export{_e as default};