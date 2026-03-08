import { createClient } from "@utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getCollections } from "@/lib/db";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const collections = await getCollections(supabase);
    return NextResponse.json(collections);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch collections";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
