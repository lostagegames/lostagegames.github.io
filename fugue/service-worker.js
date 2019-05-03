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
    "revision": "d9859d7c2cce6dca8c593506d14b1bf9"
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
    "url": "assets/js/11.54461462.js",
    "revision": "e360c772b41d1d4c5674a9a854d76010"
  },
  {
    "url": "assets/js/12.51aa2cfc.js",
    "revision": "4cd5d2462e308e25d9353dcb0087bda9"
  },
  {
    "url": "assets/js/13.b761086f.js",
    "revision": "2f08b7a8e7ff8eef467382bd450cbf12"
  },
  {
    "url": "assets/js/14.9c1fe37a.js",
    "revision": "dbc9bdfb25e97b597b2463648ba3495e"
  },
  {
    "url": "assets/js/15.da2709c2.js",
    "revision": "fa03de0e92f57698f6dfbdbb6d8d6252"
  },
  {
    "url": "assets/js/16.0624363c.js",
    "revision": "3a3c9925c130d31fa8284adb0dfd232b"
  },
  {
    "url": "assets/js/17.748b5ec3.js",
    "revision": "8da27b5df1b5d8132784a57385d6398d"
  },
  {
    "url": "assets/js/18.7532c248.js",
    "revision": "ddac49911930723570172d46926a1b15"
  },
  {
    "url": "assets/js/19.56f80234.js",
    "revision": "5fb9f36d1d3ad0902ce537e1b82f06af"
  },
  {
    "url": "assets/js/2.d41c5a46.js",
    "revision": "0594e6cc75f3103d7d83968688be8876"
  },
  {
    "url": "assets/js/20.c97894a3.js",
    "revision": "a5bdb96670ebab06750d28ac9b89064a"
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
    "url": "assets/js/app.629c2a97.js",
    "revision": "186391174242dace5a46de879eacc005"
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
    "revision": "ffe2700797d9e6a8a6c88ff81e21d41c"
  },
  {
    "url": "GameModes/index.html",
    "revision": "0b404ad9243788b63390c1088e1881e6"
  },
  {
    "url": "Gameover/index.html",
    "revision": "80cbc1dcd48328edb49c8c18cfb1b217"
  },
  {
    "url": "Gameplay/index.html",
    "revision": "a81731e4141a4c2ee2ce0e2e91b95551"
  },
  {
    "url": "I_icon.png",
    "revision": "377f43155d724f5c880f2121307ac9d4"
  },
  {
    "url": "index.html",
    "revision": "8c067e2924d18818df85765465f55e71"
  },
  {
    "url": "Introduction/index.html",
    "revision": "171eb901a21719fd07c5843e581544c5"
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
    "revision": "aed4c4db44b41d78fae87254edf2d8df"
  },
  {
    "url": "S_icon.png",
    "revision": "3029d80b3209bef315be38c1093e6ec7"
  },
  {
    "url": "SetExplanationAndExamples/index.html",
    "revision": "2cdd66c20ce63ef2a4f81beb6b4dfb25"
  },
  {
    "url": "Setup/index.html",
    "revision": "129f7d0067c6ba3c0ab04c1b6bd87f1c"
  },
  {
    "url": "SoloModes/index.html",
    "revision": "4339d7ae6a460a4250d4924a9eec54a1"
  },
  {
    "url": "SpiritCards/index.html",
    "revision": "184c438327e10187bc1d6207fdea29be"
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
