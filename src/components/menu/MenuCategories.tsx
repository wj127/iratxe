import * as ScrollArea from '@radix-ui/react-scroll-area';
import { type Category, type CategoryWithOptimizedImage } from '../../constants/categories';
import { MenuHeader } from './MenuHeader';
// import { DailyRecommendation } from './DailyRecommendation';
import { CategorySection } from './CategorySection';

const SECTIONS: { type: Category['type']; title: string }[] = [
  { type: 'drink', title: 'Drinks / Bebidas' },
  { type: 'food', title: 'Food / Comida' },
  { type: 'other', title: 'Otros / Others' },
];

export function MenuCategories({ categories }: { categories: CategoryWithOptimizedImage[] }) {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-mobile flex-col bg-background">
      <MenuHeader />
      <ScrollArea.Root type="scroll" className="min-h-0 flex-1">
        <ScrollArea.Viewport className="size-full">
          <div className="flex flex-col gap-section p-page">
            {SECTIONS.map(({ type, title }) => {
              const sectionCategories = categories.filter((category) => category.type === type);

              if (sectionCategories.length === 0) {
                return null;
              }

              return <CategorySection key={type} title={title} categories={sectionCategories} />;
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
