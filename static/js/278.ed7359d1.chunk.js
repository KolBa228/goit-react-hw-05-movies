"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(791),u=n(87),i=n(66),p=n(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,o.useState)([]),f=(0,a.Z)(h,2),l=f[0],v=f[1],d=(0,u.lr)(),w=(0,a.Z)(d,2),m=w[0],x=w[1],g=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.set("movieKeyWord",n),x(m),e.prev=2,e.next=5,i.Z.fetchMoviesByName(n);case 5:t=e.sent,v(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("ASHIBKA",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Search"}),(0,p.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Find movie..."}),(0,p.jsx)("button",{onClick:g,children:"Find"}),(0,p.jsx)("ul",{children:l.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)(u.rU,{to:"/movies/".concat(e.id),children:[(0,p.jsx)("img",{src:"http://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title}),(0,p.jsx)("p",{children:e.title})]})},e.id)}))})]})}},66:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s="https://api.themoviedb.org/3",o="15da45b97ad657540cf457ee5b3df568";function u(){return(u=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/trending/movie/day?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,n.ok){e.next=10;break}throw new Error("Status code: ".concat(r.status_code,". Status message: ").concat(r.status_message));case 10:return e.abrupt("return",r.results);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/reviews?language=en-US&&page=1&api_key=").concat(o),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,r.ok){e.next=10;break}throw new Error("Status code: ".concat(a.status_code,". Status message: ").concat(a.status_message));case 10:return e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var l={fetchTrendingMovies:function(){return u.apply(this,arguments)},fetchMoviesByName:function(e){return i.apply(this,arguments)},fetchMovieDetails:function(e){return p.apply(this,arguments)},fetchMovieCredits:function(e){return h.apply(this,arguments)},fetchMovieReviews:function(e){return f.apply(this,arguments)}};t.Z=l},861:function(e,t,n){function r(e,t,n,r,a,c,s){try{var o=e[c](s),u=o.value}catch(i){return void n(i)}o.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function o(e){r(s,a,c,o,u,"next",e)}function u(e){r(s,a,c,o,u,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=278.ed7359d1.chunk.js.map