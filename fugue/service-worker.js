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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1980f55e3a7f5ae61582dc1a28b5f605"
  },
  {
    "url": "assets/css/0.styles.099ae12a.css",
    "revision": "0fb5dfce255eb91adcce4c85e8414173"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.db0db96e.js",
    "revision": "6f882b9eb8a7364d03f3892957ab8c7b"
  },
  {
    "url": "assets/js/11.0f9689fc.js",
    "revision": "cb25222c2bba73757bf63468144acd22"
  },
  {
    "url": "assets/js/12.51aa2cfc.js",
    "revision": "4cd5d2462e308e25d9353dcb0087bda9"
  },
  {
    "url": "assets/js/13.e4c67a93.js",
    "revision": "3e56e2c22736d636bb1bdafd25347201"
  },
  {
    "url": "assets/js/14.e187828e.js",
    "revision": "b4ede25a6969ef7ac2cf4db14b3ad7e9"
  },
  {
    "url": "assets/js/15.ac9c5f2d.js",
    "revision": "0dc2acfddabaa3498009734b4ef018e9"
  },
  {
    "url": "assets/js/16.0624363c.js",
    "revision": "3a3c9925c130d31fa8284adb0dfd232b"
  },
  {
    "url": "assets/js/17.87e6c414.js",
    "revision": "7200b13dc3ae8ce22f306d056a1fef52"
  },
  {
    "url": "assets/js/18.f09dd8bb.js",
    "revision": "1614a4c6c8b19b0849ba5d77a3a1055f"
  },
  {
    "url": "assets/js/19.efa6ac57.js",
    "revision": "2505f5453dff6ebce9f29dac94bb2fcb"
  },
  {
    "url": "assets/js/2.d41c5a46.js",
    "revision": "0594e6cc75f3103d7d83968688be8876"
  },
  {
    "url": "assets/js/20.bcbc3030.js",
    "revision": "87b12324b93627b1d4a20c62c3b70b55"
  },
  {
    "url": "assets/js/21.724a4f97.js",
    "revision": "a8befb19725df15a993f3bfd70e5c044"
  },
  {
    "url": "assets/js/3.6176ed37.js",
    "revision": "1e41ac1c527937d17693f00d7ecd2d90"
  },
  {
    "url": "assets/js/4.7cc36f7c.js",
    "revision": "39c5867bf7e696bf5a774b7cafe106dc"
  },
  {
    "url": "assets/js/5.2a62d6f1.js",
    "revision": "752ed8c5926ce3219c5a684b867088f5"
  },
  {
    "url": "assets/js/6.408cfa10.js",
    "revision": "161e12fe83e5e5c1f1e3145d957239cc"
  },
  {
    "url": "assets/js/7.92fdc32b.js",
    "revision": "0851b16d44cce183765f03b1b18e61de"
  },
  {
    "url": "assets/js/8.c6ac0306.js",
    "revision": "7e51a1b5ade04c0c03b6a2127f555358"
  },
  {
    "url": "assets/js/9.25c6314d.js",
    "revision": "d5a4d48cfa994a7379858aa3efc64968"
  },
  {
    "url": "assets/js/app.5f6426fb.js",
    "revision": "43300d720c2f15919bce01b7a87605e8"
  },
  {
    "url": "D_icon.png",
    "revision": "e0bad428dad73739c5c3248f89c3153e"
  },
  {
    "url": "Figure_1.png",
    "revision": "3bc3bbfe1b2403ee6d347e89557f98c5"
  },
  {
    "url": "Figure_10.png",
    "revision": "8fa7b640c08d1ce931393bcf65f9fba2"
  },
  {
    "url": "Figure_11.png",
    "revision": "4def9223d13c9df644bb2b13a740c727"
  },
  {
    "url": "Figure_2.png",
    "revision": "7cf6015a92122edf09b44ea4366adde0"
  },
  {
    "url": "Figure_3.png",
    "revision": "798647fb3f92e50694e3210f41e328e5"
  },
  {
    "url": "Figure_4.png",
    "revision": "798647fb3f92e50694e3210f41e328e5"
  },
  {
    "url": "Figure_5.png",
    "revision": "cf4f0e6ede2361166bc5bed1e7451113"
  },
  {
    "url": "Figure_6.png",
    "revision": "bccb52648017ab8fc0f5035f4274978b"
  },
  {
    "url": "Figure_7.png",
    "revision": "a2ad574e8492bccc28df60b6f40c8e60"
  },
  {
    "url": "Figure_7a.png",
    "revision": "8374690b9535e7aa361effa0273477f6"
  },
  {
    "url": "Figure_7b.png",
    "revision": "68bdc6136d39632e291bbdc20522ac55"
  },
  {
    "url": "Figure_8.png",
    "revision": "4f3210f892fc5bc40ef4035d85672cbc"
  },
  {
    "url": "Figure_9.png",
    "revision": "0199755f43e06d2726a4a5ae9a6308d2"
  },
  {
    "url": "Fugue_Values.png",
    "revision": "23aa76ff5b430d196cdf02653d2d3dea"
  },
  {
    "url": "Fugues/index.html",
    "revision": "a0936a3a269ee61f6f49432fa0086240"
  },
  {
    "url": "GameModes/index.html",
    "revision": "6fe7eac86ef2adfe523e566b1bfcb10f"
  },
  {
    "url": "Gameover/index.html",
    "revision": "e60f620d086503cfbb6c05528389b55d"
  },
  {
    "url": "Gameplay/index.html",
    "revision": "f6871efc2044bc63f1aebde3588fa3e1"
  },
  {
    "url": "I_icon.png",
    "revision": "377f43155d724f5c880f2121307ac9d4"
  },
  {
    "url": "index.html",
    "revision": "4b149d9ea049df03078e3e028e6289f9"
  },
  {
    "url": "Introduction/index.html",
    "revision": "6864b4c083f048c17dd42f48cec4cb71"
  },
  {
    "url": "Meeple_B.png",
    "revision": "d91215a5828637ffe07e47f1f2227406"
  },
  {
    "url": "Meeple_G.png",
    "revision": "8c121376db18e345aa8b22dd05ecd21f"
  },
  {
    "url": "Meeple_P.png",
    "revision": "a19c3a60f9e05e2fd0399dfa0f8b9c02"
  },
  {
    "url": "Meeple_Y.png",
    "revision": "05583afb520afccdfc8abb93a5736c8b"
  },
  {
    "url": "Meeples.png",
    "revision": "2576c7e5e97416f30aa2ee00ad4802ea"
  },
  {
    "url": "P_icon.png",
    "revision": "9a033a336656137b8c5cd4093d7f99de"
  },
  {
    "url": "Phases/index.html",
    "revision": "e3e4770eef1f2eb669e9142e489c7d15"
  },
  {
    "url": "S_icon.png",
    "revision": "3029d80b3209bef315be38c1093e6ec7"
  },
  {
    "url": "SetExplanationAndExamples/index.html",
    "revision": "484ccbcec332896be83150b3b726e03e"
  },
  {
    "url": "Setup/index.html",
    "revision": "9b7915d008776f02de81bc2676a0c151"
  },
  {
    "url": "SoloModes/index.html",
    "revision": "4b9b8c3184aadbd46cc8c2123b8c37a2"
  },
  {
    "url": "SpiritCards/index.html",
    "revision": "809b1046d2015a519e619c1d873e0e85"
  },
  {
    "url": "V_icon.png",
    "revision": "99e583c1a3452d42451925055f4cba69"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
