_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"19J2":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n("eOhz")}])},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void n(s)}a.done?e(i):Promise.resolve(i).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var c=t.apply(e,n);function a(t){r(c,o,u,a,i,"next",t)}function i(t){r(c,o,u,a,i,"throw",t)}a(void 0)}))}}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},K64n:function(t,e,n){"use strict";e.Headers=self.Headers,e.Request=self.Request,e.Response=self.Response,e.fetch=self.fetch},LpSC:function(t,e,n){n("K64n"),t.exports=self.fetch.bind(self)},"Ph+x":function(t,e,n){function r(t){return console.warn(t),null}n("LpSC"),t.exports={getInfo:function(t){return function(t){return fetch("http://35.194.72.130/api/rank?name=".concat(t)).then((function(t){return t.json()}))}(t).catch(r)}}},eOhz:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),u=n("HaE+"),c=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),s=n("md7G"),f=n("foSv"),l=n("q1tI"),h=n.n(l),p=n("Ph+x"),y=h.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(t){Object(i.a)(n,t);var e=d(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={search:""},r.state={length:0},r}return Object(a.a)(n,[{key:"handleUpdate",value:function(t){this.setState({search:t.target.value})}},{key:"handleSearch",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.getInfo)(this.state.search);case 2:n=t.sent,console.log(n),this.setState({user:n.rank[0]});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://35.194.72.130/api/length",t.next=3,fetch("http://35.194.72.130/api/length");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent;try{this.setState({length:n.size[0].rows})}catch(r){}case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return y("div",null,y("h3",{className:"text"},"Enter a name below to see the rank"),y("p",null,y("input",{type:"text",value:this.state.search,onChange:this.handleUpdate.bind(this)})),y("button",{className:"button-style",onClick:this.handleSearch.bind(this)},"Search"),this.state.user?y("div",null,y("h3",{className:"text"}," ",this.state.user.name,", ",this.state.user.time," "),y("h3",{className:"text"}," ",this.state.user.rank," out of ",this.state.length,"! ")):y("p",{className:"text"},"Note: If nothing shows up the name hasn't been added yet"))}}]),n}(h.a.Component);e.default=b},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return u}));var o=n("JX7q");function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["19J2",0,2,1]]]);