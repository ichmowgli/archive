import ImageFieldWithDrop from "@/app/admin/ImageFieldWithDrop";
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

const categoryOptions = Object.values(Category).map((c) => ({ value: c, label: c }));

const currencyOptions = [
  { value: "eur", label: "EUR" },
  { value: "usd", label: "USD" },
  { value: "uah", label: "UAH" },
  { value: "pln", label: "PLN" },
];

export default function ItemForm({ collections, item, action, submitLabel }: ItemFormProps) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-4">
      <FieldInput label="Title" id="title" type="text" required defaultValue={item?.title} />
      <FieldInput label="Company" id="company" type="text" required defaultValue={item?.company} />
      <FieldSelect
        label="Category"
        id="category"
        name="category"
        options={categoryOptions}
        required
        defaultValue={item?.category}
      />
      <FieldSelect
        label="Collection"
        id="collection_id"
        name="collection_id"
        options={[
          { value: "", label: "None" },
          ...collections.map((c) => ({ value: c.id, label: c.name })),
        ]}
        defaultValue={item?.collection_id ?? ""}
      />
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
        <FieldSelect
          label="Currency"
          id="currency"
          name="currency"
          options={currencyOptions}
          required
          defaultValue={item?.currency?.toLowerCase()}
        />
      </div>
      <ImageFieldWithDrop
        label="Image"
        id="image"
        name="image"
        defaultValue={item?.image}
        required
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
