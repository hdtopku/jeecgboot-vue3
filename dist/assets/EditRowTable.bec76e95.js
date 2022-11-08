var e=(e,t,i)=>new Promise(((o,n)=>{var a=e=>{try{l(i.next(e))}catch(t){n(t)}},d=e=>{try{l(i.throw(e))}catch(t){n(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,d);l((i=i.apply(e,t)).next())}));import{B as t}from"./BasicTable.0748ea8a.js";import{T as i}from"./helper.1c9dc9a5.js";import"./TableImg.e204e8e3.js";import{u as o}from"./useTable.6359f662.js";import{o as n}from"./select.ba0488c9.js";import{d as a}from"./table.cb3ffb97.js";import{t as d}from"./tree.69c81654.js";import{q as l,l as s,F as r,t as m,v as c,x as p,y as u,z as b,aX as f,u as j}from"./index.435ab247.js";import"./BasicForm.d9f6c231.js";import"./uniqBy.91f18935.js";import"./index.e1e06dd6.js";import"./BasicModal.c66de981.js";import"./useWindowSizeFn.3d5b1a05.js";import"./useForm.45d68074.js";import"./JAddInput.8c125e2c.js";import"./useFormItem.816007c4.js";import"./api.bc301b0f.js";import"./props.5467b933.js";import"./index.713dc63d.js";import"./bem.0e923c54.js";import"./props.37836c63.js";import"./useContextMenu.82ce6d89.js";import"./index.e1ec35e6.js";import"./onMountedOrActivated.e9ddbd41.js";import"./index.627c6cd3.js";import"./htmlmixed.749cbc8c.js";import"./vue.f62dfd4a.js";/* empty css             */import"./depart.api.c07add53.js";import"./index.4cdbd2ab.js";import"./useContentHeight.60ff243a.js";import"./useContentViewHeight.f55d8457.js";import"./usePageContext.56c44530.js";import"./RedoOutlined.9fc7613c.js";import"./functional.be5901d6.js";import"./download.5dc68cfb.js";import"./base64Conver.030fa32c.js";import"./index.a5502478.js";import"./index.64086148.js";import"./useCountdown.adc4ab77.js";import"./JUpload.e164672b.js";import"./index.cdc49bf1.js";const v=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>e(void 0,null,(function*(){return"2"===t?"不能输入该值":""}))},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:n,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:d,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:100}],w=s({components:{BasicTable:t,TableAction:i},setup(){const{createMessage:t}=j(),i=r(""),[n]=o({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:a,columns:v,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function d(e){var t;i.value=e.key,null==(t=e.onEdit)||t.call(e,!0)}function l(e){var t;i.value="",null==(t=e.onEdit)||t.call(e,!1,!1)}function s(o){return e(this,null,(function*(){var e,n;t.loading({content:"正在保存...",duration:0,key:"saving"});if(yield null==(e=o.onValid)?void 0:e.call(o))try{f(o.editValueRefs);(yield null==(n=o.onEdit)?void 0:n.call(o,!1,!0))&&(i.value=""),t.success({content:"数据已保存",key:"saving"})}catch(a){t.error({content:"保存失败",key:"saving"})}else t.error({content:"请填写正确的数据",key:"saving"})}))}return{registerTable:n,handleEdit:d,createActions:function(e,t){return e.editable?[{label:"保存",onClick:s.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:l.bind(null,e,t)}}]:[{label:"编辑",disabled:!!i.value&&i.value!==e.key,onClick:d.bind(null,e)}]},onEditChange:function({column:e,value:t,record:i}){"id"===e.dataIndex&&(i.editValueRefs.name4.value=`${t}`)}}}}),x={class:"p-4"};var h=l(w,[["render",function(e,t,i,o,n,a){const d=m("TableAction"),l=m("BasicTable");return c(),p("div",x,[u(l,{onRegister:e.registerTable,onEditChange:e.onEditChange},{action:b((({record:t,column:i})=>[u(d,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"])])}]]);export{h as default};