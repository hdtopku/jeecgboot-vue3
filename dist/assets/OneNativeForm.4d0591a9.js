var A=(x,g,m)=>new Promise((a,F)=>{var E=p=>{try{b(m.next(p))}catch(s){F(s)}},z=p=>{try{b(m.throw(p))}catch(s){F(s)}},b=p=>p.done?a(p.value):Promise.resolve(p.value).then(E,z);b((m=m.apply(x,g)).next())});import{j as W,a8 as U,C as B,a7 as R,r as v,s as V,Q as L,w as o,v as e,x as i,K as n,aH as Z,bT as G,G as K,$ as Q,Z as X,u as h,q as c}from"./index.9d4ffdff.js";import{e as J,p as ee,_ as le,d as ue,s as ae,n as oe,l as re,f as pe,r as se,h as te,i as ne,g as de,J as ie,j as Ce,m as ve,b as fe,a as me,c as be,q as we,o as Fe,k as Be,t as Ee}from"./JAddInput.2d4443c3.js";import{_ as ge}from"./JUpload.vue_vue_type_style_index_0_lang.3d564f34.js";import"./areaDataUtil.d553b295.js";import"./useFormItem.6cd3d92a.js";import"./index.fa33ec21.js";import"./BasicModal.80fe5012.js";import"./useWindowSizeFn.722b7aaa.js";import"./api.d12fe1c3.js";import"./props.b0f6852a.js";import"./index.0991c9be.js";import"./bem.393108ef.js";import"./props.2c136ce5.js";import"./useContextMenu.37312741.js";import"./index.94ebb6f8.js";import"./onMountedOrActivated.1516be09.js";import"./index.1cd463e1.js";import"./htmlmixed.e1e616a1.js";import"./vue.6aa3bd32.js";/* empty css             */import"./depart.api.57d85389.js";import"./MinusCircleOutlined.ffeee554.js";import"./functional.db9e0476.js";const ze=W({__name:"OneNativeForm",emits:["register","ok"],setup(x,{expose:g,emit:m}){const a=U({name:"",miMa:"",ywzz:"",xiala:"",danxuan:"",duoxuan:"",riqi:"",shijian:"",wenjian:"",tupian:"",dhwb:"",xlss:"",popup:"",flzds:"",yhxz:"",fwb:"",shq:"",ldzje:"",ldzjs:"",zddtjxl:"",yongHu:"",zhiWu:"",jueSe:"",zdys:"",jssq:"",zdbxl:"",zdmrz:"",jsonParam:"",bmxz:"",yuanjia:"",nyrsfm:""}),{createMessage:F}=h(),E=B(),z=R.useForm,b=U({duplicateCheck:"/sys/duplicate/check",add:"/test/jeecgDemo/oneNative/add",edit:"/test/jeecgDemo/oneNative/edit"}),p=B({xs:{span:24},sm:{span:5}}),s=B({xs:{span:24},sm:{span:16}}),_=B(!1),j={name:[{required:!1,message:"\u8BF7\u8F93\u5165\u6587\u672C!"}],miMa:[{required:!1,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],ywzz:[{required:!1},{pattern:"^[a-z|A-Z]{2,10}$",message:"\u4E0D\u7B26\u5408\u6821\u9A8C\u89C4\u5219!"}],xiala:[{required:!1,message:"\u8BF7\u9009\u62E9\u4E0B\u62C9\u7EC4\u4EF6!"}],danxuan:[{required:!1,message:"\u8BF7\u9009\u62E9\u5355\u9009\u7EC4\u4EF6!"}],duoxuan:[{required:!1,message:"\u8BF7\u9009\u62E9\u591A\u9009\u7EC4\u4EF6!"}],riqi:[{required:!1,message:"\u8BF7\u9009\u62E9\u65E5\u671F!"}],shijian:[{required:!1,message:"\u8BF7\u9009\u62E9\u65F6\u95F4!"}],wenjian:[{required:!1,message:"\u8BF7\u4E0A\u4F20\u6587\u4EF6!"}],tupian:[{required:!1,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247!"}],dhwb:[{required:!1,message:"\u8BF7\u586B\u5199\u591A\u884C\u6587\u672C!"}],xlss:[{required:!1,message:"\u8BF7\u9009\u62E9\u5B57\u5178\u4E0B\u62C9\u641C\u7D22!"}],popup:[{required:!1,message:"\u8BF7\u9009\u62E9popup\u5F39\u7A97!"}],flzds:[{required:!1,message:"\u8BF7\u9009\u62E9\u5206\u7C7B\u5B57\u5178\u6811!"}],yhxz:[{required:!1,message:"\u8BF7\u9009\u62E9\u7528\u6237!"}],fwb:[{required:!1,message:"\u8BF7\u586B\u5199\u5BCC\u6587\u672C!"}],shq:[{required:!1,message:"\u8BF7\u9009\u62E9\u7701\u5E02\u7EA7!"}],ldzje:[{required:!1,message:"\u8BF7\u8F93\u5165JInputPop!"}],ldzjs:[{required:!1,message:"\u8BF7\u9009\u62E9\u4E0B\u62C9\u8F93\u5165\u6846!"}],zddtjxl:[{required:!1,message:"\u8BF7\u9009\u62E9\u591A\u9009\u8F93\u5165\u6846!"}],yongHu:[{required:!1,message:"\u8BF7\u9009\u62E9\u7528\u6237!"}],zhiWu:[{required:!1,message:"\u8BF7\u9009\u62E9\u804C\u52A1!"}],jueSe:[{required:!1,message:"\u8BF7\u9009\u62E9\u89D2\u8272!"}],zdys:[{required:!1,message:"\u8BF7\u9009\u62E9\u81EA\u5B9A\u4E49\u6811!"}],jssq:[{required:!1,message:"\u8BF7\u9009\u62E9\u4E09\u7EA7\u8054\u52A8!"}],zdbxl:[{required:!1,message:"\u8BF7\u9009\u62E9JTreeDict!"}],zdmrz:[{required:!1,message:"\u8BF7\u8F93\u5165JCodeEditor!"}],jsonParam:[{required:!1,message:"\u8BF7\u8F93\u5165\u53C2\u6570!"}],bmxz:[{required:!1,message:"\u8BF7\u9009\u62E9\u90E8\u95E8!"}],yuanjia:[{required:!1,message:"\u8BF7\u8F93\u5165\u6570\u503C!"}],nyrsfm:[{required:!1,message:"\u8BF7\u9009\u62E9\u5E74\u6708\u65E5\u65F6\u5206\u79D2!"}]},{resetFields:k,validate:D,validateInfos:d}=z(a,j,{immediate:!1}),S=B([{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}]);function M(){y({})}function y(C){K(()=>{k(),Object.assign(a,C)})}function P(){return A(this,null,function*(){yield D(),_.value=!0;let C="",l="",w=a;w.id?(C+=b.edit,l="put"):(C+=b.add,l="post");for(let r in a)a[r]instanceof Array&&Q(E.value.getProps,r)==="string"&&(a[r]=a[r].join(","));X.request({url:C,params:w,method:l},{isTransformResponse:!1}).then(r=>{r.success?(F.success(r.message),m("ok")):F.warning(r.message)}).finally(()=>{_.value=!1})})}function T(C){Object.keys(C).map(l=>{a[l]=C[l]})}function f(C,l){a[C]=l}return g({add:M,edit:y,submitForm:P}),(C,l)=>{const w=v("a-input"),r=v("a-form-item"),t=v("a-col"),Y=v("a-input-password"),q=v("a-date-picker"),I=v("a-textarea"),H=v("a-input-number"),$=v("a-row"),N=v("a-form"),O=v("a-spin");return V(),L(O,{spinning:_.value},{default:o(()=>[e(N,{class:"antd-modal-form",ref_key:"formRef",ref:E,model:a,rules:j},{default:o(()=>[e($,null,{default:o(()=>[e(t,{span:24},{default:o(()=>[e(r,i({label:"\u6587\u672C",labelCol:p.value,wrapperCol:s.value},n(d).name),{default:o(()=>[e(w,{value:a.name,"onUpdate:value":l[0]||(l[0]=u=>a.name=u),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5BC6\u7801",labelCol:p.value,wrapperCol:s.value},n(d).miMa),{default:o(()=>[e(Y,{value:a.miMa,"onUpdate:value":l[1]||(l[1]=u=>a.miMa=u),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5B57\u5178\u4E0B\u62C9",labelCol:p.value,wrapperCol:s.value},n(d).xiala),{default:o(()=>[e(J,{type:"select",value:a.xiala,"onUpdate:value":l[2]||(l[2]=u=>a.xiala=u),dictCode:"sex",placeholder:"\u8BF7\u9009\u62E9\u5B57\u5178\u4E0B\u62C9"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5B57\u5178\u5355\u9009",labelCol:p.value,wrapperCol:s.value},n(d).danxuan),{default:o(()=>[e(J,{type:"radio",value:a.danxuan,"onUpdate:value":l[3]||(l[3]=u=>a.danxuan=u),dictCode:"sex",placeholder:"\u8BF7\u9009\u62E9\u5B57\u5178\u5355\u9009"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5B57\u5178\u591A\u9009",labelCol:p.value,wrapperCol:s.value},n(d).duoxuan),{default:o(()=>[e(ee,{value:a.duoxuan,"onUpdate:value":l[4]||(l[4]=u=>a.duoxuan=u),dictCode:"urgent_level",placeholder:"\u8BF7\u9009\u62E9\u5B57\u5178\u591A\u9009"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5F00\u5173",labelCol:p.value,wrapperCol:s.value},n(d).kaiguan),{default:o(()=>[e(le,{value:a.kaiguan,"onUpdate:value":l[5]||(l[5]=u=>a.kaiguan=u),options:["1","0"]},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u65E5\u671F",labelCol:p.value,wrapperCol:s.value},n(d).riqi),{default:o(()=>[e(q,{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",value:a.riqi,"onUpdate:value":l[6]||(l[6]=u=>a.riqi=u),style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5E74\u6708\u65E5\u65F6\u5206\u79D2",labelCol:p.value,wrapperCol:s.value},n(d).nyrsfm),{default:o(()=>[e(q,{"show-time":"",value:a.nyrsfm,"onUpdate:value":l[7]||(l[7]=u=>a.nyrsfm=u),style:{width:"100%"},valueFormat:"YYYY-MM-DD HH:mm:ss"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u65F6\u95F4",labelCol:p.value,wrapperCol:s.value},n(d).shijian),{default:o(()=>[e(n(Z),{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",value:a.shijian,"onUpdate:value":l[8]||(l[8]=u=>a.shijian=u),style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u6587\u4EF6",labelCol:p.value,wrapperCol:s.value},n(d).wenjian),{default:o(()=>[e(ge,{value:a.wenjian,"onUpdate:value":l[9]||(l[9]=u=>a.wenjian=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u56FE\u7247",labelCol:p.value,wrapperCol:s.value},n(d).tupian),{default:o(()=>[e(ue,{fileMax:2,value:a.tupian,"onUpdate:value":l[10]||(l[10]=u=>a.tupian=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u591A\u884C\u6587\u672C\u6846",labelCol:p.value,wrapperCol:s.value},n(d).dhwb),{default:o(()=>[e(I,{value:a.dhwb,"onUpdate:value":l[11]||(l[11]=u=>a.dhwb=u),rows:"4",placeholder:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C\u6846"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5B57\u5178\u8868\u4E0B\u62C9\u641C\u7D22\u6846",labelCol:p.value,wrapperCol:s.value},n(d).xlss),{default:o(()=>[e(ae,{value:a.xlss,"onUpdate:value":l[12]||(l[12]=u=>a.xlss=u),dict:"sys_user,realname,username"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"popup\u5F39\u7A97",labelCol:p.value,wrapperCol:s.value},n(d).popup),{default:o(()=>[e(oe,{value:a.popup,"onUpdate:value":l[13]||(l[13]=u=>a.popup=u),fieldConfig:[{source:"name",target:"popup"},{source:"id",target:"popback"}],code:"report_user",multi:!0,setFieldsValue:T},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"popback",labelCol:p.value,wrapperCol:s.value},n(d).popback),{default:o(()=>[e(w,{value:a.popback,"onUpdate:value":l[14]||(l[14]=u=>a.popback=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5206\u7C7B\u5B57\u5178\u6811",labelCol:p.value,wrapperCol:s.value},n(d).flzds),{default:o(()=>[e(re,{onChange:l[15]||(l[15]=u=>f("flzds",u)),value:a.flzds,"onUpdate:value":l[16]||(l[16]=u=>a.flzds=u),pcode:"B02",placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B\u5B57\u5178\u6811"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u90E8\u95E8\u9009\u62E9",labelCol:p.value,wrapperCol:s.value},n(d).bmxz),{default:o(()=>[e(pe,{value:a.bmxz,"onUpdate:value":l[17]||(l[17]=u=>a.bmxz=u),multi:!0,type:"array"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u7528\u6237\u9009\u62E9",labelCol:p.value,wrapperCol:s.value},n(d).yhxz),{default:o(()=>[e(se,{value:a.yhxz,"onUpdate:value":l[18]||(l[18]=u=>a.yhxz=u),multi:!0},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u5BCC\u6587\u672C",labelCol:p.value,wrapperCol:s.value},n(d).fwb),{default:o(()=>[e(te,{value:a.fwb,"onUpdate:value":l[19]||(l[19]=u=>a.fwb=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"markdown",labelCol:p.value,wrapperCol:s.value},n(d).markdownString),{default:o(()=>[e(ne,{value:a.markdownString,"onUpdate:value":l[20]||(l[20]=u=>a.markdownString=u)},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u7701\u5E02\u533AJAreaSelect",labelCol:p.value,wrapperCol:s.value},n(d).shq),{default:o(()=>[e(de,{value:a.shq,"onUpdate:value":l[21]||(l[21]=u=>a.shq=u),placeholder:"\u8BF7\u8F93\u5165\u7701\u5E02\u533A"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u7701\u5E02\u533AJAreaLinkage",labelCol:p.value,wrapperCol:s.value},n(d).jssq),{default:o(()=>[e(ie,{value:a.jssq,"onUpdate:value":l[22]||(l[22]=u=>a.jssq=u),placeholder:"\u8BF7\u8F93\u5165\u7701\u5E02\u533A"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JInputPop",labelCol:p.value,wrapperCol:s.value},n(d).ldzje),{default:o(()=>[e(G,{value:a.ldzje,"onUpdate:value":l[23]||(l[23]=u=>a.ldzje=u),placeholder:"\u8BF7\u8F93\u5165JInputPop",onChange:l[24]||(l[24]=u=>f("ldzje",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JSelectInput",labelCol:p.value,wrapperCol:s.value},n(d).ldzjs),{default:o(()=>[e(Ce,{value:a.ldzjs,"onUpdate:value":l[25]||(l[25]=u=>a.ldzjs=u),placeholder:"\u8BF7\u9009\u62E9JSelectInput",options:S.value,onChange:l[26]||(l[26]=u=>f("ldzjs",u))},null,8,["value","options"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u4E0B\u62C9\u591A\u9009",labelCol:p.value,wrapperCol:s.value},n(d).zddtjxl),{default:o(()=>[e(ve,{value:a.zddtjxl,"onUpdate:value":l[27]||(l[27]=u=>a.zddtjxl=u),placeholder:"\u8BF7\u9009\u62E9\u4E0B\u62C9\u591A\u9009",dictCode:"sex"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u7528\u6237",labelCol:p.value,wrapperCol:s.value},n(d).yongHu),{default:o(()=>[e(fe,{value:a.yongHu,"onUpdate:value":l[28]||(l[28]=u=>a.yongHu=u),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u804C\u52A1",labelCol:p.value,wrapperCol:s.value},n(d).zhiWu),{default:o(()=>[e(me,{value:a.zhiWu,"onUpdate:value":l[29]||(l[29]=u=>a.zhiWu=u),placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",onChange:l[30]||(l[30]=u=>f("zhiWu",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u89D2\u8272",labelCol:p.value,wrapperCol:s.value},n(d).jueSe),{default:o(()=>[e(be,{value:a.jueSe,"onUpdate:value":l[31]||(l[31]=u=>a.jueSe=u),placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",onChange:l[32]||(l[32]=u=>f("jueSe",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u81EA\u5B9A\u4E49\u6811",labelCol:p.value,wrapperCol:s.value},n(d).zdys),{default:o(()=>[e(we,{ref:"treeSelect",placeholder:"\u8BF7\u9009\u62E9\u81EA\u5B9A\u4E49\u6811",value:a.zdys,"onUpdate:value":l[33]||(l[33]=u=>a.zdys=u),dict:"sys_category,name,id",pidValue:"0",loadTriggleChange:""},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u6570\u503C",labelCol:p.value,wrapperCol:s.value},n(d).yuanjia),{default:o(()=>[e(H,{value:a.yuanjia,"onUpdate:value":l[34]||(l[34]=u=>a.yuanjia=u),placeholder:"\u8BF7\u8F93\u5165double\u7C7B\u578B",style:{width:"100%"}},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u8F93\u51652\u523010\u4F4D\u7684\u5B57\u6BCD",labelCol:p.value,wrapperCol:s.value},n(d).ywzz),{default:o(()=>[e(w,{value:a.ywzz,"onUpdate:value":l[35]||(l[35]=u=>a.ywzz=u),placeholder:"\u8BF7\u8F93\u51652\u523010\u4F4D\u7684\u5B57\u6BCD"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JTreeDict",labelCol:p.value,wrapperCol:s.value},n(d).zdbxl),{default:o(()=>[e(Fe,{value:a.zdbxl,"onUpdate:value":l[36]||(l[36]=u=>a.zdbxl=u),placeholder:"\u8BF7\u9009\u62E9JTreeDict",onChange:l[37]||(l[37]=u=>f("zdbxl",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"JCodeEditor",labelCol:p.value,wrapperCol:s.value},n(d).zdmrz),{default:o(()=>[e(Be,{value:a.zdmrz,"onUpdate:value":l[38]||(l[38]=u=>a.zdmrz=u),placeholder:"\u8BF7\u8F93\u5165JCodeEditor",onChange:l[39]||(l[39]=u=>f("zdmrz",u))},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(t,{span:24},{default:o(()=>[e(r,i({label:"\u53C2\u6570",labelCol:p.value,wrapperCol:s.value},n(d).jsonParam),{default:o(()=>[e(Ee,{value:a.jsonParam,"onUpdate:value":l[40]||(l[40]=u=>a.jsonParam=u),placeholder:"\u53C2\u6570"},null,8,["value"])]),_:1},16,["labelCol","wrapperCol"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}});const Ze=c(ze,[["__scopeId","data-v-19e06482"]]);export{Ze as default};