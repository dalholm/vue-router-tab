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
    "revision": "f83034f490a495e255305daf298364b2"
  },
  {
    "url": "api/index.html",
    "revision": "107f8e912cb0888e28b05ada48ed3cb7"
  },
  {
    "url": "assets/css/0.styles.8393ef6c.css",
    "revision": "84a54a14a918a921cde29c2a5a3bdc89"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e58817c9.js",
    "revision": "fe6023ae3c392815dcd434d985daf559"
  },
  {
    "url": "assets/js/11.b5c869f9.js",
    "revision": "a17407f51762e315136dfff012e7ff5c"
  },
  {
    "url": "assets/js/12.25fd9fda.js",
    "revision": "fb57b98184794a17e886cd83f876a772"
  },
  {
    "url": "assets/js/13.18ba412d.js",
    "revision": "ef76094b6a619480d10e0261b80f70cd"
  },
  {
    "url": "assets/js/14.03002602.js",
    "revision": "56860d2db000192fef643f22ae955454"
  },
  {
    "url": "assets/js/15.8f04a426.js",
    "revision": "e814f8fd6e77c57d13e7860873925e31"
  },
  {
    "url": "assets/js/16.1f289084.js",
    "revision": "1f23a4d900b8dc2b0ec7f5661b869e1e"
  },
  {
    "url": "assets/js/17.743bf9b7.js",
    "revision": "1e7b6420af057f68a986e57b34cdc2f8"
  },
  {
    "url": "assets/js/18.7c7eaa88.js",
    "revision": "431166790ab0ccedec24cef08818875c"
  },
  {
    "url": "assets/js/19.99b4fb08.js",
    "revision": "fa193a341b0e261a6f1e9020e5bb551f"
  },
  {
    "url": "assets/js/20.81f82111.js",
    "revision": "af3b6b3bc0de4b1ff527ca28cc9d0851"
  },
  {
    "url": "assets/js/21.3fbe3ec9.js",
    "revision": "e5462413e07ec5ff0c122623c6731902"
  },
  {
    "url": "assets/js/22.7cc2cee3.js",
    "revision": "4bc1fb5b2f1e8c3b7ac542ce472724c9"
  },
  {
    "url": "assets/js/23.deb73964.js",
    "revision": "c5ea902c3ef620ebe33de6d24986afe4"
  },
  {
    "url": "assets/js/24.c59711c0.js",
    "revision": "51965b8f2ddbad1d03076d64892cfb1d"
  },
  {
    "url": "assets/js/25.8c8456c2.js",
    "revision": "a31a3fa300a56da206c9cc12630a6639"
  },
  {
    "url": "assets/js/26.13abf170.js",
    "revision": "faf9187b4e45525946bcb8d3b088bb20"
  },
  {
    "url": "assets/js/3.61588f21.js",
    "revision": "f61ce4700cab66a9cddfaa024d694b48"
  },
  {
    "url": "assets/js/4.6ba3b3e6.js",
    "revision": "61f2707daca55a3ef00a1a4b605880d2"
  },
  {
    "url": "assets/js/5.88994ad1.js",
    "revision": "2c297ec7285611d2ba6426b5e94eda51"
  },
  {
    "url": "assets/js/6.27021e12.js",
    "revision": "9be2ab8bb471928f62737d1aa29d6b5f"
  },
  {
    "url": "assets/js/7.edf378e0.js",
    "revision": "9b8cdbebbd16fc0ed4eb59101b2827f3"
  },
  {
    "url": "assets/js/8.72afa9cf.js",
    "revision": "c2adbaf5089d6b0b7925ee95afb53026"
  },
  {
    "url": "assets/js/9.0354b82b.js",
    "revision": "e22848f1107e7399e069987a7ab8ed60"
  },
  {
    "url": "assets/js/app.1357d126.js",
    "revision": "9bb79e7dc72e3ea5ca33d5ff408007a1"
  },
  {
    "url": "assets/js/vendors~docsearch.b0ccae53.js",
    "revision": "d6a91a1daed0a52d0d0a1885fa8576ae"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "20922a986495051f4900e8e5c683cddb"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a9cff780006c882f2a492835fbea29a4"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "1a5fb2fa8668f1a30ab0eec3ab26fc94"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "ec26bf3b0ac1d843a98a29684f43b2e6"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "622b08cea46175c70cda50431c91704d"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "c3f9f28772be4ec9fea547c65e46490d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "1219be327d66c43961012af52ddb61bb"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "30d5196c890922e89c39939999c1f6d6"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "40dd0e4ed2e30ad6a3306f903484f99d"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "d41a7046feefb70127e8826d6b4af5c6"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "818b53dd1725ae58c2903c602cd4c11a"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "58b1cef3c5824fccbde9acef5f29cd8b"
  },
  {
    "url": "guide/index.html",
    "revision": "47d0fe658899b4ac61c7b9536b3fa697"
  },
  {
    "url": "guide/installation.html",
    "revision": "f5c6c01b62b2b1bba80540d6bfdd365b"
  },
  {
    "url": "guide/program.html",
    "revision": "01a21fce3adbeb5b25a5f5ac47bf5784"
  },
  {
    "url": "index.html",
    "revision": "38479f2d8b10b50c809ad8f266258cc3"
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
