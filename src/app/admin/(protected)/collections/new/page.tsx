import Link from "next/link";
import { adminCreateCollection } from "@/app/admin/actions";

export default function AdminNewCollectionPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">New collection</h1>
      <form action={adminCreateCollection} className="flex max-w-md flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Featured"
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
            placeholder="e.g. featured"
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
            defaultValue="0"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Create collection
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
