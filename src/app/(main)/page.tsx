import Item from './_components/Item';

export default function Home() {
  return (
    <div className="product-grid mx-3.5 flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: 8 }).map((_, index) => (
        <Item key={index} />
      ))}
    </div>
  );
}
