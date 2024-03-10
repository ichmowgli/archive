import type { Item as DataItem } from '@/lib/shared';

function Item(props: { item: DataItem }) {
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: props.item.currency,
  });

  return (
    <div className="group relative flex aspect-[0.88] flex-col place-content-center rounded-xl border border-gray-200 bg-white p-4 px-5 pb-12 pt-0 hover:border-gray-400 hover:bg-neutral-100">
      <div className="aspect-square object-cover transition duration-300 ease-in-out group-hover:-translate-y-1.5">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-y-0">
        <div className="flex flex-row items-center gap-1 text-xs font-light text-neutral-400 ">
          <span className="">{props.item.company}</span>
          <span>·</span>
          <a href={`/categories/${props.item.category.toLowerCase()}`}>{props.item.category}</a>
        </div>
        <div className="flex flex-row justify-between gap-1 text-xs text-zinc-600">
          <span>{props.item.title}</span>
          <span suppressHydrationWarning>{currencyFormatter.format(props.item.price)}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
