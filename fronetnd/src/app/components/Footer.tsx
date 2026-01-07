import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="wrapper-y p-5 text-sm text-zinc-600	md:text-xs">
      <div>
        <span className="text-muted-foreground">Build by</span>{' '}
        <Link className="text-zinc-600 underline-offset-4 hover:underline " href="https://mowgli.codes">
          ichmowgli
        </Link>
      </div>
      <div className="group flex flex-row items-center font-normal text-muted-foreground">
        <Link href="https://twitter.com/ichmowgli">
          Follow me on <span className="text-zinc-600 underline-offset-4 group-hover:underline">Twitter</span>
        </Link>
        <ArrowUpRight size={20} className=" ml-1" />
      </div>
    </footer>
  );
}

export default Footer;
