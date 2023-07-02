"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{3849:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,o,i,c,s,u,p=e(9439),d=e(7689),l=e(2791),h=e(4765),f=e(2571),m=e(168),x=e(1087),v=e(6444),g=v.ZP.div(r||(r=(0,m.Z)(["\ndisplay: inline-block;\n"]))),b=(0,v.ZP)(x.rU)(a||(a=(0,m.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: tomato;\n  font-weight: 500;\n  \n  :hover {\n    text-transform: uppercase;\n    text-decoration: dashed;\n  }\n"]))),w=v.ZP.p(o||(o=(0,m.Z)(["\nmargin: 0;\nmargin-bottom: 10px;\nbackground-color: white;\nopacity: 0.95;\n"]))),j=v.ZP.h3(i||(i=(0,m.Z)(["\nmargin-top: 10px;\nborder-bottom: 2px solid tomato;\nmargin-bottom: 10px;\n"]))),Z=v.ZP.h4(c||(c=(0,m.Z)(["\nmargin-top: 10px;\nborder-bottom: 2px solid tomato;\nmargin-bottom: 10px; \n"]))),k=v.ZP.div(s||(s=(0,m.Z)(["\nwidth: 960px;\nborder-bottom: 2px solid tomato;\nmargin-bottom: 10px;\n"]))),y=e(8617),_=(0,v.ZP)(x.rU)(u||(u=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),P=e(184),U=function(n){var t=n.to,e=n.children;return(0,P.jsxs)(_,{to:t,children:[(0,P.jsx)(y.jTe,{size:"24"}),e]})},z=function(){var n,t,e=(0,l.useState)(null),r=(0,p.Z)(e,2),a=r[0],o=r[1],i=(0,d.TH)(),c=null!==(n=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",s=(0,d.UO)().id;if((0,l.useEffect)((function(){(0,h.s_)(s).then((function(n){o(n)}))}),[s]),!a)return(0,P.jsxs)("div",{children:[(0,P.jsx)("h1",{children:"Something went wrong..."}),(0,P.jsx)("img",{src:f.Hi,alt:"bad search"})]});var u=a.genres.map((function(n){return n.name+" "}));return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(U,{to:c,children:"GO BACK"}),(0,P.jsx)("img",{src:f.j9+a.poster_path,alt:"",width:"150px"}),null===a.poster_path&&(0,P.jsx)("img",{src:f.MY,alt:"",width:"150px"}),(0,P.jsx)(j,{children:a.original_title}),(0,P.jsxs)(w,{children:["User Score: ",Math.round(a.popularity)," points"]}),(0,P.jsx)(Z,{children:"Overview"}),(0,P.jsx)(w,{children:a.overview}),""===a.overview&&(0,P.jsx)("p",{children:"We don`t have any overview for this movie."}),(0,P.jsx)(Z,{children:"Genres"}),(0,P.jsx)(w,{children:u}),(0,P.jsxs)(g,{children:[(0,P.jsx)(k,{children:(0,P.jsx)("h4",{children:"Additional information"})}),(0,P.jsx)(b,{to:"cast",state:{from:i.state.from},children:"Cast"}),(0,P.jsx)(b,{to:"reviews",state:{from:i.state.from},children:"Reviews"}),(0,P.jsx)(d.j3,{})]})]})}},4765:function(n,t,e){e.d(t,{Df:function(){return p},IQ:function(){return h},Jh:function(){return f},gH:function(){return d},s_:function(){return l}});var r=e(5861),a=e(4687),o=e.n(a),i=e(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d7b62bbeb6d4f73491b6f9e9927a7e28",s="language=en-US",u="page=1&include_adult=false",p=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&").concat(s,"&query=").concat(t,"&").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(c,"&").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&").concat(s,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2571:function(n,t,e){e.d(t,{Hi:function(){return o},MY:function(){return a},j9:function(){return r}});var r="https://image.tmdb.org/t/p/w400",a="https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg",o="https://ilifes.ru/wp-content/uploads/2018/04/can-dogs-eat-popcorn-1.jpg"}}]);
//# sourceMappingURL=849.c8189951.chunk.js.map