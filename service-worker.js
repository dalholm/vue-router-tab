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
    "url": "api/index.html",
    "revision": "d01179689ea114724fd3e8fdb942bdd6"
  },
  {
    "url": "assets/css/0.styles.c3058fde.css",
    "revision": "15995bebc1f6dac93b205bff8d495199"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c227de2e.js",
    "revision": "d3459bbb7b2424b9003a6d845ebd49b9"
  },
  {
    "url": "assets/js/11.d11c91ef.js",
    "revision": "cfdd91acd7a11a1e71f83e5116d0b148"
  },
  {
    "url": "assets/js/12.d04b24d4.js",
    "revision": "797c1633114c1150939ee86cad54fa85"
  },
  {
    "url": "assets/js/13.ba99e057.js",
    "revision": "569bfe44003796af169ab7e3b2d1d5b9"
  },
  {
    "url": "assets/js/14.1cad648a.js",
    "revision": "b3da886e32d50244141022e7964f805a"
  },
  {
    "url": "assets/js/15.8ec020c4.js",
    "revision": "9bf70061a7e8a11064cf87c2299ac076"
  },
  {
    "url": "assets/js/16.c535fb98.js",
    "revision": "ca490d5839b2a32a5a029668b9b5c0ab"
  },
  {
    "url": "assets/js/17.95fc54df.js",
    "revision": "3d40d872aa9acb2e5dd0c0a4a2db1d6b"
  },
  {
    "url": "assets/js/18.d064df7a.js",
    "revision": "c595ce2afd02ce03c85964e595661c35"
  },
  {
    "url": "assets/js/19.cf869521.js",
    "revision": "2dd97024072182134327fc447eb21e65"
  },
  {
    "url": "assets/js/20.b7d53764.js",
    "revision": "06e0cd17f3e78f5449e2d90f3617e330"
  },
  {
    "url": "assets/js/21.421cefcf.js",
    "revision": "71cf5756b9ada4de5b58891cf1325d1f"
  },
  {
    "url": "assets/js/22.b820f46c.js",
    "revision": "ccb5f2ee8d5d49bfb41ce2ae99300083"
  },
  {
    "url": "assets/js/23.c782e1a8.js",
    "revision": "8b97bfdbeefdacaee89d880fb724e63c"
  },
  {
    "url": "assets/js/24.95188aff.js",
    "revision": "c2b24779d8f3589083dc34decc089244"
  },
  {
    "url": "assets/js/25.878af464.js",
    "revision": "f76278b3e89f7fde0f5ded451ff50a04"
  },
  {
    "url": "assets/js/26.3c1dccb9.js",
    "revision": "c1fadca39ef62e39ad499269948ac45e"
  },
  {
    "url": "assets/js/27.f684b414.js",
    "revision": "73060f26e0ae8629ac4b44614040cb0d"
  },
  {
    "url": "assets/js/28.c0d0c830.js",
    "revision": "7fee3562b67ade9dc7223d64edaa7b38"
  },
  {
    "url": "assets/js/29.21b0acb3.js",
    "revision": "46b77e5e41b624f568b60d97b347a6a0"
  },
  {
    "url": "assets/js/3.2bb37d25.js",
    "revision": "958ced0c09508d5d57b873ae2e27577b"
  },
  {
    "url": "assets/js/30.252c349a.js",
    "revision": "4c00663ae99571001c2ec10745a75857"
  },
  {
    "url": "assets/js/31.9d965ec6.js",
    "revision": "9a54790c0b4d466b403cdf78b309e52a"
  },
  {
    "url": "assets/js/32.e2e0fe33.js",
    "revision": "9150d212549f368306ac055c0edecd13"
  },
  {
    "url": "assets/js/33.9d251137.js",
    "revision": "e15d4ffcc23f8244b01ab711b98bc618"
  },
  {
    "url": "assets/js/34.045df9a7.js",
    "revision": "d070fcd17ee62241681377b98af0818e"
  },
  {
    "url": "assets/js/35.12b6d926.js",
    "revision": "910a0db7dbd2c3b39eb54d146e54021c"
  },
  {
    "url": "assets/js/36.31388057.js",
    "revision": "03e88bd1242a438a496ba93fd925c179"
  },
  {
    "url": "assets/js/37.1e077d0c.js",
    "revision": "64bbbe190adab57c4a7063e60112e8a0"
  },
  {
    "url": "assets/js/38.909fcdd2.js",
    "revision": "6dbd831daa88d794ebe59e592c3c1d62"
  },
  {
    "url": "assets/js/39.e81094b3.js",
    "revision": "e6335e59c256759980aa4f8ae00d10bc"
  },
  {
    "url": "assets/js/4.aba62b21.js",
    "revision": "f9fcc849c3edd6d53bc10b9bf56be76b"
  },
  {
    "url": "assets/js/40.22225c32.js",
    "revision": "6293188cd3cb79a43aa9582f9faeadd5"
  },
  {
    "url": "assets/js/41.f757d063.js",
    "revision": "b5bd1a2b75526af604a271b997e9aa36"
  },
  {
    "url": "assets/js/42.366b85b9.js",
    "revision": "76b8e08fb9c11bcdde244991d70bea05"
  },
  {
    "url": "assets/js/43.3b763c77.js",
    "revision": "f3592f648e2a9bf7387fe0fa7837cd27"
  },
  {
    "url": "assets/js/44.30c53488.js",
    "revision": "245342ae6d000836dfe0ddffd264010b"
  },
  {
    "url": "assets/js/5.f71aaf2f.js",
    "revision": "dc4639f5ed83c3355a04a3b4808250bf"
  },
  {
    "url": "assets/js/6.5957ad00.js",
    "revision": "7f4d5cef1ef111440d1ad6c4b5f9302b"
  },
  {
    "url": "assets/js/7.24e28e0b.js",
    "revision": "c370c106528e9a8344e51162ba1f2984"
  },
  {
    "url": "assets/js/8.af74f604.js",
    "revision": "5fa63d773aa53515f21c79ba47817561"
  },
  {
    "url": "assets/js/9.4142e9ef.js",
    "revision": "6cce1eadf292fd8028760fe18ad28f02"
  },
  {
    "url": "assets/js/app.27d18d07.js",
    "revision": "bc21fa7da198680dce64074e76aec9a4"
  },
  {
    "url": "assets/js/vendors~docsearch.795e6c3c.js",
    "revision": "f7a0f9b693897d7bcba5cd9efe43a719"
  },
  {
    "url": "en/api/index.html",
    "revision": "462b67109152c569845d044f42ee3bc7"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "abbe26ff03f68b0abc3d96fef64dbac4"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "6e1cef3e2a76076836ce85fc49d5db04"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "9693f1cc76cbc1240f3024161d7f000a"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "82025ec9eac9d13c357c280d8de7a28a"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "35384901c29437fea81f68d6747b48be"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "606eb6a0b231863c79a9a1d10671c568"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "6acdbfbc16149054ac3512d319ea609f"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "aff40b47cd164d005fd0220b46449769"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "056b9a4bc2ef5a5944d7a758e5adae20"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "8823b80f7ecfca6eb7d6e8d77b358273"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "229c04441e0445882669344c9bfde49c"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "4a3f4fb87446f754c6830c3aa594b6af"
  },
  {
    "url": "en/guide/index.html",
    "revision": "7e4c8a1169fb0a71799dc12605a71b46"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "6c105738b9cf112ac78c9b17ebd71d98"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "9375170cfa01bc4da6caf5b201845b06"
  },
  {
    "url": "en/index.html",
    "revision": "2b2ede486046dd24d519ba812abb20bf"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "056ffa79ffd3d058dcc4c8568637b188"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a32337cea6c677039e6d19b18858b043"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "815f03dee8d45227cc0ac35b5add4034"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "d2af2f83a0c88c2d4e76b88e4f91ed85"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "4b46561b4aef0eded7fe2e084bd1f2b7"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "f0163b366b291522e7616bb70077a302"
  },
  {
    "url": "guide/changelog.html",
    "revision": "95fcddbf4a27d7d15cebf039b0f96cbb"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "f0d9519cb161a2cef987a30cd139659c"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "eba7bf48b051579c569167e1ae982b09"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "c2c57ff8ee423bf60627b615931e8c20"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "be72ba1b22ed380a2f0655dff4be7007"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "97dfcfe73a4c2394490afd06264ad582"
  },
  {
    "url": "guide/index.html",
    "revision": "407255543e83d565b0ecf73e3db0d719"
  },
  {
    "url": "guide/installation.html",
    "revision": "f9aac5019636c7e1a0f8899d9650a267"
  },
  {
    "url": "guide/solutions.html",
    "revision": "960872a83cd29c81fceb62a47f8aa510"
  },
  {
    "url": "index.html",
    "revision": "31523d447839361732dd46120caa19f1"
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
