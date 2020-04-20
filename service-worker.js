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
    "revision": "b45c6ca60e859b0a0613c4662d9cf317"
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
    "url": "assets/js/21.f2f4e3d1.js",
    "revision": "8d864714df3a7d986acb20906869a1cc"
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
    "url": "assets/js/24.b7a26f14.js",
    "revision": "884c8e7fd32e28443c1f5384ee7c2920"
  },
  {
    "url": "assets/js/25.8f76efe4.js",
    "revision": "fd99c78649bdf68c0e2de78c1ea839df"
  },
  {
    "url": "assets/js/26.d80f40c2.js",
    "revision": "2ab8200ed18b754c5292f8cdaa53fbe0"
  },
  {
    "url": "assets/js/27.12b2567e.js",
    "revision": "0a02e4658be85833f3f486d936734367"
  },
  {
    "url": "assets/js/28.9dc4027b.js",
    "revision": "42b44f891640a0555f90385b72f38239"
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
    "url": "assets/js/35.677a06fc.js",
    "revision": "6f91a388dcb1957dc0489cc7384ab060"
  },
  {
    "url": "assets/js/36.4ba5f418.js",
    "revision": "5ec02e3b2011184391e0a60690645681"
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
    "url": "assets/js/41.cb434625.js",
    "revision": "8b402c7d8d511e03758b4d2ef6b0b9fd"
  },
  {
    "url": "assets/js/42.a6c7dd32.js",
    "revision": "841a863170f2f85d75be20faae7f2394"
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
    "url": "assets/js/app.4c96d699.js",
    "revision": "77241aa7cb269ae58559cf6eb3414a5b"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "en/api/index.html",
    "revision": "e4bbb3da9d62376ee6cfca2b887b5d31"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "7ea062ee1799415be8e3bf53192af666"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "a662581a62aace50e74ebdae204be1d8"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "ba7e6127eef15a436b917957fcaa947d"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "dc4ab6a5952858efedc41b566fa036e7"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "be2fbd8dde935cebbef421b033469fe1"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "6ada552f4b07a553b4b973a9b1a7526f"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "7aabf139be9e19e5e8e14dd739404d66"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "0cd347254bfc9a1b5607a0798138e1f5"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "950de4d8f7946a3d46afd3ff511db4c3"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "34a7782266849d941700c21a1e4b9ca7"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "92f2b82377bef22edc2d8f5602609ed5"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "d7f0e853433f54f76caae0effb27d380"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a6a53495bcb2563c9f754107c5ba2a38"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "87f6f2f3bfa2508a01322588ada9bc27"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "47e16d4f5e67c170d33e147eae10f71b"
  },
  {
    "url": "en/index.html",
    "revision": "0e9dfa730bef8411d63902534ca580e7"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "adf9dfdd16da4a36637fa257e6f83d31"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "5c36ffa295596706774c6b7b9aa197f3"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "c32780b03f2ce29d5196fdd22cfbfa59"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "745663b38228d5b1de7bf3028248f538"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "dafd9ed32076ef782e1daf22d2beb695"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "cb2e1b593328ab2e28745a23e54bfcbc"
  },
  {
    "url": "guide/changelog.html",
    "revision": "3afbe79052c8a84a4d1883c6fc77b9b1"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "48cd632f817d22733e05cc01b26475d9"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "c4a50722d0a93d80a6e88de453598055"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "b22f7326bd0761190b4017856d7bf11b"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "dd0db6c827e3174ee16bddb4cd8da184"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "4abbf78975eb84824a4c03fde49949b5"
  },
  {
    "url": "guide/index.html",
    "revision": "feb4a82c8c9ca2137437ec607f9c4ad9"
  },
  {
    "url": "guide/installation.html",
    "revision": "a941c9a01ad590faeb54c87e2aadfff8"
  },
  {
    "url": "guide/solutions.html",
    "revision": "45ed5471e48e8a5e1ac8d0e61d4f4c8b"
  },
  {
    "url": "index.html",
    "revision": "c39e5ddbc71a4b256603f125f5ae066e"
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
