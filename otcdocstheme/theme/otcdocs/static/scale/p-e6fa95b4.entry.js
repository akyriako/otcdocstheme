import{r as t,h as s,a as i,g as e}from"./p-7c16486e.js";const l=class{constructor(s){t(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return s(i,null,s("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&s("title",null,this.accessibilityTitle),s("g",{fill:"currentColor"===this.fill?this.color:this.fill},s("g",null,s("path",this.selected?{"fill-rule":"evenodd",d:"M20 6.25h-2.25l-1.5-2.5h-8.5l-1.5 2.5H4A2.245 2.245 0 001.75 8.5V17A2.245 2.245 0 004 19.25h16A2.245 2.245 0 0022.25 17V8.5A2.245 2.245 0 0020 6.25zm-8 9.42a3.67 3.67 0 110-7.34 3.67 3.67 0 010 7.34zm7-5.17a1 1 0 110-2 1 1 0 010 2z"}:{d:"M16.7 3l1.5 2.5H20c1.65 0 3 1.35 3 3V17c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V8.5c0-1.65 1.35-3 3-3h1.85L7.35 3zm-.9 1.5H8.15L6.65 7H4c-.85 0-1.5.65-1.5 1.5V17c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V8.5c0-.85-.65-1.5-1.5-1.5h-2.7zM12 7c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5zm7 0a1 1 0 110 2 1 1 0 010-2z","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};l.style="scale-icon{--display:inline-flex;--transition:all var(--scl-motion-duration-fast)\n    var(--scl-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{l as scale_icon_device_photo_camera}