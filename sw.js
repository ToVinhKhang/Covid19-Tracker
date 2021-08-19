// -----------------------------------------------
// SERVICE WORKER - SW
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// Init
var VERSION = "2.2.3";
var CURRENT_CACHES = {prefetch: 'Covid-19 Tracker v'+VERSION};
var file = [
	"./",
	"./css/styles_main.css",
	"./css/styles_responsive.css",
	"./js/functions/reloadPage.js"
];

// Add File Prefecth
self.addEventListener("install", e=>{
	e.waitUntil(
		caches.open(CURRENT_CACHES.prefetch).then(cache =>{return cache.addAll(file);})
	);
});

// Fetch file Prefetch
self.addEventListener("fetch", e=>{
	e.respondWith(
		caches.match(e.request).then(response => {return response || fetch(e.request);})
	);
});

// Delete All Caches
self.addEventListener('activate', e=>{
	self.clients.claim(); var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key){return CURRENT_CACHES[key];});
	e.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if (expectedCacheNames.indexOf(cacheName) === -1){
						console.log('Deleted Cache: ', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// End

