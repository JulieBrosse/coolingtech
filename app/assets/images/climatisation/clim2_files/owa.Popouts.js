window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.Popouts.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[77],{1235:function(e,t,n){"use strict";var o=n(0),r=n(1),i=n(381),s=n(630),u=n(1887),c=n(1446),l=n(219),a=n(7),p=r.version,d='<html dir="'+(Object(u.a)()?"rtl":"ltr")+'"><head></head><body style="min-width: 0;"></body></html>',f=!1,h=function(e){function t(t){var n=e.call(this,t)||this;return n.state={errored:!1},"undefined"==typeof window||f||(l.b.getInstance().setConfig({onInsertRule:c.insertPopoutStylesheetRule}),f=!0),n}return o.__extends(t,e),t.prototype.render=function(){if(0==p.indexOf("16")){var e=this.props,t=e.html,n=o.__rest(e,["html"]);return t||(t=d),r.createElement(s.a,{child:r.createElement(c.Popout,o.__assign({},o.__assign({html:t},n))),onError:m,ErrorComponent:i.a})}return a.c.error("OWA Popout render control triggered for React version <16.0.0"),null},t}(r.Component);function m(e,t){a.c.error({message:"Error launching popout: "+e.message,error:e,diagnosticInfo:t.componentStack})}var y=n(369);function v(){return(location?location.pathname:"").split("/").indexOf(y.c)>=0}n(55),n(883);n(1379),n(1441);n.d(t,"b",function(){return v});t.a=h},1379:function(e,t,n){"use strict";var o=n(369),r=n(55),i=n(883),s=n(161);function u(e,t){if(t){var n=t.displayName?t.displayName+"<"+t.smtpAddress+">":t.smtpAddress;return e?"&"+e+"="+n:n}return""}function c(e,t){return t?"&"+e+"="+t:""}function l(e){if(!e.to||!e.to.smtpAddress)return"";var t=s.parse(Object(r.a)().search.substr(1));return t.mailtolink=function(e){if(!e.to||!e.to.smtpAddress)return"";var t="mailto:"+u(null,e.to),n="";return n+=u("cc",e.cc),n+=u("bcc",e.bcc),n+=c("subject",e.subject),(n+=c("body",e.body))?t+"?"+n.slice(1):t}(e),Object(i.a)(o.e,o.b,"?"+s.stringify(t))}n.d(t,"a",function(){return l})},1440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.popouts={}},1441:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(369),r=n(55),i=n(883);function s(e){return e?Object(i.a)(o.e,o.f+"/"+encodeURIComponent(e),Object(r.a)().search):""}},1446:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1727);t.Popout=o.Popout;var r=n(1731);t.insertPopoutStylesheetRule=r.insertPopoutStylesheetRule},1506:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(724),i=n(14),s=n(9),u=n(93),c=n(1235),l=n(170),a=n(246),p=n(1),d=n(128),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClose=function(e){return function(){l.i.importAndExecute(e,!0),a.a.importAndExecute(e.id)}},t.onBlocked=function(e){return function(){Object(s.n)(r.b.popoutBlocked.datapoint.name,r.b.popoutBlocked.datapoint.customData(t.props.parentComponent?t.props.parentComponent:r.a.Unknown,e.type)),l.i.importAndExecute(e,!0)}},t}return o.__extends(t,e),t.prototype.render=function(){var e=this,t=Object(l.g)(),n={resizable:!0};return p.createElement("div",{id:"PopoutContainerTarget",style:{display:"none"}},t.popouts.map(function(t){if(t.type==l.c.Compose)return p.createElement(c.a,{key:t.id,url:Object(d.k)("mail","compose",e.props.skipOptInCheck),onClose:e.onClose(t),onBlocked:e.onBlocked(t),options:n});if(t.type==l.c.ReadingPane){var o=void 0;if("string"==typeof t.data)o="read/"+encodeURIComponent(t.data);else{var r=t.data;o="read/"+encodeURIComponent(r.itemId)}if(t.mailboxInfo&&t.mailboxInfo.type===u.a.GroupMailbox){o+="/group";var i=t.mailboxInfo.mailboxId.split("@");o+="/"+i[1]+"/"+i[0]}return p.createElement(c.a,{key:t.id,url:Object(d.k)("mail",o,e.props.skipOptInCheck),onClose:e.onClose(t),onBlocked:e.onBlocked(t),options:n})}if(t.type==l.c.CalendarCompose)return n.width=1095,n.height=640,p.createElement(c.a,{key:t.id,url:Object(d.k)("calendar","compose",e.props.skipOptInCheck),onClose:e.onClose(t),onBlocked:e.onBlocked(t),options:n});if(t.type==l.c.CalendarRead){n.width=1095,n.height=640;o="read/";return"string"==typeof t.data&&(o+=encodeURIComponent(t.data)),p.createElement(c.a,{key:t.id,url:Object(d.k)("calendar",o,e.props.skipOptInCheck),onClose:e.onClose(t),onBlocked:e.onBlocked(t),options:n})}return null}))},t=o.__decorate([i.observer],t)}(p.Component);n.d(t,"PopoutContainer",function(){return f})},1539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="__$$REACT_POPOUT_COMPONENT$$__";t.id=o,t.set=function(e,t){window[o]=window[o]||{},window[o][e]=t},t.get=function(e){return window[o]&&window[o][e]}},1727:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(40),u=n(1728),c=n(1440),l=n(1729),a=n(1539);n(1730);var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.setupAttempts=0,t.openChildWindow=function(){var e=u.generateWindowFeaturesString(t.props.options||{}),n=t.props.name||Math.random().toString(12).slice(2);t.child=function(e){if(!e||e.closed||void 0===e||void 0===e.closed)return null;return e}(window.open(t.props.url||"about:blank",n,e)),t.child?(t.id="__"+n+"_container__",t.container=t.initializeChildWindow(t.id,t.child)):(t.props.onBlocked&&t.props.onBlocked(),t.container=null)},t.closeChildWindowIfOpened=function(){d(t.child)&&(t.child.close(),t.child=null,t.props.onClose&&t.props.onClose())},t}return r(t,e),t.prototype.setupOnCloseHandler=function(e,t){var n,o=this;if(!(this.setupAttempts>=5))if(t&&t.document&&t.document.head){var r=t.document.createElement("script"),i="\n            window.onbeforeunload = function(e) {\n                var result = window.opener."+a.id+".onBeforeUnload.call(window, '"+e+"', e);\n\n                if (result) {\n                    window.opener."+a.id+".startMonitor.call(window.opener, '"+e+"');\n\n                    e.returnValue = result;\n                    return result;\n                } else {\n                    window.opener."+a.id+".onChildClose.call(window.opener, '"+e+"');\n                }\n            }";r.innerHTML="\n            window.onload = function(e) {\n                "+i+"\n            };\n            ",n="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent:"",(/Edge/.test(n)||/Trident/.test(n)||!this.props.url)&&(r.innerHTML=i),t.document.head.appendChild(r),this.setupCleanupCallbacks()}else this.setupAttempts++,setTimeout(function(){return o.setupOnCloseHandler(e,t)},50)},t.prototype.setupCleanupCallbacks=function(){var e=this;window.addEventListener("unload",function(t){return e.closeChildWindowIfOpened()}),a.set("onChildClose",function(e){c.popouts[e].props.onClose&&c.popouts[e].props.onClose()}),a.set("onBeforeUnload",function(e,t){if(c.popouts[e].props.onBeforeUnload)return c.popouts[e].props.onBeforeUnload(t)})},t.prototype.setupStyleElement=function(e){this.styleElement=e.document.createElement("style"),this.styleElement.setAttribute("data-this-styles","true"),this.styleElement.type="text/css",e.document.head.appendChild(this.styleElement)},t.prototype.injectHtml=function(e,t){var n;if(this.props.html){t.document.write(this.props.html);for(var o=t.document.head,r="",i=null,s=window.document.styleSheets.length-1;s>=0;s--){var u=window.document.styleSheets[s];try{i=u.cssRules}catch(e){var c=t.document.createElement("link");c.type=u.type,c.rel="stylesheet",c.href=u.href,o.appendChild(c)}finally{if(i)for(var l=0;l<i.length;l++)try{r+=i[l].cssText}catch(e){}}i=null}var a=t.document.createElement("style");a.innerHTML=r,o.appendChild(a),(n=t.document.createElement("div")).id=e,t.document.body.appendChild(n)}else{var p="<!DOCTYPE html><html><head>";for(s=window.document.styleSheets.length-1;s>=0;s--){u=window.document.styleSheets[s];try{p+="<style>"+(r=u.cssText)+"</style>"}catch(e){}}p+='</head><body><div id="'+e+'"></div></body></html>',t.document.write(p),n=t.document.getElementById(e)}return this.setupStyleElement(t),n},t.prototype.setupStyleObserver=function(e){new MutationObserver(function(t){t.forEach(function(t){"childList"==t.type&&function(e,t,n){for(var o,r=0;r<e.length;r++)"STYLE"==(o=e[r]).tagName&&t.call(n,o,r)}(t.addedNodes,function(t){e.document.head.appendChild(l.crossBrowserCloneNode(t,e.document))})})}).observe(document.head,{childList:!0})},t.prototype.initializeChildWindow=function(e,t){if(c.popouts[e]=this,this.props.url)return this.setupOnCloseHandler(e,t),null;var n=this.injectHtml(e,t);return this.setupStyleObserver(t),this.setupOnCloseHandler(e,t),n},t.prototype.renderChildWindow=function(){!function(e){if(!e)return;var t=document.createElement("a");t.href=e;var n=window.location;if(t.hostname&&n.hostname!=t.hostname||t.protocol&&n.protocol!=t.protocol)throw new Error("react-popup-component error: cross origin URLs are not supported (window="+n.protocol+"//"+n.hostname+"; popout="+t.protocol+"//"+t.hostname+")")}(this.props.url),this.props.hidden?this.closeChildWindowIfOpened():(d(this.child)||this.openChildWindow(),!this.props.url&&this.container&&s.render(this.props.children,this.container))},t.prototype.componentDidUpdate=function(){this.renderChildWindow()},t.prototype.componentDidMount=function(){this.renderChildWindow()},t.prototype.componentWillUnmount=function(){this.closeChildWindowIfOpened()},t.prototype.render=function(){return null},t}(i.Component);function d(e){return e&&!e.closed}t.Popout=p},1728:function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.generateWindowFeaturesString=function(e){var t={left:0,top:0,height:600,width:800,location:!1,menubar:!1,resizable:!1,scrollbars:!1,status:!1,toolbar:!1};return t=o({},t,e),Object.getOwnPropertyNames(t).map(function(e){return e+"="+("boolean"==typeof(n=t[e])?n?"1":"0":n?String(n):void 0);var n}).join(",")}},1729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.crossBrowserCloneNode=function(e,t){var n=t.createElement(e.tagName);if(n.innerHTML=e.innerHTML,e.hasAttributes())for(var o=void 0,r=0;r<e.attributes.length;r++)o=e.attributes[r],n.setAttribute(o.name,o.value);return n}},1730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1440),r={},i=250;n(1539).set("startMonitor",function(e){var t=function(){var n;o.popouts[e]&&o.popouts[e].props.onClose&&(!o.popouts[e].child||o.popouts[e].child.closed?(r[n=e]&&(clearTimeout(r[n]),delete r[n]),o.popouts[e].props.onClose(),o.popouts[e].child=null):r[e]=setTimeout(t,i))};r[e]=setTimeout(t,i)})},1731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1440);t.insertPopoutStylesheetRule=function(e){Object.keys(o.popouts).forEach(function(t){var n=o.popouts[t];if(n.child&&n.styleElement)try{var r=n.styleElement.sheet;r.insertRule(e,r.cssRules.length)}catch(e){}})}},369:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"g",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return d});var o=n(0),r=n(210),i="deeplink",s="compose",u="reply",c="replyall",l="read",a="group",p="/"+o.__spread(["mail"],Object(r.a)().split("/").slice(1)).join("/")+i+"/",d="/"+o.__spread(["calendar"],Object(r.a)().split("/").slice(1)).join("/")+i+"/"},5693:function(e,t,n){"use strict";n.r(t);var o=n(702),r=n(0),i=n(426),s=n(4),u=n(425),c=n(295),l=Object(s.action)("closePopout",i.b.PopoutClosePopout)(function(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,o,i,s;return r.__generator(this,function(r){switch(r.label){case 0:return n=!0,o=Object(u.a)(e.type),!t&&o&&o.canClose?[4,o.canClose(e)]:[3,2];case 1:n=r.sent(),r.label=2;case 2:return n&&(i=Object(c.a)(),(s=i.popouts.indexOf(e))>=0&&i.popouts.splice(s,1)),[2]}})})});n.d(t,"addPopout",function(){return o.a}),n.d(t,"closePopout",function(){return l})},883:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(25),r=n(138),i=n(369);function s(e,t,n){var s=Object(o.h)("fwk-pathBasedRouter")?{pathname:e+t,search:n}:{pathname:e,search:n,hash:"/"+i.c+"/"+t};return r.format(s)}}},0,[218]]);
//# sourceMappingURL=owa.Popouts.js.map
window.scriptsLoaded['owa.Popouts.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.Popouts.js'] = (new Date()).getTime();