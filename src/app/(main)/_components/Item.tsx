/* eslint-disable @next/next/no-img-element */
const items = [
  {
    id: 1,
    title: 'Item 1',
    price: 15,
    company: 'Company 1',
    category: 'Category 1',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 2,
    title: 'Item 2',
    price: 20,
    company: 'Company 2',
    category: 'Category 2',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 3,
    title: 'Item 3',
    price: 25,
    company: 'Company 3',
    category: 'Category 3',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 4,
    title: 'Item 4',
    price: 30,
    company: 'Company 4',
    category: 'Category 4',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 5,
    title: 'Item 5',
    price: 35,
    company: 'Company 5',
    category: 'Category 5',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 6,
    title: 'Item 6',
    price: 40,
    company: 'Company 6',
    category: 'Category 6',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 7,
    title: 'Item 7',
    price: 45,
    company: 'Company 7',
    category: 'Category 7',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
  {
    id: 8,
    title: 'Item 8',
    price: 50,
    company: 'Company 8',
    category: 'Category 8',
    image: 'https://via.placeholder.com/300x300',
    href: '/',
  },
];

function Item() {
  return (
    <div className="relative flex aspect-square flex-col place-content-center items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-neutral-100 p-4 px-16 pb-16 pt-0 hover:border-gray-400 hover:bg-white">
      <div className="transition duration-300 ease-in-out group-hover:-translate-y-1.5">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Placeholder"
          className="aspect-square h-fit w-full object-cover"
        />
      </div>
      <div className="absolute bottom-4  left-4 right-4 flex flex-col gap-y-0">
        {/* company / category */}
        <div className="flex flex-row items-center gap-1 text-xs font-light text-neutral-400 md:text-sm">
          <span className="">Company</span>
          <span>·</span>
        </div>

        {/* title + price*/}
        <div className="flex flex-row justify-between gap-1 text-sm font-light text-zinc-700 md:text-base">
          <span>Title</span>
          <span>$15</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
