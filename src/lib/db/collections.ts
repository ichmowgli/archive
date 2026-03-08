import type { SupabaseClient } from "@supabase/supabase-js";

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
