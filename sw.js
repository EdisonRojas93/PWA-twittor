const STATIC_CACHE = 'satic-v1';
const DINAMIC_CACHE = 'dinamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
    // '/',
    'index.html',
    'css/style.css',
    'js/app.js',
    'img/favicon.ico'
]


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            cache.addAll(APP_SHELL);
        })
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(res => {

            if (res) return res;

            return fetch(event.request)
        })
    );

});