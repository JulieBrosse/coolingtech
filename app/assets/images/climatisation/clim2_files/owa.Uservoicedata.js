window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.Uservoicedata.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[136],{1908:function(e,t,i){"use strict";i.r(t);var n,s=i(1277),r=i(4606),o=i.n(r),u=i(6),c=i(4),a=Object(c.action)("getUserVoiceData")(Object(c.select)({userVoiceSettings:function(){return s.a}})(function(e){return n||(n=o()().then(function(t){var i=Object(u.a)();e.userVoiceSettings.userVoiceId=t.Id,e.userVoiceSettings.owaUrl=t.OwaUrl,e.userVoiceSettings.onlineBookingUrl=t.OnlineBookingUrl,e.userVoiceSettings.userCulture=i.SessionSettings.UserCulture,e.userVoiceSettings.whenMailboxCreated=t.WhenMailboxCreated,e.userVoiceSettings.isConsumer=!0,e.userVoiceSettings.owaVersion="ReactBuildPending",e.userVoiceSettings.userDisplayName=i.SessionSettings.UserDisplayName,e.userVoiceSettings.country=t.Country?t.Country:i.UserOptions.TimeZone,e.userVoiceSettings.mailboxGuid=i.SessionSettings.MailboxGuid})),n}));i.d(t,"getUserVoiceData",function(){return a})},4606:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(38);t.default=function(e){return n.makeServiceRequest("GetUserVoiceData",{},e)}}}]);
//# sourceMappingURL=owa.Uservoicedata.js.map
window.scriptsLoaded['owa.Uservoicedata.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.Uservoicedata.js'] = (new Date()).getTime();