/* Cache semua berkas supaya aplikasi bisa dipakai tanpa internet.
   Naikkan VERSI setiap kali isi aplikasi diperbarui. */
const VERSI = 'asas4-1';
const BERKAS = ['./', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'data/_util.js', 'data/akidah.js', 'data/quran.js', 'data/fikih.js', 'data/ski.js', 'data/bindo.js',
  'data/sunda.js', 'data/inggris.js', 'data/mtk.js', 'data/ipas.js', 'data/pancasila.js', 'data/senbud.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(BERKAS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSI).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(r => {
      const salin = r.clone();
      caches.open(VERSI).then(c => c.put(e.request, salin));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
