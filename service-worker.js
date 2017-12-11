// Template is taken from https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp
const dataCache = "apiDatas";
const fileCache = "pwaFiles";
var filesToCache = [
  "/",
  "/index.html",
  "/scripts/main.js",
  "/styles/main.css"
];

// Install service worker and create caches
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(fileCache)
      .then(cache => cache.addAll(filesToCache))
      .then(self.skipWaiting())
  );
});

// Remove old caches
self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== dataCache && key !== fileCache) {
            // These are not belong to us!
            return caches.delete(key);
          }
        }));
      })
  );
  // Activate the service worker faster
  return self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  var dataUrl = "https://api.yourapisource.com";
  if (e.request.url.indexOf(dataUrl) > -1) {
    // External request
    // Cache response from API
    // "Cache then network"
    // https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    // Internal request
    // App is asking for local files
    // "Cache, falling back to the network"
    // https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});