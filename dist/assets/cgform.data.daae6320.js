import{b as l,f7 as u,a_ as s}from"./index.b3d2a891.js";const a="validate-failed",o=[{title:"\u8868\u7C7B\u578B",align:"center",sorter:!0,dataIndex:"tableType",width:140,customRender({text:d,record:e}){let i=l("cgform_table_type"),t=u(i,d);return e.isTree==="Y"&&(t+="(\u6811)"),e.themeTemplate==="innerTable"?t+="(\u5185\u5D4C)":e.themeTemplate==="erp"?t+="(ERP)":e.themeTemplate==="tab"&&(t+="(TAB)"),t}},{title:"\u8868\u540D",sorter:!0,align:"center",dataIndex:"tableName",width:240},{title:"\u8868\u63CF\u8FF0",align:"center",dataIndex:"tableTxt",width:220},{title:"\u7248\u672C",align:"center",dataIndex:"tableVersion",width:120},{title:"\u540C\u6B65\u72B6\u6001",align:"center",sorter:!0,dataIndex:"isDbSynch",slots:{customRender:"dbSync"},width:120},{title:"\u521B\u5EFA\u65F6\u95F4",align:"center",sorter:!0,dataIndex:"createTime",width:240}],b=[{label:"\u8868\u540D",field:"tableName",component:"JInput"},{label:"\u8868\u7C7B\u578B",field:"tableType_MultiString",component:"JDictSelectTag",componentProps:{dictCode:"cgform_table_type",mode:"multiple"}},{label:"\u8868\u63CF\u8FF0",field:"tableTxt",component:"JInput"}],r={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:"",commentStatus:0};function h(){let d=[{dbFieldName:"id",dbFieldTxt:"\u4E3B\u952E",dbLength:36,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"1",dbIsNull:"0",isShowForm:"0",isShowList:"0",isReadOnly:"1",fieldShowType:"text",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"create_by",dbFieldTxt:"\u521B\u5EFA\u4EBA",dbLength:50,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"text",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"create_time",dbFieldTxt:"\u521B\u5EFA\u65E5\u671F",dbLength:0,dbPointLength:0,dbDefaultVal:"",dbType:"Datetime",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"datetime",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"update_by",dbFieldTxt:"\u66F4\u65B0\u4EBA",dbLength:50,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"text",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"update_time",dbFieldTxt:"\u66F4\u65B0\u65E5\u671F",dbLength:0,dbPointLength:0,dbDefaultVal:"",dbType:"Datetime",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"datetime",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"sys_org_code",dbFieldTxt:"\u6240\u5C5E\u90E8\u95E8",dbLength:64,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"text",fieldLength:"120",queryMode:"single",dbIsSync:"1"}],e=[];return d.forEach(i=>{i.id=s(),e.push(i.id)}),{initialData:d,tempIds:e}}function y(){return[{dbFieldName:"pid",dbFieldTxt:"\u7236\u7EA7\u8282\u70B9",dbLength:32,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"0",dbIsNull:"1",isShowForm:"1",isShowList:"0",fieldShowType:"text",fieldLength:"120",queryMode:"single",dbIsSync:"1"},{dbFieldName:"has_child",dbFieldTxt:"\u662F\u5426\u6709\u5B50\u8282\u70B9",dbLength:3,dbPointLength:0,dbDefaultVal:"",dbType:"string",dbIsKey:"0",dbIsNull:"1",isShowForm:"0",isShowList:"0",fieldShowType:"list",fieldLength:"120",queryMode:"single",dictField:"yn",dbIsSync:"1"}]}const m=[{code:"add",title:"\u65B0\u589E",status:0},{code:"edit",title:"\u7F16\u8F91",status:0},{code:"delete",title:"\u5220\u9664",status:0},{code:"export",title:"\u5BFC\u51FA",status:0},{code:"import",title:"\u5BFC\u5165",status:0},{code:"query",title:"\u67E5\u8BE2",status:0}];export{r as E,a as V,y as a,o as c,m as o,b as s,h as u};
