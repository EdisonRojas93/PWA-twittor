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