(this["webpackJsonpmotivation-board"]=this["webpackJsonpmotivation-board"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(29),s=a.n(n),c=(a(42),a(37)),l=(a(43),a(44),a(16)),o=a(1),i=function(e){var t=e.values.map((function(t,a){return Object(o.jsx)("div",{className:"point",children:Object(o.jsx)("span",{className:"point__number",style:{left:100*t/e.maxValue+"%"},children:t})},a)}));return Object(o.jsx)("div",{className:"x-axis",children:t})};function u(e){var t=e.records,a=e.pointsValues,r=e.totalGoal,n=e.planMarkerPos,s=t.map((function(e){var n=100*e.value/Math.max.apply(Math,Object(l.a)(a))+"%",s=e.value;if(0===Number(e.value))return null;t.length>1&&(s=(100*s/r).toFixed(2)+"%");var c=t.length>1?"rotate(-90deg)":"rotate(0deg)";return Object(o.jsx)("div",{className:"progressbar__item",style:{backgroundColor:e.color,width:n},children:Object(o.jsx)("span",{className:"progressbar__value",style:{transform:c},children:s})},e.name)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"progressbar-wrapper",style:{margin:"7rem 0",position:"relative"},children:[1===t.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"name",children:t[0].name}),Object(o.jsxs)("div",{className:"percentage",children:[Object(o.jsx)("div",{children:"7.5%"}),Object(o.jsx)("div",{children:"10%"}),Object(o.jsx)("div",{children:"13%"})]})]}),Object(o.jsxs)("div",{className:"progressbar",children:[s,Object(o.jsx)("div",{className:"plan-marker",style:{left:n}})]}),Object(o.jsx)(i,{values:a,maxValue:Math.max.apply(Math,Object(l.a)(a))})]})})}i.defaultProps={values:[5e4,1e5,15e4,2e5,25e4]};var p=a(14),m=a.n(p),j=a(30),d=a(31),b=a.n(d).a.create({baseURL:"https://kapri-server.herokuapp.com"}),h=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://online.moysklad.ru/api/remap/1.2/report/profit/byemployee?momentFrom=2021-03-01 00:00:01 ",e.next=3,b.post("/",{link:"https://online.moysklad.ru/api/remap/1.2/report/profit/byemployee?momentFrom=2021-03-01 00:00:01 "});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=a(78),x=[35e3,5e4,67e3,1e5],f=[5e4,1e5,15e4,2e5,25e4,3e5];function O(e){var t=Object(r.useState)([]),a=Object(c.a)(t,2),n=a[0],s=a[1],l=["#e4a21f","#437fb7","#3b8c13"],i=2e5,p=n.length?i/n.length:0;return Object(r.useEffect)((function(){h().then((function(e){var t=e.map((function(e,t){var a=l[t];return{name:e.employee.name,value:+(e.sellSum/100).toFixed(0),color:a}})).sort((function(e,t){return t.value-e.value}));s(t)}))}),[]),n.length?Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)(v.a,{})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{goal:i,records:n,planMarkerPos:2e7/3e5+"%",pointsValues:f,totalGoal:i}),n.map((function(e){return Object(o.jsx)(u,{records:[e],pointsValues:x,totalGoal:p,planMarkerPos:100*p/Math.max.apply(Math,x)+"%"},e.name)}))]})}s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.cf4a35df.chunk.js.map