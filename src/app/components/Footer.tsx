import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="m-3.5 flex flex-row items-center justify-between rounded-xl bg-white p-5 text-sm text-zinc-600	md:text-xs">
      <div>
        <span className="text-muted-foreground">Build by</span>{' '}
        <Link
          className="text-zinc-600 underline underline-offset-4 transition-colors duration-300 ease-in-out hover:text-primary"
          href="https://mowgli.codes"
        >
          ichmowgli
        </Link>
      </div>
      <div className="group flex flex-row items-center font-normal">
        <Link href="https://twitter.com/ichmowgli">Follow me on Twitter</Link>
        <ArrowUpRight size={20} className=" ml-1" />
      </div>
    </footer>
  );
}

export default Footer;
