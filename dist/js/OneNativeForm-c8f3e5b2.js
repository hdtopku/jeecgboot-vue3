var S=(q,x,C)=>new Promise((a,g)=>{var _=p=>{try{b(C.next(p))}catch(s){g(s)}},j=p=>{try{b(C.throw(p))}catch(s){g(s)}},b=p=>p.done?a(p.value):Promise.resolve(p.value).then(_,j);b((C=C.apply(q,x)).next())});import{d as R,r as M,l as z,V as f,a7 as V,ac as B,aa as o,f as e,af as i,u as n,n as L}from"./vue-ebecda47.js";import{C as Q,aP as Z,ap as G,_ as K}from"./jeecg-online-vendor-cfb58502.js";import{bJ as X,c2 as h}from"./antd-vue-vendor-b75e8c06.js";import{J as c}from"./index-85cfc899.js";import{t as P,g as ee,_ as le,b as ae,j as ue,u as oe,i as re,c as pe,d as se,s as te,r as ne,e as de,p as ie,J as ve,a as fe,h as me,f as Ce,Q as be,k as we}from"./JAddInput-64f6e84f.js";import{_ as ge}from"./JUpload-ffe34816.js";import{d as ze}from"./JPopup-f9a8bda3.js";import{o as _e}from"./JSelectDept-394df716.js";import{n as xe}from"./JSelectUser-94adcf4d.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./areaDataUtil-4a5c6609.js";import"./useFormItem-ba20c4de.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./index-be9b0972.js";const je=R({__name:"OneNativeForm",emits:["register","ok"],setup(q,{expose:x,emit:C}){const a=M({name:"",miMa:"",ywzz:"",xiala:"",danxuan:"",duoxuan:"",riqi:"",shijian:"",wenjian:"",tupian:"",dhwb:"",xlss:"",popup:"",flzds:"",yhxz:"",fwb:"",shq:"",ldzje:"",ldzjs:"",zddtjxl:"",yongHu:"",zhiWu:"",jueSe:"",zdys:"",jssq:"",zdbxl:"",zdmrz:"",jsonParam:"",bmxz:"",yuanjia:"",nyrsfm:""}),{createMessage:g}=Q(),_=z(),j=h.useForm,b=M({duplicateCheck:"/sys/duplicate/check",add:"/test/jeecgDemo/oneNative/add",edit:"/test/jeecgDemo/oneNative/edit"}),p=z({xs:{span:24},sm:{span:5}}),s=z({xs:{span:24},sm:{span:16}}),y=z(!1),U={name:[{required:!1,message:"请输入文本!"}],miMa:[{required:!1,message:"请输入密码!"}],ywzz:[{required:!1},{pattern:"^[a-z|A-Z]{2,10}$",message:"不符合校验规则!"}],xiala:[{required:!1,message:"请选择下拉组件!"}],danxuan:[{required:!1,message:"请选择单选组件!"}],duoxuan:[{required:!1,message:"请选择多选组件!"}],riqi:[{required:!1,message:"请选择日期!"}],shijian:[{required:!1,message:"请选择时间!"}],wenjian:[{required:!1,message:"请上传文件!"}],tupian:[{required:!1,message:"请上传图片!"}],dhwb:[{required:!1,message:"请填写多行文本!"}],xlss:[{required:!1,message:"请选择字典下拉搜索!"}],popup:[{required:!1,message:"请选择popup弹窗!"}],flzds:[{required:!1,message:"请选择分类字典树!"}],yhxz:[{required:!1,message:"请选择用户!"}],fwb:[{required:!1,message:"请填写富文本!"}],shq:[{required:!1,message:"请选择省市级!"}],ldzje:[{required:!1,message:"请输入JInputPop!"}],ldzjs:[{required:!1,message:"请选择下拉输入框!"}],zddtjxl:[{required:!1,message:"请选择多选输入框!"}],yongHu:[{required:!1,message:"请选择用户!"}],zhiWu:[{required:!1,message:"请选择职务!"}],jueSe:[{required:!1,message:"请选择角色!"}],zdys:[{required:!1,message:"请选择自定义树!"}],jssq:[{required:!1,message:"请选择三级联动!"}],zdbxl:[{required:!1,message:"请选择JTreeDict!"}],zdmrz:[{required:!1,message:"请输入JCodeEditor!"}],jsonParam:[{required:!1,message:"请输入参数!"}],bmxz:[{required:!1,message:"请选择部门!"}],yuanjia:[{required:!1,message:"请输入数值!"}],nyrsfm:[{required:!1,message:"请选择年月日时分秒!"}]},{resetFields:F,validate:Y,validateInfos:d}=j(a,U,{immediate:!1}),D=z([{label:"男",value:"1"},{label:"女",value:"2"}]);function I(){k({})}function k(v){L(()=>{F(),Object.assign(a,v)})}function T(){return S(this,null,function*(){yield Y(),y.value=!0;let v="",l="",w=a;w.id?(v+=b.edit,l="put"):(v+=b.add,l="post");for(let r in a)a[r]instanceof Array&&Z(_.value.getProps,r)==="string"&&(a[r]=a[r].join(","));G.request({url:v,params:w,method:l},{isTransformResponse:!1}).then(r=>{r.success?(g.success(r.message),C("ok")):g.warning(r.message)}).finally(()=>{y.value=!1})})}function ye(v){Object.assign(a,v)}function H(v){Object.keys(v).map(l=>{a[l]=v[l]})}function m(v,l){a[v]=l}return x({add:I,edit:k,submitForm:T}),(v,l)=>{const w=f("a-input"),r=f("a-form-item"),t=f("a-col"),O=f("a-input-password"),J=f("a-date-picker"),N=f("a-textarea"),W=f("a-input-number"),$=f("a-row"),A=f("a-form"),E=f("a-spin");return V(),B(E,{spinning:y.value},{default:o(()=>[e(A,{class:"antd-modal-form",ref_key:"formRef",ref:_,model:a,rules:U},{default:o(()=>[e($,null,{default:o(()=>[e(t,{span:24},{default:o(()=>[e(r,i({label:"文本",labelCol:p.value,wrapperCol:s.value},n(d).name),{default:o(()=>[e(w,{value:a.name,"onUpdate:value":l[0]||(l[0]=u=>a.name=u),placeholder:"请输入文本"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"密码",labelCol:p.value,wrapperCol:s.value},n(d).miMa),{default:o(()=>[e(O,{value:a.miMa,"onUpdate:value":l[1]||(l[1]=u=>a.miMa=u),placeholder:"请输入密码"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"字典下拉",labelCol:p.value,wrapperCol:s.value},n(d).xiala),{default:o(()=>[e(P,{type:"select",value:a.xiala,"onUpdate:value":l[2]||(l[2]=u=>a.xiala=u),dictCode:"sex",placeholder:"请选择字典下拉"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"字典单选",labelCol:p.value,wrapperCol:s.value},n(d).danxuan),{default:o(()=>[e(P,{type:"radio",value:a.danxuan,"onUpdate:value":l[3]||(l[3]=u=>a.danxuan=u),dictCode:"sex",placeholder:"请选择字典单选"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"字典多选",labelCol:p.value,wrapperCol:s.value},n(d).duoxuan),{default:o(()=>[e(ee,{value:a.duoxuan,"onUpdate:value":l[4]||(l[4]=u=>a.duoxuan=u),dictCode:"urgent_level",placeholder:"请选择字典多选"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"开关",labelCol:p.value,wrapperCol:s.value},n(d).kaiguan),{default:o(()=>[e(le,{value:a.kaiguan,"onUpdate:value":l[5]||(l[5]=u=>a.kaiguan=u),options:["1","0"]},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"日期",labelCol:p.value,wrapperCol:s.value},n(d).riqi),{default:o(()=>[e(J,{placeholder:"请选择日期",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",value:a.riqi,"onUpdate:value":l[6]||(l[6]=u=>a.riqi=u),style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"年月日时分秒",labelCol:p.value,wrapperCol:s.value},n(d).nyrsfm),{default:o(()=>[e(J,{"show-time":"",value:a.nyrsfm,"onUpdate:value":l[7]||(l[7]=u=>a.nyrsfm=u),style:{width:"100%"},valueFormat:"YYYY-MM-DD HH:mm:ss"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"时间",labelCol:p.value,wrapperCol:s.value},n(d).shijian),{default:o(()=>[e(n(X),{placeholder:"请选择时间",value:a.shijian,"onUpdate:value":l[8]||(l[8]=u=>a.shijian=u),style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"文件",labelCol:p.value,wrapperCol:s.value},n(d).wenjian),{default:o(()=>[e(ge,{value:a.wenjian,"onUpdate:value":l[9]||(l[9]=u=>a.wenjian=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"图片",labelCol:p.value,wrapperCol:s.value},n(d).tupian),{default:o(()=>[e(ae,{fileMax:2,value:a.tupian,"onUpdate:value":l[10]||(l[10]=u=>a.tupian=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"多行文本框",labelCol:p.value,wrapperCol:s.value},n(d).dhwb),{default:o(()=>[e(N,{value:a.dhwb,"onUpdate:value":l[11]||(l[11]=u=>a.dhwb=u),rows:"4",placeholder:"请输入多行文本框"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"字典表下拉搜索框",labelCol:p.value,wrapperCol:s.value},n(d).xlss),{default:o(()=>[e(ue,{value:a.xlss,"onUpdate:value":l[12]||(l[12]=u=>a.xlss=u),dict:"sys_user,realname,username"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"popup弹窗",labelCol:p.value,wrapperCol:s.value},n(d).popup),{default:o(()=>[e(ze,{value:a.popup,"onUpdate:value":l[13]||(l[13]=u=>a.popup=u),fieldConfig:[{source:"name",target:"popup"},{source:"id",target:"popback"}],code:"report_user",multi:!0,setFieldsValue:H},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"popback",labelCol:p.value,wrapperCol:s.value},n(d).popback),{default:o(()=>[e(w,{value:a.popback,"onUpdate:value":l[14]||(l[14]=u=>a.popback=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"分类字典树",labelCol:p.value,wrapperCol:s.value},n(d).flzds),{default:o(()=>[e(oe,{onChange:l[15]||(l[15]=u=>m("flzds",u)),value:a.flzds,"onUpdate:value":l[16]||(l[16]=u=>a.flzds=u),pcode:"B02",placeholder:"请选择分类字典树"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"部门选择",labelCol:p.value,wrapperCol:s.value},n(d).bmxz),{default:o(()=>[e(_e,{value:a.bmxz,"onUpdate:value":l[17]||(l[17]=u=>a.bmxz=u),multi:!0,type:"array"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"用户选择",labelCol:p.value,wrapperCol:s.value},n(d).yhxz),{default:o(()=>[e(re,{value:a.yhxz,"onUpdate:value":l[18]||(l[18]=u=>a.yhxz=u),multi:!0},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"富文本",labelCol:p.value,wrapperCol:s.value},n(d).fwb),{default:o(()=>[e(pe,{value:a.fwb,"onUpdate:value":l[19]||(l[19]=u=>a.fwb=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"markdown",labelCol:p.value,wrapperCol:s.value},n(d).markdownString),{default:o(()=>[e(se,{value:a.markdownString,"onUpdate:value":l[20]||(l[20]=u=>a.markdownString=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"省市区JAreaSelect",labelCol:p.value,wrapperCol:s.value},n(d).shq),{default:o(()=>[e(te,{value:a.shq,"onUpdate:value":l[21]||(l[21]=u=>a.shq=u),placeholder:"请输入省市区"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"省市区JAreaLinkage",labelCol:p.value,wrapperCol:s.value},n(d).jssq),{default:o(()=>[e(ne,{value:a.jssq,"onUpdate:value":l[22]||(l[22]=u=>a.jssq=u),placeholder:"请输入省市区"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JInputPop",labelCol:p.value,wrapperCol:s.value},n(d).ldzje),{default:o(()=>[e(c,{value:a.ldzje,"onUpdate:value":l[23]||(l[23]=u=>a.ldzje=u),placeholder:"请输入JInputPop",onChange:l[24]||(l[24]=u=>m("ldzje",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JSelectInput",labelCol:p.value,wrapperCol:s.value},n(d).ldzjs),{default:o(()=>[e(de,{value:a.ldzjs,"onUpdate:value":l[25]||(l[25]=u=>a.ldzjs=u),placeholder:"请选择JSelectInput",options:D.value,onChange:l[26]||(l[26]=u=>m("ldzjs",u))},null,8,["value","options"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"下拉多选",labelCol:p.value,wrapperCol:s.value},n(d).zddtjxl),{default:o(()=>[e(ie,{value:a.zddtjxl,"onUpdate:value":l[27]||(l[27]=u=>a.zddtjxl=u),placeholder:"请选择下拉多选",dictCode:"sex"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"用户",labelCol:p.value,wrapperCol:s.value},n(d).yongHu),{default:o(()=>[e(xe,{value:a.yongHu,"onUpdate:value":l[28]||(l[28]=u=>a.yongHu=u),placeholder:"请选择用户"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"职务",labelCol:p.value,wrapperCol:s.value},n(d).zhiWu),{default:o(()=>[e(ve,{value:a.zhiWu,"onUpdate:value":l[29]||(l[29]=u=>a.zhiWu=u),placeholder:"请选择职务",onChange:l[30]||(l[30]=u=>m("zhiWu",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"角色",labelCol:p.value,wrapperCol:s.value},n(d).jueSe),{default:o(()=>[e(fe,{value:a.jueSe,"onUpdate:value":l[31]||(l[31]=u=>a.jueSe=u),placeholder:"请选择角色",onChange:l[32]||(l[32]=u=>m("jueSe",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"自定义树",labelCol:p.value,wrapperCol:s.value},n(d).zdys),{default:o(()=>[e(me,{ref:"treeSelect",placeholder:"请选择自定义树",value:a.zdys,"onUpdate:value":l[33]||(l[33]=u=>a.zdys=u),dict:"sys_category,name,id",pidValue:"0",loadTriggleChange:""},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"数值",labelCol:p.value,wrapperCol:s.value},n(d).yuanjia),{default:o(()=>[e(W,{value:a.yuanjia,"onUpdate:value":l[34]||(l[34]=u=>a.yuanjia=u),placeholder:"请输入double类型",style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"输入2到10位的字母",labelCol:p.value,wrapperCol:s.value},n(d).ywzz),{default:o(()=>[e(w,{value:a.ywzz,"onUpdate:value":l[35]||(l[35]=u=>a.ywzz=u),placeholder:"请输入2到10位的字母"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JTreeDict",labelCol:p.value,wrapperCol:s.value},n(d).zdbxl),{default:o(()=>[e(Ce,{value:a.zdbxl,"onUpdate:value":l[36]||(l[36]=u=>a.zdbxl=u),placeholder:"请选择JTreeDict",onChange:l[37]||(l[37]=u=>m("zdbxl",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JCodeEditor",labelCol:p.value,wrapperCol:s.value},n(d).zdmrz),{default:o(()=>[e(be,{value:a.zdmrz,"onUpdate:value":l[38]||(l[38]=u=>a.zdmrz=u),placeholder:"请输入JCodeEditor",onChange:l[39]||(l[39]=u=>m("zdmrz",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"参数",labelCol:p.value,wrapperCol:s.value},n(d).jsonParam),{default:o(()=>[e(we,{value:a.jsonParam,"onUpdate:value":l[40]||(l[40]=u=>a.jsonParam=u),placeholder:"参数"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}});const ce=K(je,[["__scopeId","data-v-19e06482"]]);export{ce as default};