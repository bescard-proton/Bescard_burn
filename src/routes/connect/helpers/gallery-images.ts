const createClusterImages = (clusterId: string, imagePaths: string[]) =>
  imagePaths.map(imagePath => `/assets/dashboard/clusters/${clusterId}/${imagePath}`)

const shuffleImages = (images: string[]) => {
  const shuffled = [...images]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

const CONNECT_GALLERY_INITIAL_IMAGE_LIMIT = 60
const CONNECT_GALLERY_IMAGE_LIMIT = 96
const CONNECT_GALLERY_GIF_LIMIT = 8
const CONNECT_GALLERY_SEGMENTS = 40

const isGif = (imagePath: string) => imagePath.toLowerCase().endsWith('.gif')

const buildGalleryImageStages = (images: string[]) => {
  const shuffled = shuffleImages(images)
  const gifImages = shuffleImages(shuffled.filter(isGif)).slice(0, CONNECT_GALLERY_GIF_LIMIT)
  const stillImages = shuffleImages(shuffled.filter((imagePath) => !isGif(imagePath)))
  const initialImages = stillImages.slice(0, CONNECT_GALLERY_INITIAL_IMAGE_LIMIT)
  const finalStillImages = stillImages.slice(0, Math.max(0, CONNECT_GALLERY_IMAGE_LIMIT - gifImages.length))

  return {
    initialImages,
    finalImages: shuffleImages([...finalStillImages, ...gifImages]),
  }
}

export const CLUSTER_IMAGE_GROUPS: Record<string, string[]> = {
  '0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4': createClusterImages('0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4', [
    'ff1a2b5c13b54c4e94b97e0f74ae9d6b.gif',
    'items/1825ba9e029c4fa9b4338aff862cc8fb.jpg',
    'items/5942bd7e695349e491630e555d1d4863.jpg',
    'items/8b0765701ccc4dc593d7379f56d6dc46.jpg',
    'items/a4a7b0da1fab41a48ceaed3cb06b058b.jpg',
    'items/ca430c0bc1874b11bf19bf675229becd.jpg',
    'items/e6edacb9b15e405088e104e9e12b5452.jpg',
    'items/e8f6787a5c114f59ad1d92a31c81525c.jpg',
  ]),
  '0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd': createClusterImages('0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd', [
    'b33280155c9f4c17bbf12dac5f646a48.png',
    'items/040bde0d087c4b099a176e7ddd9e3862.png',
    'items/052cda3ee2d94aee9fc1e0deb7762c6e.png',
    'items/559fb33f476146efa5576cb35e2f1565.png',
  ]),
  '0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e': createClusterImages('0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e', [
    'c91e84ba3e384722932a35587a099506.png',
    'items/55e1ef76e6fd4395a7f8e3fc4efc722a.png',
    'items/633cc30919fd4f57ac539b26703bfb43.png',
    'items/cdc3956fe6934a348c5b5def2d8f6894.png',
  ]),
  '0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69': createClusterImages('0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69', [
    '4c911de78ffe43d5a7b8e4e6215b35de.jpg',
    'items/173fe2be16fa499dbfc523d1581e88fd.jpg',
    'items/2ad2e4c0b65f47bdb5f7a83aacf913e6.jpg',
    'items/457c0ee5639f47338a1966ab0c9af15e.jpg',
    'items/6b931430f47041578c3c52440c628a50.jpg',
    'items/75a24b4724c14e50a33e06b1926bfb63.jpg',
    'items/ef89ef0b3b844d9b82bf3a2ff34531c3.jpg',
  ]),
  '0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb': createClusterImages('0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb', [
    '07d63c750c5f4bdbb01552a1186a3902.png',
    'items/1910b20a40e04ce8933889b086266536.jpg',
    'items/26fde6eee6df4c47b97946ce001a8730.jpg',
    'items/39711f573aa74cbd96d5f77dae1c2a22.jpg',
    'items/786009d01a654ce69649983f4d394771.jpg',
    'items/7f44d264768042abb89f89a43d4d5da4.jpg',
    'items/ad20cc63cf5d4822a0e5c013298ab1f1.jpg',
    'items/bd00ab72994a413392f712c9e0f89581.jpg',
    'items/fc947284755c405db9ff958d012decd6.jpg',
  ]),
  '0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69': createClusterImages('0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69', [
    '7c1f580496884a9f90b747549ca2cf40.jpeg',
    'items/02e741f7d2e041dd80ff33108df0d0ed.jpg',
    'items/48fc576e85f2417d960951086ce711dd.jpg',
    'items/5c85e993193f47019d861b1c9aca2343.jpg',
    'items/edf0349948b44a098430a3417e3fa71c.jpg',
  ]),
  '0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f': createClusterImages('0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f', [
    '2b853a33198d4f44bbc6b031ce5e8161.gif',
    'items/3eb8729be7a64909ace1ee998b29a96b.gif',
    'items/7c4caf6b924d4fe3b4ffe40de080d7fe.gif',
    'items/a49c04898bdc4595a6562e0f731e47af.jpg',
    'items/d58776c6d3b04e00b30469b3470c1001.jpg',
    'items/efaec448a1bf487fa422ef000c083c01.jpg',
  ]),
  '0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c': createClusterImages('0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c', [
    'd00bac5e3d1947e8916ef11a52dcbfdf.gif',
    'items/1976ecfbc9114061a7d021097850ef51.jpg',
    'items/9697a3a51831457899b782ceea62ae5e.gif',
    'items/cfb8150b099140f8bfe69cecefa69a93.gif',
    'items/d6610bf244304c9ea1d2c3d0d358968e.jpg',
  ]),
  '0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11': createClusterImages('0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11', [
    'fa80e2b4fa054bf6bdadecec233d434c.jpg',
    'items/1592a33276b24a288db6b85dca0c15bb.jpg',
    'items/27d498c9b6b04bb7bed0dafbab3448ef.jpg',
    'items/392f8f7fc1d94181be3bda0909279e8d.jpg',
    'items/84e9296be5da4df6bcc03faa4c626cd0.jpg',
    'items/940fc28c40b647d28e2882a38495bd35.jpg',
    'items/b272e3ce808b4842a25384df5ec85209.jpg',
    'items/e01f5245f48449109e4456781a33aee8.jpg',
    'items/f9ebe90fbeb345d4add4c985d6573140.jpg',
  ]),
  '0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94': createClusterImages('0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94', [
    'fa2ef9301b614cec8e7ba9c9710e2fae.png',
    'items/18aa448e7d9e4585b65152394deedea2.jpg',
    'items/35affcf8bec5489bb049f889f8741793.jpg',
    'items/40f04d376c924592a32c9a13ed1a9a5b.jpg',
    'items/7a0ad5dca020415396dec494a492eb73.jpg',
    'items/a05c992f204f485d8555e5d50b0bf4c9.jpg',
    'items/a51b9119439048c1b981bc294b5f0425.jpg',
    'items/bdacb1fd6045494e80cc8eba9f474de0.jpg',
    'items/d2027650d7774a0d8d694140c8c0bf49.jpg',
  ]),
  '0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde': createClusterImages('0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde', [
    '889a49eb398c46f080c798ef41913849.jpg',
    'items/1fb78ba28a4f4c5da400d502e93da925.jpg',
    'items/3b87ab27e8b44af79f57e17f0495a1d6.jpg',
    'items/56aa75f53930432f8d6f746abd506f3a.jpg',
    'items/8d8cb5facf9240c8ab28b7c1e58a4a58.jpg',
    'items/cec8d8096e6d49c68d0fe11f577ef77b.jpg',
    'items/dfbc7fa6c56c4e3aa6879f776e64f611.jpg',
  ]),
  '0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc': createClusterImages('0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc', [
    '746428a9aca84f90956413b1f8a3a291.gif',
    'items/6693cbb0b5394b2a9f2277970c9bfa6a.gif',
    'items/9745e2c2be6548169aba0cffa5c6d4d3.gif',
    'items/d138d680ee524d1887ee1aecacdced8e.jpg',
    'items/e7ec0ec577ec47109ea8fe6e6ae5d9c4.jpg',
    'items/fbf55a00a3fa45a1bca6c041c50e97df.jpg',
  ]),
  '0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20': createClusterImages('0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20', [
    '737ea3eae53b4f8394405695ed1367d2.gif',
    'items/0d4b1e2a4b59432889a91f614b9ce74b.jpg',
    'items/131593ef7a45468ebf34f0b7b40428bf.gif',
    'items/5012c8f02c8d4698b8a95fb8004e05d5.gif',
    'items/9b72c23029c94044804d449985a94572.jpg',
  ]),
  '0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507': createClusterImages('0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507', [
    'd048ee882e7c4cb38146bcb8e20c6fbb.jpg',
    'items/14fd5c91a7af41218d52761b0e0bc3fa.jpg',
    'items/1b19250d509a4585ba0a67aea9540972.jpg',
    'items/2999e9b4a0974bc7ad377a4d215e49d2.jpg',
    'items/3e1be8d299f24d4fa648d8ebf8c3e28b.jpg',
    'items/5d5960ef27624c688b0784647daabf03.jpg',
    'items/6e6ab9f859ff4e68bbe6c196cd1fa09b.jpg',
    'items/8506ac01690d4f96a530fa113589b3ca.jpg',
    'items/d15a7d7b5ceb428089563695863b21b8.jpg',
  ]),
  '0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c': createClusterImages('0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c', [
    'aefbdd880b8a4d5c8a91156a7ccf59b5.jpeg',
    'items/266c47114ccf41b0a696c4a56fe35f0f.jpg',
    'items/29058c2a866e48b1bc050bb9ca920ee3.jpg',
    'items/5048eeed112948aca57c6e925c2c80b2.jpg',
    'items/6e16b549cd2b404d8453270292d008ff.jpg',
    'items/9bafc9150eb44bb7a265202cb7201e80.jpg',
    'items/b526780a302b436dabddd3ce39bad279.jpg',
    'items/b5b5931c390840d392d00445b2d352a1.jpg',
    'items/df5a6aa668124f4f8689fb0ef93a4b4a.jpg',
  ]),
  '0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5': createClusterImages('0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5', [
    '7a453701c3bf4f8ea485c58355710fe5.gif',
    'items/078c11734cc64edca494cf75a287887f.gif',
    'items/144636034e5a43b59f8c3b6be58c4184.jpg',
    'items/7a46d83050f34b0a8c45c588de7d8e70.jpg',
    'items/e660fcdf56784b87aa89e41892268e54.gif',
  ]),
  '0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170': createClusterImages('0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170', [
    '2c77426a0a7a4991b47ac2fa7921d971.jpg',
    'items/0ffc2a40ec9d42cbad08fd44ea0264da.png',
    'items/3e42fbde668148e190fb0919fcbada7e.png',
    'items/96578256baff40b9a802832f78870609.png',
    'items/a2cc7ebe6334448e8356aeaaf030564d.png',
    'items/baf600e31c7d489b9bccd07a344dab07.png',
    'items/bb0afb137c744adf8879ce7b791ba978.png',
    'items/bcc6a32cac7a41c5a0aa431cee9a060e.png',
    'items/f20707352439469bb3ef42bd3c2e7442.png',
  ]),
  '0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5': createClusterImages('0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5', [
    'e41202a1537448f884a651466b6e9df3.jpeg',
    'items/a8133964874549558ef318f8765da8c0.jpeg',
    'items/b05f0ab686e841ba8fc2d39ec63d8371.jpeg',
    'items/b5511699b6224a549bc50b16ce3af5ad.jpeg',
  ]),
  '0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544': createClusterImages('0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544', [
    '0a7a8124234640ad98face84727435d6.jpeg',
    'items/0e4a371acbb44e2a9685b39618e9e402.jpg',
    'items/2227fb8c5f8440be93561d6a55a49072.jpg',
    'items/29ff1179bb3b4fe49804a0ab6810d2fb.jpg',
    'items/4b9646f84c92407a8f66e608bfdab24c.jpg',
    'items/4cef904de16f4b55b1729113eafec9a5.jpg',
    'items/763e259015e649d7abed43edef393d1c.jpg',
    'items/aeb59dd0142d454687ed199e51cb5e9e.jpg',
    'items/f81a9b218bbe4ea2a0496630a1fa4271.jpg',
  ]),
  '0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0': createClusterImages('0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0', [
    '5aca78b4b73f4c198a3d8336ad41cdcb.jpeg',
    'items/4c24d36e282d44fe928b552eaeee9d5d.jpg',
    'items/6a8785036fe9459493e2a68adf5ae3ff.jpg',
    'items/6f76b69f4cd046a1b773c52b5b30fed7.jpeg',
    'items/895e15d432634e9a80cb6ff710966af6.jpeg',
    'items/f00aae86d50543158c608d659e05a9cf.jpeg',
  ]),
  '0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897': createClusterImages('0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897', [
    '7fa0ad2c4a6b4dc29a49447c078fd182.gif',
    'items/24d59a1dcf014dfbafbbc3c5accafa28.gif',
    'items/45faec00985e42d4b1da3fe7775ec1a7.gif',
    'items/c97675d424f34e8d8c524deafcd812ff.jpg',
    'items/fba1c1c506ca4e32ab18908008e8b6a3.jpg',
  ]),
  '0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94': createClusterImages('0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94', [
    '7d7a072264674ed782728ae867757d40.jpeg',
    'items/03ecc74120544d9685b7ca629c4d68e2.jpg',
    'items/05800832de614cef92df5bf282d69f62.jpg',
    'items/16b3a35ff79440bc978f47930a16e469.jpg',
    'items/1983e38eebb449e8838b9c14f0462181.jpg',
    'items/1aa7d8c726a4462cb733569a1364dd7b.jpg',
    'items/21aa72951cff498da7a4550bbf5622d6.jpg',
    'items/32c7e8dd4ad34ea9800bb020d6ead0c4.jpg',
    'items/3fe5c7bdc9ba4162a94bd978e82a5384.jpg',
    'items/4d430a5b1bd043bfb295731da8ba4e4d.jpg',
    'items/4ecdec5526a04ab4bce8fcd0af45cfe0.jpg',
    'items/624350e4909e4ba48136ce28d65c2d29.jpg',
    'items/660afcfbc0ff49d6b847002e97edb0bf.jpg',
    'items/6fa95eea90744cb8a263894f2f03ddae.jpg',
    'items/7f2b43bebeb04b909f8df2536bf7eb59.jpg',
    'items/8007fd70accc40f2a8072425c5f6d4c4.jpg',
    'items/85a02a304f2a442fb5e756752a7cc9fb.jpg',
    'items/85a4e5c674b14f6f8133289d19a3b0d5.jpg',
    'items/94bad306ddfc45d6a07827e6ab2d06c9.jpg',
    'items/a2e3fe3976474b3f9bea37073754a1fd.jpg',
    'items/aca22238c7e243cebe90d549a8e1a1f6.jpg',
    'items/bfeaac78cb774c15aebbc4deb8d31111.jpg',
    'items/c83e4004ad98464ba09a2d65c5dc1c3f.jpg',
    'items/dc9cb7a8609d4a23b04e83842b87cefb.jpg',
    'items/e826bef2956d451995c1efc214d5d855.jpg',
    'items/f0de4ad62fb641db89a95b7f5c1ca187.jpg',
    'items/f7c7b2be2bd245f1ae35fc627f2f5fa2.jpg',
  ]),
  '0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3': createClusterImages('0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3', [
    'b22d27625c4b416aa0f477f98b84ec19.jpg',
    'items/0c4f38327ed04a27b7050565b5ec5179.jpg',
    'items/10bf362e25df4e48b545892d939555a2.jpg',
    'items/21a4ab502dc64b969bcefd284de75e35.jpg',
    'items/2dcc3748a5db4b97901077cf5f8f084b.jpg',
    'items/50456dcf92aa49f6b705bb42d4f4f11e.jpg',
    'items/5df07f2b8d13495b9399867928d419d6.jpg',
    'items/9e6f5e024c7746c1bfe1be726b7fbbcb.jpg',
    'items/df73a60aa9464931aceb26ed28757c93.jpg',
  ]),
  '0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9': createClusterImages('0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9', [
    'ba592f52f27f42a19a8d47e0762c0a98.gif',
    'items/3538b84472bd43f4ac63fe9b09b099e4.jpg',
    'items/512bdc955ec94413903c0afd3c97f4e9.jpg',
    'items/738fdc445d4f4610a72a10861b2f2ce5.jpg',
    'items/74573f3ab7bb4b2b89b3656e73592df4.gif',
    'items/e2f103ae785446bcb5111ba2735fe9ab.gif',
    'items/efcf4e018db0458eac71cb25e5ea2aff.jpg',
  ]),
  '0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6': createClusterImages('0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6', [
    'a50ee4c75a3d42adbb8c0be795627b09.jpg',
    'items/033b072d11314777b2e9cd91633c7282.jpg',
    'items/748797ca32754fc8b70ea038f4d0ea3a.jpg',
    'items/7c642206b45546748dbe1cf9df5300c0.jpg',
    'items/b1a5a48ddf794355807c1f71bc3984ff.jpg',
    'items/bbcdc109b56547dcb7c801062a27a0a0.jpg',
    'items/c49d5305fb104941b2013c36cf554242.png',
    'items/e43f5b19a72b4144ac1ec7c6a70881b2.jpg',
    'items/f1db46e252f944a8a9b55d5d93144b20.jpg',
  ]),
  '0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095': createClusterImages('0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095', [
    '450cbf6039134103aa77aa6ddeeeb923.jpg',
    'items/21a8071eaa3b4f5595601077d9fb4720.jpg',
    'items/683450686487406aa154b6427fae6464.jpg',
    'items/6b23904a564f4422ab782585cec1cf01.jpg',
    'items/71aeccc3a26147cc87995577163667d9.jpg',
    'items/d91f7347ed6744a3aa385d4c6532062b.jpg',
    'items/e9ea85f35edd426abaaf21085c19d8a7.jpg',
    'items/ef2df0444664487db116ceef1ac2c561.jpg',
  ]),
}

const galleryImageStages = buildGalleryImageStages(Object.values(CLUSTER_IMAGE_GROUPS).flat())

export const INITIAL_IMAGES = galleryImageStages.initialImages

export const DEFAULT_IMAGES = galleryImageStages.finalImages

export const DEFAULT_SEGMENTS = CONNECT_GALLERY_SEGMENTS
