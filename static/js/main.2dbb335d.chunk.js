(this["webpackJsonpbackbase-react"]=this["webpackJsonpbackbase-react"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={ADD_CITY:"ADD_CITY",OPEN_WEATHER_FORECAST:"OPEN_WEATHER_FORECAST",CLOSE_WEATHER_FORECAST:"CLOSE_WEATHER_FORECAST"}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(8),c=n(43),r=n.n(c),i=n(1);function s(e){for(var t=e.count,n=e.width,c=e.wrapper,s=e.height,l=e.circle,o=e.style,u=e.className,d=[],b=0;b<t;b++){var j={};null!==n&&(j.width=n),null!==s&&(j.height=s),null!==n&&null!==s&&l&&(j.borderRadius="50%");var h=r.a.skeleton;u&&(h+=" "+u),d.push(Object(i.jsx)("span",{className:h,style:Object(a.a)(Object(a.a)({},o),j),children:"\u200c"},b))}return Object(i.jsx)("span",{children:c?d.map((function(e,t){return Object(i.jsxs)(c,{children:[e,"\u200c"]},t)})):d})}s.defaultProps={count:1,width:null,wrapper:null,height:null,circle:!1,style:{},className:""}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(11),c=function(e){return{type:a.a.ADD_CITY,payload:{city:e}}},r=function(e,t,n){return{type:a.a.OPEN_WEATHER_FORECAST,payload:{lon:e,lat:t,name:n}}},i=function(){return{type:a.a.CLOSE_WEATHER_FORECAST}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(45),c=n(17),r=n.n(c).a.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"d91fa5e792320c4bd3a18bb475e1c7ea"}}),i=Object(a.a)({axios:r})},43:function(e,t,n){e.exports={skeleton:"Skeleton_skeleton__8yEY-","background-animation":"Skeleton_background-animation__YOnS0"}},50:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),s=(n(50),n(8)),l=n(13),o=n(3),u=n(28),d=n(30),b=n(1);function j(){return Object(b.jsx)("div",{className:"row",children:[1,2,3,4,5,6].map((function(e){return Object(b.jsx)("div",{className:"col-md-4 mb-4",children:Object(b.jsx)(d.a,{height:"170px"})},"page-skeleton-".concat(e))}))})}var h={fallback:Object(b.jsx)(j,{})},O=Object(u.a)((function(){return n.e(3).then(n.bind(null,85))}),h),f=Object(u.a)((function(){return n.e(4).then(n.bind(null,83))}),h),p="/dashboard",m=[{path:"/dashboard",component:function(){return Object(b.jsx)(O,{})}},{path:"/about",component:function(){return Object(b.jsx)(f,{})}}];function x(){return Object(b.jsx)("div",{children:"This is Not Found"})}var v=n(10),y="SET_UNITS";function E(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.weather.units}));return Object(b.jsx)("nav",{className:"navbar navbar-expand navbar-light navbar-weather",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(l.b,{className:"navbar-brand text-brand text-primary",to:"/",children:"City Weather App"}),Object(b.jsxs)("div",{className:"d-flex",children:["F\xb0",Object(b.jsx)("div",{className:"form-check form-switch ms-2",children:Object(b.jsx)("input",{name:"unit",className:"form-check-input",type:"checkbox",checked:"metric"===t,onChange:function(t){t.target.checked?e({type:y,payload:{units:"metric"}}):e({type:y,payload:{units:"imperial"}})}})}),"C\xb0"]})]})})}function N(){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("ul",{className:"nav justify-content-center",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.c,{className:"nav-link",to:"/dashboard",children:"Dashboard"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.c,{className:"nav-link",to:"/about",children:"About Me"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"https://efriandika.github.io/backbase-react",target:"_blank",rel:"noreferrer",children:"Live Demo"})})]}),Object(b.jsxs)("div",{className:"footer-text",children:["Made with ",Object(b.jsx)("i",{className:"bi bi-heart",role:"img","aria-label":"Love"})," for Backbase Interview Assignment."]}),Object(b.jsx)("div",{className:"author",children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/efriandika/",target:"_blank",rel:"noreferrer",children:"Efriandika Pratama"})})]})}var g=n(31),k=n(20),w=n.n(k),C=n(33),_=n(29),T=n(42);function A(e){e.className;var t=e.units,n=e.lon,c=e.lat,r=e.name,i=Object(T.a)({},{manual:!0}),s=Object(_.a)(i,3),l=s[0],o=(l.data,l.loading,s[1]),u=s[2];function d(){return(d=Object(C.a)(w.a.mark((function e(n,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o({url:"/onecall",params:{lat:n,lon:a,units:t,exclude:"minutely,daily,alerts"}})}catch(c){alert("Failed to get Skeleton Data from the server!")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(e,t){d.apply(this,arguments)}(c,n),function(){return u()}}),[c,n]),Object(b.jsx)("div",{children:r})}function S(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.app.drawer})),n=Object(v.c)((function(e){return e.app.selectedCity})),a=Object(v.c)((function(e){return e.weather.selectedCity}));function c(){e(Object(g.b)())}return Object(b.jsxs)("div",{className:"drawer ".concat(t?"open":""),children:[Object(b.jsx)("div",{className:"drawer-overlay",onClick:c}),Object(b.jsxs)("div",{className:"drawer-content",children:[Object(b.jsx)("button",{type:"button",className:"btn-close",onClick:c,children:Object(b.jsx)("i",{className:"bi bi-x"})}),n?Object(b.jsx)(A,{lat:n.lat,lon:n.lon,name:n.name,units:a}):Object(b.jsx)("div",{children:"There is no city selected"})]})]})}function R(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{}),Object(b.jsx)("div",{className:"layout-content",children:t}),Object(b.jsx)(N,{}),Object(b.jsx)(S,{})]})}A.defaultProps={className:"",units:"metric"};var F=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)(o.d,{children:[m.map((function(e,t){return Object(b.jsx)(o.b,{path:e.path,exact:e.exact,render:function(t){return e.layout?Object(b.jsx)(e.layout,Object(s.a)(Object(s.a)({},t),{},{children:Object(b.jsx)(e.component,Object(s.a)({},t))})):Object(b.jsx)(R,Object(s.a)(Object(s.a)({},t),{},{children:Object(b.jsx)(e.component,Object(s.a)({},t))}))}},t)})),Object(b.jsx)(o.a,{from:"/",to:p,exact:!0}),Object(b.jsx)(o.b,{path:"*",component:x})]})})},D=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},L=n(22),I=n(23),P=n(11);function W(e,t){return Object.assign({},e,t)}var H,Y={drawer:!1,selectedCity:null,cities:["Amsterdam","Dublin,IE","Edinburgh","Manchester","London"]},M={units:"metric"},B=Object(I.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.a.ADD_CITY:return W(e,{drawer:!1,cities:[].concat(Object(L.a)(e.cities),[t.payload.city])});case P.a.OPEN_WEATHER_FORECAST:return W(e,{drawer:!0,selectedCity:{lon:t.payload.lon,lat:t.payload.lat,name:t.payload.name}});case P.a.CLOSE_WEATHER_FORECAST:return W(e,{drawer:!1,selectedCity:null});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return W(e,{units:t.payload.units});default:return e}}}),J=function(e){return I.a.apply(void 0,Object(L.a)(e))},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return H=Object(I.c)(B,e,J([]))},q=function(e){var t,n=null!==(t=H)&&void 0!==t?t:U(e);return e&&H&&(n=U(Object(s.a)(Object(s.a)({},H.getState()),e)),H=void 0),"undefined"===typeof window||H||(H=n),n}();i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v.a,{store:q,children:Object(b.jsx)(F,{})})}),document.getElementById("root")),D(console.log)}},[[79,1,2]]]);
//# sourceMappingURL=main.2dbb335d.chunk.js.map