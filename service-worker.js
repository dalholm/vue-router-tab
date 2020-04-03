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
    "revision": "cfee722cd8e9a35406032d60af12cfc2"
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
    "url": "assets/js/21.8b243392.js",
    "revision": "873907d3ccfad7152bdde27bd4b836c1"
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
    "url": "assets/js/30.9c4374de.js",
    "revision": "720aa2ce36ae3c4b17fc8f058c6646e9"
  },
  {
    "url": "assets/js/31.1a28541b.js",
    "revision": "5e8b5a5c5ab5ed03f07ecd08a7ab04c6"
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
    "url": "assets/js/36.aea77637.js",
    "revision": "169e0ae8292edc7631dd46632055a94e"
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
    "url": "assets/js/app.947337e8.js",
    "revision": "336cee0d33fd86051050a884bfe42696"
  },
  {
    "url": "assets/js/vendors~docsearch.795e6c3c.js",
    "revision": "f7a0f9b693897d7bcba5cd9efe43a719"
  },
  {
    "url": "en/api/index.html",
    "revision": "819ea50fb8f7c86ad42a0443a83f8a91"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "5f7a6f0956facdeaf10483f9dcf8ed56"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "97d4fa67fb4a3fe6036f55327f3a86d1"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "b1a85ed0d350d8dbdd108f5bfa33a394"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "296b0e7598d39c720292ea45e7ce5f18"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "88b2d61cf5d249efe27fadeca279b010"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "a9afaa14e45e696fc7cc2c90802c8262"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "093cba1a136069f4912a06f6e903a2ee"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "d2707fbc9606715212a59087ed553e4e"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "df1505f396f28159fce5d23c971afe29"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "efc661fb10540c17e658e4f82dc80f43"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "5e7fd619d126a90faf5b2d41560b0238"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "0d87512cd46f4ecd6e79a36d8ca85498"
  },
  {
    "url": "en/guide/index.html",
    "revision": "bbb47f3ce6ab8ce50ec6dc6a92fe972a"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "9c733a4ba637eda2f97ac7daeaa01bab"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "51dd5474fbad8ac02c1c41a4ea9c07da"
  },
  {
    "url": "en/index.html",
    "revision": "3b4747858716a23326933d7a6ed33925"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "73474f4d790891d5cf2fdf4846cd9046"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "20ea45b55fb2b833006f73e4d0def275"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "c906ed7d8f1f2a3edd4c9eeecbb9f78d"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "dd1bbdd2cf22e70866b3b9fb53646466"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "9f5dc1d0917f6846795f4a741a258768"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "db98e45f2bb9c9d44b81df8fbb123f15"
  },
  {
    "url": "guide/changelog.html",
    "revision": "2ea8d5858ab6bfbe31680471cec685ac"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "d143d16a35bbc3b8d422dc5c18696048"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "a8a7ef86c6f49cea7eb9411757937026"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "6e0386bd6f1da5b7c3cb34ce6a09ac3e"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "e44c9a70cb077612179842cab5b53d1d"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "131603058f2666f54369568b6d3ce194"
  },
  {
    "url": "guide/index.html",
    "revision": "6a7fdf5fd888d5198955cf3479b4988f"
  },
  {
    "url": "guide/installation.html",
    "revision": "618d1c1ce5edf74e0593f18042c43f0f"
  },
  {
    "url": "guide/solutions.html",
    "revision": "ea931b46ebfb6d83c81f4b7d3fd26e28"
  },
  {
    "url": "index.html",
    "revision": "a9547a4832dd7efa5cd529f6f992ef15"
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
