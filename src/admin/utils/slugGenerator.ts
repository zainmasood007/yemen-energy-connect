const ARABIC_RANGE = /[\u0600-\u06FF]/;

function isLikelyArabic(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;

  const hasArabic = ARABIC_RANGE.test(trimmed);
  const hasLatin = /[a-zA-Z]/.test(trimmed);

  return hasArabic && !hasLatin;
}

// Stable hash-based ID so the same Arabic title always maps to the same slug suffix
function stableIdFromString(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6) || 'item';
}

export function generateSlug(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return `item-${stableIdFromString('empty')}`;
  }

  if (isLikelyArabic(trimmed)) {
    return `item-${stableIdFromString(trimmed)}`;
  }

  return trimmed
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}
