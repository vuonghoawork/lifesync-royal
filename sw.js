self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
  // Bỏ qua cache phức tạp, ưu tiên tải thẳng từ mạng để data luôn mới
});
