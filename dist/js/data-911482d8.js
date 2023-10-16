import{A as a,J as t}from"./index-7711d1b4.js";const{isDisabledAuth:r,hasPermission:d,initBpmFormData:o}=a(),c=[{title:"订单号",dataIndex:"orderCode",width:260},{title:"订单类型",dataIndex:"ctype",slots:{customRender:"ctype"}},{title:"订单日期",dataIndex:"orderDate",width:300},{title:"订单金额",width:200,dataIndex:"orderMoney"},{title:"订单备注",width:200,dataIndex:"content"},{title:"流程状态",width:200,dataIndex:"bpmStatus",customRender:({text:e})=>!e||e=="1"?"待提交":e=="2"?"处理中":e=="2"?"已完成":e}];function s(e){return o(e),[{label:"订单号",field:"orderCode",component:"Input",show:({values:l})=>d("order:orderCode")},{label:"订单类型",field:"ctype",component:"Select",componentProps:{options:[{label:"国内订单",value:"1",key:"1"},{label:"国际订单",value:"2",key:"2"}]}},{label:"订单日期",field:"orderDate",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}},{label:"订单金额",field:"orderMoney",component:"Input"},{label:"订单备注",field:"content",component:"Input"}]}function m(e){return o(e),[{label:"客户名",field:"name",component:"Input",dynamicDisabled:({values:l})=>r("order:name")},{label:"性别",field:"sex",component:"Select",componentProps:{options:[{label:"男",value:"1",key:"1"},{label:"女",value:"2",key:"2"}]}},{label:"身份证号",field:"idcard",component:"Input"},{label:"手机号",field:"telphone",component:"Input"}]}const p=[{title:"航班号",key:"ticketCode",width:180,type:t.input,placeholder:"请输入${title}",defaultValue:""},{title:"航班时间",key:"tickectDate",width:180,type:t.date,placeholder:"请选择${title}",defaultValue:""}];export{s as a,c,m as g,p as j};