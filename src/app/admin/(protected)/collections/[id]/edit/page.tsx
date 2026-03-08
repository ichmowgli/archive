import Link from "next/link";
import { adminGetCollection, adminUpdateCollection } from "@/app/admin/actions";

export default async function AdminEditCollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collection = await adminGetCollection(id);
  if (!collection) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Collection not found.</p>
        <Link
          href="/admin/collections"
          className="mt-2 inline-block text-sm text-primary underline"
        >
          Back to collections
        </Link>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Edit collection</h1>
      <form action={adminUpdateCollection.bind(null, id)} className="flex max-w-md flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={collection.name}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="slug" className="mb-1 block text-sm font-medium text-foreground">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            required
            defaultValue={collection.slug}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="sort_order" className="mb-1 block text-sm font-medium text-foreground">
            Sort order
          </label>
          <input
            id="sort_order"
            name="sort_order"
            type="number"
            min="0"
            defaultValue={collection.sort_order}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Save
          </button>
          <Link
            href="/admin/collections"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
