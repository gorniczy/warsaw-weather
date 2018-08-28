"use strict";var precacheConfig=[["/warsaw-weather/index.html","61b6d7825eb62093ce840180674e4f3c"],["/warsaw-weather/static/css/main.88ca9872.css","14a8b4ff8544355a0c0fa19ae404ea22"],["/warsaw-weather/static/js/main.327dadc7.js","83bfe82e821485c4375be5240a7f03da"],["/warsaw-weather/static/media/Broken Clouds.b63296ad.png","b63296ad2365f3ec87a8599d6c43d1d0"],["/warsaw-weather/static/media/Clear Sky Moon.aab94fb7.png","aab94fb779f922b7392ce85cbe715c1c"],["/warsaw-weather/static/media/Clear Sky Sun.6918790c.png","6918790c92c672ec4d3ab08f450aa2f0"],["/warsaw-weather/static/media/Day-background-cover.52437aa0.png","52437aa0b1f7a8f1353804e92eede01a"],["/warsaw-weather/static/media/Day-background.d5c4fcb7.png","d5c4fcb7b8d652dd7d6b7786f027a98d"],["/warsaw-weather/static/media/Few Clouds Moon.9adf8019.png","9adf8019132b4adb5479375fdceef5a6"],["/warsaw-weather/static/media/Few Clouds Sun.eb4e5e9f.png","eb4e5e9fbdd4a263e8e059e1c48187c9"],["/warsaw-weather/static/media/Mist Moon.2c844106.png","2c84410630eef901ea6c50073e66d227"],["/warsaw-weather/static/media/Mist Sun.09a9c152.png","09a9c152de5b2a0d7da0e6d697df64de"],["/warsaw-weather/static/media/Mokotów.50b5d323.JPG","50b5d323eac82ae13dcef9dfe0ecf54d"],["/warsaw-weather/static/media/Night-background-cover.44c5f998.png","44c5f99826783cbc0e6d2489923f2f20"],["/warsaw-weather/static/media/Night-background.14887f0b.png","14887f0b2b933ceb9fe7eb1ec5ae95f3"],["/warsaw-weather/static/media/Ochota.d6f03d98.jpeg","d6f03d98dc73c9c64f415f2a0279b824"],["/warsaw-weather/static/media/Rain Moon.a5306e60.png","a5306e6061308bdb91becca1d291c9e7"],["/warsaw-weather/static/media/Rain Sun.1ec92343.png","1ec92343cb567a5990b02683aae20796"],["/warsaw-weather/static/media/Scattered Clouds.813a8c6f.png","813a8c6fd3ba537137b31a768d612f29"],["/warsaw-weather/static/media/Shower Rain.7159db5d.png","7159db5d3ba79a423bdb41c069d24ed8"],["/warsaw-weather/static/media/Snow.9dfa3e58.png","9dfa3e584a216042425690d8cb0b041b"],["/warsaw-weather/static/media/Thunderstorm.20e06200.png","20e06200da6a88f4f0108ab1173adeaa"],["/warsaw-weather/static/media/Title-background.c5ae558d.png","c5ae558d518017252374b8e4a516e918"],["/warsaw-weather/static/media/Wola.50b5d323.JPG","50b5d323eac82ae13dcef9dfe0ecf54d"],["/warsaw-weather/static/media/logo.324f58bf.png","324f58bfb54a605965f66528398bf3c1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/warsaw-weather/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});