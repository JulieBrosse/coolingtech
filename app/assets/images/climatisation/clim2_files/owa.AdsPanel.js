window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.AdsPanel.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[123],{2039:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(3),i=Object(r.createStore)("AdsPanelViewState",{showAdBlockMessage:!1}),a=Object(r.actionCreator)("showAdBlock");Object(r.mutator)(a,function(){i().showAdBlockMessage=!0});var d,s=a,l=n(9),c=n(69),u=n(975),p={BREN:"BRPT",PLEN:"PLPL",MXEN:"MXES",DEEN:"DEDE",DKEN:"DKDA",AREN:"ARES",NOEN:"NONB",NLEN:"NLNL",IDEN:"IDID",VNEN:"VNVI",COEN:"COES",CHEN:"CHDE",SDEN:"SESV",AEAR:"AEEN",EGAR:"EGEN",RUEN:"RURU"},f={WAB8NLNL:"WAB8NLNL2",WAB8IEEN:"WAB8IEEN2",WAB2USEN:"OVT2USEN",WAB2CNZH:"WAB2CNZHH",WAB8ESES:"WAB10ESES",WAB2ROW:"WAB1ROW"};function m(){if(!d){d={AdMarket:Object(u.c)(),MUID:Object(u.g)(),TOPT:Object(u.i)()};var e=Object(u.f)(d.AdMarket);if(d.CountryCode=e[1]||"US",Object(c.a)("orpgc"))d.PageGroupMarketCode=Object(c.a)("orpgc");else if(d.AdMarket&&-1==u.n.indexOf(d.AdMarket.toLowerCase()))d.PageGroupMarketCode="ROW";else{var t=d.CountryCode+(e[0]||"EN");d.PageGroupMarketCode=p[t]||t}}return d}var h=null;function w(e,t){m(),h=e;var n=t&&e.ComposeGroupPrefix||e.PageGroupPrefix;d.PageGroup=n+d.PageGroupMarketCode,d.PageGroup=f[d.PageGroup]||d.PageGroup,d.AdSizes=e.Size,d.ExternalImpId=function(){var e=(new Date).getTime();window.performance&&"function"==typeof window.performance.now&&(e+=performance.now());return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}()}function b(e){return(e=e||{}).owa_1=h&&h.PageGroupPrefix,e.am=d.AdMarket,e.asid=d.ExternalImpId,e}function x(e,t,n){(n?l.o:l.n)(e,b(t))}function g(e){var t=new l.c("AdsImpressed");return t.addCustomData(b({pr:e})),t}function E(e,t,n){if(e){var o=typeof n;"object"===o&&n.message?e.addCustomData({reason:n.message+(n.stack?"|"+n.stack:"")}):"string"==o&&e.addCustomData({reason:n}),e.end(null,t),e=null}}function _(){Object(r.dispatch)(s()),x("AdBlock",{r:"BlockedScript",sc:this.src})}function A(e,t){Object(u.m)(e,t,_)}var v,k,C,S=n(8),N=n(2836),y=function(){function e(e,t){var n=this;this.firstAdLoaded=!1,v||(v=m()),this.containerId=e,this.renderAds=t,Object(S.c)("fwk-gdprAdsPrefs")?N.a.importAndExecute().then(function(){A(Object(u.d)(),n.load.bind(n))}):A(Object(u.d)(),this.load.bind(this))}return e.prototype.load=function(){var e=this;x("AdsLoaded",{script:Object(u.d)()},!0),(k=window.apntag)&&k.anq&&k.anq.push(function(){k.setEndpoint("m.adnxs.com");var t=v.CountryCode;k.setPageOpts({member:"AU"==t||"NZ"==t?1705:280,user:{dnt:v.TOPT,externalUid:v.MUID}}),k.defineTag({enableSafeFrame:!0,invCode:v.PageGroup,extInvCode:t,sizes:v.AdSizes,targetId:e.containerId,allowedFormats:["banner"],allowSmallerSizes:!1,trafficSourceCode:"pg:"+v.PageGroup,externalImpId:v.ExternalImpId}),k.onEvent("adLoaded",e.containerId,function(){E(e.datapoint)}),k.onEvent("adError",e.containerId,function(t){var n=null;t&&(n=t.errMessage||t.exception),E(e.datapoint,l.a.ClientError,n)}),k.loadTags(),e.renderAds&&e.refresh()})},e.prototype.refresh=function(){var e=this;E(this.datapoint,l.a.RequestNotComplete),this.datapoint=g("an"),k&&k.anq?k.anq.push(function(){if(e.firstAdLoaded){var t={externalImpId:v.ExternalImpId,invCode:v.PageGroup,trafficSourceCode:"pg:"+v.PageGroup,sizes:v.AdSizes};k.modifyTag(e.containerId,t),k.refresh([e.containerId])}else e.firstAdLoaded=!0,k.showTag(e.containerId)}):E(this.datapoint,l.a.ClientError,"No SDK")},e.prototype.modify=function(){this.refresh()},e}(),B=n(2432),P=Object(c.a)("aawuo")||"https://s.aolcdn.com/ads/adsWrapperMSNI.js",I=function(){function e(e,t){C||(C=m()),this.containerIds=[e,t],this.showContainer(),A(P,this.onScriptLoad.bind(this)),this.appNexusRenderer=new y(t,!1),window.addEventListener("message",this.onPostMessage.bind(this),!1)}return e.prototype.showContainer=function(e){void 0===e&&(e=0);for(var t=0;t<this.containerIds.length;t++){var n=document.getElementById(this.containerIds[t]);n&&n.setAttribute("style","display: "+(t==e?"block":"none"))}},e.prototype.onPostMessage=function(e){"aolUyNoBid"===e.data&&e.origin.indexOf(".atwola.com")>-1&&(this.showContainer(1),this.appNexusRenderer.refresh(),x("AdsYield"))},e.prototype.onScriptLoad=function(){var e=this;x("AdsLoaded",{script:P},!0);var t=window.atwUAC;t&&(t.adLoaded=function(){E(e.datapoint)},t.adError=function(t,n){E(e.datapoint,l.a.ClientError,n&&n.retType)}),this.load()},e.prototype.load=function(){return o.__awaiter(this,void 0,void 0,function(){var e,t,n,r,i,a;return o.__generator(this,function(o){switch(o.label){case 0:return this.didLoadProperly()?(this.configString="kvmsft_optout="+C.TOPT+";kvmsft_sdkversion=10.0;kvmsft_ext_inv_cd="+C.CountryCode+";kvmsft_muid="+C.MUID+";kvmsft_olk=1;",Object(S.c)("fwk-gdprAdsPrefs")?[4,Object(B.c)()]:[3,2]):[3,3];case 1:e=o.sent(),this.configString+="gdpr="+(Object(u.j)()?"yes":"no")+";euconsent="+e+";",o.label=2;case 2:if(window.adSetOthAT(this.configString+"kvmsft_asid="+C.ExternalImpId+";"),n=C.AdSizes[0][0],r=C.AdSizes[0][1],C.AdSizes.length>1){for(i=[],n=r=void 0,a=0;a<C.AdSizes.length;a++)i[i.length]=C.AdSizes[a][0]+"x"+C.AdSizes[a][1];t=i.join(",")}return window.htmlAdWH(C.PageGroup,n,r,"iframe",this.containerIds[0],t),[3,4];case 3:x("AdBlock",{r:"BlockedJS"}),o.label=4;case 4:return[2]}})})},e.prototype.refresh=function(){if(E(this.datapoint,l.a.RequestNotComplete),this.datapoint=g("aol"),this.showContainer(),this.didLoadProperly()){for(var e=document.getElementById(this.containerIds[0]).querySelectorAll("iframe"),t=0,n=0;n<e.length;n++)if(e[n].id){var o=e[n].id.split("adsF");if(o.length>1){var r=parseInt(o[1]);r>t&&(t=r)}}for(var i="adsF"+t,a=document.getElementsByTagName("iframe"),d=0;d<a.length;d++)a[d].id==i&&a[d].src&&-1==a[d].src.indexOf(C.PageGroup)&&a[d].remove&&a[d].remove();window.adSetOthAT(this.configString+"kvmsft_asid="+C.ExternalImpId+";"),window.adsReloadIframe(i,C.PageGroup)}else E(this.datapoint,l.a.ClientError,"Not loaded properly")},e.prototype.modify=function(){var e=document.getElementById(this.containerIds[0]);e&&(e.innerHTML=""),window.adsResetPg?window.adsResetPg():window.atwUAC&&(window.atwUAC.adsInfo=[]),this.load()},e.prototype.didLoadProperly=function(){return V("htmlAdWH")&&V("adSetOthAT")&&V("adsReloadIframe")&&document.getElementById(this.containerIds[0])},e}();function V(e){return"function"==typeof window[e]}var M,O,T,L=n(938),W=(n(1936),n(16)),j=[],G={},F={WAB5:{Size:[[300,600],[300,250]],PageGroupPrefix:"WAB5"},WAB2:{Size:[[160,600]],PageGroupPrefix:"WAB2",ComposeGroupPrefix:"WAB4"},WAB7:{Size:[[728,90]],PageGroupPrefix:"WAB7"},WAB8:{Size:[[320,50]],PageGroupPrefix:"WAB8"}};function R(e,t,n){var o=m(),r=F[n()];return r&&(w(r),G[e]?O.PageGroupPrefix!=r.PageGroupPrefix&&G[e].Provider.modify():G[e]={Provider:function(e){if("aol"==Object(c.a)("loadadfrom"))return!0;if("an"==Object(c.a)("loadadfrom"))return!1;var t=["BR","CA","DE","ES","FR","GB","IT","JP","US"];if(Object(W.b)("fwk-ads-programmatic-br")?t=["BR"]:Object(W.b)("fwk-ads-programmatic-none")&&(t=[]),t.indexOf(e.CountryCode)>-1){var n=Object(W.b)("fwk-ads-disableFallback")||"object"==typeof location&&"outlook.live.com"===location.hostname;return n||x("AdsFallback",{url:location.hostname},!0),n}return!1}(o)?new I(e,t):new y(e,!0),DetermineAd:n},O||x("AdsInitialized"),O=r,M=Z()),o.AdMarket}function D(e){var t,n=m(),o=Z()-M,r=M&&o>3e3;if(r){M=Z();for(var i=Object.keys(G),a=0;a<i.length;a++){var d=i[a],s=F[G[d].DetermineAd()];s&&(w(s,e==L.f),G[d].Provider.refresh())}clearTimeout(T),j.indexOf(n.AdMarket)>-1&&e&&(T=setTimeout(function(){D()},3e4))}x(r?"AdsRefresh":"AdsThrottle",{action:e,t:(t=o/1e3,Math.floor(2*t)/2).toString()})}function Z(){return(new Date).getTime()}var X=n(14),z=n(1826),q=n(61),U=n(18),Y=n(11),K=n.n(Y),H=n(1),Q=n(6),J=n(4578),$=function(e){function t(t){var o=e.call(this,t)||this;return o.updateAds=function(){o.props.isBottom&&(o.adsContainer.style.width=window.innerWidth+"px"),o.market=R(o.adContainerId,o.secondAdContainerId,o.determineAd.bind(o))},o.adContainerId="owaadbar"+n.instanceNumber++,o.secondAdContainerId="owaadbar"+n.instanceNumber++,o}var n;return o.__extends(t,e),n=t,t.prototype.componentDidMount=function(){this.updateAds(),window.addEventListener("resize",this.updateAds)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateAds)},t.prototype.determineAd=function(){if(window.innerWidth>320){if(this.props.isBottom&&window.innerWidth<990)return window.innerWidth<750?"WAB8":"WAB7";if(!this.props.isBottom&&window.innerWidth>=990)return window.innerWidth<1900?"WAB2":"WAB5"}return null},t.prototype.onFooterClick=function(){window.open("https://choice.microsoft.com/"+this.market,"_blank")},t.prototype.onRemoveClick=function(){window.open(Object(U.format)("https://aka.ms/l2?WT.mc_id=PROD_OL-Web_InApp_BannerAd_RemoveAds&ep={0}",Object(Q.a)().SessionSettings.EncryptedUserPuid),"_blank")},t.prototype.upsellText=function(){return Object(W.b)("fwk-ads-removeUpsell")?K.a.removeAdsLabelText:Object(W.b)("fwk-ads-upgradeUpsell")?K.a.upgradeAdsLabelText:""},t.prototype.render=function(){var e=this,t=[J.adsContainer];return this.props.isBottom&&t.push(J.bottom),H.createElement("div",{ref:function(t){return e.adsContainer=t},className:t.join(" ")},i().showAdBlockMessage?H.createElement("div",{className:J.adBlockContainer},H.createElement(z.a,{iconName:"OutlookLogo",className:J.icon}),H.createElement("span",{className:J.blockText,dangerouslySetInnerHTML:{__html:Object(U.format)(K.a.adBlockUseAdFreeText,"https://windows.microsoft.com/outlook/ad-free-outlook")}})):H.createElement("div",null,H.createElement("div",{"aria-label":K.a.adContainerAriaLabelText,className:J.rendererContainer,id:this.adContainerId}),H.createElement("div",{"aria-label":K.a.adContainerAriaLabelText,className:J.rendererContainer,id:this.secondAdContainerId})),H.createElement("div",{className:J.remove,onClick:this.onRemoveClick},this.upsellText()),H.createElement("div",{className:J.footer,onClick:this.onFooterClick.bind(this)},H.createElement("div",{className:J.choicePic},H.createElement("img",{"aria-label":K.a.adChoiceAriaLabelText,src:q.a.packageBaseUrl+"resources/images/adbarmetrosprite.png"})),H.createElement("span",{className:J.choiceLabel},K.a.adChoiceLabelText)),H.createElement("div",{className:J.hide},H.createElement("img",{src:"https://c.live.com/c.gif"}),H.createElement("img",{src:"https://c.bing.com/c.gif?Red3=OLLI_pd"})))},t.instanceNumber=0,t=n=o.__decorate([X.observer],t)}(H.Component);n.d(t,"AdsPanel",function(){return $}),n.d(t,"refresh",function(){return D})},2836:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(2),r=new o.c(function(){return n.e(188).then(n.bind(null,3735))}),i=new o.a(r,function(e){return e.initializeAdCmp})},4578:function(e,t,n){var o=n(4579),r=n(33);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)r.loadStyles(o[i][1],!1);o.locals&&(e.exports=o.locals)},4579:function(e,t,n){(t=e.exports=n(35)(!1)).push([e.i,'.stQe7wknhnXCAAroiyvBY{width:100%;position:relative;overflow:hidden}html[dir] .GN9apTlWzDujX-MGWb-uh,html[dir] .stQe7wknhnXCAAroiyvBY{background-color:"[theme:neutralLighter, default:#f4f4f4]"}._1OX7S7-OSEubCXUJNAu3oj{display:none!important}._1DKyQPkfugxw5wnk4gcR31{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._2KFlfBKVScw0PSMLt6-pZ2{font-size:96px;color:"[theme:neutralSecondaryAlt, default:#767676]"}html[dir] ._2KFlfBKVScw0PSMLt6-pZ2{margin:auto;padding-top:15px;padding-bottom:10px}._1bE5B0M3-BAhkXtFvLF3iM{color:"[theme:black, default:#000000]"}html[dir] ._1bE5B0M3-BAhkXtFvLF3iM{margin:auto;padding:0 20px}html[dir=ltr] ._1wSwuuDtT29ruk_RCIToSp{margin:5px 0 0 5px}html[dir=rtl] ._1wSwuuDtT29ruk_RCIToSp{margin:5px 5px 0 0}.GN9apTlWzDujX-MGWb-uh{position:absolute;bottom:3px;cursor:pointer;width:100%}html[dir=ltr] .GN9apTlWzDujX-MGWb-uh{left:0}html[dir=rtl] .GN9apTlWzDujX-MGWb-uh{right:0}._1lVSj1rZClECXwV-vweAsx{display:inline-block}html[dir] ._1lVSj1rZClECXwV-vweAsx img{margin-bottom:-4px}.uFb4yl9uUsCVBsGbFM0kf{visibility:hidden;color:"[theme:neutralSecondary, default:#666666]"}._1RGIsXrHh1lE78wyPdq7FR{color:"[theme:themePrimary, default:#0078D7]";font-size:13px;cursor:pointer;position:absolute;top:610px;width:100%}html[dir] ._1RGIsXrHh1lE78wyPdq7FR{text-align:center}.GN9apTlWzDujX-MGWb-uh:hover .uFb4yl9uUsCVBsGbFM0kf{visibility:visible}._29b-ENxq_En2Y_2hVVcpuZ.stQe7wknhnXCAAroiyvBY{height:95px}html[dir] ._29b-ENxq_En2Y_2hVVcpuZ.stQe7wknhnXCAAroiyvBY{text-align:center}html[dir=ltr] ._29b-ENxq_En2Y_2hVVcpuZ.stQe7wknhnXCAAroiyvBY{padding-right:10000px}html[dir=rtl] ._29b-ENxq_En2Y_2hVVcpuZ.stQe7wknhnXCAAroiyvBY{padding-left:10000px}._29b-ENxq_En2Y_2hVVcpuZ ._1wSwuuDtT29ruk_RCIToSp{display:inline-block;min-width:728px;min-height:90px}._29b-ENxq_En2Y_2hVVcpuZ ._1DKyQPkfugxw5wnk4gcR31{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}._29b-ENxq_En2Y_2hVVcpuZ ._2KFlfBKVScw0PSMLt6-pZ2{font-size:72px;display:table-cell;vertical-align:middle}html[dir] ._29b-ENxq_En2Y_2hVVcpuZ ._2KFlfBKVScw0PSMLt6-pZ2{margin:initial}html[dir=ltr] ._29b-ENxq_En2Y_2hVVcpuZ ._2KFlfBKVScw0PSMLt6-pZ2{margin-left:auto}html[dir=rtl] ._29b-ENxq_En2Y_2hVVcpuZ ._2KFlfBKVScw0PSMLt6-pZ2{margin-right:auto}._29b-ENxq_En2Y_2hVVcpuZ ._1bE5B0M3-BAhkXtFvLF3iM{display:table-cell;vertical-align:middle}html[dir] ._29b-ENxq_En2Y_2hVVcpuZ ._1bE5B0M3-BAhkXtFvLF3iM{margin:initial}html[dir=ltr] ._29b-ENxq_En2Y_2hVVcpuZ ._1bE5B0M3-BAhkXtFvLF3iM{margin-right:auto}html[dir=rtl] ._29b-ENxq_En2Y_2hVVcpuZ ._1bE5B0M3-BAhkXtFvLF3iM{margin-left:auto}._29b-ENxq_En2Y_2hVVcpuZ ._1RGIsXrHh1lE78wyPdq7FR{display:block}._29b-ENxq_En2Y_2hVVcpuZ .GN9apTlWzDujX-MGWb-uh{position:relative;display:inline-block;bottom:0;width:auto}._29b-ENxq_En2Y_2hVVcpuZ .uFb4yl9uUsCVBsGbFM0kf{display:inline-block;font-size:7px;position:absolute;top:-27px;white-space:nowrap}html[dir=ltr] ._29b-ENxq_En2Y_2hVVcpuZ .uFb4yl9uUsCVBsGbFM0kf{-webkit-transform:rotate(270deg);transform:rotate(270deg);left:-16px}html[dir=rtl] ._29b-ENxq_En2Y_2hVVcpuZ .uFb4yl9uUsCVBsGbFM0kf{-webkit-transform:rotate(-270deg);transform:rotate(-270deg);right:-16px}html[dir] ._29b-ENxq_En2Y_2hVVcpuZ ._1lVSj1rZClECXwV-vweAsx img{margin-bottom:-2px}@media (max-width:749px){._29b-ENxq_En2Y_2hVVcpuZ ._2KFlfBKVScw0PSMLt6-pZ2{font-size:48px}._1wSwuuDtT29ruk_RCIToSp{min-width:320px;min-height:50px}html[dir] ._1wSwuuDtT29ruk_RCIToSp{margin-top:15px}}',""]),t.locals={adsContainer:"stQe7wknhnXCAAroiyvBY",footer:"GN9apTlWzDujX-MGWb-uh",hide:"_1OX7S7-OSEubCXUJNAu3oj",adBlockContainer:"_1DKyQPkfugxw5wnk4gcR31",icon:"_2KFlfBKVScw0PSMLt6-pZ2",blockText:"_1bE5B0M3-BAhkXtFvLF3iM",rendererContainer:"_1wSwuuDtT29ruk_RCIToSp",choicePic:"_1lVSj1rZClECXwV-vweAsx",choiceLabel:"uFb4yl9uUsCVBsGbFM0kf",remove:"_1RGIsXrHh1lE78wyPdq7FR",bottom:"_29b-ENxq_En2Y_2hVVcpuZ"}},938:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return s});var o="onCloseInlineCompose",r="OnSuccessfulSendFromInlineCompose",i="UpdateInternetMessageId",a="closeCompose",d="openCompose",s="moveComposeToPopout"}},0,[6,7,25,34,57,0,3,4,9,52,1,2,51,19,60,8,11,55,201,223,56,218,225,232,245,54]]);
//# sourceMappingURL=owa.AdsPanel.js.map
window.scriptsLoaded['owa.AdsPanel.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.AdsPanel.js'] = (new Date()).getTime();