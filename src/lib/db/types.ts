export type ItemRow = {
  id: string;
  title: string;
  price: number;
  currency: string;
  company: string;
  category: string;
  image: string;
  href: string;
  created_at: string;
  status: string;
  collection_id: string | null;
};

export type CollectionRow = {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  created_at: string;
};
