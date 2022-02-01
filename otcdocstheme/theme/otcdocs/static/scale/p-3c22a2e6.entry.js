import{r as t,h as e,a as n,g as a}from"./p-7c16486e.js";import{c as r}from"./p-c608c6dc.js";import{s as i}from"./p-bf956c1d.js";function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function u(t){s(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function h(t,e){s(2,arguments);var n=u(t).getTime(),a=o(e);return new Date(n+a)}function d(t){return t.getTime()%6e4}function l(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+d(e))%6e4:d(e))}function c(t,e){s(2,arguments);var n=o(e);return h(t,1e3*n)}function m(t,e){s(2,arguments);var n=u(t),a=u(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function f(t,e){s(2,arguments);var n=u(t),a=u(e),r=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return 12*r+i}function g(t,e){s(2,arguments);var n=u(t),a=u(e);return n.getTime()-a.getTime()}function p(t,e){s(2,arguments);var n=u(t),a=u(e),r=m(n,a),i=Math.abs(f(n,a));n.setMonth(n.getMonth()-r*i);var o=m(n,a)===-r,h=r*(i-o);return 0===h?0:h}function v(t,e){s(2,arguments);var n=g(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var w={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},M={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function S(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=a.match(i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth]);if(!o)return null;var s,u=o[0],h=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(h)?function(t){for(var e=0;e<t.length;e++)if(t[e].test(u))return e}(h):function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].test(u))return e}(h),s=t.valueCallback?t.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(u.length)}}}var W,P={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof b[t]?b[t]:1===e?b[t].one:b[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:w,formatRelative:function(t){return M[t]},localize:{ordinalNumber:function(t){var e=Number(t),n=e%100;if(n>20||n<10)switch(n%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(W.matchPattern);if(!r)return null;var i=r[0],o=n.match(W.parsePattern);if(!o)return null;var s=W.valueCallback?W.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function j(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},t)}const k=class{constructor(e){t(this,e),this.size="",this.variant="",this.autoHide=!1,this.animated=!0,this.positionTop=12,this.positionRight=12,this.fadeDuration=500,this.progress=0,this.toastHeightWithOffset=0,this.hideToast=!1,this.timerId=null,this.close=()=>{clearInterval(this.timerId),this.hideToast=!0,setTimeout((()=>{this.timerId=null,this.opened=!1,this.progress=0}),this.fadeDuration)},this.getTime=()=>this.time&&function(t,e,n){s(2,arguments);var a=n||{},r=a.locale||P;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=m(t,e);if(isNaN(i))throw new RangeError("Invalid time value");var o,h,d=j(a);d.addSuffix=Boolean(a.addSuffix),d.comparison=i,i>0?(o=u(e),h=u(t)):(o=u(t),h=u(e));var c,f=v(h,o),g=(l(h)-l(o))/1e3,b=Math.round((f-g)/60);if(b<2)return a.includeSeconds?f<5?r.formatDistance("lessThanXSeconds",5,d):f<10?r.formatDistance("lessThanXSeconds",10,d):f<20?r.formatDistance("lessThanXSeconds",20,d):f<40?r.formatDistance("halfAMinute",null,d):r.formatDistance(f<60?"lessThanXMinutes":"xMinutes",1,d):0===b?r.formatDistance("lessThanXMinutes",1,d):r.formatDistance("xMinutes",b,d);if(b<45)return r.formatDistance("xMinutes",b,d);if(b<90)return r.formatDistance("aboutXHours",1,d);if(b<1440){var y=Math.round(b/60);return r.formatDistance("aboutXHours",y,d)}if(b<2520)return r.formatDistance("xDays",1,d);if(b<43200){var w=Math.round(b/1440);return r.formatDistance("xDays",w,d)}if(b<86400)return c=Math.round(b/43200),r.formatDistance("aboutXMonths",c,d);if((c=p(h,o))<12){var M=Math.round(b/43200);return r.formatDistance("xMonths",M,d)}var x=c%12,S=Math.floor(c/12);return x<3?r.formatDistance("aboutXYears",S,d):x<9?r.formatDistance("overXYears",S,d):r.formatDistance("almostXYears",S+1,d)}(function(t,e){s(2,arguments);var n=o(e);return c(t,-n)}(this.time,3),new Date,{addSuffix:!0}),this.setToastTimeout=()=>{this.opened&&!1!==this.autoHide&&!this.timerId&&(this.timerId=setInterval((()=>{this.progress+=1/(this.getAutoHide()/1e3),this.progress>=100&&this.close()}),10))},this.transitions=t=>`\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n        top: -${t}px;\n      }\n      to {\n        opacity: 1;\n        top: ${this.positionTop}px;\n      }\n    }\n\n    @keyframes fadeOut {\n      from {\n        opacity: 1;\n        top: ${this.positionTop}px;\n      }\n      to {\n        opacity: 0;\n        top: -${t}px;\n      }\n    }\n  `,this.animationStyle=t=>`\n      .toast--show {\n        right: ${this.positionRight}px;\n        animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;\n        top: ${this.positionTop}px;\n        opacity: 1;\n      },\n      .toast--show {\n        right: ${this.positionRight}px;\n        animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;\n        top: -${t}px;\n        opacity: 0;\n      }\n    `}connectedCallback(){i({source:this.element,type:"warn"})}disconnectedCallback(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null,this.opened=!1,this.progress=0)}async open(){this.opened=!0,this.hideToast=!1}render(){return this.setToastTimeout(),e(n,null,this.styles&&e("style",null,this.styles),e("style",null,this.transitions(this.toastHeightWithOffset)),e("style",null,this.animationStyle(this.toastHeightWithOffset)),e("div",{class:this.getCssClassMap(),part:this.getBasePartMap()},e("div",{part:"header",class:"toast__header"},e("slot",{name:"header"}),e("small",null,this.getTime()),e("a",{onClick:this.close},e("span",{"aria-hidden":"true"},"×"))),this.autoHide&&e("div",{part:"progress",class:"toast__progress",style:{width:`${this.progress}%`}}," "),e("div",{part:"body",class:"toast__body"},e("slot",null))))}getToastHeightWithOffset(){const t=this.element.shadowRoot.querySelector(".toast").scrollHeight;this.toastHeightWithOffset=t+this.positionTop}getAutoHide(){return"number"==typeof this.autoHide||"string"==typeof this.autoHide?Number(this.autoHide):0}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const e="basePart"===t?"":"toast";return r("basePart"===t?"base":"toast",this.size&&`${e}--size-${this.size}`,this.variant&&`${e}--variant-${this.variant}`,!!this.opened&&`${e}--opened`,!this.hideToast&&`${e}--show`,!!this.hideToast&&`${e}--hide`)}get element(){return a(this)}};k.style=":host{--width:400px;--radius:var(--scl-radius-4);--background:var(--scl-color-background-standard);--box-shadow:var(--scl-shadow-level-0);--spacing:var(--scl-spacing-16);--border-header:1px solid var(--scl-color-grey-20);--font-size-header:var(--scl-font-variant-heading-4-size);--font-size-header-small:var(--scl-font-variant-smaller-size);--height-progress:var(--scl-spacing-2)}.toast{width:var(--width);display:flex;opacity:0;z-index:1;position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:var(--radius);flex-direction:column;justify-content:space-between}.toast__body{padding:var(--spacing)}.toast__header{margin:0;display:flex;padding:var(--spacing);border-bottom:var(--border-header);justify-content:space-between;font-size:var(--font-size-header)}.toast__header a{cursor:pointer}.toast__header small{margin-top:5px;margin-left:120px;font-size:var(--font-size-header-small)}.toast__progress{left:0;bottom:0;height:var(--height-progress);display:block;overflow:hidden;position:absolute;background:red}";export{k as scale_toast}