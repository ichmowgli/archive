import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const _page = searchParams.get("page");
  const _category = searchParams.get("category");

  // TODO: read from Supabase via data layer; support category, collection, sort, page
  return NextResponse.json({
    data: [],
    nextCursor: null,
  });
}
