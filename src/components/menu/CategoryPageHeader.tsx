import { useLocale } from '../../i18n/LanguageContext';
import { ChevronLeftIcon, SearchIcon } from '../icons';

type CategoryPageHeaderProps = {
  title: string;
};

export function CategoryPageHeader({ title }: CategoryPageHeaderProps) {
  const { translate } = useLocale();

  return (
    <header className="flex h-header w-full shrink-0 items-center justify-between border-b border-border bg-background px-page">
      <div className="flex items-center gap-3">
        <a
          href="/menu"
          aria-label={translate('backAria')}
          className="flex size-8 items-center justify-center rounded-back-btn bg-subtle-fill text-foreground outline-none transition-colors hover:bg-clear-button focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <ChevronLeftIcon className="size-4" />
        </a>
        <p className="font-display-italic text-section-heading font-bold text-brand">{title}</p>
      </div>
      <a
        href="/search"
        aria-label={translate('searchButtonAria')}
        className="flex size-9 items-center justify-center rounded-search-btn bg-subtle-fill text-foreground outline-none transition-colors hover:bg-clear-button focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        <SearchIcon className="size-[18px]" />
      </a>
    </header>
  );
}
