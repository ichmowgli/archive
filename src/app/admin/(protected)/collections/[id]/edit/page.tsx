import Link from "next/link";
import AdminNav from "@/app/admin/(protected)/AdminNav";
import AdminPageHeader from "@/app/admin/(protected)/AdminPageHeader";
import { adminGetCollection, adminUpdateCollection } from "@/app/admin/actions";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { FieldInput } from "@/app/components/ui/field";
import { cn } from "@/lib/utils";

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
        <AdminPageHeader title="Edit collection" />
        <AdminNav current="collections" />
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
      <AdminPageHeader title="Edit collection" />
      <AdminNav current="collections" />
      <form action={adminUpdateCollection.bind(null, id)} className="flex max-w-md flex-col gap-4">
        <FieldInput
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          defaultValue={collection.name}
        />
        <FieldInput
          label="Slug"
          id="slug"
          name="slug"
          type="text"
          required
          defaultValue={collection.slug}
        />
        <FieldInput
          label="Sort order"
          id="sort_order"
          name="sort_order"
          type="number"
          min={0}
          defaultValue={collection.sort_order}
        />
        <div className="flex gap-3">
          <Button type="submit">Save</Button>
          <Link href="/admin/collections" className={cn(buttonVariants({ variant: "outline" }))}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
