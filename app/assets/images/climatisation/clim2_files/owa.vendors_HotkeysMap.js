window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.vendors~HotkeysMap.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[241],{2032:function(t,e,o){"use strict";o.r(e);var n=o(3),i=Object(n.createStore)("HotkeysMapStore",{isVisible:!1})(),r=Object(n.mutatorAction)("setIsHotkeysMapVisible",function(t){i.isVisible=t}),s=o(0),a=o(1),c=o(11),l=o.n(c),u=o(1676),p=o(18),d=o(39),m=o(524),h=o(162),f=o(532),y=o(401),b=o(14),_=o(4415),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s.__extends(e,t),e.prototype.render=function(){return a.createElement(y.a,{isOpen:i.isVisible,onDismiss:this.onDismiss},a.createElement(m.IconButton,{className:_.closeButton,iconProps:{iconName:"Cancel"},onClick:this.onDismiss}),a.createElement("div",{className:_.container},this.renderHotkeyCommandCategories(this.props.commandCategories)),this.renderFooter())},e.prototype.showHotkeysMap=function(){1!==Object(d.h)().UserOptions.KeyboardShortcutsMode&&r(!0)},e.prototype.onDismiss=function(){r(!1)},e.prototype.renderHotkeyCommandCategories=function(t){var e=this;return t.map(function(t){return a.createElement("div",{className:_.commandCategoryContainer,key:t.displayName},a.createElement("h3",null,t.displayName),e.renderCommands(e.getHotkeysForCommand(t)))})},e.prototype.renderCommands=function(t){var e=this,o=Object(d.h)().UserOptions.KeyboardShortcutsMode,n=Object(u.a)(o);return t.filter(function(t){return t[n]}).map(function(t){return a.createElement("span",{className:_.shortcut,key:t.description},a.createElement("span",{className:_.description},t.description),a.createElement("span",{className:_.hotkey},e.convertToFriendlyHotkey(t[n])))})},e.prototype.renderFooter=function(){var t="";switch(Object(d.h)().UserOptions.KeyboardShortcutsMode){case 0:t=l.a.outlookComOption;break;case 3:t=l.a.gmailOption;break;case 2:t=l.a.yahooMailOption;break;case 4:t=l.a.outlookOption}return a.createElement("div",{className:_.footer},a.createElement("span",null,Object(p.format)(l.a.currentOptionLabel,t)),a.createElement(f.a,{onClick:this.onGoToOptionsClick.bind(this)},l.a.goToSettingsLabel))},e.prototype.onGoToOptionsClick=function(){this.onDismiss(),this.props.goToOptions()},e.prototype.getHotkeysForCommand=function(t){return this.props.hotkeyCommands.filter(function(e){return e.category===t.category})},e.prototype.convertToFriendlyHotkey=function(t){return"string"==typeof t?this.convertToFriendlyHotkeyInternal(t):t.map(this.convertToFriendlyHotkeyInternal.bind(this)).join("/")},e.prototype.convertToFriendlyHotkeyInternal=function(t){var e=this,o=t.split("+");if(1===o.length){var n=t.split(" ");return 1===n.length?this.capitalizeFirstLetter(n[0]):Object(p.format)(l.a.keyboardShortcutThen,this.capitalizeFirstLetter(n[0]),this.capitalizeFirstLetter(n[1]))}var i=[];return o.forEach(function(t){i.push(e.capitalizeFirstLetter(t))}),i.join("+")},e.prototype.capitalizeFirstLetter=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},s.__decorate([Object(h.a)("shift+/")],e.prototype,"showHotkeysMap",null),e=s.__decorate([b.observer],e)}(a.Component);o.d(e,"setIsHotkeysMapVisible",function(){return r}),o.d(e,"HotkeysMap",function(){return v})},2048:function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return s}),o.d(e,"c",function(){return c});var n,i=o(41),r=i.AnimationVariables.durationValue2,s={root:{selectors:(n={},n[i.HighContrastSelector]={opacity:0},n)}},a={root:"ms-Modal",main:"ms-Dialog-main",isOpen:"is-open"},c=function(t){var e=t.className,o=t.containerClassName,n=t.isOpen,s=t.isVisible,c=t.theme,l=c.palette,u=Object(i.getGlobalClassNames)(a,c);return{root:[u.root,{backgroundColor:"transparent",position:"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+r},n&&u.isOpen,s&&{opacity:1,pointerEvents:"auto"},e],main:[u.main,{boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.4)",backgroundColor:l.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid tranparent",maxHeight:"100%",overflowY:"auto"},o]}}},2060:function(t,e,o){"use strict";o.d(e,"a",function(){return b});var n=o(0),i=o(1),r=o(1843),s=o(1844),a=o(1663),c=o(563),l=o(1825),u=o(402),p=o(2048),d=o(537),m=o(1888),h=o(1911),f=o(514),y=Object(r.a)(),b=function(t){function e(e){var o=t.call(this,e)||this;return o._focusTrapZone=Object(s.a)(),o._allowScrollOnModal=function(t){t?Object(a.b)(t,o._events):o._events.off(o._scrollableContent),o._scrollableContent=t},o.state={id:Object(c.c)("Modal"),isOpen:e.isOpen,isVisible:e.isOpen},o}return n.__extends(e,t),e.prototype.componentWillReceiveProps=function(t){clearTimeout(this._onModalCloseTimer),t.isOpen&&(this.state.isOpen?this.setState({isVisible:!0}):this.setState({isOpen:!0})),!t.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(p.a)),this.setState({isVisible:!1}))},e.prototype.componentDidUpdate=function(t,e){t.isOpen||e.isVisible||this.setState({isVisible:!0})},e.prototype.render=function(){var t=this.props,e=t.className,o=t.containerClassName,n=t.elementToFocusOnDismiss,r=t.firstFocusableSelector,s=t.forceFocusInsideTrap,a=t.ignoreExternalFocusing,c=t.isBlocking,l=t.isClickableOutsideFocusTrap,b=t.isDarkOverlay,_=t.onDismiss,v=t.onLayerDidMount,O=t.responsiveMode,g=t.titleAriaId,k=t.styles,C=t.subtitleAriaId,F=t.theme,j=this.state,x=j.isOpen,T=j.isVisible;if(!x)return null;var E=y(k,{theme:F,className:e,containerClassName:o,isOpen:x,isVisible:T});return O>=f.a.small?i.createElement(m.a,{onLayerDidMount:v},i.createElement(h.a,{role:c?"alertdialog":"dialog",ariaLabelledBy:g,ariaDescribedBy:C,onDismiss:_},i.createElement("div",{className:E.root},i.createElement(d.a,{isDarkThemed:b,onClick:c?void 0:_,styles:p.b}),i.createElement(u.a,{componentRef:this._focusTrapZone,className:E.main,elementToFocusOnDismiss:n,isClickableOutsideFocusTrap:l||!c,ignoreExternalFocusing:a,forceFocusInsideTrap:s,firstFocusableSelector:r},i.createElement("div",{ref:this._allowScrollOnModal},this.props.children))))):null},e.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},e.prototype._onModalClose=function(){this.setState({isOpen:!1}),this.props.onDismissed&&this.props.onDismissed()},e.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},e=n.__decorate([f.b],e)}(l.a)},401:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o(1842),i=o(2060),r=o(2048),s=Object(n.a)(i.a,r.c,void 0,{scope:"Modal"})},402:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var n=o(0),i=o(1),r=o(1844),s=o(1846),a=o(372),c=o(1845),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._root=Object(r.a)(),e._onFocusCapture=function(t){e.props.onFocusCapture&&e.props.onFocusCapture(t),t.target!==t.currentTarget&&(e._previouslyFocusedElementInTrapZone=t.target)},e._onKeyboardHandler=function(t){if(e.props.onKeyDown&&e.props.onKeyDown(t),!t.isDefaultPrevented()&&9===t.which&&e._root.current){var o=Object(s.e)(e._root.current,e._root.current.firstChild,!0),n=Object(s.g)(e._root.current,e._root.current.lastChild,!0);t.shiftKey&&o===t.target?(Object(s.b)(n),t.preventDefault(),t.stopPropagation()):t.shiftKey||n!==t.target||(Object(s.b)(o),t.preventDefault(),t.stopPropagation())}},e}return n.__extends(e,t),e.prototype.componentWillMount=function(){e._focusStack.push(this)},e.prototype.componentDidMount=function(){var t=this.props,e=t.isClickableOutsideFocusTrap,o=void 0!==e&&e,n=t.forceFocusInsideTrap,i=void 0===n||n,r=t.elementToFocusOnDismiss,s=t.disableFirstFocus,c=void 0!==s&&s;this._previouslyFocusedElementOutsideTrapZone=r||document.activeElement,Object(a.a)(this._root.current,this._previouslyFocusedElementOutsideTrapZone)||c||this.focus(),i&&this._events.on(window,"focus",this._forceFocusInTrap,!0),o||this._events.on(window,"click",this._forceClickInTrap,!0)},e.prototype.componentWillReceiveProps=function(t){var e=t.elementToFocusOnDismiss;e&&this._previouslyFocusedElementOutsideTrapZone!==e&&(this._previouslyFocusedElementOutsideTrapZone=e)},e.prototype.componentWillUnmount=function(){var t=this,o=this.props.ignoreExternalFocusing;this._events.dispose(),e._focusStack=e._focusStack.filter(function(e){return t!==e});var n=document.activeElement;o||!this._previouslyFocusedElementOutsideTrapZone||"function"!=typeof this._previouslyFocusedElementOutsideTrapZone.focus||!Object(a.a)(this._root.value,n)&&n!==document.body||Object(s.b)(this._previouslyFocusedElementOutsideTrapZone)},e.prototype.render=function(){var t=this.props,e=t.className,o=t.ariaLabelledBy,r=Object(c.f)(this.props,c.e);return i.createElement("div",n.__assign({},r,{className:e,ref:this._root,"aria-labelledby":o,onKeyDown:this._onKeyboardHandler,onFocusCapture:this._onFocusCapture}),this.props.children)},e.prototype.focus=function(){var t=this.props,e=t.focusPreviouslyFocusedInnerElement,o=t.firstFocusableSelector;if(e&&this._previouslyFocusedElementInTrapZone&&Object(a.a)(this._root.value,this._previouslyFocusedElementInTrapZone))Object(s.b)(this._previouslyFocusedElementInTrapZone);else{var n,i="string"==typeof o?o:o&&o();this._root.current&&(n=i?this._root.current.querySelector("."+i):Object(s.h)(this._root.current,this._root.current.firstChild,!0,!1,!1,!0)),n&&Object(s.b)(n)}},e.prototype._forceFocusInTrap=function(t){if(e._focusStack.length&&this===e._focusStack[e._focusStack.length-1]){var o=document.activeElement;Object(a.a)(this._root.current,o)||(this.focus(),t.preventDefault(),t.stopPropagation())}},e.prototype._forceClickInTrap=function(t){if(e._focusStack.length&&this===e._focusStack[e._focusStack.length-1]){var o=t.target;o&&!Object(a.a)(this._root.current,o)&&(this.focus(),t.preventDefault(),t.stopPropagation())}},e._focusStack=[],e}(o(1825).a)},4415:function(t,e,o){var n=o(4416),i=o(33);"string"==typeof n&&(n=[[t.i,n]]);for(var r=0;r<n.length;r++)i.loadStyles(n[r][1],!1);n.locals&&(t.exports=n.locals)},4416:function(t,e,o){(e=t.exports=o(35)(!1)).push([t.i,"html[dir] h3{margin-top:0;margin-bottom:6px}._19GFm2_jImLO5685FReyzN{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;height:400px;width:600px}html[dir] ._19GFm2_jImLO5685FReyzN{padding:36px 36px 0}html[dir=ltr] ._2cuIu-HpNETEJG0mLOZjF_{float:right;margin:12px 12px 0 0}html[dir=rtl] ._2cuIu-HpNETEJG0mLOZjF_{float:left;margin:12px 0 0 12px}html[dir] ._1yQG2CXiCer2JKSBHP4j_C{margin-bottom:18px}._2m73Ts3tgPhmE4HT8W_6-j{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._1r4_Ru2Mgw9umdPLbIGJZP,._2khjeqMVXbjy5T73I5XWSd{font-size:12px;font-weight:400}._1r4_Ru2Mgw9umdPLbIGJZP{width:120px}html[dir=ltr] ._1r4_Ru2Mgw9umdPLbIGJZP{text-align:left}html[dir=rtl] ._1r4_Ru2Mgw9umdPLbIGJZP{text-align:right}html[dir] ._2k3eLvCiV6i_yaCcin7eHY{padding:12px 36px 36px}",""]),e.locals={container:"_19GFm2_jImLO5685FReyzN",closeButton:"_2cuIu-HpNETEJG0mLOZjF_",commandCategoryContainer:"_1yQG2CXiCer2JKSBHP4j_C",shortcut:"_2m73Ts3tgPhmE4HT8W_6-j",description:"_2khjeqMVXbjy5T73I5XWSd",hotkey:"_1r4_Ru2Mgw9umdPLbIGJZP",footer:"_2k3eLvCiV6i_yaCcin7eHY"}},537:function(t,e,o){"use strict";var n=o(1842),i=o(0),r=o(1),s=o(1843),a=o(1663),c=o(1845),l=o(1825),u=Object(s.a)(),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.componentDidMount=function(){Object(a.c)()},e.prototype.componentWillUnmount=function(){Object(a.d)()},e.prototype.render=function(){var t=this.props,e=t.isDarkThemed,o=t.className,n=t.theme,s=t.styles,a=Object(c.f)(this.props,c.e),l=u(s,{theme:n,className:o,isDark:e});return r.createElement("div",i.__assign({},a,{className:l.root}))},e}(l.a),d=o(41),m={root:"ms-Overlay",rootDark:"ms-Overlay--dark"};o.d(e,"a",function(){return h});var h=Object(n.a)(p,function(t){var e,o=t.className,n=t.theme,i=t.isNone,r=t.isDark,s=n.palette,a=Object(d.getGlobalClassNames)(m,n);return{root:[a.root,{backgroundColor:s.whiteTranslucent40,top:0,right:0,bottom:0,left:0,position:"absolute",selectors:(e={},e[d.HighContrastSelector]={border:"1px solid WindowText"},e)},i&&{visibility:"hidden"},r&&[a.rootDark,{backgroundColor:s.blackTranslucent40}],o]}},void 0,{scope:"Overlay"})}}]);
//# sourceMappingURL=owa.vendors~HotkeysMap.js.map
window.scriptsLoaded['owa.vendors~HotkeysMap.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.vendors~HotkeysMap.js'] = (new Date()).getTime();