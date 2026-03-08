import Link from "next/link";
import type { AdminItemRow as AdminItemRowType } from "@/lib/db/items";

export default function AdminItemRow({ item }: { item: AdminItemRowType }) {
  const collectionName = item.collections?.name ?? "—";
  return (
    <tr className="border-b border-border">
      <td className="p-3 text-foreground">{item.title}</td>
      <td className="p-3 text-muted-foreground">{item.company}</td>
      <td className="p-3 text-muted-foreground">{item.category}</td>
      <td className="p-3 text-muted-foreground">{collectionName}</td>
      <td className="p-3 text-muted-foreground">
        {Number(item.price)} {item.currency}
      </td>
      <td className="p-3">
        <span
          className={
            item.status === "active"
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          }
        >
          {item.status}
        </span>
      </td>
      <td className="p-3">
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/admin/items/${item.id}/edit`}
            className="text-sm text-primary underline hover:no-underline"
          >
            Edit
          </Link>
          {item.status === "active" ? (
            <form action={`/admin/items/${item.id}/status`} method="post" className="inline">
              <input type="hidden" name="status" value="archived" />
              <button
                type="submit"
                className="text-sm text-muted-foreground underline hover:text-foreground"
              >
                Archive
              </button>
            </form>
          ) : (
            <form action={`/admin/items/${item.id}/status`} method="post" className="inline">
              <input type="hidden" name="status" value="active" />
              <button
                type="submit"
                className="text-sm text-muted-foreground underline hover:text-foreground"
              >
                Unarchive
              </button>
            </form>
          )}
        </div>
      </td>
    </tr>
  );
}
