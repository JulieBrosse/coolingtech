window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.ServiceWorkerCache.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[144],{5618:function(e,a,r){"use strict";r.r(a);var n=r(128);var c,l,t=r(808),o=r(7);(l=c||(c={}))[l.Normal=0]="Normal",l[l.CacheCorrupt=1]="CacheCorrupt",l[l.TooManyInstallError=2]="TooManyInstallError";var s,i,u=c;(i=s||(s={}))[i.Install=0]="Install",i[i.UnInstall=1]="UnInstall";var h,C,d=s;(C=h||(h={}))[C.CacheProgress=0]="CacheProgress",C[C.Error=1]="Error";var p,g,v=h;(g=p||(p={}))[g.Checking=0]="Checking",g[g.Downloading=1]="Downloading",g[g.Progress=2]="Progress",g[g.Error=3]="Error",g[g.Cached=4]="Cached",g[g.NoUpdate=5]="NoUpdate",g[g.Obsolete=6]="Obsolete",g[g.UpdateReady=7]="UpdateReady",g[g.Idle=8]="Idle",g[g.UnCached=9]="UnCached",g[g.CleanupError=10]="CleanupError",g[g.CleanupSuceeded=11]="CleanupSuceeded";var f,k,m=p;(k=f||(f={}))[k.CacheInstalled=0]="CacheInstalled",k[k.CacheFailed=1]="CacheFailed",k[k.CacheCleared=2]="CacheCleared";var S=f,W=r(9),b="SWCache";function N(e,a,r,n,c,l,t){var o={};o.ev=a,o.cv=r,o.e=n,o.rc=e.resourcesCached,o.ccs=e.cacheCleanupStatus,o.ncc=e.numberOfCachesCleaned,o.r=c,o.st=l,o.stk=t,o.ch=e.cacheHealth,o.app=e.appName,e.resourcesCached=0,e.cacheCleanupStatus=0,e.numberOfCachesCleaned=0,Object(W.n)(b,o)}function I(e,a,r){if(null!=e.localStorage)try{e.localStorage.setItem(a,r)}catch(e){}}function w(e,a){return e+"_"+a}var U="SWCacheErrorCount";function E(e,a,r){var n=w(a.appName,U);0==r?function(e,a){if(null!=e.localStorage)e.localStorage.removeItem(a)}(e,n):I(e,n,""+r)}function y(e,a){var r,n,c=parseInt((r=e,n=w(a.appName,U),null!=r.localStorage?r.localStorage.getItem(n):null));return isNaN(c)?0:c}var O="CacheVersion",M="AttemptedCacheVersion";function P(e,a,r,n){switch(r){case S.CacheInstalled:I(e,w(a.appName,O),n),E(e,a,0);break;case S.CacheFailed:I(e,w(a.appName,M),n),E(e,a,y(e,a)+1);break;case S.CacheCleared:I(e,w(a.appName,O),null),I(e,w(a.appName,M),null),E(e,a,0)}}function V(e,a,r){if(null!=r.cacheMessage&&(r.targetClient==a.appName||"global"==r.targetClient)){var n=r.cacheMessage;switch(n.cacheEvent){case m.Checking:o.c.info("[SW Client] Checking");break;case m.Downloading:o.c.info("[SW Client] Downloading");break;case m.Progress:E=a,o.c.info("[SW Client] Progress"),E.resourcesCached++;break;case m.Error:I=e,w=a,U=n,o.c.warn("[SW Client] Error: "+U.error),P(I,w,S.CacheFailed,U.cacheVersion),N(w,"ER",U.cacheVersion,U.error,U.resource,U.status,U.stack);break;case m.Cached:k=e,W=a,b=n,o.c.info("[SW Client] Cached"),P(k,W,S.CacheInstalled,b.cacheVersion),N(W,"C",b.cacheVersion);break;case m.NoUpdate:g=e,v=a,f=n,o.c.info("[SW Client] NoUpdate"),P(g,v,S.CacheInstalled,f.cacheVersion),N(v,"NU",f.cacheVersion);break;case m.Obsolete:d=e,p=a,o.c.info("[SW Client] Obsolete"),P(d,p,S.CacheCleared,null),N(p,"OB"),p.cacheHealth>u.Normal&&(p.cacheHealth=u.Normal,T());break;case m.UpdateReady:i=e,h=a,C=n,o.c.info("[SW Client] UpdateReady"),P(i,h,S.CacheInstalled,C.cacheVersion),N(h,"UR",C.cacheVersion);break;case m.Idle:o.c.info("[SW Client] Idle");break;case m.UnCached:o.c.info("[SW Client] Uncached");break;case m.CleanupError:s=a,o.c.warn("[SW Client] Cleanup Error"),s.cacheCleanupStatus=1;break;case m.CleanupSuceeded:c=a,t=null!=(l=n).cachesCleaned?l.cachesCleaned.join(","):null,o.c.info("[SW Client] Cleanup Suceeded, "+t),c.cacheCleanupStatus=2,c.numberOfCachesCleaned=null!=l.cachesCleaned?l.cachesCleaned.length:0}}var c,l,t,s,i,h,C,d,p,g,v,f,k,W,b,I,w,U,E}var R=15,j=null,H=null;function T(){var e=null!=j.serviceWorkerPath?j.serviceWorkerPath+"/"+j.appName+"cache.manifest":"/"+j.appName+"cache.manifest",a=d.Install;j.cacheHealth>u.Normal&&(a=d.UnInstall);var r={source:j.appName,action:a,bootResourcesOnly:!0,language:j.userLanguage,darkMode:void 0!==j.darkMode&&j.darkMode,manifestUrl:e};j.serviceWorkerRegistration.active.postMessage(r)}function D(e){if(null!=e.data){var a=e.data;a.messageType==v.CacheProgress?V(H,j,a):a.messageType==v.Error&&null!=(r=a).error&&o.c.error({message:"[SW Client] ServiceWorker Unhandled Exception",error:r.error})}var r}var F="sw.js",L="activated",$=null,x=null,A=null,B=null,_=null,q=null,z=!1;function G(e,a,r,c){x=(A=e).navigator.serviceWorker;var l,s,i,u=Object(t.a)(A.location);l=u,s=A.location,i=l,null!=l&&(i=Object(n.l)("/"+l,s.pathname)),_=a,q=r,z=c;var h=null!=(B=i)?B+"/"+F:"/"+F,C=null!=u?{scope:"/"+u+"/"}:null;x.register(h,C).then(function(e){o.c.info("[SW Client] service worker registration succeeded")}).catch(function(e){o.c.warn("[SW Client] service worker registraiton failed, error: "+e.message)}),x.ready.then(function(e){var a;a=e,o.c.info("[SW Client] ready fired, state: "+a.active.state),$=a,x.oncontrollerchange=Q,J()})}function J(){$.active.state==L?X():$.active.onstatechange=K}function K(e){$.active.state==L&&($.active.onstatechange=null,X())}function Q(){null!=$.active&&J()}function X(){var e;e=A,null==j&&((j={serviceWorkerContainer:x,serviceWorkerRegistration:$,serviceWorkerPath:B,appName:_,userLanguage:q,darkMode:z}).serviceWorkerContainer.onmessage=D,y(window,j)>R&&(j.cacheHealth=u.TooManyInstallError)),H=e,T()}r.d(a,"registerServiceworker",function(){return G})}},0,[218]]);
//# sourceMappingURL=owa.ServiceWorkerCache.js.map
window.scriptsLoaded['owa.ServiceWorkerCache.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.ServiceWorkerCache.js'] = (new Date()).getTime();