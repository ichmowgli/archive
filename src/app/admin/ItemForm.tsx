import type { CollectionRow, ItemRow } from "@/lib/db/types";
import { Category } from "@/lib/shared";

type ItemFormProps = {
  collections: CollectionRow[];
  item?: ItemRow | null;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export default function ItemForm({ collections, item, action, submitLabel }: ItemFormProps) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-4">
      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-foreground">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={item?.title}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          defaultValue={item?.company}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="category" className="mb-1 block text-sm font-medium text-foreground">
          Category
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue={item?.category}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          {Object.values(Category).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="collection_id" className="mb-1 block text-sm font-medium text-foreground">
          Collection
        </label>
        <select
          id="collection_id"
          name="collection_id"
          defaultValue={item?.collection_id ?? ""}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">None</option>
          {collections.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="mb-1 block text-sm font-medium text-foreground">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            required
            defaultValue={item?.price}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="currency" className="mb-1 block text-sm font-medium text-foreground">
            Currency
          </label>
          <input
            id="currency"
            name="currency"
            type="text"
            required
            defaultValue={item?.currency}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="image" className="mb-1 block text-sm font-medium text-foreground">
          Image (URL or path)
        </label>
        <input
          id="image"
          name="image"
          type="text"
          required
          defaultValue={item?.image}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="href" className="mb-1 block text-sm font-medium text-foreground">
          Link (href)
        </label>
        <input
          id="href"
          name="href"
          type="url"
          required
          defaultValue={item?.href}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {submitLabel}
        </button>
        <a
          href="/admin"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
