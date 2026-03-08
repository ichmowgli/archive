import type { SupabaseClient } from "@supabase/supabase-js";

import { Category, type Item } from "@/lib/shared";

import { ITEMS_PAGE_SIZE, type SortOption } from "./constants";
import type { ItemRow } from "./types";

export type GetItemsParams = {
  category?: string | null;
  collectionId?: string | null;
  collectionSlug?: string | null;
  sort?: SortOption;
  page?: number;
  limit?: number;
};

export type GetItemsResult = {
  data: Item[];
  nextCursor: number | null;
};

const SORT_TO_ORDER: Record<SortOption, { column: string; ascending: boolean }> = {
  newest: { column: "created_at", ascending: false },
  price_asc: { column: "price", ascending: true },
  price_desc: { column: "price", ascending: false },
  title_asc: { column: "title", ascending: true },
  title_desc: { column: "title", ascending: false },
};

function rowToItem(row: ItemRow): Item {
  const category = Object.values(Category).includes(row.category as Category)
    ? (row.category as Category)
    : Category.Lifestyle;
  return {
    id: row.id,
    title: row.title,
    price: Number(row.price),
    currency: row.currency,
    company: row.company,
    category,
    image: row.image as Item["image"],
    href: row.href,
  };
}

export async function getItems(
  supabase: SupabaseClient,
  params: GetItemsParams = {},
): Promise<GetItemsResult> {
  const {
    category,
    collectionId,
    collectionSlug,
    sort = "newest",
    page = 1,
    limit = ITEMS_PAGE_SIZE,
  } = params;

  const { column, ascending } = SORT_TO_ORDER[sort];
  const pageNum = Math.max(1, Math.floor(page));
  const from = (pageNum - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("items")
    .select("id,title,price,currency,company,category,image,href,created_at,status,collection_id", {
      count: "exact",
    })
    .eq("status", "active")
    .order(column, { ascending })
    .range(from, to);

  if (category) {
    query = query.eq("category", category);
  }
  if (collectionId) {
    query = query.eq("collection_id", collectionId);
  }
  if (collectionSlug) {
    const { data: collection } = await supabase
      .from("collections")
      .select("id")
      .eq("slug", collectionSlug)
      .single();
    if (collection) {
      query = query.eq("collection_id", collection.id);
    }
  }

  const { data: rows, error, count } = await query;

  if (error) {
    throw new Error(`Failed to fetch items: ${error.message}`);
  }

  const data = (rows ?? []).map(rowToItem);
  const hasMore = count != null && count > to + 1;
  const nextCursor = hasMore ? pageNum + 1 : null;

  return { data, nextCursor };
}

export async function getItemById(supabase: SupabaseClient, id: string): Promise<Item | null> {
  const { data, error } = await supabase
    .from("items")
    .select("id,title,price,currency,company,category,image,href,created_at,status,collection_id")
    .eq("id", id)
    .eq("status", "active")
    .single();

  if (error || !data) {
    return null;
  }

  return rowToItem(data as ItemRow);
}
