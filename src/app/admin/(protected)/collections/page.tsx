import Link from "next/link";
import AdminNav from "@/app/admin/(protected)/AdminNav";
import AdminPageHeader from "@/app/admin/(protected)/AdminPageHeader";
import { adminDeleteCollectionForm, adminGetCollections } from "@/app/admin/actions";
import type { CollectionRow } from "@/lib/db/types";

export default async function AdminCollectionsPage() {
  const collections = await adminGetCollections();

  return (
    <div className="p-6">
      <AdminPageHeader title="Collections" />
      <AdminNav current="collections" />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium text-foreground">All collections</h2>
        <Link
          href="/admin/collections/new"
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          New collection
        </Link>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[400px] text-left text-sm">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              <th className="p-3 font-medium text-foreground">Name</th>
              <th className="p-3 font-medium text-foreground">Slug</th>
              <th className="p-3 font-medium text-foreground">Sort order</th>
              <th className="p-3 font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {collections.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-muted-foreground">
                  No collections yet. Create one from “New collection”.
                </td>
              </tr>
            ) : (
              collections.map((c: CollectionRow) => (
                <tr key={c.id} className="border-b border-border">
                  <td className="p-3 text-foreground">{c.name}</td>
                  <td className="p-3 text-muted-foreground">{c.slug}</td>
                  <td className="p-3 text-muted-foreground">{c.sort_order}</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/admin/collections/${c.id}/edit`}
                        className="text-sm text-primary underline hover:no-underline"
                      >
                        Edit
                      </Link>
                      <form action={adminDeleteCollectionForm} className="inline">
                        <input type="hidden" name="id" value={c.id} />
                        <button
                          type="submit"
                          className="text-sm text-destructive underline hover:no-underline"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
