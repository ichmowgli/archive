"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { Label } from "@/app/components/ui/label";
import { cn } from "@/lib/utils";

const ACCEPT = "image/jpeg,image/png,image/webp";
const MAX_SIZE_MB = 20;
const MAX_BYTES = MAX_SIZE_MB * 1024 * 1024;

type ImageFieldWithDropProps = {
  label?: string;
  id: string;
  name?: string;
  defaultValue?: string;
  required?: boolean;
};

export default function ImageFieldWithDrop({
  label = "Image",
  id,
  name = "image",
  defaultValue = "",
  required = false,
}: ImageFieldWithDropProps) {
  const [imageValue, setImageValue] = useState(defaultValue);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestIdRef = useRef(0);

  const processFile = useCallback(async (file: File) => {
    setError(null);
    if (!file.type.startsWith("image/")) {
      setError("Please drop or choose an image (JPEG, PNG, or WebP).");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError(`Image must be under ${MAX_SIZE_MB} MB.`);
      return;
    }
    const requestId = ++requestIdRef.current;
    setLoading(true);
    try {
      const form = new FormData();
      form.append("image", file);
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: form,
        credentials: "include",
      });
      const data = await res.json().catch(() => ({}));
      if (requestId !== requestIdRef.current) return;
      if (!res.ok) {
        setError(data.error || "Upload failed. Try again.");
        return;
      }
      if (data.url) {
        setPreviewUrl(data.url);
      } else {
        setError("No URL returned. Try again.");
      }
    } catch (err) {
      if (requestId !== requestIdRef.current) return;
      setError(err instanceof Error ? err.message : "Network error. Try again.");
    } finally {
      if (requestId === requestIdRef.current) setLoading(false);
    }
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processFile(file);
      else setError("No file received. Drop an image file.");
    },
    [processFile],
  );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    if (e.dataTransfer.types.includes("Files")) setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const related = e.relatedTarget as Node | null;
    if (!related || !e.currentTarget.contains(related)) setIsDragging(false);
  }, []);

  const onFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
      e.target.value = "";
    },
    [processFile],
  );

  const confirmPreview = useCallback(() => {
    if (previewUrl) {
      setImageValue(previewUrl.split("?")[0] ?? previewUrl);
      setPreviewUrl(null);
    }
  }, [previewUrl]);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        type="hidden"
        name={name}
        id={id}
        value={imageValue}
        readOnly
        aria-hidden
        required={required}
      />

      <button
        type="button"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => !loading && document.getElementById(`${id}-file`)?.click()}
        disabled={loading}
        className={cn(
          "mt-1 flex min-h-[120px] w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-4 text-center text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isDragging && "border-primary bg-primary/5",
          !isDragging && "border-input bg-muted/30",
        )}
      >
        <input
          type="file"
          accept={ACCEPT}
          onChange={onFileInputChange}
          className="sr-only"
          id={`${id}-file`}
          disabled={loading}
          aria-hidden
        />
        <span className={cn("pointer-events-none select-none", loading && "opacity-70")}>
          {loading ? (
            <p className="text-muted-foreground">Uploading…</p>
          ) : (
            <>
              <span className="font-medium text-primary">
                Drop an image here or click to choose
              </span>
              <p className="mt-1 text-muted-foreground">Image will be uploaded to Supabase.</p>
            </>
          )}
        </span>
      </button>
      {error && (
        <p className="mt-1 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <AlertDialog
        open={!!previewUrl}
        onOpenChange={(open) => {
          if (!open) setPreviewUrl(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Does it look OK?</AlertDialogTitle>
          </AlertDialogHeader>
          {previewUrl && (
            <div className="relative h-[40vh] min-h-[200px] w-full rounded-md border bg-muted/30 p-2">
              <Image
                key={previewUrl}
                src={`${previewUrl}${previewUrl.includes("?") ? "&" : "?"}t=${Date.now()}`}
                alt="Preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmPreview}>OK, use this image</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
