import{t as p}from"./index-7711d1b4.js";import{b as o}from"./jeecg-online-vendor-59c8fbe3.js";import{M as c}from"./antd-vue-vendor-a78909e6.js";import{render as m}from"./renderUtils-dfee8dc4.js";import{n as h}from"./vue-bcbaddf9.js";const R=e=>o.get({url:"/sys/permission/list",params:e}),g=(e,n)=>o.delete({url:"/sys/permission/delete",params:e},{joinParamsToUrl:!0}).then(()=>{n()}),V=(e,n)=>{c.confirm({title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>o.delete({url:"/sys/permission/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{n()})})},x=(e,n)=>{let l=n?"/sys/permission/edit":"/sys/permission/add";return o.post({url:l,params:e})},v=e=>o.get({url:"/sys/permission/queryPermissionRule",params:e}),q=(e,n)=>{let l=n?"/sys/permission/editPermissionRule":"/sys/permission/addPermissionRule";return o.post({url:l,params:e})},F=(e,n)=>o.delete({url:"/sys/permission/deletePermissionRule",params:e},{joinParamsToUrl:!0}).then(()=>{n()}),f=e=>o.get({url:`/sys/dict/getDictItems/${e.code}`}),b=e=>o.get({url:"/sys/permission/checkPermDuplication",params:e},{isTransformResponse:!1}),y=(e,n,l)=>[{validator:(u,r)=>!r&&l?Promise.reject(`请输入${n.label}`):new Promise((i,s)=>{b({id:e.id,url:e.url,alwaysShow:e.alwaysShow}).then(a=>{a.success?i():s(a.message||"校验失败")}).catch(a=>{s(a.message||"验证失败")})})}],d=e=>e===0,w=e=>e===1,t=e=>e===2;var S=(e=>(e.Default="layouts/default/index",e.IFrame="sys/iframe/FrameBlank",e))(S||{});const D=[{title:"菜单名称",dataIndex:"name",width:200,align:"left"},{title:"菜单类型",dataIndex:"menuType",width:150,customRender:({text:e})=>m.renderDict(e,"menu_type")},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>h(p,{icon:e.icon})},{title:"组件",dataIndex:"component",align:"left",width:150},{title:"路径",dataIndex:"url",align:"left",width:150},{title:"排序",dataIndex:"sortNo",width:50}],N=[{field:"name",label:"菜单名称",component:"Input",colProps:{span:8}}],B=[{label:"id",field:"id",component:"Input",show:!1},{field:"menuType",label:"菜单类型",component:"RadioButtonGroup",defaultValue:0,componentProps:({formActionType:e,formModel:n})=>({options:[{label:"一级菜单",value:0},{label:"子菜单",value:1},{label:"按钮/权限",value:2}],onChange:l=>{const{updateSchema:u,clearValidate:r}=e,i=t(l)?"按钮/权限":"菜单名称";r(),u([{field:"name",label:i},{field:"url",required:!t(l)}]),w(l)&&!n.id&&n.component=="layouts/RouteView"&&(n.component="")}})},{field:"name",label:"菜单名称",component:"Input",required:!0},{field:"parentId",label:"上级菜单",component:"TreeSelect",required:!0,componentProps:{replaceFields:{title:"name",key:"id",value:"id"},dropdownStyle:{maxHeight:"50vh"},getPopupContainer:e=>e.parentNode},ifShow:({values:e})=>!d(e.menuType)},{field:"url",label:"访问路径",component:"Input",required:!0,ifShow:({values:e})=>!(e.component==="sys/iframe/FrameBlank"&&e.internalOrExternal)&&e.menuType!==2,dynamicRules:({model:e,schema:n})=>y(e,n,!0)},{field:"component",label:"前端组件",component:"Input",componentProps:{placeholder:"请输入前端组件"},defaultValue:"layouts/RouteView",required:!0,ifShow:({values:e})=>!t(e.menuType)},{field:"componentName",label:"组件名称",component:"Input",componentProps:{placeholder:"请输入组件名称"},helpMessage:["此处名称应和vue组件的name属性保持一致。","组件名称不能重复，主要用于路由缓存功能。","如果组件名称和vue组件的name属性不一致，则会导致路由缓存失效。","非必填，留空则会根据访问路径自动生成。"],defaultValue:"",ifShow:({values:e})=>!t(e.menuType)},{field:"frameSrc",label:"Iframe地址",component:"Input",rules:[{required:!0,message:"请输入Iframe地址"},{type:"url",message:"请输入正确的url地址"}],ifShow:({values:e})=>!t(e.menuType)&&e.component==="sys/iframe/FrameBlank"},{field:"redirect",label:"默认跳转地址",component:"Input",ifShow:({values:e})=>d(e.menuType)},{field:"perms",label:"授权标识",component:"Input",ifShow:({values:e})=>t(e.menuType)},{field:"permsType",label:"授权策略",component:"RadioGroup",defaultValue:"1",helpMessage:["可见/可访问(授权后可见/可访问)","可编辑(未授权时禁用)"],componentProps:{options:[{label:"可见/可访问",value:"1"},{label:"可编辑",value:"2"}]},ifShow:({values:e})=>t(e.menuType)},{field:"status",label:"状态",component:"RadioGroup",defaultValue:"1",componentProps:{options:[{label:"有效",value:"1"},{label:"无效",value:"0"}]},ifShow:({values:e})=>t(e.menuType)},{field:"icon",label:"菜单图标",component:"IconPicker",ifShow:({values:e})=>!t(e.menuType)},{field:"sortNo",label:"排序",component:"InputNumber",defaultValue:1,ifShow:({values:e})=>!t(e.menuType)},{field:"route",label:"是否路由菜单",component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"是",unCheckedChildren:"否"},ifShow:({values:e})=>!t(e.menuType)},{field:"hidden",label:"隐藏路由",component:"Switch",defaultValue:0,componentProps:{checkedChildren:"是",unCheckedChildren:"否"},ifShow:({values:e})=>!t(e.menuType)},{field:"hideTab",label:"隐藏Tab",component:"Switch",defaultValue:0,componentProps:{checkedChildren:"是",unCheckedChildren:"否"},ifShow:({values:e})=>!t(e.menuType)},{field:"keepAlive",label:"是否缓存路由",component:"Switch",defaultValue:!1,componentProps:{checkedChildren:"是",unCheckedChildren:"否"},ifShow:({values:e})=>!t(e.menuType)},{field:"alwaysShow",label:"聚合路由",component:"Switch",defaultValue:!1,componentProps:{checkedChildren:"是",unCheckedChildren:"否"},ifShow:({values:e})=>!t(e.menuType)},{field:"internalOrExternal",label:"打开方式",component:"Switch",defaultValue:!1,componentProps:{checkedChildren:"外部",unCheckedChildren:"内部"},ifShow:({values:e})=>!t(e.menuType)}],U=[{title:"规则名称",dataIndex:"ruleName",width:150},{title:"规则字段",dataIndex:"ruleColumn",width:100},{title:"规则值",dataIndex:"ruleValue",width:100}],M=[{field:"ruleName",label:"规则名称",component:"Input",colProps:{span:6}},{field:"ruleValue",label:"规则值",component:"Input",colProps:{span:6}}],j=[{label:"id",field:"id",component:"Input",show:!1},{field:"ruleName",label:"规则名称",component:"Input",required:!0},{field:"ruleColumn",label:"规则字段",component:"Input",ifShow:({values:e})=>e.ruleConditions!=="USE_SQL_RULES"},{field:"ruleConditions",label:"条件规则",required:!0,component:"ApiSelect",componentProps:{api:f,params:{code:"rule_conditions"},labelField:"text",valueField:"value",getPopupContainer:e=>document.body}},{field:"ruleValue",label:"规则值",component:"Input",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"1",componentProps:{options:[{label:"无效",value:"0"},{label:"有效",value:"1"}]}}];export{S as C,U as a,M as b,F as c,v as d,j as e,B as f,x as g,D as h,N as i,V as j,g as k,R as l,q as s};