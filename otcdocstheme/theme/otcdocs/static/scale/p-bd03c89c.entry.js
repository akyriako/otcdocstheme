import{r as t,h as s,a as i,g as l}from"./p-7c16486e.js";const e=class{constructor(s){t(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return s(i,null,s("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&s("title",null,this.accessibilityTitle),s("g",{fill:"currentColor"===this.fill?this.color:this.fill},s("g",null,s("path",this.selected?{d:"M21.061 2.836l-8.62-1.274L2.346 11.657a2.988 2.988 0 000 4.232l5.643 5.662a2.988 2.988 0 004.256 0l10.07-10.11zm-2.84 4.237a.98.98 0 11-1.36-1.411.98.98 0 011.36 1.41z","fill-rule":"evenodd"}:{d:"M12.445 1.535l8.78 1.3 1.295 8.78L12.215 21.92a3.052 3.052 0 01-4.32 0l-5.76-5.76a3.051 3.051 0 010-4.32l10.31-10.305zm.525 1.59L3.195 12.9A1.543 1.543 0 002.74 14c0 .415.16.805.455 1.1l5.765 5.76c.295.295.685.455 1.1.455s.805-.16 1.1-.455l9.77-9.77-1.03-6.935zM17.5 5.5a1 1 0 110 2 1 1 0 010-2z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--scl-motion-duration-fast)\n    var(--scl-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_content_price_tag}