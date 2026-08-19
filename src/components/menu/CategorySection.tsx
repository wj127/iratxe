import type { Category } from '../../constants/categories';
import { CategoryCard } from './CategoryCard';

type CategorySectionProps = {
  title: string;
  categories: Category[];
};

export function CategorySection({ title, categories }: CategorySectionProps) {
  return (
    <section className="flex w-full flex-col gap-3">
      <h2 className="font-display text-section-heading font-bold text-foreground">{title}</h2>
      {categories.map((category) => (
        <CategoryCard key={category.category_id} category={category} />
      ))}
    </section>
  );
}
