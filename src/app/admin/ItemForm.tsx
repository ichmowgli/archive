import { Button, buttonVariants } from "@/app/components/ui/button";
import { FieldInput, FieldSelect } from "@/app/components/ui/field";
import type { CollectionRow, ItemRow } from "@/lib/db/types";
import { Category } from "@/lib/shared";
import { cn } from "@/lib/utils";

type ItemFormProps = {
  collections: CollectionRow[];
  item?: ItemRow | null;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export default function ItemForm({ collections, item, action, submitLabel }: ItemFormProps) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-4">
      <FieldInput label="Title" id="title" type="text" required defaultValue={item?.title} />
      <FieldInput label="Company" id="company" type="text" required defaultValue={item?.company} />
      <FieldSelect label="Category" id="category" required defaultValue={item?.category}>
        {Object.values(Category).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </FieldSelect>
      <FieldSelect
        label="Collection"
        id="collection_id"
        name="collection_id"
        defaultValue={item?.collection_id ?? ""}
      >
        <option value="">None</option>
        {collections.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </FieldSelect>
      <div className="grid grid-cols-2 gap-4">
        <FieldInput
          label="Price"
          id="price"
          name="price"
          type="number"
          step="0.01"
          min={0}
          required
          defaultValue={item?.price}
        />
        <FieldInput
          label="Currency"
          id="currency"
          name="currency"
          type="text"
          required
          defaultValue={item?.currency}
        />
      </div>
      <FieldInput
        label="Image (URL or path)"
        id="image"
        type="text"
        required
        defaultValue={item?.image}
      />
      <FieldInput
        label="Link (href)"
        id="href"
        name="href"
        type="url"
        required
        defaultValue={item?.href}
      />
      <div className="flex gap-3">
        <Button type="submit">{submitLabel}</Button>
        <a href="/admin" className={cn(buttonVariants({ variant: "outline" }))}>
          Cancel
        </a>
      </div>
    </form>
  );
}
