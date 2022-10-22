import{_ as X,P as at,n as rt,p as C,L as q,r as it,Z as B,c as R,i as K,l as O,s as F,u as J,a as nt,b as lt,d as Q,t as U,f as j,G as I,g as vt,h as gt,C as ot,j as st,k as ut,S as tt,m as et,o as ht,q as ct}from"./echarts.6d32f04e.js";var dt=function(){function w(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0}return w}(),yt=function(w){X(r,w);function r(t){var i=w.call(this,t)||this;return i.type="pointer",i}return r.prototype.getDefaultShape=function(){return new dt},r.prototype.buildPath=function(t,i){var y=Math.cos,g=Math.sin,e=i.r,h=i.width,v=i.angle,x=i.x-y(v)*h*(h>=e/3?1:2),m=i.y-g(v)*h*(h>=e/3?1:2);v=i.angle-Math.PI/2,t.moveTo(x,m),t.lineTo(i.x+y(v)*h,i.y+g(v)*h),t.lineTo(i.x+y(i.angle)*e,i.y+g(i.angle)*e),t.lineTo(i.x-y(v)*h,i.y-g(v)*h),t.lineTo(x,m)},r}(at),mt=yt;function ft(w,r){var t=w.get("center"),i=r.getWidth(),y=r.getHeight(),g=Math.min(i,y),e=C(t[0],r.getWidth()),h=C(t[1],r.getHeight()),v=C(w.get("radius"),g/2);return{cx:e,cy:h,r:v}}function Z(w,r){var t=w==null?"":w+"";return r&&(st(r)?t=r.replace("{value}",t):ut(r)&&(t=r(w))),t}var pt=function(w){X(r,w);function r(){var t=w!==null&&w.apply(this,arguments)||this;return t.type=r.type,t}return r.prototype.render=function(t,i,y){this.group.removeAll();var g=t.get(["axisLine","lineStyle","color"]),e=ft(t,y);this._renderMain(t,i,y,g,e),this._data=t.getData()},r.prototype.dispose=function(){},r.prototype._renderMain=function(t,i,y,g,e){var h=this.group,v=t.get("clockwise"),x=-t.get("startAngle")/180*Math.PI,m=-t.get("endAngle")/180*Math.PI,L=t.getModel("axisLine"),V=L.get("roundCap"),T=V?tt:et,f=L.get("show"),N=L.getModel("lineStyle"),_=N.get("width"),c=[x,m];rt(c,!v),x=c[0],m=c[1];for(var n=m-x,M=x,b=0;f&&b<g.length;b++){var G=Math.min(Math.max(g[b][0],0),1);m=x+n*G;var P=new T({shape:{startAngle:M,endAngle:m,cx:e.cx,cy:e.cy,clockwise:v,r0:e.r-_,r:e.r},silent:!0});P.setStyle({fill:g[b][1]}),P.setStyle(N.getLineStyle(["color","width"])),h.add(P),M=m}var k=function(E){if(E<=0)return g[0][1];var D;for(D=0;D<g.length;D++)if(g[D][0]>=E&&(D===0?0:g[D-1][0])<E)return g[D][1];return g[D-1][1]};this._renderTicks(t,i,y,k,e,x,m,v,_),this._renderTitleAndDetail(t,i,y,k,e),this._renderAnchor(t,e),this._renderPointer(t,i,y,k,e,x,m,v,_)},r.prototype._renderTicks=function(t,i,y,g,e,h,v,x,m){for(var L=this.group,V=e.cx,T=e.cy,f=e.r,N=+t.get("min"),_=+t.get("max"),c=t.getModel("splitLine"),n=t.getModel("axisTick"),M=t.getModel("axisLabel"),b=t.get("splitNumber"),G=n.get("splitNumber"),P=C(c.get("length"),f),k=C(n.get("length"),f),E=h,D=(v-h)/b,a=D/G,d=c.getModel("lineStyle").getLineStyle(),S=n.getModel("lineStyle").getLineStyle(),p=c.get("distance"),o,s,l=0;l<=b;l++){if(o=Math.cos(E),s=Math.sin(E),c.get("show")){var u=p?p+m:m,A=new q({shape:{x1:o*(f-u)+V,y1:s*(f-u)+T,x2:o*(f-P-u)+V,y2:s*(f-P-u)+T},style:d,silent:!0});d.stroke==="auto"&&A.setStyle({stroke:g(l/b)}),L.add(A)}if(M.get("show")){var u=M.get("distance")+p,z=Z(it(l/b*(_-N)+N),M.get("formatter")),H=g(l/b);L.add(new B({style:R(M,{text:z,x:o*(f-P-u)+V,y:s*(f-P-u)+T,verticalAlign:s<-.8?"top":s>.8?"bottom":"middle",align:o<-.4?"left":o>.4?"right":"center"},{inheritColor:H}),silent:!0}))}if(n.get("show")&&l!==b){var u=n.get("distance");u=u?u+m:m;for(var W=0;W<=G;W++){o=Math.cos(E),s=Math.sin(E);var $=new q({shape:{x1:o*(f-u)+V,y1:s*(f-u)+T,x2:o*(f-k-u)+V,y2:s*(f-k-u)+T},silent:!0,style:S});S.stroke==="auto"&&$.setStyle({stroke:g((l+W/G)/b)}),L.add($),E+=a}E-=a}else E+=D}},r.prototype._renderPointer=function(t,i,y,g,e,h,v,x,m){var L=this.group,V=this._data,T=this._progressEls,f=[],N=t.get(["pointer","show"]),_=t.getModel("progress"),c=_.get("show"),n=t.getData(),M=n.mapDimension("value"),b=+t.get("min"),G=+t.get("max"),P=[b,G],k=[h,v];function E(a,d){var S=n.getItemModel(a),p=S.getModel("pointer"),o=C(p.get("width"),e.r),s=C(p.get("length"),e.r),l=t.get(["pointer","icon"]),u=p.get("offsetCenter"),A=C(u[0],e.r),z=C(u[1],e.r),H=p.get("keepAspect"),W;return l?W=j(l,A-o/2,z-s,o,s,null,H):W=new mt({shape:{angle:-Math.PI/2,width:o,r:s,x:A,y:z}}),W.rotation=-(d+Math.PI/2),W.x=e.cx,W.y=e.cy,W}function D(a,d){var S=_.get("roundCap"),p=S?tt:et,o=_.get("overlap"),s=o?_.get("width"):m/n.count(),l=o?e.r-s:e.r-(a+1)*s,u=o?e.r:e.r-a*s,A=new p({shape:{startAngle:h,endAngle:d,cx:e.cx,cy:e.cy,clockwise:x,r0:l,r:u}});return o&&(A.z2=G-n.get(M,a)%G),A}(c||N)&&(n.diff(V).add(function(a){var d=n.get(M,a);if(N){var S=E(a,h);K(S,{rotation:-((isNaN(+d)?k[0]:O(d,P,k,!0))+Math.PI/2)},t),L.add(S),n.setItemGraphicEl(a,S)}if(c){var p=D(a,h),o=_.get("clip");K(p,{shape:{endAngle:O(d,P,k,o)}},t),L.add(p),F(t.seriesIndex,n.dataType,a,p),f[a]=p}}).update(function(a,d){var S=n.get(M,a);if(N){var p=V.getItemGraphicEl(d),o=p?p.rotation:h,s=E(a,o);s.rotation=o,J(s,{rotation:-((isNaN(+S)?k[0]:O(S,P,k,!0))+Math.PI/2)},t),L.add(s),n.setItemGraphicEl(a,s)}if(c){var l=T[d],u=l?l.shape.endAngle:h,A=D(a,u),z=_.get("clip");J(A,{shape:{endAngle:O(S,P,k,z)}},t),L.add(A),F(t.seriesIndex,n.dataType,a,A),f[a]=A}}).execute(),n.each(function(a){var d=n.getItemModel(a),S=d.getModel("emphasis"),p=S.get("focus"),o=S.get("blurScope"),s=S.get("disabled");if(N){var l=n.getItemGraphicEl(a),u=n.getItemVisual(a,"style"),A=u.fill;if(l instanceof nt){var z=l.style;l.useStyle(lt({image:z.image,x:z.x,y:z.y,width:z.width,height:z.height},u))}else l.useStyle(u),l.type!=="pointer"&&l.setColor(A);l.setStyle(d.getModel(["pointer","itemStyle"]).getItemStyle()),l.style.fill==="auto"&&l.setStyle("fill",g(O(n.get(M,a),P,[0,1],!0))),l.z2EmphasisLift=0,Q(l,d),U(l,p,o,s)}if(c){var H=f[a];H.useStyle(n.getItemVisual(a,"style")),H.setStyle(d.getModel(["progress","itemStyle"]).getItemStyle()),H.z2EmphasisLift=0,Q(H,d),U(H,p,o,s)}}),this._progressEls=f)},r.prototype._renderAnchor=function(t,i){var y=t.getModel("anchor"),g=y.get("show");if(g){var e=y.get("size"),h=y.get("icon"),v=y.get("offsetCenter"),x=y.get("keepAspect"),m=j(h,i.cx-e/2+C(v[0],i.r),i.cy-e/2+C(v[1],i.r),e,e,null,x);m.z2=y.get("showAbove")?1:0,m.setStyle(y.getModel("itemStyle").getItemStyle()),this.group.add(m)}},r.prototype._renderTitleAndDetail=function(t,i,y,g,e){var h=this,v=t.getData(),x=v.mapDimension("value"),m=+t.get("min"),L=+t.get("max"),V=new I,T=[],f=[],N=t.isAnimationEnabled(),_=t.get(["pointer","showAbove"]);v.diff(this._data).add(function(c){T[c]=new B({silent:!0}),f[c]=new B({silent:!0})}).update(function(c,n){T[c]=h._titleEls[n],f[c]=h._detailEls[n]}).execute(),v.each(function(c){var n=v.getItemModel(c),M=v.get(x,c),b=new I,G=g(O(M,[m,L],[0,1],!0)),P=n.getModel("title");if(P.get("show")){var k=P.get("offsetCenter"),E=e.cx+C(k[0],e.r),D=e.cy+C(k[1],e.r),a=T[c];a.attr({z2:_?0:2,style:R(P,{x:E,y:D,text:v.getName(c),align:"center",verticalAlign:"middle"},{inheritColor:G})}),b.add(a)}var d=n.getModel("detail");if(d.get("show")){var S=d.get("offsetCenter"),p=e.cx+C(S[0],e.r),o=e.cy+C(S[1],e.r),s=C(d.get("width"),e.r),l=C(d.get("height"),e.r),u=t.get(["progress","show"])?v.getItemVisual(c,"style").fill:G,a=f[c],A=d.get("formatter");a.attr({z2:_?0:2,style:R(d,{x:p,y:o,text:Z(M,A),width:isNaN(s)?null:s,height:isNaN(l)?null:l,align:"center",verticalAlign:"middle"},{inheritColor:u})}),vt(a,{normal:d},M,function(H){return Z(H,A)}),N&&gt(a,c,v,t,{getFormattedLabel:function(H,W,$,bt,Pt,Y){return Z(Y?Y.interpolatedValue:M,A)}}),b.add(a)}V.add(b)}),this.group.add(V),this._titleEls=T,this._detailEls=f},r.type="gauge",r}(ot),wt=pt,St=function(w){X(r,w);function r(){var t=w!==null&&w.apply(this,arguments)||this;return t.type=r.type,t.visualStyleAccessPath="itemStyle",t}return r.prototype.getInitialData=function(t,i){return ht(this,["value"])},r.type="series.gauge",r.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,"#E6EBF8"]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:"#63677A",width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:"#63677A",width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:"#464646",fontSize:12},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:"#fff",borderWidth:0,borderColor:"#5470c6"}},title:{show:!0,offsetCenter:[0,"20%"],color:"#464646",fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"#464646",fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},r}(ct),At=St;function Mt(w){w.registerChartView(wt),w.registerSeriesModel(At)}export{Mt as i};
