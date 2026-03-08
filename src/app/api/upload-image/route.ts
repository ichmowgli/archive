import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { uploadImage } from "@/lib/storage/upload";

const MAX_SIZE_MB = 20;
const MAX_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export async function POST(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Expected multipart/form-data with an 'image' file" },
        { status: 400 },
      );
    }

    const formData = await request.formData();
    const file = formData.get("image");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Missing 'image' file" }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: `Image must be under ${MAX_SIZE_MB} MB` }, { status: 400 });
    }

    const type = file.type || "image/png";
    if (!ALLOWED_TYPES.includes(type)) {
      return NextResponse.json(
        { error: `Allowed types: ${ALLOWED_TYPES.join(", ")}` },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadImage(buffer, type);

    return NextResponse.json({ url });
  } catch (err) {
    console.error("upload-image error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Upload failed" },
      { status: 500 },
    );
  }
}
