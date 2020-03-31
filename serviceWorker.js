const DuckyComics = "Ducky-Comics"
const assets = [
  "/"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(DuckyComics).then(cache => {
      cache.addAll(assets)
    })
  )
})