_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return g}));var n=a("KQm4"),s=a("1OyB"),l=a("vuIU"),i=a("JX7q"),r=a("Ji7U"),o=a("md7G"),c=a("foSv"),u=a("rePB"),d=a("q1tI"),h=a.n(d),m=a("3Hq7"),p=a("MBJH"),f=(a("1DEj"),a("o1E3"),a("Lfdo")),S=h.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(c.a)(t);if(e){var s=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var g=function(t){Object(r.a)(a,t);var e=y(a);function a(t){var l;return Object(s.a)(this,a),l=e.call(this,t),Object(u.a)(Object(i.a)(l),"textInput",(function(){clearInterval(l.timer)})),Object(u.a)(Object(i.a)(l),"keyPress",(function(t){32===t.keyCode&&(0===l.state.milliSecondsElapsed||!1===l.state.timerInProgress?l.startBtn.click():l.stopBtn.click()),99===t.keyCode&&l.clearBtn.click(),100===t.keyCode&&l.deleteBtn.click()})),Object(u.a)(Object(i.a)(l),"handleStart",(function(){l.setState({startTime:Date.now()}),!0!==l.state.timerInProgress&&(l.setState({milliSecondsElapsed:0}),l.timer=setInterval((function(){l.setState({milliSecondsElapsed:l.state.milliSecondsElapsed+1,timerInProgress:!0},(function(){l.stopBtn.focus()}))}),10))})),Object(u.a)(Object(i.a)(l),"handleStop",(function(){0===l.state.average&&l.setState({average:(l.state.milliSecondsElapsed/100).toFixed(2)}),l.setState({total:l.state.total+l.state.milliSecondsElapsed}),l.setState({last:l.state.milliSecondsElapsed}),l.state.high<l.state.milliSecondsElapsed&&l.setState({high:l.state.milliSecondsElapsed}),0===l.state.low&&l.setState({low:l.state.milliSecondsElapsed}),l.state.low>l.state.milliSecondsElapsed&&l.setState({low:l.state.milliSecondsElapsed}),l.setState((function(t){return{timerInProgress:!1,myArray:[l.state.milliSecondsElapsed/100].concat(Object(n.a)(t.myArray))}}),(function(){clearInterval(l.timer),l.startBtn.focus()})),1===l.state.count&&l.setState({average:(l.state.total/l.state.myArray.length/100).toFixed(2)}),l.setState({count:1}),l.setState({endTime:Date.now()})})),Object(u.a)(Object(i.a)(l),"clear",(function(){l.setState({average:0}),l.setState({high:0}),l.setState({low:0}),l.setState({total:0}),l.setState({myArray:[]}),l.setState({range:0}),l.startBtn.focus()})),Object(u.a)(Object(i.a)(l),"delete",(function(){for(var t=l.state.myArray,e=[],a=(t[0],0),n=1;n<t.length;n++)e.push(t[n]);if(0==e.length)l.setState({total:0}),l.setState({low:0}),l.setState({high:0}),l.setState({myArray:[]});else{l.setState({myArray:l.state.myArray.splice(1)}),l.setState({low:100*Math.min.apply(Math,e)}),l.setState({high:100*Math.max.apply(Math,e)});for(var s=0;s<e.length;s++)a+=e[s];l.setState({total:100*a})}l.startBtn.focus()})),l.state={name:"..."},l.state={myArray:[],milliSecondsElapsed:0,total:0,average:0,high:0,low:0,count:0,last:0,timerInProgress:!1,startTime:0,endTime:0},l.updateState=l.updateState.bind(Object(i.a)(l)),l.textInput=h.a.createRef(),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.keyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keypress",this.keyPress)}},{key:"updateState",value:function(t){this.setState({milliSecondsElapsed:t.target.milliSecondsElapsed})}},{key:"render",value:function(){var t=this,e=this.state.total;return S(m.a,null,S("div",{className:"background",style:{height:575}},S(p.a,{align:"right",height:"200px",width:"200px",className:"table"},S("thead",null,S("tr",null,S("th",{className:"text",align:"center"},"Last Time"))),S("tbody",null,S("tr",null,S("td",{className:"text"},this.state.myArray.join(", "))))),S("p",{className:"text",align:"left"}," \u2002 Press the ",S("b",null,"spacebar")," to start/stop the timer."),S("p",{className:"text",align:"left"}," \u2002 Press the ",S("b",null,"c")," button to clear everything."),S("p",{className:"text",align:"left"}," \u2002 Press the ",S("b",null,"d")," button to delete the last time."),S("p",{className:"text",align:"left"}," \u2002 Lastly, write your time and the name below "),S("p",{className:"text",align:"left"}," \u2002 of any of your solves. Then, hit the add button to"),S("p",{className:"text",align:"left"}," \u2002 add your time to the database!-test here-"),S(f.a,null),S("div",{className:"fixed"}," ",S("img",{src:"../static/IMG_4152.png",align:"left",width:"280",height:"240"})," "),S("div",{align:"center",className:"center",height:"200px"},S("input",{value:this.state.milliSecondsElapsed/100,onChange:this.updateState,ref:this.textInput,readOnly:!0}),S("button",{onClick:this.handleStart,ref:function(e){return t.startBtn=e}},"START"),S("button",{onClick:this.handleStop,ref:function(e){return t.stopBtn=e}},"STOP"),S("button",{onClick:this.clear,ref:function(e){return t.clearBtn=e}},"CLEAR"),S("button",{onClick:this.delete,ref:function(e){return t.deleteBtn=e}},"DELETE"),S("h1",null,this.state.milliSecondsElapsed/100)),S("table",{align:"center",width:"200px",className:"text"},S("thead",null,S("tr",{height:"100px"},S("th",null,"Average"),S("th",null,"Fastest"),S("th",null,"Slowest"),S("th",null,"Range"))),S("tbody",null,S("tr",null,S("td",null,S("td",null,e?(this.state.total/this.state.myArray.length/100).toFixed(2):" 0 ")),S("td",null,this.state.low/100),S("td",null,this.state.high/100),S("td",null,(this.state.high/100-this.state.low/100).toFixed(2)))))))}}]),a}(h.a.Component)},vlRD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,4,3]]]);