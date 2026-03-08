import Link from "next/link";
import AdminNav from "@/app/admin/(protected)/AdminNav";
import AdminPageHeader from "@/app/admin/(protected)/AdminPageHeader";
import { adminCreateCollection } from "@/app/admin/actions";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { FieldInput } from "@/app/components/ui/field";
import { cn } from "@/lib/utils";

export default function AdminNewCollectionPage() {
  return (
    <div className="p-6">
      <AdminPageHeader title="New collection" />
      <AdminNav current="collections" />
      <form action={adminCreateCollection} className="flex max-w-md flex-col gap-4">
        <FieldInput
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Featured"
        />
        <FieldInput
          label="Slug"
          id="slug"
          name="slug"
          type="text"
          required
          placeholder="e.g. featured"
        />
        <FieldInput
          label="Sort order"
          id="sort_order"
          name="sort_order"
          type="number"
          min={0}
          defaultValue="0"
        />
        <div className="flex gap-3">
          <Button type="submit">Create collection</Button>
          <Link href="/admin/collections" className={cn(buttonVariants({ variant: "outline" }))}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
