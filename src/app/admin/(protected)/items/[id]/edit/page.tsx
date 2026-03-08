import Link from "next/link";
import { adminGetCollections, adminGetItem, adminUpdateItem } from "@/app/admin/actions";
import ItemForm from "@/app/admin/ItemForm";

export default async function AdminEditItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [item, collections] = await Promise.all([adminGetItem(id), adminGetCollections()]);
  if (!item) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Item not found.</p>
        <Link href="/admin" className="mt-2 inline-block text-sm text-primary underline">
          Back to admin
        </Link>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Edit item</h1>
      <ItemForm
        collections={collections}
        item={item}
        action={adminUpdateItem.bind(null, id)}
        submitLabel="Save"
      />
    </div>
  );
}
