!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],t);else{var n="object"==typeof exports?t(require("react"),require("react-dom")):t(e.react,e["react-dom"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(9)()},,,,function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"resolveContainerRef",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(0);const o=e=>{return"undefined"==typeof document?null:null==e?(t&&t.ownerDocument||document).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&e.nodeType&&e||null);var t};function u(e,t){const[n,u]=Object(r.useState)(()=>o(e));if(!n){const t=o(e);t&&u(t)}return Object(r.useEffect)(()=>{t&&n&&t(n)},[t,n]),Object(r.useEffect)(()=>{const t=o(e);t!==n&&u(t)},[e,n]),n}},,,function(e,t,n){"use strict";var r=n(10);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),c=n.n(u),a=n(5),i=n.n(a),f=n(6);const l=({container:e,children:t,onRendered:n})=>{let r=Object(f.default)(e,n);var u;return r=["html","body","#document"].includes((u=r)?(u.nodeName||"").toLowerCase():null)?document.body:r,t&&r?o.a.createElement(o.a.Fragment,null,i.a.createPortal(t,r)):null};l.displayName="Portal",l.propTypes={container:c.a.any,onRendered:c.a.func},t.default=l}])}));