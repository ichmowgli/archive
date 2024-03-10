import { NextRequest } from 'next/server';

export enum Category {
  Tech = 'Tech',
  Living = 'Living',
  Coffee = 'Coffee',
  Lifestyle = 'Lifestyle',
  Personal = 'Personal',
}

export type Item = {
  id: number;
  title: string;
  price: number;
  currency: string;
  company: string;
  category: Category;
  image: `/images/${string}`;
  href: string;
};

const data: Item[] = [
  {
    id: 1,
    title: 'TOUCH PBT Wireless Mouse',
    price: 69.99,
    currency: 'USD',
    company: 'Lofree',
    category: Category.Tech,
    image: '/images/touch_pbt.png',
    href: 'https://www.lofree.co/products/lofree-touch-pbt-wireless-mouse?variant=44242527551707',
  },
  {
    id: 2,
    title: 'Togo Sofa',
    price: 3111,
    currency: 'EUR',
    company: 'Ligne Roset',
    category: Category.Living,
    image: '/images/togo_sofa.png',
    href: 'https://www.ligne-roset.com/de/p/sofas/2-sitzer-togo-1178',
  },
  {
    id: 3,
    title: 'pocket operator keychain',
    price: 10,
    currency: 'EUR',
    company: 'Teenage Engineering',
    category: Category.Lifestyle,
    image: '/images/pocket-operator-keychain.png',
    href: 'https://teenage.engineering/store/pocket-operator-keychain',
  },
  {
    id: 6,
    title: 'Washer Ring',
    price: 59.95,
    currency: 'EUR',
    company: 'ORE',
    category: Category.Lifestyle,
    image: '/images/washer-ring.png',
    href: 'https://orejewellery.co.uk/products/washer-ring?variant=45719629988119',
  },
  {
    id: 7,
    title: 'Clever Dripper',
    price: 34.9,
    currency: 'EUR',
    company: 'Clever',
    category: Category.Coffee,
    image: '/images/clever_dripper.png',
    href: 'https://www.cremashop.eu/en/products/clever/coffee-dripper-l/11965',
  },
  {
    id: 8,
    title: 'CENTENARY',
    price: 1795,
    currency: 'EUR',
    company: 'Globe Trotter',
    category: Category.Lifestyle,
    image: '/images/centenary.png',
    href: 'https://www.globe-trotter.com/products/centenary-4-wheels-carry-on-black-black-black',
  },
  {
    id: 9,
    title: 'TWIST-LOCK CARABINER RD-TLC GREY',
    price: 40,
    currency: 'USD',
    company: 'Riot Division',
    category: Category.Lifestyle,
    image: '/images/twist-lock-carabiner.png',
    href: 'https://riotdivision.tech/products/twist-lock-carabiner-rd-tlc-grey',
  },
  {
    id: 10,
    title: 'Unfortunately',
    price: 20,
    currency: 'GBP',
    company: 'The District',
    category: Category.Lifestyle,
    image: '/images/unfortunately.png',
    href: 'https://the-brandidentity.com/store/product/unfortunately',
  },
  {
    id: 11,
    title: 'Ode',
    price: 345,
    currency: 'USD',
    company: 'Fellow',
    category: Category.Coffee,
    image: '/images/ode.png',
    href: 'https://fellowproducts.com/products/ode-brew-grinder-gen-2?variant=40978992463972',
  },
  {
    id: 12,
    title: 'BoostCharge Pro',
    price: 149.99,
    currency: 'USD',
    company: 'Belkin',
    category: Category.Tech,
    image: '/images/boostcharge-pro.png',
    href: 'https://www.belkin.com/3-in-1-wireless-charger-with-official-magsafe-charging-15w/P-WIZ017.html?dwvar_P-WIZ017_color=White&swatchattr=color&swatchval=White',
  },
  {
    id: 13,
    title: 'Mohair blanket',
    price: 745,
    currency: 'EUR',
    company: 'Tekla',
    category: Category.Living,
    image: '/images/mohair-blanket.png',
    href: 'https://teklafabrics.com/product/the-colours-of-le-corbusier-mohair-blanket-orange#gallery-modal-image-1',
  },
];

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category')?.toLowerCase();

  let res = data;

  if (category) {
    res = res.filter((item) => item.category.toLowerCase() === category);
  }

  return Response.json(res);
}
