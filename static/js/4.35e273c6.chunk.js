(window.webpackJsonpopen_neteasy_cloud=window.webpackJsonpopen_neteasy_cloud||[]).push([[4],{31:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(32);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"back-header"},r.a.createElement("svg",{className:"header-icon",width:15,height:22,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:function(){e.props.history.go(-1)}},r.a.createElement("path",{fill:"#000",d:"M317.288601 514.022357L774.12597 54.614875a32.126397 32.126397 0 0 0-45.619484-44.976956L249.180639 488.963767a32.126397 32.126397 0 0 0 0 45.619484l479.968375 479.968376a32.126397 32.126397 0 0 0 45.619484-45.619485z"}))),r.a.createElement("div",{className:"text-header"},"\u624b\u673a\u53f7\u767b\u9646")))}},32:function(e,t,n){},33:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(i){r=!0,o=i}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(0),o=n.n(r);var s=function(){var e=window.location.href;if(-1===e.indexOf("?"))return null;for(var t=e.split("?")[1].split("&"),n={},a=0;a<t.length;a++){var r=t[a].split("=");n[r[0]]=decodeURIComponent(r[1])}return n},c=n(31),i={get:function(e,t){if(t){var n=[];Object.keys(t).forEach(function(e){n.push(e+"="+t[e])}),-1===e.search(/\?/)?e+="?"+n.join("&"):e+="&"+n.join("&")}var a={method:"get",headers:{authorization:window.sessionStorage.getItem("token")?window.sessionStorage.getItem("token"):null,"Content-Type":"application/json; charset=utf-8"},credentials:"include",mode:"cors"};return fetch(e,a).then(function(e){return e.json().then(function(t){return e.ok&&1===t.code?Promise.resolve(t):Promise.reject(t)})})},post:function(e,t){return fetch(e,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"include",mode:"cors",body:JSON.stringify(t)}).then(function(e){return e.json().then(function(t){return e.ok&&1===t.code?Promise.resolve(t):Promise.reject(t)})})}};n(38);t.default=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),l=n[0],u=n[1];Object(r.useEffect)(function(){});var d=s().phone;function p(e){var t;(t={phone:d,password:e},i.post("/login/cellphone",t)).then(function(e){console.log(e)})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{props:e}),o.a.createElement("div",{className:"password-wrap"},o.a.createElement("div",{className:"password-input"},o.a.createElement("div",{className:"password-border"},o.a.createElement("div",{className:"password-text-wrap"},o.a.createElement("input",{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",className:"password-text",value:l,onChange:function(e){u(e.target.value)}})),o.a.createElement("div",{className:"password-forget"},"\u5fd8\u8bb0\u5bc6\u7801\uff1f"))),o.a.createElement("div",{className:"password-buttom",onClick:function(){p(l)}},"\u767b\u9646")))}}}]);
//# sourceMappingURL=4.35e273c6.chunk.js.map