import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LOCALES, getLocale } from '../../i18n/config';
import { useLocale } from '../../i18n/LanguageContext';
import { ChevronDownIcon } from '../icons';

export function LanguageSelect() {
  const { locale, setLocale, translate } = useLocale();
  const current = getLocale(locale);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label={translate('languageSelectorAria')}
          className="inline-flex items-center gap-heritage rounded-heritage border border-border bg-surface px-2 py-1 outline-none transition-colors hover:bg-subtle-fill focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <img
            src={current.flagUrl}
            alt={current.flagAlt}
            className="h-[12px] w-[18px] rounded-flag object-cover"
          />
          <span className="font-ui text-heritage font-bold text-muted whitespace-nowrap">
            {current.nativeName}
          </span>
          <ChevronDownIcon className="size-3 text-muted" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={6}
          className="z-50 flex min-w-[168px] flex-col gap-0.5 rounded-card border border-border bg-surface p-1 shadow-lg"
        >
          {LOCALES.map((option) => (
            <DropdownMenu.Item
              key={option.code}
              onSelect={() => setLocale(option.code)}
              data-state={option.code === locale ? 'checked' : 'unchecked'}
              className="flex cursor-pointer items-center gap-2 rounded-clear px-2 py-1.5 font-ui text-menu-desc text-foreground outline-none data-[highlighted]:bg-subtle-fill data-[state=checked]:font-bold"
            >
              <img
                src={option.flagUrl}
                alt={option.flagAlt}
                className="h-[12px] w-[18px] rounded-flag object-cover"
              />
              <span className="whitespace-nowrap">{option.nativeName}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
