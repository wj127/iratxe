import { HeritageBadge } from '../ui/HeritageBadge';
import { SearchIcon } from '../icons';

export function MenuHeader() {
  return (
    <header className="flex h-header w-full shrink-0 items-center justify-between border-b border-border bg-background px-page">
      <div className="flex items-center gap-3">
        <HeritageBadge />
        <span className="font-display-italic text-section-heading font-bold text-brand">
          Iratxe
        </span>
      </div>
      <a
        href="/search"
        aria-label="Buscar"
        className="flex size-9 items-center justify-center rounded-search-btn bg-subtle-fill text-foreground outline-none transition-colors hover:bg-clear-button focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        <SearchIcon className="size-[18px]" />
      </a>
    </header>
  );
}
