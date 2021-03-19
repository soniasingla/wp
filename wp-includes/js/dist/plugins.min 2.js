/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.plugins=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=464)}({0:function(e,t){e.exports=window.wp.element},12:function(e,t){e.exports=window.wp.compose},18:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},19:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},2:function(e,t){e.exports=window.lodash},25:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},26:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(52);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(42),o=n(18);function u(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(o.a)(e):t}},33:function(e,t){e.exports=window.wp.hooks},42:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},464:function(e,t,n){"use strict";n.r(t),n.d(t,"PluginArea",(function(){return k})),n.d(t,"withPluginContext",(function(){return O})),n.d(t,"registerPlugin",(function(){return x})),n.d(t,"unregisterPlugin",(function(){return S})),n.d(t,"getPlugin",(function(){return _})),n.d(t,"getPlugins",(function(){return E}));var r=n(25),o=n(26),u=n(18),i=n(28),c=n(29),l=n(19),s=n(0),a=n(2),f=n(33),p=n(8),g=n(12),b=Object(s.createContext)({name:null,icon:null}),d=b.Consumer,y=b.Provider,O=function(e){return Object(g.createHigherOrderComponent)((function(t){return function(n){return Object(s.createElement)(d,null,(function(r){return Object(s.createElement)(t,Object(p.a)({},n,e(r,n)))}))}}),"withPluginContext")},j=n(5),v=n(42),m=n(7),h=Object(s.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(m.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w={};function x(e,t){return"object"!==Object(v.a)(t)?(console.error("No settings object provided!"),null):"string"!=typeof e?(console.error("Plugin names must be strings."),null):/^[a-z][a-z0-9-]*$/.test(e)?(w[e]&&console.error('Plugin "'.concat(e,'" is already registered.')),t=Object(f.applyFilters)("plugins.registerPlugin",t,e),Object(a.isFunction)(t.render)?(w[e]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:e,icon:h},t),Object(f.doAction)("plugins.pluginRegistered",t,e),t):(console.error('The "render" property must be specified and must be a valid function.'),null)):(console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null)}function S(e){if(w[e]){var t=w[e];return delete w[e],Object(f.doAction)("plugins.pluginUnregistered",t,e),t}console.error('Plugin "'+e+'" is not registered.')}function _(e){return w[e]}function E(){return Object.values(w)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(e){Object(i.a)(n,e);var t=C(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).setPlugins=e.setPlugins.bind(Object(u.a)(e)),e.state=e.getCurrentPluginsState(),e}return Object(o.a)(n,[{key:"getCurrentPluginsState",value:function(){return{plugins:Object(a.map)(E(),(function(e){var t=e.icon,n=e.name;return{Plugin:e.render,context:{name:n,icon:t}}}))}}},{key:"componentDidMount",value:function(){Object(f.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),Object(f.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}},{key:"componentWillUnmount",value:function(){Object(f.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),Object(f.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}},{key:"setPlugins",value:function(){this.setState(this.getCurrentPluginsState)}},{key:"render",value:function(){return Object(s.createElement)("div",{style:{display:"none"}},Object(a.map)(this.state.plugins,(function(e){var t=e.context,n=e.Plugin;return Object(s.createElement)(y,{key:t.name,value:t},Object(s.createElement)(n,null))})))}}]),n}(s.Component)},5:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},52:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},7:function(e,t){e.exports=window.wp.primitives},8:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}});