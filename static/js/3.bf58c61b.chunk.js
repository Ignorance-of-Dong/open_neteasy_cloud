(window.webpackJsonpopen_neteasy_cloud=window.webpackJsonpopen_neteasy_cloud||[]).push([[3],{31:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(32);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"back-header"},r.a.createElement("svg",{className:"header-icon",width:15,height:22,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:function(){e.props.history.go(-1)}},r.a.createElement("path",{fill:"#000",d:"M317.288601 514.022357L774.12597 54.614875a32.126397 32.126397 0 0 0-45.619484-44.976956L249.180639 488.963767a32.126397 32.126397 0 0 0 0 45.619484l479.968375 479.968376a32.126397 32.126397 0 0 0 45.619484-45.619485z"}))),r.a.createElement("div",{className:"text-header"},"\u624b\u673a\u53f7\u767b\u9646")))}},32:function(e,t,n){},33:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(0),c=n.n(r),o=n(31),l=n(12),i=n.n(l);n(36);function s(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"over-toast"},e.value))}var u=function(e,t){var n=document.createElement("div");document.body.appendChild(n),i.a.render(c.a.createElement(s,{value:e}),n),setTimeout(function(){document.body.removeChild(n)},t)};n(37);t.default=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),l=n[0],i=n[1];return Object(r.useEffect)(function(){console.log(1111,"=======")},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{props:e}),c.a.createElement("div",{className:"phone-wrap"},c.a.createElement("p",{className:"phone-tips"},"\u672a\u6ce8\u518c\u7684\u624b\u673a\u53f7\u767b\u9646\u540e\u81ea\u52a8\u521b\u5efa\u8d26\u6237"),c.a.createElement("div",{className:"phone-input"},c.a.createElement("div",{className:"phone-border"},c.a.createElement("div",{className:"phone-prefix"},"+86"),c.a.createElement("div",{className:"phone-text-wrap"},c.a.createElement("input",{type:"text",className:"phone-text",value:l,onChange:function(e){i(e.target.value)}})),c.a.createElement("div",{className:"phone-close"},"x"))),c.a.createElement("div",{className:"phone-buttom",onClick:function(){l.length<11?u("\u8bf7\u8f93\u516511\u4f4d\u6570\u5b57\u7684\u624b\u673a\u53f7",2e3):e.history.push("/loginpassword?phone=".concat(l))}},"\u4e0b\u4e00\u6b65")))}}}]);
//# sourceMappingURL=3.bf58c61b.chunk.js.map