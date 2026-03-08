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

// --- Admin: all items (any status), with collection slug for display ---
export type AdminItemRow = ItemRow & { collections?: { slug: string; name: string } | null };

export async function getItemsForAdmin(
  supabase: SupabaseClient,
  params: { page?: number; limit?: number; status?: "active" | "archived" | null } = {},
): Promise<{ data: AdminItemRow[]; nextCursor: number | null; total: number }> {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(100, Math.max(1, params.limit ?? 50));
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("items")
    .select(
      "id,title,price,currency,company,category,image,href,created_at,status,collection_id,collections(slug,name)",
      {
        count: "exact",
      },
    )
    .order("created_at", { ascending: false })
    .range(from, to);

  if (params.status === "active" || params.status === "archived") {
    query = query.eq("status", params.status);
  }

  const { data: rows, error, count } = await query;

  if (error) throw new Error(`Failed to fetch items: ${error.message}`);

  const data = (rows ?? []).map((r) => {
    const raw = r as {
      collections?: { slug: string; name: string } | { slug: string; name: string }[] | null;
    };
    const c = raw.collections;
    const single = Array.isArray(c) ? (c[0] ?? null) : (c ?? null);
    return { ...r, collections: single } as AdminItemRow;
  });
  const total = count ?? 0;
  const hasMore = total > to + 1;
  return { data, nextCursor: hasMore ? page + 1 : null, total };
}

export async function getItemsCountsForAdmin(
  supabase: SupabaseClient,
): Promise<{ active: number; archived: number }> {
  const [activeRes, archivedRes] = await Promise.all([
    supabase.from("items").select("id", { count: "exact", head: true }).eq("status", "active"),
    supabase.from("items").select("id", { count: "exact", head: true }).eq("status", "archived"),
  ]);
  return {
    active: activeRes.count ?? 0,
    archived: archivedRes.count ?? 0,
  };
}

export async function getItemByIdForAdmin(
  supabase: SupabaseClient,
  id: string,
): Promise<ItemRow | null> {
  const { data, error } = await supabase
    .from("items")
    .select("id,title,price,currency,company,category,image,href,created_at,status,collection_id")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as ItemRow;
}

export type CreateItemPayload = {
  title: string;
  price: number;
  currency: string;
  company: string;
  category: string;
  image: string;
  href: string;
  collection_id?: string | null;
};

export type UpdateItemPayload = Partial<CreateItemPayload>;

export async function createItem(
  supabase: SupabaseClient,
  payload: CreateItemPayload,
): Promise<ItemRow> {
  const { data, error } = await supabase
    .from("items")
    .insert({
      title: payload.title,
      price: payload.price,
      currency: payload.currency,
      company: payload.company,
      category: payload.category,
      image: payload.image,
      href: payload.href,
      collection_id: payload.collection_id ?? null,
      status: "active",
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create item: ${error.message}`);
  return data as ItemRow;
}

export async function updateItem(
  supabase: SupabaseClient,
  id: string,
  payload: UpdateItemPayload,
): Promise<ItemRow> {
  const { data, error } = await supabase
    .from("items")
    .update({
      ...(payload.title !== undefined && { title: payload.title }),
      ...(payload.price !== undefined && { price: payload.price }),
      ...(payload.currency !== undefined && { currency: payload.currency }),
      ...(payload.company !== undefined && { company: payload.company }),
      ...(payload.category !== undefined && { category: payload.category }),
      ...(payload.image !== undefined && { image: payload.image }),
      ...(payload.href !== undefined && { href: payload.href }),
      ...(payload.collection_id !== undefined && { collection_id: payload.collection_id }),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update item: ${error.message}`);
  return data as ItemRow;
}

export async function updateItemStatus(
  supabase: SupabaseClient,
  id: string,
  status: "active" | "archived",
): Promise<void> {
  const { error } = await supabase.from("items").update({ status }).eq("id", id);
  if (error) throw new Error(`Failed to update status: ${error.message}`);
}
