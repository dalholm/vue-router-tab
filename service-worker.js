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
    "revision": "44e330b9266452ef9d932f97e03d0e38"
  },
  {
    "url": "api/index.html",
    "revision": "96d680f79c82ed6e1bef1b27231e850f"
  },
  {
    "url": "assets/css/0.styles.a441bfd0.css",
    "revision": "158ea3d1314ced30a4b166fa6bf53c8a"
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
    "url": "assets/js/11.775af1b0.js",
    "revision": "955c851f4f2f85209f9b2f0640fd82af"
  },
  {
    "url": "assets/js/12.a0bd44da.js",
    "revision": "ba97132ccc01d1d2b9f6c20c9889799f"
  },
  {
    "url": "assets/js/13.162c0cf4.js",
    "revision": "2c78de4314b89e1df9c26da5008bc303"
  },
  {
    "url": "assets/js/14.0b4d3fee.js",
    "revision": "c046c2c099c67f3635d12de20c8a26d8"
  },
  {
    "url": "assets/js/15.e0f03899.js",
    "revision": "48ea1183db83853a5bf0573fb8c57a35"
  },
  {
    "url": "assets/js/16.da3a643f.js",
    "revision": "f584287ccc872983be3b0241decaeb01"
  },
  {
    "url": "assets/js/17.d3caba94.js",
    "revision": "3ae51bd0a83ddda8dd81b48505bd6f95"
  },
  {
    "url": "assets/js/18.8ccaa3bb.js",
    "revision": "2994610014e3a81d818db44652e65e92"
  },
  {
    "url": "assets/js/19.efd72a0d.js",
    "revision": "92ddaaec7cda34fde60c92732efa6d29"
  },
  {
    "url": "assets/js/20.43526230.js",
    "revision": "114248489a0fea78ba994168bd016bb8"
  },
  {
    "url": "assets/js/21.c9f471fb.js",
    "revision": "b9d0e7574037b329c477423d6f4f28e6"
  },
  {
    "url": "assets/js/22.baab58ca.js",
    "revision": "4611527ac5788bae23a28e5c401f28c1"
  },
  {
    "url": "assets/js/23.3fe3f2b9.js",
    "revision": "24449713ee77126f4b56900df69d162c"
  },
  {
    "url": "assets/js/24.11b8692b.js",
    "revision": "0f67404afe9acdf97530b30e2e7938a9"
  },
  {
    "url": "assets/js/25.5cb87527.js",
    "revision": "352c381ecb4a3cd67d2195a80ee0e33f"
  },
  {
    "url": "assets/js/26.e3f983bc.js",
    "revision": "531715c479ad65b0c9b6e12b07ede941"
  },
  {
    "url": "assets/js/27.3fb943e3.js",
    "revision": "51e401b4a1acfa94454bbc06fa2794cb"
  },
  {
    "url": "assets/js/28.97717746.js",
    "revision": "e5044bd5d2b8a2adcc9ec8975a9fbd43"
  },
  {
    "url": "assets/js/29.25ac1c5b.js",
    "revision": "86b42f10239511f09c77bc555a064487"
  },
  {
    "url": "assets/js/3.a80c1c20.js",
    "revision": "f61ce4700cab66a9cddfaa024d694b48"
  },
  {
    "url": "assets/js/30.a9ef3214.js",
    "revision": "7fb9998524ff7288ba778fce3d2af378"
  },
  {
    "url": "assets/js/31.a7069205.js",
    "revision": "c28da95d103e432fc17bafbf2a612b8d"
  },
  {
    "url": "assets/js/32.36710073.js",
    "revision": "b5b09fbe5fa1748f5def85517fc42700"
  },
  {
    "url": "assets/js/33.9300e512.js",
    "revision": "00d2c15afecf8a1f81ca6da6700435e6"
  },
  {
    "url": "assets/js/34.778e9028.js",
    "revision": "565ae55bef620bc0014efe8250a87e26"
  },
  {
    "url": "assets/js/35.ea7de38c.js",
    "revision": "e986143b3a1a57d0c3492b22933ca0e3"
  },
  {
    "url": "assets/js/36.1ac22bb1.js",
    "revision": "0a056ad97b529a67d7588705ef21b3ee"
  },
  {
    "url": "assets/js/37.019ba4c2.js",
    "revision": "b1b2a1c4d4a8be1f4dcba609a530df27"
  },
  {
    "url": "assets/js/38.f0a24fa9.js",
    "revision": "1b708cf49a0aedf4135e0423a8fdb61f"
  },
  {
    "url": "assets/js/39.f6614dd6.js",
    "revision": "d8c4fe0b32d848741d28b2a3dcbd6333"
  },
  {
    "url": "assets/js/4.b4f0e589.js",
    "revision": "9f6824baf4c9d2bcce3234e300f74ab3"
  },
  {
    "url": "assets/js/40.c7fe2d7e.js",
    "revision": "fe423568f58b8bdb7cf234c9a9f98cb0"
  },
  {
    "url": "assets/js/41.2aaf41f1.js",
    "revision": "1208000ed64b86e1abf66f3882c17874"
  },
  {
    "url": "assets/js/42.600fb90a.js",
    "revision": "9cc79a477e756ccdb2678c70cf9f057c"
  },
  {
    "url": "assets/js/43.d485f57a.js",
    "revision": "f3592f648e2a9bf7387fe0fa7837cd27"
  },
  {
    "url": "assets/js/5.325b3277.js",
    "revision": "65b8377bff07cf61a39769ce3472bbd7"
  },
  {
    "url": "assets/js/6.e1c4b5ca.js",
    "revision": "ef67985b574175a98a43ec53ae666f4f"
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
    "url": "assets/js/app.349019c1.js",
    "revision": "48deedcb8ddf290c3e3c8de1be46fe92"
  },
  {
    "url": "assets/js/vendors~docsearch.ce3268fb.js",
    "revision": "d6a91a1daed0a52d0d0a1885fa8576ae"
  },
  {
    "url": "en/api/index.html",
    "revision": "120a6007008e0ee6ad60c612789f1052"
  },
  {
    "url": "en/guide/advanced/dynamic-tab-info.html",
    "revision": "6c05ae66eb6045004e2bfbf499d1fe48"
  },
  {
    "url": "en/guide/advanced/initial-tabs.html",
    "revision": "cf4da62db8480172668c5744f189201e"
  },
  {
    "url": "en/guide/advanced/page-leave.html",
    "revision": "e8d9f5519859f1aef5b7369e6e780477"
  },
  {
    "url": "en/guide/advanced/restore.html",
    "revision": "38ae905102f9765ef262c60343b762f6"
  },
  {
    "url": "en/guide/advanced/slot.html",
    "revision": "7b05d52aeaaf1190bf307a47ec921dc5"
  },
  {
    "url": "en/guide/advanced/transition.html",
    "revision": "a79d961e55cced594f0803c3554113d7"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "d4c2f70d977c5eeb2fc61bc3f50c676f"
  },
  {
    "url": "en/guide/essentials/i18n.html",
    "revision": "59fc3680496bf892c55ca1ce6fd485e4"
  },
  {
    "url": "en/guide/essentials/iframe.html",
    "revision": "52380d99ef0d64e3c1be048e099e98c3"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "823ccc3c0e527992635ab38c4818a097"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "f36493c7d601f2a60a37a5bdfaa9e7d4"
  },
  {
    "url": "en/guide/essentials/rule.html",
    "revision": "1842dac89bbeddb575926cfb6f2a6ebb"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1ca70a7615013d37b59e1268f59bf239"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "326ea62c92061e22ca1b5e9d09f5890e"
  },
  {
    "url": "en/guide/solutions.html",
    "revision": "9370325f10aa7317105e44d6f64a63fc"
  },
  {
    "url": "en/index.html",
    "revision": "71558140a9f1436176a2bfd57cc9989e"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "1680390200874d77463b3680545c9ed9"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "6b5c37d9d927fad37c13bbf6a797233a"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "53d288f0c5e7f73fdde91545178174dd"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "eaff2a87857784a1c4fa115e4be803e4"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "d5f25c6daed980f9ed6717e3d542c26e"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "4696d4db86d013ccaf2bee2cfd276d46"
  },
  {
    "url": "guide/changelog.html",
    "revision": "b6ce132fe5f0ce78ffd15be134bcf4ed"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "bb05c622b17d67e45eb3cbcc7f0f0cbe"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "e1bf9307534494fc420e1a08fa80161e"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "a4b6a36f1bbcc943517141831cff35c2"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "384ddd55038e38440a3a54213ddbb142"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "e21cffa4adb5b73aa3e28529143c832a"
  },
  {
    "url": "guide/index.html",
    "revision": "421b7482e2eaae9f7c41c64c78aa20b5"
  },
  {
    "url": "guide/installation.html",
    "revision": "e8a412f60bbd1ccb6a283f87709ed17e"
  },
  {
    "url": "guide/solutions.html",
    "revision": "f187f920bdd8a26c935417ba3da1216f"
  },
  {
    "url": "index.html",
    "revision": "0e89cb3bede3f09d82ae44dd907d8500"
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
