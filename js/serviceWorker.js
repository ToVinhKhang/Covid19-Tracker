if("serviceWorker" in navigator){
	caches.keys().then(function(cacheNames){
		cacheNames.forEach(function(cacheName){
			caches.delete(cacheName);
		});
	});
	
	navigator.serviceWorker.register("sw.js")
		.then(registration => {//console.log("PWA Success");})
		.catch(error => {console.log(error);})
}