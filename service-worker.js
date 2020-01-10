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
    "revision": "26e4cacfdd11b483c516c1e41b56f3c9"
  },
  {
    "url": "api/index.html",
    "revision": "d142283c23cfa8274ab304f29750a5a6"
  },
  {
    "url": "assets/css/0.styles.8fe8e3f9.css",
    "revision": "467039fe8923ac017b87210eea5478a2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d813a9c.js",
    "revision": "ace65c58603091e8bb5797782ad5589f"
  },
  {
    "url": "assets/js/11.6ee405c8.js",
    "revision": "b99c21a69439980a76bb58372d893ed5"
  },
  {
    "url": "assets/js/12.a4ccf379.js",
    "revision": "30d7bf14d0213310f53d3e91ac5ada78"
  },
  {
    "url": "assets/js/13.564397d1.js",
    "revision": "35977bd9716b43f4f307af5edab3dec0"
  },
  {
    "url": "assets/js/14.7c721982.js",
    "revision": "0a651db90e3d5bcbe04b609ae05b3e23"
  },
  {
    "url": "assets/js/15.868fc4a8.js",
    "revision": "42440af93b639c876049876c89196ece"
  },
  {
    "url": "assets/js/16.c988ad4c.js",
    "revision": "56e183e01a062e8d44ba38fc467b2129"
  },
  {
    "url": "assets/js/17.d0ce6d09.js",
    "revision": "c6a222152680390b90164d4dc2adc7d8"
  },
  {
    "url": "assets/js/18.82811796.js",
    "revision": "93b3f70c79336f831586a4072cbb7ca7"
  },
  {
    "url": "assets/js/19.b878a933.js",
    "revision": "da6959ab37a1b99d297f35a24baaf8db"
  },
  {
    "url": "assets/js/20.33fd7b66.js",
    "revision": "e117df6946d324488279f044be700a16"
  },
  {
    "url": "assets/js/21.1a7aae6b.js",
    "revision": "e00bc7658fce4fadf759349cfe73d043"
  },
  {
    "url": "assets/js/22.3bb35fa0.js",
    "revision": "274dcb54b4b981e76c62ebaea9de4be9"
  },
  {
    "url": "assets/js/23.ce16e007.js",
    "revision": "a1b43c209946b7d8a93c0950d7f53629"
  },
  {
    "url": "assets/js/24.4485224c.js",
    "revision": "904f3eae1d5e7f2a62ef7febe79f682d"
  },
  {
    "url": "assets/js/25.ad0ea7b8.js",
    "revision": "8a751606b6db930fb2e4e854419d8bec"
  },
  {
    "url": "assets/js/26.eb07adcc.js",
    "revision": "8928e8572c497fa7c13347e004d21397"
  },
  {
    "url": "assets/js/3.97bee407.js",
    "revision": "45e837fcefbdf843aa7d930b1cdf3425"
  },
  {
    "url": "assets/js/4.19b08391.js",
    "revision": "4e601f89fe328e31fdb55c48aca19e5c"
  },
  {
    "url": "assets/js/5.034311ab.js",
    "revision": "65544a794f2e7eba75ae7f9f822c7058"
  },
  {
    "url": "assets/js/6.c8f45f5c.js",
    "revision": "eb992f1731f2f6f9e55628394f9789a0"
  },
  {
    "url": "assets/js/7.2067053e.js",
    "revision": "e92a9cbec274ac44fc08cb236a6dda35"
  },
  {
    "url": "assets/js/8.baa41206.js",
    "revision": "782935a3ade1f7ec0025a96fb3e33317"
  },
  {
    "url": "assets/js/9.c2a1ec7a.js",
    "revision": "7a1953556ba28c1b13a47b1c5d4268f7"
  },
  {
    "url": "assets/js/app.8c9706d5.js",
    "revision": "1b2b32737b727cc838b4d7eafbd3e9f9"
  },
  {
    "url": "assets/js/vendors~docsearch.3f776809.js",
    "revision": "49a687f4f833d8956ba3c106634e9b87"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "41e7709d731fc7af370d7e9febf9a2b5"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "084f8e490d80a62e987b089618151b43"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "e542cab43a3a525ef0a80d4782c25656"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "fbf60648cb25d30a77cfc6be924b8c41"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "b5a295c357e7e6805286cf1e32657b07"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "3f7590b68aa76a70e73ac00201aff051"
  },
  {
    "url": "guide/changelog.html",
    "revision": "0cb2a6a6a65a37910a7aaa5a27433a64"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "35261683b2ba3b3f819e3b1e00f59bba"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "352a20802573179f3ff35db9451c22e8"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "e96676e4414b616cc26b385e46744c7a"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "baf46b68b801783ed1572db5f54fa758"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "ec9b7a96f1dd94454fe20a04c7b3e711"
  },
  {
    "url": "guide/index.html",
    "revision": "6e5017e3e430f3521e8012e713d81bd5"
  },
  {
    "url": "guide/installation.html",
    "revision": "7cac79c1938290132e374b29523c8590"
  },
  {
    "url": "guide/program.html",
    "revision": "d2864ecbcad3ea9cb44890e1c05e14bb"
  },
  {
    "url": "index.html",
    "revision": "731c0c7b39456c4bf9d55e080af410b8"
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
