(this["webpackJsonpmotivation-board"]=this["webpackJsonpmotivation-board"]||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(18),s=t.n(n),c=(t(82),t(43)),o=(t(83),t(84),t(48)),i=t(6),l=function(e){var a=e.values.map((function(a,t){return Object(i.jsx)("div",{className:"point",children:Object(i.jsx)("span",{className:"point__number",style:{left:100*a/e.maxValue+"%"},children:a})},t)}));return Object(i.jsx)("div",{className:"x-axis",children:a})};l.defaultProps={values:[5e4,1e5,15e4,2e5,25e4]};var u=t.p+"static/media/fire.42d52aef.gif";function m(e){var a=e.records,t=e.pointsValues,r=e.totalGoal,n=e.planMarkerPos,s=e.bestManager,c=e.commonBar,m=a.map((function(e){var n=100*e.value/Math.max.apply(Math,Object(o.a)(t))+"%",s=e.value;if(0===Number(e.value))return null;a.length>1&&(s=(100*s/r).toFixed(2)+"%");var l=c?"rotate(-90deg)":"rotate(0deg)";return Object(i.jsx)("div",{className:"progressbar__item",style:{backgroundColor:e.color,width:n},children:Object(i.jsx)("span",{className:"progressbar__value",style:{transform:l},children:s})},e.name)}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"progressbar-wrapper",style:{margin:"7rem 0",position:"relative"},children:[!c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"name",children:[s&&Object(i.jsx)("img",{className:"fire-icon",src:u,alt:"firing..."}),a[0].name]}),Object(i.jsxs)("div",{className:"percentage",children:[Object(i.jsx)("div",{children:"7.5%"}),Object(i.jsx)("div",{children:"10%"}),Object(i.jsx)("div",{children:"13%"})]})]}),Object(i.jsxs)("div",{className:"progressbar",children:[m,Object(i.jsx)("div",{className:"plan-marker",style:{left:n}})]}),Object(i.jsx)(l,{values:t,maxValue:Math.max.apply(Math,Object(o.a)(t))})]})})}var j=t(45),p=t.n(j),b=t(62),d=t(63),h=t.n(d),v=t(19),f=t.n(v),O=h.a.create({baseURL:"https://kapri-server.herokuapp.com"}),x=function(){var e=Object(b.a)(p.a.mark((function e(a){var t,r,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(new f.a(a).startOf("month").format("YYYY-MM-DD")," 00:00:00"),r="".concat(new f.a(t).endOf("month").format("YYYY-MM-DD")," 23:59:59"),n="https://online.moysklad.ru/api/remap/1.2/report/profit/byemployee?momentFrom=".concat(t,"&momentTo=").concat(r),e.next=5,O.post("/",{link:n});case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g=t(120),M=t(121),y=[35e3,5e4,67e3,1e5],k=[5e4,1e5,15e4,2e5,25e4,3e5];function N(){var e=Object(r.useState)([]),a=Object(c.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)(new Date),o=Object(c.a)(s,2),l=o[0],u=o[1],j=Object(r.useState)(!1),p=Object(c.a)(j,2),b=p[0],d=p[1],h=["#e4a21f","#437fb7","#3b8c13","purple","orangered"],v=2e5,f=t.length?v/t.length:0;return Object(r.useEffect)((function(){d(!0),x(l).then((function(e){var a=e.map((function(e,a){var t=h[a];return{name:e.employee.name,value:+(e.sellSum/100).toFixed(0),color:t}})).sort((function(e,a){return a.value-e.value}));n(a),d(!1)}))}),[l]),b?Object(i.jsx)("div",{className:"spinner",children:Object(i.jsx)(g.a,{})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(M.a,{onChange:function(e){u(e)},picker:"month"}),Object(i.jsx)(m,{goal:v,records:t,commonBar:!0,planMarkerPos:2e7/3e5+"%",pointsValues:k,totalGoal:v}),t.map((function(e,a){return Object(i.jsx)(m,{bestManager:0===a,records:[e],pointsValues:y,totalGoal:f,planMarkerPos:100*f/Math.max.apply(Math,y)+"%"},e.name)}))]})}s.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))},82:function(e,a,t){},83:function(e,a,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.74a23140.chunk.js.map