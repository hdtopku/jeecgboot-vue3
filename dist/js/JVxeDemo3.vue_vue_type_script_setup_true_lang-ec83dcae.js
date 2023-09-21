import{J as t}from"./index-b03d7914.js";import{u as h}from"./jeecg-online-vendor-ecddc31b.js";import{d as y,k as s,r as c,V as m,a5 as g,a6 as x,f as a,a7 as n,E as o,aa as e}from"./vue-bcbaddf9.js";const k=e("ol",{style:{border:"1px solid #cccccc",width:"600px",padding:"8px"}},[e("li",null,"1. 开启 dragSort 属性之后即可实现上下拖拽排序。"),e("li",null,"2. 使用 sortKey 属性可以自定义排序保存的 key，默认为 orderNum。"),e("li",null,"3. 使用 sortBegin 属性可以自定义排序的起始值，默认为 0。"),e("li",null,"4. sortKey 定义的字段不需要定义在 columns 中也能正常获取到值。"),e("li",null,"5. 当存在 fixed 列时，拖拽排序将会失效，仅能上下排序。")],-1),w=e("p",null,[o(" 以下示例开启了拖拽排序，排序值保存字段为 sortNum，排序起始值为 3"),e("br")],-1),V=e("br",null,null,-1),S=e("p",null,"以下 fixed 表格不支持拖拽排序，仅支持点击上下排序",-1),R=y({__name:"JVxeDemo3",setup(L){const f=s(),p=s(),l=c({columns:[{title:"ID",key:"id",width:120,type:t.normal},{title:"姓名",key:"name",width:240,type:t.input,defaultValue:"new name"},{title:"字段长度",key:"dbLength",width:240,type:t.inputNumber,defaultValue:32},{title:"sortNum",key:"sortNum",width:120,type:t.normal}],data:[{id:"uuid-0001",name:"张三",dbLength:123},{id:"uuid-0002",name:"李四",dbLength:777},{id:"uuid-0003",name:"王五",dbLength:666},{id:"uuid-0004",name:"赵六",dbLength:233}]}),i=c({columns:[{title:"ID",key:"id",width:320,fixed:"left",type:t.normal},{title:"姓名",key:"name",width:720,type:t.input,defaultValue:"new name"},{title:"字段长度",key:"dbLength",width:720,type:t.inputNumber,defaultValue:32}],data:[{id:"uuid-0001",name:"张三",dbLength:123},{id:"uuid-0002",name:"李四",dbLength:777},{id:"uuid-0003",name:"王五",dbLength:666},{id:"uuid-0004",name:"赵六",dbLength:233}]}),{createMessage:d}=h();function b(){d.info("请看控制台")}function _(){d.info("请看控制台")}return(N,B)=>{const u=m("a-button"),r=m("JVxeTable");return g(),x("div",null,[k,w,a(r,{ref_key:"tableRef1",ref:f,toolbar:"",dragSort:"",sortKey:"sortNum",sortBegin:3,rowSelection:"",maxHeight:580,columns:l.columns,dataSource:l.data},{toolbarSuffix:n(()=>[a(u,{onClick:b},{default:n(()=>[o("获取数据")]),_:1})]),_:1},8,["columns","dataSource"]),V,S,a(r,{ref_key:"tableRef2",ref:p,toolbar:"",dragSort:"",rowSelection:"",maxHeight:580,columns:i.columns,dataSource:i.data},{toolbarSuffix:n(()=>[a(u,{onClick:_},{default:n(()=>[o("获取数据")]),_:1})]),_:1},8,["columns","dataSource"])])}}});export{R as _};