import { adminCreateItem, adminGetCollections } from "@/app/admin/actions";
import ItemForm from "@/app/admin/ItemForm";

export default async function AdminNewItemPage() {
  const collections = await adminGetCollections();
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">New item</h1>
      <ItemForm collections={collections} action={adminCreateItem} submitLabel="Create item" />
    </div>
  );
}
