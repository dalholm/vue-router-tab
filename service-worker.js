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
    "revision": "75633b3b723394ed46106912af620b43"
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
    "url": "assets/js/35.1fc71128.js",
    "revision": "57e3851cdb2670b8bec4e0a5489983c4"
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
    "url": "assets/js/app.fe748807.js",
    "revision": "31b88d3ef00fcd5137a4694ac81a10b9"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "en/api/index.html",
    "revision": "e4787bc338f1aea311bfee2475d50ba4"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "8358f1d00d1d73e8c4aa05b25a2cba6d"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "fcf14b260ea673da4d1979066fa3ffab"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "d853e84b93705ea8f42b13681391a625"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "25d6c8524bc2672658aa994e551b573b"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "bdb30690aa64637d9fb2d3d1ea8b505c"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "ac60497db623c11ec505ce96bca8e475"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "86c0ba785af7330c1ce3d32dd44e50c6"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "f509134de56090a3a312c5fcb526ddd1"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "0d29c54c07a820c0d10ef7aa269d4fee"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "db4c91b2e1dee898fb72ac3b7cc65ec5"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "932b98fb00c321a3034077035dc6a3ba"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "e0ad4791b00a66c53d52a6a71484c402"
  },
  {
    "url": "en/guide/index.html",
    "revision": "dca82d3182a743a5eebeab840c99f0a1"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "c7b368cc69b3cdaab7069771b2923111"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "7ad2004e55ae75ce399d85f4f3dda217"
  },
  {
    "url": "en/index.html",
    "revision": "975ed01286015466cf7f2fab01e67638"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "52630e64005ed5c5ddf5fd9c79530462"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "557888740df5e84529d107319a2f6ac7"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "46d3b2d49909fc6c22620af45dccb5d8"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "e7919e9e319ecc461d18c2e40572d29e"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "a4490aebae6317b1735b7e19c8c29641"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "b129659fb50bb6e3b8b312231830e5f7"
  },
  {
    "url": "guide/changelog.html",
    "revision": "6e80b0595f71529da5c4996a790b4925"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "2c58d68c19b643988504c215ca35fbb1"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "981af33f6d09ea1c5f12fbaff75ad130"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "64cc0cdccd95d1e0e819c62cb7a4197e"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "00b5487e9caa2f5e8b58bbfe980bea25"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "43083bb642d0a5f86c4f819aeebc94fb"
  },
  {
    "url": "guide/index.html",
    "revision": "9d07d81b6ae8dc83f2025813badcd77f"
  },
  {
    "url": "guide/installation.html",
    "revision": "a867dffdfb27aa37225ecddadaf69d9c"
  },
  {
    "url": "guide/solutions.html",
    "revision": "fb492536e3fb6e7df6577fc1a1a39bf6"
  },
  {
    "url": "index.html",
    "revision": "76bb57b360c220f4f9aff246e9a8b430"
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
