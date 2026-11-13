const CACHE="liti-yarn-v5";
const FILES=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith("liti-yarn-")&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 const url=new URL(event.request.url);
 if(url.origin!==location.origin)return;
 if(event.request.mode==="navigate"||url.pathname.endsWith("/index.html")){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:"no-store"});if(response.ok){const cache=await caches.open(CACHE);cache.put("./index.html",response.clone())}return response}catch(e){const cache=await caches.open(CACHE);return (await cache.match("./index.html"))||Response.error()}})());
  return;
 }
 event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(event.request);if(cached)return cached;try{const response=await fetch(event.request);if(response.ok)cache.put(event.request,response.clone());return response}catch(e){return cached||Response.error()}})());
});
