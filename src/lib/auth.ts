import { createClient } from "@utils/supabase/server";
import { cookies } from "next/headers";

export async function getAdminUser() {
  const allowed = process.env.ADMIN_ALLOWED_EMAIL?.trim();
  if (!allowed) return null;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email || user.email !== allowed) return null;
  return user;
}
