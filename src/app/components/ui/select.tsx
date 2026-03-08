import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const selectClasses =
  "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

function Select({ className, children, ...props }: SelectProps) {
  return (
    <select className={cn(selectClasses, className)} {...props}>
      {children}
    </select>
  );
}

export { Select, selectClasses };
