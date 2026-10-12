// 예전 주소에 설치된 앱의 저장본을 지우고 스스로 해제해요 → 다음 접속부터 새 주소로 이동
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://whatcanigetforyoutoday.github.io/');
  })());
});
