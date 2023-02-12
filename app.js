if ('serviceWorker' in navigator) {
    navigator.ServiceWorker
        .register('/sw.js')
        .then(function() {
            console.log('SW registered');
        });
}