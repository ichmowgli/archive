<?php

namespace App\DataFixtures;

use App\Entity\Item;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ItemFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $items = [
            ['title' => 'TOUCH PBT Wireless Mouse', 'price' => '69.99', 'currency' => 'USD', 'company' => 'Lofree', 'category' => 'Workspace', 'image' => '/images/touch_pbt.png', 'href' => 'https://www.lofree.co/products/lofree-touch-pbt-wireless-mouse?variant=44242527551707'],
            ['title' => 'Togo Sofa', 'price' => '3111', 'currency' => 'EUR', 'company' => 'Ligne Roset', 'category' => 'Living', 'image' => '/images/togo_sofa.png', 'href' => 'https://www.ligne-roset.com/de/p/sofas/2-sitzer-togo-1178'],
            ['title' => 'Pocket Operator Keychain', 'price' => '10', 'currency' => 'EUR', 'company' => 'Teenage Engineering', 'category' => 'Lifestyle', 'image' => '/images/pocket-operator-keychain.png', 'href' => 'https://teenage.engineering/store/pocket-operator-keychain'],
            ['title' => 'Washer Ring', 'price' => '59.95', 'currency' => 'EUR', 'company' => 'ORE', 'category' => 'Lifestyle', 'image' => '/images/washer-ring.png', 'href' => 'https://orejewellery.co.uk/products/washer-ring?variant=45719629988119'],
            ['title' => 'Clever Dripper', 'price' => '34.9', 'currency' => 'EUR', 'company' => 'Clever', 'category' => 'Coffee', 'image' => '/images/clever_dripper.png', 'href' => 'https://www.cremashop.eu/en/products/clever/coffee-dripper-l/11965'],
            ['title' => 'Centenary Carry-On', 'price' => '1795', 'currency' => 'EUR', 'company' => 'Globe Trotter', 'category' => 'Lifestyle', 'image' => '/images/centenary.png', 'href' => 'https://www.globe-trotter.com/products/centenary-4-wheels-carry-on-black-black-black'],
            ['title' => 'Twist-lock Carabiner RD-TLC', 'price' => '40', 'currency' => 'USD', 'company' => 'Riot Division', 'category' => 'Lifestyle', 'image' => '/images/twist-lock-carabiner.png', 'href' => 'https://riotdivision.tech/products/twist-lock-carabiner-rd-tlc-grey'],
            ['title' => 'Unfortunately', 'price' => '20', 'currency' => 'GBP', 'company' => 'The District', 'category' => 'Living', 'image' => '/images/unfortunately.png', 'href' => 'https://the-brandidentity.com/store/product/unfortunately'],
            ['title' => 'Ode', 'price' => '345', 'currency' => 'USD', 'company' => 'Fellow', 'category' => 'Coffee', 'image' => '/images/ode.png', 'href' => 'https://fellowproducts.com/products/ode-brew-grinder-gen-2?variant=40978992463972'],
            ['title' => 'Mohair blanket', 'price' => '745', 'currency' => 'EUR', 'company' => 'Tekla', 'category' => 'Living', 'image' => '/images/mohair-blanket.png', 'href' => 'https://teklafabrics.com/product/the-colours-of-le-corbusier-mohair-blanket-orange#gallery-modal-image-1'],
            ['title' => 'M-Selection: Architecture', 'price' => '30', 'currency' => 'USD', 'company' => 'Minimalissimo', 'category' => 'Living', 'image' => '/images/m-selection-architecture.png', 'href' => 'https://minimalissimo.shop/product/selection-architecture'],
            ['title' => 'Pearl Model S', 'price' => '220', 'currency' => 'USD', 'company' => 'Acaia', 'category' => 'Coffee', 'image' => '/images/pearl-model-s.png', 'href' => 'https://acaia.co/collections/coffee-scales/products/pearl-model-s?variant=43635168968932'],
            ['title' => 'Laptop 13 DIY Edition', 'price' => '979', 'currency' => 'EUR', 'company' => 'Framework', 'category' => 'Workspace', 'image' => '/images/laptop-13-diy-edition.png', 'href' => 'https://frame.work/de/en/products/laptop-diy-13-gen-amd'],
            ['title' => 'Blackpepper Eau de Parfum', 'price' => '95', 'currency' => 'EUR', 'company' => 'Comme des Garçons', 'category' => 'Personal', 'image' => '/images/blackpepper-eau-de-parfum.png', 'href' => 'https://www.comme-des-garcons.de/en/products/blackpepper-eau-de-parfum?variant=33020993142922'],
            ['title' => 'Ukrainian Dripper', 'price' => '91.21', 'currency' => 'EUR', 'company' => 'Dotyk', 'category' => 'Coffee', 'image' => '/images/ukrainian-dripper.png', 'href' => 'https://www.etsy.com/listing/1685040993/dotyk-dripper-next-gen-handmade-ceramic?etsrc=sdtr'],
            ['title' => 'OP-Z protective soft case', 'price' => '48', 'currency' => 'EUR', 'company' => 'Teenage Engineering', 'category' => 'Lifestyle', 'image' => '/images/opz-protective-soft-case.png', 'href' => 'https://teenage.engineering/store/op-z-soft-case/'],
            ['title' => 'Modulare Ottomane Lennon', 'price' => '2399', 'currency' => 'EUR', 'company' => 'Westwing', 'category' => 'Living', 'image' => '/images/modulare-ottomane-lennon.png', 'href' => 'https://www.westwing.de/modulare-ottomane-lennon-121201.html?simple=DEQ20WES46952-152793'],
            ['title' => 'Linea Mini', 'price' => '5136', 'currency' => 'EUR', 'company' => 'La Marzocco', 'category' => 'Coffee', 'image' => '/images/linea-mini.png', 'href' => 'https://lamarzocco.com/fr/en/home-products/espresso-machines/linea-mini-r/'],
            ['title' => 'AT-SB727', 'price' => '199', 'currency' => 'USD', 'company' => 'Audio-Technica', 'category' => 'Living', 'image' => '/images/at-sb727.png', 'href' => 'https://www.audio-technica.com/en-us/turntables/all/at-sb727'],
            ['title' => 'The Abbey', 'price' => '79', 'currency' => 'EUR', 'company' => 'James', 'category' => 'Lifestyle', 'image' => '/images/the-abbey.png', 'href' => 'https://thejamesbrand.eu/products/the-abbey?variant=40550139822195'],
            ['title' => 'Hydrous Plant Mister', 'price' => '65', 'currency' => 'EUR', 'company' => 'Audo Copenhagen', 'category' => 'Living', 'image' => '/images/hydrous-plant-mister.png', 'href' => 'https://audocph.com/products/hydrous-plant-mister#'],
            ['title' => 'Types We Can Make', 'price' => '30', 'currency' => 'GBP', 'company' => 'ECAL', 'category' => 'Living', 'image' => '/images/types-we-can-make.png', 'href' => 'https://the-brandidentity.com/store/product/types-we-can-make'],
            ['title' => 'Capsule Cold Brew Carafe', 'price' => '32', 'currency' => 'USD', 'company' => 'Kinto', 'category' => 'Coffee', 'image' => '/images/capsule-cold-brew-carafe.png', 'href' => 'https://kinto-europe.com/collections/coffeeware/products/26471?variant=18332586082362'],
            ['title' => 'Alfresco Coffee Jug', 'price' => '24.5', 'currency' => 'EUR', 'company' => 'Kinto', 'category' => 'Coffee', 'image' => '/images/alfresco-coffee-jug.png', 'href' => 'https://kinto-europe.com/collections/coffeeware/products/20731?variant=31997691854906'],
            ['title' => 'Dog Bowl', 'price' => '25', 'currency' => 'USD', 'company' => 'Wild One', 'category' => 'Living', 'image' => '/images/dog-bowl.png', 'href' => 'https://wildone.com/products/bowl?title=black-standard'],
            ['title' => 'TGC102 Yuzu Soap', 'price' => '25', 'currency' => 'EUR', 'company' => 'Tangent GC', 'category' => 'Personal', 'image' => '/images/tgc102-yuzu-soap.png', 'href' => 'https://tangentgc.com/products/tgc102-yuzu-organic-soap'],
            ['title' => 'Microphone CM-15', 'price' => '1199', 'currency' => 'EUR', 'company' => 'Teenage Engineering', 'category' => 'Workspace', 'image' => '/images/cm-15.png', 'href' => 'https://teenage.engineering/store/cm-15'],
            ['title' => 'Desk Mat', 'price' => '89.9', 'currency' => 'EUR', 'company' => 'Orbitkey', 'category' => 'Workspace', 'image' => '/images/desk-mat.png', 'href' => 'https://www.orbitkey.eu/collections/orbitkey-desk-mat/products/orbitkey-desk-mat'],
            ['title' => 'Terry Towel', 'price' => '45', 'currency' => 'EUR', 'company' => 'Tekla', 'category' => 'Living', 'image' => '/images/terry-towel.png', 'href' => 'https://teklafabrics.com/product/terry-towel-shaded-pink'],
            ['title' => 'Supertamp', 'price' => '195', 'currency' => 'EUR', 'company' => 'Coto', 'category' => 'Coffee', 'image' => '/images/supertamp.png', 'href' => 'https://cotostudios.com/produkt/supertamp/'],
            ['title' => 'Akari 16A', 'price' => '500', 'currency' => 'USD', 'company' => 'Isamu Noguchi', 'category' => 'Living', 'image' => '/images/akari-16a.png', 'href' => 'https://shop.noguchi.org/products/akari-16a?ref=some.wtf'],
            ['title' => 'FlatPak™ Toiletry Bottles', 'price' => '14', 'currency' => 'USD', 'company' => 'Matador', 'category' => 'Lifestyle', 'image' => '/images/flatpak-toiletry-bottles.png', 'href' => 'https://www.matadorequipment.com/collections/accessories/products/flatpak-toiletry-bottle'],
            ['title' => 'Butterfly Stool', 'price' => '749', 'currency' => 'EUR', 'company' => 'Vitra', 'category' => 'Living', 'image' => '/images/butterfly-stool.png', 'href' => 'https://www.vitra.com/en-de/product/butterfly-stool'],
            ['title' => 'Flip Calendar', 'price' => '149.95', 'currency' => 'EUR', 'company' => 'Enzo Mari', 'category' => 'Living', 'image' => '/images/flip-calendar.png', 'href' => 'https://www.aramstore.com/flip-calendar'],
            ['title' => 'Classic Notebook', 'price' => '24.95', 'currency' => 'USD', 'company' => 'Moleskine', 'category' => 'Workspace', 'image' => '/images/classic-notebook.png', 'href' => 'https://www.moleskine.com/en-us/shop/notebooks/the-legendary-notebook/classic-notebook-light-green-8056420850871.html'],
            ['title' => 'w227 Winkel alu', 'price' => '413', 'currency' => 'EUR', 'company' => 'Wästberg', 'category' => 'Workspace', 'image' => '/images/w227-winkel-alu.png', 'href' => 'https://www.wastberg.com/en/products/w227-winkel-alu'],
            ['title' => 'Copenhagen 90 Desk', 'price' => '1495', 'currency' => 'USD', 'company' => 'HAY', 'category' => 'Workspace', 'image' => '/images/copenhagen-90-desk.png', 'href' => 'https://www.dwr.com/office-desks/copenhague-90-desk/100170958.html?utm_source=HAY'],
            ['title' => 'The Boring Poster', 'price' => '49', 'currency' => 'GBP', 'company' => 'Flippos Fragkogiannis', 'category' => 'Living', 'image' => '/images/the-boring-poster.png', 'href' => 'https://the-brandidentity.com/store/product/theboring-poster'],
            ['title' => 'V03D-BR/BL/WH', 'price' => '219', 'currency' => 'USD', 'company' => 'Void', 'category' => 'Lifestyle', 'image' => '/images/v03d-br-bl-wh.png', 'href' => 'https://voidwatches.com/collections/v03d/products/v03d-br-bl-wh?ref=some.wtf'],
            ['title' => 'Nest', 'price' => '109.9', 'currency' => 'USD', 'company' => 'Orbitkey', 'category' => 'Workspace', 'image' => '/images/nest.png', 'href' => 'https://www.orbitkey.com/collections/orbitkey-nest/products/orbitkey-nest'],
            ['title' => 'How To Travel', 'price' => '10', 'currency' => 'GBP', 'company' => 'The School of Life', 'category' => 'Living', 'image' => '/images/how-to-travel.png', 'href' => 'https://the-brandidentity.com/store/product/how-to-travel'],
            ['title' => 'Prismo Attachment for AeroPress', 'price' => '25', 'currency' => 'USD', 'company' => 'Fellow', 'category' => 'Coffee', 'image' => '/images/prismo-attachment.png', 'href' => 'https://fellowproducts.com/products/prismo'],
            ['title' => 'Mini Alarm Flip Clock AP-28', 'price' => '119', 'currency' => 'USD', 'company' => 'Twemco', 'category' => 'Living', 'image' => '/images/mini-alarm-flip-clock.png', 'href' => 'https://timewillflip.com/products/twemco-mini-alarm-flip-clock-ap-28?variant=3067284684829'],
            ['title' => 'The Beanbag', 'price' => '579', 'currency' => 'EUR', 'company' => 'Vetsak', 'category' => 'Living', 'image' => '/images/the-beanbag.png', 'href' => 'https://vetsak.com/products/vetsak-the-jumbo-beanbag-cord-velours-platinum'],
            ['title' => 'Percale Duvet Cover', 'price' => '255', 'currency' => 'EUR', 'company' => 'Tekla x Stussy', 'category' => 'Living', 'image' => '/images/percale-duvet-cover.png', 'href' => 'https://eu.stussy.com/collections/accessories/products/338217-tekla-percale-duvet-cover-hand-drawn-stripe'],
            ['title' => 'MIJIA Electric Screwdriver', 'price' => '45.9', 'currency' => 'EUR', 'company' => 'Xiaomi', 'category' => 'Living', 'image' => '/images/mijia-electric-screwdriver.png', 'href' => 'https://www.banggood.com/de/XIAOMI-Mijia-3_6V-2000mAh-Cordless-Rechargeable-Screwdriver-Li-ion-5N_m-Electric-Screwdriver-With-12Pcs-S2-Screw-Bits-for-Home-DIY-p-1536377.html?imageAb=2&akmClientCountry=LV&cur_warehouse=HK'],
            ['title' => '990v4 Core', 'price' => '240', 'currency' => 'EUR', 'company' => 'New Balance', 'category' => 'Lifestyle', 'image' => '/images/990v4-core.png', 'href' => 'https://www.newbalance.lv/en/pd/made-in-usa-990v4-core/U990V4-41721.html?dwvar_U990V4-41721_style=U990GR4'],
            ['title' => 'BR-X5 Black Steel', 'price' => '7990', 'currency' => 'EUR', 'company' => 'Bell & Ross', 'category' => 'Lifestyle', 'image' => '/images/br-x5-black-steel.png', 'href' => 'https://www.bellross.com/eu/en-gb/our-watches/our-watches-urban/BR-X5/BR-X5-BLACK-STEEL-STEEL-BRACELET'],
            ['title' => 'Oral Care Set', 'price' => '11.99', 'currency' => 'EUR', 'company' => 'Curaprox', 'category' => 'Personal', 'image' => '/images/oral-care-set.png', 'href' => 'https://curaprox.de/shop/zahnpflege/travel-set-blau'],
            ['title' => 'Cantilever Toolbox ST-350', 'price' => '128', 'currency' => 'USD', 'company' => 'Toyo', 'category' => 'Living', 'image' => '/images/cantilever-toolbox.png', 'href' => 'https://actualsource.org/products/toyo-cantilever-toolbox-st-350?variant=40465215684706'],
            ['title' => '4MM Dot Grid Notebook', 'price' => '18', 'currency' => 'USD', 'company' => 'Actual Source', 'category' => 'Workspace', 'image' => '/images/4mm-dot-grid-notebook.png', 'href' => 'https://actualsource.org/products/4mm-dot-grid-notebook'],
            ['title' => 'Drafting Pencil', 'price' => '34', 'currency' => 'USD', 'company' => 'Actual Source', 'category' => 'Workspace', 'image' => '/images/drafting-pencil.png', 'href' => 'https://actualsource.org/products/drafting-pencil?variant=40351022284898'],
            ['title' => 'Stainless Steel Scissors L', 'price' => '20', 'currency' => 'USD', 'company' => 'Penco', 'category' => 'Workspace', 'image' => '/images/stainless-steel-scissors.png', 'href' => 'https://actualsource.org/products/stainless-steel-scissors-l?variant=40358800556130'],
            ['title' => 'Basil/Shea Butter Hand Pomade', 'price' => '29', 'currency' => 'EUR', 'company' => 'Le Labo', 'category' => 'Personal', 'image' => '/images/hand-pomade.png', 'href' => 'https://www.lelabofragrances.com/eu_en/hand-pomade-1.html'],
            ['title' => '003BT_OLIVE', 'price' => '114.33', 'currency' => 'USD', 'company' => 'Mospoke', 'category' => 'Lifestyle', 'image' => '/images/003bt_olive.png', 'href' => 'https://www.mospoke.com/collections/coffee-accessories/products/003bt-olive'],
            ['title' => '9351 XL KEY CLIP', 'price' => '20', 'currency' => 'EUR', 'company' => 'Maharishi', 'category' => 'Lifestyle', 'image' => '/images/9351-xl-key-clip.png', 'href' => 'https://www.maharishistore.com/products/9351-xl-key-clip-stainless-steel'],
        ];

        foreach ($items as $itemData) {
            $item = new Item();
            $item->setTitle($itemData['title']);
            $item->setPrice($itemData['price']);
            $item->setCurrency($itemData['currency']);
            $item->setCompany($itemData['company'] ?? null);
            $item->setCategory($itemData['category']);
            $item->setImage($itemData['image'] ?? null);
            $item->setHref($itemData['href'] ?? null);
            
            $manager->persist($item);
        }

        $manager->flush();
    }
}