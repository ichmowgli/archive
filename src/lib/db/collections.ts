import type { SupabaseClient } from "@supabase/supabase-js";

import type { CollectionRow } from "./types";

export type CollectionNavItem = {
  id: string;
  name: string;
  slug: string;
};

export async function getCollections(supabase: SupabaseClient): Promise<CollectionNavItem[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, slug")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch collections: ${error.message}`);
  }

  return (data ?? []) as CollectionNavItem[];
}

export async function getCollectionsForAdmin(supabase: SupabaseClient): Promise<CollectionRow[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, slug, sort_order, created_at")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(`Failed to fetch collections: ${error.message}`);
  return (data ?? []) as CollectionRow[];
}

export async function getCollectionById(
  supabase: SupabaseClient,
  id: string,
): Promise<CollectionRow | null> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, slug, sort_order, created_at")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as CollectionRow;
}

export type CreateCollectionPayload = { name: string; slug: string; sort_order?: number };

export async function createCollection(
  supabase: SupabaseClient,
  payload: CreateCollectionPayload,
): Promise<CollectionRow> {
  const { data, error } = await supabase
    .from("collections")
    .insert({
      name: payload.name,
      slug: payload.slug,
      sort_order: payload.sort_order ?? 0,
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create collection: ${error.message}`);
  return data as CollectionRow;
}

export type UpdateCollectionPayload = { name?: string; slug?: string; sort_order?: number };

export async function updateCollection(
  supabase: SupabaseClient,
  id: string,
  payload: UpdateCollectionPayload,
): Promise<CollectionRow> {
  const updates: Record<string, unknown> = {};
  if (payload.name !== undefined) updates.name = payload.name;
  if (payload.slug !== undefined) updates.slug = payload.slug;
  if (payload.sort_order !== undefined) updates.sort_order = payload.sort_order;
  const { data, error } = await supabase
    .from("collections")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update collection: ${error.message}`);
  return data as CollectionRow;
}

export async function deleteCollection(supabase: SupabaseClient, id: string): Promise<void> {
  const { error } = await supabase.from("collections").delete().eq("id", id);
  if (error) throw new Error(`Failed to delete collection: ${error.message}`);
}
