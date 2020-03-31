const DuckyComics = "Ducky-Comics"
const assets = [
    "/",
    "/index.html",
    "/index.css",
    "/manifest.json",
    "/comics.html",
    "/start.html",
    "/readorder.html",
    "/reviews.html",
    "/season-one.html",
    "/TeenTitansSeasonOne.html",
    "/season-two.html",
    "/safari-pinned-tab.svg",
    "/mstile-150x150.png",
    "/favicon.ico",
    "/favicon-32x32.png",
    "/serviceWorker.js"
]

self.addEventListener("install", installEvent => {
    console.log("Trying to install servivce worker and in cache static assets");
  installEvent.waitUntil(
    caches.open(DuckyComics).then(cache => {
      return cache.addAll(assets)
    })
  )
})