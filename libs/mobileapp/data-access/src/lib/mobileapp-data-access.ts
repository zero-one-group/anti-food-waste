const product = [
  {
    id: 1,
    productName: 'Wortel 1kg',
    productImage:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    productLocation: 'Surabaya',
    productPrice: 1000,
    productSeller: 'Depot Jaya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'official',
  },
  {
    id: 2,
    productName: 'Donut pink',
    productImage:
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    productLocation: 'Surabaya',
    productPrice: 5000,
    productSeller: 'Dinkin dinit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'official',
  },
  {
    id: 3,
    productName: 'Ayam tepung',
    productImage:
      'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    productLocation: 'Sidoarjo',
    productPrice: 5000,
    productSeller: 'Catering nikahan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'official',
  },
  {
    id: 4,
    productName: 'Tempe Goreng',
    productImage:
      'https://cdn0-production-images-kly.akamaized.net/fUvI93WoeMZZlF36W5XhC7yDd_I=/0x345:5792x3610/673x379/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3493625/original/011678000_1624676204-shutterstock_1985813441.jpg',
    productLocation: 'Surabaya',
    productPrice: 0,
    productSeller: 'Rudi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'neighbor',
  },
  {
    id: 5,
    productName: 'Nasi',
    productImage:
      'https://asset.kompas.com/crops/ycFti_W8Zl_YfuQzg-hQ_MORK5A=/22x34:968x665/750x500/data/photo/2020/08/17/5f3a2a54e2ffb.jpg',
    productLocation: 'Surabaya',
    productPrice: 0,
    productSeller: 'Santi ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'neighbor',
  },
  {
    id: 6,
    productName: 'Ikan kalengan',
    productImage:
      'https://d220hvstrn183r.cloudfront.net/attachment/83788805946329996891.large',
    productLocation: 'Sidoarjo',
    productPrice: 5000,
    productSeller: 'Joko',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper lorem neque, id commodo ligula dictum a. Nullam finibus tempus aliquet. Maecenas ac libero sodales, rhoncus justo at, maximus sem. Donec et turpis augue. Mauris sed suscipit mauris, in feugiat est. Vestibulum interdum vel est vel auctor',
    type: 'neighbor',
  },
];

export async function getProductFromOfficial() {
  return product.filter((p) => p.type === 'official');
}

export async function getProductFromNeighbor() {
  return product.filter((p) => p.type === 'neighbor');
}

export async function getProductDetail(id: number) {
  return product.find((p) => p.id === id);
}
