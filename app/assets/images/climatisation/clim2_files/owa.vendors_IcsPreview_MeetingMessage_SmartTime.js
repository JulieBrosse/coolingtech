window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.vendors~IcsPreview~MeetingMessage~SmartTime.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[23],{1347:function(t,e,r){var n=r(137);t.exports=function(t,e){var r=n(t),a=n(e);return r.getFullYear()===a.getFullYear()&&r.getMonth()===a.getMonth()}},2262:function(t,e,r){var n=r(137);t.exports=function(t,e){var r=n(t),a=n(e);return r.getTime()<a.getTime()}},2569:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(200),a=r(2244),c=r(2262);function o(t,e){return a(t,n(t))&&a(e,n(e))&&c(t,e)}},2665:function(t,e,r){var n=r(137);t.exports=function(t,e){var r=n(t).getTime(),a=n(e).getTime();return r<a?-1:r>a?1:0}},2800:function(t,e,r){var n=r(137),a=r(2989),c=r(2665);t.exports=function(t,e){var r=n(t),o=n(e),u=c(r,o),i=Math.abs(a(r,o));return r.setDate(r.getDate()-u*i),u*(i-(c(r,o)===-u))}},2801:function(t,e,r){"use strict";r.d(e,"d",function(){return f}),r.d(e,"b",function(){return s}),r.d(e,"e",function(){return l}),r.d(e,"f",function(){return O}),r.d(e,"c",function(){return m}),r.d(e,"a",function(){return g}),r.d(e,"g",function(){return d});var n=r(2244),a=r(52),c=r(18),o=r(495),u=r(4),i=r(725),f=y(function(t,e,r,n){return Object(c.format)(r.oneDayAllDayFormatString,g(t,n))}),s=y(function(t,e,r,n){return Object(c.format)(r.multiDayAllDayFormatString,g(t,n),g(Object(i.f)(e,1),n))}),l=y(function(t,e,r,a){return n(t,e)?Object(c.format)(r.sameDayNoDurationFormatString,g(t,a),d(t,a)):Object(c.format)(r.sameDayFormatString,g(t,a),d(t,a),d(e,a))}),O=y(function(t,e,r,n){return Object(c.format)(r.timeSpanFormatString,d(t,n),d(e,n))}),m=y(function(t,e,r,n){return Object(c.format)(r.differentDayFormatString,g(t,n),d(t,n),g(e,n),d(e,n))}),g=y(function(t,e){var r=e.dateFormat;return Object(o.b)(t,"ddd "+r,!1)}),d=y(function(t,e){var r=e.timeFormat;return Object(o.b)(t,r,!1)});function y(t){return Object(u.select)({timeFormat:function(){return a.a.TimeFormat},dateFormat:function(){return a.a.DateFormat}})(t)}},2923:function(t,e,r){"use strict";var n=r(397),a=r.n(n),c=r(2800),o=r(684),u=r(2569),i=r(2801);var f=r(3376),s=r(18),l=r(4),O=Object(l.select)({rangeWithEndFormat:function(){return a.a.calendarEffectiveWithEndFormatString},rangeWithoutEndFormat:function(){return a.a.calendarEffectiveWithoutEndFormatString}})(function(t,e,r){var n=Object(f.a)(t.StartDate),a=Object(i.a)(n),c=t.EndDate,o=t.NumberOfOccurrences,u=c?Object(f.a)(c):o?e(n,o):null;if(u){var l=Object(i.a)(u);return Object(s.format)(r.rangeWithEndFormat,a,l)}return Object(s.format)(r.rangeWithoutEndFormat,a)}),m=r(2244),g=Object(l.select)({strings:function(){return a.a}})(function(t,e,r){return Object(u.a)(t,e)?"":m(t,e)?Object(s.format)(r.strings.calendarRangeTimeNoDurationFormatString,Object(i.g)(t)):Object(s.format)(r.strings.calendarRangeTimeFormatString,Object(i.g)(t),Object(i.g)(e))}),d=r(3732),y=Object(l.select)({formatString:function(){return a.a.calendarRecurrenceFormatString}})(function(t,e,r,n){var a=r.RecurrencePattern,c=Object(d.a)(a);return Object(s.format)(n.formatString,c.formatRecurrence(a),g(t,e),O(r.RecurrenceRange,c.getNumberedRecurrenceEndDate.bind(null,a)))}),b=r(682);e.a=Object(l.select)({strings:function(){return a.a}})(function(t,e,r,n){var a,f,s,l="string"==typeof t?Object(b.a)(t):t,O="string"==typeof e?Object(b.a)(e):e;return r?y(l,O,r):(a=l,f=O,s=n.strings,Object(u.a)(a,f)?-1===c(a,f)?Object(i.d)(a,f,s):Object(i.b)(a,f,s):o(a,f)?Object(i.e)(a,f,s):Object(i.c)(a,f,s))})},2989:function(t,e,r){var n=r(200),a=6e4,c=864e5;t.exports=function(t,e){var r=n(t),o=n(e),u=r.getTime()-r.getTimezoneOffset()*a,i=o.getTime()-o.getTimezoneOffset()*a;return Math.round((u-i)/c)}},3376:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(353);function a(t){var e=new Date(t);if(isNaN(e.getTime())){var r=t.split(/(\+|-|T)/);return Object(n.a)(+r[0],+r[2]-1,+r[4])}return Object(n.a)(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}},3377:function(t,e,r){var n=r(137);t.exports=function(t,e){var r=n(t),a=Number(e);return r.setDate(a),r}},3378:function(t,e,r){var n=r(137),a=r(996);t.exports=function(t,e){var r=n(t),c=Number(e),o=r.getFullYear(),u=r.getDate(),i=new Date(0);i.setFullYear(o,c,15),i.setHours(0,0,0,0);var f=a(i);return r.setMonth(c,Math.min(u,f)),r}},3732:function(t,e,r){"use strict";var n=r(172),a=r(992),c=r(360),o=r(397),u=r.n(o),i=r(4),f=r(18),s=Object(i.select)({strings:function(){return u.a}})(function(t,e){if(t&&0!==t.length){if(1===t.length)return t[0];if(2===t.length)return Object(f.format)(e.strings.formatStringTwoItems,t[0],t[1]);for(var r=Object(f.format)(e.strings.formatStringNItemsStart,t[0],t[1]),n=2;n<t.length-1;n++)r=Object(f.format)(e.strings.formatStringNItemsMiddle,r,t[n]);return r=Object(f.format)(e.strings.formatStringNItemsEnd,r,t[t.length-1])}return""}),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function O(t){return l.indexOf(t)}var m=Object(i.select)({strings:function(){return u.a}})(function(t,e){return e.strings["calendarDayOfWeek_"+t]}),g=7,d=Object(i.select)({strings:function(){return u.a}})(function(t,e){var r=t.DaysOfWeek.split(" ").sort(function(t,e,r){var n={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Day:0,Weekday:0,WeekendDay:0},a=n[t],c=b(n[e]-a,7),o=b(n[r]-a,7);return c-o}.bind(null,t.FirstDayOfWeek)).map(function(t){return m(t,e)}),n=s(r);return 1===t.Interval?Object(f.format)(e.strings.calendarWeekly1FormatString,n):2===t.Interval?Object(f.format)(e.strings.calendarWeekly2FormatString,n):Object(f.format)(e.strings.calendarWeeklyNFormatString,n,t.Interval)});var y={canHandle:function(t){return!!t.DaysOfWeek&&!!t.FirstDayOfWeek&&!!t.Interval},formatRecurrence:d,formatRecurrenceOption:d,getNumberedRecurrenceEndDate:function(t,e,r){var n,o,u=t.DaysOfWeek.split(" "),i=(n=u,o=Array(g),n.forEach(function(t){switch(t){case"Weekday":o[O("Monday")]=!0,o[O("Tuesday")]=!0,o[O("Wednesday")]=!0,o[O("Thursday")]=!0,o[O("Friday")]=!0;break;case"WeekendDay":o[O("Saturday")]=!0,o[O("Sunday")]=!0;break;case"Day":for(var e=0;e<o.length;e++)o[e]=!0;break;default:o[O(t)]=!0}}),o),f=i.reduce(function(t,e){return e?t+1:t},0),s=function(t,e,r){var n=O(r),a=t.getDay(),c=0;do{e[a]&&c++,a=b(a+1,g)}while(a!==n);return c}(e,i,t.FirstDayOfWeek);if(r<=s)return v(i,e,r);var l=r-s,m=Math.ceil(l/f),d=a(e,t.Interval*m);return v(i,c(d,{weekStartsOn:O(t.FirstDayOfWeek)}),b(l,f)||f)},formatOptionsForSummary:d};function b(t,e){return(t%e+e)%e}function v(t,e,r){for(var a=e.getDay(),c=0;c<r;)t[b(a,g)]&&c++,a++;return n(e,b(--a-e.getDay(),g))}var D=r(692),j=r(2262),h=r(1347),F=r(185),S=7;function W(t,e,r){var c=F(t),o=O(e)-c.getDay();o<0&&(o+=S);var u=n(c,o);switch(r){case"First":return u;case"Second":return a(u,1);case"Third":return a(u,2);case"Fourth":return a(u,3);case"Last":var i=a(u,4);return h(c,i)||(i=a(u,3)),i;default:throw new Error("Invalid DayOfWeekIndexType")}}var M=Object(i.select)({strings:function(){return u.a}})(function(t,e){return e.strings["calendarDayOfWeekIndex_"+t]});var k={canHandle:function(t){return!!t.DaysOfWeek&&!!t.DayOfWeekIndex&&!!t.Interval},formatRecurrence:Object(i.select)({strings:function(){return u.a}})(function(t,e){var r=m(t.DaysOfWeek,e),n=M(t.DayOfWeekIndex,e);return 1===t.Interval?Object(f.format)(e.strings.calendarRelativeMonthly1FormatString,n,r):2===t.Interval?Object(f.format)(e.strings.calendarRelativeMonthly2FormatString,n,r):Object(f.format)(e.strings.calendarRelativeMonthlyNFormatString,n,r,t.Interval)}),formatRecurrenceOption:Object(i.select)({strings:function(){return u.a}})(function(t,e){var r=m(t.DaysOfWeek,e),n=M(t.DayOfWeekIndex,e);return Object(f.format)(e.strings.calendarRelativeMonthlyOptionFormatString,n,r)}),getNumberedRecurrenceEndDate:function(t,e,r){var n=W(e,t.DaysOfWeek,t.DayOfWeekIndex);return j(n,e)&&(n=W(D(n,1),t.DaysOfWeek,t.DayOfWeekIndex)),W(D(n,(r-1)*t.Interval),t.DaysOfWeek,t.DayOfWeekIndex)},formatOptionsForSummary:Object(i.select)({strings:function(){return u.a}})(function(t,e){var r=m(t.DaysOfWeek,e),n=M(t.DayOfWeekIndex,e);return Object(f.format)(e.strings.calendarRelativeMonthlyOptionFormatLowercaseString,n,r)})},p=r(3377);var I={canHandle:function(t){return!!t.DayOfMonth&&!!t.Interval},formatRecurrence:Object(i.select)({strings:function(){return u.a}})(function(t,e){return 1===t.Interval?Object(f.format)(e.strings.calendarAbsoluteMonthly1FormatString,t.DayOfMonth):2===t.Interval?Object(f.format)(e.strings.calendarAbsoluteMonthly2FormatString,t.DayOfMonth):Object(f.format)(e.strings.calendarAbsoluteMonthlyNFormatString,t.DayOfMonth,t.Interval)}),formatRecurrenceOption:Object(i.select)({strings:function(){return u.a}})(function(t,e){return Object(f.format)(e.strings.calendarAbsoluteMonthlyOptionFormatString,t.DayOfMonth)}),getNumberedRecurrenceEndDate:function(t,e,r){var n=e;return n.getDate()!=t.DayOfMonth&&(n=p(n,t.DayOfMonth),j(n,e)&&(n=D(n,1))),D(n,(r-1)*t.Interval)},formatOptionsForSummary:Object(i.select)({strings:function(){return u.a}})(function(t,e){return Object(f.format)(e.strings.calendarAbsoluteMonthlyOptionFormatLowercaseString,t.DayOfMonth)})},R=r(565),x=r(3378),T=Object(i.select)({strings:function(){return u.a}})(function(t,e){return e.strings["calendarMonth_"+t]}),N=["January","February","March","April","May","June","July","August","September","October","November","December"],E=Object(i.select)({strings:function(){return u.a}})(function(t,e){return A(e.strings.calendarRelativeYearlyFormatString,t,e)}),w=Object(i.select)({strings:function(){return u.a}})(function(t,e){return A(e.strings.calendarRelativeYearlyOptionFormatString,t,e)});function A(t,e,r){var n=m(e.DaysOfWeek,r),a=M(e.DayOfWeekIndex,r),c=T(e.Month,r);return Object(f.format)(t,a,n,c)}var Y={canHandle:function(t){return!!t.DaysOfWeek&&!!t.Month&&!!t.DayOfWeekIndex},formatRecurrence:E,formatRecurrenceOption:w,getNumberedRecurrenceEndDate:function(t,e,r){var n=e,a=N.indexOf(t.Month);return n.getMonth()!=a&&(n=x(n,a)),n=W(n,t.DaysOfWeek,t.DayOfWeekIndex),j(n,e)&&(n=W(R(n,1),t.DaysOfWeek,t.DayOfWeekIndex)),W(R(n,r-1),t.DaysOfWeek,t.DayOfWeekIndex)},formatOptionsForSummary:w},H=["January","February","March","April","May","June","July","August","September","October","November","December"],J=Object(i.select)({strings:function(){return u.a}})(function(t,e){return C(e.strings.calendarAbsoluteYearlyFormatString,t,e)});var _=Object(i.select)({strings:function(){return u.a}})(function(t,e){return C(e.strings.calendarAbsoluteYearlyOptionFormatString,t,e)});function C(t,e,r){var n=T(e.Month,r);return Object(f.format)(t,n,e.DayOfMonth)}var L={canHandle:function(t){return!!t.DayOfMonth&&!!t.Month},formatRecurrence:J,formatRecurrenceOption:_,getNumberedRecurrenceEndDate:function(t,e,r){var n=e,a=H.indexOf(t.Month);return n.getMonth()!=a&&(n=x(n,a)),n.getDate()!=t.DayOfMonth&&(n=p(n,t.DayOfMonth)),j(n,e)&&(n=R(n,1)),R(n,r-1)},formatOptionsForSummary:_},U=Object(i.select)({strings:function(){return u.a}})(function(t,e){return 1===t.Interval?e.strings.calendarDaily1Recurrence:2===t.Interval?e.strings.calendarDaily2Recurrence:Object(f.format)(e.strings.calendarDailyNRecurrence,t.Interval)});var z={canHandle:function(t){return"DailyRecurrence:#Exchange"===t.__type&&!!t.Interval},formatRecurrence:U,formatRecurrenceOption:U,getNumberedRecurrenceEndDate:function(t,e,r){return n(e,(r-1)*t.Interval)},formatOptionsForSummary:U};r.d(e,"a",function(){return P});var $=[y,k,I,Y,L,z];function P(t){for(var e,r=0;r<$.length;r++)if($[r].canHandle(t)){e=$[r];break}if(!e)throw new Error("Invalid recurrence type");return e}}}]);
//# sourceMappingURL=owa.vendors~IcsPreview~MeetingMessage~SmartTime.js.map
window.scriptsLoaded['owa.vendors~IcsPreview~MeetingMessage~SmartTime.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.vendors~IcsPreview~MeetingMessage~SmartTime.js'] = (new Date()).getTime();