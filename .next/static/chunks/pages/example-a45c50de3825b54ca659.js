_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Asrq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example",function(){return n("dWVV")}])},dWVV:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n("KQm4"),a=n("1OyB"),i=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),u=n("md7G"),s=n("foSv"),l=n("rePB"),f=n("q1tI"),m=n.n(f),d=(n("RNiq"),m.a.createElement);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var h=function(t){Object(o.a)(n,t);var e=y(n);function n(t){var i;return Object(a.a)(this,n),i=e.call(this,t),Object(l.a)(Object(c.a)(i),"handleAdd",(function(){i.setState((function(t){return{myArray:[i.state.time].concat(Object(r.a)(t.myArray))}}))})),i.state={myArray:[],time:0},i.getTimes=i.getTimes.bind(Object(c.a)(i)),i}return Object(i.a)(n,[{key:"handleUpdate",value:function(t){this.setState({time:t.target.value})}},{key:"setTimes",value:function(){var t=this.state.myArray;localStorage.setItem("myTimes",JSON.stringify(t)),console.log("test")}},{key:"getTimes",value:function(){var t=localStorage.getItem("myTimes");t=JSON.parse(t),this.setState({myArray:t})}},{key:"render",value:function(){var t=this;return d("div",null,d("p",null,"Add a number to the list by clicking the button"),d("p",null,this.state.myArray.join(", ")),d("p",null,d("input",{type:"text",value:this.state.time,onChange:this.handleUpdate.bind(this)})),d("button",{className:"button-style",onClick:this.handleAdd.bind(this)},"Add"),d("button",{onClick:function(){return t.getTimes()}},"Load Times"),d("button",{onClick:function(){return t.setTimes()}},"Save Times"))}}]),n}(m.a.Component)}},[["Asrq",0,2,1,3,5,6,4]]]);