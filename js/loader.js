/*! For license information please see loader.js.LICENSE.txt */
(()=>{var e={857:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LANGUAGE_TO_LOCALE_MAPPING=t.LanguageCode=void 0,(n=t.LanguageCode||(t.LanguageCode={})).DEFAULT="en",n.EN="en",n.ES="es",n.PT="pt",n.JP="jp",n.TW="tw",t.LANGUAGE_TO_LOCALE_MAPPING={en:"en",es:"es",pt:"pt",jp:"ja",tw:"zh_TW"}},23:e=>{window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=50)}({13:function(e,t,n){"use strict";n.r(t),n.d(t,"v1",(function(){return g})),n.d(t,"v3",(function(){return A})),n.d(t,"v4",(function(){return w})),n.d(t,"v5",(function(){return b}));var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function a(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}for(var i=[],s=0;s<256;++s)i.push((s+256).toString(16).substr(1));var c,u,d=function(e,t){var n=t||0,o=i;return(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase()},l=0,f=0,g=function(e,t,n){var o=t&&n||0,r=t||[],i=(e=e||{}).node||c,s=void 0!==e.clockseq?e.clockseq:u;if(null==i||null==s){var g=e.random||(e.rng||a)();null==i&&(i=c=[1|g[0],g[1],g[2],g[3],g[4],g[5]]),null==s&&(s=u=16383&(g[6]<<8|g[7]))}var p=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:f+1,h=p-l+(m-f)/1e4;if(h<0&&void 0===e.clockseq&&(s=s+1&16383),(h<0||p>l)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,f=m,u=s;var v=(1e4*(268435455&(p+=122192928e5))+m)%4294967296;r[o++]=v>>>24&255,r[o++]=v>>>16&255,r[o++]=v>>>8&255,r[o++]=255&v;var E=p/4294967296*1e4&268435455;r[o++]=E>>>8&255,r[o++]=255&E,r[o++]=E>>>24&15|16,r[o++]=E>>>16&255,r[o++]=s>>>8|128,r[o++]=255&s;for(var y=0;y<6;++y)r[o+y]=i[y];return t||d(r)},p=function(e,t,n){function o(e,o,r,a){var i=r&&a||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof o&&(o=function(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){t.push(parseInt(e,16))})),t}(o)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(o)||16!==o.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var s=n(o.concat(e));if(s[6]=15&s[6]|t,s[8]=63&s[8]|128,r)for(var c=0;c<16;++c)r[i+c]=s[c];return r||d(s)}try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o};function m(e){return 14+(e+64>>>9<<4)+1}function h(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t,n,o,r,a){return h((i=h(h(t,e),h(o,a)))<<(s=r)|i>>>32-s,n);var i,s}function E(e,t,n,o,r,a,i){return v(t&n|~t&o,e,t,r,a,i)}function y(e,t,n,o,r,a,i){return v(t&o|n&~o,e,t,r,a,i)}function O(e,t,n,o,r,a,i){return v(t^n^o,e,t,r,a,i)}function _(e,t,n,o,r,a,i){return v(n^(t|~o),e,t,r,a,i)}var A=p("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,o="0123456789abcdef",r=0;r<n;r+=8){var a=e[r>>5]>>>r%32&255,i=parseInt(o.charAt(a>>>4&15)+o.charAt(15&a),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[m(t)-1]=t;for(var n=1732584193,o=-271733879,r=-1732584194,a=271733878,i=0;i<e.length;i+=16){var s=n,c=o,u=r,d=a;n=E(n,o,r,a,e[i],7,-680876936),a=E(a,n,o,r,e[i+1],12,-389564586),r=E(r,a,n,o,e[i+2],17,606105819),o=E(o,r,a,n,e[i+3],22,-1044525330),n=E(n,o,r,a,e[i+4],7,-176418897),a=E(a,n,o,r,e[i+5],12,1200080426),r=E(r,a,n,o,e[i+6],17,-1473231341),o=E(o,r,a,n,e[i+7],22,-45705983),n=E(n,o,r,a,e[i+8],7,1770035416),a=E(a,n,o,r,e[i+9],12,-1958414417),r=E(r,a,n,o,e[i+10],17,-42063),o=E(o,r,a,n,e[i+11],22,-1990404162),n=E(n,o,r,a,e[i+12],7,1804603682),a=E(a,n,o,r,e[i+13],12,-40341101),r=E(r,a,n,o,e[i+14],17,-1502002290),n=y(n,o=E(o,r,a,n,e[i+15],22,1236535329),r,a,e[i+1],5,-165796510),a=y(a,n,o,r,e[i+6],9,-1069501632),r=y(r,a,n,o,e[i+11],14,643717713),o=y(o,r,a,n,e[i],20,-373897302),n=y(n,o,r,a,e[i+5],5,-701558691),a=y(a,n,o,r,e[i+10],9,38016083),r=y(r,a,n,o,e[i+15],14,-660478335),o=y(o,r,a,n,e[i+4],20,-405537848),n=y(n,o,r,a,e[i+9],5,568446438),a=y(a,n,o,r,e[i+14],9,-1019803690),r=y(r,a,n,o,e[i+3],14,-187363961),o=y(o,r,a,n,e[i+8],20,1163531501),n=y(n,o,r,a,e[i+13],5,-1444681467),a=y(a,n,o,r,e[i+2],9,-51403784),r=y(r,a,n,o,e[i+7],14,1735328473),n=O(n,o=y(o,r,a,n,e[i+12],20,-1926607734),r,a,e[i+5],4,-378558),a=O(a,n,o,r,e[i+8],11,-2022574463),r=O(r,a,n,o,e[i+11],16,1839030562),o=O(o,r,a,n,e[i+14],23,-35309556),n=O(n,o,r,a,e[i+1],4,-1530992060),a=O(a,n,o,r,e[i+4],11,1272893353),r=O(r,a,n,o,e[i+7],16,-155497632),o=O(o,r,a,n,e[i+10],23,-1094730640),n=O(n,o,r,a,e[i+13],4,681279174),a=O(a,n,o,r,e[i],11,-358537222),r=O(r,a,n,o,e[i+3],16,-722521979),o=O(o,r,a,n,e[i+6],23,76029189),n=O(n,o,r,a,e[i+9],4,-640364487),a=O(a,n,o,r,e[i+12],11,-421815835),r=O(r,a,n,o,e[i+15],16,530742520),n=_(n,o=O(o,r,a,n,e[i+2],23,-995338651),r,a,e[i],6,-198630844),a=_(a,n,o,r,e[i+7],10,1126891415),r=_(r,a,n,o,e[i+14],15,-1416354905),o=_(o,r,a,n,e[i+5],21,-57434055),n=_(n,o,r,a,e[i+12],6,1700485571),a=_(a,n,o,r,e[i+3],10,-1894986606),r=_(r,a,n,o,e[i+10],15,-1051523),o=_(o,r,a,n,e[i+1],21,-2054922799),n=_(n,o,r,a,e[i+8],6,1873313359),a=_(a,n,o,r,e[i+15],10,-30611744),r=_(r,a,n,o,e[i+6],15,-1560198380),o=_(o,r,a,n,e[i+13],21,1309151649),n=_(n,o,r,a,e[i+4],6,-145523070),a=_(a,n,o,r,e[i+11],10,-1120210379),r=_(r,a,n,o,e[i+2],15,718787259),o=_(o,r,a,n,e[i+9],21,-343485551),n=h(n,s),o=h(o,c),r=h(r,u),a=h(a,d)}return[n,o,r,a]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(m(t)),o=0;o<t;o+=8)n[o>>5]|=(255&e[o/8])<<o%32;return n}(e),8*e.length))})),w=function(e,t,n){"string"==typeof e&&(t="binary"===e?new Uint8Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){for(var r=n||0,i=0;i<16;++i)t[r+i]=o[i];return t}return d(o)};function C(e,t,n,o){switch(e){case 0:return t&n^~t&o;case 1:case 3:return t^n^o;case 2:return t&n^t&o^n&o}}function L(e,t){return e<<t|e>>>32-t}var b=p("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var o=unescape(encodeURIComponent(e));e=[];for(var r=0;r<o.length;++r)e.push(o.charCodeAt(r))}e.push(128);for(var a=e.length/4+2,i=Math.ceil(a/16),s=new Array(i),c=0;c<i;++c){for(var u=new Uint32Array(16),d=0;d<16;++d)u[d]=e[64*c+4*d]<<24|e[64*c+4*d+1]<<16|e[64*c+4*d+2]<<8|e[64*c+4*d+3];s[c]=u}s[i-1][14]=8*(e.length-1)/Math.pow(2,32),s[i-1][14]=Math.floor(s[i-1][14]),s[i-1][15]=8*(e.length-1)&4294967295;for(var l=0;l<i;++l){for(var f=new Uint32Array(80),g=0;g<16;++g)f[g]=s[l][g];for(var p=16;p<80;++p)f[p]=L(f[p-3]^f[p-8]^f[p-14]^f[p-16],1);for(var m=n[0],h=n[1],v=n[2],E=n[3],y=n[4],O=0;O<80;++O){var _=Math.floor(O/20),A=L(m,5)+C(_,h,v,E)+y+t[_]+f[O]>>>0;y=E,E=v,v=L(h,30)>>>0,h=m,m=A}n[0]=n[0]+m>>>0,n[1]=n[1]+h>>>0,n[2]=n[2]+v>>>0,n[3]=n[3]+E>>>0,n[4]=n[4]+y>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}))},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONSENT_COOKIE_CHANGED_EVENT=t.DEFAULT_TANGERINEBOX_DEV_DOMAIN=t.DEFAULT_DOMAIN=t.DEFAULT_LANGUAGE=t.ALL_ALLOWED=t.DEFAULT_COOKIE=t.DEFAULT_COOKIE_AGE=t.COOKIE_VERSION=void 0,t.COOKIE_VERSION="1",t.DEFAULT_COOKIE_AGE=31536e3,t.DEFAULT_COOKIE={essential:!0,functional:!1,performance:!1,advertising:!1},t.ALL_ALLOWED={essential:!0,functional:!0,performance:!0,advertising:!0},t.DEFAULT_LANGUAGE="en-us",t.DEFAULT_DOMAIN=".aws.amazon.com",t.DEFAULT_TANGERINEBOX_DEV_DOMAIN=".aws-dev.amazon.com",t.CONSENT_COOKIE_CHANGED_EVENT="cookie-consent-changed"},5:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.setConsentCookie=t.getId=t.getConsentCookie=t.validateConfiguration=void 0;var r=n(7),a=n(4);function i(e,t){var n=e.domain,o=void 0===n?a.DEFAULT_DOMAIN:n,r=e.log,i=function(e){return"."===e.charAt(0)&&(e=e.slice(1)),e}(o),s=window.location.hostname;return!!s.endsWith(i)||((r?r("error"):function(){})("domainMismatch",{detail:"Domain mismatch",source:t,configuredDomain:o,actualDomain:s}),console.error("Shortbread failed to set user's cookie preference because the domain name that was passed in does not match the hostname of the application. \n        Configured domain: "+o+".\n        Actual domain: "+s+".\n        As a fallback, Shortbread is only allowing 'essential' cookies to be used."),!1)}function s(e,t){var n,o,r=e.match("(^|;)\\s*awsccc\\s*=\\s*([^;]+)"),a=t?t("error"):function(){};if(r&&r.length>0)try{var i=JSON.parse(atob(r[r.length-1]));return 1===(o=i).e&&"number"==typeof o.p&&"number"==typeof o.f&&"number"==typeof o.a&&"string"==typeof o.i&&"string"==typeof o.v?{essential:1===(n=i).e,performance:1===n.p,functional:1===n.f,advertising:1===n.a,id:n.i,version:n.v}:void a("getCookie",{detail:"Cookie format is not valid",cookie:i})}catch(e){return void a("getCookie",{detail:"Error parsing cookie",cookie:r[r.length-1]})}}function c(e){void 0===e&&(e=function(){return document.cookie});var t=s(e());if(t&&t.id)return t.id}function u(e){document.cookie=e}t.validateConfiguration=i,t.getConsentCookie=function(e,t){void 0===e&&(e=function(){return document.cookie});var n=s(e(),t);if(n)return{essential:n.essential,performance:n.performance,functional:n.functional,advertising:n.advertising}},t.getId=c,t.setConsentCookie=function(e,t,n,s,d,l,f,g,p){void 0===t&&(t=a.DEFAULT_DOMAIN),void 0===n&&(n=a.DEFAULT_COOKIE_AGE),void 0===s&&(s=r.default),void 0===d&&(d=u),void 0===l&&(l=i),l({domain:t,log:f},"customize");var m,h=c()||s(f,g,p),v=o(o({},e),{id:h,version:a.COOKIE_VERSION}),E={e:(m=v).essential?1:0,p:m.performance?1:0,f:m.functional?1:0,a:m.advertising?1:0,i:m.id,v:m.version};return d("awsccc="+btoa(JSON.stringify(E))+"; domain="+t+"; path=/; max-age="+n+"; secure=true; SameSite=Lax"),v}},50:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.AWSCShortbreadCookieReader=void 0;var r=n(5),a=n(4),i=n(8);t.AWSCShortbreadCookieReader=function(e){void 0===e&&(e={});var t,n,s=e,c=s.log||i.createLogger({baseUrl:s.hasConsoleNavFooter?i.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL:i.DEFAULT_LOGGER_PIXEL_URL}),u=(t=s.onConsentChanged,n=function(e){var n=e.detail;"function"==typeof t&&t(n)},document.addEventListener(a.CONSENT_COOKIE_CHANGED_EVENT,n),n);return{getConsentCookie:function(){return r.getConsentCookie(s.__storeReader,c)},hasConsent:function(e){return(r.getConsentCookie(s.__storeReader,c)||o({},a.DEFAULT_COOKIE))[e]},__close:function(){document.removeEventListener(a.CONSENT_COOKIE_CHANGED_EVENT,u)}}},t.default=t.AWSCShortbreadCookieReader},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);t.default=function(e,t,n){void 0===t&&(t=o.v4),void 0===n&&(n=function(){return"ts-"+Date.now().toString()});var r=e?e("error"):function(){};try{return t()}catch(e){return r("uuid",{detail:"Error generating UUID",errorMessage:e.message||""}),n()}}},8:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_LOGGER=t.createLogger=t.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL=t.DEFAULT_LOGGER_PIXEL_URL=void 0,t.DEFAULT_LOGGER_PIXEL_URL="https://prod.log.shortbread.aws.dev/1x1.png",t.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL="https://prod.log.shortbread.analytics.console.aws.a2z.com/1x1.png",t.createLogger=function(e){var n=e.baseUrl,r=void 0===n?t.DEFAULT_LOGGER_PIXEL_URL:n,a=e.timeout,i=void 0===a?5e3:a;return function(e){return function(t,n){void 0===n&&(n={});var a=function(e,t,n,r){void 0===r&&(r={});var a=o({timestamp:Date.now(),logVersion:"1",domain:window.location.host,url:window.location.href},r);return e+"?severity="+encodeURIComponent(t)+"&message="+encodeURIComponent(n)+"&payload="+encodeURIComponent(JSON.stringify(a))}(r,e,t,n);!function(e,t){try{var n=new XMLHttpRequest;n.onreadystatechange=function(){},n.ontimeout=function(){},n.onerror=function(){},n.open("HEAD",e),n.timeout=t,n.send()}catch(e){console.log("Error attempting to post a log message: {e}")}}(a,i)}}},t.DEFAULT_LOGGER=t.createLogger({baseUrl:"https://prod.log.shortbread.aws.dev/1x1.png"}),t.default=t.createLogger}})},21:(e,t,n)=>{const{LanguageCode:o}=n(857),r=Object.freeze({"aws.amazon.com":function(){const e=window.location.pathname.split("/");if(e.length<2)return null;const t=e[1];return 2===t.length?t.toLowerCase():null}});e.exports={getLanguageCodeFromPage:function(){const e=window.location.hostname;let t;const n=r[e];return t=n?n():function(e){let t=e?.split("/")?.find((e=>e.match("^[a-z]{2}$")))?.toLowerCase();return t??o.EN}(e+window.location.pathname),Object.values(o).includes(t)?t:o.EN},LanguageCode:o,isNetworkError:function(e){return"Failed to fetch"===e.message||"Load failed"===e.message||"The operation was aborted. "===e.message},isExpectedError:function(e){return"Unexpected end of JSON input"===e.message||"returnfalse is not defined"===e.message||e.message.includes("Cannot destructure property")||e.message.includes("Unexpected token")||e.message.includes("Unexpected end of JSON input")||e.message.includes("r.data is undefined")}}},330:(e,t,n)=>{const{AWSCShortbreadCookieReader:o}=n(23),{getLanguageCodeFromPage:r,isNetworkError:a,isExpectedError:i}=n(21),{LANGUAGE_TO_LOCALE_MAPPING:s,LanguageCode:c}=n(857),u=["alpha","beta","gamma","prod"],d="CHAT_LOADER_",l=`${d}AVAILABILITY`,f=`${d}COMPATIBILITY_ISSUE_COUNT`,g=`${d}NETWORK_FAILURE_COUNT`,p=`${d}EXPECTED_FAILURE_COUNT`,m=["ValidationException","ThrottlingException"];let h,v;const E="cb-trafficPercentage";async function y(){try{await async function(){if(!function(){if("aws.amazon.com"===window.location.host){const e=o(),t=e.getConsentCookie()?.functional;if(!t)return console.log("Functional cookie not enabled. Disabling Chat."),!1}return!0}())return;const e=function(){const e=document.getElementById("mrc-sunrise-chat-loader")?.getAttribute("src");if(!e)return console.error("Missing required document element for chat script."),null;const t=e.split(".").slice(2,3).pop();return u.includes(t)?t:(console.error(`Unsupported stage value: ${t}`),null)}();if(!e)return;!function(e){const t="https",n="mrc-sunrise.marketing.aws.dev",o="us-east-1";h=`${t}://infra-api.${o}.${e}.${n}/custom-metric`,v=`${t}://chatbot-api.${o}.${e}.${n}/health-check`}(e);const t=window.location.hostname+window.location.pathname;if(!await async function(e){return!!localStorage||(await O(f,1,{logType:"INFO",messageObj:{hostname:e,message:"Browser HTML web storage, localStorage is null",userAgent:navigator.userAgent}}),!1)}(t))return;const{chatConfig:n,languageSupportedFeatures:d,theme:g,trafficPercentage:y,openonvisit:w,alwayson:C}=await async function(){const e=window.location.hostname+window.location.pathname,t={hostname:e,languageCode:r()};let n;try{n=await fetch(v,{method:"POST",body:JSON.stringify(t)})}catch(t){return void await A(t,e)}try{const o=await n.json(),r=o.error;if(r)return"The input fails to satisfy the constraints specified"===r.message&&await O(l,0,{logType:"ERROR",messageObj:{hostname:e,message:"Healthcheck returned invalid request exception",healthCheckParam:t,errorMessage:r.message}}),void m.includes(r.name);const{config:a,languageSupportedFeatures:i,theme:s,trafficPercentage:c,openonvisit:u,alwayson:d}=o.data;if(!(a&&Object.keys(a).length&&i&&Object.keys(i).length))throw new Error(`Invalid Healthcheck response body: ${JSON.stringify(o)}`);return{chatConfig:a,languageSupportedFeatures:i,theme:s,trafficPercentage:c,openonvisit:u,alwayson:d}}catch(t){return a(t)?void await A(t,e):i(t)?void await async function(e,t){return await O(p,1,{logType:"INFO",messageObj:{errorName:e.name,errorMessage:e.message,hostname:t,userAgent:navigator.userAgent}})}(t,e):void await O(l,0,{logType:"ERROR",messageObj:{hostname:e,message:"Error faced when parsing response",errorName:t.name,errorMessage:t.message}})}}()||{};if(n&&d&&function(e=1){if(1===e)return!0;let t;const n=localStorage.getItem(E);if(n){const e=JSON.parse(n);t="number"!=typeof e?.expiryTimestamp||e.expiryTimestamp<Date.now()?_():parseFloat(e.generatedPercentage)}else t=_();return t<e}(y)){try{!function({chatConfig:e,languageSupportedFeatures:t,theme:n,openonvisit:o,alwayson:r}){let a=document.getElementById("mrc-sunrise-chat");a||(a=document.createElement("div"),a.id="mrc-sunrise-chat",document.body.appendChild(a)),function({chatMountingPoint:e,languageSupportedFeatures:t,theme:n,openonvisit:o,alwayson:r}){(function(e,t){let n;if(e.dataset.language)n=e.dataset.language;else{const o=window.location.pathname?.split("/")[1];n=Object.keys(t).indexOf(o)>-1?o:c.DEFAULT,e.dataset.language=n}e.dataset.locale||(e.dataset.locale=s[n]);const o=t[n]||{},r=Object.keys(o);for(let t=0;t<r.length;t++){const n=r[t],a=`${n}Enabled`;e.dataset[a]||(e.dataset[a]=o[n])}})(e,t),function(e,t){t&&!e.dataset.theme&&("webview-blue"===t?(e.dataset.theme="blue",e.dataset.webview="true",e.dataset.eventApp="true",e.dataset.alwayson="true"):e.dataset.theme=t)}(e,n),function(e,t){e.dataset.openonvisit=e.dataset.openonvisit||t?"true":"false"}(e,o),function(e,t){e.dataset.alwayson=e.dataset.alwayson||t?"true":"false"}(e,r)}({chatMountingPoint:a,languageSupportedFeatures:t,theme:n,openonvisit:o,alwayson:r}),localStorage.setItem("cb-config",JSON.stringify(e));const i=document.createElement("script");i.src=e.chatAppScriptPath,i.defer="defer",document.body.appendChild(i)}({chatConfig:n,languageSupportedFeatures:d,theme:g,openonvisit:w,alwayson:C})}catch(e){return void await O(f,1,{logType:"INFO",messageObj:{errorName:e.name,errorMessage:e.message,hostname:t,message:"Mount chat script failed",userAgent:navigator.userAgent}})}await O(l,1,{logType:"INFO",messageObj:{hostname:t,message:"Chat script loaded"}})}}()}catch(e){}}const O=async(e,t,n)=>{try{await fetch(h,{method:"POST",body:JSON.stringify({metrics:[{metric:{name:e,value:t,unit:"Count"},logMessage:n}],namespace:"ChatUi"})})}catch(e){}};function _(){const e=Math.random();return localStorage.setItem(E,JSON.stringify({generatedPercentage:e,expiryTimestamp:Date.now()+432e5})),e}async function A(e,t){return await O(g,1,{logType:"INFO",messageObj:{errorName:e.name,errorMessage:e.message,hostname:t,userAgent:navigator.userAgent}})}y(),"object"==typeof process&&(e.exports=y)}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(330)})();