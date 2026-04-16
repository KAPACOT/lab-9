if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/src/serviceWorker.js', { type: 'module' })
    .then(reg => console.log('SW registered', reg))
    .catch(err => console.log('SW registration failed', err));
}