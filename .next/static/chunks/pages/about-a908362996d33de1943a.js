_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1DEj":function(t,e,n){},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Hq7":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),c=n("YFqc"),u=n.n(c),a=(n("1DEj"),o.a.createElement),i={marginRight:15};function f(){return a("div",{align:"center"},a(u.a,{href:"/"},a("a",{style:i,className:"text"},"Home")),a(u.a,{href:"/times"},a("a",{style:i,className:"text"},"Times")),a(u.a,{href:"/class"},a("a",{style:i,className:"text"},"DGST Project")),a(u.a,{href:"/other"},a("a",{style:i,className:"text"},"Other Stuff")))}var s=o.a.createElement,l={margin:20,padding:20,border:"2px solid #000000",outline:"#000000 solid 10000000000px"};function p(t){return s("div",{style:l},s(f,null),t.children,s("div",{className:"fixed"}," ",s("img",{src:"../static/IMG_4152.png",width:"15%",height:"15%"})," "))}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Juyh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n("1OyB"),o=n("vuIU"),c=n("Ji7U"),u=n("md7G"),a=n("foSv"),i=n("q1tI"),f=n.n(i),s=n("3Hq7"),l=f.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var d=function(t){Object(c.a)(n,t);var e=p(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l(s.a,null,l("div",{className:"background",style:{height:575}},l("h1",{align:"center",className:"text"},"About")))}}]),n}(f.a.Component)},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("J4zp"),o=n("284h");e.__esModule=!0,e.default=void 0;var c,u=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var p=function(t,e){var n=c||(s?c=new s((function(t){t.forEach((function(t){if(f.has(t.target)){var e=f.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(t.target),f.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),f.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}f.delete(t)}):function(){}};function d(t,e,n,r){(0,a.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),l[e+"%"+n]=!0)}var y=function(t){var e=!1!==t.prefetch,n=u.default.useState(),o=r(n,2),c=o[0],f=o[1],y=(0,i.useRouter)(),h=y&&y.pathname||"/",v=u.default.useMemo((function(){var e=(0,a.resolveHref)(h,t.href,!0),n=r(e,2),o=n[0],c=n[1];return{href:o,as:t.as?(0,a.resolveHref)(h,t.as):c||o}}),[h,t.href,t.as]),b=v.href,m=v.as;u.default.useEffect((function(){if(e&&s&&c&&c.tagName&&(0,a.isLocalURL)(b)&&!l[b+"%"+m])return p(c,(function(){d(y,b,m)}))}),[e,c,b,m,y]);var g=t.children,w=t.replace,O=t.shallow,_=t.scroll;"string"===typeof g&&(g=u.default.createElement("a",null,g));var E=u.Children.only(g),j={ref:function(t){t&&f(t),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(t):"object"===typeof E.ref&&(E.ref.current=t))},onClick:function(t){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,c,u){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,a.isLocalURL)(n))&&(t.preventDefault(),null==u&&(u=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:c}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())})))}(t,y,b,m,w,O,_)}};return e&&(j.onMouseEnter=function(t){(0,a.isLocalURL)(b)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(t),d(y,b,m,{priority:!0}))}),(t.passHref||"a"===E.type&&!("href"in E.props))&&(j.href=(0,a.addBasePath)((0,a.addLocale)(m,y&&y.locale,y&&y.defaultLocale))),u.default.cloneElement(E,j)};e.default=y},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return c}));var o=n("JX7q");function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["rB5V",0,1,2,3,4]]]);