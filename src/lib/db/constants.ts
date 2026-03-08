import { Category } from "@/lib/shared";

export const ITEMS_PAGE_SIZE = 24;

export const SORT_OPTIONS = [
  "newest",
  "price_asc",
  "price_desc",
  "title_asc",
  "title_desc",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

export function isSortOption(value: string | null): value is SortOption {
  return value !== null && SORT_OPTIONS.includes(value as SortOption);
}

export function normalizeCategory(value: string | null): string | null {
  if (!value) return null;
  const lower = value.toLowerCase();
  const match = Object.values(Category).find((c) => c.toLowerCase() === lower);
  return match ?? null;
}
