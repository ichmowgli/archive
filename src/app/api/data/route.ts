import { Category, Item } from '@/lib/shared';
import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const data: Item[] = [
  {
    id: uuidv4(),
    title: 'TOUCH PBT Wireless Mouse',
    price: 69.99,
    currency: 'USD',
    company: 'Lofree',
    category: Category.Workspace,
    image: '/images/touch_pbt.png',
    href: 'https://www.lofree.co/products/lofree-touch-pbt-wireless-mouse?variant=44242527551707',
  },
  {
    id: uuidv4(),
    title: 'Togo Sofa',
    price: 3111,
    currency: 'EUR',
    company: 'Ligne Roset',
    category: Category.Living,
    image: '/images/togo_sofa.png',
    href: 'https://www.ligne-roset.com/de/p/sofas/2-sitzer-togo-1178',
  },
  {
    id: uuidv4(),
    title: 'Pocket Operator Keychain',
    price: 10,
    currency: 'EUR',
    company: 'Teenage Engineering',
    category: Category.Lifestyle,
    image: '/images/pocket-operator-keychain.png',
    href: 'https://teenage.engineering/store/pocket-operator-keychain',
  },
  {
    id: uuidv4(),
    title: 'Washer Ring',
    price: 59.95,
    currency: 'EUR',
    company: 'ORE',
    category: Category.Lifestyle,
    image: '/images/washer-ring.png',
    href: 'https://orejewellery.co.uk/products/washer-ring?variant=45719629988119',
  },
  {
    id: uuidv4(),
    title: 'Clever Dripper',
    price: 34.9,
    currency: 'EUR',
    company: 'Clever',
    category: Category.Coffee,
    image: '/images/clever_dripper.png',
    href: 'https://www.cremashop.eu/en/products/clever/coffee-dripper-l/11965',
  },
  {
    id: uuidv4(),
    title: 'Centenary Carry-On',
    price: 1795,
    currency: 'EUR',
    company: 'Globe Trotter',
    category: Category.Lifestyle,
    image: '/images/centenary.png',
    href: 'https://www.globe-trotter.com/products/centenary-4-wheels-carry-on-black-black-black',
  },
  {
    id: uuidv4(),
    title: 'Twist-lock Carabiner RD-TLC',
    price: 40,
    currency: 'USD',
    company: 'Riot Division',
    category: Category.Lifestyle,
    image: '/images/twist-lock-carabiner.png',
    href: 'https://riotdivision.tech/products/twist-lock-carabiner-rd-tlc-grey',
  },
  {
    id: uuidv4(),
    title: 'Unfortunately',
    price: 20,
    currency: 'GBP',
    company: 'The District',
    category: Category.Living,
    image: '/images/unfortunately.png',
    href: 'https://the-brandidentity.com/store/product/unfortunately',
  },
  {
    id: uuidv4(),
    title: 'Ode',
    price: 345,
    currency: 'USD',
    company: 'Fellow',
    category: Category.Coffee,
    image: '/images/ode.png',
    href: 'https://fellowproducts.com/products/ode-brew-grinder-gen-2?variant=40978992463972',
  },
  {
    id: uuidv4(),
    title: 'Mohair blanket',
    price: 745,
    currency: 'EUR',
    company: 'Tekla',
    category: Category.Living,
    image: '/images/mohair-blanket.png',
    href: 'https://teklafabrics.com/product/the-colours-of-le-corbusier-mohair-blanket-orange#gallery-modal-image-1',
  },
  {
    id: uuidv4(),
    title: 'M-Selection: Architecture',
    price: 30,
    currency: 'USD',
    company: 'Minimalissimo',
    category: Category.Living,
    image: '/images/m-selection-architecture.png',
    href: 'https://minimalissimo.shop/product/selection-architecture',
  },
  {
    id: uuidv4(),
    title: 'Pearl Model S',
    price: 220,
    currency: 'USD',
    company: 'Acaia',
    category: Category.Coffee,
    image: '/images/pearl-model-s.png',
    href: 'https://acaia.co/collections/coffee-scales/products/pearl-model-s?variant=43635168968932',
  },
  {
    id: uuidv4(),
    title: 'Laptop 13 DIY Edition',
    price: 979,
    currency: 'EUR',
    company: 'Framework',
    category: Category.Workspace,
    image: '/images/laptop-13-diy-edition.png',
    href: 'https://frame.work/de/en/products/laptop-diy-13-gen-amd',
  },
  {
    id: uuidv4(),
    title: 'Blackpepper Eau de Parfum',
    price: 95,
    currency: 'EUR',
    company: 'Comme des Garçons',
    category: Category.Personal,
    image: '/images/blackpepper-eau-de-parfum.png',
    href: 'https://www.comme-des-garcons.de/en/products/blackpepper-eau-de-parfum?variant=33020993142922',
  },
  {
    id: uuidv4(),
    title: 'Ukrainian Dripper',
    price: 91.21,
    currency: 'EUR',
    company: 'Dotyk',
    category: Category.Coffee,
    image: '/images/ukrainian-dripper.png',
    href: 'https://www.etsy.com/listing/1685040993/dotyk-dripper-next-gen-handmade-ceramic?etsrc=sdtr',
  },
  {
    id: uuidv4(),
    title: 'OP-Z protective soft case',
    price: 48,
    currency: 'EUR',
    company: 'Teenage Engineering',
    category: Category.Lifestyle,
    image: '/images/opz-protective-soft-case.png',
    href: 'https://teenage.engineering/store/op-z-soft-case/',
  },
  {
    id: uuidv4(),
    title: 'Modulare Ottomane Lennon',
    price: 2399,
    currency: 'EUR',
    company: 'Westwing',
    category: Category.Living,
    image: '/images/modulare-ottomane-lennon.png',
    href: 'https://www.westwing.de/modulare-ottomane-lennon-121201.html?simple=DEQ20WES46952-152793',
  },
  {
    id: uuidv4(),
    title: 'Linea Mini',
    price: 5136,
    currency: 'EUR',
    company: 'La Marzocco',
    category: Category.Coffee,
    image: '/images/linea-mini.png',
    href: 'https://lamarzocco.com/fr/en/home-products/espresso-machines/linea-mini-r/',
  },
  {
    id: uuidv4(),
    title: 'AT-SB727',
    price: 199,
    currency: 'USD',
    company: 'Audio-Technica',
    category: Category.Workspace,
    image: '/images/at-sb727.png',
    href: 'https://www.audio-Workspacenica.com/en-us/turntables/all/at-sb727',
  },
  {
    id: uuidv4(),
    title: 'The Abbey',
    price: 79,
    currency: 'EUR',
    company: 'James',
    category: Category.Lifestyle,
    image: '/images/the-abbey.png',
    href: 'https://thejamesbrand.eu/products/the-abbey?variant=40550139822195',
  },
  {
    id: uuidv4(),
    title: 'Hydrous Plant Mister',
    price: 65,
    currency: 'EUR',
    company: 'Audo Copenhagen',
    category: Category.Living,
    image: '/images/hydrous-plant-mister.png',
    href: 'https://audocph.com/products/hydrous-plant-mister#',
  },
  {
    id: uuidv4(),
    title: 'Types We Can Make',
    price: 30,
    currency: 'GBP',
    company: 'ECAL',
    category: Category.Living,
    image: '/images/types-we-can-make.png',
    href: 'https://the-brandidentity.com/store/product/types-we-can-make',
  },
  {
    id: uuidv4(),
    title: 'Capsule Cold Brew Carafe',
    price: 32,
    currency: 'USD',
    company: 'Kinto',
    category: Category.Coffee,
    image: '/images/capsule-cold-brew-carafe.png',
    href: 'https://kinto-europe.com/collections/coffeeware/products/26471?variant=18332586082362',
  },
  {
    id: uuidv4(),
    title: 'Alfresco Coffee Jug',
    price: 24.5,
    currency: 'EUR',
    company: 'Kinto',
    category: Category.Coffee,
    image: '/images/alfresco-coffee-jug.png',
    href: 'https://kinto-europe.com/collections/coffeeware/products/20731?variant=31997691854906',
  },
  {
    id: uuidv4(),
    title: 'Dog Bowl',
    price: 25,
    currency: 'USD',
    company: 'Wild One',
    category: Category.Living,
    image: '/images/dog-bowl.png',
    href: 'https://wildone.com/products/bowl?title=black-standard',
  },
  {
    id: uuidv4(),
    title: 'TGC102 Yuzu Soap',
    price: 25,
    currency: 'EUR',
    company: 'Tangent GC',
    category: Category.Personal,
    image: '/images/tgc102-yuzu-soap.png',
    href: 'https://tangentgc.com/products/tgc102-yuzu-organic-soap',
  },
  // {
  //   id: uuidv4(),
  //   title: 'Nordic Kitchen Timer',
  //   price: 44.95,
  //   currency: 'EUR',
  //   company: 'Eva Solo',
  //   category: Category.Living,
  //   image: '/images/nordic-kitchen-timer.png',
  //   href: 'https://www.evasolo.com/en/kitchen/equipment/kitchen-accessories/timer-nordic-kitchen',
  // },
  {
    id: uuidv4(),
    title: 'Microphone CM-15',
    price: 1199,
    currency: 'EUR',
    company: 'Teenage Engineering',
    category: Category.Workspace,
    image: '/images/cm-15.png',
    href: 'https://teenage.engineering/store/cm-15',
  },
  {
    id: uuidv4(),
    title: 'Desk Mat',
    price: 89.9,
    currency: 'EUR',
    company: 'Orbitkey',
    category: Category.Workspace,
    image: '/images/desk-mat.png',
    href: 'https://www.orbitkey.eu/collections/orbitkey-desk-mat/products/orbitkey-desk-mat',
  },
  {
    id: uuidv4(),
    title: 'Terry Towel',
    price: 45,
    currency: 'EUR',
    company: 'Tekla',
    category: Category.Living,
    image: '/images/terry-towel.png',
    href: 'https://teklafabrics.com/product/terry-towel-shaded-pink',
  },
  {
    id: uuidv4(),
    title: 'Supertamp',
    price: 195,
    currency: 'EUR',
    company: 'Coto',
    category: Category.Coffee,
    image: '/images/supertamp.png',
    href: 'https://cotostudios.com/produkt/supertamp/',
  },
  {
    id: uuidv4(),
    title: 'Akari 16A',
    price: 500,
    currency: 'USD',
    company: 'Isamu Noguchi',
    category: Category.Living,
    image: '/images/akari-16a.png',
    href: 'https://shop.noguchi.org/products/akari-16a?ref=some.wtf',
  },
  {
    id: uuidv4(),
    title: 'FlatPak™ Toiletry Bottles',
    price: 14,
    currency: 'USD',
    company: 'Matador',
    category: Category.Lifestyle,
    image: '/images/flatpak-toiletry-bottles.png',
    href: 'https://www.matadorequipment.com/collections/accessories/products/flatpak-toiletry-bottle',
  },
  {
    id: uuidv4(),
    title: 'Butterfly Stool',
    price: 749,
    currency: 'EUR',
    company: 'Vitra',
    category: Category.Living,
    image: '/images/butterfly-stool.png',
    href: 'https://www.vitra.com/en-de/product/butterfly-stool',
  },
  {
    id: uuidv4(),
    title: 'Flip Calendar',
    price: 149.95,
    currency: 'EUR',
    company: 'Enzo Mari',
    category: Category.Living,
    image: '/images/flip-calendar.png',
    href: 'https://www.aramstore.com/flip-calendar',
  },
  {
    id: uuidv4(),
    title: 'Classic Notebook',
    price: 24.95,
    currency: 'USD',
    company: 'Moleskine',
    category: Category.Workspace,
    image: '/images/classic-notebook.png',
    href: 'https://www.moleskine.com/en-us/shop/notebooks/the-legendary-notebook/classic-notebook-light-green-8056420850871.html',
  },
  {
    id: uuidv4(),
    title: 'w227 Winkel alu',
    price: 413,
    currency: 'EUR',
    company: 'Wästberg',
    category: Category.Workspace,
    image: '/images/w227-winkel-alu.png',
    href: 'https://www.wastberg.com/en/products/w227-winkel-alu',
  },
  {
    id: uuidv4(),
    title: 'Copenhagen 90 Desk',
    price: 1495,
    currency: 'USD',
    company: 'HAY',
    category: Category.Workspace,
    image: '/images/copenhagen-90-desk.png',
    href: 'https://www.dwr.com/office-desks/copenhague-90-desk/100170958.html?utm_source=HAY',
  },
  {
    id: uuidv4(),
    title: 'The Boring Poster',
    price: 49,
    currency: 'GBP',
    company: 'Flippos Fragkogiannis',
    category: Category.Living,
    image: '/images/the-boring-poster.png',
    href: 'https://the-brandidentity.com/store/product/theboring-poster',
  },
  {
    id: uuidv4(),
    title: 'V03D-BR/BL/WH',
    price: 219,
    currency: 'USD',
    company: 'Void',
    category: Category.Lifestyle,
    image: '/images/v03d-br-bl-wh.png',
    href: 'https://voidwatches.com/collections/v03d/products/v03d-br-bl-wh?ref=some.wtf',
  },
  // {
  //   id: uuidv4(),
  //   title: 'GRIIIx',
  //   price: 1099.99,
  //   currency: 'EUR',
  //   company: 'Ricoh',
  //   category: Category.Lifestyle,
  //   image: '/images/griii-x.png',
  //   href: 'https://ricohgr.eu/products/ricoh-gr-iiix',
  // },
  {
    id: uuidv4(),
    title: 'Nest',
    price: 109.9,
    currency: 'USD',
    company: 'Orbitkey',
    category: Category.Workspace,
    image: '/images/nest.png',
    href: 'https://www.orbitkey.com/collections/orbitkey-nest/products/orbitkey-nest',
  },
  // {
  //   id: uuidv4(),
  //   title: 'Red Clix for C40',
  //   price: 39.9,
  //   currency: 'EUR',
  //   company: 'Comandante',
  //   category: Category.Coffee,
  //   image: '/images/comandante-red-clix.png',
  //   href: 'https://www.cremashop.eu/en/products/comandante/red-clix',
  // },
  {
    id: uuidv4(),
    title: 'How To Travel',
    price: 10,
    currency: 'GBP',
    company: 'The School of Life',
    category: Category.Living,
    image: '/images/how-to-travel.png',
    href: 'https://the-brandidentity.com/store/product/how-to-travel',
  },
  {
    id: uuidv4(),
    title: 'Prismo Attachment for AeroPress',
    price: 25,
    currency: 'USD',
    company: 'Fellow',
    category: Category.Coffee,
    image: '/images/prismo-attachment.png',
    href: 'https://fellowproducts.com/products/prismo',
  },
  {
    id: uuidv4(),
    title: 'Mini Alarm Flip Clock AP-28',
    price: 119,
    currency: 'USD',
    company: 'Twemco',
    category: Category.Living,
    image: '/images/mini-alarm-flip-clock.png',
    href: 'https://timewillflip.com/products/twemco-mini-alarm-flip-clock-ap-28?variant=3067284684829',
  },
  {
    id: uuidv4(),
    title: 'The Beanbag',
    price: 579,
    currency: 'EUR',
    company: 'Vetsak',
    category: Category.Living,
    image: '/images/the-beanbag.png',
    href: 'https://vetsak.com/products/vetsak-the-jumbo-beanbag-cord-velours-platinum',
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
