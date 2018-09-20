window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.MailModuleOrchestrator.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[66],{1273:function(e,n,t){"use strict";function a(e){return e?new Date(e).toISOString():null}t.d(n,"a",function(){return a})},1284:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(71),r=t.n(a),o=t(178),i=t.n(o);function c(e){return e?i()({BaseFolderId:r()({Id:e})}):null}},1296:function(e,n,t){"use strict";var a=t(899),r=t(282),o=t(5),i=t(4);n.a=Object(i.action)("autoMarkItemAsRead")(function(e,n){"Unread"!=Object(o.B)(n)&&(r.c([e])||(Object(a.a)(n,[e],!0,!1,"NonUserAction",[]),r.b()))})},1308:function(e,n,t){"use strict";var a=t(1311),r=t(899),o=t(282),i=t(5),c=t(59),s=t(27),u=t(4);n.a=Object(u.action)("autoMarkConversationAsRead")(Object(u.select)({items:function(){return s.a.items}})(function(e,n,t){var s=Object(i.u)([e],n),u=Object(c.a)(s[0],n.id);if(u&&"Unread"!=Object(i.B)(n)){var d=u.itemIds;o.c(d)||(o.d()?Object(a.a)([e],n,!0,!1,"NonUserAction",[]):d.forEach(function(e){!o.c([e])&&t.items.get(e)&&Object(r.a)(n,[e],!0,!1,"NonUserAction",[])}),o.b())}}))},1311:function(e,n,t){"use strict";var a=t(5);var r=t(282),o=t(1273),i=t(1284),c=t(1248),s=t.n(c),u=t(1249),d=t.n(u),f=t(152),l=t.n(f),O=t(1250),b=t.n(O),m=t(517);function j(e,n,t){var a=Object(i.a)(t),r=e.map(function(e){return t=e,r=n,i=a,d()({Action:"SetReadState",ConversationId:l()({Id:t.conversationId}),IsRead:r,ConversationLastSyncTime:Object(o.a)(t.conversationLastSyncTimeStamp),SuppressReadReceipts:!0,ContextFolderId:i});var t,r,i});return s()({ConversationActions:r,ReturnMovedItemIds:!1})}var R=t(901),p=t(356),v=t(557),g=t(48),I=t(198),k=t(11),A=t.n(k),w=t(7),M=t(4),h=t(47),y=t(909);n.a=Object(M.action)("markConversationsAsReadBasedOnConversationIds",y.a.markConversationAsReadDatapoint)(function(e,n,t,o,i,c){var s,u,d,f,l=Object(a.u)(e,n),O=(s=l,u=n.id,d=t,f=[],s.forEach(function(e){var n=Object(a.y)(e,u);n&&n.unreadCount>0===d&&f.push(e)}),f);if(0!=O.length){if(1==e.length&&1==n.selectedRowKeys.size){var k=a.b.getRowIdString(O[0],n),M=Object(a.y)(n.selectedRowKeys.keys()[0],n.id);if(k==M.id){var y=M.itemIds;t?r.b():o?r.a(y):w.c.warn("Invalid scenario to implicitly mark conversation as unread.")}}Object(I.d)("markConversationsAsReadBasedOnConversationIds",t?A.a.errorMarkingConversationAsRead:A.a.errorMarkingConversationAsUnread,function(){Object(p.a)(e,n.id,t),R.a.import().then(function(a){a(n.tableQuery,!1,t,i,e)});var r,s,u=Object(v.a)(n),d=O.map(function(e){return Object(a.e)(e,n.id)}),f=Object(g.b)(n).requestOptions,l=(r=f,s=j(d,t,u),b()({Header:Object(m.getJsonRequestHeader)(),Body:s},r).then(function(e){return e.Body.ResponseMessages.Items[0]}));return t?o?Object(h.l)("MarkAsRead",c):Object(h.l)("MarkAsReadImplicit",c):Object(h.l)("MarkAsUnread",c),l})}})},133:function(e,n,t){"use strict";var a={sequentialIndex:"0",nonSequentialIndex:"-1"},r=t(600),o=t(0),i=t(3),c=t(979);Object(i.orchestrator)(c.d,function(e){return o.__awaiter(void 0,void 0,void 0,function(){return o.__generator(this,function(e){return Object(r.c)(),[2]})})});t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r.c})},282:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"e",function(){return i}),t.d(n,"b",function(){return c}),t.d(n,"d",function(){return s}),t.d(n,"c",function(){return u});var a=t(4),r=t(473),o=Object(a.action)("AddMarkReadSuppressedItemIds")(Object(a.select)({store:function(){return r.a}})(function(e,n){e.forEach(function(e){return n.store.suppressedItemIdsMap[e]=!0})})),i=Object(a.action)("RemoveMarkReadSuppressedItemIds")(Object(a.select)({store:function(){return r.a}})(function(e,n){e.forEach(function(e){return delete n.store.suppressedItemIdsMap[e]})})),c=Object(a.action)("ClearMarkReadSuppressedMap")(Object(a.select)({store:function(){return r.a}})(function(e){e.store.suppressedItemIdsMap={}}));function s(){return 0==Object.keys(r.a.suppressedItemIdsMap).length}function u(e){for(var n=0;n<e.length;n++)if(!r.a.suppressedItemIdsMap[e[n]])return!1;return!0}},473:function(e,n,t){"use strict";var a=t(3),r=Object(a.createStore)("markread",{markAsReadTimerTask:null,suppressedItemIdsMap:{}})();n.a=r},479:function(e,n,t){"use strict";var a=t(2),r=t(1308),o=t(1296),i=t(473),c=t(5),s=t(102),u=t(6),d=t(4),f=Object(d.action)("setAutoMarkAsReadTimer")(Object(d.select)({markAsReadDelaytime:function(){return Object(u.a)().UserOptions.MarkAsReadDelaytime},store:function(){return i.a},userOptions:function(){return Object(u.a)().UserOptions}})(function(e,n){var t=n.markAsReadDelaytime,a=n.store,r=n.userOptions,o=Object(s.a)();o&&"Unread"!=Object(c.B)(o)&&"Delayed"==r.PreviewMarkAsRead&&(a.markAsReadTimerTask=setTimeout(function(){O(e,o)},1e3*t))})),l=Object(d.action)("clearAutoMarkAsReadTimer")(Object(d.select)({store:function(){return i.a}})(function(e){e.store.markAsReadTimerTask&&(clearTimeout(e.store.markAsReadTimerTask),e.store.markAsReadTimerTask=null)})),O=Object(d.action)("setMarkAsReadTimer:timeout")(function(e,n){switch(l(),n.tableQuery.listViewType){case 0:Object(r.a)(e,n);break;case 1:Object(o.a)(e,n)}});t.d(n,"i",function(){return m}),t.d(n,"d",function(){return j}),t.d(n,"c",function(){return R}),t.d(n,"b",function(){return p}),t.d(n,"h",function(){return v}),t.d(n,"g",function(){return g}),t.d(n,"f",function(){return I}),t.d(n,"e",function(){return k}),t.d(n,"a",function(){return l}),t.d(n,"j",function(){return f});var b=new a.c(function(){return t.e(90).then(t.bind(null,5625))}),m=new a.a(b,function(e){return e.toggleRowReadState}),j=new a.b(b,function(e){return e.markItemsAsReadBasedOnNodeIds}),R=new a.a(b,function(e){return e.markItemAsReadFromReadingPane}),p=new a.a(b,function(e){return e.markAsReadInTable}),v=new a.a(b,function(e){return e.onSingleSelectionChanged}),g=new a.a(b,function(e){return e.onReadingPaneClosed}),I=new a.a(b,function(e){return e.onNavigateAwayViaUpDown}),k=new a.a(b,function(e){return e.onItemPartDeselected})},493:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(885),r=t.n(a),o=t(29),i=t.n(o),c=t(976),s=t.n(c);function u(e,n){var t;return s()({Path:i()({FieldURI:e}),Item:r()((t={},t[e]=n,t))})}},5645:function(e,n,t){"use strict";t.r(n);var a=t(1213),r=t(394),o=t(286),i=t(102),c=t(479),s=t(43),u=t(27),d=t(6),f=t(74),l=t(4),O=Object(l.action)("closeImmersiveReadingPane")(function(){if(Object(d.a)().UserOptions.GlobalReadingPanePositionReact!==f.a.Off)throw new Error("closeImmersiveReadingPane should only be called with reading pane off");var e=Object(i.a)();if("messageSuggestion"!==Object(s.f)(e.tableQuery)){var n=u.a.mailModule.showReadingPane;if(Object(r.a)(!0),Object(o.a)(!1),n&&1==e.selectedRowKeys.size){var t=e.selectedRowKeys.keys()[0];c.g.importAndExecute(t,e)}}else Object(a.a)("CommandBar")}),b=Object(l.action)("onCloseCompose")(function(){Object(r.a)(!0),Object(o.a)(Object(d.a)().UserOptions.GlobalReadingPanePositionReact!==f.a.Off)}),m=Object(l.action)("onReadingPanePositionOptionSaved")(function(e){Object(r.a)(!0),Object(o.a)(e!=f.a.Off)}),j=t(113),R=Object(l.action)("onReplyOrReplyAllOrForwardMessage")(function(){var e=Object(j.c)();Object(d.a)().UserOptions.GlobalReadingPanePositionReact!==f.a.Off||e&&e.type!=j.a.Primary||(Object(o.a)(!0),Object(r.a)(!1))}),p=t(75),v=t(196),g=Object(l.action)("mailModuleOrchestrator.onSelectingFolder")(Object(l.select)({globalReadingPanePosition:function(){return Object(d.a)().UserOptions.GlobalReadingPanePositionReact}})(function(e){null!==v.a.defaultViewState?p.t.importAndExecute(null):e.globalReadingPanePosition==f.a.Off&&O()})),I=Object(l.action)("onSelectMessageAd")(function(){Object(o.a)(!0),Object(r.a)(Object(d.a)().UserOptions.GlobalReadingPanePositionReact!==f.a.Off)}),k=t(133),A=t(34),w=t(173);function M(e){if(Object(d.a)().UserOptions.GlobalReadingPanePositionReact==f.a.Off)switch(e){case A.h.MailList:O();break;case A.h.ReadingPane:case A.h.ConversationAttachmentWell:default:Object(o.a)(!0),Object(r.a)(!1)}Object(k.a)()}w.z.eventManager.on(w.d.CloseEvent,M),t.d(n,"closeImmersiveReadingPane",function(){return O}),t.d(n,"onCloseCompose",function(){return b}),t.d(n,"onReadingPanePositionOptionSaved",function(){return m}),t.d(n,"onReplyOrReplyAllOrForwardMessage",function(){return R}),t.d(n,"onSelectingFolder",function(){return g}),t.d(n,"onSelectMessageAd",function(){return I}),t.d(n,"onSxSPreviewPaneClose",function(){return M})},600:function(e,n,t){"use strict";var a,r;t.d(n,"a",function(){return a}),t.d(n,"b",function(){return c}),t.d(n,"d",function(){return s}),t.d(n,"c",function(){return u}),(r=a||(a={}))[r.MailCompose=0]="MailCompose",r[r.MailList=1]="MailList",r[r.ReadingPane=2]="ReadingPane";var o=[a.MailCompose,a.MailList,a.ReadingPane],i={};function c(e,n){var t=d(e);if(i[t]&&e!==a.ReadingPane)throw new Error("Component has already registered a focus manager callback");i[t]=n}function s(e){i[d(e)]=null}function u(){return new Promise(function(e,n){window.requestAnimationFrame(function(){for(var n=0,t=o;n<t.length;n++){var a=t[n],r=i[d(a)];if(r&&r())return e()}return e()})})}function d(e){return a[e]}},899:function(e,n,t){"use strict";var a=t(909),r=t(5),o=t(27);var i=t(282),c=t(493),s=t(6),u=t(490),d=t.n(u),f=t(152),l=t.n(f),O=t(491),b=t.n(O),m=t(492),j=t.n(m),R=t(30);function p(e,n,t){var a,r,o,i,u,f=(a=e,r=n,o="AlwaysSend"!=Object(s.a)().UserOptions.ReadReceipt,i=Object(c.a)("IsRead",r),u=[],a.forEach(function(e){return u.push(d()({Updates:[i],ItemId:l()({Id:e})}))}),j()({ItemChanges:u,ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly",SuppressReadReceipts:o}));return b()({Header:Object(R.getJsonRequestHeader)(),Body:f},t).then(function(e){return e.Body.ResponseMessages.Items[0]})}var v=t(901),g=t(357),I=t(48),k=t(198),A=t(11),w=t.n(A),M=t(7),h=t(4),y=t(47);n.a=Object(h.action)("markItemsAsReadBasedOnItemIds",a.a.markItemReadUnreadDatapoint)(function(e,n,t,a,c,s){var u,d,f=(u=t,d=[],n.forEach(function(e){var n=o.a.items.get(e);Object(r.D)(n)&&n.IsRead!=u&&d.push(e)}),d);0!=f.length&&Object(k.d)("markItemsAsReadBasedOnItemIds",t?w.a.errorMarkingItemAsRead:w.a.errorMarkingItemAsUnread,function(){t?i.e(f):a?i.a(f):M.c.warn("Invalid scenario to implicitly mark item as unread."),v.a.import().then(function(n){n(e.tableQuery,!1,t,c,f)}),Object(g.a)(f,t);var n=Object(I.b)(e).requestOptions,r=p(f,t,n);return t&&a?Object(y.l)("MarkAsRead",s):t||Object(y.l)("MarkAsUnread",s),r})})},901:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return c});var a=t(2),r=new a.c(function(){return Promise.all([t.e(1),t.e(2),t.e(8),t.e(91)]).then(t.bind(null,1905))}),o=new a.b(r,function(e){return e.addMarkAsReadDiagnostics}),i=new a.b(r,function(e){return e.addUnreadCountNotificationDiagnostics}),c=new a.b(r,function(e){return e.addUnreadCountSubscriptionDiagnostics})},909:function(e,n,t){"use strict";var a=t(5);n.a={markConversationAsReadDatapoint:{datapoint:{name:function(e,n,t,a,r){var o="TnS_MarkConversation";return o+=t?"Read":"Unread",a||(o+="Background"),o},options:function(e,n,t,a,r){return a?{isCore:!0}:{}},customData:function(e,n,t,r,o){return[o,e.length,Object(a.i)(n)]},cosmosOnlyData:function(e,n,t,r,o){for(var i=[],c=0,s=Object(a.u)(e,n);c<s.length;c++){var u=s[c];i.push(a.b.getItemIds(u,n))}return JSON.stringify({itemIds:i,conversationIds:e})}}},markItemReadUnreadDatapoint:{datapoint:{name:function(e,n,t,a,r){var o="TnS_MarkItem";return o+=t?"Read":"Unread",a||(o+="Background"),o},options:function(e,n,t,a,r){return a?{isCore:!0}:{}},customData:function(e,n,t,r,o){return[o,e.tableQuery.type,n.length,Object(a.i)(e)]},cosmosOnlyData:function(e,n,t,a,r){return JSON.stringify({itemIds:n})}}}}}},0,[0,2,3,4,75,7,223,56,242,218,225,90,79,76]]);
//# sourceMappingURL=owa.MailModuleOrchestrator.js.map
window.scriptsLoaded['owa.MailModuleOrchestrator.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.MailModuleOrchestrator.js'] = (new Date()).getTime();