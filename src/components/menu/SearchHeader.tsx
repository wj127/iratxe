import { useLocale } from '../../i18n/LanguageContext';
import { ChevronLeftIcon, SearchIcon } from '../icons';

type SearchHeaderProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchHeader({ value, onChange }: SearchHeaderProps) {
  const { translate } = useLocale();

  return (
    <header className="flex h-header w-full shrink-0 items-center gap-3 border-b border-border bg-background px-page">
      <a
        href="/menu"
        aria-label={translate('backAria')}
        className="flex size-8 shrink-0 items-center justify-center rounded-back-btn bg-subtle-fill text-foreground outline-none transition-colors hover:bg-clear-button focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        <ChevronLeftIcon className="size-4" />
      </a>
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-input bg-subtle-fill px-3 py-2 focus-within:ring-2 focus-within:ring-brand/40">
        <SearchIcon className="size-[18px] shrink-0 text-muted" />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={translate('searchPlaceholder')}
          aria-label={translate('searchInputAria')}
          autoFocus
          className="min-w-0 flex-1 bg-transparent font-ui text-input font-normal text-foreground outline-none placeholder:text-muted"
        />
      </div>
    </header>
  );
}
