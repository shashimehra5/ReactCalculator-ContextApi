(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),u=(a(15),a(1)),i=a(2),o=a(4),s=a(3),d=a(5),p=(a(16),a(8)),m=a.n(p),y=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{style:{marginBottom:"10px"}},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:m.a,alt:"logo",width:"60",height:"40"})),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("h3",null,"React Calculator"))))))}}]),t}(n.Component),v=function(e,t,a){switch(a){case"+":return+e+ +t;case"-":return+e-+t;case"x":return+e*+t;case"/":return+e/+t}},b=r.a.createContext(),h=function(e,t){switch(t.type){case"AC":return{displayValue:0,oldValue:0,countNumeric:0,action:""};case"addSubSign":return{displayValue:-1*+e.displayValue};case"numeric":return e.countNumeric++,{displayValue:0!==e.displayValue&&!e.oldValue||1!==e.countNumeric?e.displayValue+t.payload:t.payload,countNumeric:e.countNumeric};case"add":return{oldValue:e.displayValue,countNumeric:0,action:"+"};case"decimal":if(-1===(""+e.displayValue).indexOf("."))return{displayValue:e.displayValue+"."};break;case"sub":return{oldValue:e.displayValue,countNumeric:0,action:"-"};case"multiply":return{oldValue:e.displayValue,countNumeric:0,action:"x"};case"divide":return{oldValue:e.displayValue,countNumeric:0,action:"/"};case"percentile":return{displayValue:e.displayValue/100};case"equals":if(e.action)return{displayValue:v(e.oldValue,e.displayValue,e.action),oldValue:"",countNumeric:0,action:""}}},f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={displayValue:0,oldValue:"",action:"",countNumeric:0,buttonsKey:[[{id:1,value:"AC",type:"AC"},{id:2,value:"+/-",type:"addSubSign"},{id:3,value:"%",type:"percentile"},{id:4,value:"\xf7",type:"divide"}],[{id:1,value:"7",type:"numeric"},{id:2,value:"8",type:"numeric"},{id:3,value:"9",type:"numeric"},{id:4,value:"x",type:"multiply"}],[{id:1,value:"4",type:"numeric"},{id:2,value:"5",type:"numeric"},{id:3,value:"6",type:"numeric"},{id:4,value:"-",type:"sub"}],[{id:1,value:"1",type:"numeric"},{id:2,value:"2",type:"numeric"},{id:3,value:"3",type:"numeric"},{id:4,value:"+",type:"add"}],[{id:1,value:"0",type:"numeric"},{id:2,value:".",type:"decimal"},{id:3,value:"=",type:"equals"}]],dispatch:function(e){a.setState(function(t){return h(t,e)})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=b.Consumer,j=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={color:"#000",textAlign:"right",backgroundColor:"#e0ebeb",flex:"0 0 auto",fontWeight:"200",marginBottom:"15px",borderRadius:"10px"};return r.a.createElement(O,null,function(t){var a=t.displayValue;return r.a.createElement("div",{className:"compDisplay",style:e},r.a.createElement("div",null,a))})}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).HandleKeyClick=function(e,t,a){a({type:e,payload:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.buttonArr;return r.a.createElement(O,null,function(a){var n=a.dispatch;return r.a.createElement(r.a.Fragment,null,t.map(function(a,l){return r.a.createElement("div",{key:l,className:"button-key "+(3===t.length&&0===l?"wide":t.length-1===l?"orange":"")},r.a.createElement("button",{onClick:e.HandleKeyClick.bind(e,a.type,a.value,n)},a.value))}))})}}]),t}(n.Component),E=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"clickButton",value:function(){alert(1)}},{key:"render",value:function(){var e=this;return r.a.createElement(O,null,function(t){var a=t.buttonsKey;return r.a.createElement("div",{className:"button-panel"},a.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(V,{buttonArr:t,onClick:e.clickButton.bind(e)}))}))})}}]),t}(n.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement("div",{className:"container calculatorBody"},r.a.createElement(j,null),r.a.createElement(E,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f3ce1d41.chunk.js.map