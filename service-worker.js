"use strict";var precacheConfig=[["/catclicker/index.html","9f408dfed3d73a9486e202a8067f2f5a"],["/catclicker/static/css/main.af2c7905.css","d87d2d48b889c4fee02cd7b4cb2c74fa"],["/catclicker/static/js/main.1aa63c1c.js","c7539bee511b59b3a4b2acb169da43c5"],["/catclicker/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/catclicker/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/catclicker/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/catclicker/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/catclicker/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/catclicker/static/media/cat.9a205e6f.jpg","9a205e6f6954addc206f7ba3563f1c0a"],["/catclicker/static/media/cat2.ff86d15c.jpg","ff86d15cec074e3a59854332b356cd7d"],["/catclicker/static/media/cat3.027a8443.jpg","027a8443d7af540e5e11a4225ce494b4"],["/catclicker/static/media/cat4.b233fa59.jpg","b233fa591f78a7ea2ec93493cb06c264"],["/catclicker/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/catclicker/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/catclicker/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/catclicker/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/catclicker/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/catclicker/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/catclicker/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/catclicker/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/catclicker/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/catclicker/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/catclicker/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),n=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var n="/catclicker/index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});