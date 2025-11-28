
const CACHE_NAME = 'gado-simple-v1';
const ASSETS = ['./','/index.html','/css/style.css','/js/app.js','/manifest.json'];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)));
});
