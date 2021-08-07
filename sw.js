var urlsToCache = [
	"./",
	"./css/styles_main.css",
	"./css/styles_global.css",
	"./css/styles_vietnam.css",
	"./css/styles_darkmode.css",
	"./css/styles_responsive.css",
];

self.addEventListener("install", e=>{
	e.waitUntil(
		caches.open("static").then(cache =>{
			return cache.addAll(urlsToCache);
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