window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.SettingsIconFre.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[120],{1921:function(t,e,o){"use strict";var a=o(1842),r=o(0),n=o(1),i=o(1843),s=o(1844),l=o(1825),m=o(525),c=o(399),d=o(524),u=o(1823),h=o(1587),b=Object(i.a)(),f=function(t){function e(e){var o=t.call(this,e)||this;return o.rootElement=Object(s.a)(),o._onKeyDown=function(t){o.props.onDismiss&&27===t.which&&o.props.onDismiss()},o.state={},o}return r.__extends(e,t),e.prototype.componentDidMount=function(){this.props.onDismiss&&document.addEventListener("keydown",this._onKeyDown,!1)},e.prototype.componentWillUnmount=function(){this.props.onDismiss&&document.removeEventListener("keydown",this._onKeyDown)},e.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},e.prototype.render=function(){var t,e,o,a,i,s=this.props,l=s.children,h=s.illustrationImage,f=s.primaryButtonProps,p=s.secondaryButtonProps,g=s.headline,y=s.hasCondensedHeadline,x=s.hasCloseIcon,B=s.onDismiss,C=s.closeButtonAriaLabel,_=s.hasSmallHeadline,v=s.isWide,w=s.styles,E=s.theme,N=s.ariaDescribedBy,T=s.ariaLabelledBy,S=b(w,{theme:E,hasCondensedHeadline:y,hasSmallHeadline:_,isWide:v,primaryButtonClassName:f?f.className:void 0,secondaryButtonClassName:p?p.className:void 0});return h&&h.src&&(t=n.createElement("div",{className:S.imageContent},n.createElement(u.a,r.__assign({},h)))),g&&(e=n.createElement("div",{className:S.header},n.createElement("p",{className:S.headline,id:T},g))),l&&(o=n.createElement("div",{className:S.body},n.createElement("p",{className:S.subText,id:N},l))),(f||p)&&(a=n.createElement("div",{className:S.footer},f&&n.createElement(m.a,r.__assign({},f,{className:S.primaryButton})),p&&n.createElement(c.a,r.__assign({},p,{className:S.secondaryButton})))),x&&(i=n.createElement(d.IconButton,{className:S.closeButton,iconProps:{iconName:"Cancel"},title:C,ariaLabel:C,onClick:B})),n.createElement("div",{className:S.content,ref:this.rootElement,role:"dialog",tabIndex:-1,"aria-labelledby":T,"aria-describedby":N,"data-is-focusable":!0},t,n.createElement("div",{className:S.bodyContent},e,o,a),i)},e.defaultProps={hasCondensedHeadline:!1,imageProps:{imageFit:h.b.cover,width:364,height:130}},e}(l.a),p=o(41),g={root:"ms-TeachingBubble",body:"ms-TeachingBubble-body",bodyContent:"ms-TeachingBubble-bodycontent",closeButton:"ms-TeachingBubble-closebutton",content:"ms-TeachingBubble-content",footer:"ms-TeachingBubble-footer",header:"ms-TeachingBubble-header",headerIsCondensed:"ms-TeachingBubble-header--condensed",headerIsSmall:"ms-TeachingBubble-header--small",headerIsLarge:"ms-TeachingBubble-header--large",headline:"ms-TeachingBubble-headline",image:"ms-TeachingBubble-image",primaryButton:"ms-TeachingBubble-primaryButton",secondaryButton:"ms-TeachingBubble-secondaryButton",subText:"ms-TeachingBubble-subText",button:"ms-Button",buttonLabel:"ms-Button-label"},y=Object(p.keyframes)({"0%":{transform:"matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"1.7%":{transform:"matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"2.35%":{transform:"matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"3.4%":{transform:"matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"4.7%":{transform:"matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"5.11%":{transform:"matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"6.81%":{transform:"matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"7.06%":{transform:"matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"8.76%":{transform:"matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"9.36%":{transform:"matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"10.66%":{transform:"matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"12.16%":{transform:"matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"12.61%":{transform:"matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"14.51%":{transform:"matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"14.96%":{transform:"matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"17.77%":{transform:"matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"18.37%":{transform:"matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"20.52%":{transform:"matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"22.22%":{transform:"matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"26.08%":{transform:"matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"29.93%":{transform:"matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"31.63%":{transform:"matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"37.64%":{transform:"matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"42.74%":{transform:"matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"45.35%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"49.9%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"50%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"52.15%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"54.3%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"56.46%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"58.61%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"64.16%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"69.72%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"80.83%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"91.99%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"100%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}),x=Object(p.keyframes)({"0%":{opacity:0,animationTimingFunction:p.AnimationVariables.easeFunction2},"26.26%":{opacity:1},"100%":{opacity:1}}),B=function(t){return[{display:"block",maxWidth:364,border:0,boxShadow:"none !important",width:"calc(100% + 1px)",animationName:y+", "+x,animationDuration:"2000ms",animationTimingFunction:"linear",animationFillMode:"both"},t&&{maxWidth:"456px"}]},C=function(t){var e,o,a,r,n,i,s=t.calloutClassName,l=t.hasCondensedHeadline,m=t.hasSmallHeadline,c=t.isWide,d=t.primaryButtonClassName,u=t.secondaryButtonClassName,h=t.theme,b=!l&&!m,f=h.palette,y=Object(p.getGlobalClassNames)(g,h);return{root:[y.root,s],body:[y.body,{selectors:{":not(:last-child)":{marginBottom:"20px"}}}],bodyContent:[y.bodyContent,{padding:"20px"},c&&{maxWidth:"302px"}],closeButton:[y.closeButton,{position:"absolute",right:0,top:0,color:f.white,fontSize:p.FontSizes.small,selectors:{":hover":{background:"transparent"}}}],content:[y.content].concat(B(c),[c&&{display:"flex"}]),footer:[y.footer,{display:"flex",selectors:(r={},r["."+y.button+":not(:first-child)"]={marginLeft:"20px"},r)}],header:[y.header].concat((e=y,o=l,a=m,o?[e.headerIsCondensed]:a?[e.headerIsSmall,{selectors:{":not(:last-child)":{marginBottom:"14px"}}}]:[e.headerIsLarge,{selectors:{":not(:last-child)":{marginBottom:"14px"}}}]),[(l||m)&&[p.DefaultFontStyles.medium,{marginRight:"10px",fontWeight:p.FontWeights.semibold}]]),headline:[y.headline,{margin:0,color:f.white},b&&[p.DefaultFontStyles.xxLarge,{fontWeight:p.FontWeights.light}]],imageContent:[y.header,y.image,c&&{display:"flex",alignItems:"center",paddingLeft:"20px",maxWidth:"154px"}],primaryButton:[y.primaryButton,d,{backgroundColor:f.white,borderColor:f.white,whiteSpace:"nowrap",selectors:(n={},n["."+y.buttonLabel]=[p.DefaultFontStyles.medium,{color:f.themePrimary}],n[":hover"]={backgroundColor:f.themeLighter,borderColor:f.themeLighter},n[":focus"]={backgroundColor:f.themeLighter,borderColor:f.white},n[":active"]={backgroundColor:f.white,borderColor:f.white},n)}],secondaryButton:[y.secondaryButton,u,{backgroundColor:f.themePrimary,borderColor:f.white,whiteSpace:"nowrap",selectors:(i={},i["."+y.buttonLabel]=[p.DefaultFontStyles.medium,{color:f.white}],i["&:hover, &:focus"]={backgroundColor:f.themeDarkAlt,borderColor:f.white},i[":active"]={backgroundColor:f.themePrimary,borderColor:f.white},i)}],subText:[y.subText,{margin:0,fontSize:p.FontSizes.medium,color:f.white,fontWeight:p.FontWeights.semilight}]}},_=Object(a.a)(f,C),v=o(1885),w=Object(i.a)(),E=function(t){function e(e){var o=t.call(this,e)||this;return o.rootElement=Object(s.a)(),o.state={},o._defaultCalloutProps={beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:12},o}return r.__extends(e,t),e.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},e.prototype.render=function(){var t,e,o,a=this.props,i=a.calloutProps,s=a.targetElement,l=a.onDismiss,m=a.isWide,c=a.styles,d=a.theme,u=r.__assign({},this._defaultCalloutProps,i),h={theme:d,isWide:m,calloutClassName:u?u.className:void 0},b=w(c,h);return n.createElement(v.a,r.__assign({target:s,onDismiss:l},u,{className:b.root,styles:(t=h,e=t.isWide,o=t.theme.palette,{root:B(e).slice(),beak:[{background:o.themePrimary}],calloutMain:[{background:o.themePrimary}]}),hideOverflow:!0}),n.createElement("div",{ref:this.rootElement},n.createElement(_,r.__assign({},this.props))))},e.defaultProps={calloutProps:{beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:12}},e}(l.a);o.d(e,"a",function(){return N});var N=Object(a.a)(E,C,void 0,{scope:"TeachingBubble"})},373:function(t,e,o){"use strict";var a,r,n,i;o.d(e,"b",function(){return a}),o.d(e,"a",function(){return n}),(r=a||(a={}))[r.button=0]="button",r[r.anchor=1]="anchor",(i=n||(n={}))[i.normal=0]="normal",i[i.primary=1]="primary",i[i.hero=2]="hero",i[i.compound=3]="compound",i[i.command=4]="command",i[i.icon=5]="icon",i[i.default=6]="default"},4565:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(18),r=["callout_Gotit","callout_Notnow","callout_Panel_Title","callout_Panel_Body","callout_Icon_Title","callout_Icon_Body"];e.OwaConfiguratorStringsStringModule=a.registerStringPackage("owa-configurator-strings",null,r);var n={};r.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e.OwaConfiguratorStringsStringModule.strings.get(t)}})}),e.getOwaConfiguratorStrings=function(){return n},e.default=n},5701:function(t,e,o){"use strict";o.r(e);var a=o(0),r=o(1),n=o(14),i=o(1921),s=o(373),l=o(186),m=o(4565),c=o.n(m),d=o(138),u=o(176),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onClose=function(){Object(l.e)(e.props.lid)},e}return a.__extends(e,t),e.prototype.render=function(){var t={buttonType:s.a.primary,children:c.a.callout_Gotit,onClick:this.onClose},e={src:Object(d.resolve)(Object(u.a)(),"resources/images/callout/01.png")};return r.createElement(i.a,{calloutProps:{beakWidth:15,directionalHint:5,minPagePadding:50},targetElement:this.props.target(),hasCloseIcon:!0,onDismiss:this.onClose,illustrationImage:e,hasSmallHeadline:!0,isWide:!0,headline:c.a.callout_Icon_Title,primaryButtonProps:t},c.a.callout_Icon_Body)},e=a.__decorate([n.observer,l.d],e)}(r.Component);o.d(e,"SettingIconFirstRunCallout",function(){return h})}}]);
//# sourceMappingURL=owa.SettingsIconFre.js.map
window.scriptsLoaded['owa.SettingsIconFre.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.SettingsIconFre.js'] = (new Date()).getTime();