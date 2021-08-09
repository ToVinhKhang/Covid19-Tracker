var fileToCache = [
	"./",
	"./css/styles_main.css",
	"./css/styles_global.css",
	"./css/styles_darkmode.css",
	"./css/styles_responsive.css"
];
caches.delete([
	"./",
	"./css/styles_main.css",
	"./css/styles_global.css",
	"./css/styles_darkmode.css",
	"./css/styles_responsive.css"
])
self.addEventListener("install", e=>{
	e.waitUntil(
		caches.open("static").then(cache =>{
			return cache.addAll(fileToCache);
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