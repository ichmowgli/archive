import { createServiceRoleClient } from "@utils/supabase/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { updateItemStatus } from "@/lib/db/items";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const formData = await request.formData();
  const status = formData.get("status");
  if (status !== "active" && status !== "archived") {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }
  const supabase = createServiceRoleClient();
  await updateItemStatus(supabase, id, status);
  revalidatePath("/admin");
  revalidatePath("/");
  return NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
}
