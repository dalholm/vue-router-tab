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
    "revision": "2015e05e9133d69daad4dc96fedbfbdc"
  },
  {
    "url": "assets/css/0.styles.cfd88667.css",
    "revision": "15995bebc1f6dac93b205bff8d495199"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4755ab2.js",
    "revision": "cd8af876fcc58d84daeccdb224807d3a"
  },
  {
    "url": "assets/js/11.b04af471.js",
    "revision": "1dcb7925f800e88da0a0966d71328fe6"
  },
  {
    "url": "assets/js/12.9c789bd3.js",
    "revision": "96e8c9f0817d46b73642fc87f11e3f55"
  },
  {
    "url": "assets/js/13.8163c27b.js",
    "revision": "986c5288708bb0357ce0d118d766879e"
  },
  {
    "url": "assets/js/14.8e9edc8e.js",
    "revision": "c0c6b41fc7a99e022d0d3248ec3288c0"
  },
  {
    "url": "assets/js/15.339eb5cd.js",
    "revision": "01574de1b915cf2cbdc25528ae11f4b1"
  },
  {
    "url": "assets/js/16.ed625f4c.js",
    "revision": "90c601197c43ceca9868920ec41c8a22"
  },
  {
    "url": "assets/js/17.1a28d24b.js",
    "revision": "29d467ec4faf786b1a10088f5c1dc6f5"
  },
  {
    "url": "assets/js/18.ba3da98f.js",
    "revision": "4ec05c06102b311339ba8b238caeea9b"
  },
  {
    "url": "assets/js/19.7e2b6d5e.js",
    "revision": "47a4eb32b113559d95cd8cb2c1e7e37b"
  },
  {
    "url": "assets/js/20.6e1ac6c4.js",
    "revision": "d99c5843ce6949e21b137d03938329ea"
  },
  {
    "url": "assets/js/21.5e576440.js",
    "revision": "093f7786d14ac4ae5d7b81c6c40f01b6"
  },
  {
    "url": "assets/js/22.80b7e569.js",
    "revision": "82831590c6163a6b8fd774fbd7ecbdc5"
  },
  {
    "url": "assets/js/23.2a6ff431.js",
    "revision": "ea1227abcb0ae38edd6ebd82dd3a9ade"
  },
  {
    "url": "assets/js/24.a2cac661.js",
    "revision": "20996f9eeff853b1bebb0c764a93c7f4"
  },
  {
    "url": "assets/js/25.f8e88dc6.js",
    "revision": "8d06ee6f1fb60f98d49323f9bbe0797c"
  },
  {
    "url": "assets/js/26.cf762d3c.js",
    "revision": "ff272f724841f74c7b308baf549ff98d"
  },
  {
    "url": "assets/js/27.ddd61c08.js",
    "revision": "2b0f353092946fdacb176c8c60ee6729"
  },
  {
    "url": "assets/js/28.70dddbde.js",
    "revision": "e9aea192875c325f0473464b7393b635"
  },
  {
    "url": "assets/js/29.9e5d83f6.js",
    "revision": "18067288cc9788da55b6c7c1ab628bd3"
  },
  {
    "url": "assets/js/3.8ced93c1.js",
    "revision": "1471499be7d1b564c21b5d5c85272d48"
  },
  {
    "url": "assets/js/30.290fe6fe.js",
    "revision": "37b75682268f3ffc080060c6ff36dde9"
  },
  {
    "url": "assets/js/31.8f2703d5.js",
    "revision": "21a3e0715536bb88be0cc352e9664970"
  },
  {
    "url": "assets/js/32.d9249117.js",
    "revision": "fd4db2f58971c54b9faf6e92c2ad8fdd"
  },
  {
    "url": "assets/js/33.a442aa1e.js",
    "revision": "4b540f75cabbaa819366e08d830b172b"
  },
  {
    "url": "assets/js/34.cb53fa2a.js",
    "revision": "e1392dc37c2c7d14871fa847ed17ac53"
  },
  {
    "url": "assets/js/35.1fc71128.js",
    "revision": "57e3851cdb2670b8bec4e0a5489983c4"
  },
  {
    "url": "assets/js/36.2b34edde.js",
    "revision": "438f602e851e20a281dd4fcc5a37b17a"
  },
  {
    "url": "assets/js/37.a3dacfb9.js",
    "revision": "d700874955cb18e9979b1e2a01c51d29"
  },
  {
    "url": "assets/js/38.60ae4330.js",
    "revision": "f95ca9c68cd9b80f2ea4cb30f090411f"
  },
  {
    "url": "assets/js/39.76987926.js",
    "revision": "32730bdbbc6055e6015b86153d840f76"
  },
  {
    "url": "assets/js/4.83463433.js",
    "revision": "0041229fe3ecebb45b04e09af9e50f75"
  },
  {
    "url": "assets/js/40.eded5e99.js",
    "revision": "ada169d398250a002f464aa3d7deccc5"
  },
  {
    "url": "assets/js/41.e81b963a.js",
    "revision": "550dccfc8643b28c81b40dc609b56ead"
  },
  {
    "url": "assets/js/42.5bc824fe.js",
    "revision": "5a5cebcef5a4d1cc4c7b1fa4865915cb"
  },
  {
    "url": "assets/js/43.09beb861.js",
    "revision": "9177149b21ca84f59fbeb8b7873125e2"
  },
  {
    "url": "assets/js/44.a69763d0.js",
    "revision": "c98705a4a740f0763085825d7e0dfad7"
  },
  {
    "url": "assets/js/5.73cc2f8f.js",
    "revision": "26659a13c8ea6ee6e380a5aac26b27bc"
  },
  {
    "url": "assets/js/6.2e9e21fe.js",
    "revision": "01a6bc34102bc4b6eae0efc513d938da"
  },
  {
    "url": "assets/js/7.2d222865.js",
    "revision": "aa7b6205e48c9726f9e4fa9e9b9f4de5"
  },
  {
    "url": "assets/js/8.e7d2e34d.js",
    "revision": "31a9814ade3c30fd4ff493f78b34561f"
  },
  {
    "url": "assets/js/9.47e40682.js",
    "revision": "3d18825c540765a01245658b7b95946d"
  },
  {
    "url": "assets/js/app.e290790e.js",
    "revision": "e43082d465643b1b0ea3b647e8304aeb"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "en/api/index.html",
    "revision": "a512ee4df591908b80c6b505a33ccecf"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "2ca6c5ed48a4c851692fb30657f3b464"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "c8e7a082e588edb4d786b4408d5ad800"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "6300506c6f059e27514ba90a8e50f907"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "75f257d8a096fecacd372e7f1d63bd1e"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "101feacd755f38c38bf53f0d187c7857"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "0e775656ab9ea4cbf01064e77ca28575"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "15847690411206f17c84d018fecb2eb1"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "e3fcd10c16f07423862dfc7f5411ae2c"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "8c5a4e2d771970a623ba895098db39fb"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "10e1f95ab0a825c07774af7120f1d39f"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "abba9996a98ce7c74be2bbd1a1535407"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "eaa065be5acd24620cdae13e86da1842"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3bfafb77563cf7f8af4dcd0109fef8ab"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "3fbdd5e51e8f81217874a3b125396831"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "703a59ef8cde038fb68f2e1d015166f6"
  },
  {
    "url": "en/index.html",
    "revision": "a0a62d54e24dde2093cef7bb89cf1bc7"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "519b4c4f2d945e810a696b17cf9afe6f"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "6184f690726302488aa04b7f5688d153"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "80912229893134d3bac2f3e82c0730fa"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "b8330ddc362fad593c86dcc875201e1d"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "ba40880c2a7df761339874d2fb43955b"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "bb2844e5a1e20e3aac5eb6eace6620b9"
  },
  {
    "url": "guide/changelog.html",
    "revision": "bb85277cc5cf024b6dea270310b69d21"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "5d51c542493689fb60eede3124aa828d"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "481dcb1b39fa185d1dcdb65e8ce7eb39"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "b5fe4dd918e74eda2dba22e019dbb432"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "cdea52ed97eb4b2fa2711eb70b9e7f17"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "e340aa5c8cbe5555c5e73a202a0aa42d"
  },
  {
    "url": "guide/index.html",
    "revision": "1a028398a1c0f0848286adc624cf1e83"
  },
  {
    "url": "guide/installation.html",
    "revision": "1437ff6e430ade345ae5e0fe123dc115"
  },
  {
    "url": "guide/solutions.html",
    "revision": "047c28cb1a15424440c72c7bfe001630"
  },
  {
    "url": "index.html",
    "revision": "ab69ec5e3dadd8c815309d0a78653f1e"
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
