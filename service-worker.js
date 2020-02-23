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
    "revision": "b8c1a207a29a4ee4587139d06b8a66bc"
  },
  {
    "url": "api/index.html",
    "revision": "197e8b716dd09bfceba9feded6c4cb52"
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
    "url": "assets/js/app.0472cbd8.js",
    "revision": "c4ebcd3fd6f6be6b1d3f96552e1dc61b"
  },
  {
    "url": "assets/js/vendors~docsearch.abc87a80.js",
    "revision": "0dc1b41746ebf6baeec368640482b469"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "23cb76bea3116ee00c49123c1b1bfcba"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "35cefb042026763db617d410f7f411c8"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "de39af56a70efb2d61a34433c9c5021c"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "47b3a8371457eaa55fa0988186bd9174"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "307dd23332002fa5c904aa85443a5cf1"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "fb2911c93d8dd2072dfd410a3009b355"
  },
  {
    "url": "guide/changelog.html",
    "revision": "27cdcd9214f1fb0cff237da3b08a77e1"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "41a2ca6e8cfa7a090978d07cd78a3db1"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "84b3aa8ff13bb5f2b27d36e439706725"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "d7b961615a94277dfd6597e91d0fd830"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "72a641ee2edc4c9e2006c2e247aeb8f8"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "028919bbd9a6e1ed0fa7dfe883fb4122"
  },
  {
    "url": "guide/index.html",
    "revision": "2666bef4f3462c7643c3f48d4112bee4"
  },
  {
    "url": "guide/installation.html",
    "revision": "2dfbf8fa1b4618a9b7a3bcd63dbd6df8"
  },
  {
    "url": "guide/program.html",
    "revision": "2ede4dccdcbf2c870d38d246c5f367ff"
  },
  {
    "url": "index.html",
    "revision": "38a80662fb923cff3b3cdfae9dd8cb2b"
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
