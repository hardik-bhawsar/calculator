self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("calculator-cache").then(cache => {
      return cache.addAll([
        "/calculator/",
        "/calculator/index.html",
        "/calculator/manifest.json",
        "/calculator/icons/icon-192.png",
        "/calculator/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
