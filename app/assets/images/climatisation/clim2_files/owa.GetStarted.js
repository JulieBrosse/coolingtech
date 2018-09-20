window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.GetStarted.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[121],{1429:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(2),o=new r.c(function(){return Promise.all([n.e(0),n.e(26),n.e(32),n.e(142)]).then(n.bind(null,2030))}),i=new r.b(o,function(e){return e.storeLinkHandler}),a=new r.b(o,function(e){return e.launchStoreUrl})},1643:function(e,t,n){"use strict";function r(e){throw new Error("Unexpected object: "+e)}n.d(t,"a",function(){return r})},1893:function(e,t,n){"use strict";var r=n(1842),o=n(2417),i=n(41),a=n(1887),c={root:"ms-ProgressIndicator",itemName:"ms-ProgressIndicator-itemName",itemDescription:"ms-ProgressIndicator-itemDescription",itemProgress:"ms-ProgressIndicator-itemProgress",progressTrack:"ms-ProgressIndicator-progressTrack",progressBar:"ms-ProgressIndicator-progressBar"},s=Object(i.keyframes)({"0%":{left:"-30%"},"100%":{left:"100%"}}),u=Object(i.keyframes)({"100%":{right:"-30%"},"0%":{right:"100%"}});n.d(t,"a",function(){return d});var d=Object(r.a)(o.a,function(e){var t,n,r=Object(a.a)(),o=e.className,d=e.indeterminate,l=e.theme,p=e.barHeight,m=void 0===p?2:p,f=l.palette,h=l.semanticColors,g=Object(i.getGlobalClassNames)(c,l);return{root:[g.root,{fontWeight:i.FontWeights.regular},o],itemName:[g.itemName,i.noWrap,{color:h.bodyText,fontSize:i.FontSizes.medium,paddingTop:4,lineHeight:20}],itemDescription:[g.itemDescription,{color:h.bodySubtext,fontSize:i.FontSizes.xSmall,lineHeight:18}],itemProgress:[g.itemProgress,{position:"relative",overflow:"hidden",height:m,padding:"8px 0"}],progressTrack:[g.progressTrack,{position:"absolute",width:"100%",height:m,backgroundColor:f.neutralLight,selectors:(t={},t[i.HighContrastSelector]={borderBottom:"1px solid WindowText"},t)}],progressBar:[{backgroundColor:f.themePrimary,height:m,position:"absolute",transition:"width .3s ease",width:0,selectors:(n={},n[i.HighContrastSelector]={backgroundColor:"WindowText"},n)},d?{position:"absolute",minWidth:"33%",background:"linear-gradient(to right, transparent 0%, "+f.themePrimary+" 50%, transparent 100%)",animation:(r?u:s)+" 3s infinite"}:{transition:"width .15s linear"},g.progressBar]}},void 0,{scope:"ProgressIndicator"})},2125:function(e,t,n){"use strict";var r=n(2265),o=(n(2193),n(2129),n(2133)),i=n(2144),a=(n(2411),n(2309),n(2137));var c=n(2195),s=n(2),u=n(2194),d=n(2126);n.d(t,"j",function(){return p}),n.d(t,"l",function(){return m}),n.d(t,"i",function(){return f}),n.d(t,"k",function(){return h}),n.d(t,"a",function(){return i.b}),n.d(t,"b",function(){return r.a}),n.d(t,"f",function(){return d.b}),n.d(t,"c",function(){return u.a}),n.d(t,"d",function(){return o.a}),n.d(t,"e",function(){return o.b}),n.d(t,"h",function(){return c.a}),n.d(t,"g",function(){return a.b}),n.d(t,"m",function(){return o.c});var l=new s.c(function(){return Promise.all([n.e(1),n.e(2),n.e(7),n.e(8),n.e(173)]).then(n.bind(null,5626))}),p=new s.b(l,function(e){return e.loadProviders}),m=new s.b(l,function(e){return e.removeFileProvider}),f=new s.b(l,function(e){return e.addFileProvider}),h=new s.b(l,function(e){return e.removeAndAddFileProvider})},2126:function(e,t,n){"use strict";var r=n(0),o=n(2502),i=n.n(o),a=n(2285),c=n.n(a);var s=n(2438);n.d(t,"a",function(){return g}),n.d(t,"b",function(){return b});var u="code",d="token",l=3e3;function p(e){return{state:e}}function m(e){return e.state}function f(e){return e.code}function h(e,t,n,o,a,u){return r.__awaiter(this,void 0,void 0,function(){var d;return r.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(p=e,m=c()({ProviderType:p}),i()(m))];case 1:return d=r.sent(),t.getAuthUrlInfo=Object(s.d)(e,n,o,d.ProviderAppKey,a,u),[3,3];case 2:return r.sent(),setTimeout(function(){return h(e,t,n,o,a,u)},l),[3,3];case 3:return[2]}var p,m})})}function g(e,t,n,r,o){var i={providerType:e,getAuthUrlInfo:null,getCSRFToken:m,getOAuthCode:f};return h(e,i,t,n,r,o),i}var v=null;function b(e){var t=function(){if(!v){(v={})[3]=g(3,"https://app.box.com/api/oauth2/authorize",Object(s.c)(3),u,p),v[2]=g(2,"https://www.dropbox.com/oauth2/authorize",Object(s.b)(2),u,p);var e=g(6,"https://www.facebook.com/dialog/oauth",Object(s.b)(6),d,function(e){return{state:e,scope:"user_photos,email"}});e.getCSRFToken=m,e.getOAuthCode=function(e){return e.access_token},v[6]=e;var t=g(5,"https://accounts.google.com/o/oauth2/auth",s.a+"/ADPRedirect.aspx",u,function(e){var t={state:e,provider:5..toString(),url:Object(s.b)()};return{state:JSON.stringify(t),scope:"https://www.googleapis.com/auth/drive",access_type:"offline",prompt:"consent",include_granted_scopes:"true"}});t.getCSRFToken=function(e){return JSON.parse(e.state).state},v[5]=t,v[1]=g(1,"https://login.live.com/oauth20_authorize.srf",Object(s.c)(1),u,function(e){return{state:e,scope:"wl.basic onedrive.readwrite wl.offline_access"}})}return v}();return e in t?t[e]:null}},2129:function(e,t,n){"use strict";var r=n(3),o=n(21),i=n(2194),a={providers:new o.a,loadState:i.a.NotLoaded,removalPending:new o.a},c=Object(r.createStore)("fileProviderStoreV2",a);t.a=c},2133:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return a});var r=n(3),o=Object(r.action)("FILE_PROVIDER_ADDED",function(e){return{providerViewState:e}}),i=Object(r.action)("FILE_PROVIDER_REMOVED",function(e){return{providerType:e}}),a=Object(r.action)("PROVIDERS_LOADED",function(e){return{providers:e}})},2137:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(0),o=n(2129),i=function(){return r.__spread(Object(o.a)().providers.values())},a=function(e){return Object(o.a)().providers.get(e)||null}},2144:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c});var r,o,i=n(0);(o=r||(r={}))[o.Groups=1e4]="Groups";var a=Object.freeze([1,3,2,6,5]),c=Object.freeze(i.__spread(a,[0,4,10]))},2193:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(11),o=n.n(r),i=n(1643);function a(e){switch(e){case 0:case 1:return o.a.OneDriveFileProviderDisplayName;case 2:return o.a.DropboxFileProviderDisplayName;case 3:return o.a.BoxFileProviderDisplayName;case 5:return o.a.GoogleDriveFileProviderDisplayName;case 6:return o.a.FacebookFileProviderDisplayName;case 4:return o.a.RecentAttachmentsFileProviderDisplayName;case 10:return o.a.MailMessageFileProviderDisplayName;default:return Object(i.a)(e)}}},2194:function(e,t,n){"use strict";var r,o;n.d(t,"a",function(){return r}),(o=r||(r={}))[o.Loaded=0]="Loaded",o[o.Loading=1]="Loading",o[o.NotLoaded=2]="NotLoaded"},2195:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(2129);function o(){return Object(r.a)().loadState}},2265:function(e,t,n){"use strict";var r,o;(o=r||(r={}))[o.None=0]="None",o[o.Images=1]="Images",o[o.MailMessage=2]="MailMessage",t.a=r},2285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetNewAttachmentDataProviderCreationInfoRequest:#Exchange"},e)}},2309:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(6),o=n(82),i=n(8);function a(e){var t=Object(r.a)();switch(e){case 5:return t.AttachmentPolicy.GoogleDriveAttachmentsEnabled&&t.AttachmentPolicy.ThirdPartyAttachmentsEnabled;case 4:case 0:return!0;case 3:return t.AttachmentPolicy.BoxAttachmentsEnabled&&t.AttachmentPolicy.ThirdPartyAttachmentsEnabled;case 2:return t.AttachmentPolicy.DropboxAttachmentsEnabled&&t.AttachmentPolicy.ThirdPartyAttachmentsEnabled;case 6:return t.AttachmentPolicy.ThirdPartyAttachmentsEnabled&&Object(i.c)("doc-fileProvider-facebook");case 1:return(Object(i.c)("doc-filePicker-oneDriveConsumerForO365")||Object(i.c)("doc-consumerUrl"))&&t.AttachmentPolicy.OnedriveAttachmentsEnabled&&t.AttachmentPolicy.ThirdPartyAttachmentsEnabled;case 10:return Object(i.c)("doc-filePicker-mailMessageAttachment");default:return Object(o.a)(e)}}},2411:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(2144),o="file provider is not addable";function i(e){return r.a.indexOf(e)>-1}},2417:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),o=n(1),i=n(1843),a=n(1825),c=Object(i.a)(),s=.01,u=function(e){function t(t){var n=e.call(this,t)||this;return n._onRenderProgress=function(e){var t=n.props,r=t.ariaValueText,i=t.barHeight,a=t.className,u=t.styles,d=t.theme,l="number"==typeof n.props.percentComplete?Math.min(100,Math.max(0,100*n.props.percentComplete)):void 0,p=c(u,{theme:d,className:a,barHeight:i,indeterminate:void 0===l}),m={width:void 0!==l?l+"%":void 0,transition:void 0!==l&&l<s?"none":void 0},f=void 0!==l?0:void 0,h=void 0!==l?100:void 0,g=void 0!==l?Math.floor(l):void 0;return o.createElement("div",{className:p.itemProgress},o.createElement("div",{className:p.progressTrack}),o.createElement("div",{className:p.progressBar,style:m,role:"progressbar","aria-valuemin":f,"aria-valuemax":h,"aria-valuenow":g,"aria-valuetext":r}))},n._warnDeprecations({title:"label"}),n}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.barHeight,n=e.className,i=e.label,a=void 0===i?this.props.title:i,s=e.description,u=e.styles,d=e.theme,l=e.progressHidden,p=e.onRenderProgress,m=void 0===p?this._onRenderProgress:p,f="number"==typeof this.props.percentComplete?Math.min(100,Math.max(0,100*this.props.percentComplete)):void 0,h=c(u,{theme:d,className:n,barHeight:t,indeterminate:void 0===f});return o.createElement("div",{className:h.root},a?o.createElement("div",{className:h.itemName},a):null,l?null:m(r.__assign({},this.props,{percentComplete:f}),this._onRenderProgress),s?o.createElement("div",{className:h.itemDescription},s):null)},t.defaultProps={label:"",description:"",width:180},t}(a.a)},2438:function(e,t,n){"use strict";function r(e,t,n){if(!e||!t||!n)throw new Error("Key and Value parameters should not be null");return e.indexOf("?")>0?e+"&"+t+"="+n:e+"?"+t+"="+n}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c});var o="exchangelabs.live-int.com"===window.location.host?"https://exchangelabs.live-int.com/owa":"https://outlook.office.com/owa";function i(e){var t=e?encodeURIComponent("?provider="+e):"",n=e&&6===e?"AddFacebookFileProvider.html":"AddFileProvider.html";return window.location.protocol+"//"+window.location.host+"/mail/"+n+t}function a(e){var t=window.location.protocol+"//"+window.location.host+"/mail/AddFileProvider.html",n=encodeURIComponent("provider="+e+"&url="+t);return o+"/ADPRedirect.aspx?"+n}function c(e,t,n,o,i,a){return function(){var e=function(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),t=e.length-1,n=[],r=0;r<16;r++)n.push(e[Math.round(Math.random()*t)]);return"owa_csrf_token_"+n.join("")}(),c=r(t,"client_id",o);if(c=r(c=r(c,"redirect_uri",n),"response_type",i),a){var s=a(e);c=Object.keys(s).reduce(function(e,t){return r(e,t,s[t])},c)}return{authUrl:c,redirectUrl:n,csrfToken:e}}}},2502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),o=n(2285);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetNewAttachmentDataProviderCreationInfo",e,t)}},3023:function(e,t,n){"use strict";var r=n(3);t.a=Object(r.action)("THEME_CHANGED")},330:function(e,t,n){"use strict";var r=n(3),o=n(47);Object(r.orchestrator)(o.c,function(e){s.importAndExecute(e.actionSource,e.groupId,e.toEmailAddressWrappers,e.subject,e.body)});var i=n(2),a=n(977);n.d(t,"d",function(){return s}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"h",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"a",function(){return a.a});var c=new i.c(function(){return Promise.all([n.e(222),n.e(93)]).then(n.bind(null,5637))}),s=new i.a(c,function(e){return e.newMessage}),u=new i.a(c,function(e){return e.replyToConversation}),d=new i.a(c,function(e){return e.forwardConversation}),l=new i.a(c,function(e){return e.printConversation}),p=new i.a(c,function(e){return e.replyToItem}),m=new i.a(c,function(e){return e.forwardItem}),f=new i.a(c,function(e){return e.printItem}),h=new i.a(c,function(e){return e.showConversationInImmersiveReader}),g=new i.a(c,function(e){return e.replyWithText})},4570:function(e,t,n){var r=n(4571),o=n(33);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},4571:function(e,t,n){(t=e.exports=n(35)(!1)).push([e.i,'._4SUWalNTFySlgzfTSmf1a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px}html[dir] ._4SUWalNTFySlgzfTSmf1a{padding-top:14px;padding-bottom:15px}._1XOeGtPcSyaTCYTWzh9BEn{cursor:pointer}._1XOeGtPcSyaTCYTWzh9BEn:hover ._1hplDrIEBgsihQraBn2s8C{color:"[theme:black, default:#000000]"}._1XOeGtPcSyaTCYTWzh9BEn:hover ._2wmL6J_rfaT6vuOe_cvrff{display:none}._1XOeGtPcSyaTCYTWzh9BEn:hover ._1sat9couhJe8Q4c_S-ay0x{display:block}._3VUPB90VEkj-WIch5IrTtR{cursor:default}._3I50n1F6_RUlluOBkJpqqR{font-size:20px;color:"[theme:neutralTertiary, default:#a6a6a6]"}._2mBf0NmHJw0jO9B0N6bZm6{color:"[theme:themePrimary, default:#0078D7]"}._1hplDrIEBgsihQraBn2s8C{display:-webkit-box;display:-ms-flexbox;display:flex;color:"[theme:neutralPrimary, default:#333333]"}._3z6-cZd1knSNZzeJbnmDGv{font-size:20px}html[dir=ltr] ._1bBVVB9E5VbYSpnvPiAkWb{padding-left:25px}html[dir=rtl] ._1bBVVB9E5VbYSpnvPiAkWb{padding-right:25px}._2wmL6J_rfaT6vuOe_cvrff{display:block}._1sat9couhJe8Q4c_S-ay0x{display:none}',""]),t.locals={getStartedTask:"_4SUWalNTFySlgzfTSmf1a",pendingTask:"_1XOeGtPcSyaTCYTWzh9BEn",taskItem:"_1hplDrIEBgsihQraBn2s8C",pendingIcon:"_2wmL6J_rfaT6vuOe_cvrff",pendingIconHovered:"_1sat9couhJe8Q4c_S-ay0x",completedTask:"_3VUPB90VEkj-WIch5IrTtR",statusIcon:"_3I50n1F6_RUlluOBkJpqqR",completedIcon:"_2mBf0NmHJw0jO9B0N6bZm6",prefixIcon:"_3z6-cZd1knSNZzeJbnmDGv",description:"_1bBVVB9E5VbYSpnvPiAkWb"}},4572:function(e,t,n){var r=n(4573),o=n(33);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},4573:function(e,t,n){(t=e.exports=n(35)(!1)).push([e.i,'html[dir] ._1HtlDP7gMmYgJ8MSuPL6Qn{padding-top:12px}._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemProgress{height:7px;width:80%}html[dir=ltr] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemProgress{float:left}html[dir=rtl] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemProgress{float:right}._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-progressTrack{height:7px}html[dir] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-progressTrack{border-radius:9px}._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-progressBar{height:7px}html[dir] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-progressBar{border-radius:9px}._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemDescription{color:"[theme:themePrimary, default:#0078D7]";font-size:14px;width:20%}html[dir=ltr] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemDescription{float:left;text-align:right}html[dir=rtl] ._1HtlDP7gMmYgJ8MSuPL6Qn .ms-ProgressIndicator-itemDescription{float:right;text-align:left}',""]),t.locals={progress:"_1HtlDP7gMmYgJ8MSuPL6Qn"}},5610:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(14),i=n(1893),a=n(529),c=n.n(a),s=n(1),u=n(606),d=n(960);var l=n(1826),p=n(9),m=n(4),f={datapoint:{name:"GetStartedTaskClicked",customData:function(e){return[e]},options:{isCore:!0}}},h={datapoint:{name:"GetStartedTaskCompleted",customData:function(e,t){return[e,t]},options:{isCore:!0}}},g={datapoint:{name:"GetStartedTaskShown",customData:function(e,t){return[e,t]},options:{isCore:!0}}},v=Object(m.action)("clickGetStartedTask")(function(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,o,i,a,c;return r.__generator(this,function(r){return t=Object(u.a)(),n=t.tasks[e],o=f.datapoint,i=o.name,a=o.customData,c=o.options,Object(p.n)(i,a(n.identity),null,c),n.clicked=!0,[2]})})}),b=n(965),_=n(4570),P=n(90),O=function(e){function t(t){var n=e.call(this,t)||this;n.onClick=function(e){!n.isCompleted&&n.props.onClick&&(v(n.index),n.props.onClick())};var r=Object(u.a)();return n.index=r.tasks.map(function(e){return e.identity}).indexOf(t.identity),n}return r.__extends(t,e),t.prototype.componentDidMount=function(){if(this.index>-1){var e=g.datapoint,t=e.name,n=e.customData,r=e.options;Object(p.n)(t,n(this.props.identity,this.isCompleted),null,r)}},Object.defineProperty(t.prototype,"isCompleted",{get:function(){return Object(u.a)().tasks[this.index].status===b.a.Completed},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this;return this.index>-1&&s.createElement("div",{className:P(_.getStartedTask,this.isCompleted?_.completedTask:_.pendingTask),onClick:function(t){return e.onClick(t)}},s.createElement("div",{className:_.taskItem},s.createElement(l.a,{className:_.prefixIcon,iconName:this.props.iconName}),s.createElement("div",{className:_.description},this.props.description)),this.isCompleted?s.createElement(l.a,{className:P(_.statusIcon,_.completedIcon),iconName:"CompletedSolid"}):s.createElement("div",null,s.createElement(l.a,{className:P(_.statusIcon,_.pendingIcon),iconName:"CircleRing"}),s.createElement(l.a,{className:P(_.statusIcon,_.pendingIconHovered),iconName:"Completed"})))},t=r.__decorate([o.observer],t)}(s.Component),y=n(2125),k=n(209),w=n(3),S=n(81),C="ows/api/v1.0/getstarted/tasks";var j,A,E=Object(m.action)("completeGetStartedTask")(function(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,o,i,a,c,s,d;return r.__generator(this,function(r){switch(r.label){case 0:if(!((t=Object(u.a)()).tasks&&t.tasks.length>1))return[3,4];n=0,o=t.tasks,r.label=1;case 1:return n<o.length?(i=o[n]).identity!==e||i.status!==b.a.Incomplete?[3,3]:(a=h.datapoint,c=a.name,s=a.customData,d=a.options,Object(p.n)(c,s(e,i.clicked),null,d),[4,(l=e,Object(S.f)(C+"/"+l,{id:l}))]):[3,4];case 2:r.sent(),i.status=b.a.Completed,r.label=3;case 3:return n++,[3,1];case 4:return[2]}var l})})});(A=j||(j={})).SetupAccount="SetupAccount",A.ConnectStorageAccount="ConnectStorageAccount",A.SetSignature="SetSignature",A.SendAnEmail="SendAnEmail",A.ChooseYourTheme="ChooseYourTheme",A.DownloadMobile="DownloadMobile",A.PremiumUpsell="PremiumUpsell",A.AddInterestingCalendar="AddInterestingCalendar",A.UpdateProfileImage="UpdateProfileImage",A.ImportContact="ImportContact",A.GetAddin="GetAddin",A.ExploreHelp="GetHelp";var T=Object(w.action)("ADD_STORAGE_ACCOUNT");Object(w.orchestrator)(T,function(){k.e.importAndExecute("mail","attachments")}),Object(w.orchestrator)(y.m,function(e){0!==e.providers.length&&0!==e.providers.filter(function(e){return!e.isPrimaryProvider}).length&&E(j.ConnectStorageAccount)});var x={identity:j.ConnectStorageAccount,iconName:"CloudAdd",description:c.a.task_Add_Storage_Account,onClick:T,policy:{features:["getStarted-tasksGroupA"]}},I=Object(w.action)("PREMIUM_UPSELL");Object(w.orchestrator)(I,function(){window.open("https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_GetStarted_Upgrade&ep"),E(j.PremiumUpsell)});var D={identity:j.PremiumUpsell,iconName:"Diamond",description:c.a.task_Upgrade_Premium,onClick:I,policy:{features:["getStarted-tasksGroupA"]}},N=n(75),M=n(330),G=n(6),B=n(18),H=Object(w.action)("SEND_AN_EMAIL");Object(w.orchestrator)(H,function(){var e=Object(G.a)().SessionSettings.UserEmailAddress;M.d.importAndExecute("GetStarted",void 0,void 0,Object(B.format)(c.a.task_Send_Email_Subject,e),Object(B.format)(c.a.task_Send_Email_Body,e))}),Object(w.orchestrator)(N.u,function(e){E(j.SendAnEmail)});var L={identity:j.SendAnEmail,iconName:"Send",description:c.a.task_Send_Email,onClick:H,policy:{features:["getStarted-tasksGroupA"]}},R={identity:j.SetupAccount,iconName:"Mail",description:c.a.task_Setup_Account},F=n(39),U=n(3023),z=Object(w.action)("CHOOSE_YOUR_THEME");Object(w.orchestrator)(z,function(e){k.e.importAndExecute("general","appAppearance")}),Object(w.orchestrator)(U.a,function(){E(j.ChooseYourTheme)});var J={identity:j.ChooseYourTheme,iconName:"Color",description:c.a.task_Choose_Your_Theme,onClick:z,onInit:function(e){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(n){return(t=Object(F.h)().UserOptions.ThemeStorageId)&&"base"!==t&&E(e.identity),[2]})})},policy:{features:["getStarted-tasksGroupB"]}},Y=Object(w.action)("DOWNLOAD_MOBILE");Object(w.orchestrator)(Y,function(){window.open("https://go.microsoft.com/fwlink/?linkid=875115"),E(j.DownloadMobile)});var W={identity:j.DownloadMobile,iconName:"CellPhone",description:c.a.task_Get_Mobile,onClick:Y,policy:{features:["getStarted-tasksGroupA"]}},V=n(707),Q=Object(w.action)("IMPORT_CONTACT");Object(w.orchestrator)(Q,function(){window.open(Object(V.a)()+"import"),E(j.ImportContact)});var q={identity:j.ImportContact,iconName:"People",description:c.a.task_Import_Contacts,onClick:Q,policy:{features:["getStarted-tasksGroupB"]}},Z=n(1429),X=Object(w.action)("GET_ADDIN");Object(w.orchestrator)(X,function(){Z.a.import().then(function(e){e(!0),E(j.GetAddin)})});var K={identity:j.GetAddin,iconName:"AddIn",description:c.a.task_Get_Addin,onClick:X,policy:{features:["getStarted-tasksGroupB"]}},$=n(125),ee=Object(w.action)("GET_HELP");Object(w.orchestrator)(ee,function(){Object($.a)(7),Object($.c)(2),E(j.ExploreHelp)});var te=n(8),ne={identity:j.ExploreHelp,iconName:"Help",description:c.a.task_Explore_Help,onClick:ee,policy:{features:["getStarted-tasksGroupB"],isOn:function(){return Promise.resolve(!Object(te.c)("fwk-o365shellheader"))}}},re=n(4572),oe=[R,L,W,x,D,q,ne,K,J],ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e,t,n=(e=Object(u.a)(),t=Object(d.a)(),(e.tasks.length-t)/e.tasks.length),o=oe.map(function(e){return s.createElement(O,r.__assign({key:e.identity},e))});return s.createElement("div",null,o,s.createElement("div",{className:re.progress},s.createElement(i.a,{label:c.a.getStarted_ProgressBar_Text,description:Math.round(100*n)+"%",percentComplete:n})))},t=r.__decorate([o.observer],t)}(s.Component),ae=n(16),ce=n(337),se="ows/api/v1.0/getstarted/tasks/pending";var ue=Object(m.action)("initializeGetStartedTasks")(function(){return r.__awaiter(this,void 0,void 0,function(){var e,t,n,o,i,a,c,s;return r.__generator(this,function(d){switch(d.label){case 0:return[4,function(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,Object(S.b)(se,void 0,!0)];case 1:return e=t.sent(),Object(ce.a)(e.status)?[2,e.json()]:[2,void 0]}})})}()];case 1:if(!(e=d.sent()))return[3,6];if((t=Object(u.a)()).tasks=[],!(e.length>0))return[3,6];t.tasks.push({identity:j.SetupAccount,status:b.a.Completed,clicked:!1}),n=e.map(function(e){return{identity:e.identity,status:e.status,clicked:!1}}),o=oe.map(function(e){return e.identity}),i=0,a=n,d.label=2;case 2:return i<a.length?(c=a[i],[4,function(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,o,i,a;return r.__generator(this,function(r){switch(r.label){case 0:if(!(e>=0))return[3,3];if(t=oe[e].policy,n=!0,!t)return[3,2];if(t.features&&t.features.length>0)for(o=0,i=t.features;o<i.length;o++)a=i[o],n=n&&Object(ae.b)(a);return n&&t.isOn?[4,t.isOn()]:[3,2];case 1:n=r.sent(),r.label=2;case 2:return[2,n];case 3:return[2,!1]}})})}(s=o.indexOf(c.identity))]):[3,6];case 3:return d.sent()?(t.tasks.push(c),c.status!==b.a.Completed&&oe[s].onInit?[4,oe[s].onInit(c)]:[3,5]):[3,5];case 4:d.sent(),d.label=5;case 5:return i++,[3,2];case 6:return[2]}})})});n.d(t,"GetStartedTaskContainer",function(){return ie}),n.d(t,"initializeGetStartedTasks",function(){return ue})},977:function(e,t,n){"use strict";var r=n(196),o=n(126);t.a={MailComposeNew:{datapoint:{name:"MailComposeNew",options:{isQos:!0},customData:function(e){return[e,!Object(o.a)()&&!!Object(r.b)().defaultViewState]}}},MailComposeFromHeader:{datapoint:{name:"MailComposeFromHeader"}}}}},0,[0,2,3,4,75,1,51,7,8,173,222,93,218,225,79,76]]);
//# sourceMappingURL=owa.GetStarted.js.map
window.scriptsLoaded['owa.GetStarted.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.GetStarted.js'] = (new Date()).getTime();