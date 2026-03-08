import { cookies } from "next/headers";

import { createClient } from "../../../utils/supabase/server";

import HomeClient from "./HomeClient";

export default async function Home() {
  const cookieStore = await cookies();
  const _supabase = createClient(cookieStore);

  return <HomeClient />;
}
