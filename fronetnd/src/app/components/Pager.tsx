import { ArrowDown } from 'lucide-react';

function Pager(props: { fetchNextPage: () => void; hasNextPage: boolean; isFetchingNextPage: boolean }) {
  return (
    <div className="mb-8 flex justify-center md:mb-10">
      {props.hasNextPage ? (
        <button onClick={() => props.fetchNextPage()} disabled={props.isFetchingNextPage}>
          <div className="items-center rounded-md bg-gray-50 px-4  py-1.5">
            <ArrowDown width={20} height={20} strokeWidth={1} />
          </div>
        </button>
      ) : null}
    </div>
  );
}

export default Pager;
