import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import { BOCADILLOS_CATEGORY_ID, type Category } from '../../constants/categories';
import type { Item } from '../../constants/items';
import { localizeCategory } from '../../i18n/content';
import { LanguageProvider, useLocale } from '../../i18n/LanguageContext';
import { CategoryPageHeader } from './CategoryPageHeader';
import { CategoryExtras } from './CategoryExtras';
import { MenuItemRow } from './MenuItemRow';
import type { Extra } from '../../constants/extras';

type CategoryItemsProps = {
  category: Category;
  items: Item[];
  extras: Extra['extras'];
};

function CategoryItemsContent({ category, items, extras }: CategoryItemsProps) {
  const { locale, translate } = useLocale();
  const isBocadillos = category.category_id === BOCADILLOS_CATEGORY_ID;
  const localizedCategory = localizeCategory(category, locale);

  return (
    <div className="mx-auto flex h-dvh w-full max-w-mobile flex-col bg-background">
      <CategoryPageHeader title={localizedCategory.name} />
      <ScrollArea.Root type="scroll" className="min-h-0 flex-1">
        <ScrollArea.Viewport className="size-full">
          <div className="flex flex-col gap-content p-page">
            <div className="flex flex-col gap-element-sm">
              <h1 className="font-display text-page-title font-bold text-foreground">
                {localizedCategory.heading}
              </h1>
              <p className="font-ui text-menu-desc font-normal text-muted">
                {localizedCategory.subtitle}
              </p>
            </div>
            {items.length === 0 ? (
              <p className="font-ui text-menu-desc text-muted">{translate('emptyCategory')}</p>
            ) : (
              <div className="flex w-full flex-col">
                {items.map((item, index) => (
                  <div key={item.item_id}>
                    {index > 0 ? (
                      <Separator.Root decorative className="h-px w-full bg-border" />
                    ) : null}
                    <MenuItemRow item={item} isBocadillos={isBocadillos} />
                  </div>
                ))}
              </div>
            )}
            <CategoryExtras extras={extras} />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 touch-none select-none p-0.5"
        >
          <ScrollArea.Thumb className="flex-1 rounded-full bg-foreground/20" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}

export function CategoryItems({ category, items, extras }: CategoryItemsProps) {
  return (
    <LanguageProvider>
      <CategoryItemsContent category={category} items={items} extras={extras} />
    </LanguageProvider>
  );
}
