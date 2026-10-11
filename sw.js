const CACHE_NAME = "marsel-cv-v5";
const ASSETS = ["./", "index.html", "skills.html", "projects.html", "contact.html", "styles.css", "script.js", "manifest.webmanifest", "assets/avatar.svg", "assets/marsel.png", "assets/projects/marsflow-cover.png", "assets/projects/browser-cover.png", "assets/projects/home-cover.png", "assets/projects/finance-cover.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME && /^(cv-live-|marsel-cv-)/.test(key)).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) { const copy = response.clone(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy))); }
    return response;
  }).catch(async () => (await caches.match(event.request)) || Response.error()));
});
