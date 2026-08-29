import * as ScrollArea from '@radix-ui/react-scroll-area';
import { type Category, type CategoryWithOptimizedImage } from '../../constants/categories';
import { localizeCategory } from '../../i18n/content';
import { LanguageProvider, useLocale } from '../../i18n/LanguageContext';
import type { UIStringKey } from '../../i18n/ui';
import { MenuHeader } from './MenuHeader';
import { CategorySection } from './CategorySection';

const SECTIONS: { type: Category['type']; titleKey: UIStringKey }[] = [
  { type: 'drink', titleKey: 'sectionDrinks' },
  { type: 'food', titleKey: 'sectionFood' },
  { type: 'other', titleKey: 'sectionOther' },
];

function MenuCategoriesContent({ categories }: { categories: CategoryWithOptimizedImage[] }) {
  const { locale, translate } = useLocale();

  return (
    <div className="mx-auto flex h-dvh w-full max-w-mobile flex-col bg-background">
      <MenuHeader />
      <ScrollArea.Root type="scroll" className="min-h-0 flex-1">
        <ScrollArea.Viewport className="size-full">
          <div className="flex flex-col gap-section p-page">
            {SECTIONS.map(({ type, titleKey }) => {
              const sectionCategories = categories
                .filter((category) => category.type === type)
                .map((category) => localizeCategory(category, locale));

              if (sectionCategories.length === 0) {
                return null;
              }

              return (
                <CategorySection key={type} title={translate(titleKey)} categories={sectionCategories} />
              );
            })}
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

export function MenuCategories({ categories }: { categories: CategoryWithOptimizedImage[] }) {
  return (
    <LanguageProvider>
      <MenuCategoriesContent categories={categories} />
    </LanguageProvider>
  );
}
