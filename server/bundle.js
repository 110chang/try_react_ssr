!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=(n.n(r),n(4)),a=n.n(o),i=n(5),c=a()();c.use(a.a.static("./dist")),c.get("/",i.a),c.listen(3e3)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";function r(e,t){Object(i.renderToNodeStream)(a.a.createElement(l.a,{initialData:JSON.stringify(p)},a.a.createElement(c.StyleSheetManager,{sheet:f.instance},a.a.createElement(u.a,s({},p,{isServer:!!e}))))).pipe(t)}var o=n(0),a=n.n(o),i=n(6),c=(n.n(i),n(1)),l=(n.n(c),n(7)),u=n(8),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=new c.ServerStyleSheet,p={name:"The world"};t.a=r},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=function(e){return o.a.createElement("html",{lang:"en"},o.a.createElement("head",null,o.a.createElement("meta",{charSet:"UTF-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"}),o.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),o.a.createElement("title",null,"Document")),o.a.createElement("body",null,o.a.createElement("div",{id:"root"},e.children),o.a.createElement("script",{src:"bundle.js"})))};t.a=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(1),u=n.n(l),s=n(9),f=n.n(s),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"],["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]),d=u.a.h1(m),b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log(e),n}return a(t,e),p(t,[{key:"componentWillMount",value:function(){console.log("will mount")}},{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"render",value:function(){var e=this.props.name;return c.a.createElement("div",null,c.a.createElement(d,null,"Hello, world!"),c.a.createElement("p",null,e),c.a.createElement("img",{src:f.a,alt:""}))}}]),t}(i.Component);t.a=b},function(e,t){e.exports="logo.5d5d9eefa31e5e13a6610d9fa7a283bb.svg"}]);