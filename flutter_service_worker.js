'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8676e58d4a3972d2b25bbb7b42a55589",
"assets/AssetManifest.bin.json": "68a344de4efa2a91241274edb67852fd",
"assets/AssetManifest.json": "5f12a3368f6af2b4ec472389d32c3673",
"assets/assets/images/avatar.png": "7ff563404caafe50ef55695c11548d8a",
"assets/assets/images/me.png": "a02d1c81739fc87ff2cf2a6f732b339f",
"assets/assets/Logos/avocado.png": "9d0ef9aca9cc0281a3ff6ca632f19cc7",
"assets/assets/Logos/brofa.png": "e76bee1d3d3664ed88757dbf60c2367e",
"assets/assets/Logos/elakaber.jpg": "6dad1f508456bec9acbe923bbf532e3c",
"assets/assets/Logos/friends.png": "ac355204a9225c97cd441b69382dde3c",
"assets/assets/Logos/mhalatko.png": "5604efdacc36bc2e052289ab4f88ecff",
"assets/assets/Logos/shopmart.png": "ebac2e690be59f9b920eac2fb04eefef",
"assets/assets/Logos/vegan_market.png": "9fe6010c0794014b4ca75c9f8e71e464",
"assets/assets/Mockups/Avocado%2520Mockup.jpg": "3e2c1bea00c6edd117f40f684a0d3799",
"assets/assets/Mockups/brofa_1.png": "0eb9ceac07441336df2fd8451b073718",
"assets/assets/Mockups/brofa_2.png": "0771f7587e915f2820a5b207649cc550",
"assets/assets/Mockups/brofa_3.png": "74944f948abef353af1f536c44e44d7a",
"assets/assets/Mockups/brofa_4.png": "f82881a49d705e6148076d9de63d0731",
"assets/assets/Mockups/brofa_5.png": "bb8c18862934e6b145d6f298f8dc6843",
"assets/assets/Mockups/elakaber_1.png": "315abfe799e6851b9c7fe1aea83a7dfa",
"assets/assets/Mockups/elakaber_2.png": "e3166badabfa0b52885ae3582ec5d1df",
"assets/assets/Mockups/elakaber_3.png": "cda910e74ba93eb057c6ff1f749f862a",
"assets/assets/Mockups/elakaber_4.png": "7a6b08493742ef1820cf8968a64cd935",
"assets/assets/Mockups/elakaber_5.png": "2ed2a0ab3a07087dd8fec358bc8c9f04",
"assets/assets/Mockups/elakaber_6.png": "1819b828a1bfab001a3fc4c707cc7fde",
"assets/assets/Mockups/Friends.jpg": "835dfcb0595e8cc89bee9b078a3e9b00",
"assets/assets/Mockups/mhalatko_1.png": "5db6b21a4df51fe05b80e51d235e1421",
"assets/assets/Mockups/mhalatko_2.png": "14afc3b454f0e1b4ddf7f37fb9c1b1ad",
"assets/assets/Mockups/mhalatko_3.png": "0799e98625dc21b9dde712aeccaa2f78",
"assets/assets/Mockups/mhalatko_4.png": "66d6d2bbf46f69bdaba3d9159712b93a",
"assets/assets/Mockups/mhalatko_5.png": "f7c007ce9896df5e14f72e7691d6baae",
"assets/assets/Mockups/ShopMart.jpg": "a268c76beb44d556fc7ddcc97934754a",
"assets/assets/Mockups/VeganMarket.jpg": "69d075ad071436a9641db379a5d5581b",
"assets/assets/videos/Avocado.mp4": "22c27210622fc642540a2141393e1cfd",
"assets/assets/videos/Friends.mp4": "a2810f620b0eb572946cc2df21b841e3",
"assets/assets/videos/Shopmart.mp4": "8eb87cc325a5f1dbc8bcbd6d74b36513",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a911daeb3a260282a3b307da7c8c1839",
"assets/NOTICES": "411b6984804e2db83a967dd73c6bf113",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d58e480ac70a0796ad687a13d1489f7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8310fedb9a91820079d90317b6a74725",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c73e2e53a6db8cdd93b2344bb0279df3",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b1eacf0626dca2d1ed6fb0e0814cbe10",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e11c3d46788d9bc479f9866bee461539",
"/": "e11c3d46788d9bc479f9866bee461539",
"main.dart.js": "ae7e987ee5e9d76701a73ebcfa7b6232",
"manifest.json": "9cc5002128a3005bf4b0f4c1afba1651",
"version.json": "2a4bdd3370ee966319e180d97d91e050"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
