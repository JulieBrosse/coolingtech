window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.vendors~Addins~Diagnostics~FeedbackForm~FlexPane~FolderPermissions~GroupCreate~GroupEdit~GroupSettin~d190d303.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[0],{1900:function(e,t,o){"use strict";var n,i;o.d(t,"a",function(){return n}),(i=n||(n={}))[i.smallFluid=0]="smallFluid",i[i.smallFixedFar=1]="smallFixedFar",i[i.smallFixedNear=2]="smallFixedNear",i[i.medium=3]="medium",i[i.large=4]="large",i[i.largeFixed=5]="largeFixed",i[i.extraLarge=6]="extraLarge",i[i.custom=7]="custom"},3351:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n=function(){return!!(window&&window.navigator&&window.navigator.userAgent)&&/iPad|iPhone|iPod/i.test(window.navigator.userAgent)}},3740:function(e,t,o){"use strict";var n,i=o(1842),s=o(0),a=o(1),r=o(1843),l=o(1844),c=o(1663),d=o(3351),u=o(563),p=o(1887),m=o(1845),h=o(372),f=o(1825),g=o(41),v=o(402),_=o(1900),b=o(1888),x=o(537),O=o(1911),y=o(524),F=Object(r.a)(),w=function(e){function t(t){var o=e.call(this,t)||this;return o._panel=Object(l.a)(),o._content=Object(l.a)(),o.dismiss=function(e){o.state.isOpen&&(o.props.onDismiss&&o.props.onDismiss(e),(!e||e&&!e.defaultPrevented)&&o.setState({isOpen:!1,isAnimating:!0},function(){o._async.setTimeout(o._onTransitionComplete,200)}))},o._allowScrollOnPanel=function(e){e?(Object(c.b)(e,o._events),Object(d.a)()&&(e.style.height=window.innerHeight+"px")):o._events.off(o._scrollableContent),o._scrollableContent=e},o._onRenderNavigation=function(e){var t=e.closeButtonAriaLabel,n=e.hasCloseButton,i=Object(g.getTheme)();return n?a.createElement("div",{className:o._classNames.navigation},a.createElement(y.IconButton,{styles:{root:{height:"auto",width:"44px",color:i.palette.neutralSecondary,fontSize:g.IconFontSizes.large},rootHovered:{color:i.palette.neutralPrimary}},className:o._classNames.closeButton,onClick:o._onPanelClick,ariaLabel:t,"data-is-visible":!0,iconProps:{iconName:"Cancel"}})):null},o._onRenderHeader=function(e,t,n){var i=e.headerText;return i?a.createElement("div",{className:o._classNames.header},a.createElement("p",{className:o._classNames.headerText,id:n,role:"heading","aria-level":2},i)):null},o._onRenderBody=function(e){return a.createElement("div",{ref:o._content,className:o._classNames.content,"data-is-scrollable":!0},e.children)},o._onRenderFooter=function(e){var t=o.props.onRenderFooterContent,n=void 0===t?null:t;return n?a.createElement("div",{className:o._classNames.footer},a.createElement("div",{className:o._classNames.footerInner},n())):null},o._onPanelClick=function(){o.dismiss()},o._onTransitionComplete=function(){o.setState({isAnimating:!1}),!o.state.isOpen&&o.props.onDismissed&&o.props.onDismissed()},o._warnDeprecations({ignoreExternalFocusing:"focusTrapZoneProps",forceFocusInsideTrap:"focusTrapZoneProps",firstFocusableSelector:"focusTrapZoneProps"}),o.state={isFooterSticky:!1,isOpen:!1,isAnimating:!1,id:Object(u.c)("Panel")},o}return s.__extends(t,e),t.prototype.componentDidMount=function(){this._events.on(window,"resize",this._updateFooterPosition),this._shouldListenForOuterClick(this.props)&&this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0),this.props.isOpen&&this.open()},t.prototype.componentDidUpdate=function(e){var t=this._shouldListenForOuterClick(this.props),o=this._shouldListenForOuterClick(e);t&&!o?this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0):!t&&o&&this._events.off(document.body,"mousedown",this._dismissOnOuterClick,!0)},t.prototype.componentWillReceiveProps=function(e){e.isOpen!==this.state.isOpen&&(e.isOpen?this.open():this.dismiss())},t.prototype.render=function(){var e=this.props,t=e.className,o=void 0===t?"":t,n=e.elementToFocusOnDismiss,i=e.firstFocusableSelector,r=e.focusTrapZoneProps,l=e.forceFocusInsideTrap,c=e.hasCloseButton,d=e.headerText,u=e.headerClassName,h=void 0===u?"":u,f=e.ignoreExternalFocusing,g=e.isBlocking,y=e.isFooterAtBottom,w=e.isLightDismiss,C=e.isHiddenOnDismiss,N=e.layerProps,T=e.type,k=e.styles,P=e.theme,S=e.customWidth,E=e.onLightDismissClick,D=void 0===E?this._onPanelClick:E,j=e.onRenderNavigation,L=void 0===j?this._onRenderNavigation:j,B=e.onRenderHeader,I=void 0===B?this._onRenderHeader:B,R=e.onRenderBody,A=void 0===R?this._onRenderBody:R,M=e.onRenderFooter,W=void 0===M?this._onRenderFooter:M,H=this.state,Z=H.isFooterSticky,X=H.isOpen,K=H.isAnimating,U=H.id,V=T===_.a.smallFixedNear,G=Object(p.a)()?V:!V,z=d&&U+"-headerText",$=T===_.a.custom?{width:S}:{},Y=Object(m.f)(this.props,m.e);if(!X&&!K&&!C)return null;this._classNames=F(k,{theme:P,className:o,focusTrapZoneClassName:r?r.className:void 0,hasCloseButton:c,headerClassName:h,isAnimating:this.state.isAnimating,isFooterAtBottom:y,isFooterSticky:Z,isOnRightSide:G,isOpen:this.state.isOpen,isHiddenOnDismiss:C,type:T});var q,J=this._classNames;g&&X&&(q=a.createElement(x.a,{className:J.overlay,isDarkThemed:!1,onClick:w?D:void 0}));var Q=I(this.props,this._onRenderHeader,z);return a.createElement(b.a,s.__assign({},N),a.createElement(O.a,{role:"dialog",ariaLabelledBy:Q?z:void 0,onDismiss:this.dismiss,className:J.hiddenPanel},a.createElement("div",s.__assign({},Y,{ref:this._panel,className:J.root}),q,a.createElement(v.a,s.__assign({ignoreExternalFocusing:f,forceFocusInsideTrap:!(C&&!X)&&l,firstFocusableSelector:i},r,{className:J.main,style:$,elementToFocusOnDismiss:n,isClickableOutsideFocusTrap:!(r&&!r.isClickableOutsideFocusTrap)}),a.createElement("div",{ref:this._allowScrollOnPanel,className:J.scrollableContent},a.createElement("div",{className:J.commands,"data-is-visible":!0},L(this.props,this._onRenderNavigation)),a.createElement("div",{className:J.contentInner},Q,A(this.props,this._onRenderBody),W(this.props,this._onRenderFooter)))))))},t.prototype.open=function(){var e=this;this.state.isOpen||this.setState({isOpen:!0,isAnimating:!0},function(){e._async.setTimeout(e._onTransitionComplete,200)})},t.prototype._shouldListenForOuterClick=function(e){return!!e.isBlocking&&!!e.isOpen},t.prototype._updateFooterPosition=function(){var e=this._content.current;if(e){var t=e.clientHeight,o=e.scrollHeight;this.setState({isFooterSticky:t<o})}},t.prototype._dismissOnOuterClick=function(e){var t=this._panel.current;this.state.isOpen&&t&&(Object(h.a)(t,e.target)||(this.props.onOuterClick?(this.props.onOuterClick(),e.preventDefault()):this.dismiss()))},t.defaultProps={isHiddenOnDismiss:!1,isOpen:!1,isBlocking:!0,hasCloseButton:!0,type:_.a.smallFixedFar},t}(f.a),C={root:"ms-Panel",main:"ms-Panel-main",commands:"ms-Panel-commands",contentInner:"ms-Panel-contentInner",scrollableContent:"ms-Panel-scrollableContent",navigation:"ms-Panel-navigation",closeButton:"ms-Panel-closeButton ms-PanelAction-close",header:"ms-Panel-header",headerText:"ms-Panel-headerText",content:"ms-Panel-content",footer:"ms-Panel-footer",footerInner:"ms-Panel-footerInner",isOpen:"is-open",hasCloseButton:"ms-Panel--hasCloseButton",smallFluid:"ms-Panel--smFluid",smallFixedNear:"ms-Panel--smLeft",smallFixedFar:"ms-Panel--sm",medium:"ms-Panel--md",large:"ms-Panel--lg",largeFixed:"ms-Panel--fixed",extraLarge:"ms-Panel--xl",custom:"ms-Panel--custom"},N={xs:"272px",sm:"340px",md:"643px",lg:"940px"},T={md:"48px",lg:"428px",xl:"176px"},k={paddingLeft:"16px",paddingRight:"16px",selectors:(n={},n["@media screen and (min-width: "+g.ScreenWidthMinUhfMobile+"px)"]={paddingLeft:"32px",paddingRight:"32px"},n["@media screen and (min-width: "+g.ScreenWidthMinXXLarge+"px)"]={paddingLeft:"40px",paddingRight:"40px"},n)};o.d(t,"a",function(){return P});var P=Object(i.a)(w,function(e){var t,o,n,i,s,a,r,l=e.className,c=e.focusTrapZoneClassName,d=e.hasCloseButton,u=e.headerClassName,p=e.isAnimating,m=e.isFooterAtBottom,h=e.isFooterSticky,f=e.isOnRightSide,v=e.isOpen,b=e.isHiddenOnDismiss,x=e.theme,O=e.type,y=x.palette,F=Object(g.getGlobalClassNames)(C,x);return{root:[F.root,v&&F.isOpen,d&&F.hasCloseButton,{pointerEvents:"none",position:"absolute",top:0,left:0,right:0,bottom:0},!v&&!p&&b&&{visibility:"hidden"},l],overlay:[{pointerEvents:"none",opacity:1,cursor:"pointer",transition:"opacity "+g.AnimationVariables.durationValue3+" "+g.AnimationVariables.easeFunction1},v&&{cursor:"pointer",pointerEvents:"auto"},v&&p&&g.AnimationClassNames.fadeIn200,!v&&p&&g.AnimationClassNames.fadeOut200],hiddenPanel:[!v&&!p&&b&&{visibility:"hidden"}],main:[F.main,{backgroundColor:y.white,position:"absolute",right:0,width:"100%",bottom:0,top:0,overflowX:"hidden",overflowY:"auto",WebkitOverflowScrolling:"touch",selectors:(t={},t["@media (min-width: "+g.ScreenWidthMinMedium+"px)"]={borderLeft:"1px solid "+y.neutralLight,borderRight:"1px solid "+y.neutralLight,pointerEvents:"auto",width:N.sm,boxShadow:"-30px 0px 30px -30px rgba(0,0,0,0.2)",left:"auto"},t["$root &"]=[v&&{pointerEvents:"auto"},O===_.a.smallFluid&&{width:"100%"},O===_.a.smallFixedNear&&{right:"auto",left:0,width:N.xs,boxShadow:"30px 0px 30px -30px rgba(0,0,0,0.2)"},O===_.a.smallFixedFar&&{width:N.xs,selectors:(o={},o["@media (min-width: "+g.ScreenWidthMinMedium+"px)"]={width:N.sm},o)},O===_.a.medium&&{selectors:(n={},n["@media (min-width: "+g.ScreenWidthMinUhfMobile+"px)"]={left:T.md,width:"auto"},n["@media (min-width: "+g.ScreenWidthMinXLarge+"px)"]={left:"auto",width:N.md},n)},(O===_.a.large||O===_.a.largeFixed)&&{selectors:(i={},i["@media (min-width: "+g.ScreenWidthMinUhfMobile+"px)"]={left:T.md,width:"auto"},i["@media (min-width: "+g.ScreenWidthMinXXLarge+"px)"]={left:T.lg},i)},O===_.a.largeFixed&&{selectors:(s={},s["@media (min-width: "+g.ScreenWidthMinXXLarge+"px)"]={left:"auto",width:N.lg},s)},O===_.a.extraLarge&&{selectors:(a={},a["@media (min-width: "+g.ScreenWidthMinUhfMobile+"px)"]={left:T.md,width:"auto"},a["@media (min-width: "+g.ScreenWidthMinXXLarge+"px)"]={left:T.xl},a)},O===_.a.custom&&{maxWidth:"100vw"}],t)},v&&p&&!f&&g.AnimationClassNames.slideRightIn40,v&&p&&f&&g.AnimationClassNames.slideLeftIn40,!v&&p&&!f&&g.AnimationClassNames.slideLeftOut40,!v&&p&&f&&g.AnimationClassNames.slideRightOut40,c],commands:[F.commands],contentInner:[F.contentInner,{display:"flex",flexDirection:"column",minHeight:"100%",WebkitOverflowScrolling:"touch",transform:"translateZ(0)"},d&&{top:"44px",minHeight:"calc(100% - 44px)"}],scrollableContent:[F.scrollableContent,{height:"100%"}],navigation:[F.navigation,{padding:"0 5px",height:"44px",display:"flex",justifyContent:"flex-end"}],closeButton:[F.closeButton],header:[F.header,k,{margin:"14px 0",flexGrow:0,selectors:(r={},r["@media (min-width: "+g.ScreenWidthMinXLarge+"px)"]={marginTop:"30px"},r)}],headerText:[F.headerText,g.DefaultFontStyles.xLarge,{color:y.neutralPrimary,lineHeight:"32px",margin:0},u],content:[F.content,k,{marginBottom:0,paddingBottom:"20px",overflowY:"auto"},m&&{flexGrow:1}],footer:[F.footer,{flexGrow:0,borderTop:"1px solid transparent",transition:"opacity "+g.AnimationVariables.durationValue3+" "+g.AnimationVariables.easeFunction2},h&&{background:y.white,borderTopColor:y.neutralLight}],footerInner:[F.footerInner,k,{paddingBottom:"20px",paddingTop:"20px"}]}},void 0,{scope:"Panel"})},402:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(0),i=o(1),s=o(1844),a=o(1846),r=o(372),l=o(1845),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._root=Object(s.a)(),t._onFocusCapture=function(e){t.props.onFocusCapture&&t.props.onFocusCapture(e),e.target!==e.currentTarget&&(t._previouslyFocusedElementInTrapZone=e.target)},t._onKeyboardHandler=function(e){if(t.props.onKeyDown&&t.props.onKeyDown(e),!e.isDefaultPrevented()&&9===e.which&&t._root.current){var o=Object(a.e)(t._root.current,t._root.current.firstChild,!0),n=Object(a.g)(t._root.current,t._root.current.lastChild,!0);e.shiftKey&&o===e.target?(Object(a.b)(n),e.preventDefault(),e.stopPropagation()):e.shiftKey||n!==e.target||(Object(a.b)(o),e.preventDefault(),e.stopPropagation())}},t}return n.__extends(t,e),t.prototype.componentWillMount=function(){t._focusStack.push(this)},t.prototype.componentDidMount=function(){var e=this.props,t=e.isClickableOutsideFocusTrap,o=void 0!==t&&t,n=e.forceFocusInsideTrap,i=void 0===n||n,s=e.elementToFocusOnDismiss,a=e.disableFirstFocus,l=void 0!==a&&a;this._previouslyFocusedElementOutsideTrapZone=s||document.activeElement,Object(r.a)(this._root.current,this._previouslyFocusedElementOutsideTrapZone)||l||this.focus(),i&&this._events.on(window,"focus",this._forceFocusInTrap,!0),o||this._events.on(window,"click",this._forceClickInTrap,!0)},t.prototype.componentWillReceiveProps=function(e){var t=e.elementToFocusOnDismiss;t&&this._previouslyFocusedElementOutsideTrapZone!==t&&(this._previouslyFocusedElementOutsideTrapZone=t)},t.prototype.componentWillUnmount=function(){var e=this,o=this.props.ignoreExternalFocusing;this._events.dispose(),t._focusStack=t._focusStack.filter(function(t){return e!==t});var n=document.activeElement;o||!this._previouslyFocusedElementOutsideTrapZone||"function"!=typeof this._previouslyFocusedElementOutsideTrapZone.focus||!Object(r.a)(this._root.value,n)&&n!==document.body||Object(a.b)(this._previouslyFocusedElementOutsideTrapZone)},t.prototype.render=function(){var e=this.props,t=e.className,o=e.ariaLabelledBy,s=Object(l.f)(this.props,l.e);return i.createElement("div",n.__assign({},s,{className:t,ref:this._root,"aria-labelledby":o,onKeyDown:this._onKeyboardHandler,onFocusCapture:this._onFocusCapture}),this.props.children)},t.prototype.focus=function(){var e=this.props,t=e.focusPreviouslyFocusedInnerElement,o=e.firstFocusableSelector;if(t&&this._previouslyFocusedElementInTrapZone&&Object(r.a)(this._root.value,this._previouslyFocusedElementInTrapZone))Object(a.b)(this._previouslyFocusedElementInTrapZone);else{var n,i="string"==typeof o?o:o&&o();this._root.current&&(n=i?this._root.current.querySelector("."+i):Object(a.h)(this._root.current,this._root.current.firstChild,!0,!1,!1,!0)),n&&Object(a.b)(n)}},t.prototype._forceFocusInTrap=function(e){if(t._focusStack.length&&this===t._focusStack[t._focusStack.length-1]){var o=document.activeElement;Object(r.a)(this._root.current,o)||(this.focus(),e.preventDefault(),e.stopPropagation())}},t.prototype._forceClickInTrap=function(e){if(t._focusStack.length&&this===t._focusStack[t._focusStack.length-1]){var o=e.target;o&&!Object(r.a)(this._root.current,o)&&(this.focus(),e.preventDefault(),e.stopPropagation())}},t._focusStack=[],t}(o(1825).a)},537:function(e,t,o){"use strict";var n=o(1842),i=o(0),s=o(1),a=o(1843),r=o(1663),l=o(1845),c=o(1825),d=Object(a.a)(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.componentDidMount=function(){Object(r.c)()},t.prototype.componentWillUnmount=function(){Object(r.d)()},t.prototype.render=function(){var e=this.props,t=e.isDarkThemed,o=e.className,n=e.theme,a=e.styles,r=Object(l.f)(this.props,l.e),c=d(a,{theme:n,className:o,isDark:t});return s.createElement("div",i.__assign({},r,{className:c.root}))},t}(c.a),p=o(41),m={root:"ms-Overlay",rootDark:"ms-Overlay--dark"};o.d(t,"a",function(){return h});var h=Object(n.a)(u,function(e){var t,o=e.className,n=e.theme,i=e.isNone,s=e.isDark,a=n.palette,r=Object(p.getGlobalClassNames)(m,n);return{root:[r.root,{backgroundColor:a.whiteTranslucent40,top:0,right:0,bottom:0,left:0,position:"absolute",selectors:(t={},t[p.HighContrastSelector]={border:"1px solid WindowText"},t)},i&&{visibility:"hidden"},s&&[r.rootDark,{backgroundColor:a.blackTranslucent40}],o]}},void 0,{scope:"Overlay"})}}]);
//# sourceMappingURL=owa.vendors~Addins~Diagnostics~FeedbackForm~FlexPane~FolderPermissions~GroupCreate~GroupEdit~GroupSettin~d190d303.js.map
window.scriptsLoaded['owa.vendors~Addins~Diagnostics~FeedbackForm~FlexPane~FolderPermissions~GroupCreate~GroupEdit~GroupSettin~d190d303.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.vendors~Addins~Diagnostics~FeedbackForm~FlexPane~FolderPermissions~GroupCreate~GroupEdit~GroupSettin~d190d303.js'] = (new Date()).getTime();