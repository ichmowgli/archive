import { NextRequest } from 'next/server';

export type Item = {
  id: number;
  title: string;
  price: number;
  currency: string;
  company: string;
  category: string;
  image: string;
  href: string;
};

const data: Item[] = [
  {
    id: 1,
    title: 'TOUCH PBT Wireless Mouse',
    price: 69.99,
    currency: 'USD',
    company: 'Lofree',
    category: 'Tech',
    image: '/images/touch_pbt.png',
    href: 'https://www.lofree.co/products/lofree-touch-pbt-wireless-mouse?variant=44242527551707',
  },
  {
    id: 2,
    title: 'Togo Sofa',
    price: 3111,
    currency: 'EUR',
    company: 'Ligne Roset',
    category: 'Living',
    image: 'images/togo_sofa.png',
    href: 'https://www.ligne-roset.com/de/p/sofas/2-sitzer-togo-1178',
  },
  {
    id: 3,
    title: 'pocket operator keychain',
    price: 10,
    currency: 'EUR',
    company: 'Teenage Engineering',
    category: 'Lifestyle',
    image: '/images/pocket-operator-keychain.png',
    href: 'https://teenage.engineering/store/pocket-operator-keychain',
  },
  {
    id: 6,
    title: 'Washer Ring',
    price: 59.95,
    currency: 'EUR',
    company: 'ORE',
    category: 'Lifestyle',
    image: '/images/washer-ring.png',
    href: 'https://orejewellery.co.uk/products/washer-ring?variant=45719629988119',
  },
  {
    id: 7,
    title: 'Clever Dripper',
    price: 34.90,
    currency: 'EUR',
    company: 'Clever',
    category: 'Coffee',
    image: '/images/clever_dripper.png',
    href: 'https://www.cremashop.eu/en/products/clever/coffee-dripper-l/11965',
  },
  {
    id: 8,
    title: 'CENTENARY',
    price: 1795,
    currency: 'EUR',
    company: 'Globe Trotter',
    category: 'Lifestyle',
    image: '/images/centenary.png',
    href: 'https://www.globe-trotter.com/products/centenary-4-wheels-carry-on-black-black-black'
  },
  {
    id: 9,
    title: 'TWIST-LOCK CARABINER RD-TLC GREY',
    price: 40,
    currency: 'USD',
    company: 'Riot Division',
    category: 'Lifestyle',
    image: '/images/twist-lock-carabiner.png',
    href: 'https://riotdivision.tech/products/twist-lock-carabiner-rd-tlc-grey'
  },
  {
    id: 10,
    title: 'Unfortunately',
    price: 20,
    currency: 'GBP',
    company: 'The District',
    category: 'Lifestyle',
    image: '/images/unfortunately.png',
    href: 'https://the-brandidentity.com/store/product/unfortunately'
  },
  {
    id: 11,
    title: 'Ode',
    price: 345,
    currency: 'USD',
    company: 'Fellow',
    category: 'Coffee',
    image: '/images/ode.png',
    href: 'https://fellowproducts.com/products/ode-brew-grinder-gen-2?variant=40978992463972'
  },
];

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category');

  let res = data;

  if (category) {
    res = res.filter((item) => item.category === category);
  }

  return Response.json(res);
}
