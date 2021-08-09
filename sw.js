var CACHE_VERSION = 1;
var CURRENT_CACHES = {
	prefetch: 'window-cache-v' + CACHE_VERSION
};

var file = [
	"./",
	"./css/styles_main.css",
	"./css/styles_responsive.css"
];

self.addEventListener("install", e=>{
	e.waitUntil(
		caches.open(CURRENT_CACHES.prefetch).then(cache =>{
			return cache.addAll(file);
		})
	);
});

self.addEventListener("fetch", e=>{
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		})
	);
});

self.addEventListener('activate', function(event) {
	self.clients.claim();
	var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key){return CURRENT_CACHES[key];});
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if (expectedCacheNames.indexOf(cacheName) === -1){console.log('Deleting out of date cache:', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});