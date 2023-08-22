"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[757],{280:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(791),u=n(689),i=n(87),p=n(66),f=n(184),h=function(){var e,t,n=(0,u.UO)().movieId,c=(0,o.useState)(null),h=(0,a.Z)(c,2),v=h[0],l=h[1],d=(0,u.TH)(),w=(0,o.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.fetchMovieDetails(n);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),v?(0,f.jsxs)("div",{children:[(0,f.jsx)(i.rU,{to:w.current,children:"Back"}),(0,f.jsx)("h2",{children:v.title}),(0,f.jsx)("img",{src:"http://image.tmdb.org/t/p/w300".concat(v.poster_path),alt:v.title}),(0,f.jsxs)("p",{children:["Rating: ",v.vote_average]}),(0,f.jsxs)("p",{children:["Overview: ",v.overview]}),(0,f.jsxs)("p",{children:["Genres: ",v.genres.map((function(e){return e.name})).join(", ")]}),(0,f.jsx)(i.rU,{to:"/movies/".concat(n,"/cast"),children:"View Cast"}),(0,f.jsx)(i.rU,{to:"/movies/".concat(n,"/reviews"),children:"View Reviews"}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(u.j3,{})})]}):(0,f.jsx)("p",{children:"Loading..."})}},66:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s="https://api.themoviedb.org/3",o="15da45b97ad657540cf457ee5b3df568";function u(){return(u=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/trending/movie/day?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,n.ok){e.next=10;break}throw new Error("Status code: ".concat(r.status_code,". Status message: ").concat(r.status_message));case 10:return e.abrupt("return",r.results);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/reviews?language=en-US&&page=1&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var v={fetchTrendingMovies:function(){return u.apply(this,arguments)},fetchMoviesByName:function(e){return i.apply(this,arguments)},fetchMovieDetails:function(e){return p.apply(this,arguments)},fetchMovieCredits:function(e){return f.apply(this,arguments)},fetchMovieReviews:function(e){return h.apply(this,arguments)}};t.Z=v},861:function(e,t,n){function r(e,t,n,r,a,c,s){try{var o=e[c](s),u=o.value}catch(i){return void n(i)}o.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function o(e){r(s,a,c,o,u,"next",e)}function u(e){r(s,a,c,o,u,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=757.0fea576f.chunk.js.map