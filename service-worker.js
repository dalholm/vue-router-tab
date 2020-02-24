/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88a5f1649e16df08450294b8b40c8a3b"
  },
  {
    "url": "api/index.html",
    "revision": "353948854e5331499d3716af83e270a9"
  },
  {
    "url": "assets/css/0.styles.71aeb55d.css",
    "revision": "84a54a14a918a921cde29c2a5a3bdc89"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35cb48a1.js",
    "revision": "fe6023ae3c392815dcd434d985daf559"
  },
  {
    "url": "assets/js/11.9ff6a89c.js",
    "revision": "a17407f51762e315136dfff012e7ff5c"
  },
  {
    "url": "assets/js/12.0f390d24.js",
    "revision": "fb57b98184794a17e886cd83f876a772"
  },
  {
    "url": "assets/js/13.5327e113.js",
    "revision": "ef76094b6a619480d10e0261b80f70cd"
  },
  {
    "url": "assets/js/14.2bec7555.js",
    "revision": "56860d2db000192fef643f22ae955454"
  },
  {
    "url": "assets/js/15.c77868bb.js",
    "revision": "e814f8fd6e77c57d13e7860873925e31"
  },
  {
    "url": "assets/js/16.2e5614ac.js",
    "revision": "1f23a4d900b8dc2b0ec7f5661b869e1e"
  },
  {
    "url": "assets/js/17.c8f22ff6.js",
    "revision": "1e7b6420af057f68a986e57b34cdc2f8"
  },
  {
    "url": "assets/js/18.efa5d1ab.js",
    "revision": "5168bb3d67b3b794914945e9f6f36a52"
  },
  {
    "url": "assets/js/19.3a902eeb.js",
    "revision": "fa193a341b0e261a6f1e9020e5bb551f"
  },
  {
    "url": "assets/js/20.2345d7c3.js",
    "revision": "af3b6b3bc0de4b1ff527ca28cc9d0851"
  },
  {
    "url": "assets/js/21.975d9f28.js",
    "revision": "e5462413e07ec5ff0c122623c6731902"
  },
  {
    "url": "assets/js/22.6032a358.js",
    "revision": "4bc1fb5b2f1e8c3b7ac542ce472724c9"
  },
  {
    "url": "assets/js/23.dd78c319.js",
    "revision": "c5ea902c3ef620ebe33de6d24986afe4"
  },
  {
    "url": "assets/js/24.1b327aa3.js",
    "revision": "51965b8f2ddbad1d03076d64892cfb1d"
  },
  {
    "url": "assets/js/25.c781f88d.js",
    "revision": "a31a3fa300a56da206c9cc12630a6639"
  },
  {
    "url": "assets/js/26.35a5081a.js",
    "revision": "faf9187b4e45525946bcb8d3b088bb20"
  },
  {
    "url": "assets/js/3.a80c1c20.js",
    "revision": "f61ce4700cab66a9cddfaa024d694b48"
  },
  {
    "url": "assets/js/4.5c2373cf.js",
    "revision": "61f2707daca55a3ef00a1a4b605880d2"
  },
  {
    "url": "assets/js/5.dde9a84d.js",
    "revision": "2c297ec7285611d2ba6426b5e94eda51"
  },
  {
    "url": "assets/js/6.8cdf3953.js",
    "revision": "9be2ab8bb471928f62737d1aa29d6b5f"
  },
  {
    "url": "assets/js/7.71bab6fb.js",
    "revision": "9b8cdbebbd16fc0ed4eb59101b2827f3"
  },
  {
    "url": "assets/js/8.1b41712f.js",
    "revision": "c2adbaf5089d6b0b7925ee95afb53026"
  },
  {
    "url": "assets/js/9.c95f8618.js",
    "revision": "e22848f1107e7399e069987a7ab8ed60"
  },
  {
    "url": "assets/js/app.eddcf4c3.js",
    "revision": "811f2a1bb9e90928105f2cfbfb73b6cc"
  },
  {
    "url": "assets/js/vendors~docsearch.ce3268fb.js",
    "revision": "d6a91a1daed0a52d0d0a1885fa8576ae"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "b4cd45d9761f188470dc0670fd9d8d7f"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "79a69f39039ee450251748614bab5d8f"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "82fb060ec0083f0447ce55b40af12a5e"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "cb93b780ab4ee671dd27a7a61429bafb"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "b5d21255159f27933d9f11e0e97f36b9"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "6a2488cd298b73c2ab88e46a3f0036c0"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c79a0c36a310888a18ed2ca0a30b6f1b"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "43ac2f328704d2d54a973e03ebe43752"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "525e13e034015b3a04b1209eaaa42c94"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "22a1b66755e612ee9c4e800dd56f03f4"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "f8028c56a159b10905b0cadad995c92d"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "5112c5430ad7087aa64a9b9c1397b0b0"
  },
  {
    "url": "guide/index.html",
    "revision": "bfad517b2c6dd719a686a49d4ed1ec38"
  },
  {
    "url": "guide/installation.html",
    "revision": "e2d375bf8afc7606da47b391fb7be1ad"
  },
  {
    "url": "guide/program.html",
    "revision": "c5e9242c540a7f0f834113884d389ab4"
  },
  {
    "url": "index.html",
    "revision": "dbf0fde4270351086f30814c756a965b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
