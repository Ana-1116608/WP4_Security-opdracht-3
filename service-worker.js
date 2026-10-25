self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll(["/","/index.html",])),
  );
});

const cacheFirst = async (event) => {
  const cachedResponse = await caches.match(event.request);
  if (cachedResponse !== undefined) {
    return cachedResponse
  }
  const networkResponse = await fetch(event.request)
  if (networkResponse.ok) {
    caches
      .open('v1')
      .then((cache) => cache.put(event.request, networkResponse.clone()))
  }
  return networkResponse
};

  const networkFirst = async (event) => {
    try {
      const networkResponse = await fetch(event.request);
      const clonedResponse = networkResponse.clone();
      if (networkResponse.ok) {
      caches
        .open('v1')
        .then((cache) => cache.put(event.request, clonedResponse));
        return networkResponse;
      }
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse !== undefined) {
        return cachedResponse;
      }
    } catch {
      return new Response({
        status: 408,
        text: 'Network error',
      });
    }
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(networkFirst(event))
};

