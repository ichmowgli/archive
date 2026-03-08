import AdminNav from "@/app/admin/(protected)/AdminNav";
import AdminPageHeader from "@/app/admin/(protected)/AdminPageHeader";
import { adminCreateItem, adminGetCollections } from "@/app/admin/actions";
import ItemForm from "@/app/admin/ItemForm";

export default async function AdminNewItemPage() {
  const collections = await adminGetCollections();
  return (
    <div className="p-6">
      <AdminPageHeader title="New item" />
      <AdminNav current="items" />
      <ItemForm collections={collections} action={adminCreateItem} submitLabel="Create item" />
    </div>
  );
}
