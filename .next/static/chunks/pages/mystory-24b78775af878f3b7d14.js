_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1DEj":function(e,t,n){},"3Hq7":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),c=n.n(o),i=(n("1DEj"),a.a.createElement),s={marginRight:15};function f(){return i("div",{align:"center"},i(c.a,{href:"/"},i("a",{style:s,className:"text"},"Home")),i(c.a,{href:"/times"},i("a",{style:s,className:"text"},"Times")),i(c.a,{href:"/class"},i("a",{style:s,className:"text"},"DGST Project")),i(c.a,{href:"/other"},i("a",{style:s,className:"text"},"Other Stuff")))}var u=a.a.createElement,l={margin:20,padding:20,border:"2px solid #000000",outline:"#000000 solid 10000000000px"};function d(e){return u("div",{style:l},u(f,null),e.children,u("div",{className:"fixed"}," ",u("img",{src:"../static/IMG_4152.png",width:"15%",height:"15%"})," "))}},"6vOc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mystory",function(){return n("GccD")}])},GccD:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("3Hq7"),c=a.a.createElement;function i(){return c(o.a,null,c("div",{className:"background",style:{height:575}},c("div",{className:"fixed"}," ",c("img",{src:"../static/IMG_4152.png",align:"left",width:"280",height:"240"})," "),c("p",{className:"text"},"Forthcoming...")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),f=new Map,u=window.IntersectionObserver,l={};var d=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],f=a[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",g=c.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,i.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),m=g.href,y=g.as;c.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,i.isLocalURL)(m)&&!l[m+"%"+y])return d(o,(function(){p(h,m,y)}))}),[t,o,m,y,h]);var w=e.children,E=e.replace,_=e.shallow,N=e.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var x=c.Children.only(w),b={ref:function(e){e&&f(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,y,E,_,N)}};return t&&(b.onMouseEnter=function(e){(0,i.isLocalURL)(m)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(h,m,y,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(b.href=(0,i.addBasePath)((0,i.addLocale)(y,h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(x,b)};t.default=h}},[["6vOc",0,1,2,3,4]]]);