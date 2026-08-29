export function formatEuro(cents: number) {
  return `€${(cents / 100).toFixed(2)}`;
}
