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
    "revision": "13b19a98ee220ccfc02a1a3f7ab2f528"
  },
  {
    "url": "api/index.html",
    "revision": "468f940dfd193c6eebf985a33e75c549"
  },
  {
    "url": "assets/css/0.styles.0e6809e7.css",
    "revision": "3b0e43061b31c84af19aa3ab4068946a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6916465e.js",
    "revision": "6db13d578e8eab1c80d9cf0016f4e1b8"
  },
  {
    "url": "assets/js/11.5e886ebc.js",
    "revision": "577a2445e27b1dfaed07514d3628b912"
  },
  {
    "url": "assets/js/12.bcbb958e.js",
    "revision": "acc0c183dc4c81655e4d2e26e5e6d5cb"
  },
  {
    "url": "assets/js/13.079fa24c.js",
    "revision": "a7e6fec4583bf6b635c055a6d839a9f2"
  },
  {
    "url": "assets/js/14.7e9f0fdb.js",
    "revision": "294832673aa01b8ef60c4029ffe1c2a9"
  },
  {
    "url": "assets/js/15.b0ba1aa4.js",
    "revision": "a304e884701d9f5024223d97d793f0a5"
  },
  {
    "url": "assets/js/16.b8cec018.js",
    "revision": "a436424419514b11488b97e9fa9a8a76"
  },
  {
    "url": "assets/js/17.a9c52dc5.js",
    "revision": "0b4f8561ebc0467e3d18e5d09f13a1c9"
  },
  {
    "url": "assets/js/18.c02f7a10.js",
    "revision": "bcb87b8e58a838755f6a2c3755b0a0ab"
  },
  {
    "url": "assets/js/19.d6864322.js",
    "revision": "07bd70520467914fb87cf5996750d3cc"
  },
  {
    "url": "assets/js/20.13167a4b.js",
    "revision": "a96833272bf044a3c7abccb79130e6ac"
  },
  {
    "url": "assets/js/21.482d8dd7.js",
    "revision": "1ede89eab56a10dbfba25ee72fdaa868"
  },
  {
    "url": "assets/js/22.8c187f63.js",
    "revision": "51a1379709824b23a6c7ac648a0e933c"
  },
  {
    "url": "assets/js/23.bfcd3797.js",
    "revision": "891519c4fe96b7ba20a46b4f9908e1d1"
  },
  {
    "url": "assets/js/24.0046f440.js",
    "revision": "6fa223061faba0c3ac6eb36f74773e09"
  },
  {
    "url": "assets/js/25.d5586077.js",
    "revision": "a20916516bb9f554415e1d6aa6aab460"
  },
  {
    "url": "assets/js/26.0cccd3d3.js",
    "revision": "b870c4843d6f0be88b592f48276fadbc"
  },
  {
    "url": "assets/js/3.e83251b2.js",
    "revision": "2ebb968468983c99f003b1fff1b22358"
  },
  {
    "url": "assets/js/4.e5c43219.js",
    "revision": "e4425d9d36f7c07b10aa96985ae31211"
  },
  {
    "url": "assets/js/5.7f909a4b.js",
    "revision": "665c87e22713cbe2b07cb6f4f35005e3"
  },
  {
    "url": "assets/js/6.06cf0e1b.js",
    "revision": "0b95caaf465f45a594b881a835cb5a20"
  },
  {
    "url": "assets/js/7.e7b9ca51.js",
    "revision": "e92a9cbec274ac44fc08cb236a6dda35"
  },
  {
    "url": "assets/js/8.d92f7b01.js",
    "revision": "782935a3ade1f7ec0025a96fb3e33317"
  },
  {
    "url": "assets/js/9.7ee1d161.js",
    "revision": "7a1953556ba28c1b13a47b1c5d4268f7"
  },
  {
    "url": "assets/js/app.93321875.js",
    "revision": "93bb7c42171d8bb7db4ba56a785798f0"
  },
  {
    "url": "assets/js/vendors~docsearch.abc87a80.js",
    "revision": "0dc1b41746ebf6baeec368640482b469"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "57abc4d5034da6399d94c0845e25a325"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "5fbdc0957071d9f6386fb7f83de7006e"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "8196c04136d943b30fab8bcf19c78b56"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "278f1439b2cea8de87e00f890bd3878a"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "2bfe5dc7f93aec21f85c7d33866ea924"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "420e41a9663a68c66b146c8f1516d4c4"
  },
  {
    "url": "guide/changelog.html",
    "revision": "22f7c9220c3571da964aa8d1361a97e6"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "a18c3d52c81a2dc1e9ba3109def6886b"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "a44cec6f73f111cadd19c39a38a9f276"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "745dabf54bfd38aafefdcef725282e2c"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "fd19b89d4e7babefdaae4b32d28337f2"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "eb55e237554b86a234422207bc60a052"
  },
  {
    "url": "guide/index.html",
    "revision": "7aff6a15de19893fdaeb771e619ac9d3"
  },
  {
    "url": "guide/installation.html",
    "revision": "31a46e15561a898de37af1df93db6937"
  },
  {
    "url": "guide/program.html",
    "revision": "d109ff7fe3499937fd12a07fdb0dc869"
  },
  {
    "url": "index.html",
    "revision": "097c5a0893adc2de946cfd8d85881358"
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
