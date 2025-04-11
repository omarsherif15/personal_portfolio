'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4af81a8a8ee4aa9145533c1a38f0d6f4",
".git/config": "1001811989d6a1d8c1fb0c78876cab9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "750ed3aa28229eb99a6591af5a799680",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dcc53b2fbbee1aa1b77c7edf8dd25947",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2bad7e03c09047fd3ab3308374ef7a37",
".git/logs/refs/heads/master": "2bad7e03c09047fd3ab3308374ef7a37",
".git/logs/refs/remotes/origin/HEAD": "82db5f49bfeeaab3204fbc194e447721",
".git/logs/refs/remotes/origin/master": "681494a4c046486c772a1de97249e84e",
".git/objects/03/156cc3185618f159a4564ecc7120dc24272dcf": "1ba168fd67dae042edcf4b9d1e67b3fc",
".git/objects/05/386aee5ad1e5637aeeffdb534c76d76dc1948c": "310d30c8ed126c850664986f1a6a9f44",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/35a45ff33fedc9c643a3bde8a24b059708ecdf": "abe014f6e15c6e72f48e58e06441f7ba",
".git/objects/09/9e5241829ab50c48d9c15d44719e281ee86c0e": "7f97f9c30b02583f54df74335172265d",
".git/objects/0b/252cacc71957124a9bf5da1f1ed03e6cf57484": "19fdf155811414a040d9e233f6d69c68",
".git/objects/0c/01206d3471b40eb01c6f9212f5c6ee9dbd12a7": "c98065d0d67d8607a16134bf28bfe6c9",
".git/objects/0d/92ddc934c53ce82f6a2f555b58e752f9296e09": "bec71677af6e52388cd541d773d1b2e0",
".git/objects/0e/2c22120bdf61b477e9a8ef81cf0bf35fb3dc1b": "03cd9a77f5203c7ce16c406d4e78d803",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/12/fed145bac493f15d789d2e4369d20fad6f2c9c": "2563b2723fe24f165538f99d421be0ff",
".git/objects/13/c4a04fb482123a76af121408b34266382dbd24": "897e8a4650a9c3ce319e8deeb3bb9f64",
".git/objects/13/e04efc2e19c562e20b8c9ef38cbd5edcec9db1": "50751608c2917069a7d71652a9fed8a4",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/18/29bb7f2cd8c3aca778a5f787e3512d8e043a3a": "4c105d9621ca511cba0177b013f2d08a",
".git/objects/1a/52c9cf0a6d6b45ea2fc83dd0da827252fd2dc0": "79813c304dda6662b122ec2d0832360e",
".git/objects/1a/562e6afcdc47ac1da911d19b2845bf9301815a": "2430b910dc9d0f0a22f152fab6b83354",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1b/06148cfa39fccc0963f17268016ab6ded4c92a": "8f336722dd14d0e6b49dcedb6598558a",
".git/objects/1b/99a5479361de8fcf6a3e491bb61d8a0550d663": "f493d4c3adbba389c570b01a11cb9f5d",
".git/objects/1b/9ef3e8e2578cbb1e7c2656b1d5f4fe1b97a68a": "5f51d98d76f9f2ed95eeab4a6c45c276",
".git/objects/1c/f467599c55317c8e5641d4c55cd5b8a4fdc4f7": "0a3c86fe5a3478cb46705c209e4debfb",
".git/objects/1e/2ca2be8f6cd6f96671e2dfde53f27999349ffc": "628d9aaad455c4c937dfad69b0590a53",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/c20cd0890ac49c59cee8a48a7fc36be8daa474": "36335722e1bb32946b9a6a8772d8c707",
".git/objects/22/10f6471ab68f37ea4de10f2b2ed809627fef24": "5fbce70ce5695b6b95949609557d0007",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/a90dd9f7e9294b6c34ea2f15aaef47f0a308a9": "84a32a0aeef862cd020e6a7a6b2b2c01",
".git/objects/26/75327a16dcba13140d9062122db5643c2384e9": "433f5f2b1d81106ec2fd14ff530ca910",
".git/objects/26/903b054f58b633e244ea7fd72fed3537c0159c": "4542f45cac0647218680e1dc70742ac6",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/27/86d896e98f4a6d07eec933c63d827def196f97": "81ef7e5f132348193927c75e47bd91b4",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/cca2fe2307afca127f8d2cefd7d547846f27ef": "82b3882a19462428e371a23dfee5b8a8",
".git/objects/2a/683327c94eb3581c2e2045d8951a04fdc73a97": "6fac7d1c1c02ca435e93f8f5eb727e60",
".git/objects/2b/b9f1ef261ddcfd2ebe438604e6bab048e1fc88": "78f2044e875daa4ed7748c4bea5c3d4a",
".git/objects/2e/15ec221e3b4fa4aecd2365dc92f54c7178f892": "2a8ba8156730eee98c9d7e30d5bebd77",
".git/objects/2e/45341ee7929e0fb62164a3f67cb762fea47aa4": "e25a6423b8db0a929335290527c2e41f",
".git/objects/2e/7b7b252dea0b071e196cc6f8cad2d908bb7c4e": "8e215be5332d30d718fdec776b820b3e",
".git/objects/30/03c85a0eddb3cb97d4d4038a85fd586cb2641d": "9c689ed393b9f09136458239e983dd78",
".git/objects/30/714c32304ffeb68c80bb59f42fddace0f4d623": "aad64c8f97cc94e2011c85120a99b303",
".git/objects/30/e3ed4895c024d9423ef037884e4b8dec30160e": "6776ef17219fe49ff685e3f747eec60a",
".git/objects/34/1d285c6f27263ae20f4ba08c8b2ff706526076": "75e65bd535bf8ab92312c0206a4c1da6",
".git/objects/37/90d713745bc74f7815179bd489a5f6deefc465": "2e29d95f66391ed64669c15aa8fc51a1",
".git/objects/37/d5784c681eb02a035b55109d2ee7d75d0d15e4": "339e4c1a748766398544a7673f95813b",
".git/objects/3a/0d2db941c2bf087424ce62e498199b95535c09": "db7e42da641eea4b4e4ebf3fcba19367",
".git/objects/3b/ea1c84d1146949202833d58b135ad11c5772be": "b9c159168af30eda0e660c7f9ba5cb25",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/3d/79706ee1a28d22ad4178ef4a1164f00d3abc73": "09725e8fe4910ba2521f02b4009f1086",
".git/objects/41/123222283ec904f5a86f7cb10501f2b596907c": "d7522d1ad97bb99fa0f05512152240e8",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/19bb523cfbddaf29c08bac121a6c3b78d5930b": "c5658a0a89fa55787123269ce4140d9a",
".git/objects/47/d2a1a9a6774dfe8ed7818e28bba5a1908f4edb": "3eb7c5e29e8735182f71cac175eccbb3",
".git/objects/48/1b82caf193ac8e767b40aca005590973991eb5": "49f24f54dd274c7ecd803d7d5340aacc",
".git/objects/4a/4f3ef42fee7d16e99a647eeddda43a172af8d5": "02df181cc12fad426b8c2708048db47f",
".git/objects/4b/6d131a5aa0e6ff72ba2d3e7b4926b52132ab11": "3912b8903c68c1a7c64a1edfeb1c15a8",
".git/objects/4b/fd8184ffb8c245590c82408fb02947d2034189": "3bf6347b7744cd71f1c17fc46bcf6fde",
".git/objects/4c/f0e2bdcdd428b77e0b0e67c2a196c297dc745c": "d485fe3316729b274ce70388e12b5f96",
".git/objects/4e/6dbf5e54b7ea54f62adf0a1c9cfe39644fbdb7": "b804a10f0dc6f080bbd579cb942d749a",
".git/objects/4e/b44dbe7d0ef71acb21c8c26e02929ef53b355e": "b9065d5b4df6d2055cb73a7c1f43e770",
".git/objects/4f/42fde0fa2f7e7a91d685ee59eebbe6cc90573a": "e2218732ea2ed42c8efa5396638b3a31",
".git/objects/51/9e0d65b0dee2c4be363a1dd2d6f08b6501c9a7": "649f476ef3769a888261aba9d1d3a9be",
".git/objects/52/a6c24f051fd68c3cc8dd6c8eed79bf2c9e795c": "77aa4f95c24e9498ee50f36264b87f3c",
".git/objects/54/03f8572d4c88b30a425945b5cca6a48eb00d5e": "506f3a84c4b01111337ed9a5b7c40871",
".git/objects/54/1a236c30a744a2e41d06b3c049330543eeba41": "2d0441653c1027bc3d1512f4268ea2c8",
".git/objects/54/8c707faa5feb0c149a11e751f727abc5ce87ea": "f55287372c8e0e2e03d5c7b003201d2d",
".git/objects/59/220728587516bd76c41b2e57c1f661a9026584": "76e55bd6ae8cc817c5d9936c3a20790c",
".git/objects/59/a7bcecab09e99cd90a0343625e17ef61f7ce05": "10860686823710b365e182713a4e061d",
".git/objects/5a/123d4a543dbb2ab6a067651a5fa2011f231941": "e77d520dbd13b5262dd52ff37bf7cc54",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/f12cc3e53c0d64a5d2861e43917112259f48aa": "ec3948b90154d78f9669be4a647b5b74",
".git/objects/60/4507b7ee710c3d4622cb3631d271db86d4b5ef": "ca01c4df53b4e98c2924cda85b6eea12",
".git/objects/60/555d412ade62f2b08a2cb157c380be801498bc": "ae6d52a39f550c29c72898e934acf0e8",
".git/objects/60/c2e229f53242764cbdea8d54f594f554c49801": "d78cd784b120d8ae6d57bd83b1698c39",
".git/objects/61/25131f10935d4027df11bc124183e112685474": "2cdaa3dfcf76be12186a1ea6ba1c7f4f",
".git/objects/61/5f8b17f3bbbd577a3ee0cb549c169aff238c9c": "4d2978ea9d3c3f5a69dd338ed52fdf8b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/af1ef463925bdca3ee9f4e4a3f9dd8a3e4f5bc": "288e8c90062c6209f64ce13fc007179e",
".git/objects/68/0a3dfd32ecf1d81b7781cd59030809bf49b27a": "898485af8b1bbb4b2cae4271779e7a9f",
".git/objects/68/82d65666ebc4dbb2254847952d631175e9d7ba": "2881ef725f66c69fa4164646b2f1110b",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/adeffeafff6d50087876d33b9742ee0c6a3566": "77976a82f66086354dfd5cd8111d798e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/a5f653439fed550cf09718fc2fa277c53b9686": "579736264651cb64e7ee09a31cdbcd06",
".git/objects/70/3dd341920ae0cb9f0595ce5f4befaff007378c": "050c2b87cd640e278598edb8d3c64090",
".git/objects/71/c57bbdb615428a7ca75088b429eddecdb6e4bc": "f0bede2c1f722684c24737c59a564f04",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/5258eb58ab775c10a6ae74e178d21a0b6e09eb": "75e9ed9d7b521bf3913de22fadfea1f8",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/c27731551402c5b9eece47eeef540618427865": "754ca8c6ca400cca77c80348ec143cd0",
".git/objects/74/f83d21add9329c03f6422db0a0ff7c57b4c27f": "803a3c48a293a258645d5a1c2d3abb16",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/b8d8147112912b4412db159db180264a744027": "faee6b62af8e60bb69b338769e837970",
".git/objects/77/fa01a3d1f87a8cd2ccc622dc2e9abf03b2b9e7": "48c7baa5d0bfb425ca469e81d507f4be",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/7b/5046a399a6ad8f2b597dfeca074740518ce6c7": "f31b8acb361f7f143493b010d3fcc6cc",
".git/objects/7b/c5fff180f57a68a1beefd05ccfb70b9be05125": "9c8df6b71cfad2000d287c59646d2c8b",
".git/objects/7c/fb771cf3f8165f9ffe13f533749da0f43b1b57": "ed642887e155fb9d92fb90b84e17dcb4",
".git/objects/7e/5848360fa9e6296ee1e187973467a0dcdc382d": "4a96ad97cde844dd5b5c7c16a09a7e30",
".git/objects/82/13500e597792b83a6da4b5e81fb0c6256952a8": "3ad72475ea722b0ba43ac0c6f8cfeceb",
".git/objects/82/1d29b71d78db38dfd45b25c704ecd81a1d8f0d": "37c8e499d8ae81f78e88b5b8cf28085a",
".git/objects/82/c83c42983e12d4ce104a0b99a2cce878630f97": "90a29bfd5399666b3e313a0f006e532d",
".git/objects/83/196333184e5ad19842b2c0d615263e354fb179": "8799f901cd8c8144ddd4532f6d8ab5e8",
".git/objects/83/78a41a1d5f5d6a95e6f6b3a09bf462b9b13d1a": "cbf585ad5569d9caa394c01fbf69eb89",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/9d66c99a66ab2d6ddd5b36b03fa423ad86be86": "e6d6415dcd4f5c5408210b64549da927",
".git/objects/86/bf95c2b1eff5c94e4ea677ab9cf2fffee62bc3": "5df32ef3843ad5c79f60cffce7036431",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/309b5afe31d234cad9d8bb43ec4cc02144abb4": "f3e58322f1973e9841581b13c9d4d1ba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c5d6c1ee1cc353996290e90df03e208381d0ff": "adcd6b408a4ebdeb933141137e4b0d63",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/96b7321abfbe39af76c929d8f1c1bb06325fb1": "0426e1668eb34b112bd9cf1320ca47ea",
".git/objects/96/30ccd9c142caaee84fafabbb837d7bc7a6db2b": "bd1b3eb7d5fa7860e601d361606d1fa2",
".git/objects/96/6c0df01f758d3059a6492252f4044969ccec26": "23d539909a81620ce9af201ee9f57f59",
".git/objects/96/dca3c9a56769a3e4139bace85c28b961297d0a": "c87b5497f5f845433a25254f85e35a9c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/23c9af5b089459d5270d238b5a4a7c2fb63493": "9b61414061db44289712a529d67b9362",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/9c/3f1c4d678a30de2df985ffa13f1082886b6eaf": "66aa11e7ee67e8d0b9a34514f4ed028a",
".git/objects/9c/f28a525e9247e822d9edc3c7daa195b0f501f1": "9a34b5a78d0b57676308dc3dbeb7de06",
".git/objects/9f/653e40bbe3e6ab08cc71c19af31cac2370d5d1": "2c7a9b087371f04acbae5e6bacc938c8",
".git/objects/a2/a4d1b0d6a6c14b9b3eda724c327bd2ed27613d": "ecf3158a4b232a3ed0a18b454ceb95af",
".git/objects/a8/c2eb188327077e1b8aeb27f4866db3d51acdd7": "4db3cf94deddd359352660a20f5615e6",
".git/objects/a8/cb751d2f57f05da6dc912b944781b8255c6c53": "246c167506ff3ea2ab464f4f4d7c6055",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/d05976d537606c622caec1d0710d7a1e06dec1": "bd3b249b16d4afeb076773489005d460",
".git/objects/aa/1b545183dda09805d8d1e246aa407b5b5d3f8f": "e6ee8461db8a705b49a3f25a83441915",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/4494a27804a69116fe56f0345d1043d1afd6aa": "7a6ff3dd29629475763fbd3953230a6f",
".git/objects/af/9f6c1c42b9cd2983873dc8d49a2580783e964f": "7ef29c3df1a099b4273c4839d4ccf388",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e9d643dcb1cce2ac979314ee3ddbae604b5f4": "5003e855a07200a3b4ed1869e33308e3",
".git/objects/b8/bb4e2b968d14ed8a542f4f69cf56ffb5cac9af": "96ca7d60417110eb4b7464ceaf08e7d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/47ea7d368d5a2a859c4641ca676c42ff7aad99": "f22427bdee09a0c5f06094e39a346c0a",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/4d164749189e4bb300701ed3704527da7779dc": "790acdad3a8afe735a6e353a1d9651a7",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/338b888eca8eaf56ed87a79827d9ac17e62439": "b37255f8d901dcd5a90fe4b260468d80",
".git/objects/ca/fe2abf473e6d65cf0eaa096efe72a451f675bd": "e919343f3706e9ee5e9d77704efa6e16",
".git/objects/cc/9b9c5de5c1b1dcff234d7c903a423be03be13b": "9a47238dccd47294c52e2fb58273db64",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/e0eb3bb298e4170adaf1e291c741317cb3128b": "84193053c2b67035ff7d28869a3ba020",
".git/objects/cf/9204cdb8406403a51c33a5d10e56621ce6279f": "d3d3af2a462216449120978a5a0f06db",
".git/objects/d1/49cb7927a3a83604fe2fc2428eb18719f98683": "00d22522dcdc44586a07e34790a3c3d7",
".git/objects/d1/66685599d3ce24458924aba457ce1141fcceee": "343585f21efc7ae4fc8836e801ae8186",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/74522c7280c1c47ccc1197c0f1bcc6c004355e": "753683b6348dcd13dd074df465129c03",
".git/objects/dd/b66e2f009f017b2d6db5c566e631ec833a2e07": "2bdb40df79fab15bf5104cb8d0fa4517",
".git/objects/e2/390769c737247d67e4486ca35bc5e2522d5f0e": "9af02e0e9baacbc49ba6da6bc924afb1",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/e72ce2628ffba471fb4c8a455397116e96bb68": "a6cf5e091160e33dcc81f589569d0e8f",
".git/objects/e9/392c23f851261fad42d087863ccfcbf577d4b2": "f7948910e7c7b909f4c170572766760d",
".git/objects/ea/01586b5788dc059360a71fbe1f93ba858f126a": "de933b7234d4d00322b4ff7f4631cfc6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/390e95584ddd44bf19bae1228caf728b588245": "0100461c802ee9cb0198f2064178de21",
".git/objects/ed/13530f649155721bd7256a5ceb57ea9101bf03": "645ce715f01acb0e0dbb746fb14c26a8",
".git/objects/ed/7f0ea4f5693e9fa5b49410875abc551e788a94": "bfcc5937f84e6021c5bfc7e7977b0b37",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f3/53a7b7fda04c321841747f36a233cfcf3cdbd9": "1e91673b3cc7201c68f460847f701b13",
".git/objects/f4/b6e8d1442ab5dccda765ac2141ce1eb67e2f0d": "7a296b85e67274d935a6ad23f4f357a0",
".git/objects/f5/49bfa396b89fd1efedb2aa46f36c65b3059797": "b301305924abbfcd86b049efddfc3d96",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/f7/ec9b92d575b629b92bc339e484cbf91500c11a": "df0c201fa73763e09653b943116e9cce",
".git/objects/f8/2f24a88b9067e87996342a7cd9f771b6c541db": "7ca7b98bf5e29f652e5f7cce32f16ff1",
".git/objects/f8/e53d3ba9a4f6daa31d29b7f460c69b40031a49": "e6695de86ba88b9c02b4a152ac466be6",
".git/objects/f8/ed75ee6299094f64453a1e5ad9d7ee1204a2f0": "ac35f2137dafcc5edd629fb78bf24a60",
".git/objects/f9/a4b96291e329a8971c85f4e7559d4eabe0f695": "553a6e538111b66fdfb3af3213bcc9a1",
".git/objects/f9/e368cdf1bcf84816e692dfe11d8f3ea7494052": "d6c154d4381b82bc20451d26f1b4db63",
".git/objects/f9/f44b55215ca10711c193d534e8c669ec4050af": "48f7adeadcd388caaeb374346a35596a",
".git/objects/fa/65681443338c66f93adc0e58c9d70e4b37fd4a": "df31f1fd7866a29924408e68cd748099",
".git/objects/fa/c92570f8c68225fce3d74c99958d034ea8917d": "2f98c1d22ced4092614a8cce840ba7a9",
".git/objects/fc/ccdf07e1bd7bd6763dd0f54dfe43e787198c8a": "2fe0f780fdc6867d7b665802a361ce09",
".git/objects/fd/b33edf9ab819b8831c9c4568cc93ec939354cb": "4e0c188959f250adcb13f559fa4ab933",
".git/objects/fd/ee53bf62966c1223f1fe14c69dfdf619b8d505": "026dd7b4e25a0eb2a549acad8d7efb8a",
".git/objects/fe/d86cd61778377c127d7dca050d2144917d0ed9": "0a5f5561c521953c5c0bb1427bd59574",
".git/objects/fe/fbdf46d4283e0f31cab79c5f5947f0d0e135ac": "580d6255ae1a4ac0e7ea1b095411af36",
".git/objects/pack/tmp_pack_lm1B72": "71c853c6a060b572803716445e093775",
".git/ORIG_HEAD": "7e4ba44e113815fcdb8804f09f5ac25e",
".git/refs/heads/master": "b8e578cedda6c5d2cfbc331f4db103d4",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b8e578cedda6c5d2cfbc331f4db103d4",
"assets/AssetManifest.bin": "7eb9bf23c20c59f82fda2a1965449a90",
"assets/AssetManifest.bin.json": "4460f536075e28d5e92ab506274ff30f",
"assets/AssetManifest.json": "843c5325d2d40fb6173b99f6dc601d3e",
"assets/assets/Animation%2520-%25201737840934261.gif": "bfa70583dbc1fa268e83b63b43a8ce71",
"assets/assets/images/avatar.png": "7ff563404caafe50ef55695c11548d8a",
"assets/assets/images/me.png": "a02d1c81739fc87ff2cf2a6f732b339f",
"assets/assets/Logos/avocado.png": "9d0ef9aca9cc0281a3ff6ca632f19cc7",
"assets/assets/Logos/brofa.png": "e76bee1d3d3664ed88757dbf60c2367e",
"assets/assets/Logos/elakaber.jpg": "6dad1f508456bec9acbe923bbf532e3c",
"assets/assets/Logos/friends.png": "ac355204a9225c97cd441b69382dde3c",
"assets/assets/Logos/match_egypt.png": "48cfecedd29428abd2ba91da4397a383",
"assets/assets/Logos/mhalatko.png": "5604efdacc36bc2e052289ab4f88ecff",
"assets/assets/Logos/shopmart.png": "ebac2e690be59f9b920eac2fb04eefef",
"assets/assets/Logos/vegan_market.png": "9fe6010c0794014b4ca75c9f8e71e464",
"assets/assets/Logos/whail_tail.png": "a6b419564f5bba883d8de9a48a794216",
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
"assets/assets/Mockups/match_egypt_1.webp": "2ffd4b4be94586f9036e44d16eb8ecc6",
"assets/assets/Mockups/match_egypt_2.webp": "83852fd35ceb4d9933e19a95ac598a3d",
"assets/assets/Mockups/match_egypt_3.webp": "e9bbe0d581d71076c5c646837019e59b",
"assets/assets/Mockups/match_egypt_4.webp": "d0d1320d4e9aafddbcf3fdcc5b69d07d",
"assets/assets/Mockups/match_egypt_5.webp": "8db7a719c44ce66bfb69dc4d53ff32a0",
"assets/assets/Mockups/match_egypt_6.webp": "fb06581a8817ec79b10a578a904333a2",
"assets/assets/Mockups/mhalatko_1.png": "5db6b21a4df51fe05b80e51d235e1421",
"assets/assets/Mockups/mhalatko_2.png": "14afc3b454f0e1b4ddf7f37fb9c1b1ad",
"assets/assets/Mockups/mhalatko_3.png": "0799e98625dc21b9dde712aeccaa2f78",
"assets/assets/Mockups/mhalatko_4.png": "66d6d2bbf46f69bdaba3d9159712b93a",
"assets/assets/Mockups/mhalatko_5.png": "f7c007ce9896df5e14f72e7691d6baae",
"assets/assets/Mockups/ShopMart.jpg": "a268c76beb44d556fc7ddcc97934754a",
"assets/assets/Mockups/VeganMarket.jpg": "69d075ad071436a9641db379a5d5581b",
"assets/assets/Mockups/whailTail_1.webp": "e91a9ee8b2285b1bb496f7f9b544a35f",
"assets/assets/Mockups/whailTail_2.webp": "94322072c0ec58e87975b7ef68d6ccae",
"assets/assets/Mockups/whailTail_3.webp": "3d82041a4c695f45e84f024bec9d2478",
"assets/assets/Mockups/whailTail_4.webp": "8dfd80a69067f3885b3b06dff24e0060",
"assets/assets/Mockups/whailTail_5.webp": "cfbdb6324043e1cbece92b4b4e79c2c1",
"assets/assets/Mockups/whailTail_6.webp": "5db1535711677a1c3e468f6f448dc0ff",
"assets/assets/videos/Avocado.mp4": "22c27210622fc642540a2141393e1cfd",
"assets/assets/videos/friends_yu4bzK1n.mp4": "46f1c88122f2f5bc0cc22d82f97ab7d4",
"assets/assets/videos/Shopmart.mp4": "8eb87cc325a5f1dbc8bcbd6d74b36513",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "08cc929e9ff08eac6d733fb47e245cba",
"assets/NOTICES": "f5476aaa2c3028c1c3d693c03271b1f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2418d3bcfaab720211dc754322099ed0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4bad328c9c3d78dbbd6528fb5158e9ee",
"/": "4bad328c9c3d78dbbd6528fb5158e9ee",
"loading.gif": "bfa70583dbc1fa268e83b63b43a8ce71",
"logo.png": "f7bf4b146db878dc33758510b59e9fb9",
"main.dart.js": "b9ec592a9a6ea3ddce453a61be195882",
"manifest.json": "9cc5002128a3005bf4b0f4c1afba1651",
"myLogo.png": "a25b95c18025c38256e0b308a5b8be23",
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
