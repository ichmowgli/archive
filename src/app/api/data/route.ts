import { createClient } from "@utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { isSortOption, normalizeCategory } from "@/lib/db/constants";
import { getItems } from "@/lib/db/items";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page");
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");
  const sortParam = searchParams.get("sort");

  const page =
    pageParam !== null && pageParam !== "" ? Math.max(1, Math.floor(Number(pageParam)) || 1) : 1;
  const category = normalizeCategory(categoryParam);
  const sort = isSortOption(sortParam) ? sortParam : "newest";

  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const result = await getItems(supabase, {
      category: category ?? undefined,
      collectionSlug:
        collectionParam !== null && collectionParam !== "" ? collectionParam : undefined,
      sort,
      page,
    });

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
