import{r as t,c as r,h as o,a as e,g as i}from"./p-7c16486e.js";import{c as s}from"./p-c608c6dc.js";import{e as a}from"./p-3bc9966d.js";var l;!function(t){t.xs="12",t.small="16",t.regular="22",t.large="24"}(l||(l={}));let n=0;const c=class{constructor(o){t(this,o),this.scaleClick=r(this,"scale-click",7),this.scaleClickLegacy=r(this,"scaleClick",7),this.size="regular",this.background="white",this.colorScheme="color",this.variant="color",this.disabled=!1,this.selected=!1,this.iconOnly=!1,this.iconPosition="before",this.radius=null,this.ariaLangSelected="selected",this.ariaLangDeselected="deselected",this.ariaDescriptionTranslation="$selected",this.hasScaleIcon=!1,this.handleClick=t=>{t.preventDefault(),this.selected=!this.selected,this.handleIconShape(),this.scaleClick.emit({id:this.toggleButtonId,selected:this.selected}),a(this,"scaleClick",{id:this.toggleButtonId,selected:this.selected})},this.handleIconShape=()=>{this.hasScaleIcon&&Array.from(this.hostElement.children).forEach((t=>{"SCALE-ICON"===t.nodeName.substr(0,10)&&(this.selected?t.setAttribute("selected","true"):t.removeAttribute("selected"))}))}}connectedCallback(){this.setIconPositionProp(),this.handleIconShape()}componentDidLoad(){this.handleIconSize()}componentDidRender(){this.handleIconSize()}componentWillLoad(){null==this.toggleButtonId&&(this.toggleButtonId="toggle-button-"+n++)}getAriaDescriptionTranslation(){const t=this.selected?this.ariaLangSelected:this.ariaLangDeselected;return this.ariaDescriptionTranslation.replace(/\$position/g,`${this.position}`).replace(/\$selected/g,`${t}`)}handleIconSize(){Array.from(this.hostElement.children).forEach((t=>{"SCALE-ICON"===t.tagName.substr(0,10)&&t.setAttribute("size",l[this.size])}))}setIconPositionProp(){const t=Array.from(this.hostElement.childNodes).filter((t=>("SCALE-ICON"===t.nodeName.substr(0,10)&&(this.hasScaleIcon=!0),!(3===t.nodeType&&""===t.nodeValue.trim()))));!this.iconOnly&&t&&t.length&&t[t.length-1]&&"SCALE-ICON"===t[t.length-1].nodeName.substr(0,10)&&(this.iconPosition="after")}render(){return o(e,null,this.styles&&o("style",null,this.styles),o("button",{class:this.getCssClassMap(),id:this.toggleButtonId,onClick:this.handleClick,disabled:this.disabled,type:"button","aria-label":this.ariaLabel,"aria-pressed":this.selected,part:this.getBasePartMap(),"aria-description":this.getAriaDescriptionTranslation()},o("slot",null)))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const r="basePart"===t?"":"toggle-button--";return s("toggle-button",this.size&&`${r}${this.size}`,this.background&&`${r}${"grey"===this.background?"primary":"secondary"}`,!this.iconOnly&&this.iconPosition&&`toggle-button--icon-${this.iconPosition}`,this.iconOnly&&`${r}icon-only`,!this.disabled&&this.selected&&`${r}selected`,this.radius&&`${r}${this.radius}`,this.colorScheme&&`${r}${this.colorScheme}`,this.variant&&`${r}${this.variant}`,!this.hideBorder&&`${r}border`)}get hostElement(){return i(this)}};c.style=":host{--width:auto;--spacing-x:var(--scl-spacing-24);--spacing-x-icon-only:var(--scl-spacing-8);--min-height:var(--scl-spacing-24);--height-xs:var(--scl-spacing-24);--height-small:var(--scl-spacing-32);--height-regular:var(--scl-spacing-40);--height-large:var(--scl-spacing-48);--radius:var(--scl-radius-4);--transition:all var(--scl-motion-duration-fast)\n      var(--scl-motion-easing-standard),\n    border-radius 0ms;--box-shadow-focus:inset 0 0 0 var(--scl-spacing-2) var(--scl-color-focus);--font-weight:var(--scl-font-weight-bold);--font-size-large:var(--scl-font-size-16);--font-size-small:var(--scl-font-size-14);--font-size-xs:var(--scl-font-size-12);--line-height:var(--scl-font-line-height-150);--spacing-icon-x:var(--scl-spacing-8);--vertical-align:middle;--border-color:var(--scl-color-grey-90);--border-color-disabled:var(--scl-color-background-disabled);--font-size-small:var(--scl-font-size-12);--line-height-small:var(--scl-font-line-height-133);--min-height-small:var(--scl-spacing-32);--radius-primary:var(--radius);--background-primary:var(--scl-color-grey-10);--background-primary-disabled:var(--scl-color-grey-0);--color-primary:var(--scl-color-grey-90);--color-primary-hover:var(--scl-color-primary-hover);--color-primary-active:var(--scl-color-primary-active);--color-primary-disabled:var(--scl-color-grey-20);--background-secondary:var(--scl-color-white);--color-selected:var(--scl-color-white);--background-selected-light:var(--scl-color-primary);--background-selected-hover-light:var(--color-primary-hover);--background-selected-active-light:var(--scl-color-primary-active);--background-selected-dark:var(--scl-color-grey-90);--background-selected-hover-dark:var(--scl-color-grey-70);--background-selected-active-dark:var(--scl-color-grey-90);--color-high-contrast:var(--scl-color-white)}.toggle-button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);width:var(--width);padding-left:var(--spacing-x);padding-right:var(--spacing-x);vertical-align:var(--vertical-align);transition:var(--transition);margin:0}.toggle-button--primary{background:var(--background-primary)}.toggle-button--secondary{background:var(--background-secondary)}.toggle-button--icon-before ::slotted(*){margin-right:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-after ::slotted(*){margin-left:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-only ::slotted(*){pointer-events:none}.toggle-button--xs{height:var(--height-xs);font-size:var(--font-size-xs)}.toggle-button--small{height:var(--height-small);font-size:var(--font-size-small)}.toggle-button--regular{height:var(--height-regular);font-size:var(--font-size-large)}.toggle-button--large{height:var(--height-large);font-size:var(--font-size-large)}.toggle-button:not(.button--disabled):focus{box-shadow:var(--box-shadow-focus)}.toggle-button:not(.button--disabled):hover{color:var(--color-primary-hover)}.toggle-button:not(.button--disabled):active{color:var(--scl-color-primary-active)}.toggle-button:disabled{color:var(--color-primary-disabled);pointer-events:none;border:1px solid var(--border-color-disabled)}.toggle-button:disabled.toggle-button--primary{background:var(--background-primary-disabled)}.toggle-button--selected.toggle-button--color{color:var(--color-selected);background:var(--background-selected-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:hover{color:var(--color-selected);background:var(--background-selected-hover-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:active{color:var(--color-selected);background:var(--background-selected-active-light)}.toggle-button--selected.toggle-button--monochrome{color:var(--color-selected);background:var(--background-selected-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:hover{color:var(--color-selected);background:var(--background-selected-hover-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:active{color:var(--color-selected);background:var(--background-selected-active-dark)}.toggle-button--border{border:1px solid var(--border-color)}.toggle-button--left,.toggle-button--left:disabled{border-right:0;border-radius:var(--radius-primary) 0 0 var(--radius-primary)}.toggle-button--right,.toggle-button--right:disabled{border-left:0;border-radius:0 var(--radius-primary) var(--radius-primary) 0}.toggle-button--both,.toggle-button--both:disabled{border-radius:var(--radius-primary)}.toggle-button--all,.toggle-button--all:disabled{border-radius:var(--radius-primary)}.toggle-button--neither,.toggle-button--neither:disabled{border-right:0;border-left:0;border-radius:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.toggle-button{color:var(--color-high-contrast)}}";export{c as scale_toggle_button}