"use server";

import { createClient, createServiceRoleClient } from "@utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import {
  createCollection,
  deleteCollection,
  getCollectionById,
  getCollectionsForAdmin,
  updateCollection,
} from "@/lib/db/collections";
import {
  type CreateItemPayload,
  createItem,
  getItemByIdForAdmin,
  getItemsCountsForAdmin,
  getItemsForAdmin,
  updateItem,
  updateItemStatus,
} from "@/lib/db/items";

export async function requestAdminMagicLink(
  email: string,
  redirectTo: string,
): Promise<{ error: string | null }> {
  const allowed = process.env.ADMIN_ALLOWED_EMAIL?.trim();
  const normalized = email.trim();
  if (!allowed || normalized !== allowed) {
    return { error: "unauthorized" };
  }

  const base =
    process.env.NEXT_PUBLIC_APP_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);
  const emailRedirectTo = base
    ? `${base}/auth/callback`
    : redirectTo || "http://localhost:3000/auth/callback";
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.auth.signInWithOtp({
    email: normalized,
    options: { emailRedirectTo },
  });
  if (error) return { error: error.message };
  return { error: null };
}

async function getSupabaseForAdmin() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  // Prefer service role when key is set (so admin list includes archived items)
  if (process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()) {
    return createServiceRoleClient();
  }
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  return createClient(cookieStore);
}

export async function adminGetItems(page: number = 1, status?: "active" | "archived" | null) {
  const supabase = await getSupabaseForAdmin();
  return getItemsForAdmin(supabase, {
    page,
    limit: 50,
    status: status ?? undefined,
  });
}

export async function adminGetItemsCounts() {
  const supabase = await getSupabaseForAdmin();
  return getItemsCountsForAdmin(supabase);
}

export async function adminGetItem(id: string) {
  const supabase = await getSupabaseForAdmin();
  return getItemByIdForAdmin(supabase, id);
}

function payloadFromFormData(formData: FormData): CreateItemPayload {
  const price = Number(formData.get("price"));
  return {
    title: (formData.get("title") as string) ?? "",
    price: Number.isFinite(price) ? price : 0,
    currency: (formData.get("currency") as string) ?? "EUR",
    company: (formData.get("company") as string) ?? "",
    category: (formData.get("category") as string) ?? "Lifestyle",
    image: (formData.get("image") as string) ?? "",
    href: (formData.get("href") as string) ?? "",
    collection_id: formData.get("collection_id") ? (formData.get("collection_id") as string) : null,
  };
}

export async function adminCreateItem(formData: FormData) {
  const supabase = await getSupabaseForAdmin();
  await createItem(supabase, payloadFromFormData(formData));
  revalidatePath("/admin");
  revalidatePath("/");
  redirect("/admin");
}

export async function adminUpdateItem(id: string, formData: FormData) {
  const supabase = await getSupabaseForAdmin();
  const raw = payloadFromFormData(formData);
  await updateItem(supabase, id, {
    title: raw.title,
    price: raw.price,
    currency: raw.currency,
    company: raw.company,
    category: raw.category,
    image: raw.image,
    href: raw.href,
    collection_id: raw.collection_id,
  });
  revalidatePath("/admin");
  revalidatePath(`/admin/items/${id}`);
  revalidatePath("/");
  redirect("/admin");
}

export async function adminSetItemStatus(id: string, status: "active" | "archived") {
  const supabase = await getSupabaseForAdmin();
  await updateItemStatus(supabase, id, status);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function adminGetCollections() {
  const supabase = await getSupabaseForAdmin();
  return getCollectionsForAdmin(supabase);
}

export async function adminGetCollection(id: string) {
  const supabase = await getSupabaseForAdmin();
  return getCollectionById(supabase, id);
}

export async function adminCreateCollection(formData: FormData) {
  const supabase = await getSupabaseForAdmin();
  await createCollection(supabase, {
    name: (formData.get("name") as string) ?? "",
    slug: (formData.get("slug") as string) ?? "",
    sort_order: Number(formData.get("sort_order")) || 0,
  });
  revalidatePath("/admin");
  revalidatePath("/admin/collections");
  redirect("/admin/collections");
}

export async function adminUpdateCollection(id: string, formData: FormData) {
  const supabase = await getSupabaseForAdmin();
  await updateCollection(supabase, id, {
    name: formData.get("name") as string | undefined,
    slug: formData.get("slug") as string | undefined,
    sort_order:
      formData.get("sort_order") !== null ? Number(formData.get("sort_order")) : undefined,
  });
  revalidatePath("/admin");
  revalidatePath("/admin/collections");
  revalidatePath("/");
  redirect("/admin/collections");
}

export async function adminDeleteCollection(id: string) {
  const supabase = await getSupabaseForAdmin();
  await deleteCollection(supabase, id);
  revalidatePath("/admin");
  revalidatePath("/admin/collections");
  revalidatePath("/");
}

export async function adminDeleteCollectionForm(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) redirect("/admin/collections");
  await adminDeleteCollection(id);
  redirect("/admin/collections");
}
