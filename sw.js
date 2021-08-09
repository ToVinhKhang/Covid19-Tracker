var fileToCache = [
	
];

caches.delete("./");
caches.delete("./css/styles_main.css");
caches.delete("./css/styles_global.css");
caches.delete("./css/styles_darkmode.css");
caches.delete("./css/styles_responsive.css");

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