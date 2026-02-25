'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4091af7fd5f0ec58a009aa929fa62f7e",
"version.json": "7876f8b14edba5405a796162208cb44f",
"index.html": "8232a314578b919d1075c23cec4f65fb",
"/": "8232a314578b919d1075c23cec4f65fb",
"main.dart.js": "99fb8ca14b0df4a19c68da048c2610dd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "91726280787fc61d87f03b10e5f6eedf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "54092f8b2cc689a9ba99caaef4190b01",
"main.dart.wasm": "fb79530621686c53f7115cdc67153887",
".git/config": "053f2ed07597befa5722e3476c39c714",
".git/objects/66/dd5f0da24dae03e8c145cf97ad4a67459b01d1": "f6f9115ce2a7b19a9a5caa689d24144f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/3c/3549c7a2af8da150a9fdc1da388201d80b70bd": "3e5bdfde5f445d5c3d159c59a7d74bd2",
".git/objects/3c/eda3b64db83f169e20bcecf4e3c584399ef51b": "b46d241131e6e4511978056b277bf8b5",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5f/ad4cf0a8f9104cf2db3630e9b569570ca4a134": "f33d8659c4082a149be2dddddd6103bf",
".git/objects/5f/80526a455315c944062743d8b2f75f87f3bb65": "ed6252cef5faeb0f0fe1f68b44f7c9a4",
".git/objects/d9/417e3c1cc75c226733b776d4bd44cb8da68bbb": "1b60b2efd6ea9328d3c9bb40684ce7cc",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ac/73f2460b9d8d68141d5c5811223731cc4bb024": "338895520679b7d9b3a2e2de83a0908d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/ac02e1eb4526bc4266ffca4489a778bdb45b84": "60150109a4c9b086f664149905efa45a",
".git/objects/b3/29b946b5e1fa839d4ef6ab1a14832c9ea48f73": "c81b0332acf888697908950078a5c3d2",
".git/objects/a2/82501434a60df0601d09f205911ca176a3ba15": "1db15a8306f076c7b1a2472535931413",
".git/objects/bd/f4584a351fe637f9e78e4774b10b9c252a0dad": "de2b6408ee60584db6fa79bcd6127f47",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/dd42513ff52fad321094c46b7d9503209335e1": "b085cb05a83e90607bdf64f9cf5c83a8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b42d5ae24b925af2270eab02c67775ddcdabe8": "9b496a31b68af7b98c45e44b9d7bcb6a",
".git/objects/c7/02b7acef08b2133a6bca8fdb61ce1988a09f40": "cb009da3698ffa9b6211fe50fb21c95a",
".git/objects/c7/6412475ef268872f30031ae575a76f4bc130df": "18a28b20245e531bf20838ef8e3e3795",
".git/objects/c9/15d094eb78bdc5eeea1a30ab6b631dc6f965aa": "e9a5d2b9afa72a7331001871d0ca2c4f",
".git/objects/fc/f18e11ebbeabd7e4ca90058c5cda325480d6b5": "2697802b6ce9efa762e6f0a1e1abc24f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/e3/1c7cc5be1beab84bccceaa888966014d0476ab": "89976e43437cb1c21279d713341ef0ae",
".git/objects/e3/8ec6f754b3c7046f6d622cc5184d4ed0782ac9": "b035cd88f96559b9bb3df035c5dfa569",
".git/objects/ca/1973b2744abace595747a7d8fb53cac1a6d72f": "2011f177e5a7151d682adc2d0030c7cd",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/a0e267a7ef46b80e327cf0c6d42ac84c641b2d": "f583a5085a53e24633cca8f985387ec1",
".git/objects/ec/a8cd3e4631f263590da6a79248f4f3c7f98120": "b95a0043ff6c297c41a09da6063609c1",
".git/objects/4e/c690c51e18d76daf69502040570d7fdb7335f3": "5db918f2e3d9523691f9715fda9f1e8f",
".git/objects/4e/b59f3b8b2658b2b6e19c30bfa3b1abbc4b2712": "34679c4e7bf5a9be856b203bd2833241",
".git/objects/20/74787ede22591bc45e8f9f61b28ad7554e0559": "ca14136d00a9a8c96f266dd31164deac",
".git/objects/11/dfd3829d0bb2337a4a153844dfee07f59b15f0": "51d4dabbdc9aab72d903fc2a08063540",
".git/objects/29/6bef64ede26f4d44fc139f2023696af5c50883": "4983ef0b1f2b2ceef0687b21f2503361",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/e00ba358e60f9aa60a9113381a31e1895aae82": "07015e6e52dc5cb0691d74c25f0bb387",
".git/objects/73/2a3cacdd007d59434959665d442f239bd49257": "95a103498bc5c928668fc0e270562310",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/44/8fb78ed5a593374e8fe2fb17f6020f5e558a99": "57c5b3e05aba812c28f95cd764962179",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d6b38a8713da4506584f14075e65beb52523f8": "73779014dc28025b68f1dc581be61f21",
".git/objects/6e/b95943ebb4ceadc45df37fa2da90d5ae441770": "66fe8dd7a9161071b455fbf5baa1e95e",
".git/objects/36/2a518c5671dede666cb437113575221e8f1bdb": "68da5b8e4d54fb7b5dfc98918a7c0386",
".git/objects/31/c9dfcbe0df79efb5f73d2123fe8dbc67aa5d67": "17a2f833bc82ac4fa70155da8849f47c",
".git/objects/91/c909b621743b9bf552842f045b6988f466c3d0": "8fe0fda7f3113ed42d84e83a93f9ff9b",
".git/objects/65/373b95361db912ea89394e4f45e9e46f556491": "091c712c9ff6121c5f6b6c3b220104ad",
".git/objects/96/06fe287870fa821caa42a9ca810613de74ba1a": "3d6ff82334f4f81227ef6d46070da520",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/1bc7b26704b248ab432d7c381deb20f805247c": "42774b5cfa3eff90662dcee668f71be8",
".git/objects/3f/2b90e1704b99882047ee9bd50dd32391b44b80": "ebaa35142d34a2777cb752569dea7ea6",
".git/objects/5b/b8461b9fe5b63e208c3717654e75419f96776d": "0364302d723eb839149fa1fb5e65169e",
".git/objects/37/2de6d8f15aea8636f0bd2b95c0e2ccd89ac60b": "c6498e47eb5980a947a0a0fdcbb8eb9b",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/97/8896eed1f8c3953ce2f0b30bcd910063a64bdb": "d9363d4a656bd6a36043dc4aff5f857f",
".git/objects/63/91997974f651e9800e4ae18cd6ffc60a6758c3": "65bd8dc9b783038a2b833435961c58ec",
".git/objects/0a/de061315d92f5cf6b854a03fb4eaaa4ee2adb2": "9b89c3b0efcb5ffd5f13deb31b299544",
".git/objects/0a/a79daa86eb07d7b135783531e8966923a6ab81": "9f6e605db3f5939fb18935edf3501486",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/c439732e7fc789d0c70bd04d6f0bfd68560078": "5c0941c96e7c6a7e3c196c7f6b0e43ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/cd20836078c745c7bc012dda602e0d66cd5072": "626649fa44ee38950733fb99193547fa",
".git/objects/de/b8190b6d190d78c6757ac82dd4331e907fedbc": "6c4ad9a6a08e20b5e05db9e6cd7d6655",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/fd11905098cb32cda4461f4a36b31b83a36bc3": "99de0df2254486652d050a382d17ea76",
".git/objects/ef/c4391eb3f91b9e7eb57d8b37bd2a6a55307bfb": "33f6e4f17fcc9dd3c9d250712c773c23",
".git/objects/ea/c512150b6be5f3ae457272426de35f8afda111": "1844b6de906d94734f21bd5b12c0b4f9",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/70252b3a8211232580929513ce31baeba6b379": "e65fa687d7b99821c5a4158c4258e511",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/cb/78040573b01f05c5ee148cfa3fc8255059522a": "2fa045bf29f2b239d6b2f36639894ee0",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/297ef3e6ba29240da75a74beb1453adfcd4ca9": "36ff71ec6acbf6fcb95b588307793d8a",
".git/objects/46/fd8300291472bf78022f9a5734585b205cc44d": "b5be96000ff1997e403e3fab55427861",
".git/objects/79/db75e7fa1e9ae9f22bef8af4f4e3fad1be98e2": "c03922962c69763de2f240f860fadf67",
".git/objects/79/8592648b0adcaefe2387b46233064f48e1be59": "218f54dd6a72027936e6e0a7ed24ff22",
".git/objects/1b/609d0f35a3f6cee4943b09d44326ceae2e17a9": "396ff7682e6d9c949146ecbf2486a680",
".git/objects/24/956fde4cda4c7181c33c81a95448955b4b55c6": "6d4796197c53dc7bd377a9ad654f687a",
".git/objects/4f/11214b1907fe548813872e504eda7c0a55b794": "f56f291da07ee183f6728ccab0b01bd0",
".git/objects/8c/188e9e88cc6b46a312c1a5b8be0b8efd69e9e0": "676dda3ca5ad901a008a75b779082789",
".git/objects/8c/35d82c899cbca9fb096078b823c67e20e6f5c0": "3bf92ac68483e5c6a457ed0b33339b95",
".git/objects/85/812363d777dc2db45164a54bfeea8907e4337a": "2b341300362ffbec75e6809dff30981b",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/c3931099078a37719b675fc07948c655024d15": "1c9399eddc5870b451d83e4b126ba204",
".git/objects/1d/45d6cbf9fd11aa4c4a9015d08ad4f7d4e0c832": "42ace9df2bc96e44ad0b2e6e414bd17c",
".git/objects/82/859b0461c3f78e34d663c47535fbd94086baf3": "51b40d6ad0b08c65406734789027bd7c",
".git/objects/47/ad78a11ee3b15eadca13cd1b33fb7a1d40d361": "4a02e5cb3d3fb4fd0b340f2ede05e170",
".git/objects/7f/463935f2eee8ee4e576957cdb1f1e08e5ebbd5": "701d2e7d9a91ee86e324d5e74e72f70b",
".git/objects/8e/c4e709dc4833763de3b5de2c650a64aee473da": "fb573a2ddb6ebd49bb0fdcfc082cdca9",
".git/objects/22/8a92c529b2b1168081e66054d56e0224bb65ce": "8facb7187a3417a294ab9a113856aaf4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f51685dbf60e15d859ba73a21ab496bb",
".git/logs/refs/heads/main": "f51685dbf60e15d859ba73a21ab496bb",
".git/logs/refs/remotes/origin/main": "5a037c5be288106b2793d19ed0053753",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cd4d7f16fd741a00d11cabb3e2e5de51",
".git/refs/remotes/origin/main": "cd4d7f16fd741a00d11cabb3e2e5de51",
".git/index": "1b834c9f256d67871b9f8472ab5caaaa",
".git/COMMIT_EDITMSG": "9847f6f818ce87ff0a47751efce28084",
"assets/NOTICES": "c8351ff29da492724d7df82b05460676",
"assets/FontManifest.json": "c75353fbeebcd695f0652f190c83d46c",
"assets/AssetManifest.bin.json": "be89684de24632dbfc3150c7dbc8dd1c",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "a885d7b303a932b32a7327e53763cae3",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "7474935746d74bfe7eb48464f16bb719",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "bc68bac437b42a2ca8c4d2e97c3949e6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "f474cb79b1fd7ae794dc089603d0ae33",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
