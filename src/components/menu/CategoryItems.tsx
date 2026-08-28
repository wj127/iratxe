import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import type { Category } from '../../constants/categories';
import type { Item } from '../../constants/items';
import { CategoryPageHeader } from './CategoryPageHeader';
import { MenuItemRow } from './MenuItemRow';

type CategoryItemsProps = {
  category: Category;
  items: Item[];
};

export function CategoryItems({ category, items }: CategoryItemsProps) {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-mobile flex-col bg-background">
      <CategoryPageHeader title={category.name} />
      <ScrollArea.Root type="scroll" className="min-h-0 flex-1">
        <ScrollArea.Viewport className="size-full">
          <div className="flex flex-col gap-content p-page">
            <div className="flex flex-col gap-element-sm">
              <h1 className="font-display text-page-title font-bold text-foreground">
                {category.heading}
              </h1>
              <p className="font-ui text-menu-desc font-normal text-muted">{category.subtitle}</p>
            </div>
            {items.length === 0 ? (
              <p className="font-ui text-menu-desc text-muted">No hay artículos en esta categoría.</p>
            ) : (
              <div className="flex w-full flex-col">
                {items.map((item, index) => (
                  <div key={item.item_id}>
                    {index > 0 ? (
                      <Separator.Root decorative className="h-px w-full bg-border" />
                    ) : null}
                    <MenuItemRow item={item} />
                  </div>
                ))}
              </div>
            )}
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
