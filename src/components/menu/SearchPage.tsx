import { useMemo, useState } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import { BOCADILLOS_CATEGORY_ID } from '../../constants/categories';
import { normalizeText } from '../../utils/helpers';
import { CategoryCard } from './CategoryCard';
import { ExtraRow } from './ExtraRow';
import { MenuItemRow } from './MenuItemRow';
import { SearchHeader } from './SearchHeader';
import type { SearchExtra, SearchPageProps } from './SearchPage.types';

export function SearchPage({ categories, items, extras }: SearchPageProps) {
  const [query, setQuery] = useState('');
  const normalizedQuery = normalizeText(query);

  const flatExtras = useMemo<SearchExtra[]>(() => {
    return extras.flatMap((group) => {
      const categoryName =
        categories.find((category) => category.category_id === group.category_id)?.name ?? '';

      return group.extras.map((extra) => ({
        modifier_id: extra.modifier_id,
        name: extra.name,
        price: extra.price,
        categoryName,
      }));
    });
  }, [categories, extras]);

  const { matchedCategories, matchedItems, matchedExtras } = useMemo(() => {
    if (normalizedQuery.length === 0) {
      return { matchedCategories: [], matchedItems: [], matchedExtras: [] };
    }

    const matchedCategories = categories.filter((category) =>
      [category.name, category.heading, category.subtitle].some((field) =>
        normalizeText(field).includes(normalizedQuery),
      ),
    );

    const matchedItems = items
      .filter((item) =>
        [item.name, item.description].some((field) =>
          normalizeText(field).includes(normalizedQuery),
        ),
      )
      .sort((a, b) => a.name.localeCompare(b.name, 'es'));

    const matchedExtras = flatExtras.filter((extra) =>
      normalizeText(extra.name).includes(normalizedQuery),
    );

    return { matchedCategories, matchedItems, matchedExtras };
  }, [normalizedQuery, categories, items, flatExtras]);

  const hasQuery = normalizedQuery.length > 0;
  const hasResults =
    matchedCategories.length > 0 || matchedItems.length > 0 || matchedExtras.length > 0;

  return (
    <div className="mx-auto flex h-dvh w-full max-w-mobile flex-col bg-background">
      <SearchHeader value={query} onChange={setQuery} />
      <ScrollArea.Root type="scroll" className="min-h-0 flex-1">
        <ScrollArea.Viewport className="size-full">
          <div className="flex flex-col gap-section p-page">
            {!hasQuery ? (
              <p className="font-ui text-menu-desc font-normal text-muted">
                Escribe para buscar en categorías, artículos y extras.
              </p>
            ) : null}

            {hasQuery && !hasResults ? (
              <p className="font-ui text-menu-desc font-normal text-muted">
                No hay resultados para “{query.trim()}”.
              </p>
            ) : null}

            {matchedCategories.length > 0 ? (
              <section className="flex w-full flex-col gap-3">
                <h2 className="font-display text-section-heading font-bold text-foreground">
                  Categorías
                </h2>
                {matchedCategories.map((category) => (
                  <CategoryCard key={category.category_id} category={category} />
                ))}
              </section>
            ) : null}

            {matchedItems.length > 0 ? (
              <section className="flex w-full flex-col gap-3">
                <h2 className="font-display text-section-heading font-bold text-foreground">
                  Artículos
                </h2>
                <div className="flex w-full flex-col">
                  {matchedItems.map((item, index) => (
                    <div key={item.item_id}>
                      {index > 0 ? (
                        <Separator.Root decorative className="h-px w-full bg-border" />
                      ) : null}
                      <MenuItemRow
                        item={item}
                        isBocadillos={item.category_ids.includes(BOCADILLOS_CATEGORY_ID)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {matchedExtras.length > 0 ? (
              <section className="flex w-full flex-col gap-3">
                <h2 className="font-display text-section-heading font-bold text-foreground">
                  Extras
                </h2>
                {matchedExtras.map((extra) => (
                  <ExtraRow
                    key={extra.modifier_id}
                    name={extra.name}
                    price={extra.price}
                    categoryName={extra.categoryName}
                  />
                ))}
              </section>
            ) : null}
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
