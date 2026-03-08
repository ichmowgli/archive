import Link from "next/link";
import { adminGetItems, adminGetItemsCounts } from "@/app/admin/actions";
import AdminItemRow from "./AdminItemRow";

export const dynamic = "force-dynamic";

const PER_PAGE = 50;

type StatusTab = "all" | "active" | "archived";

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const { status: statusParam, page: pageParam } = await searchParams;
  const tab: StatusTab =
    statusParam === "active" || statusParam === "archived" ? statusParam : "all";
  const statusFilter = tab === "all" ? undefined : tab;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const [itemsResult, counts] = await Promise.all([
    adminGetItems(page, statusFilter ?? null),
    tab === "all" ? adminGetItemsCounts() : null,
  ]);
  const { data: items, nextCursor, total } = itemsResult;
  const totalActive = counts?.active ?? items.filter((i) => i.status === "active").length;
  const totalArchived = counts?.archived ?? items.filter((i) => i.status === "archived").length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = nextCursor;
  const statusQuery = tab !== "all" ? `&status=${tab}` : "";

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Admin</h1>
        <form action="/admin/logout" method="post">
          <button
            type="submit"
            className="text-sm text-muted-foreground underline hover:text-foreground"
          >
            Log out
          </button>
        </form>
      </div>

      <nav className="mb-8 flex gap-4 border-b border-border pb-4">
        <Link
          href="/admin"
          className="text-sm font-medium text-primary underline underline-offset-4"
        >
          Items
        </Link>
        <Link
          href="/admin/collections"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Collections
        </Link>
      </nav>

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-foreground">Items</h2>
          <p className="text-xs text-muted-foreground">
            {tab === "all"
              ? `${totalActive + totalArchived} total (${totalActive} active, ${totalArchived} archived) — page ${page} of ${totalPages || 1}`
              : `${total} ${tab} — page ${page} of ${totalPages || 1}`}
          </p>
        </div>
        <Link
          href="/admin/items/new"
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          New item
        </Link>
      </div>

      <div className="mb-3 flex gap-1 rounded-md border border-border p-1">
        <Link
          href="/admin"
          className={`rounded px-3 py-1.5 text-sm font-medium ${
            tab === "all"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          All
        </Link>
        <Link
          href="/admin?status=active"
          className={`rounded px-3 py-1.5 text-sm font-medium ${
            tab === "active"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          Active
        </Link>
        <Link
          href="/admin?status=archived"
          className={`rounded px-3 py-1.5 text-sm font-medium ${
            tab === "archived"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          Archived
        </Link>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              <th className="p-3 font-medium text-foreground">Title</th>
              <th className="p-3 font-medium text-foreground">Company</th>
              <th className="p-3 font-medium text-foreground">Category</th>
              <th className="p-3 font-medium text-foreground">Collection</th>
              <th className="p-3 font-medium text-foreground">Price</th>
              <th className="p-3 font-medium text-foreground">Status</th>
              <th className="p-3 font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-4 text-muted-foreground">
                  {tab === "archived"
                    ? "No archived items."
                    : tab === "active"
                      ? "No active items."
                      : "No items yet. Create one from “New item”."}
                </td>
              </tr>
            ) : (
              items.map((item) => <AdminItemRow key={item.id} item={item} />)
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {total === 0
            ? "0 items"
            : `Showing ${(page - 1) * PER_PAGE + 1}–${Math.min(page * PER_PAGE, total)} of ${total}`}
        </span>
        <div className="flex gap-2">
          {prevPage != null ? (
            <Link
              href={`/admin?page=${prevPage}${statusQuery}`}
              className="rounded border border-border px-3 py-1 hover:bg-muted"
            >
              ← Previous
            </Link>
          ) : null}
          {nextPage != null ? (
            <Link
              href={`/admin?page=${nextPage}${statusQuery}`}
              className="rounded border border-border px-3 py-1 hover:bg-muted"
            >
              Next →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
