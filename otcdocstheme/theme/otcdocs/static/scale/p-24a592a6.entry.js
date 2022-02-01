import{r as t,h as i,a as n,g as o}from"./p-7c16486e.js";import{c as a}from"./p-c608c6dc.js";import{s as r}from"./p-bf956c1d.js";const s=class{constructor(i){t(this,i),this.variant="informational",this.dismissible=!1,this.autoHide=!1,this.autoHideDuration=3e3,this.close=()=>{this.opened=!1}}componentWillLoad(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}componentDidUpdate(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}connectedCallback(){r({source:this.hostElement,type:"warn"}),!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}async open(){this.opened=!0}handleIcons(){if(this.variant)switch(this.variant){case"success":return i("scale-icon-alert-success",{class:"notification-banner__icon-success",color:"#187431","accessibility-title":"success"});case"informational":return i("scale-icon-alert-information",{class:"notification-banner__icon-information","accessibility-title":"information"});case"error":return i("scale-icon-alert-error",{class:"notification-banner__icon-error","accessibility-title":"error"});case"warning":return i("scale-icon-alert-error",{class:"notification-banner__icon-information",color:"#AE461C","accessibility-title":"information"})}}render(){return this.opened?i(n,null,i("div",{part:this.getBasePartMap(),class:this.getCssClassMap(),tabindex:"0"},i("div",{part:"container",class:"notification-banner__container"},this.handleIcons(),i("div",{part:"heading",class:"notification-banner__heading"},i("slot",null),this.dismissible&&i("button",{part:"button-dismissable",class:"notification-banner__button-close",onClick:()=>this.close(),onKeyDown:t=>{"Enter"===t.key&&this.close()}},i("scale-icon-action-circle-close",{"accessibility-title":"close"})),this.hasSlotText&&i("div",{part:"text",class:"notification-banner__text"},i("slot",{name:"text"})),this.hasSlotLink&&i("scale-link",{href:this.href,class:"notification-banner__link"},i("slot",{name:"link"})))))):null}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const i="notification-banner",n="basePart"===t?"":`${i}--`;return a(i,this.variant&&`${n}variant-${this.variant}`,this.hasSlotText&&`${n}has-text`,!this.hasSlotText&&`${n}has-no-text`)}get hostElement(){return o(this)}};s.style=":host{--width:100%;--radius:var(--scl-radius-8);--background-error:hsla(353.79999999999995, 100%, 88.6%, 0.35);--background-warning:hsla(33.5, 100%, 75.1%, 0.3);--background-informational:hsla(190.20000000000005, 100%, 92%, 0.75);--background-success:hsl(98.80000000000001, 49.7%, 61%, 0.2)}.notification-banner{border-radius:var(--radius);width:var(--width);position:relative;box-shadow:var(--scl-shadow-level-1);min-height:48px}.notification-banner--variant-error{background-color:var(--background-error)}.notification-banner--variant-warning{background-color:var(--background-warning)}.notification-banner--variant-informational{background-color:var(--background-informational)}.notification-banner--variant-success{background-color:var(--background-success)}.notification-banner__heading{margin:14px 48px 14px 48px;font-weight:var(--scl-font-weight-bold);line-height:48px}.notification-banner__text ::slotted(*){margin:-10px 0px -25px 0px;line-height:16px;padding-bottom:15px}.notification-banner--has-no-text .notification-banner__link ::slotted(*){margin:0;padding:0px 0px 0px 16px}.notification-banner--has-text .notification-banner__link ::slotted(*){margin:20px 0 0 0;padding-bottom:15px;line-height:20px}::slotted(*){font-weight:var(--scl-font-weight-regular)}.notification-banner__button-close{position:absolute;top:8px;right:13.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-banner__button-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%}.notification-banner__button-close:hover svg{background-color:white;color:var(--scl-color-primary-hover)}.notification-banner__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--scl-color-background-success)}.notification-banner__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--scl-color-background-error)}.notification-banner__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--scl-color-text-info)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-banner__icon-close{color:white}}";export{s as scale_notification_banner}