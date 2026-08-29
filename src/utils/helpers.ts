export function formatEuro(cents: number) {
  return `€${(cents / 100).toFixed(2)}`;
}

export function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}
