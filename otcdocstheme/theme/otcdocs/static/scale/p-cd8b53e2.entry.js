import{r as t,h as i,a as s,g as l}from"./p-7c16486e.js";const e=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M23.5 6.665V17.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V6.715l8.97 7.61a3.89 3.89 0 005.06 0zm0-3.165v1.19l-9.945 8.49a2.395 2.395 0 01-3.115 0L.5 4.745V3.5z","fill-rule":"evenodd"}:{d:"M.5 3.5v14c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-14zM22 5v.95l-8.45 7.25c-.9.75-2.2.75-3.1 0L2 5.95V5zm-1.5 14h-17c-.85 0-1.5-.65-1.5-1.5V7.95l7.45 6.4c.75.65 1.65.95 2.55.95s1.8-.3 2.55-.95L22 7.95v9.55c0 .85-.65 1.5-1.5 1.5z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--scl-motion-duration-fast)\n    var(--scl-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_communication_email}