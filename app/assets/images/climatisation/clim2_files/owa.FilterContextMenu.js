window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.FilterContextMenu.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[105],{133:function(e,t,n){"use strict";var r={sequentialIndex:"0",nonSequentialIndex:"-1"},o=n(600),i=n(0),a=n(3),c=n(979);Object(a.orchestrator)(c.d,function(e){return i.__awaiter(void 0,void 0,void 0,function(){return i.__generator(this,function(e){return Object(o.c)(),[2]})})});n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o.c})},1709:function(e,t,n){"use strict";var r=n(51),o={selectFilter:{datapoint:{name:"TnS_SelectFilter",customData:function(e,t){return[e,t]}}},selectSort:{datapoint:{name:"TnS_MailListSelectSort",customData:function(e,t,n,o){return[e,t,o,n.totalRowsInView,Object(r.a)(n.tableQuery.folderId)]}}}},i=n(103),a=n(5),c=n(102),s=n(84),l=n(329),u=n(4),d=Object(u.action)("selectFilter",o.selectFilter)(function(e,t){var n=Object(c.a)();if("UserCategory"==e)throw new Error("ViewFilter should not be user category when select filter is called");var r=Object(i.c)(n.tableQuery.folderId,n.tableQuery.listViewType,n.tableQuery.scenarioType,Object(a.i)(n),e,null,Object(a.w)(n));return l.b(),Object(s.d)(r,null,t)}),f=Object(u.action)("clearFilter")(function(e){d("All",e)}),p=Object(u.action)("selectSortInternal",o.selectSort)(function(e,t,n,r){var o={sortColumn:e,sortDirection:t},c=Object(i.c)(n.tableQuery.folderId,n.tableQuery.listViewType,n.tableQuery.scenarioType,Object(a.i)(n),"All",null,o);return Object(s.d)(c)}),b=Object(u.action)("selectSort")(function(e,t,n){var r,o=a.F.tableViews.get(t),i=o.tableQuery.sortBy;r=i.sortColumn==e?i.sortDirection==a.c.ASCENDING_SORT_DIR?a.c.DESCENDING_SORT_DIR:a.c.ASCENDING_SORT_DIR:a.c.getDefaulSortDirectionForSortColumn(e),p(e,r,o,n),l.b()});n.d(t,"a",function(){return f}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return b})},2031:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(11),i=n.n(o),a=n(82),c=n(7);function s(e){switch(e){case"All":return i.a.allFilter;case"Unread":return i.a.unreadFilter;case"Flagged":return i.a.flaggedFilter;case"ToOrCcMe":return i.a.toMeFilter;case"HasAttachment":return i.a.attachmentsLabel;case"Mentioned":return i.a.mentionsFilter;case"TaskActive":case"TaskOverdue":case"TaskCompleted":case"DeprecatedSuggestions":case"DeprecatedSuggestionsRespond":case"DeprecatedSuggestionsDelete":case"DeprecatedNoClutter":case"DeprecatedClutter":case"SystemCategory":case"UserCategory":case"Pinned":case"Focused":case"Locked":case"Hashtag":case"Liked":return c.c.error("Filter not implemented"),"";default:return Object(a.a)(e)}}var l=n(14),u=n(16),d=n(1709),f=n(5),p=n(1),b=n(1647),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onSortSelected=function(e,n){t.props.dismissContextMenu(),Object(d.c)(n.data,t.props.tableViewId,t.props.filterMenuSource)},t.onFilterSelected=function(e,n){t.props.dismissContextMenu();var r=n.data;Object(d.b)(r,t.props.filterMenuSource)},t}return r.__extends(t,e),t.prototype.createMenuItems=function(){var e=this,t=this.props.supportedViewFilters.map(function(t){return e.getViewFilterMenuItems(t)});return Object(u.b)("tri-mailSort")&&(t.push({key:"divider",name:"-"}),t.push({key:"sortBy",name:i.a.sortBySortColumn,items:this.getSortMenuItems()})),t},t.prototype.getSortMenuItems=function(){var e=this,t=f.F.tableViews.get(this.props.tableViewId),n=Object(f.w)(t),r=n.sortDirection==f.c.ASCENDING_SORT_DIR,o=n.sortColumn,a=[];return f.c.getSupportedSortColumns(t).forEach(function(t){a.push({key:t.toString(),name:function(e){switch(e){case 0:return i.a.dateSortColumn;case 1:return i.a.fromSortColumn;case 2:return i.a.sizeSortColumn;default:throw new Error("Sort not implemented")}}(t),data:t,onClick:e.onSortSelected,iconProps:{iconName:o==t?r?"Up":"Down":null}})}),a},t.prototype.getViewFilterMenuItems=function(e){return{key:e.toString(),name:s(e),data:e,canCheck:!0,isChecked:this.props.currentViewFilter==e,onClick:this.onFilterSelected}},t.prototype.render=function(){var e=this.props,t=e.dismissContextMenu,n=e.contextMenuTargetElement,r=this.createMenuItems();return p.createElement(b.a,{shouldFocusOnMount:!0,target:n,directionalHint:6,onDismiss:t,items:r})},t=r.__decorate([l.observer],t)}(p.Component),h=n(1826),w=n(133),S=n(1700),g=n(4),O=n(3),C=Object(O.createStore)("mailListFilterView",{filterContextMenuDisplayState:!1}),y=C(),F=Object(g.action)("showFilterDropDownContextMenu")(function(){C().filterContextMenuDisplayState=!0}),v=Object(g.action)("hideFilterDropDownContextMenu")(function(){C().filterContextMenuDisplayState=!1}),x=n(76),j=n(180),D=n(90),M=n(4417),I=function(e){function t(t){var n=e.call(this,t)||this;return n.onFilterClick=function(e){e.stopPropagation(),n.onSelectFilter()},n.onKeyDownOnFilter=function(e){switch(e.keyCode){case 13:case 32:e.stopPropagation(),e.preventDefault(),n.onSelectFilter()}},n}return r.__extends(t,e),t.prototype.onSelectFilter=function(){"All"==Object(f.B)(Object(f.v)())?F():(Object(d.b)("All",this.props.filterMenuSource),Object(w.a)())},t.prototype.dismissContextMenu=function(){v(),Object(w.a)()},t.prototype.getSelectedFilterText=function(e){return"All"==e?i.a.mailFilter:s(e)},t.prototype.render=function(){var e=this,t=Object(f.B)(f.F.tableViews.get(this.props.tableViewId)),n="All"==t,o=D(this.props.containerClassName,M.filter,Object(j.d)()?M.paddingBottom:M.paddingTop),i=D(M.icon,!n&&M.cancelIcon),a={role:x.a.button};return p.createElement("div",r.__assign({ref:function(t){return e.container=t},className:o,onClick:this.onFilterClick,onKeyDown:this.onKeyDownOnFilter},Object(x.b)(a),{tabIndex:0}),p.createElement("span",{className:M.filterText},this.getSelectedFilterText(t)),p.createElement(h.a,{className:i,iconName:n?"ChevronDownMed":"Cancel"}),y.filterContextMenuDisplayState&&p.createElement(S.a,{currentViewFilter:t,supportedViewFilters:this.props.supportedViewFilters,dismissContextMenu:this.dismissContextMenu,contextMenuTargetElement:this.container,filterMenuSource:this.props.filterMenuSource,tableViewId:this.props.tableViewId}))},t=r.__decorate([l.observer],t)}(p.Component);n.d(t,"MailFilterContextMenu",function(){return m}),n.d(t,"MailListFilter",function(){return I})},329:function(e,t,n){"use strict";var r=n(93),o=n(5),i=n(13),a=n(26),c=n(12);function s(e,t){return!Object(o.n)()&&t&&t.type===r.a.UserMailbox&&!Object(i.q)(e)&&e!=Object(a.a)("recoverableitemsdeletions")&&!Object(c.D)(e,c.j)}var l=n(2),u=n(884);n.d(t,"e",function(){return f}),n.d(t,"a",function(){return u.a}),n.d(t,"b",function(){return u.b}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u.c});var d=new l.c(function(){return n.e(71).then(n.bind(null,5579))}),f=new l.a(d,function(e){return e.undo})},4417:function(e,t,n){var r=n(4418),o=n(33);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},4418:function(e,t,n){(t=e.exports=n(35)(!1)).push([e.i,'.QAS4pFKCqswPU5fpvcIOX{cursor:pointer;font-size:14px;font-weight:400;color:"[theme:themePrimary, default:#0078D7]";font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}html[dir] .QAS4pFKCqswPU5fpvcIOX{margin:auto}html[dir] .EpYIkhG5VIRUY01uPFfPd{padding-top:2px}html[dir] ._10x8KsLwrO-SGGTiMT70-h{padding-bottom:2px}._1Q6qmbDfVktTkuve0L8XsX{font-weight:400;font-size:10px;color:"[theme:themePrimary, default:#0078D7]"}html[dir=ltr] ._1Q6qmbDfVktTkuve0L8XsX{padding-left:4px}html[dir=rtl] ._1Q6qmbDfVktTkuve0L8XsX{padding-right:4px}',""]),t.locals={filter:"QAS4pFKCqswPU5fpvcIOX",paddingTop:"EpYIkhG5VIRUY01uPFfPd",paddingBottom:"_10x8KsLwrO-SGGTiMT70-h",icon:"_1Q6qmbDfVktTkuve0L8XsX"}},600:function(e,t,n){"use strict";var r,o;n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return l}),(o=r||(r={}))[o.MailCompose=0]="MailCompose",o[o.MailList=1]="MailList",o[o.ReadingPane=2]="ReadingPane";var i=[r.MailCompose,r.MailList,r.ReadingPane],a={};function c(e,t){var n=u(e);if(a[n]&&e!==r.ReadingPane)throw new Error("Component has already registered a focus manager callback");a[n]=t}function s(e){a[u(e)]=null}function l(){return new Promise(function(e,t){window.requestAnimationFrame(function(){for(var t=0,n=i;t<n.length;t++){var r=n[t],o=a[u(r)];if(o&&o())return e()}return e()})})}function u(e){return r[e]}},884:function(e,t,n){"use strict";var r,o=n(3),i=Object(o.createStore)("undo",{hasUndoableAction:!1})(),a=n(78),c=n(4);n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return d});var s=Object(c.action)("addActionToUndoStack")(Object(c.select)({store:function(){return i}})(function(e,t){null!==e&&(r=e,t.store.hasUndoableAction=!0)})),l=Object(c.action)("clearLastUndoableAction")(Object(c.select)({store:function(){return i}})(function(e){r=null,e.store.hasUndoableAction=!1})),u=Object(c.select)({store:function(){return i}})(function(e){return e.store.hasUndoableAction}),d=Object(c.action)("undo",{datapoint:{name:"TnS_Undo",customData:function(e){return[e]}}})(function(e){a.a.removeAll();null!==r&&(r(),l())})}},0,[6,7,25,34,57,0,3,4,9,52,1,2,51,19,60,8,11,55,201,223,56,242,218,225,232,54]]);
//# sourceMappingURL=owa.FilterContextMenu.js.map
window.scriptsLoaded['owa.FilterContextMenu.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.FilterContextMenu.js'] = (new Date()).getTime();