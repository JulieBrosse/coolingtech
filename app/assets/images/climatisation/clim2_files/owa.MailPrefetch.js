window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.MailPrefetch.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[54],{1503:function(e,t,n){"use strict";n.r(t);var r=n(226),c=n(4),i=n(13),o=Object(c.select)({conversationCache:function(){return r.a},items:function(){return i.w.items}})(function(e,t,n,r){var c;if(0===t)c=r.conversationCache.get(e);else if(1===t){var i=r.items.get(e);c=i&&i.NormalizedBody}return!c||n}),f=n(5),a=n(54);function u(e,t,n,r){var c=t.rowKeys.indexOf(e);c<0||c>t.currentLoadedIndex||s(f.b.getRowClientItemId(e,t),t,n,r)}function s(e,t,n,r){var c=t.tableQuery.listViewType;if(o(e.Id,c,n))switch(c){case 0:Object(a.j)(e,r);break;case 1:Object(a.k)(e,r)}}var w=n(564),h=n.n(w);function d(e,t){h()(function(){s(e,t,!0,"PrefetchRowInCache")})}function l(e,t,n){h()(function(){u(e,t,n,"PrefetchSingleRow")})}var y=Object(c.action)("prefetchFirstN")(function(e,t){h()(function(){for(var n=Math.min(e.rowKeys.length,t),r=0;r<n;r++)u(e.rowKeys[r],e,!1,"PrefetchFirstN")})}),j=Object(c.action)("prefetchAdjacentItemsOnDelay")(function(e,t){setTimeout(function(){var n=t.rowKeys.indexOf(e);h()(function(){var e=n-1;e>=0&&u(t.rowKeys[e],t,!1,"PrefetchAjacentItemsOnDelay"),(e=n+1)<t.rowKeys.length&&u(t.rowKeys[e],t,!1,"PrefetchAjacentItemsOnDelay")})},1e3)});n.d(t,"prefetchRowInCache",function(){return d}),n.d(t,"prefetchSingleRow",function(){return l}),n.d(t,"prefetchFirstN",function(){return y}),n.d(t,"prefetchAdjacentItemsOnDelay",function(){return j})}},0,[218,225]]);
//# sourceMappingURL=owa.MailPrefetch.js.map
window.scriptsLoaded['owa.MailPrefetch.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.MailPrefetch.js'] = (new Date()).getTime();