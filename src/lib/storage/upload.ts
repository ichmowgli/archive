import { createServiceRoleClient } from "@utils/supabase/server";

const BUCKET = "item-images";

export async function uploadImage(buffer: Buffer, mimeType: string): Promise<string> {
  const supabase = createServiceRoleClient();
  const ext = mimeType === "image/png" ? "png" : mimeType.startsWith("image/") ? "jpg" : "png";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, buffer, {
    contentType: mimeType,
    upsert: false,
  });

  if (error) throw new Error(`Storage upload failed: ${error.message}`);

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return publicUrl;
}
